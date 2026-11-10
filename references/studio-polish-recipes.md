# Studio-Grade Visual Polish Recipes (Prompt-Motion Quality)

This guide provides drop-in React/Remotion code recipes for the signature visual effects that define the broadcast-quality videos featured on **prompt-motion.com**.

---

## 1. 3D Perspective & Spatial Camera Rig

Give any flat UI element tangible physical depth with a perspective camera rig that subtly reacts to time and spring velocity:

```tsx
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const PerspectiveCameraRig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const introProgress = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 100, mass: 1.0 },
  });

  // Dynamic continuous 3D tilt
  const rotX = interpolate(introProgress, [0, 1], [18, 5]) + Math.sin(frame * 0.03) * 1.5;
  const rotY = interpolate(introProgress, [0, 1], [-25, -6]) + Math.cos(frame * 0.025) * 1.8;
  const scale = interpolate(introProgress, [0, 1], [0.85, 1.0]);

  return (
    <div
      style={{
        perspective: 1200,
        perspectiveOrigin: '50% 50%',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          transform: `scale(${scale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s linear',
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

---

## 2. Animated Border-Beam Shimmer (Apple / Linear Glow)

A traveling light beam sweeping around the perimeter of a card:

```tsx
export const BorderBeamCard: React.FC<{
  children: React.ReactNode;
  width?: number;
  borderRadius?: number;
}> = ({ children, width = 640, borderRadius = 24 }) => {
  const frame = useCurrentFrame();
  const angle = (frame * 3) % 360;

  return (
    <div
      style={{
        position: 'relative',
        width,
        borderRadius,
        padding: 1, // Hairline border container
        background: `conic-gradient(from ${angle}deg, transparent 60%, rgba(255,255,255,0.4) 85%, #00E5FF 95%, transparent 100%)`,
        boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
      }}
    >
      <div
        style={{
          background: '#0D0F17',
          borderRadius: borderRadius - 1,
          padding: 32,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

---

## 3. Mask-Based Kinetic Typography (Word/Character Cascade)

Text slides out from beneath an invisible clipping boundary with per-word spring delays:

```tsx
export const KineticTitle: React.FC<{ text: string; startFrame?: number }> = ({
  text,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const words = text.split(' ');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
      {words.map((word, i) => {
        const wordSpring = spring({
          frame: frame - startFrame - i * 3, // 3-frame stagger
          fps,
          config: { damping: 14, stiffness: 180, mass: 0.8 },
        });

        const translateY = interpolate(wordSpring, [0, 1], [100, 0]);
        const opacity = interpolate(wordSpring, [0, 0.4, 1], [0, 1, 1]);

        return (
          <span key={i} style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 1.15 }}>
            <span
              style={{
                display: 'inline-block',
                transform: `translateY(${translateY}%)`,
                opacity,
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </div>
  );
};
```

---

## 4. Jitter-Free Monospace Rolling Counter

Avoid width-jumping using fixed font variants and smooth interpolations:

```tsx
export const RollingCounter: React.FC<{
  fromVal: number;
  toVal: number;
  startFrame: number;
  endFrame: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}> = ({ fromVal, toVal, startFrame, endFrame, prefix = '', suffix = '', decimals = 1 }) => {
  const frame = useCurrentFrame();

  const val = interpolate(frame, [startFrame, endFrame], [fromVal, toVal], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <span
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-0.02em',
        fontWeight: 700,
      }}
    >
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};
```

---

## 5. Ambient Atmospheric Background (Dot Grid & Radial Glow)

Layered depth that eliminates flat, lifeless voids:

```tsx
export const StudioAtmosphere: React.FC<{ accentColor?: string }> = ({
  accentColor = '#00E5FF',
}) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.04) * 0.15 + 0.85;

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* 48px Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.7,
        }}
      />

      {/* Floating Ambient Glow Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: 800,
          height: 600,
          transform: `translate(-50%, -50%) scale(${pulse})`,
          background: `radial-gradient(ellipse at center, ${accentColor}18 0%, transparent 65%)`,
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
};
```

---

## 6. Live SVG Spline Chart with Stroke Dashoffset

An animated telemetry graph that draws itself seamlessly over a frame window:

```tsx
export const LiveSplineChart: React.FC<{ startFrame?: number; duration?: number }> = ({
  startFrame = 30,
  duration = 60,
}) => {
  const frame = useCurrentFrame();
  const pathLength = 500;

  const progress = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const dashOffset = pathLength * (1 - progress);

  return (
    <svg width="320" height="100" viewBox="0 0 320 100" fill="none">
      <path
        d="M 10 80 Q 70 20, 130 60 T 250 30 T 310 15"
        stroke="#10B981"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
};
```
