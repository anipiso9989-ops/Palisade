import assert from "node:assert/strict"
import { readFileSync, readdirSync } from "node:fs"
import { relative, resolve, join } from "node:path"
import { fileURLToPath } from "node:url"
import { fromHtml } from "hast-util-from-html"
import { parse } from "yaml"

const descendants = (node) => [node, ...(node.children ?? []).flatMap(descendants)]
const text = (node) => node.value ?? (node.children ?? []).map(text).join("")
const route = (path) => path.replace(/(^|\/)index(?:\.html)?$/, "").replace(/^\/+|\/+$/g, "")

export function checkPublishedContent(content = "content", output = "public") {
  function markdown(dir) {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) =>
      entry.isDirectory()
        ? markdown(join(dir, entry.name))
        : entry.name.endsWith(".md")
          ? [join(dir, entry.name)]
          : [],
    )
  }
  const files = markdown(content).map((path) => {
    const source = readFileSync(path, "utf8")
    const [, frontmatter] = source.split(/^---\s*$/m)
    return { path: relative(content, path).replaceAll("\\", "/"), meta: parse(frontmatter) ?? {} }
  })
  const paths = new Set(files.map((file) => route(file.path.replace(/\.md$/, ""))))
  const published = files.filter(
    ({ meta }) =>
      ["article", "examination"].includes(meta.kind) &&
      ![meta.placeholder, meta.draft, meta.unlisted].includes(true) &&
      meta.publish !== false &&
      meta.published !== false,
  )
  for (const file of published) {
    const html = readFileSync(resolve(output, file.path.replace(/\.md$/, ".html")), "utf8")
    const nodes = descendants(fromHtml(html))
    const articles = nodes.filter((node) => node.tagName === "article")
    assert.equal(articles.length, 1, `${file.path}: missing article body`)
    assert.ok(text(articles[0]).trim().length > 200, `${file.path}: blank published article`)
    const body = descendants(articles[0])
    if (file.meta.kind === "article") {
      for (const id of ["practice-problems", "easy", "medium", "hard", "olympiad", "answers"]) {
        assert.ok(
          body.some((node) => node.properties?.id === id),
          `${file.path}: missing ${id}`,
        )
      }
    }
    const nav = nodes.find((node) => node.properties?.dataPublication)
    assert.ok(nav, `${file.path}: missing publication version`)
    for (const node of nodes.filter((node) => node.tagName === "a")) {
      const href = node.properties?.href
      if (typeof href !== "string" || /^(#|\/|[a-z][a-z\d+.-]*:)/i.test(href)) continue
      const url = new URL(href, `https://palisade.invalid/${file.path.replace(/\.md$/, ".html")}`)
      if (paths.has(route(decodeURIComponent(url.pathname)))) {
        assert.equal(
          url.searchParams.get("v"),
          nav.properties.dataPublication,
          `${file.path}: unversioned page link ${href}`,
        )
      }
    }
  }
  assert.ok(published.length > 0, "no published course materials were checked")
  return published.length
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(
    `Verified ${checkPublishedContent()} published articles/exams: nonblank bodies, practice sections, versioned links.`,
  )
}
