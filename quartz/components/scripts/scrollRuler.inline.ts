// Adapted from the uploaded scroll_percentage_ruler_component.html. The ruler
// follows the real document, including later edits, expanded sections and media.
;(() => {
  let dispose = () => {}
  function mount() {
    dispose()
    const rail = document.getElementById("scroll-ruler")
    if (!rail) return
    const track = rail.querySelector<HTMLElement>(".ruler-track")!
    const tickContainer = rail.querySelector<HTMLElement>(".ruler-ticks")!
    const playhead = rail.querySelector<HTMLElement>(".ruler-playhead")!
    const fill = rail.querySelector<HTMLElement>(".ruler-progress-fill")!
    const hover = rail.querySelector<HTMLElement>(".ruler-hover-line")!
    const badge = rail.querySelector<HTMLElement>(".percentage-badge")!
    const motion = matchMedia("(prefers-reduced-motion: reduce)")
    const ticks: {
      el: HTMLElement
      percent: number
      width: number
      major: boolean
      medium: boolean
    }[] = []
    const fragment = document.createDocumentFragment()
    for (let i = 0; i <= 100; i++) {
      const el = document.createElement("div")
      const major = i % 10 === 0,
        medium = !major && i % 5 === 0
      el.className = `ruler-tick ${major ? "major" : medium ? "medium" : "minor"}`
      el.style.top = `${i}%`
      fragment.append(el)
      ticks.push({ el, percent: i / 100, width: major ? 22 : medium ? 14 : 8, major, medium })
    }
    tickContainer.replaceChildren(fragment)
    document.documentElement.classList.add("has-scroll-ruler")
    rail.hidden = false
    let alive = true,
      frame = 0,
      measureNeeded = true,
      current = 0,
      target = 0
    let maxScroll = 0,
      trackHeight = 0,
      pointer: number | null = null,
      lastTime = 0,
      previousPercent = -1
    const clamp = (value: number) => Math.max(0, Math.min(1, value))
    const getMax = () =>
      Math.max(
        0,
        (document.scrollingElement ?? document.documentElement).scrollHeight -
          document.documentElement.clientHeight,
      )
    function measure() {
      maxScroll = getMax()
      trackHeight = track.clientHeight
      target = maxScroll > 0 ? clamp(window.scrollY / maxScroll) : 0
      if (maxScroll === 0) current = 0
      rail!.setAttribute("aria-disabled", String(maxScroll === 0))
      rail!.tabIndex = maxScroll > 0 ? 0 : -1
      previousPercent = -1
      measureNeeded = false
    }
    function paint(progress: number) {
      playhead.style.transform = `translate3d(0, ${(progress * trackHeight).toFixed(2)}px, 0)`
      fill.style.height = `${(progress * 100).toFixed(2)}%`
      const percent = Math.round(progress * 100)
      if (percent !== previousPercent) {
        badge.textContent = `${String(percent).padStart(3, "0")}%`
        rail!.setAttribute("aria-valuenow", String(percent))
        rail!.setAttribute(
          "aria-valuetext",
          maxScroll === 0 ? "0% — page fits in the viewport" : `${percent}%`,
        )
        previousPercent = percent
      }
      for (const tick of ticks) {
        const influence = motion.matches
          ? 0
          : Math.max(0, 1 - Math.abs(tick.percent - progress) / 0.045)
        tick.el.style.width = `${tick.width + influence * 10}px`
        tick.el.style.backgroundColor =
          influence > 0
            ? `rgba(244,244,244,${0.4 + influence * 0.6})`
            : tick.percent <= progress
              ? `rgba(228,228,228,${tick.major ? 0.62 : tick.medium ? 0.38 : 0.22})`
              : ""
      }
    }
    function animate(time: number) {
      frame = 0
      if (!alive || document.hidden) return
      if (measureNeeded) measure()
      const delta = lastTime ? Math.min(50, time - lastTime) : 16.67
      lastTime = time
      const diff = target - current
      current =
        motion.matches || Math.abs(diff) < 0.0001
          ? target
          : current + diff * (1 - Math.pow(0.86, delta / 16.67))
      paint(current)
      if (Math.abs(target - current) > 0.0001) frame = requestAnimationFrame(animate)
      else lastTime = 0
    }
    function schedule() {
      if (!alive) return
      measureNeeded = true
      if (!frame && !document.hidden) frame = requestAnimationFrame(animate)
    }
    function scrub(clientY: number) {
      maxScroll = getMax()
      if (!maxScroll) return
      const rect = track.getBoundingClientRect()
      const progress = clamp((clientY - rect.top) / Math.max(1, rect.height))
      window.scrollTo({ top: progress * maxScroll, behavior: "instant" })
      schedule()
    }
    function down(event: PointerEvent) {
      if (event.button !== 0 || !event.isPrimary || !getMax()) return
      event.preventDefault()
      pointer = event.pointerId
      rail!.setPointerCapture(pointer)
      scrub(event.clientY)
    }
    function move(event: PointerEvent) {
      const rect = track.getBoundingClientRect()
      hover.style.transform = `translate3d(0, ${Math.max(0, Math.min(rect.height, event.clientY - rect.top))}px, 0)`
      if (pointer === event.pointerId) scrub(event.clientY)
    }
    function release() {
      if (pointer !== null && rail!.hasPointerCapture(pointer)) rail!.releasePointerCapture(pointer)
      pointer = null
    }
    function key(event: KeyboardEvent) {
      const max = getMax()
      if (!max) return
      const page = document.documentElement.clientHeight * 0.9
      const destinations: Record<string, number> = {
        ArrowDown: scrollY + 40,
        ArrowUp: scrollY - 40,
        PageDown: scrollY + page,
        PageUp: scrollY - page,
        Home: 0,
        End: max,
      }
      if (!(event.key in destinations)) return
      event.preventDefault()
      window.scrollTo({
        top: Math.max(0, Math.min(max, destinations[event.key])),
        behavior: "instant",
      })
      schedule()
    }
    function visibility() {
      if (document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
        lastTime = 0
      } else schedule()
    }
    const resize = new ResizeObserver(schedule)
    resize.observe(document.documentElement)
    resize.observe(document.body)
    const mutations = new MutationObserver((records) => {
      if (
        records.some(
          (record) =>
            !(
              record.target instanceof Element ? record.target : record.target.parentElement
            )?.closest("#scroll-ruler"),
        )
      )
        schedule()
    })
    mutations.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style", "hidden", "open"],
    })
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    window.visualViewport?.addEventListener("resize", schedule)
    document.addEventListener("load", schedule, true)
    document.addEventListener("visibilitychange", visibility)
    motion.addEventListener("change", schedule)
    rail.addEventListener("pointerdown", down)
    rail.addEventListener("pointermove", move)
    rail.addEventListener("pointerup", release)
    rail.addEventListener("pointercancel", release)
    rail.addEventListener("lostpointercapture", release)
    rail.addEventListener("keydown", key)
    measure()
    current = target
    paint(current)
    document.fonts.ready.then(schedule)
    schedule()
    dispose = () => {
      alive = false
      cancelAnimationFrame(frame)
      release()
      resize.disconnect()
      mutations.disconnect()
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      window.visualViewport?.removeEventListener("resize", schedule)
      document.removeEventListener("load", schedule, true)
      document.removeEventListener("visibilitychange", visibility)
      motion.removeEventListener("change", schedule)
      rail.removeEventListener("pointerdown", down)
      rail.removeEventListener("pointermove", move)
      rail.removeEventListener("pointerup", release)
      rail.removeEventListener("pointercancel", release)
      rail.removeEventListener("lostpointercapture", release)
      rail.removeEventListener("keydown", key)
      rail.hidden = true
      document.documentElement.classList.remove("has-scroll-ruler")
    }
  }
  document.addEventListener("nav", mount)
  window.addEventListener("pagehide", () => dispose())
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) mount()
  })
  mount()
})()
