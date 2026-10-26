import test from "node:test"
import assert from "node:assert/strict"
import { runInNewContext } from "node:vm"
import { readFileSync } from "node:fs"
import { render } from "preact-render-to-string"
import { parse } from "yaml"
import { createProgressRegistry } from "./progress-registry.js"
import { summarizeProgress, createCompletionStore } from "./completion.js"
import { initializeProgress } from "./progress.js"
import { PalisadeNav } from "./index.js"
import { CompletionControl } from "./completion-control.js"

const courses = [{ code: "future", slug: "abstract-algebra", title: "Abstract Algebra" }]
const unit = { number: 1, slug: "01-groups", title: "Groups", topics: [] }
const curriculum = {
  "abstract-algebra": { units: [unit, { ...unit, number: 2, slug: "02-rings", title: "Rings" }] },
}
const base = "courses/abstract-algebra"
const page = (name, meta = {}) => ({
  slug: `${base}/units/01-groups/${name}/index`,
  frontmatter: { course: "future", unit: "01", kind: "article", title: name, ...meta },
})
const final = (variant) => ({
  slug: `${base}/examinations/final-${variant}/index`,
  frontmatter: { course: "future", kind: "examination", title: `Final ${variant}` },
})
const files = [
  page("topic", { progressId: "legacy-article" }),
  page("examination", { kind: "examination" }),
  final("a"),
  final("b"),
]
const registry = () => createProgressRegistry(courses, curriculum, files)
const key = "palisade:example.com/Palisade:progress:v1"

function memoryStorage(initial = {}) {
  const values = new Map([[key, JSON.stringify(initial)]])
  return {
    values,
    getItem: (name) => values.get(name) ?? null,
    setItem: (name, value) => values.set(name, value),
    removeItem: (name) => values.delete(name),
  }
}

test("new courses, units, topics and examination variants are discovered without engine edits", () => {
  const first = registry()
  assert.equal(first.courses.length, 1)
  assert.equal(first.courses[0].units.length, 2)
  assert.equal(first.items.length, 4)
  assert.equal(first.items.filter((item) => item.unit === "01-groups").length, 2)
  assert.equal(first.items.filter((item) => item.unit === null).length, 2)
  assert.notEqual(first.items[2].id, first.items[3].id)
  const expanded = createProgressRegistry(
    courses,
    {
      "abstract-algebra": {
        units: [...curriculum["abstract-algebra"].units, { ...unit, number: 3, slug: "03-fields" }],
      },
    },
    [...files, page("new-topic"), page("fields", { unit: 3 })],
  )
  assert.equal(expanded.courses[0].units.length, 3)
  assert.equal(expanded.items.length, 6)
  assert.equal(expanded.items.at(-1).unit, "03-fields")
  const more = createProgressRegistry(
    [...courses, { code: "next", slug: "next", title: "Next" }],
    curriculum,
    files,
  )
  assert.equal(more.courses.length, 2)
  assert.deepEqual(more.courses[1].units, [])
})

test("publication flags, placeholders, opt-outs, and non-content pages never count", () => {
  const excluded = [
    { draft: true },
    { placeholder: true, trackable: true },
    { unlisted: true },
    { publish: false },
    { published: false },
    { trackable: false },
    ...["course", "unit", "syllabus", "collection", "practice"].map((kind) => ({ kind })),
  ]
  const result = createProgressRegistry(courses, curriculum, [
    ...excluded.map((meta, i) => page(`excluded-${i}`, meta)),
    page("published"),
  ])
  assert.equal(result.items.length, 1)
  assert.equal(result.items[0].title, "published")
})

test("membership uses explicit metadata or exact curriculum paths, never title substrings", () => {
  const moved = page("moved", { unit: "02-rings", progressId: "stable" })
  moved.slug = "elsewhere/renamed/index"
  const inferred = page("inferred")
  delete inferred.frontmatter.course
  delete inferred.frontmatter.unit
  const result = createProgressRegistry(courses, curriculum, [moved, inferred])
  assert.equal(result.items[0].unit, "02-rings")
  assert.equal(result.items[1].unit, "01-groups")
  assert.throws(
    () => createProgressRegistry(courses, curriculum, [page("bad", { unit: 99 })]),
    /unit/,
  )
  assert.throws(
    () => createProgressRegistry(courses, curriculum, [page("bad", { course: "unknown" })]),
    /Unknown course/,
  )
  const invalidExam = {
    slug: `${base}/units/unknown/examination/index`,
    frontmatter: { kind: "examination" },
  }
  assert.throws(
    () => createProgressRegistry(courses, curriculum, [invalidExam]),
    /examination's unit/,
  )
})

