import { GoogleAnalytics } from '@next/third-parties/google'
import { GA_MEASUREMENT_ID } from './gtag';
import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import JsonLd from '@/components/JsonLd';

const inter = Inter({ subsets: ['latin'] });
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'AXC(AI eXperience Center) powered by frameout',
  description: 'AI 경험 센터 - 프레임아웃이 제공하는 차세대 AI 솔루션 체험 공간. 콘텐츠 제작, 고객 응대, 디자인 자동화를 직접 경험해보세요.',
  keywords: 'AXC, AI Experience Center, AI 솔루션, 디지털 혁신, 콘텐츠 자동화, 고객 응대, 디자인 자동화, 프레임아웃',
  metadataBase: new URL('https://www.frameout.co.kr'),
  openGraph: {
    title: 'AXC(AI eXperience Center) powered by frameout',
    description: 'AI 경험 센터 - 프레임아웃이 제공하는 차세대 AI 솔루션 체험 공간. 콘텐츠 제작, 고객 응대, 디자인 자동화를 직접 경험해보세요.',
    url: 'https://www.frameout.co.kr',
    siteName: 'AXC - AI eXperience Center',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/67dd4681b20d47ddbc64c059/6806526d24fb35d1e1ce6907_Open%20graph.png',
        width: 1200,
        height: 630,
        alt: 'AXC(AI eXperience Center) powered by frameout',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AXC(AI eXperience Center) powered by frameout',
    description: 'AI 경험 센터 - 프레임아웃이 제공하는 차세대 AI 솔루션 체험 공간. 콘텐츠 제작, 고객 응대, 디자인 자동화를 직접 경험해보세요.',
    images: [
      'https://cdn.prod.website-files.com/67dd4681b20d47ddbc64c059/6806526d24fb35d1e1ce6907_Open%20graph.png'
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'AXC',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  applicationName: 'AXC - AI eXperience Center',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '프레임아웃',
  url: 'https://www.frameout.co.kr',
  logo: 'https://cdn.prod.website-files.com/67dd4681b20d47ddbc64c059/6806525452232adc62c5e1df_favicon_256.png',
  description: '콘텐츠 제작, 고객 응대, 디자인까지 한 번에 해결하는 AI 솔루션. 프레임아웃과 함께 디지털 혁신을 시작하세요.',
  sameAs: [
    'https://www.linkedin.com/company/frameout',
    'https://twitter.com/frameout_ai'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: '서울',
    addressRegion: '서울특별시',
    addressCountry: 'KR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@frameout.co.kr',
    url: 'https://www.frameout.co.kr/contact'
  },
  // 프레임아웃의 주요 서비스
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI 솔루션',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'AutoPageAI',
          description: '기획부터 디자인, 배포까지 전 과정을 자동화하는 콘텐츠 제작 플랫폼'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'ConversAI',
          description: '고객 응대부터 내부 커뮤니케이션까지 다양한 채널에서 활용 가능한 AI 커뮤니케이션 도구'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'IdentiVis',
          description: '스타일가이드를 기반으로 브랜드 일관성을 유지하며 시각 자산을 자동 생성하는 AI 비주얼 솔루션'
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${dmSans.variable}`}>
        {/* Organization Schema */}
        <JsonLd data={organizationSchema} />
        
        {/* Google Analytics */}
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
