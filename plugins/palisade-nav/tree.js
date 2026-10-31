// The shared script holds the outline; closed branches create their links on demand.
;(() => {
  const nodes = __CURRICULUM_TREE__
  const byPath = new Map()
  function index(items) {
    for (const item of items) {
      byPath.set(item.path, item)
      if (item.children) index(item.children)
    }
  }
  index(nodes)
  let dispose = () => {}
  function mount() {
    dispose()
    const nav = document.querySelector("[data-tree-root]")
    if (!nav) return
    const panel = nav.closest(".curriculum-panel")
    const mobile = matchMedia("(max-width: 800px)")
    const current = nav.dataset.current
    const isAncestor = (path) => current === path || current.startsWith(`${path}/`)
    function chevron() {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("class", "tree-chevron")
      svg.setAttribute("viewBox", "0 0 16 16")
      svg.setAttribute("width", "16")
      svg.setAttribute("height", "16")
      svg.setAttribute("aria-hidden", "true")
      const path = document.createElementNS(svg.namespaceURI, "path")
      path.setAttribute("d", "m6 3 5 5-5 5")
      path.setAttribute("fill", "none")
      path.setAttribute("stroke", "currentColor")
      path.setAttribute("stroke-width", "1.5")
      svg.append(path)
      return svg
    }
    function render(items, parent) {
      for (const node of items) {
        const link = document.createElement("a")
        link.className = "tree-link internal"
        const version = nav.dataset.publication
        link.href = `${nav.dataset.treeRoot}/${node.path}/${version ? `?v=${version}` : ""}`
        link.textContent = node.title
        if (node.path === current) link.setAttribute("aria-current", "page")
        if (!node.children) {
          parent.append(link)
          continue
        }
        const branch = document.createElement("details")
        branch.className = "tree-branch"
        branch.dataset.path = node.path
        branch.open = isAncestor(node.path)
        branch.dataset.loaded = String(branch.open)
        const summary = document.createElement("summary")
        summary.append(chevron(), link)
        const children = document.createElement("div")
        children.className = "tree-children"
        if (branch.open) render(node.children, children)
        branch.append(summary, children)
        parent.append(branch)
      }
    }
    function expand(event) {
      const branch = event.target
      if (!branch.matches(".tree-branch") || !branch.open || branch.dataset.loaded === "true")
        return
      const node = byPath.get(branch.dataset.path)
      if (!node?.children) return
      render(node.children, branch.querySelector(":scope > .tree-children"))
      branch.dataset.loaded = "true"
    }
    function resize() {
      panel.open = !mobile.matches
    }
    nav.addEventListener("toggle", expand, true)
    mobile.addEventListener("change", resize)
    resize()
    dispose = () => {
      nav.removeEventListener("toggle", expand, true)
      mobile.removeEventListener("change", resize)
    }
  }
  document.addEventListener("nav", mount)
  mount()
})()
