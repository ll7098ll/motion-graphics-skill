# Brand Identity & CI Animation Guide

A brand film must honor and elevate the organization's real corporate identity (CI). Never approximate a logo with generic placeholder shapes, straight stick lines, or mismatched color themes.

---

## 0. Brand Asset Acquisition & Inquiry (브랜드 자산 질의 및 수집 프로토콜)

Before designing the logo animation, verify or research the brand's authentic visual assets:

1. **질의 체크포인트**:
   - "브랜드의 공식 로고 벡터 파일(SVG)이나 AI/EPS 파일이 있으신가요?"
   - "공식 브랜드 가이드라인(Primary/Secondary 색상 HEX 코드, 전용 서체)이 있으신가요?"
2. **자산 보유 시 (Assets Available)**:
   - SVG 파일을 프로젝트 `public/` 또는 `src/components/`로 가져와 `<path>` 엘리먼트들을 레이어별로 분리(Deconstruct)합니다.
   - 각 패스에 `strokeDashoffset`, `transform: scale()`, `opacity` 등을 매핑하여 물리 기반 리빌을 구현합니다.
3. **자산 미보유 / '알아서 해줘' 시 (Zero Assets / Autonomous Reconstruction)**:
   - 공인된 브랜드(대한항공, 토스, 애플, 스트라이프 등)나 공공기관/학교인 경우: 반드시 **공식 CI 규정과 브랜드 컬러 테마**를 리서치하여 정확한 베지어 곡선(`d="M..."`)으로 **직접 벡터 SVG 컴포넌트를 코딩**하고, 배경과 타이포그래피 전체에 브랜드의 시그니처 컬러 테마(60-30-10 비율)를 적용합니다.
   - 신규 스타트업/가상 브랜드인 경우: 서비스 성격에 맞추어 현대적인 앰블럼과 기하학적 워드마크를 창작하여 제공합니다.

---

## 1. Case Study: Korean Air (대한항공) Official CI & Color System

When producing a Korean Air (`대한항공`) brand film, never use a dark cyberpunk background or straight cross-lines inside the Taegeuk. Honor Korean Air's true visual identity across both its **Classic Heritage CI (1984–2025)** and **New CI (2025–Present, designed with Lippincott)**:

### A. Official Korean Air Color Theme (컬러 테마)
- **60% Dominant Sky & Fuselage Canvas**:
  - **Korean Air Sky Blue (시그니처 하늘색)**: `#57BBEB` (Digital Sky Blue) / `#53AAE2` (Metallic Sky Blue Livery) / `#71CBEB` (Heritage Celadon Sky Blue)
  - **Pure Cloud White & Porcelain Mist (운백색/도자 백색)**: `#FFFFFF`, `#F2F9FD`, `#E4F3FB` (Aircraft lower fuselage separated by a sweeping S-curve cheatline)
- **30% Authority Structure & Typography**:
  - **Korean Air Dark Blue (대한항공 다크 블루 / 주조색)**: `#051766` (RGB `5, 23, 102`) — Used for the 2025 monochrome Taegeuk symbol, `KOREAN AIR` / `대한항공` wordmark, and primary display typography.
  - **Heritage Royal Blue**: `#003876` / `#1C4E9D` (Lower lobe of the classic Taegeuk).
- **10% Point Accent**:
  - **Korean Air Taegeuk Red (태극 레드)**: `#E0112B` / `#EC172C` — Upper lobe of the classic Taegeuk and flowing 3D silk ribbon highlight.

### B. Precision Vector Geometry: Korean Air Taegeuk (태극마크)
1. **Classic S-Wave Propeller Taegeuk (1984–2025 Heritage Mark)**:
   - A circle divided into an upper Red (`#E0112B`) lobe and lower Blue (`#003876`) lobe separated by a **single smooth S-curved white wave** that flares gently at the outer left and right edges like a spinning 2-blade propeller—**never** straight crossing sticks (`*`) or a center dot.
