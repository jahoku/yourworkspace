
# Use Case 문서

---

## 목차
1. Actor Definitions  
2. Comprehensive Actor Definitions  
3. Use Case Scenarios  
4. Detailed Use Case Scenarios  
5. Main Steps and Flow of Events  
6. Alternative Flows and Edge Cases  
7. Preconditions and Postconditions  
8. Business Rules and Constraints  
9. Exception Handling Procedures  
10. User Interface Considerations  
11. Data Requirements and Data Flow  
12. Security and Privacy Considerations  

---

## 1. Actor Definitions  
- **방문자 (Visitor)**  
  - 회원가입/로그인 없이 웹사이트의 모든 공개 페이지 열람 가능  
- **인증 사용자 (Authenticated User)**  
  - 로그인 후 문의 내역을 조회할 수 있는 권한 보유  
- **관리자 (Administrator)**  
  - 문의 내역 및 사용자 관리, 사이트 설정 수정 권한 보유  

---

## 2. Comprehensive Actor Definitions

| Actor             | 역할 및 책임                                              | 권한                                                       |
|-------------------|-----------------------------------------------------------|------------------------------------------------------------|
| 방문자            | 솔루션 페이지 탐색, 문의 폼 작성                         | 공개 페이지 열람, 문의 폼 제출                              |
| 인증 사용자       | 방문자 기능 + 문의 내역 조회                              | `/dashboard/inquiries` 접근, 본인 문의 내역 조회             |
| 관리자            | 사이트 전체 관리                                          | 모든 문의 내역 조회/삭제, 사용자 계정 관리, 설정 변경       |

---

## 3. Use Case Scenarios

1. **UC1: 솔루션 페이지 탐색**  
2. **UC2: 제품 문의 작성 및 제출**  
3. **UC3: 문의 내역 조회 (인증 사용자)**  

---

## 4. Detailed Use Case Scenarios

### UC1: 솔루션 페이지 탐색

- **목적**: 사용자가 AutoPageAI/ConversAI/IdentiVis 솔루션 정보를 확인  
- **Actors**: 방문자, 인증 사용자  
- **시작 조건**: 사용자가 웹사이트에 접속  
- **종료 조건**: 해당 솔루션 페이지의 주요 섹션이 화면에 렌더링  

### UC2: 제품 문의 작성 및 제출

- **목적**: 사용자가 Contact 페이지를 통해 문의사항을 전송  
- **Actors**: 방문자, 인증 사용자  
- **시작 조건**: 사용자가 `/contact` 페이지로 이동  
- **종료 조건**: 문의 폼 제출 후 확인 모달 표시  

### UC3: 문의 내역 조회

- **목적**: 인증 사용자가 본인이 제출한 문의 내역을 확인  
- **Actors**: 인증 사용자  
- **시작 조건**: 사용자가 로그인 후 `/dashboard/inquiries` 접근  
- **종료 조건**: 본인 문의 리스트가 화면에 출력  

---

## 5. Main Steps and Flow of Events

### UC1: 솔루션 페이지 탐색

| 단계 | Actor    | 시스템 동작                                      |
|----|----------|-----------------------------------------------|
| 1  | 방문자   | Topbar 메뉴 클릭 (`/autopageai`, `/conversai`, `/identivis`) |
| 2  | 시스템   | 해당 페이지 로드 및 HeroSection 자동 재생 영상 실행 |
| 3  | 시스템   | 스크롤 진입 시 슬로건·기능·데이터·고객사 섹션 애니메이션 표시 |

### UC2: 제품 문의 작성 및 제출

| 단계 | Actor          | 시스템 동작                                         |
|----|----------------|--------------------------------------------------|
| 1  | 방문자         | Topbar → Contact 클릭 (`/contact`)                  |
| 2  | 시스템         | 문의 폼 렌더링 (이름·이메일·회사명·문의내용 입력 필드) |
| 3  | 방문자         | 필수 입력 항목 작성 후 “제출” 버튼 클릭              |
| 4  | 시스템         | 입력 값 유효성 검사                                  |
| 5  | 시스템         | 서버로 AJAX 요청 전송                               |
| 6  | 시스템         | 성공 시 ConfirmationModal 표시 (“문의가 접수되었습니다”) |

### UC3: 문의 내역 조회

