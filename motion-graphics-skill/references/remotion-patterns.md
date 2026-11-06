# Remotion Core Motion Patterns

Key techniques and formulas for authoring motion graphics in Remotion.

---

## 1. Physical Springs (`spring()`)

Remotion includes a physics-based spring solver that maps directly from frame count to normalized position.

```tsx
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const frame = useCurrentFrame();
const { fps } = useVideoConfig();

const progress = spring({
  frame: frame - delayInFrames,
  fps,
  config: {
    damping: 14,    // Higher = less oscillation (critically damped ~20)
    stiffness: 120, // Higher = snappier, faster impulse
    mass: 0.8,      // Lower = lighter, quicker reaction
  },
});
```

### Preset Spring Parameters

| Style | Damping | Stiffness | Mass | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Tactile UI** | `14` | `150` | `0.7` | Buttons, badge clicks, toggle switches |
| **Smooth Card** | `18` | `110` | `1.0` | Dialog open, modal expansion, tab swap |
| **Architectural Slab** | `22` | `85` | `1.5` | 3D prisms, heavy monument drops |
| **Micro Shake** | `10` | `240` | `0.5` | Error shake, lock click, subtle impact |

---

## 2. Multi-Keyframe Value Remapping (`interpolate()`)

Map continuous frame ranges to any numeric CSS property:

```tsx
import { interpolate, Easing } from 'remotion';

// Smooth opacity fade with bezier easeOut
const opacity = interpolate(frame, [0, 15], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
  easing: Easing.bezier(0.16, 1, 0.3, 1),
});

// Camera push in log-space (prevents visual acceleration)
const zoom = Math.exp(
  interpolate(frame, [0, 60], [Math.log(1.0), Math.log(1.25)], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.65, 0, 0.35, 1),
  })
);
```

---

## 3. Scene Layout & Composition Chaining

### `<Sequence>`
Isolates timing inside a child component so `useCurrentFrame()` resets to 0 at `from`:
```tsx
<Sequence from={60} durationInFrames={120}>
  {/* useCurrentFrame() inside SceneTwo starts at 0 */}
  <SceneTwo />
</Sequence>
```

### `<AbsoluteFill>`
Ensures full canvas coverage without layout shifts:
```tsx
<AbsoluteFill style={{
  backgroundColor: '#0c0f1a',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}>
  {children}
</AbsoluteFill>
```
