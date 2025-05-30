이 프로젝트는 [`EasyNext`](https://github.com/easynext/easynext)를 사용해 생성된 [Next.js](https://nextjs.org) 프로젝트입니다.

## Getting Started

개발 서버를 실행합니다.<br/>
환경에 따른 명령어를 사용해주세요.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인할 수 있습니다.

`app/page.tsx` 파일을 수정하여 페이지를 편집할 수 있습니다. 파일을 수정하면 자동으로 페이지가 업데이트됩니다.

## 문의하기 폼 설정

문의하기 기능을 사용하기 위해 `.env` 파일에 SMTP 설정을 추가해야 합니다:

```
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_username
SMTP_PASSWORD=your_password
SMTP_FROM=website@frameout.co.kr
```

`/contact` 경로에서 문의하기 폼을 확인할 수 있으며, nodemailer를 사용하여 이메일로 문의 내용이 전송됩니다. 현재 문의 내용은 `axc@frameout.co.kr`로 전송됩니다.

## 기본 포함 라이브러리

- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Shadcn UI](https://ui.shadcn.com)
- [Lucide Icon](https://lucide.dev)
- [date-fns](https://date-fns.org)
- [react-use](https://github.com/streamich/react-use)
- [es-toolkit](https://github.com/toss/es-toolkit)
- [Zod](https://zod.dev)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com)
- [TS Pattern](https://github.com/gvergnaud/ts-pattern)

## 사용 가능한 명령어

한글버전 사용

```sh
easynext lang ko
```

최신버전으로 업데이트

```sh
npm i -g @easynext/cli@latest
# or
yarn add -g @easynext/cli@latest
# or
pnpm add -g @easynext/cli@latest
```

Supabase 설정

```sh
easynext supabase
```

Next-Auth 설정

```sh
easynext auth

# ID,PW 로그인
easynext auth idpw
# 카카오 로그인
easynext auth kakao
```

유용한 서비스 연동

```sh
# Google Analytics
easynext gtag

# Microsoft Clarity
easynext clarity

# ChannelIO
easynext channelio

# Sentry
easynext sentry

# Google Adsense
easynext adsense
```

## Google Analytics 사용법

이 프로젝트는 Google Analytics(GA4)가 설정되어 있습니다. 측정 ID: `G-TBPTHDME8J`

### 페이지 추적
페이지 추적은 자동으로 설정되어 있습니다.

### 이벤트 추적
이벤트를 추적하려면 다음과 같이 사용하세요:

```javascript
import { event } from './app/gtag';

// 이벤트 추적
event({
  action: '버튼_클릭',
  category: '사용자_상호작용',
  label: '로그인_버튼',
  value: 1
});
```

## Sitemap 사용법

이 프로젝트는 next-sitemap이 설정되어 있습니다.

- `next build` 명령어 실행 후 자동으로 sitemap.xml과 robots.txt 파일이 생성됩니다.
- 설정 파일은 프로젝트 루트의 `next-sitemap.config.js`에 있습니다.
- 생성된 파일은 `public` 디렉토리에 저장됩니다.

추가 설정이 필요한 경우 `next-sitemap.config.js` 파일을 수정하세요.
자세한 내용은 [next-sitemap 공식 문서](https://github.com/iamvishnusankar/next-sitemap)를 참조하세요.

## 비디오 파일 관리

이 프로젝트는 대용량 비디오 파일을 Vercel Blob Storage에 저장하여 성능을 최적화합니다.

### 비디오 업로드

1. 환경 변수 설정:
```bash
# .env.local 파일에 추가
BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
```

2. 비디오 파일 업로드:
```bash
npm run upload-videos
```

### 현재 사용 중인 비디오 URL
- AutoPageAI 데모: `https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/autopageai-demo.mp4`
- IdentiVis 데모: `https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/identivis-demo.mp4`
- ConversAI 데모: `https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/conversai-demo.mp4`
- Hero 배경: `https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/hero-bg.mp4`
