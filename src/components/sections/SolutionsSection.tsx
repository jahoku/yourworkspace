'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

const solutions = [
  {
    title: 'AutoPageAI',
    copy: '콘텐츠 운영을 시스템처럼',
    description: '웹 기반 통합 AI Agent 플랫폼을 통해\n기획, 카피, 디자인, 배포까지 전 과정을 자동화합니다.\n반복적인 콘텐츠 제작에서 벗어나 일관된 운영 체계를\n구축할 수 있습니다.',
    detailImage: '/img/main_image1.png',
    features: [
      '콘텐츠 제작 프로세스 자동화',
      '워크플로우 기반 협업 구조',
      '반응률과 전환율을 기반으로 한 템플릿 추천'
    ],
    gradient: 'from-[#640355] to-[#1b1e29]',
    logoImage: '/img/autopageai_logo.png',
    id: 'autopageai'
  },
  {
    title: 'ConversAI',
    copy: '커뮤니케이션을 설계하는 AI',
    description: '고객 응대부터 콘텐츠 문안 생성까지 다양한 채널에서\n활용할 수 있는 AI 커뮤니케이션 도구입니다.\n인사정책 Q&A나 설치·A/S 안내 등 내부 커뮤니케이션에도\n적용할 수 있습니다.',
    detailImage: '/img/main_image2.png',
    features: [
      'LLM 기반 자연어 응답 시스템',
      'UX 문안 및 실시간 문서 생성',
      '음성과 텍스트를 아우르는 커뮤니케이션 시스템'
    ],
    gradient: 'from-[#034a7a] to-[#18212b]',
    logoImage: '/img/conversai_logo.png',
    id: 'conversai'
  },
  {
    title: 'IdentiVis',
    copy: '브랜드를 학습한 AI 비주얼 팀',
    description: '스타일가이드를 기반으로 브랜드 일관성을 유지하며\n시각 자산을 자동 생성합니다. 다양한 포맷의 이미지 제작이\n반복성과 속도를 모두 만족시킬 수 있도록 설계되었습니다.',
    detailImage: '/img/main_image3.png',
    features: [
      '브랜드 스타일 학습 및 반영',
      '오브젝트, 일러스트 등 다양한 그래픽 디자인 생성',
      '브랜드 캐릭터도 학습하여 일관된 형태로 확장 가능'
    ],
    gradient: 'from-[#27377e] to-[#19202b]',
    logoImage: '/img/identivis_logo.png',
    id: 'identivis'
  }
]

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

const detailVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-gray-50">
      {/* 상단 섹션 - 간단한 카드들 */}
      {/* 
      <div className="pt-[100px] sm:pt-[130px] lg:pt-[160px] pb-[80px] sm:pb-[100px] lg:pb-[120px] px-4">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <div className="flex flex-col justify-center mb-[40px] sm:mb-[50px] lg:mb-[60px]">
              <motion.h2 
                variants={itemVariants}
                className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] mb-[16px] sm:mb-[20px] lg:mb-[24px] leading-tight tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.2px] font-pretendard"
              >
                3가지 솔루션, 하나의 목표
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#222222] leading-tight tracking-[0px] font-pretendard px-4"
              >
                솔루션은 업무 처리 방식의 속도와 품질을 새롭게 바꾸기 위해 설계되었습니다.
              </motion.p>
            </div>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] lg:gap-[41px] max-w-[1200px] mx-auto"
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  variants={itemVariants}
                  className={`bg-gradient-to-b ${solution.gradient} rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] h-[160px] sm:h-[180px] lg:h-[200px] flex flex-col justify-center items-center cursor-pointer group hover:scale-105 transition-transform duration-300 ${
                    index === 2 && 'sm:col-span-2 lg:col-span-1'
                  }`}
                >
                  <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[60px] lg:h-[60px] mb-[8px] sm:mb-[10px] lg:mb-[12px] flex items-center justify-center">
                    <Image
                      src={solution.logoImage}
                      alt={`${solution.title} logo`}
                      width={60}
                      height={60}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-white leading-tight tracking-[-0.5px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] text-center font-pretendard">
                    {solution.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      */}

      {/* 하단 섹션 - 상세 설명 */}
      <div className="bg-[#1c1c1c] py-[80px] sm:py-[120px] lg:py-[160px] px-4">
        <div className="max-w-[1200px] mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row items-center ${
                index === solutions.length - 1 ? '' : 'mb-[80px] sm:mb-[120px] lg:mb-[160px]'
              } ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* 텍스트 섹션 */}
              <motion.div 
                variants={detailVariants}
                className="w-full lg:w-[460px] flex-shrink-0 mb-8 lg:mb-0"
              >
                {/* 솔루션명 */}
                <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#3fa8ff] mb-[16px] sm:mb-[18px] lg:mb-[20px] leading-tight tracking-[-0.5px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] font-pretendard">
                  {solution.title}
                </h3>
                {/* 큰 제목 */}
                <h4 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-white mb-[18px] sm:mb-[20px] lg:mb-[24px] leading-tight tracking-[-0.8px] sm:tracking-[-0.9px] lg:tracking-[-1.08px] font-pretendard">
                  {solution.copy}
                </h4>
                {/* 설명글 */}
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#cccccc] mb-[18px] sm:mb-[20px] lg:mb-[24px] leading-[1.4] sm:leading-[1.35] lg:leading-[1.3] tracking-[-0.4px] sm:tracking-[-0.5px] lg:tracking-[-0.6px] whitespace-pre-line font-pretendard">
                  {solution.description}
                </p>
                
                {/* 기능 리스트 */}
                <ul className="space-y-[5px] sm:space-y-[6px] lg:space-y-[7px]">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
                      className="flex items-start gap-[8px] sm:gap-[9px] lg:gap-[10px]"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-[16px] sm:text-[18px] lg:text-[20px] text-white font-medium leading-[1.4] sm:leading-[1.35] lg:leading-[1.3] tracking-[-0.4px] sm:tracking-[-0.5px] lg:tracking-[-0.6px] font-pretendard">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* 간격 */}
              <div className="w-full lg:w-[60px] xl:w-[100px] flex-shrink-0"></div>

              {/* 이미지 섹션 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 1 ? -50 : 50 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
                className="w-full lg:w-[640px] flex-shrink-0"
              >
                <div className="bg-[#2b2f3c] rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] h-[250px] sm:h-[350px] lg:h-[440px] flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={solution.detailImage}
                      alt={solution.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 