import { h, Fragment } from "preact"
import { CompletionControl } from "./completion-control.js"
import { ContentBody } from "@quartz-community/content-page/components"

// Authored folder indexes already provide their own ordered navigation. Render
// that content once; keep FolderPage for folders without an authored index.
export default () => ({
  name: "PalisadeAuthoredPage",
  priority: 20,
  match: ({ slug, fileData }) =>
    /\.md$/.test(fileData.relativePath ?? "") &&
    (slug.endsWith("/index") || ["article", "examination"].includes(fileData.frontmatter?.kind)),
  layout: "content",
  body: () => {
    const Body = ContentBody()
    return Object.assign(
      (props) => h(Fragment, {}, h(Body, props), h(CompletionControl, props)),
      Body,
    )
  },
})
