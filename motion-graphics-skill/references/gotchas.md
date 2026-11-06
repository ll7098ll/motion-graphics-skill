# Production Gotchas & Browser Pitfalls

Hard-won lessons extracted from real programmatic motion graphics builds. Check these before debugging mysterious render bugs.

---

## 1. DOM, CSS & SVG Rendering Traps

1. **`will-change: transform` Blurs Camera-Scaled Text**
   - **Symptom**: When the world camera zooms in (`scale(2.5)`), UI text turns fuzzy and pixelated.
   - **Cause**: `will-change: transform` forces Chromium to rasterize the element into a fixed `1×` GPU texture bitmap before scaling.
   - **Fix**: **Never** put `will-change` on elements inside a zoomed camera container, or draw on a crisp high-res Canvas / SVG.

2. **`opacity` or `filter` Flattens `transform-style: preserve-3d`**
   - **Symptom**: Back faces show through front faces or 3D card stacks collapse flat during a fade.
   - **Cause**: Per the CSS Transforms Level 2 spec, `opacity < 1`, `filter`, `clip-path`, or `overflow: hidden` forces `transform-style: flat` on that element!
   - **Fix**: Apply `opacity` or `filter` to an **outer 2D wrapper** around the 3D scene, or fade individual leaf faces.

3. **`visibility: visible` Bleeds Through `visibility: hidden` Parents**
   - **Symptom**: A badge or icon from Scene 3 floats mysteriously in the middle of Scene 1.
   - **Fix**: Hide inactive scenes with `display: none` inside `seek(t)`, or use `visibility: inherit` on children.

4. **Outgoing & Incoming Text Overlap Inside Morphing Shapes**
   - **Symptom**: While a button morphs into a toast or header swaps labels, both labels smash into each other mid-morph.
   - **Fix**: Give outgoing text fast early exit (`0%–35%` of morph duration, `opacity` + `blur(6px)` + `translateY(-8px)`) and incoming text late entrance (`45%–100%`). Wrap inner content in an `overflow: hidden` clip matching the morphing border radius.

5. **`backdrop-filter: url(#svg-displacement)` Fails in Chromium**
   - **Symptom**: SVG `feDisplacementMap` refraction works on regular elements (`filter: url(...)`) but renders flat or misaligned in `backdrop-filter`.
   - **Fix**: Render liquid glass by cloning the background layer inside the glass container's clip mask and applying `filter: url(#refract)` directly to that cloned layer (or composite via `<canvas>`).

6. **White/Dark Cards Vanishing Into Matching Backgrounds**
   - **Symptom**: A `#FFFFFF` card on `#FDFDFB` canvas or `#121520` tile on `#0C0F1A` disappears into an amorphous floating text block.
   - **Fix**: Always give surfaces a `1px` hairline border (`rgba(0,0,0,0.07)` on light; `rgba(255,255,255,0.08)` on dark) plus a subtle multi-layered shadow.

---

## 2. Determinism & Math Traps

7. **`Math.floor(frame)` Breaks Subframe Motion Blur**
   - **Symptom**: Even with `--subframes 4` or `8`, fast moves show distinct stepped ghost copies instead of smooth smear.
   - **Cause**: Rounding `t` to integer frames (`const f = Math.floor(t * 60)`) makes all 4 subframes inside frame `k` render the exact same pixel position!
   - **Fix**: Keep `t` (or fractional `frame = t * fps`) as a continuous floating-point number in every interpolation, spring, and keyframe lookup.

8. **Centered Shutter Bleeds Across Hard Cuts**
   - **Symptom**: Every hard cut has a 1-frame transparent ghost double-exposure of both scenes.
   - **Cause**: Sampling `[t - dt/2, t + dt/2]` grabs subframes from Scene A (`< t_cut`) and Scene B (`>= t_cut`).
   - **Fix**: Place hard cuts on exact integer frame boundaries (`k / fps`) and use a **forward cinema shutter** `[t_k, t_k + shutter / fps)` or discrete `<Sequence>` cuts in Remotion.

