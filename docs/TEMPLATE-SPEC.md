# 🌸 Petal Template Spec
> 포폴 4번 · M1 Dream Bloom (Hanging Garden)
> Last updated: 2026-04-22

---

## 1. 팔레트 (CSS 변수)

`style.css` `:root`에서 추출. 모두 16진수 또는 rgba 값으로 정의. 블랙 `#000` 사용 없음 (강제 원칙).

**Base · 배경·중립**
- `--cream-whisper: #f2ebdd` — 메인 배경
- `--sage-mist:     #d4d8c0` — 서브 배경
- `--sage-moss:     #a8b098` — 중간 세이지

**Bloom · 꽃잎·액센트**
- `--petal-peach:   #e8b59a` — 핵심 꽃잎
- `--petal-blush:   #e8a59a` — 2차 꽃잎
- `--dusty-rose:    #c98878` — CTA hover

**Warmth · 골든**
- `--warm-sand:     #d4b896`
- `--earth-umber:   #8a6550` — 블랙 대체 다크 · Final CTA 포인트

**Ink · 텍스트**
- `--ink-deep:      #3d2e24` — 메인 텍스트
- `--ink-soft:      #5d4a3e` — 서브 텍스트

**Special**
- `--bloom-blur:    rgba(232, 181, 154, 0.35)` — Hero sun glow radial
- `--sage-blur:     rgba(212, 216, 192, 0.50)` — 보조

> 무드 분포: cream 70% + sage 20% + earth-umber 10%
> 블랙 절대 금지 — 다크 섹션도 `--earth-umber` 또는 `--ink-deep` 사용

---

## 2. 타이포그래피 (4폰트 체계)

실제 사용 폰트는 4개. (CLAUDE.md 기록 중 "Fraunces"는 현재 코드에 로드 안 됨, Cormorant Garamond로 수렴)

### Google Fonts 로드
```
Italiana & Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400
  & Inter:wght@300..600 & DM+Mono:wght@400
```

### 계층 · 사용처

| 폰트 | CSS 변수 | 최대 크기 | 사용처 |
|---|---|---|---|
| **Italiana 400** | `--font-display` | 140px (Gate) / 90px (Final CTA) | Gate 타이틀 "PETAL" · Final CTA H1 "BEGIN YOUR" |
| **Cormorant Garamond 300** | `--font-serif` | 110px (Hero H1) / 70px (섹션 H2) | Hero H1 · 섹션 H2 · 인용구(italic) · Philosophy·About 본문 · Final CTA `garden.` 포인트 |
| **Inter 300~600** | `--font-sans` | 15~17px | 서브카피 · FAQ 본문 · 작은 본문 · body 기본 |
| **DM Mono 400** | `--font-mono` | 10~12px | 서브라벨 · N.01 태그 · `— END OF RITUAL —` · 메타 텍스트 |

### 타이포 규칙
- Display (Italiana): uppercase, letter-spacing 0.08~0.12em, line-height 1.0~1.05
- Serif (Cormorant): weight 300 얇게, italic 적극 활용
- em tag: `font-style: italic; font-weight: 300; letter-spacing: -0.01em`

---

## 3. 레이아웃 구조 (13섹션)

