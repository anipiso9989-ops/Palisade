// Quartz adaptation of reference/world_map_component.tsx, supplied by the site owner.
// Keep this script self-contained: Quartz embeds it as an afterDOMLoaded resource.
;(() => {
  const WORLD_MASK_SRC =
    "data:image/png;base64,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"
  const GRID_COLS = 170
  const HOVER_RADIUS = 60
  const BRIGHTNESS = 0.8
  const LERP = 0.08
  let dispose = () => {}

  async function extractLandDots() {
    const img = new Image()
    img.src = WORLD_MASK_SRC
    await img.decode()
    const rows = Math.floor(GRID_COLS / 2)
    const offscreen = document.createElement("canvas")
    offscreen.width = GRID_COLS
    offscreen.height = rows
    const ctx = offscreen.getContext("2d", { willReadFrequently: true })
    if (!ctx) throw new Error("Canvas unavailable")
    ctx.drawImage(img, 0, 0, GRID_COLS, rows)
    const { data } = ctx.getImageData(0, 0, GRID_COLS, rows)
    const dots = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        const i = (r * GRID_COLS + c) * 4
        const luminance = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]
        if (data[i + 3] > 64 && luminance > 90) {
          dots.push({
            u: (c + 0.5) / GRID_COLS,
            v: (r + 0.5) / rows,
            seed: Math.abs(Math.sin(c * 12.9898 + r * 78.233) * 43758.5453) % 1,
          })
        }
      }
    }
    return dots
  }
  // Cache sampling across client-side navigations; a failed decode may be retried.
  let landDots
  const getDots = () =>
    (landDots ||= extractLandDots().catch((error) => {
      landDots = undefined
      throw error
    }))

  function mount() {
    dispose()
    const host = document.querySelector(".world-map")
    const canvas = host?.querySelector("canvas")
    const ctx = canvas?.getContext("2d")
    if (!host || !canvas || !ctx) return
    const fallback = host.querySelector(".map-fallback")
    const motion = matchMedia("(prefers-reduced-motion: reduce)")
    const pointer = matchMedia("(hover: hover) and (pointer: fine)")
    let dots = [],
      width = 0,
      height = 0,
      frame = 0,
      alive = true,
      inView = true
    let elapsed = 0,
      lastTime = null
    const mouse = { targetX: -9999, targetY: -9999, x: -9999, y: -9999, active: false, presence: 0 }
    const smoothstep = (value) => {
      const x = Math.max(0, Math.min(1, value))
      return x * x * (3 - 2 * x)
    }

    function draw(timeMs) {
      frame = 0
      if (!alive || !dots.length) return
      const delta = lastTime === null ? 16.67 : Math.min(50, timeMs - lastTime)
      lastTime = timeMs
      if (!motion.matches) elapsed += delta
      const uTime = motion.matches ? 0 : elapsed * 0.001
      const mapW = Math.min(width * 0.94, height * 0.94 * 2)
      const mapH = mapW / 2
      const offsetX = (width - mapW) / 2,
        offsetY = (height - mapH) / 2
      const factor = 1 - Math.pow(1 - LERP, delta / 16.67)
      mouse.presence += ((mouse.active && !motion.matches ? 1 : 0) - mouse.presence) * factor
      mouse.x += (mouse.targetX - mouse.x) * factor
      mouse.y += (mouse.targetY - mouse.y) * factor
      ctx.clearRect(0, 0, width, height)
      for (const dot of dots) {
        const px = offsetX + dot.u * mapW,
          py = offsetY + dot.v * mapH
        const shimmer = Math.sin(uTime * 1.8 + dot.seed * 6.2831) * 0.12
        const baseAlpha = 0.22 + dot.seed * 0.18 + shimmer
        const dist = Math.hypot(px - mouse.x, py - mouse.y)
        const falloff = (1 - smoothstep(dist / HOVER_RADIUS)) * mouse.presence
        const glow = motion.matches ? 0 : Math.min(1, Math.pow(falloff, 1.4) * BRIGHTNESS)
        const alpha = Math.min(1, Math.max(0.08, baseAlpha + glow * 0.75))
        // Scale dots down on small containers so coastlines stay legible.
        const radius = Math.min(1.35, (mapW / GRID_COLS) * 0.38) * (1 + glow * 0.35)
        ctx.fillStyle = `rgba(236, 236, 236, ${alpha.toFixed(3)})`
        ctx.beginPath()
        ctx.arc(px, py, radius, 0, Math.PI * 2)
        ctx.fill()
      }
      if (!motion.matches && mouse.presence > 0.01) {
        ctx.strokeStyle = `rgba(236, 236, 236, ${0.85 * mouse.presence})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2)
        ctx.stroke()
      }
      if (!motion.matches && inView && !document.hidden) frame = requestAnimationFrame(draw)
    }
    function sync() {
      cancelAnimationFrame(frame)
      frame = 0
      lastTime = null
      if (alive && dots.length && !document.hidden) frame = requestAnimationFrame(draw)
    }
    function resize() {
      const rect = host.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = Math.min(devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sync()
    }
    function move(event) {
      if (motion.matches || !pointer.matches || event.pointerType === "touch") return
      const rect = host.getBoundingClientRect()
      const x = event.clientX - rect.left,
        y = event.clientY - rect.top
      if (!mouse.active && mouse.presence < 0.05) {
        mouse.x = x
        mouse.y = y
      }
      mouse.targetX = x
      mouse.targetY = y
      mouse.active = true
    }
    function leave() {
      mouse.active = false
    }
    function changeMotion() {
      mouse.active = false
      mouse.presence = 0
      sync()
    }
    const resizer = new ResizeObserver(resize)
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      sync()
    })
    resizer.observe(host)
    observer.observe(host)
    host.addEventListener("pointermove", move)
    host.addEventListener("pointerleave", leave)
    motion.addEventListener("change", changeMotion)
    document.addEventListener("visibilitychange", sync)
    resize()
    getDots()
      .then((points) => {
        if (!alive) return
        dots = points
        if (fallback) fallback.hidden = true
        host.dataset.ready = "true"
        sync()
      })
      .catch(() => {
        if (alive && fallback) fallback.hidden = false
      })
    dispose = () => {
      alive = false
      cancelAnimationFrame(frame)
      resizer.disconnect()
      observer.disconnect()
      host.removeEventListener("pointermove", move)
      host.removeEventListener("pointerleave", leave)
      motion.removeEventListener("change", changeMotion)
      document.removeEventListener("visibilitychange", sync)
    }
  }
  document.addEventListener("nav", mount)
  window.addEventListener("pagehide", () => dispose())
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) mount()
  })
  mount()
})()
