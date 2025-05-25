'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function AboutSection() {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[640px] overflow-hidden bg-black">
      {/* Background Image - frameout-1.png only */}
      <div className="absolute inset-0">
        <Image
          src="/frameout-1.png"
          alt="Frameout Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[744px] text-center"
        >
          {/* Main Title */}
          <motion.div 
            variants={itemVariants}
            className="mb-[30px] sm:mb-[40px] lg:mb-[62px]"
          >
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-tight tracking-[-0.8px] sm:tracking-[-1.1px] lg:tracking-[-1.6px] font-pretendard">
              신뢰할 수 있는 AI 파트너, 프레임아웃
            </h2>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            variants={itemVariants}
          >
            {/* Mobile Text (sm 이하) */}
            <div className="block sm:hidden">
              <p className="text-[14px] font-light text-white leading-[1.15] tracking-[-0.5px] font-pretendard">
                <span className="block mb-1">
                  프레임아웃은 디지털 경험의 본질을 탐구하는
                </span>
                <span className="block mb-1">
                  Xplorer(Experience Explorer)입니다.
                </span>
                <span className="block mb-1">
                  전략, 디자인, 기술을 통합하여 성과 중심의 경험을 설계하며,
                </span>
                <span className="block mb-1">
                  생성형 AI 전문 조직 AXC(AI eXperience Center)를 통해
                </span>
                <span className="block">
                  실제 비즈니스 환경에 적용 가능한 AI 솔루션을 직접 개발합니다.
                </span>
              </p>
            </div>

            {/* Desktop Text (sm 이상) */}
            <div className="hidden sm:block">
              <p className="text-[18px] md:text-[24px] lg:text-[32px] font-light text-white leading-[1.15] tracking-[-0.8px] lg:tracking-[-1.28px] font-pretendard">
                <span className="block mb-1.5 lg:mb-2">
                  프레임아웃은 디지털 경험의 본질을 탐구하는
                </span>
                <span className="block mb-1.5 lg:mb-2">
                  Xplorer(Experience Explorer)입니다.
                </span>
                <span className="block mb-1.5 lg:mb-2">
                  전략, 디자인, 기술을 통합하여 성과 중심의 경험을 설계하며,
                </span>
                <span className="block mb-1.5 lg:mb-2">
                  생성형 AI 전문 조직 AXC(AI eXperience Center)를 통해
                </span>
                <span className="block">
                  실제 비즈니스 환경에 적용 가능한 AI 솔루션을 직접 개발합니다.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 