| # | 섹션 | 핵심 구조 / 수치 |
|---|---|---|
| **00** | **Invitation Gate** | 풀블리드 fixed (z-index 1000), lotus 배경 `inset: 32px` + border-radius 2px, 클릭 → **Veil Lift** 전환 (clip-path inset(100% 0 0 0) + opacity + scale 1.02, 1.4s power3.inOut), sessionStorage로 1회 노출 |
| **01** | **Nav** | fixed top, `grid 1fr auto 1fr`, 스크롤 시 cream 0.92 + backdrop-filter blur(8px) |
| **02** | **Hero** | min-height **115vh**, 절대 위치 `figure`(inset 100 72 80) + `text` margin-top 18vh + primary CTA, 좌측 cream::before 그라데이션 |
| **03** | **Philosophy** | 배경 sage-mist, container max-width **1120**, grid 1fr 2fr 2컬럼 |
| **04** | **Ritual Lineup** | 4카드 grid, container max-width **960**, gap **56px** |
| **05** | **Belief** (다크) | 풀블리드 배경 + earth-umber 오버레이, min-height 80vh, 인용구 max-width **720** |
| **06** | **Ingredients** | 2×2 grid, max-width **720**, gap **64px**, 이미지 빈티지 필터 `saturate(0.75) contrast(0.95) sepia(0.1)` |
| **07** | **Process** | 3 rows 컬러 블로킹 (sage-mist / cream / sage-moss), padding 상하 **160**, 끝에 **`— END OF RITUAL —`** 챕터 마침 (margin-top 160, DM Mono 1.1rem, opacity 0.55) |
| **08** | **Signature** | grid **0.9fr 1.1fr** + gap var(--space-xl) + padding 160 48, max-width 1280, 좌 이미지 **max-width 380px / aspect 3/4** 빈티지 필터, 우 텍스트 |
| **09** | **About** | grid 1fr 1fr, 데스크톱 **좌 텍스트 / 우 이미지** (CSS `order` 스왑), 이미지 aspect 3/4 |
| **10** | **Testimonial** (다크) | 풀블리드 + earth-umber 오버레이, min-height 100vh, `.testimonial__quotes` 세로 스택 3개 (gap var(--space-xl)) |
| **11** | **FAQ** | grid 1fr 1fr, container max-width **1120**, 우측 아코디언 4개 max-width 560 |
| **12** | **Final CTA** | 배경 radial-gradient #c8ccb4 ↔ sage-moss 0.6, H1 Italiana + em `garden.` earth-umber 포인트, cta-btn 로컬 override rgba(ink-deep, 0.85) |
| **13** | **Footer** | 배경 cream, 3컬럼 `text-align` 분산 (좌/중/우), `.footer__bottom` flex space-between |

### 섹션 간 전환 장치 (`::after` 12vh 페이드)
- Hero → Philosophy: sage-mist 페이드
- FAQ → Final CTA: sage #c8ccb4 페이드
- **나머지 sharp edge**: Philosophy·Lineup·Ingredients·Process·Signature·About·Belief·Testimonial 모두 페이드 없음
- Process→Signature는 `— END OF RITUAL —` 텍스트가 챕터 마침 역할

---

## 4. 모션 & 효과

### JS 주도 (9개, `main.js`)
| 이름 | 함수 | 트리거 | Duration / 설정 |
|---|---|---|---|
| Gate Veil Lift | `scatterAndEnter()` | TAP TO ENTER 클릭 | 1.4s power3.inOut, content 0.2s 선행 페이드 |
| Nav Scroll BG | `setupNavScroll()` | scrollY > 60 | transition 0.35s |
| Scroll Fade-in | `setupScrollFadeIn()` | IntersectionObserver threshold 0.15 | translateY 30→0, opacity 0→1, 0.9s |
| Stagger Cards | `setupStaggerGroups()` | IntersectionObserver 0.2 | translateY 40→0, stagger 0.15s, 0.8s ease-out |
| Dream Wake Reveal | `setupDreamWake()` | DOMContentLoaded + 120ms | blur 20→0 + opacity + scale 1.02→1, 1.1s ease-out, delay chain 0.2 / 0.4 / 0.55 |
| Bloom Unfold | `setupBloomUnfold()` | H2 진입 시 char stagger | 0.04s per char, scale 0.95→1 + rotate 2°→0° |
| Veil Lift (섹션) | `setupVeilLift()` | Belief·Testimonial·Final CTA 진입 0.25 | overlay cream scaleY 1→0 + opacity 0.8→0, 0.6s |
| Ripple on CTA | `setupRipple()` | `.cta-btn` click | scale 4x + fade 0.6s |
| Parallax Layers | `setupParallax()` | scroll | translateY factor 0.3 (모바일 0.15) |

