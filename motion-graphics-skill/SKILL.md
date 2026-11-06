---
name: motion-graphics
description: >-
  Studio-grade programmatic motion graphics, enterprise brand films, kinetic typography,
  product launch films, social reels, UI loops, and animated explainers built with React and Remotion.
  Activate whenever the user asks to design, animate, or render motion graphics, brand identity
  films (e.g. airlines, tech, schools, public institutions), product promos, or 60fps MP4 videos from React code.
---

# Adaptive React & Remotion Motion Graphics Skill

This skill guides the design, context-aware art direction, fluid narrative structuring, and headless MP4 rendering of studio-grade motion graphics using **React and Remotion**.

> **Core Philosophy**:
> "Form follows context."  
> Never force a rigid template or fixed act count onto every video. Evaluate the brand, duration, aspect ratio, and audience first—then autonomously select the ideal structural archetype and modern design language to build a bespoke React composition.

---

## 1. Pre-Flight Asset Inquiry & Evaluation (Step 0)

Before authoring code or rendering, execute the **Asset Inquiry & Context Diagnosis**:

### 🎯 Mandatory Asset Inquiry Rule (에셋 보유 여부 질의 필수 규칙)
Unless the user has already explicitly supplied image files, logos, or design tokens in their prompt, **you MUST actively ask the user about their existing assets**:

> **질의 표준 템플릿 (Asset Inquiry Template)**:
> "혹시 영상에 활용할 **브랜드 로고(SVG/PNG), 제품 스크린샷, 실사 사진, 공식 색상(HEX), 슬로건/카피** 등의 에셋이 있으신가요?
> 1. **보유 에셋이 있으신 경우**: 파일 경로를 알려주시거나 프로젝트 내 `public/` 폴더에 넣어주시면 영상에 정밀하게 맵핑해 드립니다.
> 2. **보유 에셋이 없으시거나 직접 제작을 원하시는 경우('알아서 해줘')**: 제가 브랜드/단체의 공식 CI 벡터를 직접 복원하고, 시네마틱 비주얼과 맞춤형 UI 컴포넌트를 자체 설계하여 완성해 드립니다."

### 3-Track Asset Execution Routing:
- **Track A (User-Provided Assets)**:
  - Check local workspace / `public/` folder first.
  - Ingest SVG vector paths, high-res images, and screenshots via `staticFile('...')`.
  - Apply Ken Burns micro-panning (`references/asset-orchestration.md`) and 3D perspective mockups.
- **Track B (Zero Assets / Autonomous Generation)**:
  - If the user says "없어", "알아서 해줘", or provides no assets: **never stall or get blocked**.
  - Autonomously reconstruct official corporate identity (CI) vector marks (`references/brand-identity-and-ci.md`).
  - Synthesize domain-authentic visual metaphors, styled cards, vector badges, and geometric motifs.
- **Track C (Hybrid Orchestration)**:
  - User provides only a logo or URL: extract color tokens, autonomously build the product UI, dashboards, and narrative world around it.

---

### Project Context Diagnosis (4 Dimensions)

```
1. Target Platform & Aspect Ratio:
   • 16:9 Landscape (1920×1080)  -> YouTube, hero landing pages, keynote showreels
   • 9:16 Vertical (1080×1920)   -> TikTok, Instagram Reels, YouTube Shorts
   • 1:1 Square (1440×1440)      -> Twitter/X feeds, Instagram posts, tactile UI loops
   • 4:5 Portrait (1080×1350)    -> Social marketing feeds

2. Duration & Pacing:
   • Ultra-Short (3–7s)   -> Kinetic logo bumper, looping signature motif, micro-interaction
   • Short-Form (8–15s)   -> High-retention social reel, viral product feature, elevator pitch
   • Mid-Length (15–30s)  -> Full brand identity film, comprehensive product launch
   • Long-Form (30–60s)   -> Multi-chapter product explainer, company anniversary, showreel

3. Entity Identity & Tone:
   • Enterprise / Airline / Automotive -> Dignified, expansive, aerodynamic, luxurious
   • High-Growth Tech / SaaS / AI      -> Crisp, tactile, hyper-velocity, titanium dark
   • Academic / University / Cultural  -> Historic, authoritative, editorial serif, intellectual
   • Consumer / Creative / Lifestyle   -> Vibrant, tactile, elastic, typographic play

4. Narrative Arc & Message Hierarchy:
   • Hook (0–20%) -> Substantiation/Feature (20–70%) -> Brand Payoff & CTA (70–100%)
```

---

## 2. Adaptive Structural Archetypes

Select the narrative structure that naturally fits the duration and objective—never force a rigid 4-act mold when an agile loop or 2-beat punch is superior:

| Archetype | Typical Duration | Rhythm & Scene Structure | Best Used For |
| :--- | :--- | :--- | :--- |
| **A. Kinetic Bumper / Micro-Loop** | `3s – 6s` (6–12 beats) | **Single-focus momentum**: Instant visual hook → Continuous seamless morph → Hero logo lockup (loop seam delta < 0.05). | Logo reveals, signature UI loops, app loading states |
| **B. Vertical Social Reel / Shorts** | `8s – 15s` (16–30 beats) | **3-Second Rule**: 0–1s Bold Thumb-stopping Hook → 2–10s Rapid Kinetic Substantiation (3 staggered fast cuts) → 11–15s Punchy Call-To-Action (CTA). | Instagram Reels, TikTok, YouTube Shorts |
| **C. Narrative Brand Film** | `15s – 30s` (30–60 beats) | **4-Act Symphonic Arc**: The Departure/Hook (0–20%) → The Substance/Network (20–55%) → The Stratospheric Elevation (55–80%) → The Iconic Payoff (80–100%). | Major brand films (e.g. Korean Air, Apple-level launch) |
| **D. Multi-Chapter Explainer** | `30s – 60s` (60–120 beats) | **Chaptered Journey**: Pain Point Hook → Architectural Breakdown → Deep-Dive Feature Demo → Social Proof & Ecosystem → Final Brand Lockup. | SaaS explainers, institutional overviews, investor decks |
| **E. Continuous Shape Morph** | Any duration | **Unbroken Identity**: One primary container never cuts or leaves the screen; continuously morphs dimension, radius, and internal contents. | Tactile UI showcase, product morph loops |

