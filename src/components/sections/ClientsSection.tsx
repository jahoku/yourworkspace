'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useCountUp } from '@/hooks/useCountUp'

const clients = [
  { name: 'Samsung', logo: '/logos/Samsung_Logo.png' },
  { name: 'LG U+', logo: '/logos/LG_U+_CI.png' },
  { name: 'SK Telecom', logo: '/logos/sk-telecom.png' },
  { name: 'SK hynix', logo: '/logos/SK_Hynix.png' },
  { name: 'Shinhan Bank', logo: '/logos/Shinhan_Bank_Logo_(ENG).png' },
  { name: 'Hana Bank', logo: '/logos/Hana_Bank_Logo_(eng).png' },
  { name: 'NH NongHyup', logo: '/logos/NACF_(NongHyup)_Logo.png' },
  { name: 'IBK', logo: '/logos/Industrial_Bank_of_Korea_Logo.png' },
  { name: 'Lotte World', logo: '/logos/lotte-value-line-logo.png' },
  { name: '하나손해보험', logo: '/logos/HanaInsurance_CI.png' },
  { name: '하나카드', logo: '/logos/HanaCard_CI.png' },
  { name: 'BNK경남은행', logo: '/logos/BNK_ci.png' },
  { name: 'EBS', logo: '/logos/EBS_Logo.png' },
  { name: '신한금융투자', logo: '/logos/shinhan_security.png' },
  { name: '포스코플로우', logo: '/logos/posco_flow.png' },
  { name: 'SK스토아', logo: '/logos/sk-stoa.png' },
  { name: '에듀윌', logo: '/logos/eduwill.png' },
  { name: '우리카드', logo: '/logos/wooricard.png' },
]

// Split clients into three rows for the design
const firstRow = clients.slice(0, 6)
const secondRow = clients.slice(6, 12)  
const thirdRow = clients.slice(12, 18)

// Duplicate for seamless scrolling
const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow]
const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow]
const duplicatedThirdRow = [...thirdRow, ...thirdRow, ...thirdRow]

function StatCard({ title, number, description, className }: {
  title: string
  number: number
  description: string[]
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
      className={`bg-[#2b2f3c] rounded-[20px] sm:rounded-[25px] lg:rounded-[32px] p-6 sm:p-8 lg:p-10 ${className || ''}`}
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
      <div className="text-[#cccccc] text-[14px] sm:text-[17px] lg:text-[20px] font-normal leading-[1.3] sm:leading-[1.32] lg:leading-[1.35] tracking-[-0.4px] sm:tracking-[-0.5px] lg:tracking-[-0.6px]">
        {description.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </motion.div>
  )
}

export function ClientsSection() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-[160px] pb-12 sm:pb-16 lg:pb-20 px-4 bg-[#1c1c1c]">
      <div className="max-w-[1200px] mx-auto">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 lg:mb-[120px]"
        >
          <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-12 sm:mb-16 lg:mb-[80px] tracking-[-0.8px] sm:tracking-[-0.9px] lg:tracking-[-1.14px] leading-[1.2] lg:leading-[45.35px] max-w-[1200px]">
            프레임아웃은 오늘도,<br />
            새로운 경험의 기준을 고민합니다.
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            <StatCard
              title="Years"
              number={25}
              description={[
                "2000년 설립,",
                "디지털 전략 기반의 긴 호흡"
              ]}
            />
            <StatCard
              title="Projects"
              number={600}
              description={[
                "다양한 산업과 고객을 위한",
                "실질적 수행 경험"
              ]}
              className="sm:col-span-2 lg:col-span-1"
            />
            <StatCard
              title="Awards"
              number={75}
              description={[
                "국내외에서 인정받은",
                "크리에이티브와 기술력"
              ]}
            />
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="w-full h-px bg-white/10 mb-12 sm:mb-16 lg:mb-[120px]" />

        {/* Company Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-white text-[20px] sm:text-[24px] lg:text-[32px] font-bold mb-8 sm:mb-10 lg:mb-[40px] tracking-[-0.6px] sm:tracking-[-0.78px] lg:tracking-[-0.96px] leading-tight">
            함께하는 주요 기업들
          </h3>
          
          <div className="space-y-3 sm:space-y-4 lg:space-y-[36px]">
            {/* First row - scroll right */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-x-[30px] sm:gap-x-[40px] lg:gap-x-[55.2px]"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedFirstRow.map((client, index) => (
                  <div
                    key={`row1-${client.name}-${index}`}
                    className="flex-shrink-0 group relative w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] lg:w-[154px] lg:h-[80px] flex items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={154}
                      height={77}
                      className="object-contain max-w-full max-h-full filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second row - scroll left */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-x-[30px] sm:gap-x-[40px] lg:gap-x-[55.2px]"
                animate={{
                  x: [-1200, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 70,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedSecondRow.map((client, index) => (
                  <div
                    key={`row2-${client.name}-${index}`}
                    className="flex-shrink-0 group relative w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] lg:w-[154px] lg:h-[80px] flex items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={154}
                      height={77}
                      className="object-contain max-w-full max-h-full filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Third row - scroll right */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-x-[30px] sm:gap-x-[40px] lg:gap-x-[55.2px]"
                animate={{
                  x: [0, -1200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 80,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedThirdRow.map((client, index) => (
                  <div
                    key={`row3-${client.name}-${index}`}
                    className="flex-shrink-0 group relative w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] lg:w-[154px] lg:h-[80px] flex items-center justify-center"
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={154}
                      height={77}
                      className="object-contain max-w-full max-h-full filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 