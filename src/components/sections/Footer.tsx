'use client'

import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0C111D] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">(주)프레임아웃</h3>
            <p className="text-sm text-white/70 mb-4">
              IX(Intelligent eXperience)를 중심으로
              <br />
              AI 기술을 활용한 혁신적인 디지털 경험을 제공합니다.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:axc@frameout.co.kr" className="text-sm hover:text-gray-300 transition-colors">
                axc@frameout.co.kr
              </a>
            </div>
          </div>

          {/* Insight & News */}
          <div className="text-left md:text-right md:flex md:flex-col md:items-end space-y-4">
            <a
              href="https://www.frameout.co.kr/insight-news"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Insight & News
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-xs text-white/60 text-center md:text-left">
              서울 강남구 언주로 540 코원타워 6층 | 02-514-5671
            </p>
            <div>
              <p className="text-xs text-white/60 text-center md:text-right">
                ⓒ 2025 FRAMEOUT - Where AI Drives UX
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 