import { QuartzComponent } from "./types"

// Included by renderPage, outside the chosen frame, so every page gets one ruler.
const ScrollRuler: QuartzComponent = () => (
  <div
    id="scroll-ruler"
    class="scroll-ruler"
    role="scrollbar"
    tabIndex={0}
    aria-label="Page scroll position"
    aria-controls="quartz-root"
    aria-orientation="vertical"
    aria-valuemin={0}
    aria-valuemax={100}
    aria-valuenow={0}
    aria-valuetext="0%"
    hidden
  >
    <div class="ruler-track" aria-hidden="true">
      <div class="ruler-progress-fill" />
      <div class="ruler-hover-line" />
      <div class="ruler-ticks" />
      <div class="ruler-playhead">
        <div class="playhead-needle" />
        <div class="playhead-cap" />
        <div class="percentage-badge">000%</div>
      </div>
    </div>
  </div>
)

export default ScrollRuler
