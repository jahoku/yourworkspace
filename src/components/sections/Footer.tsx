'use client'

import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white text-[#222222] border-t border-[#eeeeee]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        <div className="space-y-6 sm:space-y-8">
          {/* Main Content Row */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* First Row - Company Name and Insight & News */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 sm:gap-6">
              <h3 className="text-[#222222] text-base font-bold leading-6 font-['Pretendard']">
                (주)프레임아웃
              </h3>
              <div className="md:flex md:justify-end">
                <a
                  href="https://www.frameout.co.kr/insight-news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#222222] hover:text-orange-500 transition-colors font-['Pretendard'] leading-6 underline"
                >
                  Insight & News
                </a>
              </div>
            </div>
            
            {/* Second Row - Description */}
            <div>
              <p className="text-sm sm:text-base text-[#222222] font-normal font-['Pretendard'] leading-[1.4] sm:leading-6 max-w-md">
                IX(Intelligent eXperience)를 중심으로
                <br />
                AI 기술을 활용한 혁신적인 디지털 경험을 제공합니다.
              </p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 sm:gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-1.5 sm:gap-2 md:gap-4 text-xs sm:text-sm text-[#666666] font-light font-['Pretendard'] leading-[1.3] sm:leading-4">
              <span>서울 강남구 언주로 540 코원타워 6층</span>
              <span className="hidden md:inline text-[#cccccc]">|</span>
              <span>02-514-5671</span>
              <span className="hidden md:inline text-[#cccccc]">|</span>
              <a href="mailto:axc@frameout.co.kr" className="inline-flex items-center hover:text-gray-800 transition-colors">
                axc@frameout.co.kr
              </a>
            </div>
            
            <p className="text-xs sm:text-sm text-[#999999] font-light font-['Pretendard'] leading-[1.3] sm:leading-4">
              ⓒ 2025 FRAMEOUT - Where AI Drives UX
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 