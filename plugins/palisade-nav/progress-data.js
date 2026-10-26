import { readFileSync } from "node:fs"
import { createProgressRegistry } from "./progress-registry.js"

export const courses = JSON.parse(readFileSync(new URL("./courses.json", import.meta.url), "utf8"))
export const curriculum = JSON.parse(
  readFileSync(new URL("./curriculum.json", import.meta.url), "utf8"),
)
const cache = new WeakMap()
export function getProgressRegistry(files) {
  if (!cache.has(files)) cache.set(files, createProgressRegistry(courses, curriculum, files))
  return cache.get(files)
}
