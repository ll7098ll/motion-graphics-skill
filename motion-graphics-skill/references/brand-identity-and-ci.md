# Brand Identity & CI Animation Guide

A brand film must honor and elevate the organization's real corporate identity (CI). Never approximate a logo with generic placeholder shapes or mismatched fonts.

---

## 0. Brand Asset Acquisition & Inquiry (브랜드 자산 질의 및 수집 프로토콜)

Before designing the logo animation, ask the user about their brand assets:

1. **질의 체크포인트**:
   - "브랜드의 공식 로고 벡터 파일(SVG)이나 AI/EPS 파일이 있으신가요?"
   - "공식 브랜드 가이드라인(Primary/Secondary 색상 HEX 코드, 전용 서체)이 있으신가요?"
2. **자산 보유 시 (Assets Available)**:
   - SVG 파일을 프로젝트 `public/` 또는 `src/components/`로 가져와 `<path>` 엘리먼트들을 레이어별로 분리(Deconstruct)합니다.
   - 각 패스에 `strokeDashoffset`, `transform: scale()`, `opacity` 등을 매핑하여 물리 기반 리빌을 구현합니다.
3. **자산 미보유 / '알아서 해줘' 시 (Zero Assets / Autonomous Reconstruction)**:
   - 공인된 브랜드(대한항공, 토스, 애플 등)나 공공기관/학교인 경우: 공식 CI 규정을 분석하여 정확한 베지어 곡선(`d="M..."`)으로 **직접 벡터 SVG 컴포넌트를 코딩**합니다.
   - 신규 스타트업/가상 브랜드인 경우: 서비스 성격에 맞추어 현대적인 앰블럼과 기하학적 워드마크를 창작하여 제공합니다.

---

## 1. Vector Logo Modeling & Deconstruction

Every brand logo consists of two distinct components:
1. **The Symbol / Mark**: An iconic geometric or abstract glyph (e.g. Korean Air Taegeuk propeller, Apple silhouette, Nike swoosh).
2. **The Wordmark**: Custom typographic lettering designed for the brand name.

### Always Code Precision SVG Paths
Break the logo into clean SVG `<path>` elements with isolated IDs so they can animate independently:

```tsx
export const BrandMark: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Upper Red Arch */}
      <path
        d="M 60,10 C 85,10 108,28 108,60 C 108,76 96,88 80,88 C 64,88 60,60 40,60 C 24,60 12,72 12,60 C 12,28 35,10 60,10 Z"
        fill="#C8102E"
        style={{ transform: `scale(${progress})`, transformOrigin: 'center' }}
      />
      {/* Lower Blue Arch */}
      <path
        d="M 60,110 C 35,110 12,92 12,60 C 12,44 24,32 40,32 C 56,32 60,60 80,60 C 96,60 108,48 108,60 C 108,92 85,110 60,110 Z"
        fill="#00256C"
        style={{ transform: `scale(${progress})`, transformOrigin: 'center' }}
      />
    </svg>
  );
};
```

---

## 2. Four Master Logo Reveal Techniques

### 1. Vector Stroke Drawing (`strokeDashoffset`)
Trace the structural contours of the logo with a luminous hairline stroke before the solid color blooms inward.
- Set `strokeDasharray={totalLength}`
- Interpolate `strokeDashoffset` from `totalLength` to `0` over 20–35 frames with `Easing.bezier(0.16, 1, 0.3, 1)`.

### 2. Symmetrical Split Docking
For symmetrical emblems (e.g. wings, seals, shields):
- Left wing enters from `translateX(-60px)` + `rotate(-12deg)`.
- Right wing enters from `translateX(60px)` + `rotate(12deg)`.
- Both snap into the center on a crisp beat drop with a micro-compression spring (`damping: 14, stiffness: 180`).

### 3. Radial Clip Reveal
Unfurl a circular or multi-petal mark using an SVG clip path or CSS `clip-path: circle(...)`:
- Expands from the center point with an organic overshoot.

### 4. Surface Glint / Rim Light Sweep
Sweep a 45-degree linear gradient highlight across the finished mark once it settles:
```tsx
const glintPos = interpolate(frame - settleFrame, [0, 30], [-100, 200]);
// Linear gradient overlay with mix-blend-mode: overlay or screen
```

---

## 3. Brand Palette Discipline: The 60-30-10 Law

Avoid rainbow color noise. High-end films adhere strictly to:
- **60% Dominant Base**: Deep Obsidian Navy (`#040B18`), Luxury Paper (`#F7F6F2`), or Pure Midnight (`#090A0E`).
- **30% Secondary Structure**: Slate blue, warm metallic silver, or frosted card surfaces (`rgba(255,255,255,0.06)`).
- **10% Iconic Accent**: Exactly the brand's primary signature color (Korean Air Sky Blue `#0077C8` & Red `#C8102E`, Stripe Blurple `#635BFF`, Taxtello Gold `#E8B84B`).
