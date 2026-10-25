import { ContentBody } from "@quartz-community/content-page/components"

// Authored folder indexes already provide their own ordered navigation. Render
// that content once; keep FolderPage for folders without an authored index.
export default () => ({
  name: "PalisadeAuthoredPage",
  priority: 20,
  match: ({ slug, fileData }) =>
    slug.endsWith("/index") && /\.md$/.test(fileData.relativePath ?? ""),
  layout: "content",
  body: ContentBody,
})
