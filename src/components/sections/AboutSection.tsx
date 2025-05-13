'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

const metrics = [
  {
    value: 25,
    suffix: '+',
    unit: 'Years',
    description: '2000년 설립, 디지털 전략 기반의 긴 호흡',
  },
  {
    value: 600,
    suffix: '+',
    unit: 'Projects',
    description: '다양한 산업과 고객을 위한 실질적 수행 경험',
  },
  {
    value: 75,
    suffix: '+',
    unit: 'Awards',
    description: '국내외에서 인정받은 크리에이티브와 기술력',
  },
]

export function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % metrics.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-[500px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              신뢰할 수 있는 AI 파트너,<br />
              프레임아웃
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              프레임아웃은 디지털 경험의 본질을 탐구하는 Xplorer(Experience Explorer)입니다.
              전략, 디자인, 기술을 통합하여 성과 중심의 경험을 설계하며,
              생성형 AI 전문 조직 AXC(AI eXperience Center)를 통해
              실제 비즈니스 환경에 적용 가능한 AI 솔루션을 직접 개발합니다.
            </p>
            <p className="text-lg font-semibold text-[#1C2B50]">
              프레임아웃은 오늘도, 새로운 경험의 기준을 고민합니다.
            </p>
          </motion.div>

          {/* Right Column - Auto-rotating Card */}
          <div 
            className="w-full max-w-xl mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Card className="h-[280px] hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <CardContent className="p-8 h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center w-full"
                  >
                    <motion.div
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <span className="text-5xl font-extrabold text-[#1C2B50] block">
                          <CountUp
                            end={metrics[currentSlide].value}
                            suffix={metrics[currentSlide].suffix}
                            duration={2}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                        </span>
                        <span className="text-3xl text-gray-600 font-medium block">
                          {metrics[currentSlide].unit}
                        </span>
                      </div>
                      <p className="text-base text-gray-600">
                        {metrics[currentSlide].description}
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 