### CSS @keyframes (9개, `style.css:1004~`)
| 이름 | 대상 | 역할 |
|---|---|---|
| `kenBurns` | `.hero__image` | scale 1→1.03 + translate -1%, 3s alternate |
| `breathe` | `.gate__lotus img` | scale 1↔1.015, 7s |
| `sunGlow` | `.hero__sun-glow` | translateX -30%↔130%, 40s |
| `pulseGlow` | `.cta-btn--pulse` | box-shadow pulse, 2.5s |
| `blink` | `.gate__enter` | opacity 1↔0.5, 2.8s |
| `ripple` | `.ripple` span | scale 0→4, 0.6s |
| `shimmerDrift` | `.img-shimmer::after` hover | translate + opacity, 3.5s |
| `bloomChar` | `.bloom-unfold__char` | opacity + scale + rotate, 0.7s |
| `textBreath` | `.text-breath` (Hero H1 + Final CTA H1) | scale 1↔1.008, 6s |

### 추가 효과 (hover 기반)
- **Image Warm-up** — `.img-shimmer:hover img { filter: brightness(1.05) saturate(1.1); }`
- **Ink Calligraphy** — `.ink-word:hover::after { transform: scaleX(1); }` underline draw 0.6s
- **Card Hover Lift** — `.card:hover { transform: translateY(-6px); }`
- **Nav Link Hover** — color dusty-rose

### 제거된 모션 (히스토리)
- ❌ Petal Drift (Hero·Final CTA 부유 SVG 꽃잎, 2026-04-22 제거)
- ❌ Floating Pollen (body 레벨 금빛 점, 2026-04-22 제거)
- ❌ Gate Mosaic Scatter (560 타일 파편 전환, 2026-04-22 Veil Lift로 교체)

### 접근성
`@media (prefers-reduced-motion: reduce)` 전역 적용:
- `animation-duration: 0.01ms !important`
- `transition-duration: 0.01ms !important`
- `.dream-wake`, `[data-fade]`, `[data-stagger]` → 즉시 visible
- `.veil-lift::before` display:none
- `[data-parallax]` transform:none

---

## 5. CRO 핵심 장치

**구현된 3가지 (템플릿 고정)**
1. **Hero primary CTA** — `BOOK THE BLOOM RITUAL →` (Italiana 아래 cta-btn pulse, dream-wake delay 0.55s)
2. **Calendly 실제 링크** — 7곳 모두 `https://calendly.com/petal-studio/bloom-ritual` (Hero CTA + Lineup 4카드 + Signature + Final CTA) · `target="_blank" rel="noopener noreferrer"`
3. **Testimonial 3개** — 심리학적 사회적 증거 임계점 충족 (M.K. · Lauren S. · Danielle K., 세로 스택)

**고객 프로젝트용 업셀 옵션 5개 (TBD — 이 템플릿엔 미구현)**
- ⬜ **Urgency / Availability**: "Only 3 slots this month" 배너, Final CTA 상단
- ⬜ **Risk reversal**: "First ritual — your skin or your investment back" 보증 문구
- ⬜ **Lead capture**: 뉴스레터 email 폼 (Footer 또는 Final CTA 후)
- ⬜ **Ingredients 혜택 deep-dive**: 각 성분별 효능 상세 페이지 링크
- ⬜ **Self-qualification**: "Is Petal right for you?" 체크리스트 섹션

---

## 6. 반응형 Breakpoint

| 기기 | 뷰포트 | 적용 규칙 |
|---|---|---|
| **Desktop** | 1440+ | 기본 스타일 |
| **Laptop** | 1024~1439 | 기본 스타일 (개별 섹션 max-width로 자연 수축) |
| **Tablet** | 768~1023 | `@media (max-width: 1023px)` — padding/grid 1열 전환, About order 해제 |
| **Mobile** | ~767 | `@media (max-width: 767px)` — Hero 세로 스택, --space-2xl 140 + --space-xl 110, Nav 축소, Signature aspect 4/5 |
| **(참고)** Mobile small | ~375 | iPhone SE/13 mini 기준 실기기 확인 (Nav 5개 항목 ≈269px @ 375) |

