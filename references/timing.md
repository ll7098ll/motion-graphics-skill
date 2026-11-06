# Rhythm, Beat Grids, Staggering & Loop Timing

"Dynamic" is not a timing instruction. Top-performing pieces lock every scene change, click, and typographic hit onto an explicit **musical beat grid**.

---

## 1. The Beat Grid Formula

Choose a tempo matching the mood and derive all timestamps mathematically:

| Mood / Genre | Tempo (BPM) | 1 Beat ($\Delta t_b$) | 1 Bar (4 beats) | Frames / Beat @ 60fps |
| :--- | :---: | :---: | :---: | :---: |
| Calm Executive / Luxury Product | `112–116` | `0.536–0.517s` | `2.14–2.07s` | `32–31 frames` |
| **Standard Crisp Product / Showreel** | **`120`** | **`0.500s`** | **`2.00s`** | **`30 frames`** |
| Punchy Social Sting / Launch | `124–130` | `0.484–0.462s` | `1.94–1.85s` | `29–28 frames` |

$$\text{time}(b) = t_0 + b \cdot \frac{60}{\text{BPM}}$$

### Pacing Laws
1. **First 1.5 seconds**: Frame 0 must already look composed and premium. The first meaningful visual action or UI interaction must land by `t = 1.2–2.0s` (never a 4-second slow logo fade!).
2. **Event density**: Something visually meaningful changes on **every beat** (or every 2 beats during calmer reading moments).
3. **2-Frame Cut Anticipation**: In fast-cut editorial sequences, placing a hard cut **2 frames (~33ms @ 60fps) BEFORE** the musical downbeat makes the cut feel crisp and perceptual-locked rather than late.
4. **Rhythmic Breathing**: Vary intensity across the arc—e.g. tight 1-beat hits during the middle buildup, then deliberately **slow the rhythm for 1 bar** before the final brand payoff so the ending feels earned.

---

## 2. Calibrated Durations & Stagger Intervals

Avoid uniform durations across elements. Use these battle-tested timings:

| Motion Element | Duration | Stagger Offset | Notes |
| :--- | :---: | :---: | :--- |
| **Glyph-by-glyph kinetic slam** | `0.22–0.32s` | `0.020–0.035s` | Fast display words (≤ 12 chars) |
| **Word-by-word masked rise** | `0.32–0.42s` | `0.050–0.085s` | E.g. rise `16–24px` out of mask or `12px → 0px` blur |
| **UI row / list / chip cascade** | `0.35–0.48s` | `0.060–0.120s` | Subtle overlap—next starts before previous settles |
| **Card / surface arrival** | `0.45–0.65s` | `0.100–0.180s` | `opacity` + `translateY` + subtle `scale(0.96 → 1)` |
| **Exits vs. Entrances** | **1.6×–2.0× faster** | `0.020–0.040s` | Outgoing elements must clear **before** incoming text occupies the same region (`~0.18–0.25s`) |
| **Full-screen shape flood** | `0.30–0.38s` | — | Faster than `0.20s` reads as a glitchy flash; slower than `0.50s` drags |
| **Cursor hover → click press** | `0.08s` down, `0.14s` release | — | Shrink cursor/button `8–15%` during press frames |
| **Natural typing cadence** | `0.035–0.055s / char` | +`0.05s` micro-pause at spaces | Deterministic lookup table `typedCount(t)` |

---

## 3. Hold Limits & Micro-Alive Motion

- **Showreels / Loops**: Never hold completely static for longer than **0.50s** unless making a single deliberate dramatic pause.
- **Product / Explainer Films**: Hold only long enough to read on-screen copy (`~1.2–2.2s`), and keep the frame **alive** during the hold via **one** restrained continuous motion:
  - Camera creeps `1.00 → 1.03` slowly across the shot (carry that zoom into the handoff—never snap back to `1.00`!).
  - Chart progress line finishes settling while secondary badge arrives `0.12s` later.
  - Cursor glides smoothly toward its next target.

---

## 4. Seamless Loop Boundary Engineering (`frame 0 === frame last`)

Social feeds (X, Instagram, Dribbble, landing heroes) replay videos continuously. A 1-pixel or velocity mismatch at the seam creates a visible stutter.

1. **Exact State Identity**: At `t = duration`, every visible element's `(x, y, scale, rotation, borderRadius, color, opacity)` AND cursor position must equal `t = 0`.
2. **Velocity Continuity**: Either both `t = 0` and `t = duration` sit in a settled rest pose, OR both share the exact same instantaneous velocity vector (e.g., evaluating a periodic function or wrapping spring history across one period `seek(t)` vs `seek(t + duration)`).
3. **Occlusion Reset Trick**: If complex scene geometry accumulated transforms across the film, flood or track past a foreground surface near `t = duration - 0.8s`; while 100% occluded, reset hidden elements to their `t = 0` coordinates, then pull back or contract into the exact opening composition.
4. **Frame Indexing**: For an `N`-frame loop (`N = duration * fps`), render frames `k = 0 .. N - 1` at `t = k / fps` (do **not** render both `t = 0` and `t = duration`, or the seam frame plays twice for 33ms!).
