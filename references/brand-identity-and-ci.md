# Brand Identity, Official CI & Hardware Vector Discipline

A brand film must honor and elevate the organization's real, latest corporate identity (CI) and flagship physical assets. **Never approximate an official logo with hand-guessed Bezier curves, substitute system fonts for a bespoke wordmark, or draw flagship hardware (aircraft, vehicles, products) as crude polygons.**

---

## 0. Official Vector Acquisition & Visual Audit Protocol (공식 벡터 확보 및 시각 검증 프로토콜)

Before writing a single line of Remotion animation code for a real brand:

1. **질의 체크포인트 (User Asset Check)**:
   - "브랜드의 최신 공식 로고 벡터 파일(SVG)이나 AI/EPS 파일이 있으신가요?"
   - "공식 브랜드 가이드라인(Primary/Secondary 색상 HEX 코드, 전용 서체)이 있으신가요?"
2. **공식 벡터 직접 확보 (Official SVG Extraction — MANDATORY for Real Brands)**:
   - 사용자가 제공하지 않은 공인 브랜드(대한항공, 애플, 스트라이프 등)라면, **절대 눈대중으로 로고 패스를 추측해 그리지 마세요.**
   - 반드시 최신 리브랜딩 여부를 확인하고, 공식 브랜드 사이트·위키미디어 공용(Wikimedia Commons) 등에서 **실제 공식 SVG 벡터 패스(심벌 마크 + 영문/국문 전용 로고타입 글리프 패스)**를 확보해 TypeScript 벡터 상수 모듈(`src/components/*OfficialPaths.ts`)로 정확히 내장하세요.
3. **하드웨어/피사체 그래픽 정밀 작도 (Photogrammetric / Blueprint Hardware Graphics)**:
   - 항공기·자동차·제품 등 핵심 그래픽 피사체는 단순 다각형 아이콘으로 대충 그리지 마세요.
   - 실제 도면(Planform Blueprint)과 실물 사진에서 주요 비례를 계측하고, 3D 원통형 메탈릭 그라데이션·창문·도어·엔진 디테일·공식 리버리(Livery)까지 정밀 SVG로 작도한 뒤, **반드시 단독 래스터화(`rsvg-convert`) 후 `view_file`로 확대 검수**합니다.
   - 곡선 경로(Great Circle Arc 등)를 따라 이동하는 피사체는 선형 보간 각도가 아닌 **베지어 곡선의 해석적 접선 각도(`Math.atan2(dy, dx) * 180 / Math.PI`)**로 정렬합니다.

---

## 1. Case Study: Korean Air (대한항공) 2025 Latest Official CI & Boeing 787-10 (`HL8515`)

When producing a Korean Air (`대한항공`) brand film, always use the **2025 Latest Official CI** (unveiled March 11, 2025, designed with Lippincott, Dalton Maag, and Sandoll):

### A. 2025 Official Korean Air Color Theme (컬러 테마)
- **60% Dominant Sky & Fuselage Canvas**:
  - **Korean Air Light Blue / Metallic Sky Blue (대한항공 라이트블루 / 메탈릭 스카이블루)**: `#57BBEB` (RGB `87, 187, 235`) / `#53AAE2` (Bespoke AkzoNobel mica metallic aircraft finish)
  - **Pure Cloud White & Porcelain Mist (운백색 / 기체 하단)**: `#FFFFFF`, `#F4FAFE`, `#E4F3FB` (Aircraft lower fuselage separated from the sky-blue upper dome by a smooth, cheatline-free S-curve transition)
- **30% Primary CI & Typography Color**:
  - **Korean Air Dark Blue (대한항공 다크 블루 / 2025 CI 단색 주조색)**: `#051766` (RGB `5, 23, 102`) — Used exclusively for the **2025 monochrome Sangmo Ribbon Line Taegeuk symbol**, the **`KOREAN AIR` / `KOREAN` / `대한항공` bespoke vector logotype**, and primary display typography.
- **10% Accent & 3D Silk Motif**:
  - **Korean Air Royal Sky Blue**: `#0064B5` / `#57BBEB` (with subtle `#E0112B` Korean Air Red reserved only as a background 3D silk ribbon thread, never inside the monochrome `#051766` 2025 CI symbol).