test("stable legacy IDs survive moves and titles, and duplicate or invalid identities fail the build", () => {
  const moved = page("new-title", { progressId: "legacy-article" })
  moved.slug = "renamed/content/index"
  const result = createProgressRegistry(courses, curriculum, [moved])
  assert.equal(result.items[0].id, "legacy-article")
  assert.equal(summarizeProgress(result.items, { "legacy-article": true }, "future").percent, 100)
  assert.throws(() => createProgressRegistry(courses, curriculum, [files[0], moved]), /Duplicate/)
  assert.throws(
    () => createProgressRegistry(courses, curriculum, [files[0], files[0]]),
    /Duplicate/,
  )
  for (const progressId of ["", " spaced ", 123]) {
    assert.throws(
      () => createProgressRegistry(courses, curriculum, [page("bad", { progressId })]),
      /progressId/,
    )
  }
})

test("unit and course math includes unit exams, independent finals, and ignores stale records", () => {
  const { items } = registry()
  const saved = { [items[0].id]: true, [items[1].id]: true, [items[2].id]: true, retired: true }
  assert.deepEqual(summarizeProgress(items, saved, "future", "01-groups"), {
    completed: 2,
    total: 2,
    percent: 100,
  })
  assert.deepEqual(summarizeProgress(items, saved, "future"), {
    completed: 3,
    total: 4,
    percent: 75,
  })
  saved[items[3].id] = true
  assert.equal(summarizeProgress(items, saved, "future").percent, 100)
  delete saved[items[1].id]
  assert.equal(summarizeProgress(items, saved, "future", "01-groups").percent, 50)
  assert.deepEqual(summarizeProgress(items, saved, "future", "02-rings"), {
    completed: 0,
    total: 0,
    percent: null,
  })
  assert.equal(summarizeProgress([], saved, "empty").percent, null)
  assert.equal(summarizeProgress([...items, ...items], saved, "future").total, 4)
  assert.ok(
    Math.abs(summarizeProgress(items.slice(0, 3), saved, "future").percent - 200 / 3) < 1e-10,
  )
})

test("storage toggles binary records, preserves namespace and retired records, and reloads", () => {
  const storage = memoryStorage({ "legacy-article": true, retired: true, oldFalse: false })
  const store = createCompletionStore(() => storage, key)
  assert.equal(store.read().available, true)
  assert.equal(store.toggle("legacy-article").records["legacy-article"], undefined)
  for (let i = 0; i < 5; i++) store.toggle("new")
  const saved = JSON.parse(storage.getItem(key))
  assert.equal(saved.new, true)
  assert.equal(Object.keys(saved).filter((id) => id === "new").length, 1)
  assert.equal(saved.retired, true)
  assert.equal(saved.oldFalse, false)
  const reloaded = createCompletionStore(() => storage, key)
  assert.equal(reloaded.read().records.new, true)
  assert.equal(storage.values.size, 1, "availability probes are removed")
  store.toggle("__proto__")
  assert.equal(JSON.parse(storage.getItem(key))["__proto__"], true)
})

test("writes merge other tabs' saved state and never expose a failed completion", () => {
  const storage = memoryStorage()
  const store = createCompletionStore(() => storage, key)
  store.read()
  storage.setItem(key, JSON.stringify({ otherTab: true }))
  assert.deepEqual(store.toggle("mine").records, { otherTab: true, mine: true })
  const originalWrite = storage.setItem
  storage.setItem = (name, value) => {
    if (name === key) throw new Error("Quota exceeded")
    originalWrite(name, value)
  }
  const state = store.toggle("unsaved")
  assert.equal(state.available, false)
  assert.equal(state.records.unsaved, undefined)
  assert.equal(JSON.parse(storage.getItem(key)).unsaved, undefined)
  assert.match(state.message, /not saved/)
})

test("blocked, read-only, quota-full and corrupt storage disable writes without resetting progress", () => {
  const denied = createCompletionStore(() => {
    throw new Error("SecurityError")
  }, key)
  assert.equal(denied.read().available, false)
  assert.equal(denied.toggle("no").records.no, undefined)
  const readOnly = memoryStorage({ legacy: true })
  readOnly.setItem = () => {
    throw new Error("Read only")
  }
  const state = createCompletionStore(() => readOnly, key).read()
  assert.equal(state.available, false)
  assert.equal(state.records.legacy, true)
  for (const invalid of ["{broken", "[]", "null", "true"]) {
    const storage = memoryStorage()
    storage.values.set(key, invalid)
    const store = createCompletionStore(() => storage, key)
    assert.equal(store.toggle("no").available, false)
    assert.equal(storage.getItem(key), invalid)
  }
})

