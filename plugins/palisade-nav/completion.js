// Shared by Node tests and Quartz's inline resource. Keep this module free of
// imports so index.js can inline the same source without a browser bundle.
export function summarizeProgress(items, records, course, unit) {
  const eligible = new Map(
    items
      .filter((item) => item.course === course && (unit === undefined || item.unit === unit))
      .map((item) => [item.id, item]),
  )
  const total = eligible.size
  const completed = [...eligible.keys()].filter(
    (id) =>
      eligible.get(id).available !== false && Object.hasOwn(records, id) && records[id] === true,
  ).length
  return { completed, total, percent: total ? (completed / total) * 100 : null }
}

export function createCompletionStore(getStorage, key) {
  let records = {}
  let available = false
  let message = ""
  const unavailable =
    "Browser storage is unavailable. Completion changes are disabled; this change was not saved."
  const snapshot = () => ({ records, available, message })

  function read() {
    try {
      const storage = getStorage()
      const raw = storage.getItem(key)
      let parsed
      try {
        parsed = raw === null ? {} : JSON.parse(raw)
        if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error()
      } catch {
        available = false
        message = "Saved progress could not be read. Completion changes are disabled to protect it."
        return snapshot()
      }
      records = parsed
      // Reading can work while writing is blocked or storage is full. Probe
      // separately without touching the user's completion records.
      const probe = `${key}:probe:${Date.now()}:${Math.random()}`
      storage.setItem(probe, "1")
      storage.removeItem(probe)
      available = true
      message = "Saved only in this browser."
    } catch {
      available = false
      message = unavailable
    }
    return snapshot()
  }

  function toggle(id) {
    // Re-read before a write so changes from another tab aren't overwritten by
    // this tab's previously rendered snapshot. Preserve unknown/retired IDs.
    read()
    if (!available) return snapshot()
    const completed = Object.hasOwn(records, id) && records[id] === true
    const next = { ...records }
    if (completed) delete next[id]
    else Object.defineProperty(next, id, { value: true, enumerable: true, configurable: true })
    try {
      getStorage().setItem(key, JSON.stringify(next))
      records = next // Only expose the change after persistence succeeds.
    } catch {
      available = false
      message = unavailable
    }
    return snapshot()
  }

  return { read, toggle }
}
