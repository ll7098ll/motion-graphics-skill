# Deterministic Motion Mathematics (`seek(t)`)

Every visual property in a renderable motion graphic **must be a pure closed-form function of `t` (seconds)**. Never use `CSS transition`, `CSS @keyframes`, `setTimeout`, `setInterval`, `Math.random()`, or mutable `pos += vel * dt` state across frames.

Why?
1. Headless frame capture steps `t` at arbitrary fractional subframe times (`t + offset` for motion blur) and during random-access scrubbing.
2. Mutable Euler integration (`x += v * dt`) explodes or changes trajectory depending on frame rate and call order.

---

## 1. Closed-Form Damped Harmonic Oscillator (Springs)

A unit step from `0 → 1` starting at $\Delta t = t - t_{\text{start}} \ge 0$ with natural frequency $f$ (Hz, $\omega_0 = 2\pi f$) and damping ratio $\zeta$:

$$s(\Delta t) = \begin{cases}
0 & \Delta t \le 0 \\
1 - e^{-\zeta \omega_0 \Delta t}\!\left(\cos(\omega_d \Delta t) + \dfrac{\zeta \omega_0}{\omega_d}\sin(\omega_d \Delta t)\right), \quad \omega_d = \omega_0\sqrt{1-\zeta^2} & 0 < \zeta < 1 \\
1 - (1 + \omega_0 \Delta t)\,e^{-\omega_0 \Delta t} & \zeta = 1 \\
\end{cases}$$

### Choosing $(f, \zeta)$ — Peak Overshoot Calibration

Peak overshoot for $0 < \zeta < 1$ is $\text{OS} = \exp\!\left(-\pi \zeta / \sqrt{1 - \zeta^2}\right)$:

| Preset Role | `freq` ($f$) | `zeta` ($\zeta$) | Peak Overshoot | Settle Time ($\pm 0.5\%$) | Feel |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Heavy Architectural / Camera** | `2.0 Hz` | `1.00` | `0.0%` | `0.58s` | Machined, zero bounce |
| **Apple / Stripe Surface** | `2.8 Hz` | `0.86` | `0.6%` | `0.35s` | Confident, weighted arrival |
| **Crisp UI Morph (Default)** | `3.5 Hz` | `0.82` | `1.1%` | `0.29s` | "Tiny overshoot at most" |
| **Tactile Toggle / Dot Pop** | `4.4 Hz` | `0.74` | `3.1%` | `0.26s` | Snappy physical click |
| ❌ *Cartoon Bounce (Avoid on UI)* | *any* | *`< 0.55`* | *`> 12%`* | *wobbles* | *Cheap template look* |

### Multi-Target Spring Superposition

When a single property (e.g., morphing container `width`, `radius`, or ball `x`) changes target $M$ times at $(t_1, v_1), (t_2, v_2), \dots, (t_M, v_M)$ from initial value $v_0$:

$$x(t) = v_0 + \sum_{i=1}^{M} (v_i - v_{i-1}) \cdot s_i(t - t_i)$$

Because linear ODEs obey superposition, summing step responses gives **exact physical momentum preservation** when a new target fires mid-flight—while remaining 100% stateless!

### Analytical Instantaneous Velocity (for Directional Motion Blur)

For $0 < \zeta < 1$, the derivative of the unit step response is:

$$\dot{s}(\Delta t) = \frac{\omega_0^2}{\omega_d}\,e^{-\zeta \omega_0 \Delta t}\sin(\omega_d \Delta t)$$

Multiply by $(v_i - v_{i-1})$ and sum across active steps to get exact velocity $(v_x, v_y)$ in `px/s`. Convert to per-frame motion smear radius:
$$\sigma_x = \text{clamp}\!\left(\frac{|v_x|}{60} \cdot 0.35,\; 0,\; 18\right)$$

---

## 2. Leading / Trailing Dual-Spring Trick (Liquid Tabs & Toggles)

To make a pill indicator, toggle thumb, or selection highlight stretch organically like liquid during movement without wobble:
- Compute its **left edge** and **right edge** from two springs—give the **leading edge** a faster spring (`freq: 4.6, zeta: 0.85`) and the **trailing edge** a slightly slower spring (`freq: 3.1, zeta: 0.88`).
- When moving right (`next > prev`), `right` uses the fast spring and `left` uses the slow spring; reverse when moving left!
- Width is simply `right(t) - left(t)`: it stretches cleanly in flight and lands flush with zero extra keyframes.

---

## 3. Log-Space Camera Zoom & Speed-Curve Integration

### Why Linear Zoom Breaks
Interpolating `zoom` linearly from `1.0 → 8.0` traverses `1.0 → 2.0` (a 2× visual doubling!) in just `14%` of the duration and crawls through `7.0 → 8.0` at the end.

**Always interpolate zoom in logarithmic space:**
$$z(u) = \exp\!\big(\text{lerp}(\ln z_0,\; \ln z_1,\; \text{ease}(u))\big)$$

Apply the single world camera transform about screen center `(W/2, H/2)` looking at world point `(cx, cy)`:
```js
// Canvas 2D:
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.translate(W / 2, H / 2);
ctx.scale(cam.zoom, cam.zoom);
ctx.translate(-cam.x, -cam.y);

// DOM container (#world inside #stage, transform-origin: 0 0):
world.style.transform = `translate3d(${W / 2 - cam.x * cam.zoom}px, ${H / 2 - cam.y * cam.zoom}px, 0) scale(${cam.zoom})`;
```
*(Gotcha: Never put `will-change: transform` on children inside a camera-scaled DOM container, or Chromium rasterizes them at `1x` bitmap resolution and blurs all text when zoomed in!)*

### Continuous Fly-Over via Speed-Curve Integration
When gliding steadily across a long page or timeline, **do not** place position keyframes every 0.5s (which creates tiny surges and dips). Define a piecewise speed profile $v(\tau)$ (e.g. trapezoid ramp-up → constant cruise → smooth decel) and integrate analytically or via fixed high-res Riemann steps `N = 256` from `0` to `t`.

---

## 4. Seeded Deterministic Randomness

Never call `Math.random()`. Derive every star position, letter-scramble order, noise sample, or micro-variation from integer seeds:

```js
function hash01(seed) {
  let h = Math.imul(seed ^ 0x9e3779b9, 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

// Seeded Fisher-Yates shuffle (e.g. glyph scramble that locks onto target word on the beat)
function seededShuffle(arr, seed) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(hash01(seed * 1009 + i) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
```
