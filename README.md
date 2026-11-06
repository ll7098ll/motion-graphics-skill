# Adaptive React & Remotion 모션그래픽 스킬 패키지

이 패키지는 특정 형식(4막 등)에 얽매이지 않고, **영상의 목적·러닝타임·화면비·브랜드 아이덴티티에 따라 유연하게 구조를 판단하고 최신 디자인 스타일을 능동적으로 선택**하여 고품질 비디오를 제작하는 Antigravity/Gemini 에이전트용 완성형 스킬입니다.

---

## 🎯 핵심 역량

1. **상황 적응형 구조 (Adaptive Structural Archetypes)**:
   - 3~6초: 키네틱 로고 범퍼 & 심리스 마이크로 루프
   - 8~15초: 9:16 모바일 릴스/쇼츠 (0.8초 썸스토핑 훅 + 고밀도 시각화 + 즉각적 CTA)
   - 15~30초: 클래식 브랜드/프로덕트 론칭 필름 (기승전결 브랜드 서사)
   - 30~60초: 다단계 챕터형 익스플레이너 (문제 정의 → 기술 해설 → 실제 UI 데모 → 생태계)
   - 상시: 단일 오브젝트 연속 모핑 루프 (UI 쇼케이스)

2. **최신 디자인 랭귀지 스펙트럼 (7대 스타일)**:
   - 스위스 네오 브루탈리즘 (Swiss Grotesque)
   - 럭셔리 다크 티타늄 (Apple / Stripe FinTech)
   - 에디토리얼 세리프 & 시네마 (Academic & Cultural Dignity)
   - 옵티컬 하프톤 & 동적 도트 매트릭스 (Creative Studio)
   - 택타일 피지컬 소프트웨어 UI (Haptic Springs & Cursors)
   - 시네마틱 모빌리티 & 항공 (Aviation, Aerodynamic Arcs, Telemetry)
   - 바이브런트 키네틱 팝 & 볼드 지오메트리 (Pop Energy & Color Blocks)

3. **사전 에셋 보유 여부 질의 및 3-트랙 자산 프로토콜 (Mandatory Asset Inquiry)**:
   - **선제적 질의**: 영상 기획 착수 전 사용자에게 로고(SVG/PNG), 제품 스크린샷, 실사 이미지, 공식 색상(HEX), 슬로건 등의 보유 여부를 능동적으로 질문
   - **트랙 A (보유 에셋 활용)**: `public/` 폴더 맵핑, `staticFile()` 연동, 켄 번스(Ken Burns) 패닝 및 3D 원근 목업 연출
   - **트랙 B (에셋 무보유 / '알아서 해줘')**: 멈추지 않고 브랜드/단체의 공식 CI 벡터 자체 정밀 복원 및 도메인 맞춤형 UI/비주얼 자체 합성
   - **트랙 C (하이브리드)**: 로고나 URL만 제공 시 브랜드 색상 추출 및 주변 UI 대시보드 자율 설계

---

## 📁 디렉토리 구조

```
motion-graphics-skill/
├── SKILL.md                 # 메인 스킬 정의서 (상황 적응형 판단 룰 탑재)
├── README.md                # 패키지 안내서
├── references/              # 심화 가이드라인 (11대 레퍼런스)
│   ├── structural-archetypes.md  # 5대 상황별 서사 아키텍처
│   ├── design-styles.md          # 7대 최신 디자인 스타일 가이드 & 레시피
│   ├── brand-identity-and-ci.md  # 공식 CI 벡터 모델링 & 로고 리빌
│   ├── storytelling-and-narrative.md # 시각적 은유 & 객체 기반 전환
│   ├── asset-orchestration.md    # 실사 사진 Ken Burns & 3D 틸트 목업
│   ├── remotion-patterns.md      # Remotion 코어 스프링 & 인터폴레이션
│   ├── ui-motion-recipes.md      # 택타일 UI 인터랙션 레시피
│   ├── remotion-qa-and-verification.md # 3단계 검증 파이프라인 & 10대 포스터 체크리스트
│   ├── timing.md                 # 120 BPM 음악적 그리드 환산 공식
│   ├── motion-math.md            # 결정론적 스프링 ODE & 로그 스페이스 줌
│   └── gotchas.md                # 브라우저/Chromium 렌더링 함정 및 해결책
└── resources/
    └── starter-remotion/         # 즉시 복사해 시작할 수 있는 React Remotion 스타터
        ├── package.json
        ├── remotion.config.ts
        ├── tsconfig.json
        └── src/ (index.ts, Root.tsx, Main.tsx)
```

---

## 🚀 빠른 시작

```bash
# 1. 스타터 템플릿 복사 후 의존성 설치
cp -r resources/starter-remotion my-project
cd my-project
npm install

# 2. 실시간 타임라인 탐색 (Remotion Studio)
npm run preview

# 3. 60fps 마스터 MP4 빌드
npm run build
```
