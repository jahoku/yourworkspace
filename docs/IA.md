
# 정보 구조(Information Architecture) 문서

---

## 목차
1. 사이트맵 (Site Map)  
2. 유저 플로우 (User Flow)  
3. 내비게이션 구조 (Navigation Structure)  
4. 페이지 계층 (Page Hierarchy)  
5. 콘텐츠 구성 (Content Organization)  
6. 인터랙션 패턴 (Interaction Patterns)  
7. URL 구조 (URL Structure)  
8. 컴포넌트 계층 (Component Hierarchy)  

---

## 1. 사이트맵 (Site Map)

```plaintext
Topbar
├── AutoPageAI (페이지)
├── ConversAI   (페이지)
├── IdentiVis   (페이지)
└── Contact     (페이지)
Footer
````

---

## 2. 유저 플로우 (User Flow)

1. **첫 방문**

   * `/` 접속 → 자동 재생 히어로 영상(홈)
2. **솔루션 페이지 이동**

   * Topbar → AutoPageAI 클릭 → `/autopageai`
   * Topbar → ConversAI 클릭 → `/conversai`
   * Topbar → IdentiVis 클릭 → `/identivis`
3. **문의 페이지 이동**

   * Topbar → Contact 클릭 → `/contact`
4. **문의 작성**

   * Contact 폼 작성 → 제출 → 모달 확인
5. **(Optional) 로그인/내역 확인**

   * 로그인 후 `/dashboard/inquiries`

---

## 3. 내비게이션 구조 (Navigation Structure)

| 위치     | 항목         | 설명                      |
| ------ | ---------- | ----------------------- |
| Topbar | AutoPageAI | AutoPageAI 전용 랜딩페이지로 이동 |
|        | ConversAI  | ConversAI 전용 랜딩페이지로 이동  |
|        | IdentiVis  | IdentiVis 전용 랜딩페이지로 이동  |
|        | Contact    | 제품 문의 폼 페이지로 이동         |
| Footer | –          | 사이트맵, 연락처, SNS, 저작권 정보  |

* **반응형 고려**

  * 데스크탑: Topbar 메뉴 수평 노출
  * 모바일: 햄버거 메뉴 열기 → 드로어 내 네비게이션

---

## 4. 페이지 계층 (Page Hierarchy)

```
/
├── /autopageai    (AutoPageAI 솔루션 소개)
├── /conversai     (ConversAI 솔루션 소개)
├── /identivis     (IdentiVis 솔루션 소개)
└── /contact       (제품문의 폼)
Footer (모든 페이지 공통)
```

---

## 5. 콘텐츠 구성 (Content Organization)

### 5.1 각 페이지 주요 섹션

| 페이지        | 섹션                                             |
| ---------- | ---------------------------------------------- |
| AutoPageAI | 히어로 비디오 → 슬로건 & 핵심 기능 → 생산성 데이터 → 고객사 → 문의 CTA |
| ConversAI  | 히어로 비디오 → 슬로건 & 핵심 기능 → 생산성 데이터 → 고객사 → 문의 CTA |
| IdentiVis  | 히어로 비디오 → 슬로건 & 핵심 기능 → 생산성 데이터 → 고객사 → 문의 CTA |
| Contact    | 문의 폼 (이름·이메일·회사명·문의내용) → 제출 버튼 → 확인 모달         |

---

## 6. 인터랙션 패턴 (Interaction Patterns)

| 패턴       | 동작 방식                                      |
| -------- | ------------------------------------------ |
| 페이지 전환   | Next.js `Link` 클릭 → CSR/SSR 혼합 방식로 부드럽게 이동 |
| 섹션 애니메이션 | 스크롤 진입 시 fade-in / slide-up 애니메이션          |
| 폼 제출 모달  | 제출 성공 시 `Modal` 컴포넌트로 “감사합니다” 메시지 표시       |
| 반응형 햄버거  | 모바일 너비 이하에서 Topbar가 햄버거 아이콘으로 전환           |

---

## 7. URL 구조 (URL Structure)

| 페이지              | URL                    |
| ---------------- | ---------------------- |
| 홈 (히어로)          | `/`                    |
| AutoPageAI       | `/autopageai`          |
| ConversAI        | `/conversai`           |
| IdentiVis        | `/identivis`           |
| Contact          | `/contact`             |
| \[Optional] 대시보드 | `/dashboard`           |
| 문의 내역            | `/dashboard/inquiries` |

* **SEO 고려**:

  * 명확한 경로명 사용
  * 각 페이지 메타 태그 별도 설정 (`title`, `description`, `og:*`)

---

## 8. 컴포넌트 계층 (Component Hierarchy)

```plaintext
App
├── Layout
│   ├── Topbar
│   │   ├── Logo
│   │   └── NavMenu (AutoPageAI, ConversAI, IdentiVis, Contact)
│   ├── MainContent
│   │   ├── HeroSection (VideoBackground, Title)
│   │   ├── SolutionDetailSection (슬로건, 설명, 이미지)
│   │   ├── ProductivitySection (KpiCard ×n)
│   │   ├── ClientsSection (LogoSlider)
│   │   └── ContactCTA (페이지별 문의 버튼)
│   └── Footer
│       ├── SiteMapLinks
│       ├── ContactInfo
│       └── SNSLinks
├── Page_AutoPageAI (/autopageai)
│   └── HeroSection, FeatureList, DataVisualization, Clients, CTA
├── Page_ConversAI (/conversai)
│   └── HeroSection, FeatureList, DataVisualization, Clients, CTA
├── Page_IdentiVis (/identivis)
│   └── HeroSection, FeatureList, DataVisualization, Clients, CTA
└── Page_Contact (/contact)
    ├── ContactForm (InputFields, SubmitButton)
    └── ConfirmationModal
```

* **컴포넌트 재사용**

  * `HeroSection`, `ProductivitySection`, `ClientsSection`, `CTAButton` 등 범용화
  * shadcn/ui 기본 컴포넌트 활용 (Button, Modal, Input 등)

---