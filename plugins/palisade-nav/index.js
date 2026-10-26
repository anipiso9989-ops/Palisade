import { h } from "preact"
import { readFileSync } from "node:fs"
import { curriculumTree } from "./curriculum.js"
import { contentPath, createProgressRegistry } from "./progress-registry.js"

const courses = JSON.parse(readFileSync(new URL("./courses.json", import.meta.url), "utf8"))
const curriculum = JSON.parse(readFileSync(new URL("./curriculum.json", import.meta.url), "utf8"))
const tree = curriculumTree(courses, curriculum)
// These modules are dependency-free; inline the same source tested in Node.
const progressSource = ["completion.js", "progress.js"]
  .map((file) => readFileSync(new URL(file, import.meta.url), "utf8"))
  .join("\n")
  .replace(/^export (?=function )/gm, "")
const progressScript = `;(() => {${progressSource}\ninitializeProgress(document, window, summarizeProgress, createCompletionStore)})();\n`
const clientScript =
  progressScript +
  ["world-map.js", "tree.js"]
    .map((file) => readFileSync(new URL(file, import.meta.url), "utf8"))
    .join("\n;\n")
    .replace("__CURRICULUM_TREE__", JSON.stringify(tree))
const rootOf = (slug) =>
  slug
    .split("/")
    .slice(0, -1)
    .map(() => "..")
    .join("/") || "."

export const PalisadeNav = () => {
  const registries = new WeakMap()
  const Nav = ({ fileData, allFiles, cfg }) => {
    const root = rootOf(fileData.slug)
    const current = fileData.slug.replace(/\/index$/, "")
    const link = (url, title, extra = {}) =>
      h(
        "a",
        {
          href: `${root}/${url}${url ? "/" : ""}`,
          class: "palisade-nav-link internal",
          "aria-current":
            current === url || (url === "" && current === "index") ? "page" : undefined,
          ...extra,
        },
        title,
      )
    const isAncestor = (path) => current === path || current.startsWith(`${path}/`)
    const chevron = () =>
      h(
        "svg",
        {
          class: "tree-chevron",
          viewBox: "0 0 16 16",
          width: 16,
          height: 16,
          "aria-hidden": "true",
        },
        h("path", { d: "m6 3 5 5-5 5", fill: "none", stroke: "currentColor", "stroke-width": 1.5 }),
      )
    const renderTree = (nodes) =>
      nodes.map((node) => {
        const anchor = link(node.path, node.title, { class: "tree-link internal" })
        if (!node.children) return anchor
        const active = isAncestor(node.path)
        return h(
          "details",
          {
            class: "tree-branch",
            open: active,
            "data-path": node.path,
            "data-loaded": String(active),
          },
          h("summary", {}, chevron(), anchor),
          h("div", { class: "tree-children" }, active ? renderTree(node.children) : null),
        )
      })
    if (!registries.has(allFiles)) {
      const registry = createProgressRegistry(courses, curriculum, allFiles)
      registries.set(allFiles, {
        items: JSON.stringify(registry.items),
        courses: JSON.stringify(registry.courses),
        byPath: new Map(registry.items.map((item) => [item.path, item.id])),
      })
    }
    const registry = registries.get(allFiles)
    const activeId = registry.byPath.get(contentPath(fileData.slug))
    return h(
      "div",
      { class: "palisade-navigation" },
      h("a", { class: "site-name", href: `${root}/` }, "Palisade"),
      h(
        "nav",
        { "aria-label": "Primary navigation", class: "palisade-primary" },
        link("", "Home"),
        link("about", "Philosophy"),
        link("progress", "Progress"),
      ),
      h(
        "details",
        { class: "curriculum-panel", open: true },
        h("summary", { class: "curriculum-toggle" }, chevron(), "Courses"),
        h(
          "nav",
          {
            "aria-label": "Course navigation",
            class: "palisade-courses",
            "data-tree-root": root,
            "data-current": current,
          },
          ...renderTree(tree),
        ),
      ),
      h("div", {
        id: "palisade-progress-data",
        hidden: true,
        "data-items": registry.items,
        "data-courses": registry.courses,
        "data-current-id": activeId || "",
        "data-storage-key": `palisade:${cfg.baseUrl}:progress:v1`,
      }),
      activeId
        ? h(
            "div",
            { class: "article-completion" },
            h(
              "button",
              {
                id: "mark-article",
                type: "button",
                disabled: true,
                "aria-pressed": "false",
                "aria-describedby": "completion-status",
              },
              "All done",
            ),
            h(
              "p",
              { id: "completion-status", role: "status" },
              "Enable JavaScript to save progress.",
            ),
          )
        : null,
    )
  }
  Nav.beforeDOMLoaded = 'document.documentElement.setAttribute("saved-theme", "dark")'
  Nav.afterDOMLoaded = clientScript
  return Nav
}

export { default } from "./authored-page.js"
