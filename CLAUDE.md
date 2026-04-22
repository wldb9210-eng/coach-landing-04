CLAUDE.md — Petal (coach-landing-04)

포폴 4번: K-Beauty 미백·톤업 에스테티션 랜딩페이지
가상 클라이언트: Petal — Hanging Garden K-Beauty Studio


🌸 프로젝트 개요
브랜드명: Petal
서브 전문: K-Beauty 미백·톤업 (Brightening)
로케이션: West Hollywood / Beverly Hills
브랜드 월드: Hanging Garden (공중정원) — 자연 추출물·꽃·풀 기반
브랜드 톤: Suspended · Botanical · Quiet
타겟: 30~45 프리미엄 고객 + 25~30 얼리어답터
차별화 한 줄: "K-beauty brightening, tended like a garden suspended between sky and skin."
트리트먼트 라인업:

N.1 Bloom Ritual · 90min · $280
N.2 Dew Veil Study · 60min · $180
N.3 Garden Ceremony · 120min · $380


🎨 디자인 시스템
팔레트 (CSS 변수)
css:root {
  /* === Base (배경·중립) === */
  --cream-whisper: #f2ebdd;   /* 메인 배경 */
  --sage-mist:     #d4d8c0;   /* 서브 배경 */
  --sage-moss:     #a8b098;   /* 중간 세이지 */

  /* === Bloom (꽃잎·액센트) === */
  --petal-peach:   #e8b59a;   /* 핵심 꽃잎 */
  --petal-blush:   #e8a59a;   /* 2차 꽃잎 */
  --dusty-rose:    #c98878;   /* CTA hover */

  /* === Warmth === */
  --warm-sand:     #d4b896;   /* 골든 */
  --earth-umber:   #8a6550;   /* 블랙 대체 다크 */

  /* === Ink (텍스트) === */
  --ink-deep:      #3d2e24;   /* 텍스트 메인 */
  --ink-soft:      #5d4a3e;   /* 서브 텍스트 */

  /* === Special === */
  --bloom-blur:    rgba(232,181,154,0.35);
  --sage-blur:     rgba(212,216,192,0.5);
}
⚠️ 중요 규칙:

