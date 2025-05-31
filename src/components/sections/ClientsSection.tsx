'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: 'Samsung', logo: '/logos/LOGO_samsung.png' },
  { name: 'LG U+', logo: '/logos/LOGO_LG_U+_CI.png' },
  { name: 'SK Telecom', logo: '/logos/LOGO_sk-telecom.png' },
  { name: 'SK hynix', logo: '/logos/LOGO_sk-hynix.png' },
  { name: 'Shinhan Bank', logo: '/logos/LOGO_Shinhan_Bank.png' },
  { name: 'Hana Bank', logo: '/logos/LOGO_Hana_Bank.png' },
  { name: 'NH NongHyup', logo: '/logos/LOGO_nh.png' },
  { name: 'IBK', logo: '/logos/LOGO_Industrial_Bank_of_Korea.png' },
  { name: 'Lotte World', logo: '/logos/LOGO_lotte.png' },
  { name: '하나손해보험', logo: '/logos/LOGO_HanaInsurance.png' },
  { name: '하나카드', logo: '/logos/LOGO_HanaCard.png' },
  { name: 'BNK경남은행', logo: '/logos/LOGO_bnk.png' },
  { name: 'EBS', logo: '/logos/LOGO_ebs.png' },
  { name: '신한금융투자', logo: '/logos/LOGO_shinhan_security.png' },
  { name: '포스코플로우', logo: '/logos/LOGO_posco_flow.png' },
  { name: 'SK스토아', logo: '/logos/LOGO_sk-stoa.png' },
  { name: '에듀윌', logo: '/logos/LOGO_eduwill.png' },
  { name: '우리카드', logo: '/logos/LOGO_wooricard.png' },
]

// Split clients into three rows for the design
const firstRow = clients.slice(0, 6)
const secondRow = clients.slice(6, 12)  
const thirdRow = clients.slice(12, 18)

// Create more duplicates for seamless scrolling
const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow, ...firstRow]
const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow, ...secondRow]
const duplicatedThirdRow = [...thirdRow, ...thirdRow, ...thirdRow, ...thirdRow]

export function ClientsSection() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-[80px] pb-12 sm:pb-16 lg:pb-20 px-4 bg-[#1c1c1c]">
      <div className="max-w-[1200px] mx-auto">
        {/* Company Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
                  x: [0, -1800],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 90,
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
                  x: [-1800, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 100,
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
                  x: [0, -1800],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 110,
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