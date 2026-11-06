# Remotion Visual QA & Verification Loop

Code that compiles without errors can still produce visual defects: overlapping typography, clipped descenders, blank frames, unreadable contrast, off-beat transitions, or missing brand colors. **Never deliver an animation without verifying keyframe stills and inspecting motion pacing.**

---

## 1. The 3-Step Verification Pipeline

```
[Step 1: Real-time Studio Scrub]  -> npx remotion preview src/index.ts
[Step 2: Keyframe Still Capture]   -> npx remotion still src/index.ts <CompId> still_f<N>.png --frame=<N>
[Step 3: Master 60fps MP4 Render]  -> npx remotion render src/index.ts <CompId> out.mp4
```

---

## 2. Step 1: Real-Time Timeline Scrubbing (`remotion preview`)

Launch the built-in Remotion Studio to scrub every frame interactively:

```bash
npm run preview
# or:
npx remotion preview src/index.ts
```

- **Playback Controls**: Play at 1×, 0.5×, or 0.25× speed to inspect micro-interactions and spring settlement.
- **Scrubbing**: Drag the playhead frame-by-frame across scene transitions (`<Sequence>`) to verify zero 1-frame flashes or content overlaps.
- **Hot Reload**: Edit React code, colors, or typography and see updates instantly without restarting the server.

---

## 3. Step 2: Keyframe Still Inspections (`remotion still`)

Before rendering the full MP4, capture 3–4 critical keyframes (e.g. hook entrance, main climax, transition point, final payoff):

```bash
# Capture keyframe at Frame 30 (0.5s @ 60fps)
npx remotion still src/index.ts <CompId> still_act1.png --frame=30

# Capture keyframe at Frame 180 (3.0s @ 60fps)
npx remotion still src/index.ts <CompId> still_act2.png --frame=180

# Capture final brand lockup
npx remotion still src/index.ts <CompId> still_final.png --frame=720
```

### The 10-Point Keyframe Quality Checklist
1. **Frame 0 Hook**: Is `frame === 0` already visually composed, branded, and captivating (not a blank canvas or empty box)?
2. **Poster Test**: Does each rendered still look like a professional, portfolio-grade graphic design poster?
3. **Zero Text Overlaps**: Do outgoing and incoming texts occupy completely separate timeframes or spatial zones?
4. **Descender & Padding Safety**: Are letters with descenders (`g, j, p, q, y`) or tall ascenders (`t, l, d`) clipped by overflow masks?
5. **Hairline Separation**: Do elevated cards/surfaces have crisp 1px borders (`rgba(255,255,255,0.08)` or `rgba(0,0,0,0.08)`) and realistic multi-tier shadows?
6. **Legibility & Hierarchy**: Is the primary message immediately identifiable within 200ms? Is secondary copy sized appropriately?
7. **Brand Mark Integrity**: Are logos, emblems, and typography true to the brand's vector identity, proportions, and official colors?
8. **Beat Locking**: Do visual hits, card arrivals, and cuts align mathematically with the tempo (e.g. 120 BPM = 30 frames per beat @ 60fps)?
9. **Final Rest Hold**: Does the concluding scene or brand payoff hold steady for at least 1.0–2.0s so viewers can absorb the CTA?
10. **Loop Seam Continuity** *(if loop)*: Does the final frame mathematically match Frame 0 in position, scale, and color?

---

## 4. Step 3: Full 60fps MP4 Production Render (`remotion render`)

Once keyframes pass inspection, render the final video:

```bash
# Render master video with GPU acceleration
npx remotion render src/index.ts <CompId> out.mp4

# Or specify custom resolution / frame range if testing:
npx remotion render src/index.ts <CompId> out_preview.mp4 --frames=0-120
```

### Render Configuration Best Practices (`remotion.config.ts`)
Ensure `remotion.config.ts` binds directly to system Chrome for maximum performance and hardware acceleration:

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
