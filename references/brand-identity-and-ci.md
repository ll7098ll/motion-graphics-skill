# Brand Identity & CI Animation Guide

A brand film must honor and elevate the organization's real, latest corporate identity (CI). Never approximate a logo with generic placeholder shapes, straight stick lines, outdated emblems, or mismatched color themes.

---

## 0. Brand Asset Acquisition & Latest CI Verification (브랜드 자산 질의 및 최신 CI 검증 프로토콜)

Before designing the logo animation, verify or research the brand's **latest official visual assets**:

1. **질의 체크포인트**:
   - "브랜드의 최신 공식 로고 벡터 파일(SVG)이나 AI/EPS 파일이 있으신가요?"
   - "공식 브랜드 가이드라인(Primary/Secondary 색상 HEX 코드, 전용 서체)이 있으신가요?"
2. **자산 보유 시 (Assets Available)**:
   - SVG 파일을 프로젝트 `public/` 또는 `src/components/`로 가져와 `<path>` 엘리먼트들을 레이어별로 분리(Deconstruct)합니다.
   - 각 패스에 `strokeDashoffset`, `transform: scale()`, `opacity` 등을 매핑하여 물리 기반 리빌을 구현합니다.
3. **자산 미보유 / '알아서 해줘' 시 (Zero Assets / Autonomous Reconstruction)**:
   - 공인된 브랜드(대한항공, 토스, 애플, 스트라이프 등)나 공공기관/학교인 경우: 반드시 **가장 최신의 공식 CI 규정(리브랜딩 여부 필히 확인)과 브랜드 컬러 테마**를 리서치하여 정확한 베지어 곡선(`d="M..."`)으로 **직접 벡터 SVG 컴포넌트를 코딩**하고, 배경과 타이포그래피 전체에 브랜드의 시그니처 컬러 테마(60-30-10 비율)를 적용합니다.
   - 신규 스타트업/가상 브랜드인 경우: 서비스 성격에 맞추어 현대적인 앰블럼과 기하학적 워드마크를 창작하여 제공합니다.

---

## 1. Case Study: Korean Air (대한항공) 2025 Latest Official CI & Color System

When producing a Korean Air (`대한항공`) brand film, always use the **2025 Latest Official CI** (unveiled March 11, 2025, developed with Lippincott, Dalton Maag, and Sandoll):

### A. 2025 Official Korean Air Color Theme (컬러 테마)
- **60% Dominant Sky & Fuselage Canvas**:
  - **Korean Air Light Blue / Metallic Sky Blue (대한항공 라이트블루 / 메탈릭 스카이블루)**: `#57BBEB` (RGB `87, 187, 235`) / `#53AAE2` (Bespoke AkzoNobel mica metallic aircraft finish)
  - **Pure Cloud White & Porcelain Mist (운백색/도자 백색)**: `#FFFFFF`, `#F4FAFE`, `#E4F3FB` (Aircraft lower fuselage separated from the sky-blue upper dome by a smooth, cheatline-free S-curve transition)
- **30% Primary CI & Typography Color**:
  - **Korean Air Dark Blue (대한항공 다크 블루 / 2025 CI 단색 주조색)**: `#051766` (RGB `5, 23, 102`) — Used exclusively for the **2025 monochrome Sangmo Ribbon Line Taegeuk symbol**, the **`KOREAN AIR` / `KOREAN` / `대한항공` logotype**, and primary display typography.
- **10% 3D Motif Accent**:
  - **Korean Air Royal Sky Blue & 3D Silk Motif**: `#0064B5` / `#57BBEB` (with subtle `#E0112B` Korean Air Red reserved only as a background 3D silk ribbon highlight, never inside the monochrome `#051766` 2025 CI symbol).

### B. Precision Vector Geometry: 2025 Korean Air Sangmo Ribbon Line Taegeuk (`단색 선 태극`)
- **Single-Color Calligraphic Ribbon Symbol (`#051766`)**:
  - Inspired by *Sangmo Nori* (`풍물놀이 상모 리본`), the 2025 Taegeuk is rendered in **one seamless stroke of Korean Air Dark Blue (`#051766`)**—stripped of the old red/blue filled halves.
  - The ribbon starts with an angled calligraphic brush terminal (`붓터치 느낌의 마무리`) on the upper-right perimeter (`~2 o'clock`), sweeps counter-clockwise over the top-left arc (`~12 o'clock -> ~9 o'clock`), bends smoothly into the central Taegeuk S-wave across `(100, 100)`, and sweeps clockwise around the bottom-right arc (`~3 o'clock -> ~6 o'clock`) to a tapered brush tip on the lower-left (`~8 o'clock`), leaving sleek **open negative-space junctions (`열린 연결점`)** on the left and right rims.
