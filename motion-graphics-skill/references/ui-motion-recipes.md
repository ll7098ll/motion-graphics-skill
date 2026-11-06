# Declarative React UI Motion Recipes

Production-ready patterns for authoring realistic software UI in Remotion.

---

## 1. Tactile Button & Press State

```tsx
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const TactileButton: React.FC<{ label: string; clickFrame?: number }> = ({
  label,
  clickFrame = 30,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Press compression on click
  const press = Math.exp(-Math.pow((frame - clickFrame) / 3, 2));
  const scale = 1 - 0.05 * press;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '16px 28px',
        borderRadius: 999,
        background: '#121317',
        color: '#FFFFFF',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
        border: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF4F17' }} />
      <span>{label}</span>
    </div>
  );
};
```

---

## 2. Liquid Segmented Tabs (Trailing Edge Spring Lag)

When an indicator swaps tabs, the leading edge travels faster than the trailing edge to create organic fluid stretching:

```tsx
export const LiquidTabs: React.FC<{ activeIndex: number; switchFrame: number }> = ({
  activeIndex,
  switchFrame,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tabWidth = 84;
  const targetX = activeIndex * tabWidth;

  const leadX = spring({
    frame: frame - switchFrame,
    fps,
    config: { damping: 14, stiffness: 180 }, // Faster impulse
  });

  const trailX = spring({
    frame: frame - switchFrame,
    fps,
    config: { damping: 18, stiffness: 110 }, // Slower settle
  });

  const left = trailX * targetX;
  const width = tabWidth + (leadX - trailX) * 24;

  return (
    <div style={{ position: 'relative', display: 'flex', background: '#F2F0EA', padding: 4, borderRadius: 24 }}>
      <div
        style={{
          position: 'absolute',
          left,
          top: 4,
          width,
          height: 36,
          borderRadius: 18,
          background: '#121317',
        }}
      />
      {/* Tab labels */}
    </div>
  );
};
```

---

## 3. Simulated Cursor with Dynamic Angle

```tsx
export const Cursor: React.FC<{ x: number; y: number; vx?: number; isPressed?: boolean }> = ({
  x,
  y,
  vx = 0,
  isPressed = false,
}) => {
  const tilt = Math.max(-12, Math.min(12, vx * 0.08));
  const scale = isPressed ? 0.88 : 1.0;

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: `rotate(${tilt}deg) scale(${scale})`,
        transformOrigin: '0 0',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.22))',
      }}
    >
      <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
        <path
          d="M0 0L0 34L8.8 25.8L14.8 38.5L19.8 36.2L13.8 23.6L24.6 23.6L0 0Z"
          fill="#111215"
          stroke="#FFFFFF"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
```
