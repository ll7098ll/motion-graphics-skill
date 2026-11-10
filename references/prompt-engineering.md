# Prompt Motion Master Prompt Engineering

This reference defines the prompt engineering framework reverse-engineered from **https://prompt-motion.com/**—the curated gallery of Claude Opus 5.5 motion graphics. It enables generating studio-grade motion prompts that produce broadcast-quality React/Remotion code on the very first shot.

---

## 1. The Anatomy of a Prompt-Motion Master Prompt

A high-performing motion prompt never asks generically for "an animation." It acts as a comprehensive creative brief, technical specification, and art-directed storyboard in one coherent prompt.

Every master prompt must contain these **6 Essential Pillars**:

```
┌─────────────────────────────────────────────────────────────┐
│ 1. World-Class Persona & Role Framing                      │
│ 2. Art Direction & Sensory Design Tokens                    │
│ 3. Beat-Synced Timeline Breakdown (Second by Second)        │
│ 4. Kinetic Physics & Remotion Mathematical Directives       │
│ 5. Strict Banned Clichés (Negative Directives)             │
│ 6. Self-Contained React/Remotion Execution Rules            │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Pillar Deep-Dive & Formula

### Pillar 1: World-Class Persona & Role Framing
Set an elite standard and establish creative references:
> *"Act as a world-class motion designer and creative technologist whose work is showcased at Apple Keynotes, Stripe Press, and Pentagram. Approach this video as a showreel piece for your portfolio—go all out with extreme polish, micro-interactions, and visual depth."*

### Pillar 2: Art Direction & Sensory Design Tokens
Define explicit color tokens, typography pairings, and atmospheric textures:
- **Canvas / Base**: Deep Obsidian (`#08090C`), Titanium Slate (`#12141C`) or Swiss Paper (`#F4F2EB`).
- **Accent**: High-voltage electric accents (e.g., `#FF4F17` Vermilion, `#00E5FF` Cyan, `#E8B84B` Metallic Gold).
- **Hairlines & Glass**: `1px solid rgba(255,255,255,0.08)`, `backdrop-filter: blur(24px)`.
- **Atmosphere**: Radial gradient lighting sweeps, 48px subtle dot grid, filmic grain or subtle particle drift.
- **Typography**: Editorial contrast—Ultra-bold grotesque sans (`font-weight: 800`, letter-spacing: `-0.04em`) paired with monospace metadata tags (`JetBrains Mono`, `font-size: 12px`, uppercase).

### Pillar 3: Beat-Synced Timeline Breakdown
Structure the video with precise second-by-second timestamps and scene actions locked to a 120 BPM grid (1 beat = 0.5s = 30 frames at 60fps):
- **0.0s – 2.5s (The Thumb-Stopping Hook)**: A high-velocity emergence, 3D perspective entrance, or dramatic kinetic type burst.
- **2.5s – 6.5s (The Tactile Core / Feature Demo)**: Tangible UI components, live counter interpolations, fluid tab swaps, spring-loaded buttons, or interactive telemetry.
- **6.5s – 10.5s (The Climax / Spatial Elevation)**: 3D camera pan/tilt, macro perspective reveal, glowing burst, or data swarm convergence.
- **10.5s – 15.0s (The Iconic Payoff & Poster State)**: Hero brand emblem assembly, editorial tagline, glowing signature accent, settling on an immaculate freeze-frame poster state.

### Pillar 4: Kinetic Physics & Remotion Directives
Prescribe physical properties so animations feel weighty and tangible:
- **Spring Solver**: `spring({ frame, fps, config: { damping: 14, stiffness: 140, mass: 0.85 } })` for snappy UI; `damping: 20, stiffness: 90` for majestic cards.
- **Micro-Staggers**: Cascade child elements with 2–4 frame delays (`delay = index * 3`).
- **Spatial 3D**: `transform: perspective(1200px) rotateX(...) rotateY(...) translateZ(...)`.
- **Shared Object Handoff**: Connect scenes through an uninterrupted hero element that morphs its scale, radius, and contents rather than using generic crossfades.