// Minimal DOM surface for the browser controller. It deliberately models node
// identity and event listeners, so rebuilding meters or binding stale toggles
// is observable without adding a DOM library to the static site's dependencies.
class Element {
  constructor(tag) {
    this.tagName = tag
    this.children = []
    this.dataset = {}
    this.style = {}
    this.attributes = new Map()
    this.className = ""
    this.classList = {
      toggle: (name, on) => {
        const names = new Set(this.className.split(" "))
        if (on) names.add(name)
        else names.delete(name)
        this.className = [...names].join(" ")
      },
    }
  }
  set textContent(text) {
    this.text = text
    this.children = []
  }
  get textContent() {
    return (this.text ?? "") + this.children.map((child) => child.textContent).join("")
  }
  setAttribute(name, value) {
    this.attributes.set(name, String(value))
  }
  getAttribute(name) {
    return this.attributes.get(name) ?? null
  }
  removeAttribute(name) {
    this.attributes.delete(name)
  }
  append(...nodes) {
    this.children.push(...nodes)
  }
  replaceChildren(...nodes) {
    this.text = ""
    this.children = nodes
  }
}
function eventTarget() {
  const listeners = new Map()
  return {
    addEventListener: (name, fn) => listeners.set(name, [...(listeners.get(name) ?? []), fn]),
    dispatch: (name, event = {}) => (listeners.get(name) ?? []).forEach((fn) => fn(event)),
  }
}
function browser(storage = memoryStorage(), model = registry()) {
  const root = new Element("body")
  const nodes = () => {
    const walk = (node) => [node, ...node.children.flatMap(walk)]
    return walk(root)
  }
  const document = {
    ...eventTarget(),
    createElement: (tag) => new Element(tag),
    getElementById: (id) => nodes().find((node) => node.getAttribute("id") === id),
    querySelectorAll: (selector) =>
      nodes().filter(
        (node) => selector.startsWith(".") && node.className.split(" ").includes(selector.slice(1)),
      ),
    querySelector: (selector) => document.querySelectorAll(selector)[0] ?? null,
  }
  const window = { ...eventTarget(), localStorage: storage }
  function mount(id = model.items[0]?.id) {
    const data = new Element("div")
    data.setAttribute("id", "palisade-progress-data")
    data.dataset = {
      items: JSON.stringify(model.items),
      courses: JSON.stringify(model.courses),
      storageKey: key,
      currentId: id,
    }
    const button = new Element("button")
    button.setAttribute("id", "mark-article")
    const status = new Element("p")
    status.setAttribute("id", "completion-status")
    const dashboard = new Element("div")
    dashboard.className = "progress-dashboard"
    const course = new Element("div")
    course.className = "course-progress"
    course.dataset.course = "future"
    root.replaceChildren(data, dashboard, course, button, status)
    return button
  }
  const button = mount()
  return { document, window, mount, button, storage }
}
const start = (env) =>
  initializeProgress(env.document, env.window, summarizeProgress, createCompletionStore)

test("newly published topics and both exam types get native, accessible completion controls", () => {
  const existingCourses = JSON.parse(readFileSync(new URL("./courses.json", import.meta.url)))
  const existingCurriculum = JSON.parse(readFileSync(new URL("./curriculum.json", import.meta.url)))
  const course = existingCourses[0]
  const actualUnit = existingCurriculum[course.slug].units[0]
  const pages = [
    {
      slug: `courses/${course.slug}/units/${actualUnit.slug}/new/index`,
      frontmatter: { kind: "article", course: course.code, unit: actualUnit.number },
    },
    {
      slug: `courses/${course.slug}/units/${actualUnit.slug}/examination/index`,
      frontmatter: { kind: "examination", course: course.code, unit: actualUnit.number },
    },
    {
      slug: `courses/${course.slug}/examinations/final-a/index`,
      frontmatter: { kind: "examination", course: course.code },
    },
  ]
  const Nav = PalisadeNav()
  for (const fileData of pages) {
    const navigation = render(
      Nav({ fileData, allFiles: pages, cfg: { baseUrl: "example.com/Palisade" } }),
    )
    assert.ok(!navigation.includes('id="mark-article"'))
    assert.match(navigation, /data-storage-key="palisade:example.com\/Palisade:progress:v1"/)
    const html = render(CompletionControl({ fileData, allFiles: pages }))
    assert.match(html, /<button id="mark-article" type="button"/)
    assert.match(html, /aria-pressed="false"/)
    assert.match(html, /aria-describedby="completion-status"/)
    assert.match(html, />All done<\/button>/)
  }
  const landing = { slug: `courses/${course.slug}/index`, frontmatter: { progressId: "shared" } }
  assert.ok(
    !render(Nav({ fileData: landing, allFiles: pages, cfg: {} })).includes('id="mark-article"'),
  )
})