| 단계 | Actor          | 시스템 동작                                          |
|----|----------------|---------------------------------------------------|
| 1  | 인증 사용자     | 로그인 수행                                          |
| 2  | 인증 사용자     | `/dashboard/inquiries` 접근                         |
| 3  | 시스템         | 사용자 인증 확인 후 본인 문의 내역 조회 API 호출     |
| 4  | 시스템         | 문의 리스트 테이블 렌더링                           |

---

## 6. Alternative Flows and Edge Cases

### UC2: 제품 문의 작성 및 제출

- **A1: 필수 입력 항목 누락**  
  - **조건**: 이름/이메일/문의내용 중 하나가 비어 있음  
  - **대응**: 해당 필드 밑에 경고 메시지 표시 (“필수 입력 항목입니다”)  

- **A2: 이메일 형식 오류**  
  - **조건**: 이메일 패턴 미충족  
  - **대응**: “유효한 이메일 주소를 입력하세요” 메시지  

- **A3: 네트워크 오류**  
  - **조건**: AJAX 요청 중 네트워크 실패  
  - **대응**: “네트워크 오류가 발생했습니다. 다시 시도해주세요.” Toast 알림  

### UC3: 문의 내역 조회

- **A1: 비인증 접근**  
  - **조건**: 비로그인 상태로 `/dashboard/inquiries` 접근  
  - **대응**: 로그인 페이지로 리다이렉트  

---

## 7. Preconditions and Postconditions

| Use Case | Preconditions                                          | Postconditions                                |
|----------|--------------------------------------------------------|-----------------------------------------------|
| UC1      | 웹사이트 접속 및 Topbar 노출                           | 해당 솔루션 페이지의 섹션 모두 렌더링 완료    |
| UC2      | `/contact` 페이지 접근                                  | 문의 데이터베이스 저장, 확인 모달 표시       |
| UC3      | 인증 사용자 로그인 완료                                 | 본인 문의 리스트 화면 출력                   |

---

## 8. Business Rules and Constraints

1. **문의 내용 길이 제한**: 최대 1000자  
2. **이메일 형식 검증**: RFC 5322 준수  
3. **Request Rate Limit**: 한 IP당 1분에 5회 이내  
4. **Optional Auth**: 비로그인 사용자는 문의만 가능, 조회 불가  

---

## 9. Exception Handling Procedures

| 예외 상황       | 처리 절차                                                                          |
|--------------|----------------------------------------------------------------------------------|
| 유효성 검사 실패 | 클라이언트 측 자바스크립트에서 메시지 표시 후 제출 차단                                     |
| 서버 오류       | HTTP 5xx 응답 시 “서버 오류” 페이지 또는 Toast 안내 후 폼 재시도 유도                         |
| 타임아웃        | AJAX 10초 타임아웃 설정, “요청이 지연되고 있습니다. 다시 시도해주세요.” 표시              |

---

## 10. User Interface Considerations

- **반응형 디자인**: Tailwind CSS의 `sm`, `md`, `lg` 브레이크포인트 활용  
- **접근성**:  
  - 모든 버튼/입력 필드에 `aria-label` 제공  
  - 키보드 포커스 스타일 커스터마이징  
- **UX**:  
  - 입력 중 실시간 유효성 검사  
  - 제출 버튼 클릭 시 로딩 스피너 표시  

---

## 11. Data Requirements and Data Flow

### 데이터 항목

| 필드        | 타입     | 설명                  |
|-----------|--------|---------------------|
| name      | string | 사용자 이름 (필수)     |
| email     | string | 사용자 이메일 (필수)   |
| company   | string | 회사명 (선택)         |
| message   | text   | 문의 내용 (필수)       |
| timestamp | date   | 문의 접수 시간         |

### 데이터 흐름

1. **폼 제출** → 2. **클라이언트 유효성 검사** → 3. **AJAX 요청** → 4. **서버 API 저장** → 5. **DB에 레코드 생성** → 6. **응답 리턴** → 7. **클라이언트 확인 모달**

---

## 12. Security and Privacy Considerations

- **SSL/TLS**: 전체 사이트 HTTPS 적용  
- **CSRF 방어**: CSRF 토큰 사용  
- **XSS 방지**: 입력 값 HTML 이스케이프 처리  
- **개인정보 저장 정책**:  
  - 이메일 및 이름은 암호화된 형태로 저장  
  - 문의 내용 보관 기간: 2년 (GDPR/KISA 권고)  
- **로그인 세션 관리**:  
  - JWT 사용 시 만료 시간 1시간  
  - Refresh Token 7일  

---

> **끝.**  
