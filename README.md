# Adaptive Motion Graphics & Prompt-Motion 스킬 패키지

이 패키지는 사용자가 **어떤 주제를 제시하든 그에 가장 어울리는 기획과 비트 구성을 도출**하고, [prompt-motion.com](https://prompt-motion.com/)의 최고 인기 쇼릴 및 론칭 영상 수준의 **초고품질 마스터 프롬프트를 자동 작성**하며, **스튜디오급 60fps React/Remotion 코드로 직결**해내는 완성형 모션 그래픽 에이전트 스킬입니다.

---

## 🎯 4대 핵심 역량 (Core Superpowers)

### 1. 주제 맞춤형 기획 & 구성 (Concept-to-Composition Intelligence)
- 사용자가 던진 임의의 주제(예: AI 코딩 에이전트, 핀테크 카드, 클라우드 보안 쉴드, 스페셜티 커피 브랜드, 디자이너 쇼릴 등)의 본질을 즉시 분석.
- 단순 추상 박스가 아닌 **도메인 정통 비주얼 메타포(Tangible Objects)** 매핑 (터미널 커서, 3D 틸트 신용카드, 헥사곤 방화벽, 텔레메트리 HUD 등).
- **120 BPM 음악적 비트 그리드(0.5초 = 30프레임)**에 맞춘 4막 기승전결(0.8초 썸스토핑 훅 → 실시간 엔진/데이터 시연 → 3D 공간 확장 → 시그니처 록업 및 포스터 홀드) 스토리보드 자동 설계.

### 2. Prompt-Motion.com 수준의 마스터 프롬프트 작성 엔진 (Prompt Engineering)
- 최신 Claude Opus 5.5 모션 그래픽 갤러리인 `prompt-motion.com`의 200+ 바이럴 프롬프트를 역설계한 **6대 기둥(6 Pillars) 마스터 프롬프트 프레임워크** 탑재:
  1. **월드클래스 페르소나 및 롤 설정**: Apple Keynote / Stripe Press / Pentagram 레벨 지향
  2. **디자인 룩북 및 색상/타이포 토큰**: 헥스 컬러, 1px 보더, 앰비언트 글로우, 고대비 타이포
  3. **초/비트 단위 타임라인 브레이크다운**: 0.0s~2.5s, 2.5s~7.0s ... 씬별 동작 및 전환 명세
  4. **물리 엔진 및 Remotion 수식**: 스프링 댐핑/스티프니스, 스태거 지연, 3D 퍼스펙티브
  5. **엄격한 금지 조항 (Banned Clichés)**: 지루한 페이드, 정적인 텍스트, 비어있는 화면 차단
  6. **자급자족 React/TSX 실행 규격**: 외부 의존성 없는 완전한 컴파일 보장

### 3. 스튜디오급 비주얼 폴리시 & 물리 (Studio-Grade Visual Polish)
- **3D 공간 카메라 리그**: `perspective(1200px)`와 시간 기반 미세 패럴랙스 틸트
- **보더 빔(Border-Beam Shimmer)**: 카드 테두리를 따라 빛이 회전하는 애플/리니어 스타일 광원
- **마스크드 키네틱 타이포그래피**: `overflow: hidden` 클리핑을 뚫고 튀어나오는 단어별 스태거 스프링
- **지터 없는 롤링 카운터**: `tabular-nums` 모노스페이스 기반 지연시간/처리량 실시간 계측
- **살아있는 앰비언트 배경**: 48px 도트 매트릭스 그리드와 펄스 방사형 스포트라이트
- **동적 SVG 스플라인 차트**: `strokeDashoffset` 기반의 부드러운 경로 드로잉

### 4. 선제적 에셋 질의 & 3-트랙 자산 프로토콜 (Mandatory Asset Inquiry)
- 착수 전 로고(SVG/PNG), 스크린샷, 실사 이미지, 공식 색상 등의 보유 여부를 능동 질의.
- 에셋이 없거나 "알아서 해줘"라고 해도 멈추지 않고 브랜드 CI 벡터 및 도메인 UI를 자율 제작.

---

## 📁 디렉토리 구조 & 레퍼런스 색인

```
motion-graphics-skill/
├── SKILL.md                          # 메인 스킬 정의서 (5단계 파이프라인 탑재)
├── README.md                         # 패키지 종합 안내서
├── references/                       # 14종 전문 레퍼런스 가이드
│   ├── prompt-engineering.md         # ★ prompt-motion.com 마스터 프롬프트 작성법 & 템플릿
│   ├── concept-to-composition.md     # ★ 주제별 비주얼 메타포 & 스토리보드 기획 프레임워크
│   ├── studio-polish-recipes.md      # ★ 3D 틸트, 보더 빔, 키네틱 타이포, 롤링 카운터 레시피
│   ├── structural-archetypes.md      # 5대 상황별 서사 아키텍처 (쇼츠, 쇼릴, 론칭 등)
│   ├── design-styles.md              # 7대 최신 디자인 스타일 가이드 & 토큰
│   ├── brand-identity-and-ci.md      # 공식 CI 벡터 모델링 & 로고 리빌
│   ├── storytelling-and-narrative.md # 객체 기반 씬 전환(Handoff) 및 스토리텔링
│   ├── asset-orchestration.md        # 실사 Ken Burns 패닝 & 3D 원근 목업
│   ├── remotion-patterns.md          # Remotion 스프링, 인터폴레이션, 시퀀스
│   ├── ui-motion-recipes.md          # 햅틱 버튼, 유체 탭, 커서 인터랙션
│   ├── remotion-qa-and-verification.md # 3단계 검증 파이프라인 & 10대 포스터 체크리스트
│   ├── timing.md                     # 120 BPM 음악적 그리드 환산 공식
│   ├── motion-math.md                # 스프링 ODE & 로그 스페이스 줌
│   └── gotchas.md                    # 브라우저/Chromium 렌더링 함정 회피법
└── resources/
    └── starter-remotion/             # 스튜디오급 60fps 마스터 스타터 프로젝트
        ├── package.json
        ├── remotion.config.ts
        ├── tsconfig.json
        └── src/
            ├── index.ts              # registerRoot
            ├── Root.tsx              # 60fps 900프레임 (15초) 컴포지션 정의
            └── Main.tsx              # 3D 틸트, 보더 빔, 키네틱 타이포, 텔레메트리 쇼케이스
```

---

## 🚀 빠른 시작 & 렌더링 CLI

```bash
# 1. 스타터 템플릿 복사 후 의존성 설치
cp -r resources/starter-remotion my-project
cd my-project
npm install

# 2. 실시간 타임라인 탐색 (Remotion Studio)
npm run preview   # 또는 npx remotion preview src/index.ts

# 3. 60fps 마스터 MP4 빌드
npm run build     # 또는 npx remotion render src/index.ts Main out.mp4

# 4. 고해상도 키프레임 포스터 스틸 캡처
npx remotion still src/index.ts Main still_frame.png --frame=180
```