test("All done / Undo persist immediately, refresh meters, and keep their DOM identity for transitions", () => {
  const env = browser()
  start(env)
  const button = env.button
  const bar = env.document.querySelector(".dither-progress")
  const fill = env.document.querySelector(".dither-progress-fill")
  assert.equal(button.textContent, "All done")
  assert.equal(button.disabled, false)
  button.onclick()
  assert.equal(button.textContent, "Undo")
  assert.equal(button.getAttribute("aria-pressed"), "true")
  assert.equal(bar.getAttribute("role"), "progressbar")
  assert.match(bar.getAttribute("aria-label"), /overall progress/)
  assert.equal(bar.getAttribute("aria-valuemin"), "0")
  assert.equal(bar.getAttribute("aria-valuemax"), "100")
  assert.equal(bar.getAttribute("aria-valuenow"), "25")
  assert.match(bar.getAttribute("aria-valuetext"), /25%; 1 of 4 items complete/)
  assert.equal(fill.style.width, "25%")
  assert.equal(env.document.querySelector(".dither-progress-fill"), fill)
  button.onclick()
  assert.equal(button.textContent, "All done")
  assert.equal(button.getAttribute("aria-pressed"), "false")
  assert.equal(fill.style.width, "0%")
  assert.equal(JSON.parse(env.storage.getItem(key))["legacy-article"], undefined)
})

test("navigation, reload and cross-tab changes restore the correct page and update every view", () => {
  const storage = memoryStorage({ "legacy-article": true })
  const env = browser(storage)
  start(env)
  assert.equal(env.button.textContent, "Undo")
  // A client navigation may reuse the same hidden data node.
  env.document.getElementById("palisade-progress-data").dataset.currentId = registry().items[3].id
  env.document.dispatch("nav")
  assert.equal(env.button.textContent, "All done")
  env.button.onclick()
  assert.equal(env.button.textContent, "Undo")
  env.button.onclick()
  const finalButton = env.mount(registry().items[2].id)
  env.document.dispatch("nav")
  assert.equal(finalButton.textContent, "All done")
  finalButton.onclick()
  assert.equal(env.document.querySelector(".progress-percentage").textContent, "50%")
  const reload = browser(storage)
  start(reload)
  assert.equal(reload.button.textContent, "Undo")
  storage.setItem(key, JSON.stringify({ [registry().items[3].id]: true }))
  env.window.dispatch("storage", { key })
  assert.equal(finalButton.textContent, "All done")
  assert.equal(env.document.querySelector(".progress-percentage").textContent, "25%")
  assert.equal(
    env.document.querySelectorAll(".progress-examination-status")[1].textContent,
    "Complete",
  )
  storage.removeItem(key)
  env.window.dispatch("storage", { key: null })
  assert.equal(env.document.querySelector(".progress-percentage").textContent, "0%")
})

test("all registered courses and units render safe, explicit empty states", () => {
  const env = browser(memoryStorage(), createProgressRegistry(courses, curriculum, []))
  start(env)
  assert.equal(env.document.querySelectorAll(".progress-row").length, 1)
  assert.equal(env.document.querySelectorAll(".progress-unit").length, 2)
  for (const bar of env.document.querySelectorAll(".dither-progress")) {
    assert.equal(bar.hidden, true)
    assert.equal(bar.getAttribute("aria-valuenow"), null)
    assert.ok(!bar.getAttribute("aria-valuetext").includes("NaN"))
  }
  assert.match(
    env.document.querySelector(".progress-dashboard").textContent,
    /No published content yet/,
  )
  const none = browser(memoryStorage(), { courses: [], items: [] })
  start(none)
  assert.match(none.document.querySelector(".progress-dashboard").textContent, /No courses/)
})

test("storage failures disable controls and explain the unsaved change in every affected view", () => {
  const env = browser()
  start(env)
  env.storage.setItem = () => {
    throw new Error("Blocked")
  }
  env.button.onclick()
  assert.equal(env.button.disabled, true)
  assert.equal(env.button.textContent, "All done")
  assert.match(env.document.getElementById("completion-status").textContent, /not saved/)
  for (const status of env.document.querySelectorAll(".progress-storage-status")) {
    assert.equal(status.hidden, false)
    assert.equal(status.getAttribute("role"), "status")
    assert.match(status.textContent, /unavailable/)
  }
})

