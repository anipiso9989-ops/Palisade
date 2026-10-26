import { h } from "preact"
import { contentPath } from "./progress-registry.js"
import { getProgressRegistry } from "./progress-data.js"

// Render after the article, including all its practice answers, never in the sidebar.
export function CompletionControl({ fileData, allFiles = [] }) {
  const registry = getProgressRegistry(allFiles)
  if (!registry.items.some((item) => item.path === contentPath(fileData.slug))) return null
  return h(
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
    h("p", { id: "completion-status", role: "status" }, "Enable JavaScript to save progress."),
  )
}