### Pillar 5: Strict Banned Clichés (Negative Directives)
Prevent generic AI animation pitfalls:
- ❌ NO amateur PowerPoint opacity fades or linear slides.
- ❌ NO static dead time where elements sit frozen without micro-drift.
- ❌ NO empty uncluttered void backgrounds—always layer subtle ambient glow, grid lines, or coordinates.
- ❌ NO raw robotic numbers jumping instantly—always interpolate continuous counters with `.toFixed()`.
- ❌ NO unstyled HTML defaults or stock emoji.

### Pillar 6: Self-Contained Execution Rules
Guarantee error-free compilation:
- Write 100% self-contained React/TSX code using Remotion's native APIs (`AbsoluteFill`, `useCurrentFrame`, `useVideoConfig`, `interpolate`, `spring`, `Sequence`).
- Autonomously generate all SVG icons, decorative glyphs, and UI cards with inline styles or SVG paths—zero external asset dependencies unless provided.

---

## 3. Production-Ready Master Prompt Templates

### Template A: High-Growth SaaS / AI Launch Film (15s, 16:9)

```markdown
Act as a world-class motion designer. Create a broadcast-grade 15-second 60fps Remotion composition for a next-generation AI infrastructure product named "[PRODUCT_NAME]".

[CREATIVE DIRECTION]
- Aesthetic: Luxury Dark Titanium meets Apple Keynote. Deep obsidian canvas (#090A0F) with slate cards (#131620), 1px frosted borders (rgba(255,255,255,0.08)), and electric emerald/amber accents (#10B981, #F59E0B).
- Atmosphere: Radial gradient spotlight tracking camera focus, subtle 32px registration dot matrix, and floating particle telemetry.
- Typography: High-contrast pairing—Inter 800 (-0.03em letter spacing) for impact headlines, JetBrains Mono 11px uppercase for latency and token telemetry.

[TIMELINE & BEAT STRUCTURE (120 BPM, 60fps = 900 frames)]
- Scene 1 (0.0s – 3.0s | 0–180f): "The Genesis Hook"
  A miniature glowing processor die in the center scales up via a damped spring. Concentric radar ripples emit outwards. Kinetic typography snaps in: "[HERO_HOOK_TEXT]".
- Scene 2 (3.0s – 7.5s | 180–450f): "The Autonomous Engine"
  The die expands into an interactive 3D tilted card (perspective 1200px, rotateX 6deg, rotateY -4deg). Live telemetry streams: latency dropping from 240ms to 8.4ms, throughput rolling from 1.2k to 148.9k req/s, and a live animated SVG spline chart drawing itself.
- Scene 3 (7.5s – 11.0s | 450–660f): "Global Distribution"
  Camera sweeps in a dramatic log-zoom. The card dissolves into a constellation of interconnected regional cluster nodes. Glowing pulses travel along Bezier flight paths between Seoul, Tokyo, SF, and London.
- Scene 4 (11.0s – 15.0s | 660–900f): "The Climax & Signature Lockup"
  All nodes collapse inward into a high-energy flash. Out of the flash emerges the official [PRODUCT_NAME] vector emblem with a sweeping metallic border-beam shimmer. Slogan reveals with character-staggered spring: "[PRODUCT_SLOGAN]". Settles into an immaculate poster frame.

[MOTION PHYSICS]
- Use Remotion's `spring()` for all entrances (damping: 15, stiffness: 130, mass: 0.9).
- Apply smooth cubic-bezier easing (`Easing.bezier(0.16, 1, 0.3, 1)`) for interpolations.
- Staggered reveals on all data rows by 3 frames each.

[BANNED]
- No plain opacity crossfades.
- No static text or empty backgrounds.
- No hard cuts without spatial continuity.

Deliver complete, self-contained, and runnable React Remotion TSX code.
```

---

### Template B: Mobile Viral Reel / Shorts (10s, 9:16)

