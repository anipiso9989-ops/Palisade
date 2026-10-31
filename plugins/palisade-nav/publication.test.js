import test from "node:test"
import assert from "node:assert/strict"
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { runInNewContext } from "node:vm"
import { render } from "preact-render-to-string"
import { getPublication, versionPageLink } from "./publication.js"
import createPage from "./authored-page.js"
import { PalisadeNav } from "./index.js"

const unit = "courses/precalculus/units/02-algebraic-structures-and-inequalities"
const topic = `${unit}/01-algebraic-operations-and-structural-identities`
const article = {
  slug: `${topic}/index`,
  frontmatter: {
    kind: "article",
    course: "1.1",
    unit: "02",
    progressId: "precalculus-unit-02-article-01",
  },
  text: "Algebra preserves structure",
}

test("publishing an article changes its navigation URL while preserving its route and identity", () => {
  const placeholder = {
    ...article,
    text: "",
    frontmatter: { ...article.frontmatter, placeholder: true },
  }
  const before = getPublication([placeholder])
  const after = getPublication([article])
  const href = "./01-algebraic-operations-and-structural-identities/"
  const oldURL = versionPageLink(href, `${unit}/index`, before)
  const newURL = versionPageLink(href, `${unit}/index`, after)
  assert.notEqual(newURL, oldURL, "a cached empty response must not be reused")
  assert.equal(new URL(newURL, `https://example.test/${unit}/`).pathname, `/${topic}/`)
  assert.equal(article.frontmatter.progressId, "precalculus-unit-02-article-01")
  assert.match(newURL, /\?v=[a-f0-9]{12}$/)
  assert.equal(getPublication([article]).revision, after.revision, "unchanged builds stay stable")
})

test("publication fingerprints include raw source edits to formulas and destinations", () => {
  const dir = mkdtempSync(join(tmpdir(), "palisade-publication-"))
  try {
    const filePath = join(dir, "index.md")
    const file = { ...article, filePath }
    writeFileSync(filePath, "Formula $x^2$. [Next](../old/)")
    const first = getPublication([file]).revision
    writeFileSync(filePath, "Formula $x^3$. [Next](../old/)")
    const second = getPublication([file]).revision
    writeFileSync(filePath, "Formula $x^3$. [Next](../new/)")
    const third = getPublication([file]).revision
    assert.notEqual(first, second)
    assert.notEqual(second, third)
    assert.equal(getPublication([file]).revision, third)
    const other = { slug: "about/index", text: "About" }
    assert.equal(getPublication([file, other]).revision, getPublication([other, file]).revision)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
})

test("content links retain fragments and other query parameters, leaving external links and assets alone", () => {
  const files = [article, { slug: `${unit}/index`, text: "Unit overview" }]
  const publication = getPublication(files)
  const href = "../?view=all&v=old#practice"
  assert.equal(
    versionPageLink(href, article.slug, publication),
    `../?view=all&v=${publication.revision}#practice`,
  )
  for (const untouched of [
    "#answers",
    "https://example.com/",
    "//example.com/",
    "mailto:a@example.com",
    "./figure.svg",
    "../unknown/",
  ]) {
    assert.equal(versionPageLink(untouched, article.slug, publication), untouched)
  }
  const tree = { type: "root", children: [{ tagName: "a", properties: { href }, children: [] }] }
  const [transform] = createPage().treeTransforms()
  transform(tree, article.slug, { allFiles: files })
  assert.equal(tree.children[0].properties.href, `../?view=all&v=${publication.revision}#practice`)
})

test("server-rendered and lazily expanded course links use the same publication revision", () => {
  const files = [article]
  const { revision } = getPublication(files)
  const Nav = PalisadeNav()
  const html = render(
    Nav({ fileData: article, allFiles: files, cfg: { baseUrl: "example.test/Palisade" } }),
  )
  assert.ok(html.includes(`/${topic}/?v=${revision}`))
  assert.ok(html.includes(`data-publication="${revision}"`))
  const links = []
  let expand
  const branch = {
    open: true,
    dataset: { path: unit, loaded: "false" },
    matches: () => true,
    querySelector: () => ({ append() {} }),
  }
  const nav = {
    dataset: { treeRoot: "../..", current: "elsewhere", publication: revision },
    closest: () => ({}),
    addEventListener: (_, fn) => {
      expand = fn
    },
    removeEventListener() {},
  }
  const document = {
    querySelector: () => nav,
    addEventListener() {},
    createElement: (tag) => {
      const node = { dataset: {}, setAttribute() {}, append() {} }
      if (tag === "a") links.push(node)
      return node
    },
    createElementNS: () => ({ setAttribute() {}, append() {} }),
  }
  const source = readFileSync(new URL("./tree.js", import.meta.url), "utf8").replace(
    "__CURRICULUM_TREE__",
    JSON.stringify([{ path: unit, children: [{ path: topic, title: "2.1" }] }]),
  )
  runInNewContext(source, {
    document,
    matchMedia: () => ({ matches: false, addEventListener() {}, removeEventListener() {} }),
  })
  expand({ target: branch })
  assert.equal(links[0].href, `../../${topic}/?v=${revision}`)
  assert.equal(branch.dataset.loaded, "true")
})
