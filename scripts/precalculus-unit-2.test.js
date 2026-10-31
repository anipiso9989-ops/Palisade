import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync, existsSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { parse } from "yaml"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { VFile } from "vfile"
import { Latex } from "@quartz-community/latex"
import { createProgressRegistry } from "../plugins/palisade-nav/progress-registry.js"

const root = fileURLToPath(new URL("../", import.meta.url))
const curriculum = JSON.parse(readFileSync(resolve(root, "plugins/palisade-nav/curriculum.json")))
const courses = JSON.parse(readFileSync(resolve(root, "plugins/palisade-nav/courses.json")))
const unit = curriculum.precalculus.units[1]
const base = `content/courses/precalculus/units/${unit.slug}`
function read(path) {
  const source = readFileSync(resolve(root, path), "utf8")
  const [, frontmatter, ...parts] = source.split(/^---\s*$/m)
  return { path, source, meta: parse(frontmatter), body: parts.join("---") }
}
const articles = unit.topics.map((topic) => read(`${base}/${topic.slug}/index.md`))
const exam = read(`${base}/examination/index.md`)
const key = read(`${base}/examination/answer-key/index.md`)
const syllabus = read("content/courses/precalculus/syllabus/index.md")
const overview = read(`${base}/index.md`)
const landing = read("content/courses/precalculus/index.md")
const authored = [...articles, exam, key, syllabus, overview, landing]
const markdown = unified().use(remarkParse)
const children = (body) => markdown.parse(body).children
const text = (node) => node.value ?? node.children?.map(text).join("") ?? ""
function section(body, heading) {
  const nodes = children(body)
  const start = nodes.findIndex((node) => node.type === "heading" && text(node) === heading)
  assert.notEqual(start, -1, `missing heading: ${heading}`)
  let end = start + 1
  while (
    end < nodes.length &&
    !(nodes[end].type === "heading" && nodes[end].depth <= nodes[start].depth)
  )
    end++
  return nodes.slice(start + 1, end)
}
const count = (nodes) =>
  nodes.filter((node) => node.type === "list").reduce((n, list) => n + list.children.length, 0)

test("Unit 2: eight published articles retain syllabus order and exactly 6/6/6/2 practice problems", () => {
  assert.equal(articles.length, 8)
  articles.forEach((article, i) => {
    assert.equal(article.meta.topic, unit.topics[i].number)
    assert.equal(article.meta.title, `${unit.topics[i].number} — ${unit.topics[i].title}`)
    assert.equal(article.meta.progressId, `precalculus-unit-02-article-0${i + 1}`)
    for (const [difficulty, expected] of [
      ["Easy", 6],
      ["Medium", 6],
      ["Hard", 6],
      ["Olympiad", 2],
    ]) {
      assert.equal(
        count(section(article.body, difficulty)),
        expected,
        `${article.path}: ${difficulty}`,
      )
    }
    assert.equal(count(section(article.body, "Answers")), 20)
    const headings = children(article.body).filter((node) => node.type === "heading")
    assert.equal(text(headings.at(-1)), "Answers", "answers must be at the end")
    assert.ok(!headings.some((node) => /solutions/i.test(text(node))))
  })
})