2. **2025 New Sangmo Ribbon Taegeuk (2025–Present Official Mark)**:
   - Inspired by *Sangmo Nori* (풍물놀이 상모 리본), a single-color **Korean Air Dark Blue (`#051766`)** fluid calligraphic ribbon loop that traces the upper-left and lower-right circular arcs and sweeps diagonally through the center in a graceful S-curve wave with open negative-space channels.
   - Paired horizontally to the left of the bespoke humanist sans-serif **`KOREAN AIR`** / **`대한항공`** wordmark in `#051766`, with the official slogan **`Anywhere is Possible`** (and heritage **`Excellence in Flight`**).

```tsx
export const KoreanAirTaegeukSVG: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <svg width="160" height="160" viewBox="0 0 200 200" fill="none">
      {/* Crisp White Outer Medallion Ring */}
      <circle cx="100" cy="100" r="92" fill="#FFFFFF" stroke="#57BBEB" strokeWidth="3" />
      {/* Upper Taegeuk Red Lobe with S-Curve Propeller Boundary */}
      <path
        d="M 14 86 C 22 40, 58 12, 100 12 C 146 12, 182 44, 187 88 C 154 128, 122 126, 96 94 C 72 64, 44 58, 14 86 Z"
        fill="#E0112B"
        style={{ transform: `scale(${progress})`, transformOrigin: '100px 100px' }}
      />
      {/* Lower Taegeuk Blue Lobe with Complementary S-Curve Boundary */}
      <path
        d="M 186 114 C 178 160, 142 188, 100 188 C 54 188, 18 156, 13 112 C 46 72, 78 74, 104 106 C 128 136, 156 142, 186 114 Z"
        fill="#051766"
        style={{ transform: `scale(${progress})`, transformOrigin: '100px 100px' }}
      />
    </svg>
  );
};
```

---

## 2. Four Master Logo Reveal Techniques

### 1. Vector Stroke Drawing (`strokeDashoffset`)
Trace the structural contours of the logo (such as the 2025 Sangmo ribbon loop) with a luminous stroke before the solid brand colors bloom inward.
- Set `strokeDasharray={totalLength}`
- Interpolate `strokeDashoffset` from `totalLength` to `0` over 20–35 frames with `Easing.bezier(0.16, 1, 0.3, 1)`.

### 2. Symmetrical S-Curve Split Docking
For rotational or Yin-Yang emblems (e.g., Korean Air Taegeuk lobes, wings, shields):
- Upper lobe enters from `translate(-36px, -18px)` + `rotate(-18deg)`.
- Lower lobe enters from `translate(36px, 18px)` + `rotate(18deg)`.
- Both lock into the center on a crisp beat drop with a micro-compression spring (`damping: 14, stiffness: 160`).

### 3. Radial Clip Reveal
Unfurl a circular or ribbon mark using an SVG `<clipPath>` circle expanding from the center point with organic overshoot.

### 4. Surface Glint / Rim Light Sweep
Sweep a 45-degree linear gradient highlight across the finished mark once it settles:
```tsx
const glintPos = interpolate(frame - settleFrame, [0, 35], [-120, 260], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
});
```

---

## 3. Brand Palette Discipline: The 60-30-10 Law

Avoid generic dark mode when a brand's identity is defined by light, sky, or signature hues. Always align the 60-30-10 split to the brand's true color system:
- **60% Dominant Base**: The brand's iconic atmosphere (e.g., Korean Air Sky Blue `#57BBEB` & Cloud White `#FFFFFF` fuselage horizon; Luxury Editorial Paper `#F7F6F2`; or Deep Aerospace Navy `#051766`).
- **30% Secondary Structure**: Frosted porcelain cards (`rgba(255,255,255,0.92)`), deep brand navy typography (`#051766`), or metallic silver accents.
- **10% Iconic Point Accent**: The brand's signature focal color (e.g., Korean Air Taegeuk Red `#E0112B`, Stripe Blurple `#635BFF`, Taxtello Gold `#E8B84B`).
