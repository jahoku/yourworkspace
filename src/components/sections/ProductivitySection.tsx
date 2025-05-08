'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, TrendingUp, Users, Zap } from 'lucide-react'

const kpis = [
  {
    title: '업무시간 단축',
    value: '75',
    unit: '%',
    icon: Clock,
    description: 'AI 자동화로 업무 처리 시간 대폭 감소',
  },
  {
    title: '생산성 향상',
    value: '3',
    unit: '배',
    icon: TrendingUp,
    description: '인력 대비 업무 처리량 증가',
  },
  {
    title: '고객 만족도',
    value: '95',
    unit: '%',
    icon: Users,
    description: '24/7 AI 응대 서비스로 고객 만족도 상승',
  },
  {
    title: '응답 속도',
    value: '0.5',
    unit: '초',
    icon: Zap,
    description: 'AI 기반 즉각적인 응답 처리',
  },
]

export function ProductivitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            검증된 성과
          </h2>
          <p className="text-lg text-gray-600">
            프레임아웃 AI 솔루션으로 달성한 주요 성과
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <kpi.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{kpi.title}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {isInView ? kpi.value : '0'}
                      {kpi.unit}
                    </div>
                    <p className="text-sm text-gray-600">{kpi.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 