---

## 3. The Modern Design Language Spectrum

Autonomously select the visual language that matches the entity's personality:

```
[1. Swiss Neo-Brutalist]    Ultra-disciplined grids, bold grotesque sans (Geist, Inter), high-contrast paper/ink, zero fluff.
[2. Luxury Dark Titanium]   Apple/Stripe aesthetic, deep obsidian (#0B0C10), 1px hairline borders, metallic glints, warm gold/vermilion.
[3. Editorial Serif & Film] Academic & cultural dignity, bold modern serif (Instrument Serif, Editorial New), warm paper, letterspacing.
[4. Optical Halftone & Dot] Studio graphic craft, responsive dynamic dot matrix, halftone wave transitions, retro-modern vibe.
[5. Tactile Physical UI]    SaaS & tool mastery, physical press springs, rubber-band dragging, liquid tabs, physics cursors.
[6. Cinematic Aerodynamic]  Aviation, automotive, mobility; sweeping flight paths, telemetry HUDs, horizon lighting, expansive scale.
[7. Vibrant Pop & Geometry] Creative apps, consumer tools; bold flat color blocks, elastic shape transitions, punchy typography.
```

*(See [references/design-styles.md](references/design-styles.md) for code recipes, palettes, and typography pairings for each style).*

---

## 4. Remotion Project Architecture

Every project uses the verified, zero-magic-number Remotion structure:

```
my-motion-project/
├── package.json             # remotion, @remotion/cli, react, react-dom
├── remotion.config.ts       # System Chrome/Edge GPU D3D11 acceleration
├── tsconfig.json            # ES2022, NodeNext, jsx: react-jsx
└── src/
    ├── index.ts             # registerRoot(Root) entry point
    ├── Root.tsx             # <Composition> registry (dimensions, fps, duration)
    ├── compositions/        # Master composition timeline
    ├── scenes/              # Modular <Sequence> scenes
    ├── components/          # Reusable UI, Brand Logos, Cursors, Mockups
    └── constants/           # Palette, 120 BPM timing helpers, typography
```

### `remotion.config.ts` (System Chrome Integration)
```ts
import { Config } from '@remotion/cli/config';
import fs from 'node:fs';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

if (fs.existsSync(chromePath)) {
  Config.setBrowserExecutable(chromePath);
} else if (fs.existsSync(edgePath)) {
  Config.setBrowserExecutable(edgePath);
}

Config.setVideoImageFormat('jpeg');
Config.setChromiumOpenGlRenderer('angle');
Config.setConcurrency(4);
```

---

## 5. Execution & Rendering CLI

```bash
# 1. Interactive Studio preview (scrubbable timeline & real-time HMR)
npm run preview   # or: npx remotion preview src/index.ts

# 2. Render 60fps Master MP4
npm run build     # or: npx remotion render src/index.ts <CompId> out.mp4

# 3. Capture high-res keyframe still
npx remotion still src/index.ts <CompId> still_frame.png --frame=60
```

---

## 6. Reference Documentation Index

When authoring specific aspects of a motion graphic, consult these in-depth guides:

- **[structural-archetypes.md](references/structural-archetypes.md)**: 5 structural blueprints (Micro-loops, Social Reels, Brand Films, Multi-chapter Explainers, Continuous Morphs).
- **[design-styles.md](references/design-styles.md)**: 7 modern design styles (Swiss Neo-Brutalist, Dark Titanium, Editorial Serif, Optical Halftone, Tactile UI, Cinematic Mobility, Vibrant Pop) with palettes and typography.
- **[brand-identity-and-ci.md](references/brand-identity-and-ci.md)**: Autonomous vector CI reconstruction, logo reveal mechanics, color rules, and brand motifs.
- **[storytelling-and-narrative.md](references/storytelling-and-narrative.md)**: Narrative arc, visual metaphors, shared-object transitions, and pacing.
- **[asset-orchestration.md](references/asset-orchestration.md)**: Ken Burns pan/zoom, perspective mockups, SVG vector badges, and visual hierarchy.
- **[remotion-patterns.md](references/remotion-patterns.md)**: Spring mechanics, `interpolate()`, camera containers, stagger cascades, and `<Sequence>` orchestration.
- **[ui-motion-recipes.md](references/ui-motion-recipes.md)**: Cursors, live counters, sliders, modals, notification cards, and graphs.
- **[remotion-qa-and-verification.md](references/remotion-qa-and-verification.md)**: 3-step QA loop, 10-point poster checklist, and headless GPU rendering.
- **[timing.md](references/timing.md)**: 120 BPM musical beat grids, frame math, stagger offsets, and hold limits.
- **[motion-math.md](references/motion-math.md)**: Harmonic springs, seeded PRNG, and logarithmic camera zoom.
- **[gotchas.md](references/gotchas.md)**: Chromium rendering traps, `preserve-3d`, overflow masks, and text blur avoidance.

