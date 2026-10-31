import test from "node:test"
import assert from "node:assert/strict"
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { checkPublishedContent } from "./check-published-content.js"

test("the production gate rejects blank articles and stale page links, and accepts complete output", () => {
  const root = mkdtempSync(join(tmpdir(), "palisade-output-"))
  const content = join(root, "content")
  const output = join(root, "public")
  try {
    mkdirSync(join(content, "lesson"), { recursive: true })
    mkdirSync(join(output, "lesson"), { recursive: true })
    writeFileSync(join(content, "lesson/index.md"), "---\nkind: article\n---\nReviewed instruction")
    const destination = join(output, "lesson/index.html")
    writeFileSync(destination, '<nav data-publication="abc"></nav><article></article>')
    assert.throws(() => checkPublishedContent(content, output), /blank published article/)
    const sections = ["practice-problems", "easy", "medium", "hard", "olympiad", "answers"]
      .map((id) => `<h2 id="${id}">${id}</h2>`)
      .join("")
    const complete =
      '<nav data-publication="abc"></nav><article>' +
      "<p>" +
      "Reviewed mathematical content. ".repeat(20) +
      "</p>" +
      sections +
      '<a href="./?v=abc">Read</a></article>'
    writeFileSync(destination, complete.replace("./?v=abc", "./"))
    assert.throws(() => checkPublishedContent(content, output), /unversioned page link/)
    writeFileSync(destination, complete)
    assert.equal(checkPublishedContent(content, output), 1)
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
