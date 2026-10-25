import test from "node:test"
import assert from "node:assert/strict"
import { render } from "preact-render-to-string"
import createPage from "./authored-page.js"

test("authored folder pages render their ordered navigation exactly once", () => {
  const page = createPage()
  assert.ok(
    page.match({
      slug: "courses/test/units/index",
      fileData: { relativePath: "courses/test/units/index.md" },
    }),
  )
  assert.ok(
    !page.match({ slug: "courses/index", fileData: {} }),
    "virtual folders keep automatic listings",
  )
  const body = page.body()
  const html = render(
    body({
      fileData: { slug: "courses/test/units/index" },
      displayClass: "",
      tree: {
        type: "root",
        children: [
          {
            type: "element",
            tagName: "ul",
            properties: {},
            children: [
              {
                type: "element",
                tagName: "li",
                properties: {},
                children: [
                  {
                    type: "element",
                    tagName: "a",
                    properties: { href: "./unit-01/" },
                    children: [{ type: "text", value: "Unit 1" }],
                  },
                ],
              },
            ],
          },
        ],
      },
    }),
  )
  assert.equal((html.match(/href="\.\/unit-01\/"/g) ?? []).length, 1)
  assert.ok(!html.includes("page-listing"))
})