블랙(#000) 사용 금지. 다크 섹션도 --earth-umber 또는 --ink-deep 사용
무드 분포: 라이트 70% + 세이지 20% + 다크 엄버 10%

타이포 (4폰트 체계)
css/* Google Fonts import */
@import url('https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300..600&family=DM+Mono:wght@400&display=swap');

/* 사용 */
--font-display: 'Italiana', serif;            /* Gate "PETAL", Final CTA H1 */
--font-serif:   'Cormorant Garamond', serif;  /* Hero H1, 섹션 H2, 인용구, Philosophy·About 본문 */
--font-sans:    'Inter', sans-serif;          /* 서브카피, FAQ, 작은 본문 */
--font-mono:    'DM Mono', monospace;         /* 라벨, N.01 태그 */

계급:

Display — Italiana 400, uppercase, letter-spacing 0.08~0.12em, line-height 1.0~1.05
  · Gate "PETAL": clamp(84, 13vw, 140)px
  · Final CTA H1 "Begin your garden": clamp(72, 8vw, 120)px

Serif — Cormorant Garamond 300 (얇게), italic 적극 활용 (italic 자간 살짝 좁게)
  · H1 (Hero): clamp(64, 7.2vw, 110)px, line-height 1.1
  · H2 (섹션): clamp(44, 5vw, 70)px, line-height 1.1
  · 인용구 (Belief·Testimonial): italic 300
  · 본문 (Philosophy·About): 17~22px, line-height 1.5~1.6

Sans — Inter 300~600
  · 서브카피, FAQ 본문, 작은 본문: 15~17px, line-height 1.6

Mono — DM Mono 400
  · Sub-label: 10~12px, uppercase, letter-spacing 0.15~0.2em
  · 태그 (N.01, +A), meta 정보

질감·레이어

필름 그레인 (SVG noise + mix-blend overlay, opacity 0.08)
골든아워 오버레이 (radial gradient warm-sand, opacity 0.15)
비네트 (edges softly darkened)
블룸 글로우 (Hero 이미지에 subtle warm glow)


🏗 섹션 구조 (13섹션)
0. Invitation Gate ⭐

연꽃 풀스크린 (images/gate-lotus.jpg)
중앙 대형 "PETAL" (Fraunces)
서브카피: "A garden, suspended. / Between sky and skin."
하단 "— TAP TO ENTER —" (테두리 박스, slow blink)
클릭 시: Veil Lift 전환 — GSAP clip-path inset(100% 0 0 0) + opacity 0 + scale 1.02, transform-origin center top, 1.4s power3.inOut (2026-04-22 모자이크 폐기·재설계)
1회 노출 (sessionStorage 플래그)

1. Nav
CATALOG · RITUALS · PETAL (로고 중앙) · GARDEN · CONTACT

스크롤 시 배경 페이드인 (--cream-whisper)

2. Hero

양옆 크림 여백 30~48px (풀블리드 X)
이미지: hero-bloom-field.png (블러 → 또렷 오프닝)
좌측: "A garden, suspended." (Fraunces H1)
우하단 사이드 카드: hero-perfume-card.png + N.1 · $280 · BOOK →
Dream Wake Reveal 시퀀스

3. Philosophy (2컬럼)

좌: 작은 모노톤 서브 라벨 (OUR AESTHETIC IS BLOOM...)
우: Fraunces 세이지 그린 본문 3~4줄

4. Ritual Lineup (4카드 그리드)
카드이미지라벨N.1lineup-lily-pink.pngBloom Ritual · 90min · $280N.2lineup-white-stamen.pngDew Veil Study · 60min · $180N.3gate-lotus.jpgGarden Ceremony · 120min · $380+A1.png (흰 피오니)Add-on: Oil Infusion
5. Belief (Dark Break)

풀블리드: belief-face-lily.png
다크 엄버 오버레이
중앙 Fraunces italic 인용구:
"We believe skin is tended, not treated. Petal by petal."

6. Ingredients / Garden Sourcing 🆕

배경: sage-mist, 2x2 그리드 (max-width 880px)
빈티지 톤 필터: saturate(0.75) contrast(0.95) sepia(0.1)
- N.01 Golden Nectar     · Aurum essence      · RADIANCE    → 2.png (골드 오일 버블)
- N.02 Botanical Elixir  · Jasminum sambac    · HYDRATION   → ingredient-golden-pour.png
- N.03 Honey Veil        · Mel floris         · NECTAR      → 3.png (꿀 드립)
- N.04 Petal Oil         · Camellia japonica  · BRIGHTENING → ingredient-oil-macro.png
각 카드: 이미지 박스 + 번호·라벨 + 라틴 학명 (Fraunces Italic) + 효능 한 단어 (DM Mono)

7. Process (Garden Ceremony) — 3행 컬러 블로킹
┌─────────────────┬─────────────────┐
│ sage-mist 배경   │ Image:           │
│ 01 DISCOVERY    │ process-water-bottle │
├─────────────────┼─────────────────┤
│ Image:           │ cream-whisper 배경│
│ process-tulip    │ 02 RITUAL        │
├─────────────────┼─────────────────┤
│ sage-moss 배경   │ Image:           │
│ 03 INTEGRATION  │ process-backlight-neck │
└─────────────────┴─────────────────┘
8. Signature Ritual Deep Dive

좌: 5.jpg 풀블리드 (입술 + 물방울 + 자홍 꽃잎 클로즈업, 2026-04-22 교체)
우: The Bloom Ritual 상세 (원료·프로토콜·시간)

9. About the Aesthetician 🆕

배경: cream-whisper
좌우 2분할 (2026-04-22 스왑: 데스크톱 좌=텍스트, 우=이미지 / 모바일 이미지→텍스트 순)
- 좌(데스크톱): H2 "HANDS THAT KNOW THE BLOOM" + Body (10년 K-beauty, 서울↔LA) + 서명 placeholder (Fraunces Italic)
- 우(데스크톱): final-blur-gold.jpg (커튼 너머 흐릿한 인물 + 골드 링, 2026-04-22 교체. 4.png는 아카이브) — aspect-ratio 3/4

10. Testimonial (Dark Umber)

배경: testimonial-facial.png 풀블리드
--earth-umber 오버레이 (opacity 0.4)
중앙 크림 세리프 인용구 + 고객명

11. FAQ

좌: faq-curtain-face.png 카드 이미지 (재사용)
우: 4개 아코디언

12. Final CTA + Footer

Final CTA 배경: #c8ccb4 sage 단색 + subtle radial-gradient (ellipse, sage-mist ↔ sage-moss 0.6)
  · 배경 이미지·필터·오버레이 전부 제거 (2026-04-22 리뉴얼)
  · "garden." 부분은 Cormorant italic + --earth-umber 포인트
  · (gate-lotus.jpg 파일은 남겨둠, 미사용. final-blur-gold.jpg는 2026-04-22 About으로 재활용)
중앙 대형 Italiana: "BEGIN YOUR GARDEN." (uppercase, letter-spacing 0.08em, line-height 0.95)
  · 사이즈 clamp(5.4rem, 6vw, 9rem) — 이전 대비 -25% 축소
CTA 버튼 (톤다운): rgba(ink-deep, 0.75) + backdrop-filter blur(8px) + cream hairline border
  · 호버: solid ink-deep + translateY(-2px)
Final CTA 하단 180px: linear-gradient transparent → cream-whisper
Footer 배경: cream-whisper (메인 배경 연결, 톤 끊김 없음)
Footer 텍스트: --ink-deep (카피라이트·italic는 --ink-soft)
Footer sub-label (PETAL·CONTACT·FOLLOW): --petal-peach 액센트
Footer 구분선: rgba(sage-moss, 0.35)
3컬럼 Footer (스튜디오 정보 · 컨택 · 소셜) + 하단 카피라이트


🎞 모션 세트 (총 18개 — MAREA 상속 10 + Petal 신규 4 + 생동감 4)

기존 10:
- Dream Wake Reveal (Hero 텍스트): blur 20px→0, opacity 0→1, scale 1.02→1, translateY 20px→0
- Ken Burns (Hero 이미지): scale 1.0→1.03, 9s
- Breathing Scale (꽃 이미지 / Gate lotus): 1.0 ↔ 1.015, 5~7s
- Ambient Sun Glow (Hero): 40초 주기 좌→우
- Scroll Fade-in: IntersectionObserver, translateY 30px→0
- Ripple on Click (CTA)
- CTA Pulsing Glow: 2.5s infinite
- Image Warm-up on Hover: brightness(1.05) saturate(1.1)
- Gate Veil Lift (Invitation Gate → Hero, 2026-04-22 모자이크 폐기·재설계): clip-path inset(100% 0 0 0) + opacity 0 + scale 1.02, transform-origin center top, duration 1.4s, ease power3.inOut. content 먼저 페이드(0.5s at t=0), gate 0.2s 지연 후 Veil Lift → 총 ~1.6s. "suspended/quiet" 브랜드 톤에 맞는 단일 레이어 커튼 전환
- prefers-reduced-motion 체크 필수

Petal 신규 4 (Petal Drift 제거, 2026-04-22):
- Bloom Unfold (섹션 H2): 글자 단위 stagger 0.04s, scale 0.95→1, rotate 2°→0°
- Veil Lift (Belief·Testimonial·Final CTA): cream 오버레이가 아래→위로 걷힘
- Ink Calligraphy (keyword hover): ::after 밑줄 왼→오 draw (0.6s)
- Dew Shimmer (image hover): radial-gradient 광점 3.5s drift

생동감 4 (Floating Pollen 제거, 2026-04-22):
- Parallax Layers: Hero·Belief·Testimonial 배경 이미지, scroll 기반 translateY (factor 0.3 / 모바일 0.15)
- Stagger Cards: Lineup·Ingredients 4카드 IntersectionObserver 진입 시 150ms 간격, translateY 40px→0, 0.8s ease-out
- Text Breath (Hero H1 + Final CTA H1): scale 1↔1.008, 6s
- Section Transition Fade: 라이트 섹션끼리만 — 각 섹션 ::after 하단 12vh linear-gradient 페이드. **다크 섹션(Belief·Testimonial) 예외 — 앞뒤 모두 sharp edge 유지** (깊은 브레이크 역할). faq→final-cta는 sage(#c8ccb4) 톤으로 페이드


📐 레이아웃 규칙

Hero·대형 섹션 = 풀블리드 아님 — 양옆 크림 여백 24~48px
본문 섹션 = 크림/화이트 2톤 교차
컬러 블로킹 섹션 1개 이상 (Process)
다크 섹션 1개 전용 (Testimonial, earth-umber)
반응형: 데스크톱 1440 → 태블릿 768 → 모바일 375
모바일: cursor-trail·floating particles 비활성화


🛠 기술 스택

HTML + CSS + Vanilla JS (static, 빌드 툴 없음)
GSAP 3 (CDN, Invitation Gate 꽃잎 분산용)
Google Fonts (Fraunces + Inter + DM Mono)
SVG (grain texture, clip-path)
IntersectionObserver (scroll fade-in)
sessionStorage (Gate 1회 노출)
Hosting: Netlify 드래그앤드롭
Repo: GitHub wldb9210-eng/coach-landing-04


📁 파일 구조
coach-landing-04/
├── index.html
├── style.css
├── main.js
├── images/
│   ├── gate-lotus.jpg
│   ├── hero-bloom-field.png
│   ├── hero-perfume-card.png
│   ├── lineup-lily-pink.png
│   ├── lineup-white-stamen.png
│   ├── belief-face-lily.png
│   ├── process-water-bottle.png
│   ├── process-tulip-profile.png
│   ├── process-backlight-neck.png
│   ├── testimonial-facial.png
│   ├── faq-curtain-face.png
│   ├── final-blur-gold.jpg          ← 섹션 9, About 인물 (2026-04-22 About으로 재활용)
│   ├── ingredient-rose-citrus.png   ← 아카이브 (2026-04-22 N.01 교체 전 원본)
│   ├── ingredient-golden-pour.png   ← 섹션 6, N.02
│   ├── ingredient-forest-moss.png   ← 아카이브 (2026-04-22 N.03 교체 전 원본)
│   ├── ingredient-oil-macro.png     ← 섹션 6, N.04
│   ├── 1.png                        ← 섹션 4, Lineup +A (흰 피오니)
│   ├── 2.png                        ← 섹션 6, N.01 (골드 오일 버블)
│   ├── 3.png                        ← 섹션 6, N.03 (꿀 드립)
│   ├── 4.png                        ← 아카이브 (2026-04-22 About 교체 전 원본, 여자 얼굴)
│   └── 5.jpg                        ← 섹션 8, Signature (입술+물방울+자홍 꽃잎, 2026-04-22 추가)
├── sections/   (섹션별 작업용 HTML 파편, 옵션)
├── docs/       (카피·스펙 문서)
└── CLAUDE.md   (이 파일)

⚠️ 작업 원칙 (필수)

파일 수정 전 반드시 먼저 확인 — 지유가 이미 수정했을 수 있음
Plan Mode 사용 — 주요 편집 전 Shift+Tab 2번으로 계획 먼저
한국어로 응답
미해결 항목을 확정된 것처럼 쓰지 말 것
블랙 색상 절대 금지 — --ink-deep 또는 --earth-umber 사용
이미지 경로 주의 — gate-lotus.jpg, final-blur-gold.jpg는 .jpg (나머지 .png)
보안 규칙 — Supabase 없음, .env 없음, CORS 와일드카드 X
이 CLAUDE.md와 충돌하는 요청이 오면 지유에게 확인 후 진행
Figma 동기화 포기 (2026-04-22) — Figma 파일은 뼈대 상태로 박제. 편집·동기화·"Figma → HTML 반영" 작업 일체 금지
진실의 원천 = HTML 파일 (index.html / style.css / main.js) — 디자인·카피·레이아웃 모든 결정은 이 3개 파일 기준
Figma 관련 작업 요청이 와도 수행하지 말고 "박제 완료" 상태임을 지유에게 먼저 알릴 것


🎯 현재 진행 상태

[x] 페르소나 확정
[x] 팔레트·타이포 확정
[x] 섹션 구조 확정 (13섹션)
[x] 이미지 16장 확보 및 images/ 배치
[x] Figma 뼈대 박제 완료 (2026-04-22) — 이후 편집·동기화 포기. HTML이 진실의 원천
[x] 재료 이미지 4장 수급 (Rose & Citrus · Botanical Elixir · Moss & Fern · Petal Oil)
[x] 카피 작성 (13섹션 전체 확정)
[x] index.html 뼈대 (13섹션 시맨틱 마크업 + GSAP/Google Fonts CDN)
[x] style.css (팔레트·타이포·13섹션 + 15 모션 keyframes + 반응형 1023/767)
[x] main.js (모션: Gate Veil Lift · Dream Wake · Scroll Fade · Bloom Unfold · Section Veil Lift · Ripple · Stagger Cards · Parallax · Nav Scroll + CSS 연동)
[x] Gate Veil Lift 구현 (Gate → Hero, 단일 레이어 clip-path+fade+scale, ~1.6s, 2026-04-22 모자이크 폐기·재설계)
[ ] 브라우저 수동 테스트 (Chrome, 1440/768/375)
[ ] Netlify 배포


마지막 업데이트: 2026-04-22
