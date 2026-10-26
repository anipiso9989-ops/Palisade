// Inlined into the Quartz afterDOMLoaded resource by index.js, with the
// shared calculation and persistence functions supplied explicitly.
export function initializeProgress(document, window, summarizeProgress, createCompletionStore) {
  let store
  let storageKey
  let currentData
  let meters = []
  let examinations = []

  const element = (tag, className, text) => {
    const node = document.createElement(tag)
    if (className) node.className = className
    if (text !== undefined) node.textContent = text
    return node
  }

  function meter(parent, items, course, unit, label, master = false) {
    const wrapper = element("div", `progress-meter${master ? " progress-meter-master" : ""}`)
    const details = element("p", "progress-details")
    const percentage = element("span", "progress-percentage")
    const count = element("span", "progress-count")
    details.append(percentage, count)
    const bar = element("div", "dither-progress")
    bar.setAttribute("role", "progressbar")
    bar.setAttribute("aria-label", label)
    bar.setAttribute("aria-valuemin", "0")
    bar.setAttribute("aria-valuemax", "100")
    const fill = element("span", "dither-progress-fill")
    fill.setAttribute("aria-hidden", "true")
    bar.append(fill)
    wrapper.append(details, bar)
    parent.append(wrapper)
    meters.push({ wrapper, percentage, count, bar, fill, items, course, unit })
  }

  function storageStatus(parent) {
    const warning = element("p", "progress-storage-status")
    warning.setAttribute("role", "status")
    parent.append(warning)
  }

  function build(courses, items) {
    meters = []
    examinations = []
    document.querySelectorAll(".course-progress").forEach((node) => {
      node.replaceChildren()
      const course = courses.find((entry) => entry.code === node.dataset.course)
      node.hidden = !course
      if (!course) return
      node.append(element("h3", "", "Your course progress"))
      meter(node, items, course.code, undefined, `${course.title} overall progress`, true)
      storageStatus(node)
    })
    const dashboard = document.querySelector(".progress-dashboard")
    if (!dashboard) return
    dashboard.replaceChildren()
    if (!courses.length) {
      dashboard.append(element("p", "progress-empty", "No courses are registered yet."))
    }
    for (const course of courses) {
      const section = element("section", "progress-row")
      section.append(element("h2", "", course.title))
      meter(section, items, course.code, undefined, `${course.title} overall progress`, true)
      const units = element("div", "progress-units")
      for (const unit of course.units) {
        const row = element("section", "progress-unit")
        const label = `Unit ${unit.number} — ${unit.title}`
        row.append(element("h3", "", label))
        meter(row, items, course.code, unit.id, `${course.title}, ${label} progress`)
        units.append(row)
      }
      section.append(units)
      const finals = items.filter((item) => item.course === course.code && item.unit === null)
      if (finals.length) {
        section.append(element("h3", "progress-examinations-title", "Course examinations"))
        const list = element("ul", "progress-examinations")
        for (const item of finals) {
          const row = element("li", "")
          const label = element("span", "", item.title)
          const status = element("span", "progress-examination-status")
          row.append(label, status)
          list.append(row)
          examinations.push({ id: item.id, status })
        }
        section.append(list)
      }
      dashboard.append(section)
    }
    storageStatus(dashboard)
  }

  function update(state) {
    for (const view of meters) {
      const { completed, total, percent } = summarizeProgress(
        view.items,
        state.records,
        view.course,
        view.unit,
      )
      const display = percent === null ? "No published content yet" : `${Math.round(percent)}%`
      view.percentage.textContent = display
      view.count.textContent = `${completed} / ${total} items complete`
      view.wrapper.classList.toggle("progress-meter-empty", percent === null)
      if (percent === null) {
        view.bar.hidden = true
        view.bar.removeAttribute("aria-valuenow")
      } else {
        view.bar.hidden = false
        view.bar.setAttribute("aria-valuenow", String(percent))
      }
      view.bar.setAttribute("aria-valuetext", `${display}; ${completed} of ${total} items complete`)
      // Keep the DOM nodes between updates so filling and reversing transition.
      view.fill.style.width = `${percent ?? 0}%`
    }
    for (const exam of examinations) {
      exam.status.textContent = state.records[exam.id] === true ? "Complete" : "Incomplete"
    }
    const button = document.getElementById("mark-article")
    const status = document.getElementById("completion-status")
    if (button) {
      const id = currentData.dataset.currentId
      const completed = Object.hasOwn(state.records, id) && state.records[id] === true
      button.disabled = !state.available
      button.setAttribute("aria-pressed", String(completed))
      button.textContent = completed ? "Undo" : "All done"
      if (status) status.textContent = state.message
    }
    document.querySelectorAll(".progress-storage-status").forEach((node) => {
      node.hidden = state.available
      node.textContent = state.available ? "" : state.message
    })
  }

  function renderProgress() {
    const data = document.getElementById("palisade-progress-data")
    if (!data) {
      currentData = undefined
      return
    }
    if (!store || storageKey !== data.dataset.storageKey) {
      storageKey = data.dataset.storageKey
      store = createCompletionStore(() => window.localStorage, storageKey)
    }
    if (currentData !== data) {
      currentData = data
      const items = JSON.parse(data.dataset.items || "[]")
      const courses = JSON.parse(data.dataset.courses || "[]")
      build(courses, items)
      const button = document.getElementById("mark-article")
      if (button) {
        button.onclick = () => {
          const id = data.dataset.currentId
          if (items.some((item) => item.id === id)) update(store.toggle(id))
        }
      }
    }
    update(store.read())
  }

  document.addEventListener("nav", () => {
    // Quartz can morph and reuse the hidden data element during navigation.
    // Rebind the current control and meters even if that element is unchanged.
    currentData = undefined
    renderProgress()
  })
  window.addEventListener("storage", (event) => {
    if (event.key === storageKey || event.key === null) renderProgress()
  })
  renderProgress()
}
