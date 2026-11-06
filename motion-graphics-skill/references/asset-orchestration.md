# Brand Asset & Imagery Orchestration

How to inquire about, ingest, and integrate real imagery, vector CI, and tangible product mockups into a cohesive film.

---

## 0. The Asset Inquiry & Discovery Protocol (에셋 보유 여부 질의 및 탐색)

Before building scenes, determine what assets exist and guide the user:

### 1. Pre-Execution Workspace Scan
Before asking the user, check if assets already exist in the active project:
- Look in `public/` or the project root for `.svg`, `.png`, `.jpg`, `.webp`, `.mp4`.
- If files exist, immediately inspect them and confirm with the user:
  *"프로젝트 폴더 내에 있는 `logo.svg`, `dashboard.png` 에셋들을 확인했습니다. 이 에셋들을 활용하여 연출을 진행하겠습니다."*

### 2. Mandatory Asset Inquiry Checklist
If no relevant assets exist, ask the user concisely across 4 categories:
```
1. 브랜드 로고 / 심볼마크 (Vector SVG 우선, 고해상도 투명 PNG)
2. 제품 스크린샷 / 대시보드 / 실사 사진 (UI 화면, 제품 컷, 현장 사진)
3. 브랜드 아이덴티티 가이드 (공식 HEX 색상 코드, 공식 서체/폰트)
4. 핵심 슬로건 & 카피 (각 씬에 들어갈 문구, URL, 최종 Call To Action)
```

> **사용자 응답 시나리오별 대응**:
> - **A. "로고와 사진이 있어요"**: `public/` 디렉토리에 복사하거나 파일 경로를 확인하여 `staticFile('filename.jpg')`로 불러옵니다.
> - **B. "에셋 없어요 / 알아서 해주세요"**: 지체 없이 **자율 모드**로 전환하여 브랜드의 공식 CI 벡터를 자체 재구축하고, 도메인에 맞는 맞춤형 벡터 UI 및 그래픽을 프로그래밍 방식으로 합성합니다.
> - **C. "로고만 있어요"**: 로고의 형태와 색상 팔레트를 기반으로 세부 UI 카드와 3D 목업을 에이전트가 직접 디자인합니다.

---

## 1. Cinematic Image Panning (Ken Burns Effect)

Static photos look lifeless. Always apply continuous, slow micro-panning to background photography:

```tsx
import { interpolate, useCurrentFrame } from 'remotion';

export const CinematicPhoto: React.FC<{ src: string; duration: number }> = ({
  src,
  duration,
}) => {
  const frame = useCurrentFrame();

  // Subtle 8% zoom creep over the duration
  const scale = interpolate(frame, [0, duration], [1.0, 1.08], {
    extrapolateRight: 'clamp',
  });

  // Soft horizontal drift
  const x = interpolate(frame, [0, duration], [0, -24], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <img
        src={src}
        alt="Visual"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: `scale(${scale}) translateX(${x}px)`,
          filter: 'brightness(0.85) contrast(1.05)',
        }}
      />
    </div>
  );
};
```

---

## 2. 3D Perspective UI Mockups (Boarding Passes, Cards, Devices)

Give flat 2D cards tactile, physical presence using CSS 3D transforms:

```tsx
export const PerspectiveCard: React.FC<{
  children: React.ReactNode;
  tiltX?: number;
  tiltY?: number;
}> = ({ children, tiltX = 14, tiltY = -18 }) => {
  return (
    <div
      style={{
        perspective: 1200,
        display: 'inline-block',
      }}
    >
      <div
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
          transformStyle: 'preserve-3d',
          boxShadow: '-24px 36px 64px rgba(0, 0, 0, 0.45)',
          borderRadius: 24,
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

---

## 3. Brand Duotone & Color Grading Overlays

To harmonize photography with brand colors:
1. Place a subtle dark linear/radial vignette above the photo.
2. Apply a brand color tint layer with `mix-blend-mode: overlay` or `mix-blend-mode: color` at `15%–25%` opacity.
3. This ties diverse photos into the exact palette of the brand identity.
