import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '프레임아웃 - AI 기반 디지털 혁신 솔루션',
  description: 'AutoPageAI, ConversAI, IdentiVis를 통해 비즈니스의 디지털 혁신을 실현하세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
