'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ContactDialog from '@/components/contact-dialog'

export function ContactSection() {
  return (
    <section className="py-[80px] sm:py-[100px] lg:py-[120px] px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-[1200px] mx-auto space-y-6 sm:space-y-7 lg:space-y-8"
        >
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] leading-tight tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.2px]" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
            지금 바로 시작하세요
          </h2>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-medium text-[#222222] leading-[1.4] sm:leading-[1.35] lg:leading-[1.3] tracking-[-0.4px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] px-4" style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}>
            생성형 AI와 디지털 경험의 가능성을 함께 설계해보세요.
            <br />
            전문 컨설턴트가 가장 적합한 방향을 제안해드립니다.
          </p>
          <div className="flex justify-center mt-6 sm:mt-7 lg:mt-8">
            <ContactDialog 
              triggerText="문의하기" 
              buttonClassName="inline-flex items-center justify-center px-4 sm:px-5 py-3 sm:py-4 h-10 sm:h-12 rounded-[50px] bg-[#222222] hover:bg-[#F26222] text-white text-sm sm:text-base font-medium transition-all duration-300" 
              icon={<ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1.5 sm:ml-2" />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 