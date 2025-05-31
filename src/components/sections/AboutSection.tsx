'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCountUp } from '@/hooks/useCountUp'

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

function StatCard({ title, number, className }: {
  title: string
  number: number
  className?: string
}) {
  const { count, ref } = useCountUp({ target: number, duration: 2500 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-[#2b2f3c]/80 backdrop-blur-sm rounded-[20px] sm:rounded-[25px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 ${className || ''}`}
    >
      <div className="mb-6 sm:mb-7 lg:mb-8">
        <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[28px] font-normal mb-2 sm:mb-2.5 lg:mb-3 tracking-[-0.6px] sm:tracking-[-0.72px] lg:tracking-[-0.84px] leading-tight">
          {title}
        </h3>
        <div className="flex items-baseline">
          <span className="text-white text-[36px] sm:text-[52px] lg:text-[68px] font-bold tracking-[-1.2px] sm:tracking-[-1.6px] lg:tracking-[-2.04px] leading-[1] font-dm-sans">
            {count}
          </span>
          <span className="text-white text-[18px] sm:text-[25px] lg:text-[32px] font-semibold ml-1 sm:ml-1.5 lg:ml-2 tracking-[-0.54px] sm:tracking-[-0.75px] lg:tracking-[-0.96px] leading-[1]">
            +
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
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

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Text Content Container */}
        <div className="flex-1 flex items-center justify-center px-2 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[360px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1200px] text-center"
          >
            {/* Main Title */}
            <motion.div 
              variants={itemVariants}
              className="mb-4 sm:mb-5 lg:mb-6"
            >
              <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-semibold text-white leading-tight tracking-[-0.8px] sm:tracking-[-1.1px] lg:tracking-[-1.6px] font-pretendard">
                Creating AI driven digital experience, frameout
              </h2>
            </motion.div>
            
            {/* Description */}
            <motion.div 
              variants={itemVariants}
            >
              {/* Mobile Text (sm 이하) */}
              <div className="block sm:hidden">
                <p className="text-[15px] font-normal text-white leading-[1.5] tracking-[-0.45px] font-pretendard max-w-[340px] mx-auto">
                  <span className="block mb-2">
                    프레임아웃은 디지털 경험의 본질을 탐구하는 Xplorer(Experience Explorer)로 구성된 혁신 기업입니다.
                  </span>
                  <span className="block mb-2">
                    IX(Intelligent eXperience)를 중심으로 AI 기술을 활용한 혁신적인 디지털 경험을 제공합니다.
                  </span>
                  <span className="block">
                    내부 연구 조직인 AXC(AI eXperience Center)를 통해 Generative AI와 AI 오케스트레이션을 활용하여 자체 개발한 생산성을 극대화하는 솔루션을 적용합니다.
                  </span>
                </p>
              </div>

              {/* Desktop Text (sm 이상) */}
              <div className="hidden sm:block">
                <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-white leading-tight tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] font-pretendard">
                  <span className="block mb-1.5 lg:mb-2">
                    프레임아웃은 디지털 경험의 본질을 탐구하는 Xplorer(Experience Explorer)로 구성된 혁신 기업입니다.
                  </span>
                  <span className="block mb-1.5 lg:mb-2">
                    IX(Intelligent eXperience)를 중심으로 AI 기술을 활용한 혁신적인 디지털 경험을 제공합니다.
                  </span>
                  <span className="block">
                    내부 연구 조직인 AXC(AI eXperience Center)를 통해 Generative AI와 AI 오케스트레이션을 활용하여<br />
                    자체 개발한 생산성을 극대화하는 솔루션을 적용합니다.
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section - Over Background Image */}
        <div className="px-4 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-4 sm:mb-5 lg:mb-6 tracking-[-0.8px] sm:tracking-[-0.9px] lg:tracking-[-1.14px] leading-[1.2] lg:leading-[45.35px] max-w-[1200px]">
                프레임아웃은 오늘도,<br />
                새로운 경험의 기준을 고민합니다.
              </h2>
              
              <p className="text-white text-[16px] sm:text-[20px] lg:text-[24px] font-normal leading-tight tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] font-pretendard mb-12 sm:mb-16 lg:mb-[80px] max-w-[1200px]">
                2000년 설립이후, 국내외 다양한 Award에서 최고의 평가를 받으며 다양한 산업군의 선도기업들과 디지털 경험의 새로운 가능성을 만들어왔습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                <StatCard
                  title="Years"
                  number={25}
                />
                <StatCard
                  title="Projects"
                  number={600}
                  className="sm:col-span-2 lg:col-span-1"
                />
                <StatCard
                  title="Awards"
                  number={75}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 