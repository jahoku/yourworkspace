'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, MessageSquare, Eye } from 'lucide-react'

const solutions = [
  {
    title: 'AutoPageAI',
    description: 'AI 기반 웹페이지 자동 생성 솔루션으로 콘텐츠 제작 시간을 획기적으로 단축하세요.',
    icon: FileText,
  },
  {
    title: 'ConversAI',
    description: '지능형 챗봇으로 고객 응대를 자동화하고 24/7 고객 서비스를 구현하세요.',
    icon: MessageSquare,
  },
  {
    title: 'IdentiVis',
    description: '컴퓨터 비전 기술로 이미지 분석과 객체 인식을 통해 업무 효율을 높이세요.',
    icon: Eye,
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            프레임아웃 AI 솔루션
          </h2>
          <p className="text-lg text-gray-600">
            비즈니스의 디지털 혁신을 위한 최적의 AI 솔루션을 만나보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 