import { createHash } from "node:crypto"
import { readFileSync } from "node:fs"
import { contentPath } from "./progress-registry.js"

const cache = new WeakMap()

// Pages caches HTML for ten minutes. Give each publication a distinct navigation
// URL so a cached empty curriculum page cannot hide a newly authored article.
// Source hashes cover links and math as well as visible prose. No timestamps or
// progress IDs are changed, and identical sources produce identical revisions.
export function getPublication(files = []) {
  if (!cache.has(files)) {
    const sources = files
      .map((file) => [
        file.slug === "index" ? "" : contentPath(file.slug),
        file.filePath
          ? readFileSync(file.filePath, "utf8")
          : JSON.stringify([file.frontmatter ?? {}, file.text ?? ""]),
      ])
      .sort(([a], [b]) => a.localeCompare(b))
    cache.set(files, {
      revision: createHash("sha256").update(JSON.stringify(sources)).digest("hex").slice(0, 12),
      paths: new Set(sources.map(([path]) => path)),
    })
  }
  return cache.get(files)
}

export function versionPageLink(href, slug, publication) {
  // Preserve anchors, external destinations, downloads, and unknown routes.
  if (!href || /^(#|\/|[a-z][a-z\d+.-]*:)/i.test(href)) return href
  const url = new URL(href, `https://palisade.invalid/${slug}`)
  const target = contentPath(decodeURIComponent(url.pathname).replace(/\.html$/, ""))
  if (!publication.paths.has(target)) return href
  url.searchParams.set("v", publication.revision)
  return `${href.split(/[?#]/, 1)[0]}${url.search}${url.hash}`
}

export function versionContentLinks(tree, slug, { allFiles = [] }) {
  const publication = getPublication(allFiles)
  function visit(node) {
    if (node.tagName === "a" && typeof node.properties?.href === "string") {
      node.properties.href = versionPageLink(node.properties.href, slug, publication)
    }
    node.children?.forEach(visit)
  }
  visit(tree)
}
