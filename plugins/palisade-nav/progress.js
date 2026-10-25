// This file is shipped as a Quartz afterDOMLoaded resource. No network requests.
;(() => {
  function renderProgress() {
    const data = document.getElementById("palisade-progress-data")
    if (!data) return
    const items = JSON.parse(data.dataset.items || "[]")
    const courses = JSON.parse(data.dataset.courses || "[]")
    const key = data.dataset.storageKey
    let saved = {}
    let storageAvailable = true
    try {
      const raw = JSON.parse(localStorage.getItem(key) || "{}")
      if (raw && typeof raw === "object" && !Array.isArray(raw)) saved = raw
    } catch {
      storageAvailable = false
    }
    const count = (course) =>
      items.filter((i) => (!course || i.course === course) && saved[i.id] === true).length
    const total = (course) => items.filter((i) => !course || i.course === course).length
    const message = (course) =>
      !storageAvailable
        ? "Browser storage is unavailable. Progress cannot be saved here."
        : total(course)
          ? `${count(course)} of ${total(course)} articles marked complete`
          : "No articles published yet."
    document.querySelectorAll(".course-progress").forEach((el) => {
      el.replaceChildren()
      el.hidden = total(el.dataset.course) === 0
      if (el.hidden) return
      const title = document.createElement("h3")
      title.textContent = "Your reading progress"
      const p = document.createElement("p")
      p.textContent = message(el.dataset.course)
      el.append(title, p)
    })
    const dashboard = document.querySelector(".progress-dashboard")
    if (dashboard) {
      dashboard.replaceChildren()
      if (!items.length) {
        const empty = document.createElement("p")
        empty.textContent = "No articles are available to track yet."
        dashboard.append(empty)
      }
      for (const course of courses.filter((c) => total(c.code) > 0)) {
        const row = document.createElement("section")
        row.className = "progress-row"
        const label = document.createElement("h2")
        label.textContent = course.title
        const text = document.createElement("p")
        text.textContent = message(course.code)
        row.append(label, text)
        if (total(course.code)) {
          const meter = document.createElement("progress")
          meter.max = total(course.code)
          meter.value = count(course.code)
          meter.setAttribute("aria-label", `${course.title} reading progress`)
          row.append(meter)
        }
        dashboard.append(row)
      }
      if (!storageAvailable) {
        const warning = document.createElement("p")
        warning.setAttribute("role", "status")
        warning.textContent = message()
        dashboard.append(warning)
      }
    }
    const button = document.getElementById("mark-article")
    if (button) {
      const id = data.dataset.currentId
      const completed = saved[id] === true
      button.disabled = !storageAvailable
      button.setAttribute("aria-pressed", String(completed))
      button.textContent = completed ? "Article complete · Undo" : "Mark article complete"
      document.getElementById("completion-status").textContent = storageAvailable
        ? "Saved only in this browser."
        : message()
      button.onclick = () => {
        saved[id] = !completed
        try {
          localStorage.setItem(key, JSON.stringify(saved))
          renderProgress()
        } catch {
          button.disabled = true
          document.getElementById("completion-status").textContent =
            "Browser storage is unavailable. This change was not saved."
        }
      }
    }
  }
  document.addEventListener("nav", renderProgress)
  window.addEventListener("storage", renderProgress)
  renderProgress()
})()
