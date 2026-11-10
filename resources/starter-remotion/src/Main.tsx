import React from 'react';
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Sequence,
} from 'remotion';

// --- Atmospheric Studio Background ---
const StudioAtmosphere: React.FC<{ accentColor?: string }> = ({ accentColor = '#00E5FF' }) => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.04) * 0.12 + 0.88;

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* 48px Precision Dot Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at center, rgba(255,255,255,0.07) 1.2px, transparent 1.2px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Ambient Radial Spotlight */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          width: 900,
          height: 700,
          transform: `translate(-50%, -50%) scale(${pulse})`,
          background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
          filter: 'blur(90px)',
        }}
      />
    </div>
  );
};

// --- Masked Kinetic Typography ---
const KineticWord: React.FC<{
  text: string;
  delayInFrames?: number;
  fontSize?: number;
  color?: string;
}> = ({ text, delayInFrames = 0, fontSize = 72, color = '#FFFFFF' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delayInFrames,
    fps,
    config: { damping: 14, stiffness: 180, mass: 0.8 },
  });

  const translateY = interpolate(progress, [0, 1], [100, 0]);
  const opacity = interpolate(progress, [0, 0.4, 1], [0, 1, 1]);

  return (
    <span
      style={{
        overflow: 'hidden',
        display: 'inline-block',
        lineHeight: 1.1,
        verticalAlign: 'bottom',
        marginRight: '0.25em',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          transform: `translateY(${translateY}%)`,
          opacity,
          fontSize,
          fontWeight: 800,
          letterSpacing: '-0.035em',
          color,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        {text}
      </span>
    </span>
  );
};

// --- Live Telemetry Spline Chart ---
const LiveSplineChart: React.FC<{ startFrame?: number }> = ({ startFrame = 30 }) => {
  const frame = useCurrentFrame();
  const pathLength = 600;

  const progress = interpolate(frame, [startFrame, startFrame + 90], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const dashOffset = pathLength * (1 - progress);

  return (
    <svg width="420" height="90" viewBox="0 0 420 90" fill="none">
      <defs>
        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      {/* Target Guide Line */}
      <line
        x1="10"
        y1="25"
        x2="410"
        y2="25"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
      <path
        d="M 10 75 Q 80 80, 140 45 T 260 35 T 410 18"
        stroke="url(#chartGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray={pathLength}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
};

// --- 3D Tilted Border-Beam Glass Card ---
const HeroCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring
  const cardSpring = spring({
    frame: frame - 15,
    fps,
    config: { damping: 16, stiffness: 120, mass: 0.9 },
  });

  // Dynamic 3D tilt
  const rotX = interpolate(cardSpring, [0, 1], [15, 4]) + Math.sin(frame * 0.03) * 1.2;
  const rotY = interpolate(cardSpring, [0, 1], [-20, -5]) + Math.cos(frame * 0.025) * 1.5;
  const scale = interpolate(cardSpring, [0, 1], [0.82, 1]);
  const opacity = interpolate(cardSpring, [0, 0.5, 1], [0, 1, 1]);

  // Traveling border beam angle
  const beamAngle = (frame * 2.8) % 360;

  // Realtime counters
  const latency = interpolate(frame, [30, 120], [184.2, 4.6], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const throughput = interpolate(frame, [30, 140], [1.2, 148.5], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        perspective: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          transform: `scale(${scale}) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transformStyle: 'preserve-3d',
          opacity,
          position: 'relative',
          padding: 1.5,
          borderRadius: 28,
          background: `conic-gradient(from ${beamAngle}deg, transparent 65%, rgba(255,255,255,0.4) 85%, #00E5FF 95%, transparent 100%)`,
          boxShadow: '0 32px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 229, 255, 0.12)',
        }}
      >
        {/* Card Surface */}
        <div
          style={{
            background: 'linear-gradient(145deg, #10121A 0%, #090A0F 100%)',
            borderRadius: 26.5,
            padding: '36px 44px',
            width: 760,
            color: '#FFFFFF',
            fontFamily: 'Inter, -apple-system, sans-serif',
          }}
        >
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 12px #10B981',
                }}
              />
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: '#94A3B8',
                }}
              >
                CLUSTER · ASIA-NORTHEAST
              </span>
            </div>
            <div
              style={{
                background: 'rgba(0, 229, 255, 0.12)',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                padding: '4px 12px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 700,
                color: '#00E5FF',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              AUTONOMOUS v2.4
            </div>
          </div>

          {/* Metric Columns */}
          <div style={{ display: 'flex', gap: 48, marginTop: 32 }}>
            <div>
              <div
                style={{
                  fontSize: 13,
                  color: '#64748B',
                  fontWeight: 600,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                LATENCY
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  marginTop: 4,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {latency.toFixed(1)}
                <span style={{ fontSize: 24, fontWeight: 500, color: '#64748B', marginLeft: 4 }}>
                  ms
                </span>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 13,
                  color: '#64748B',
                  fontWeight: 600,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                THROUGHPUT
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  marginTop: 4,
                  fontFamily: 'JetBrains Mono, monospace',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {throughput.toFixed(1)}
                <span style={{ fontSize: 24, fontWeight: 500, color: '#64748B', marginLeft: 4 }}>
                  k/s
                </span>
              </div>
            </div>
          </div>

          {/* Graph Section */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <LiveSplineChart startFrame={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Climax Signature Lockup ---
const FinalLockup: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 15, stiffness: 140, mass: 0.9 },
  });

  const scale = interpolate(logoSpring, [0, 1], [0.8, 1]);
  const opacity = interpolate(logoSpring, [0, 0.4, 1], [0, 1, 1]);

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {/* Emblem SVG */}
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 24,
          background: 'linear-gradient(135deg, #00E5FF 0%, #3B82F6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 60px rgba(0, 229, 255, 0.45)',
          marginBottom: 28,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.03em', fontFamily: 'Inter, sans-serif' }}>
        VELOCITY ARCHITECTURE
      </div>

      <div
        style={{
          marginTop: 12,
          fontSize: 16,
          color: '#94A3B8',
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.12em',
        }}
      >
        ZERO LATENCY · UNCOMPROMISED ACCELERATION
      </div>
    </AbsoluteFill>
  );
};

// --- Master Composition Timeline (15s at 60fps = 900 frames) ---
export const Main: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#07080B',
        overflow: 'hidden',
      }}
    >
      <StudioAtmosphere accentColor="#00E5FF" />

      {/* Act 1 & 2: Hero Hook & 3D Interactive Telemetry Card (0s - 10s | 0 - 600f) */}
      <Sequence from={0} durationInFrames={620}>
        <div style={{ position: 'absolute', top: 90, left: 120 }}>
          <KineticWord text="ENGINEERED" delayInFrames={0} fontSize={64} />
          <KineticWord text="FOR" delayInFrames={4} fontSize={64} />
          <KineticWord text="EXTREME" delayInFrames={8} fontSize={64} color="#00E5FF" />
          <KineticWord text="THROUGHPUT." delayInFrames={12} fontSize={64} />
        </div>
        <HeroCard />
      </Sequence>

      {/* Act 3: Final Climax Lockup & Poster State (10s - 15s | 600 - 900f) */}
      <Sequence from={600} durationInFrames={300}>
        <FinalLockup />
      </Sequence>
    </AbsoluteFill>
  );
};
