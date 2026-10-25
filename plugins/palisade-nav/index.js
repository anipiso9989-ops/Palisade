import { h } from "preact"
import { readFileSync } from "node:fs"

const courses = JSON.parse(readFileSync(new URL("./courses.json", import.meta.url), "utf8"))
const clientScript = ["progress.js", "world-map.js"]
  .map((file) => readFileSync(new URL(file, import.meta.url), "utf8"))
  .join("\n;\n")
const rootOf = (slug) =>
  slug
    .split("/")
    .slice(0, -1)
    .map(() => "..")
    .join("/") || "."

export const PalisadeNav = () => {
  const Nav = ({ fileData, allFiles, cfg }) => {
    const root = rootOf(fileData.slug)
    const current = fileData.slug.replace(/\/index$/, "")
    const link = (url, title, extra = {}) =>
      h(
        "a",
        {
          href: `${root}/${url}`,
          class: "palisade-nav-link internal",
          "aria-current":
            current === url || (url === "" && current === "index") ? "page" : undefined,
          ...extra,
        },
        title,
      )
    const items = allFiles
      .filter(
        (f) =>
          f.frontmatter?.trackable === true &&
          f.frontmatter?.kind === "article" &&
          f.frontmatter?.draft !== true &&
          f.frontmatter?.unlisted !== true &&
          f.frontmatter?.publish !== false &&
          courses.some((c) => c.code === String(f.frontmatter?.course)),
      )
      .map((f) => ({ id: f.frontmatter.progressId, course: String(f.frontmatter.course) }))
    const ids = items.map((i) => i.id)
    if (
      ids.some((id) => typeof id !== "string" || !id.trim()) ||
      new Set(ids).size !== ids.length
    ) {
      throw new Error("Every published trackable article needs a unique, nonempty progressId.")
    }
    const activeId = items.find((i) => i.id === fileData.frontmatter?.progressId)?.id
    return h(
      "div",
      { class: "palisade-navigation" },
      h(
        "a",
        { class: "palisade-brand", href: `${root}/`, "aria-label": "Palisade home" },
        h(
          "svg",
          { viewBox: "0 0 48 48", "aria-hidden": "true", width: 40, height: 40 },
          h("path", {
            d: "M10 38V10h16a10 10 0 0 1 0 20H10 M18 38V18h8a2 2 0 0 1 0 4h-8",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 1.6,
            "stroke-linejoin": "round",
          }),
        ),
        h("span", {}, "Palisade", h("small", {}, "MATHEMATICS")),
      ),
      h(
        "nav",
        { "aria-label": "Primary navigation", class: "palisade-primary" },
        link("", "Overview"),
        link("about", "Philosophy"),
        link("progress", "Your progress"),
      ),
      h(
        "nav",
        { "aria-label": "Course navigation", class: "palisade-courses" },
        h("p", { class: "nav-label" }, "THE CURRICULUM"),
        ...courses.map((c) =>
          link(`courses/${c.slug}`, [
            h("span", { class: "nav-code" }, c.code),
            h("span", {}, c.title),
          ]),
        ),
      ),
      h(
        "div",
        { class: "palisade-sidebar-note" },
        h("span", { class: "sidebar-rule" }),
        h("p", {}, "The discipline to go deeper."),
        h("small", {}, "FREE · SELF-PACED · TEXT-FIRST"),
      ),
      h("div", {
        id: "palisade-progress-data",
        hidden: true,
        "data-items": JSON.stringify(items),
        "data-courses": JSON.stringify(courses),
        "data-current-id": activeId || "",
        "data-storage-key": `palisade:${cfg.baseUrl}:progress:v1`,
      }),
      activeId
        ? h(
            "div",
            { class: "article-completion" },
            h(
              "button",
              { id: "mark-article", type: "button", "aria-pressed": "false" },
              "Mark article complete",
            ),
            h("p", { id: "completion-status", role: "status" }),
          )
        : null,
    )
  }
  Nav.beforeDOMLoaded = 'document.documentElement.setAttribute("saved-theme", "dark")'
  Nav.afterDOMLoaded = clientScript
  return Nav
}