### B. Exact Official 2025 Vector Geometry (`282 × 298` Sangmo Ribbon Line Taegeuk)
- **Single-Color Calligraphic Ribbon Symbol (`#051766`)**:
  - Aspect ratio: `282 × 298` (`viewBox="0 0 282 298"`).
  - Features razor-sharp crescent horn tips at upper-right (`~2 o'clock`) and lower-left (`~8 o'clock`), dramatic calligraphic swell across the deep central S-wave bellies, and crisp open negative-space channels.
  - **Animation Recipe (Zero-Distortion Official Reveal)**:
    - During `drawProgress ∈ [0, 0.96)`, reveal the exact official `<path>` through an SVG `<mask>` driven by a thick (`strokeWidth="84"`) centerline `strokeDashoffset` sweep tracing the ribbon flow.
    - At `drawProgress >= 0.96`, drop the `<mask>` entirely so the resting brand frame displays the **100% unaltered official vector path**.
- **3-Tier Official Vector Logotype System (Never Substitute System Fonts)**:
  1. **Primary Lockup**: `[282×298 Sangmo Taegeuk]  KOREAN AIR` (exact Dalton Maag / Lippincott vector letterforms with open `K` stem junction and calligraphic terminal curves).
  2. **Aircraft Livery Lockup**: `[282×298 Sangmo Taegeuk]  KOREAN` (applied across the forward metallic sky-blue fuselage of Boeing 787-10 `HL8515`, integrating cleanly behind the oval cabin windows).
  3. **Hangul Lockup**: `[282×298 Sangmo Taegeuk]  대한항공` (exact Korean Air Sans / Sandoll Hangul glyph paths).
- **Official 2025 Slogan**: **`Anywhere is Possible`** (`어디든 가능합니다`).

```tsx
export const KoreanAir2025SangmoMark: React.FC<{
  size?: number;
  drawProgress?: number;
  color?: string;
}> = ({ size = 120, drawProgress = 1, color = '#051766' }) => {
  const aspectWidth = (size * 282) / 298;
  const isComplete = drawProgress >= 0.96;
  const maskRibbonLength = 1040;
  const maskDashOffset = maskRibbonLength * (1 - Math.min(1, drawProgress / 0.96));

  return (
    <svg width={aspectWidth} height={size} viewBox="0 0 282 298" fill="none">
      {!isComplete && (
        <defs>
          <mask id="kal2025-ribbon-mask" maskUnits="userSpaceOnUse" x="-20" y="-20" width="322" height="338">
            <rect x="-20" y="-20" width="322" height="338" fill="#000000" />
            <path
              d="M 265 75 C 232 28, 184 12, 138 14 C 66 18, 14 78, 16 149 C 18 202, 58 228, 98 214 C 128 202, 136 174, 141 149 C 146 124, 154 96, 184 84 C 224 70, 264 96, 266 149 C 268 220, 216 280, 144 284 C 98 286, 50 270, 17 223"
              stroke="#FFFFFF"
              strokeWidth="84"
              strokeLinecap="round"
              strokeDasharray={maskRibbonLength}
              strokeDashoffset={maskDashOffset}
            />
          </mask>
        </defs>
      )}
      <path
        d={KOREAN_AIR_2025_TAEGEUK_PATH}
        fill={color}
        mask={!isComplete ? 'url(#kal2025-ribbon-mask)' : undefined}
      />
    </svg>
  );
};
```

---

## 2. Four Master Logo Reveal Techniques

### 1. Zero-Distortion Calligraphic Ribbon Mask (`<mask>` + Centerline `strokeDashoffset`)
Reveal the **exact official closed-contour SVG path** through a generous centerline `<mask>` stroke so variable calligraphic swells and razor-sharp tips unfurl naturally, then remove the mask at completion.

### 2. Per-Glyph Bespoke Logotype Stagger
Split the official wordmark SVG into per-letter `<path>` elements (`K, O, R, E, A, N...`) and stagger each glyph's Y-translation (`18px -> 0px`) and opacity (`0 -> 1`) by 2–3 frames so the real corporate wordmark breathes into frame like a kinetic title card.

### 3. Radial Clip Reveal
Unfurl a circular or emblem mark using an SVG `<clipPath>` circle expanding from the center point with organic overshoot.

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