```markdown
Act as an elite short-form motion director. Create an ultra-high-retention 10-second (600 frames at 60fps) vertical (1080x1920) Remotion video announcing "[FEATURE_OR_APP]".

[CREATIVE DIRECTION]
- Aesthetic: Swiss High-Voltage Neo-Brutalism. Pure stark paper (#F2EFE9) or Pitch Black (#0A0A0C) with international safety orange (#FF4000) and electric cobalt (#0040FF).
- Rhythm: Aggressive 128 BPM pulse (1 beat = 28 frames). Every cut coincides with a musical beat.
- Safe Area: All critical titles, cards, and animations centered within vertical safe margins (top 15%, bottom 20%).

[TIMELINE BREAKDOWN]
- Beat 1–3 (0.0s – 1.4s): "The 0.8s Thumb-Stopper"
  Screen explodes with massive, oversized kinetic typography filling 70% of the viewport: "[STOPPER_LINE_1]" followed by "[STOPPER_LINE_2]". Letter-masked upward spring snap.
- Beat 4–12 (1.4s – 5.6s): "The 3-Beat Feature Blitz"
  Rapid-fire demonstration of 3 core superpowers (1.4s each):
  1. Feature A: Tactile toggle switch flicks, instantly transforming card state.
  2. Feature B: Live AI generation stream with animated waveform pill.
  3. Feature C: Counter climbs from 0 to 100% with haptic pulse checkmark.
- Beat 13–16 (5.6s – 7.5s): "The Proof / Metric Punch"
  A floating glass card tilts forward with dynamic simulated cursor click, showing a bold metric badge: "[KEY_METRIC]".
- Beat 17–21 (7.5s – 10.0s): "The High-Conversion Outro"
  High-energy brand lockup with bouncing arrow indicator and pulsing pill button: "[CALL_TO_ACTION]".

[EXECUTION]
- Use heavy, snappy spring physics (stiffness: 220, damping: 13, mass: 0.6).
- Include dynamic simulated cursor and animated drop shadows.
- Self-contained React/TSX code ready to render with Remotion CLI.
```

---

### Template C: Elite Motion Designer Showreel Opener (20s, 16:9)

```markdown
Act as the world's most visionary creative technologist and motion director. Build an awe-inspiring 20-second (1200 frames at 60fps, 1920x1080) motion graphics showreel opening for "[STUDIO_OR_NAME]".

[CREATIVE DIRECTION]
- Aesthetic: Optical Halftone, Dynamic Grid Geometry, and Liquid Glass. Deep obsidian background (#060709) with monochrome typography, iridescent chromatic glints, and razor-sharp geometric wireframes.
- Core Theme: "Precision meets Fluidity."
- Audio Cues: 120 BPM dark electronic beat with sub-bass pulses on downbeats.

[SCENE SCRIPT]
- Act 1 (0–4s): Generative grid lines sweep across the canvas. A dynamic dot-matrix field expands outwards from cursor coordinates. Hero typography reveals with split-flap letter flips: "[CREATIVE_TITLE]".
- Act 2 (4–9s): The typography collapses into a 3D isometric cube whose faces display live UI widgets: an interactive audio visualizer curve, an SVG vector pen path, and a generative code terminal.
- Act 3 (9–15s): The cube unfolds into a 3D gallery carousel with seamless perspective depth and velocity-based motion blur simulation.
- Act 4 (15–20s): Dynamic camera pull-back into a monolithic brand emblem with golden foil lighting shimmer and coordinates HUD. Settles into a museum-grade poster frame.

Deliver production-ready Remotion TSX code.
```

---

## 4. How the Skill Leverages These Prompts

When the user asks to create motion graphics:
1. **Analyze the Topic**: Extract domain, narrative hook, color tokens, and target platform.
2. **Synthesize the Prompt-Motion Master Prompt**: Formulate the bespoke prompt following the 6 pillars.
3. **Execute or Present**:
   - Offer the user the master prompt so they can customize or copy it.
   - Concurrently generate and test the Remotion TSX code so the video is rendered at broadcast quality.
