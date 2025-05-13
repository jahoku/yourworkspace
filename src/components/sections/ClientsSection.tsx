'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
  { name: 'SK스토아', logo: '/logos/sk-stoa.png' },
  { name: '하나손해보험', logo: '/logos/HanaInsurance_CI.png' },
  { name: '하나카드', logo: '/logos/HanaCard_CI.png' },
  { name: 'BNK경남은행', logo: '/logos/BNK_ci.png' },
  { name: 'EBS', logo: '/logos/EBS_Logo.png' },
  { name: '신한금융투자', logo: '/logos/shinhan_security.png' },
  { name: '포스코플로우', logo: '/logos/posco_flow.png' },
  { name: '우리카드', logo: '/logos/wooricard.png' },
  { name: '에듀윌', logo: '/logos/eduwill.png' },
]

// Split clients into two rows
const firstRow = clients.slice(0, Math.ceil(clients.length / 2))
const secondRow = clients.slice(Math.ceil(clients.length / 2))

// Duplicate logos multiple times for seamless scrolling
const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow, ...firstRow]
const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow, ...secondRow]

// Calculate total width for animation
const calculateTotalWidth = (items: typeof clients) => {
  const itemWidth = 120 // w-[120px]
  const gapWidth = 32 // gap-x-8
  return (items.length * (itemWidth + gapWidth)) / 2
}

export function ClientsSection() {
  const firstRowWidth = calculateTotalWidth(firstRow)
  const secondRowWidth = calculateTotalWidth(secondRow)

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            함께하는 주요 기업들
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            다양한 산업 분야의 기업들이 프레임아웃과 함께 디지털 가치를 만들어가고 있습니다.
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* First row - scroll left */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-x-8"
              animate={{
                x: [0, -firstRowWidth],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedFirstRow.map((client, index) => (
                <div
                  key={`row1-${client.name}-${index}`}
                  className="flex-shrink-0 group relative w-[120px] h-[56px] flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain max-w-full max-h-full filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scroll right */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-x-8"
              animate={{
                x: [-secondRowWidth, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSecondRow.map((client, index) => (
                <div
                  key={`row2-${client.name}-${index}`}
                  className="flex-shrink-0 group relative w-[120px] h-[56px] flex items-center justify-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain max-w-full max-h-full filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 