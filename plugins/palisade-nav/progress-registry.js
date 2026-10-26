// Build-time discovery only. Quartz supplies the published files, and we also
// check publication flags so the same rules hold in previews and tests.
export function contentPath(slug = "") {
  return slug.replace(/\/index$/, "").replace(/^\/+|\/+$/g, "")
}

export function createProgressRegistry(courses, curriculum, files) {
  const registered = courses.map((course) => ({
    code: String(course.code),
    title: course.title,
    path: `courses/${course.slug}`,
    units: (curriculum[course.slug]?.units ?? []).map((unit) => ({
      id: unit.slug,
      number: unit.number,
      title: unit.title,
      path: `courses/${course.slug}/units/${unit.slug}`,
    })),
  }))
  const items = []
  const ids = new Set()
  const paths = new Set()
  const sameUnit = (value, unit) =>
    String(value) === unit.id ||
    String(value) === String(unit.number) ||
    (/^\d+$/.test(String(value)) && Number(value) === Number(unit.number))

  for (const file of files) {
    const meta = file.frontmatter ?? {}
    if (
      !["article", "examination"].includes(meta.kind) ||
      meta.trackable === false ||
      meta.placeholder === true ||
      meta.draft === true ||
      meta.unlisted === true ||
      meta.publish === false ||
      meta.published === false
    ) {
      continue
    }
    const path = contentPath(file.slug)
    if (!path) throw new Error("Published course content needs a page slug.")
    const course = registered.find((entry) =>
      meta.course != null ? entry.code === String(meta.course) : path.startsWith(`${entry.path}/`),
    )
    if (!course) {
      if (meta.course != null) {
        throw new Error(`Unknown course ${meta.course} on ${path}. Register it in courses.json.`)
      }
      continue // Articles outside the curriculum are not course content.
    }
    const unit = course.units.find((entry) =>
      meta.unit != null ? sameUnit(meta.unit, entry) : path.startsWith(`${entry.path}/`),
    )
    if ((meta.unit != null || meta.kind === "article") && !unit) {
      throw new Error(`Unknown or missing unit on ${path}. Use a unit from curriculum.json.`)
    }
    // An examination nested inside units must not silently become a final exam.
    if (!unit && path.startsWith(`${course.path}/units/`)) {
      throw new Error(`Cannot resolve the examination's unit on ${path}.`)
    }
    const id = meta.progressId ?? `page:${path}`
    if (typeof id !== "string" || !id.trim() || id !== id.trim()) {
      throw new Error(`Invalid progressId on ${path}. Use a unique, nonempty string.`)
    }
    if (ids.has(id) || paths.has(path)) {
      throw new Error(`Duplicate progress identity on ${path}: ${id}. Each page must count once.`)
    }
    ids.add(id)
    paths.add(path)
    items.push({
      id,
      path,
      course: course.code,
      unit: unit?.id ?? null,
      kind: meta.kind,
      title: meta.title || path.split("/").at(-1),
    })
  }
  return { courses: registered, items }
}
