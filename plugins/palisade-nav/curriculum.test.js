import test from "node:test"
import assert from "node:assert/strict"
import { readFileSync, existsSync } from "node:fs"
import { render } from "preact-render-to-string"
import { parse } from "yaml"
import { curriculumTree } from "./curriculum.js"
import { PalisadeNav } from "./index.js"

const courses = JSON.parse(readFileSync(new URL("./courses.json", import.meta.url)))
const curriculum = JSON.parse(readFileSync(new URL("./curriculum.json", import.meta.url)))
const tree = curriculumTree(courses, curriculum)
const flatten = (nodes) => nodes.flatMap((node) => [node, ...flatten(node.children ?? [])])

test("all six curricula have every ordered topic, unit exam, syllabus, and final variant", () => {
  assert.deepEqual(
    courses.map((course) => curriculum[course.slug].units.length),
    [12, 12, 14, 15, 15, 15],
  )
  assert.equal(flatten(tree).length, 866)
  const paths = new Set()
  for (const node of flatten(tree)) {
    assert.ok(!paths.has(node.path), `duplicate route: ${node.path}`)
    paths.add(node.path)
    const file = new URL(`../../content/${node.path}/index.md`, import.meta.url)
    assert.ok(existsSync(file), `missing page: ${node.path}`)
    const markdown = readFileSync(file, "utf8")
    const [, frontmatter, body] = markdown.split("---")
    const meta = parse(frontmatter)
    if (meta.placeholder === true) assert.equal(meta.trackable, false)
    if (meta.placeholder === true && ["article", "syllabus", "examination"].includes(meta.kind)) {
      assert.equal(
        body.replace(/<!--[\s\S]*?-->/g, "").trim(),
        "",
        `authored content in ${node.path}`,
      )
    } else if (["article", "syllabus", "examination"].includes(meta.kind) && meta.draft !== true) {
      assert.ok(body.trim(), `published content must not be empty: ${node.path}`)
    }
  }
  for (const course of courses) {
    for (const unit of curriculum[course.slug].units) {
      assert.deepEqual(
        unit.topics.map((topic) => topic.number),
        Array.from({ length: 8 }, (_, i) => `${unit.number}.${i + 1}`),
      )
    }
  }
})

test("a deep-linked topic opens its ancestors and marks only its own link current", () => {
  const unit = curriculum.precalculus.units[0]
  const path = `courses/precalculus/units/${unit.slug}/${unit.topics[0].slug}`
  const Nav = PalisadeNav()
  const html = render(
    Nav({
      fileData: { slug: `${path}/index` },
      allFiles: [],
      cfg: { baseUrl: "example.com/Palisade" },
    }),
  )
  assert.match(html, /data-path="courses\/precalculus" data-loaded="true"/)
  assert.ok(html.includes(`data-path="courses/precalculus/units/${unit.slug}" data-loaded="true"`))
  assert.equal((html.match(/aria-current="page"/g) ?? []).length, 1)
  assert.ok(html.includes(`/${path}/`))
  assert.ok(
    !html
      .split('<div id="palisade-progress-data"')[0]
      .includes(curriculum["calculus-iii"].units[0].topics[0].title),
    "closed courses should not render all topic links",
  )
})

test("empty curriculum articles cannot be marked complete, even if trackable is mistakenly set", () => {
  const Nav = PalisadeNav()
  const html = render(
    Nav({
      fileData: { slug: "courses/precalculus/index", frontmatter: { progressId: "empty" } },
      allFiles: [
        {
          frontmatter: {
            course: "1.1",
            kind: "article",
            placeholder: true,
            trackable: true,
            progressId: "empty",
          },
        },
      ],
      cfg: { baseUrl: "example.com/Palisade" },
    }),
  )
  assert.ok(html.includes("available"), "planned requirements remain in the denominator")
  assert.ok(!html.includes('id="mark-article"'))
})