test("Unit 2: the unit exam has exactly 30 Medium/Hard problems and a separate complete key", () => {
  assert.equal(count(section(exam.body, "Medium")), 15)
  assert.equal(count(section(exam.body, "Hard")), 15)
  assert.equal(count(section(key.body, "Medium: answers and checkpoints")), 15)
  assert.equal(count(section(key.body, "Hard: answers and checkpoints")), 15)
  assert.equal(key.meta.kind, "answer-key")
  assert.equal(key.meta.trackable, false)
  assert.ok(!/## (Answers|Solutions)/.test(exam.body))
  assert.match(exam.body, /untimed and self-paced/i)
  assert.match(exam.body, /270\/300 \(90%\)/)
})

test("Unit 2: the supplied syllabus topic order is preserved for the entire course and assessment overrides are explicit", () => {
  const topics = [...syllabus.body.matchAll(/^- (\d+\.\d+) — (.+?)\s*$/gm)].map(
    (match) => `${match[1]} — ${match[2]}`,
  )
  const expected = curriculum.precalculus.units.flatMap((entry) =>
    entry.topics.map((topic) => `${topic.number} — ${topic.title}`),
  )
  assert.deepEqual(topics, expected)
  assert.match(syllabus.body, /Algebra I, Algebra II, and Euclidean Geometry/)
  assert.match(syllabus.body, /Exactly 30 original/)
  assert.match(syllabus.body, /Exactly 45 original/)
  assert.ok(
    !/complete worked solution|120–180|240 minutes|10–15 problems|20–25 problems/.test(
      syllabus.body,
    ),
  )
})

test("Unit 2: published lessons and exam are trackable, while syllabus, overview and key are excluded", () => {
  for (const file of authored) {
    assert.notEqual(file.meta.draft, true, file.path)
    assert.notEqual(file.meta.placeholder, true, file.path)
    assert.equal(file.meta.course, "1.1")
  }
  const files = authored.map((file) => ({
    slug: file.path.replace(/^content\//, "").replace(/\.md$/, ""),
    frontmatter: file.meta,
  }))
  const registry = createProgressRegistry(courses, curriculum, files)
  assert.equal(registry.items.length, 9)
  assert.equal(registry.items.filter((item) => item.kind === "examination").length, 1)
  assert.ok(registry.items.every((item) => item.unit === unit.slug))
  assert.equal(new Set(registry.items.map((item) => item.id)).size, 9)
})

test("Unit 2: every relative link in the authored content resolves to a repository file", () => {
  function visit(node, file) {
    if (node.type === "link" && !/^(https?:|#)/.test(node.url)) {
      const target = resolve(root, dirname(file.path), node.url.split("#")[0])
      assert.ok(
        existsSync(target) || existsSync(resolve(target, "index.md")),
        `${file.path}: ${node.url}`,
      )
    }
    node.children?.forEach((child) => visit(child, file))
  }
  authored.forEach((file) => visit(markdown.parse(file.body), file))
})

test("Unit 2: all authored mathematics parses and renders through the site's actual KaTeX plugin", () => {
  const latex = Latex({
    renderEngine: "katex",
    katexOptions: { strict: "error", throwOnError: true },
  })
  const processor = unified()
    .use(remarkParse)
    .use(latex.markdownPlugins({}))
    .use(remarkRehype)
    .use(latex.htmlPlugins({}))
  let rendered = 0
  function inspect(node, file) {
    const classes = node.properties?.className ?? []
    assert.ok(!classes.includes("katex-error"), `math rendering error: ${file.path}`)
    if (classes.includes("katex")) rendered++
    node.children?.forEach((child) => inspect(child, file))
  }
  authored.forEach((file) => {
    const vfile = new VFile({ value: file.body, path: file.path })
    inspect(processor.runSync(processor.parse(vfile), vfile), file)
    assert.equal(vfile.messages.length, 0, `${file.path}: ${vfile.messages.map(String).join("; ")}`)
  })
  assert.ok(rendered > 500, `expected substantial rendered math, got ${rendered}`)
})

// Markdown list starts must match the numbering used in the final answer lists.
test("Unit 2: problem and answer numbering is continuous and answers are last", () => {
  for (const article of articles) {
    const sets = [
      ["Easy", 1, 6],
      ["Medium", 7, 6],
      ["Hard", 13, 6],
      ["Olympiad", 19, 2],
      ["Answers", 1, 20],
    ]
    for (const [heading, first, size] of sets) {
      const lists = section(article.body, heading).filter((node) => node.type === "list")
      assert.equal(lists.length, 1, article.path + ": " + heading)
      assert.equal(lists[0].start, first)
      assert.equal(lists[0].children.length, size)
    }
    assert.equal(children(article.body).at(-1).type, "list")
  }
  for (const file of [exam, key]) {
    const headings =
      file === exam
        ? ["Medium", "Hard"]
        : ["Medium: answers and checkpoints", "Hard: answers and checkpoints"]
    headings.forEach((heading, i) => {
      const lists = section(file.body, heading).filter((node) => node.type === "list")
      assert.equal(lists.length, 1)
      assert.equal(lists[0].start, i * 15 + 1)
    })
  }
})