9. **Floods That Flash or Miss Corners**
   - **Symptom**: A circle expanding to fill `1920×1080` swaps scenes while the four corners still show the old background, or completes in 3 frames looking like a strobe flash.
   - **Fix**: Compute exact corner hypotenuse `Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) * 1.04` and ease over `0.30–0.36s`.

10. **Camera Zoom Snap on Scene Handoffs**
    - **Symptom**: Scene 1 drifts softly from `zoom 1.00 → 1.04`, then at the shared-element handoff to Scene 2 the background jerks back to `1.00`.
    - **Fix**: Either use **one continuous camera track** across scenes, or start Scene 2's camera at the exact zoom where Scene 1 ended.

11. **Variables Declared After First `seek(0)` Call (TDZ Error)**
    - **Symptom**: Page loads blank or throws `ReferenceError: Cannot access 'X' before initialization`.
    - **Fix**: Declare all lookup tables, schedules, DOM caches, and scene constants **before** calling initial `window.seek(0)`.

12. **Measuring Text Width Before Web Fonts Finish Loading**
    - **Symptom**: Pill widths or underline highlights fall 15px short of the wordmark in headless render.
    - **Fix**: Compute glyph/box measurements lazily inside `window.__ready = document.fonts.ready.then(...)` so Google Fonts / local `.woff2` metrics are active before `seek(t)` runs.

---

## 3. Three.js / WebGL Traps

13. **Shadow Acne Stripes & Far-Plane Z-Fighting**
    - **Fix**: Set `dirLight.shadow.bias = -0.0005`, `shadow.normalBias = 0.02`, and keep camera `near` / `far` tight around actual scene bounds (e.g. `near = 0.5, far = 120`, never `0.001` to `100000`).

14. **Shimmering Far Text on Angled 3D Planes**
    - **Fix**: Generate mipmaps on canvas/DOM textures (`texture.generateMipmaps = true`, `minFilter = THREE.LinearMipmapLinearFilter`) and set `texture.anisotropy = renderer.capabilities.getMaxAnisotropy()`.

---

## 4. Canvas 2D & Kinetic Typography Traps

15. **Masking the `'i'` Tittle Clips Adjacent Glyphs**
    - **Symptom**: Covering the native dot of `'i'` with a background-colored rectangle clips the crossbar of `'t'` or bowl of `'o'` under tight tracking (`-0.03em`).
    - **Fix**: Render the word with Unicode **dotless `'ı'`** (`\u0131`, e.g. `'Mot\u0131on'`) and compute the exact stem center dynamically via `x + ctx.measureText('Mot').width + ctx.measureText('\u0131').width * 0.5`.

16. **Subpixel Anti-Aliasing Seam Bleed on Isometric 2D Polygons**
    - **Symptom**: Adjacent filled faces (`top`, `left`, `right`) of an isometric prism show a faint 0.5px background-color hairline gap along shared edges.
    - **Fix**: Stroke each polygon immediately after `ctx.fill()` using `ctx.lineWidth = 1; ctx.lineJoin = 'round'; ctx.strokeStyle = faceColor; ctx.stroke();`.

17. **Upside-Down Labels on Orbiting Rings**
    - **Symptom**: Rotating pill badges tangentially (`ctx.rotate(angle + Math.PI / 2)`) flips badges on the lower semicircle upside down.
    - **Fix**: Translate to `(cx + cos(a)*r, cy + sin(a)*r)` and draw the badge **horizontally upright** (counter-rotated) so every label stays legible on freeze-frames.

18. **Fixed-X Badges Colliding With Growing Live Counters**
    - **Symptom**: A `+42.8%` delta pill looks fine next to `$34.2k`, then collides once the counter reaches `$128.4k`.
    - **Fix**: Position trailing pills dynamically from `startX + ctx.measureText(counterText).width + gap`.
