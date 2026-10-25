import test from "node:test"
import assert from "node:assert/strict"
import { renderPage } from "./renderPage"
import { FullSlug } from "../util/path"
import { GlobalConfiguration } from "../cfg"
import { QuartzComponent, QuartzComponentProps } from "./types"

// Exercise the global renderer with a future page and different frames; the
// ruler must not depend on any sidebar, content type or local nav plugin.
for (const frame of ["default", "minimal", "full-width"]) {
  test(`a future page gets exactly one ruler in the ${frame} frame`, () => {
    const empty: QuartzComponent = () => null
    const cfg = { locale: "en-US", baseUrl: "example.com/Palisade" } as GlobalConfiguration
    const data = {
      ctx: { argv: { serve: false } },
      fileData: { slug: "future/new-page/index", frontmatter: { title: "Future page" } },
      tree: { type: "root", children: [] },
      allFiles: [],
    } as unknown as QuartzComponentProps
    const html = renderPage(
      cfg,
      "future/new-page/index" as FullSlug,
      data,
      {
        head: empty,
        header: [],
        beforeBody: [],
        pageBody: empty,
        afterBody: [],
        left: [],
        right: [],
        footer: [],
        frame,
      },
      { css: [], js: [], additionalHead: [] },
    )
    assert.equal((html.match(/id="scroll-ruler"/g) ?? []).length, 1)
    assert.match(html, /role="scrollbar"/)
    assert.match(html, /aria-controls="quartz-root"/)
  })
}
