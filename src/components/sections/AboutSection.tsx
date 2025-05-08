'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Brain, Code, Rocket, Shield } from 'lucide-react'

const keywords = [
  {
    title: 'AI 혁신',
    description: '최신 AI 기술을 활용한 솔루션 개발',
    icon: Brain,
  },
  {
    title: '기술 전문성',
    description: '풍부한 개발 경험과 기술력',
    icon: Code,
  },
  {
    title: '빠른 성장',
    description: '지속적인 혁신과 성장 추구',
    icon: Rocket,
  },
  {
    title: '신뢰성',
    description: '안정적인 서비스와 보안',
    icon: Shield,
  },
]

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            프레임아웃 소개
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            프레임아웃은 디지털 에이전시로서 AI 기술을 활용한 혁신적인 솔루션을 제공합니다.
            고객의 비즈니스 성장을 위한 최적의 디지털 전환을 지원합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keywords.map((keyword, index) => (
            <motion.div
              key={keyword.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <keyword.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{keyword.title}</h3>
                  <p className="text-gray-600">{keyword.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 