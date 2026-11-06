import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

export const Main: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 120 BPM timing: 1 beat = 30 frames at 60fps
  const b = (beat: number) => Math.round(beat * 30);

  // Entrance spring for hero card
  const cardScale = spring({
    frame: frame - b(1),
    fps,
    config: { damping: 15, stiffness: 130, mass: 0.9 },
  });

  const cardOpacity = interpolate(frame, [b(1), b(1.5)], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // KPI counter interpolation
  const counterVal = interpolate(frame, [b(3), b(6)], [24.8, 142.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a0d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Background subtle registration dots */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Hero UI Card */}
      <div
        style={{
          opacity: cardOpacity,
          transform: `scale(${cardScale})`,
          width: 720,
          padding: '40px 48px',
          borderRadius: 32,
          background: '#12141a',
          border: '1px solid rgba(255, 255, 255, 0.10)',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.45)',
          color: '#f5f5f7',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#ff4f17',
              }}
            />
            <span style={{ fontSize: 16, fontWeight: 600, color: '#8e9099' }}>
              REALTIME PIPELINE
            </span>
          </div>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 999,
              background: 'rgba(22, 179, 100, 0.14)',
              color: '#16b364',
              fontSize: 14,
              fontWeight: 600,
              fontFamily: 'monospace',
            }}
          >
            ACTIVE
          </span>
        </div>

        <div style={{ marginTop: 28 }}>
          <span style={{ fontSize: 15, color: '#7c7e88', fontWeight: 500 }}>
            PROCESSED VOLUME
          </span>
          <div style={{ fontSize: 56, fontWeight: 800, marginTop: 4, letterSpacing: '-1px' }}>
            ${counterVal.toFixed(1)}k
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