**모바일 전용 override 요점**
- Hero: `position: static` 세로 스택, figure aspect-ratio 4/5 풀폭, sub-label 1줄 nowrap + ellipsis
- 섹션 내부 gap: `var(--space-xl)` (110px) — Process 02 리듬 일반화
- Signature: 단일 이미지 복구 (4조각 아님), padding 해제

---

## 7. 가격 구조

> **지유 정책 — 실제 서비스 제공 시 적용**

| 옵션 | 가격 | 포함 |
|---|---:|---|
| **베이스** | **$300** | 10섹션, 72시간 납기, 수정 1회 |
| Hero 영상 | +$100 | 배경 비디오 루프 |
| 카피 | +$80 | 카피라이팅 전체 |
| 이미지 | +$50 | 이미지 수급·큐레이션 |
| **풀옵션** | **$530** | 3옵션 모두 포함 |
| 추가 수정 | $30 / 건 | 수정 1회 이후 |

---

## 8. 파일 구조 (2026-04-22 현재)

```
coach-landing-04/
├── index.html
├── style.css
├── main.js
├── CLAUDE.md
├── .git/                            ← 2026-04-22 init, wldb9210-eng/coach-landing-04
├── images/                          ← 36장 (원본 + 아카이브)
│   ├── gate-lotus.jpg
│   ├── hero-bloom-field.png
│   ├── belief-face-lily.png
│   ├── testimonial-facial.png
│   ├── faq-curtain-face.png
│   ├── final-blur-gold.jpg          ← About 섹션 재활용
│   ├── lineup-*.png (2장) · gate-lotus.jpg 재사용
│   ├── ingredient-*.png (4장, 2장은 아카이브)
│   ├── process-*.png (3장)
│   ├── hero-perfume-card.png        ← 아카이브 (Hero 사이드카드 제거 후 미사용)
│   ├── 1.png                        ← Lineup +A (흰 피오니)
│   ├── 2.png                        ← Ingredients N.01 (오일 버블)
│   ├── 3.png                        ← Ingredients N.03 (꿀 드립)
│   ├── 4.png                        ← Signature 현재 이미지 (sun-kissed skin)
│   └── 5.jpg                        ← 아카이브 (Signature 교체 전)
├── portfolio-assets/
│   └── petal/                       ← 섹션별 스크린샷 14장 (2026-04-22 캡처)
│       ├── 00-gate.png ~ 13-footer.png
│       └── full-page.png
├── docs/
│   └── TEMPLATE-SPEC.md             ← 이 문서
└── sections/                        ← (옵션, 현재 비어있음)
```

> README.md는 현재 없음 (필요 시 별도 생성)

---

## 9. 붕어빵 철학 (템플릿 재사용 원칙)

### 고정 (다음 포폴에서 그대로 계승)
- 13섹션 순서 + 시맨틱 구조
- CSS 변수 체계 (--cream-whisper, --ink-deep 등 이름)
- 모션 세트 9 JS + 9 keyframes + hover 효과
- CRO 3장치 (Hero CTA / Calendly / Testimonial 3개)
- 4폰트 계층
- prefers-reduced-motion 존중
- 블랙 #000 금지 · 블랙 대체 earth-umber/ink-deep
- 반응형 breakpoint 1023 / 767

### 변수 (브랜드마다 교체)
- 브랜드명 · 톤 키워드 (Petal = "Suspended · Botanical · Quiet")
- 카피 (Hero H1, Philosophy, Signature, Testimonial 등)
- 이미지 전체 (팔레트에 맞춰 큐레이션)
- CSS 변수 값 (팔레트)
- 서비스 라인업 이름 (N.01~N.03 + Add-on)
- 가격 · 시간
- Calendly URL · 연락처

### 포폴 5번 이후 작업 흐름
1. 이 프로젝트 fork (`git clone`)
2. 브랜드 문서(카피·팔레트·이미지) 받기
3. CSS 변수 값 교체 → 전체 톤 자동 적용
4. HTML 카피 교체 (13섹션 구조는 그대로)
5. 이미지 `images/` 교체
6. Calendly URL · CTA 링크 갱신
7. 브라우저 QA → 배포
