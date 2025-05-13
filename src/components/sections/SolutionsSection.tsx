'use client'

import { motion } from 'framer-motion'
import { Lightbulb, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const solutions = [
  {
    title: 'AutoPageAI',
    copy: '콘텐츠 운영을 시스템처럼',
    description: '웹 기반 통합 AI Agent 플랫폼을 통해 기획, 카피, 디자인, 배포까지 전 과정을 자동화합니다. 반복적인 콘텐츠 제작에서 벗어나 일관된 운영 체계를 구축할 수 있습니다.',
    image: '/illustrations/autopageai.png',
    features: [
      '콘텐츠 제작 프로세스 자동화',
      '워크플로우 기반 협업 구조',
      '반응률과 전환율을 기반으로 한 템플릿 추천'
    ],
    id: 'autopageai'
  },
  {
    title: 'ConversAI',
    copy: '커뮤니케이션을 설계하는 AI',
    description: '고객 응대부터 콘텐츠 문안 생성까지 다양한 채널에서 활용할 수 있는 AI 커뮤니케이션 도구입니다. 인사정책 Q&A나 설치·A/S 안내 등 내부 커뮤니케이션에도 적용할 수 있습니다.',
    image: '/illustrations/conversai.png',
    features: [
      'LLM 기반 자연어 응답 시스템',
      'UX 문안 및 실시간 문서 생성',
      '음성과 텍스트를 아우르는 커뮤니케이션 시스템'
    ],
    id: 'conversai'
  },
  {
    title: 'IdentiVis',
    copy: '브랜드를 학습한 AI 비주얼 팀',
    description: '스타일가이드를 기반으로 브랜드 일관성을 유지하며 시각 자산을 자동 생성합니다. 다양한 포맷의 이미지 제작이 반복성과 속도를 모두 만족시킬 수 있도록 설계되었습니다.',
    image: '/illustrations/identivis.png',
    features: [
      '브랜드 스타일 학습 및 반영',
      '오브젝트, 일러스트 등 다양한 그래픽 디자인 생성',
      '브랜드 캐릭터도 학습하여 일관된 형태로 확장 가능'
    ],
    id: 'identivis'
  }
]

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function SolutionsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="solutions" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            3가지 솔루션, 하나의 목표
          </h2>
          <p className="text-lg text-muted-foreground text-center mt-2">
            실무 중심의 AI 도구가 반복을 줄이고 전략에 집중할 수 있게 합니다.
          </p>
          <div className="flex flex-col items-center text-center text-base text-gray-600 max-w-md mx-auto mt-4">
            <Lightbulb className="w-6 h-6 text-[#F26222] mb-2" />
            <p className="leading-snug">
              이 도구들은 단순한 자동화가 아니라,<br />
              기업 내 실제 활용성과 협업 확장을 고려해 설계되었습니다.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              variants={variants}
              className="scroll-mt-20"
            >
              <div 
                onClick={() => scrollToSection(solution.id)}
                className="group bg-white rounded-xl shadow-sm p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer h-full"
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="inline-block text-lg font-semibold text-gray-900 group-hover:text-[#F26222] relative">
                  {solution.title}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#F26222] transition-all duration-300 group-hover:w-full" style={{ transitionTimingFunction: 'ease-out' }} />
                </h3>
                <p className="text-base font-medium text-[#F26222] mt-1">{solution.copy}</p>
                <p className="text-base text-gray-700 leading-relaxed mt-3">
                  {solution.description}
                </p>
                <ul className="mt-3 space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 mt-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#F26222] mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 