test("the actual Quartz inline resource runs without module imports or closure dependencies", () => {
  const env = browser()
  runInNewContext(PalisadeNav().afterDOMLoaded, { document: env.document, window: env.window })
  assert.equal(env.button.textContent, "All done")
  env.button.onclick()
  assert.equal(env.button.textContent, "Undo")
})

test("authoring templates give topics and both examination scopes stable progress IDs", () => {
  for (const filename of ["article.md", "examination.md", "final-examination.md"]) {
    const source = readFileSync(new URL(`../../templates/${filename}`, import.meta.url), "utf8")
    const meta = parse(source.split("---")[1])
    assert.equal(meta.draft, true)
    assert.ok(["article", "examination"].includes(meta.kind))
    assert.ok(meta.progressId)
    if (filename === "final-examination.md") assert.equal(meta.unit, undefined)
  }
})

test("only dashboard courses and units have independent native collapse controls", () => {
  const env = browser()
  start(env)
  const course = env.document.querySelector(".progress-row")
  const units = env.document.querySelectorAll(".progress-unit")
  assert.equal(course.tagName, "details")
  assert.equal(course.open, true)
  assert.equal(course.children[0].tagName, "summary")
  assert.equal(course.children[0].children[0].getAttribute("aria-hidden"), "true")
  assert.equal(course.children[0].children[1].tagName, "h2")
  for (const unit of units) {
    assert.equal(unit.tagName, "details")
    assert.equal(unit.open, true)
    assert.equal(unit.children[0].tagName, "summary")
    assert.equal(unit.children[0].children[1].tagName, "h3")
  }
  assert.equal(env.document.querySelectorAll(".progress-toggle").length, 1 + units.length)
  units[0].open = false
  course.open = false
  env.button.onclick()
  assert.equal(course.open, false, "completion updates preserve the course's collapsed state")
  assert.equal(units[0].open, false, "completion updates preserve the unit's collapsed state")
  assert.equal(units[1].open, true, "units toggle independently")
  course.open = true
  assert.equal(units[0].open, false, "reopening a course preserves its unit states")
  env.window.dispatch("storage", { key })
  assert.equal(units[0].open, false, "cross-tab refresh preserves collapse state")
})

test("Precalculus uses all 110 curriculum items, with nine equal-weight items per unit", () => {
  const allCourses = JSON.parse(readFileSync(new URL("./courses.json", import.meta.url)))
  const outline = JSON.parse(readFileSync(new URL("./curriculum.json", import.meta.url)))
  const first = outline.precalculus.units[0]
  const topic = {
    slug: `courses/precalculus/units/${first.slug}/${first.topics[0].slug}/index`,
    frontmatter: { kind: "article", course: "1.1", unit: "01", progressId: "existing-topic" },
  }
  const result = createProgressRegistry(allCourses, outline, [topic])
  const saved = { "existing-topic": true }
  const course = summarizeProgress(result.requirements, saved, "1.1")
  const unit = summarizeProgress(result.requirements, saved, "1.1", first.slug)
  assert.equal(course.total, 110)
  assert.equal(course.completed, 1)
  assert.equal(course.percent, 100 / 110)
  assert.equal(unit.total, 9)
  assert.equal(unit.completed, 1)
  assert.equal(unit.percent, 100 / 9)
  const finals = result.requirements.filter((i) => i.course === "1.1" && i.unit === null)
  assert.equal(finals.length, 2)
  assert.ok(finals.every((i) => i.kind === "examination" && i.available === false))
  // Pending requirements cannot gain completion through a stale storage record.
  saved[finals[0].id] = true
  assert.equal(summarizeProgress(result.requirements, saved, "1.1").completed, 1)
  // Publishing a final replaces its planned slot instead of adding another item.
  const published = createProgressRegistry(allCourses, outline, [
    topic,
    {
      slug: `${finals[0].path}/index`,
      frontmatter: { course: "1.1", kind: "examination", progressId: "final-a" },
    },
  ])
  saved["final-a"] = true
  assert.equal(summarizeProgress(published.requirements, saved, "1.1").total, 110)
  assert.equal(summarizeProgress(published.requirements, saved, "1.1").completed, 2)
  assert.equal(summarizeProgress(published.requirements, saved, "1.1", first.slug).completed, 1)
})
