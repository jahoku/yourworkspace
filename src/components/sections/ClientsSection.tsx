'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const clients = [
  { name: 'IBK기업은행', logo: '/logos/ibk.png' },
  { name: '롯데월드', logo: '/logos/lotte.png' },
  { name: '신한은행', logo: '/logos/shinhan.png' },
  { name: '삼성전자', logo: '/logos/samsung.png' },
  { name: '현대자동차', logo: '/logos/hyundai.png' },
  { name: 'SK텔레콤', logo: '/logos/sk.png' },
]

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            신뢰할 수 있는 파트너사
          </h2>
          <p className="text-lg text-gray-600">
            프레임아웃과 함께하는 주요 기업들
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex justify-center items-center gap-12 md:gap-20"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 w-32 h-16 md:w-40 md:h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 