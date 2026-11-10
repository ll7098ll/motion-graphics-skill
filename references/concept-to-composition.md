# Concept-to-Composition Intelligence Pipeline

This guide outlines how to autonomously transform any user-provided topic or product concept into a compelling, studio-grade motion storyboard and Remotion composition structure.

---

## 1. The 4-Step Concept Decomposition Framework

When a topic is given (e.g., *"Autonomous AI Coding Agent"*, *"Specialty Pour-Over Coffee Roastery"*, *"Zero-Trust Cloud Security"*, *"Luxury Electric Hypercar"*), immediately run this decomposition:

```
┌────────────────────────────────────────────────────────┐
│ Step 1: Core Essence & Domain Archetype Extraction     │
│ Step 2: Bespoke Visual Metaphor & Tangible Object Map  │
│ Step 3: Aesthetic Language & Color/Type Token Pairings  │
│ Step 4: Beat-Synchronized Scene Storyboard (120 BPM)   │
└────────────────────────────────────────────────────────┘
```

---

## 2. Step-by-Step Breakdown

### Step 1: Core Essence & Domain Archetype Extraction

Identify:
- **Primary Domain**: Tech/SaaS, Lifestyle/Consumer, FinTech, Academic/Cultural, Automotive/Mobility, Entertainment.
- **Core Value Proposition**: Speed, Precision, Trust, Elegance, Creativity, Disruption.
- **Audience Context**: Engineers, C-level executives, TikTok consumers, Luxury buyers.

### Step 2: Bespoke Visual Metaphor & Tangible Object Map

Never show abstract colored rectangles when domain-authentic objects create instant credibility:

| Domain | Core Metaphor | Tangible Visual Objects | Dynamic Micro-Interactions |
| :--- | :--- | :--- | :--- |
| **AI Developer Tools** | Thought speed, flawless syntax | Terminal cursor, AST node graphs, split diff view, latency clock | Token streaming, auto-complete flicker, test pass checkmarks |
| **FinTech & Payments** | Liquid wealth, surgical precision | Obsidian credit card, encrypted chip, ledger stream, live ticker | Card 3D tilt glint, rolling currency counter, haptic approval pulse |
| **Cloud / Cyber Security** | Impenetrable barrier, real-time perimeter | Hexagonal shield lattice, radar sweep, telemetry node cluster | Threat ping deflection, status chip swap (Red -> Emerald) |
| **Craft Coffee / Food** | Organic alchemy, artisanal patience | Extraction drip rings, golden hour lighting, temperature dial, beans | Fluid ripple expansion, brewing steam particles, origin coordinates |
| **Mobility & Aerospace** | Seamless transit, conquering horizon | Flight vector arc, altimeter HUD, fuselage contour, airspeed dial | Waypoint line tracing, altitude counter climb, horizon glow |
| **Design / Creative Tools** | Infinite canvas, raw imagination | Bezier pen nodes, color picker eyedropper, layer stack, glass lenses | Vector curve tugging, palette color flood, lens refraction |

### Step 3: Aesthetic Language & Token Pairings

Select the visual language from `references/design-styles.md` and define explicit tokens:

```typescript
// Example: Luxury Dark FinTech / AI Tokens
export const THEME = {
  canvas: '#08090C',
  surface: '#11131A',
  surfaceBorder: 'rgba(255, 255, 255, 0.08)',
  accentPrimary: '#00E5FF',   // High-voltage Cyan
  accentSecondary: '#10B981', // Verified Emerald
  textPrimary: '#FFFFFF',
  textSecondary: '#8B90A0',
  fontHeadline: 'Inter, sans-serif',
  fontMono: 'JetBrains Mono, monospace',
};
```

### Step 4: Beat-Synchronized Scene Storyboard (120 BPM)

All animations should align to a **120 BPM musical rhythm** (1 beat = 30 frames at 60fps = 0.5 seconds).

Structure the timeline according to the **4 Dramatic Beats**:

```
[0.0s – 20% DURATION] ACT 1: THE HOOK
  • Goal: Stop scrolling; establish world-class tone within 0.8 seconds.
  • Action: Dramatic emergence of the primary metaphor with initial velocity.
  • Transition: The hero object scales or tilts forward into Act 2.

[20% – 60% DURATION] ACT 2: THE TANGIBLE ENGINE (SUBSTANCE)
  • Goal: Prove capability with interactive UI, real data, and tactile movement.
  • Action: 2–3 coordinated micro-events (e.g. counter climb + status swap + chart reveal).
  • Rule: Stagger child element entrances by 3–4 frames each.

[60% – 80% DURATION] ACT 3: THE ELEVATION & SCALE
  • Goal: Emotional crescendo and spatial expansion.
  • Action: Camera log-space zoom out, lighting color shift, particle field acceleration.
  • Transition: Objects converge into a focal point.

[80% – 100% DURATION] ACT 4: THE ICONIC PAYOFF
  • Goal: Permanent brand recall.
  • Action: Official emblem locks together, slogan reveals with character stagger.
  • Resting State: Holds an immaculate poster-frame composition for the final 1.5 seconds.
```

---

## 3. Seamless Object-Handoff Matrix

To achieve `prompt-motion.com` quality, avoid cuts or raw crossfades. Chain scenes using **Object Handoffs**:

```
Scene 1 (Terminal Prompt)
       │
       ▼ [Pill Expands]
Scene 2 (Browser Card with live preview)
       │
       ▼ [Card Rotates 90deg on Y-axis]
Scene 3 (Monolithic 3D Server Blade)
       │
       ▼ [Blade Face Emits Spotlight]
Scene 4 (Hero Logo Emblem & Brand Slogan)
```

Each scene takes the physical geometry of the preceding scene's focal object and transforms it into the foundation of the next.

---

## 4. Autonomous Topic-to-Composition Execution Protocol

When a user provides a topic:
1. **Output the Concept Diagnosis & Storyboard**:
   - Visual Metaphors selected.
   - 4-Act breakdown with precise timestamps.
   - Color and typography tokens.
2. **Output the Prompt-Motion Master Prompt**:
   - Ready for the user to read or copy.
3. **Execute the Remotion Composition**:
   - Implement the code cleanly inside Remotion components.
   - Verify 60fps performance and capture keyframe still.
