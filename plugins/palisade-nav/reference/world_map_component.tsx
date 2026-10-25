import React, { useEffect, useRef, useState } from 'react';

// ============================================================================
// CONFIGURATION (TUNE HOVER RADIUS, BRIGHTNESS, AND GRID DENSITY HERE)
// ============================================================================
const GRID_COLS = 170;            // Grid density: horizontal columns (rows = cols / 2). Try 120–240.
const HOVER_RADIUS = 60;         // Flashlight radius in pixels. Try 80–280.
const BRIGHTNESS_INTENSITY = 0.8; // Peak glow multiplier under the cursor. Try 0.8–2.2.
const LERP_FACTOR = 0.08;         // Cursor trail smoothing (lower = longer lag/trail). Try 0.04–0.2.
const SHIMMER_SPEED = 1.8;        // Speed of the ambient dither noise shimmer.
const DOT_RADIUS = 1.35;          // Base dot radius in pixels.

// CURSOR RING CONFIGURATION (THE SMALL THIN WHITE RING FOLLOWING YOUR CURSOR)
const CURSOR_RING_RADIUS = 10;    // Radius of the cursor ring in pixels (try 6–18)
const CURSOR_RING_WIDTH = 1;      // Stroke thickness in pixels (1 = crisp thin ring)
const CURSOR_RING_OPACITY = 0.85; // Opacity of the white ring (0.0 to 1.0)

// Embedded 600x300 1-bit World Silhouette Mask (replace with "/world-map-mask.png" if preferred)
const WORLD_MASK_SRC = "data:image/png;base64,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";

/**
 * Reads an input PNG/SVG silhouette mask of the world on an offscreen canvas
 * and returns normalized (u, v) coordinates ONLY for landmass dots.
 */
async function extractLandDots(imageSrc, cols) {
  const rows = Math.floor(cols / 2);
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = imageSrc;
  await img.decode();

  const offscreen = document.createElement('canvas');
  offscreen.width = cols;
  offscreen.height = rows;
  const ctx = offscreen.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(img, 0, 0, cols, rows);

  const { data } = ctx.getImageData(0, 0, cols, rows);
  const dots = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = (r * cols + c) * 4;
      const alpha = data[i + 3];
      const luminance = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];

      // Keep dot only if pixel is over land (opaque & bright)
      if (alpha > 64 && luminance > 90) {
        // Deterministic Bayer + spatial hash seed for retro dithered shimmer
        const seed = Math.abs(Math.sin(c * 12.9898 + r * 78.233) * 43758.5453) % 1;
        dots.push({
          u: (c + 0.5) / cols,
          v: (r + 0.5) / rows,
          seed,
        });
      }
    }
  }
  return dots;
}

// GLSL-style cubic Hermite smoothstep for radial distance falloff
function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export default function WorldMap({
  maskUrl = WORLD_MASK_SRC,
  gridCols = GRID_COLS,
  hoverRadius = HOVER_RADIUS,
  brightness = BRIGHTNESS_INTENSITY,
  lerpFactor = LERP_FACTOR,
}) {
  const canvasRef = useRef(null);
  const [dots, setDots] = useState([]);

  // Raw target mouse vs. smoothly interpolated (lerped) mouse coordinates
  const mouseRef = useRef({
    targetX: -9999,
    targetY: -9999,
    x: -9999,
    y: -9999,
    active: false,
    presence: 0,
  });

  // 1. Sample the world map silhouette mask once on mount
  useEffect(() => {
    let active = true;
    extractLandDots(maskUrl, gridCols).then((pts) => {
      if (active) setDots(pts);
    });
    return () => {
      active = false;
    };
  }, [maskUrl, gridCols]);

  // 2. Main 60FPS render loop (Cursor Proximity + Smooth Falloff + Shimmer + Lerp)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dots.length === 0) return;
    const ctx = canvas.getContext('2d');
    let rafId;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.clientWidth * dpr;
      canvas.height = parent.clientHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (timeMs) => {
      const uTime = timeMs * 0.001;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Fit 2:1 equirectangular world map neatly inside the container
      const mapW = Math.min(width * 0.94, height * 0.94 * 2);
      const mapH = mapW / 2;
      const offsetX = (width - mapW) * 0.5;
      const offsetY = (height - mapH) * 0.5;

      // Interpolate (lerp) cursor position & fade presence smoothly
      const m = mouseRef.current;
      m.presence += ((m.active ? 1 : 0) - m.presence) * 0.08;
      m.x += (m.targetX - m.x) * lerpFactor;
      m.y += (m.targetY - m.y) * lerpFactor;

      // Clear background (#0a0a0c dark surface)
      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, width, height);

      const radiusSq = hoverRadius * hoverRadius;

      // Draw every landmass dot
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const px = offsetX + dot.u * mapW;
        const py = offsetY + dot.v * mapH;

        // Continuous time-varying dither shimmer (active even when mouse is still)
        const shimmer = Math.sin(uTime * SHIMMER_SPEED + dot.seed * 6.2831) * 0.12;
        const baseAlpha = 0.22 + dot.seed * 0.18 + shimmer;

        // Distance from dot to lerped cursor
        const dx = px - m.x;
        const dy = py - m.y;
        const distSq = dx * dx + dy * dy;

        let glow = 0;
        if (m.presence > 0.01 && distSq < radiusSq) {
          const dist = Math.sqrt(distSq);
          // Smooth radial falloff (1.0 at cursor center -> 0.0 at hoverRadius edge)
          const falloff = (1 - smoothstep(0, hoverRadius, dist)) * m.presence;
          glow = Math.min(1, Math.pow(falloff, 1.4) * brightness);
        }

        // Pure white dots using only opacity (no dark RGB shadow ring at the hover boundary)
        const alpha = Math.min(1, Math.max(0.08, baseAlpha + glow * 0.75));
        const r = DOT_RADIUS * (1 + glow * 0.35);

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw a thin, small white ring that follows the cursor
      if (m.presence > 0.01) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${(CURSOR_RING_OPACITY * m.presence).toFixed(3)})`;
        ctx.lineWidth = CURSOR_RING_WIDTH;
        ctx.beginPath();
        // Change m.x, m.y to m.targetX, m.targetY if you want zero lag on the ring itself
        ctx.arc(m.x, m.y, CURSOR_RING_RADIUS, 0, Math.PI * 2);
        ctx.stroke();
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [dots, hoverRadius, brightness, lerpFactor]);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const m = mouseRef.current;

    // Snap immediately on first entry so trail doesn't fly in from offscreen
    if (!m.active && m.presence < 0.05) {
      m.x = x;
      m.y = y;
    }
    m.targetX = x;
    m.targetY = y;
    m.active = true;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        mouseRef.current.active = false;
      }}
      className="relative w-full h-screen min-h-[420px] bg-[#0a0a0c] overflow-hidden flex items-center justify-center cursor-none"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}