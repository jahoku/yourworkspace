// 지원하는 로케일 목록
export const locales = ["ko", "en"];

// 기본 로케일
export const defaultLocale = "en";

// 로컬스토리지 키
const LOCALE_STORAGE_KEY = "app_locale";

// 번역 데이터
export const translations = {
  ko: {
    // 공통 텍스트
    welcome: "환영합니다",
    hello: "안녕하세요",
    change_language: "언어 변경",
    description: "Next.js 다국어 지원 예시입니다",
    current_locale: "현재 언어",

    // 메인 페이지
    frameout_title: "프레임아웃 | AI 기반 디지털 혁신 솔루션",
    frameout_description: "콘텐츠 제작, 고객 응대, 디자인까지 한 번에 해결하는 AI 솔루션. 프레임아웃과 함께 디지털 혁신을 시작하세요.",
    ai_solution: "AI 솔루션",
    digital_innovation: "디지털 혁신",
    content_automation: "콘텐츠 자동화",
    customer_support: "고객 응대",
    design_automation: "디자인 자동화",
    contact_us: "문의하기",
    
    // AutoPageAI 페이지
    autopageai_title: "AutoPageAI | 콘텐츠 제작 자동화 플랫폼",
    autopageai_description: "기획부터 디자인, 배포까지 전 과정을 자동화하는 콘텐츠 제작 플랫폼. 일관된 운영 체계를 구축하세요.",
    content_automation_platform: "콘텐츠 제작 자동화 플랫폼",
    web_based_platform: "웹 기반 플랫폼", 
    planning_automation: "기획 자동화",
    design_auto: "디자인 자동화",
    deployment_automation: "배포 자동화",
    
    // ConversAI 페이지
    conversai_title: "ConversAI | AI 기반 커뮤니케이션 솔루션",
    conversai_description: "고객 응대부터 내부 커뮤니케이션까지 다양한 채널에서 활용 가능한 AI 커뮤니케이션 도구.",
    ai_communication: "AI 커뮤니케이션",
    customer_support_automation: "고객 응대 자동화",
    internal_communication: "내부 커뮤니케이션",
    natural_language_processing: "자연어 처리",
    speech_to_text: "음성 텍스트 변환",
    
    // IdentiVis 페이지
    identivis_title: "IdentiVis | 브랜드 일관성 유지하는 AI 비주얼 팀",
    identivis_description: "스타일가이드를 기반으로 브랜드 일관성을 유지하며 시각 자산을 자동 생성하는 AI 비주얼 솔루션.",
    brand_style: "브랜드 스타일",
    visual_asset_generation: "시각 자산 자동 생성",
    graphic_design: "그래픽 디자인",
    brand_character: "브랜드 캐릭터",
    design_automation_tool: "디자인 자동화",
    
    // 문의하기 페이지
    contact_title: "프레임아웃 | AI 솔루션 문의하기",
    contact_description: "프레임아웃의 AI 솔루션에 대해 궁금하신 점이 있으신가요? 지금 바로 문의해주세요.",
    ai_solution_inquiry: "AI 솔루션 문의",
    frameout_contact: "프레임아웃 연락처",
    consultation_request: "상담 요청",
    service_inquiry: "서비스 문의",
    customer_support_text: "고객 지원",
    
    // 문의 폼
    name: "이름",
    company: "회사명",
    email: "이메일",
    message: "문의사항",
    file_attach: "참고자료가 있다면 첨부해주세요",
    select_file: "파일선택",
    privacy_agreement: "개인정보 수집 및 이용에 동의합니다",
    send_message: "메시지 보내기",
    sending: "전송 중...",
    back: "돌아가기",
    open_possibilities: "앞으로의 가능성을 함께 열어갑니다!",
    
    // 성공/실패 메시지
    success_title: "문의가 성공적으로 전송되었습니다.",
    success_description: "빠른 시일 내에 답변 드리겠습니다.",
    error_title: "문의 전송 실패",
    error_description: "문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.",
  },
  en: {
    // 공통 텍스트
    welcome: "Welcome",
    hello: "Hello",
    change_language: "Change Language",
    description: "Next.js i18n example",
    current_locale: "Current locale",

    // 메인 페이지
    frameout_title: "Frameout | AI-based Digital Innovation Solutions",
    frameout_description: "An AI solution that handles content creation, customer service, and design all at once. Start your digital innovation with Frameout.",
    ai_solution: "AI Solution",
    digital_innovation: "Digital Innovation",
    content_automation: "Content Automation",
    customer_support: "Customer Support",
    design_automation: "Design Automation",
    contact_us: "Contact Us",
    
    // AutoPageAI 페이지
    autopageai_title: "AutoPageAI | Content Creation Automation Platform",
    autopageai_description: "A content creation platform that automates the entire process from planning to design and deployment. Build a consistent operational system.",
    content_automation_platform: "Content Automation Platform",
    web_based_platform: "Web-based Platform", 
    planning_automation: "Planning Automation",
    design_auto: "Design Automation",
    deployment_automation: "Deployment Automation",
    
    // ConversAI 페이지
    conversai_title: "ConversAI | AI-based Communication Solution",
    conversai_description: "An AI communication tool that can be used across various channels from customer service to internal communications.",
    ai_communication: "AI Communication",
    customer_support_automation: "Customer Support Automation",
    internal_communication: "Internal Communication",
    natural_language_processing: "Natural Language Processing",
    speech_to_text: "Speech to Text Conversion",
    
    // IdentiVis 페이지
    identivis_title: "IdentiVis | AI Visual Team Maintaining Brand Consistency",
    identivis_description: "An AI visual solution that automatically generates visual assets while maintaining brand consistency based on style guides.",
    brand_style: "Brand Style",
    visual_asset_generation: "Visual Asset Generation",
    graphic_design: "Graphic Design",
    brand_character: "Brand Character",
    design_automation_tool: "Design Automation",
    
    // 문의하기 페이지
    contact_title: "Frameout | Contact for AI Solutions",
    contact_description: "Do you have any questions about Frameout's AI solutions? Please contact us now.",
    ai_solution_inquiry: "AI Solution Inquiry",
    frameout_contact: "Frameout Contact",
    consultation_request: "Consultation Request",
    service_inquiry: "Service Inquiry",
    customer_support_text: "Customer Support",
    
    // 문의 폼
    name: "Name",
    company: "Company",
    email: "Email",
    message: "Message",
    file_attach: "Attach reference materials if you have any",
    select_file: "Select file",
    privacy_agreement: "I agree to the privacy policy",
    send_message: "Send your message",
    sending: "Sending...",
    back: "Go back",
    open_possibilities: "Opening future possibilities together!",
    
    // 성공/실패 메시지
    success_title: "Your inquiry has been successfully sent.",
    success_description: "We will respond to you as soon as possible.",
    error_title: "Failed to send inquiry",
    error_description: "An error occurred while sending your inquiry. Please try again.",
  },
};

export type Locale = keyof typeof translations;

// 현재 로케일 가져오기 (클라이언트 사이드)
export function getClientLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale as Locale;
  }

  // 로컬스토리지에서 로케일 가져오기
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);

  // 저장된 로케일이 유효한지 확인
  if (storedLocale && locales.includes(storedLocale)) {
    return storedLocale as Locale;
  }

  // 저장된 로케일이 없거나 유효하지 않은 경우 기본 로케일 반환
  return defaultLocale as Locale;
}

// 로케일 설정 (클라이언트 사이드)
export function setClientLocale(locale: Locale): void {
  if (typeof window === "undefined") {
    return;
  }

  // 로컬스토리지에 로케일 저장
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

// 번역 함수
export function translate(
  key: keyof typeof translations.ko,
  locale: Locale = getClientLocale()
): string {
  return translations[locale][key] || key;
}

// 쿠키에서 로케일 가져오기 (서버 사이드)
export function getLocaleFromCookie(cookie: string): Locale {
  const match = cookie.match(new RegExp(`${LOCALE_STORAGE_KEY}=([^;]+)`));
  const locale = match ? match[1] : defaultLocale;
  return (locales.includes(locale) ? locale : defaultLocale) as Locale;
}
