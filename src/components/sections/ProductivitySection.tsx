'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'
import { Clock, TrendingUp, Palette, Zap } from 'lucide-react'

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
    icon: Palette,
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI 도입으로 기대할 수 있는 변화
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground text-center mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          솔루션은 업무 처리 방식의 속도와 품질을 새롭게 바꾸기 위해 설계되었습니다.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* 업무시간 단축 */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Clock className="w-12 h-12 mx-auto mb-4 text-slate-500" />
            <h3 className="text-base font-semibold text-[#1C2B50] mb-1">업무시간 단축</h3>
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="text-3xl font-black text-[#1C2B50] mb-2">
                  최대 <CountUp end={70} duration={2.5} />%
                </p>
              </motion.div>
            )}
            <p className="text-gray-600 mt-2">반복 업무를 자동화해 처리 시간을 크게 줄일 수 있습니다.</p>
          </div>

          {/* 콘텐츠 제작 효율 */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-slate-500" />
            <h3 className="text-base font-semibold text-[#1C2B50] mb-1">콘텐츠 제작 효율</h3>
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-3xl font-black text-[#1C2B50] mb-2">
                  최대 <CountUp start={0} end={2} decimals={0} duration={1.2} />배 향상
                </p>
              </motion.div>
            )}
            <p className="text-gray-600 mt-2">기획부터 퍼블리싱까지 전 과정을 AI가 도와줍니다.</p>
          </div>

          {/* 디자인 리드타임 단축 */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Palette className="w-12 h-12 mx-auto mb-4 text-slate-500" />
            <h3 className="text-base font-semibold text-[#1C2B50] mb-1">디자인 리드타임 단축</h3>
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-3xl font-black text-[#1C2B50] mb-2">
                  평균 <CountUp end={70} duration={2.5} />%
                </p>
              </motion.div>
            )}
            <p className="text-gray-600 mt-2">스타일가이드 기반 자동 생성으로 일관성과 속도를 확보합니다.</p>
          </div>

          {/* 즉각적인 응답 처리 */}
          <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <Zap className="w-12 h-12 mx-auto mb-4 text-slate-500" />
            <h3 className="text-base font-semibold text-[#1C2B50] mb-1">즉각적인 응답 처리</h3>
            {isInView && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-3xl font-black text-[#1C2B50] mb-2">
                  <CountUp start={0} end={0.5} decimals={1} duration={1.2} />초 수준
                </p>
              </motion.div>
            )}
            <p className="text-gray-600 mt-2">고객 응대, 문안 작성 등 다양한 상황에 실시간 대응 가능합니다.</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6 leading-snug">
          ※ 본 수치는 내부 시뮬레이션 및 서비스 기획 기준이며,<br />
          IBK기업은행을 포함한 일부 프로젝트에서 적용 중입니다.<br />
          도입 환경에 따라 성과는 달라질 수 있습니다.
        </p>
      </div>
    </section>
  )
} 