- **3-Tier Flexible Lockup System**:
  1. **Primary Brand Lockup**: `[2025 #051766 Sangmo Taegeuk]  KOREAN AIR` (and `대한항공` in Korean Air Sans).
  2. **Aircraft Livery Lockup**: `[2025 #051766 Sangmo Taegeuk]  KOREAN` (featured on the Boeing 787-10 `HL8515` fuselage).
  3. **Discreet Prestige Badge**: `[2025 #051766 Sangmo Taegeuk]` standalone symbol (tail fin, Prestige Suites 2.0 cabin, mobile app).
- **Official 2025 Slogan**: **`Anywhere is Possible`** (`어디든 가능합니다`).

```tsx
export const KoreanAir2025SangmoMark: React.FC<{
  size?: number;
  drawProgress?: number;
  color?: string;
}> = ({ size = 120, drawProgress = 1, color = '#051766' }) => {
  const totalLength = 660;
  const dashOffset = totalLength * (1 - drawProgress);
  const spinePath =
    'M 156 40 C 138 20, 114 14, 90 16 C 48 20, 22 52, 24 90 C 26 126, 48 142, 72 130 C 88 122, 94 108, 100 100 C 106 92, 112 78, 128 70 C 152 58, 174 74, 176 110 C 178 148, 152 180, 110 184 C 86 186, 62 180, 44 160';
  const calligraphicContour =
    'M 163 46 C 159 37, 151 28, 141 20 C 122 8, 98 4, 76 8 C 36 15, 12 49, 14 91 C 16 134, 45 153, 76 139 C 93 131, 101 114, 108 105 C 115 96, 121 84, 133 78 C 150 70, 166 81, 167 110 C 168 143, 145 170, 109 174 C 87 176, 66 170, 50 153 C 44 147, 35 148, 37 154 C 41 163, 49 172, 59 180 C 78 192, 102 196, 124 192 C 164 185, 188 151, 186 109 C 184 66, 155 47, 124 61 C 107 69, 99 86, 92 95 C 85 104, 79 116, 67 122 C 50 130, 34 119, 33 90 C 32 57, 55 30, 91 26 C 113 24, 134 30, 150 47 C 156 53, 165 52, 163 46 Z';

  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
      <defs>
        <clipPath id="kal2025-calligraphic-clip">
          <path d={calligraphicContour} />
        </clipPath>
      </defs>
      <g clipPath="url(#kal2025-calligraphic-clip)">
        <path
          d={spinePath}
          stroke={color}
          strokeWidth="30"
          strokeLinecap="round"
          strokeDasharray={totalLength}
          strokeDashoffset={dashOffset}
        />
      </g>
    </svg>
  );
};
```

---

## 2. Four Master Logo Reveal Techniques

### 1. Continuous Calligraphic Ribbon Drawing (`strokeDashoffset` + Variable-Width Clip)
Trace the structural spine of a calligraphic ribbon logo (such as the 2025 Korean Air Sangmo Taegeuk) inside a variable-width `<clipPath>` contour so the brush stroke swells and tapers organically as it draws:
- Set `strokeDasharray={totalLength}` on the spine path.
- Interpolate `strokeDashoffset` from `totalLength` to `0` over 35–48 frames.

### 2. Symmetrical S-Curve Split Docking
For rotational or multi-part emblems (wings, shields, dual arcs):
- Upper element enters from `translate(-36px, -18px)` + `rotate(-18deg)`.
- Lower element enters from `translate(36px, 18px)` + `rotate(18deg)`.
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
- **60% Dominant Base**: The brand's iconic atmosphere (e.g., Korean Air Metallic Sky Blue `#57BBEB` & Cloud White `#FFFFFF` curved fuselage horizon; Luxury Editorial Paper `#F7F6F2`; or Deep Aerospace Navy `#051766`).
- **30% Secondary Structure**: Frosted porcelain cards (`rgba(255,255,255,0.95)`), deep brand navy CI & typography (`#051766`), or metallic silver accents.
- **10% Iconic Point Accent**: The brand's signature focal color (e.g., Korean Air Royal Sky Blue `#0064B5` / `#57BBEB`, Stripe Blurple `#635BFF`, Taxtello Gold `#E8B84B`).
