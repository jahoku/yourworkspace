'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'

export function ProductivitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div 
          className="max-w-[1200px] mx-auto mb-[40px] sm:mb-[50px] lg:mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] text-center leading-tight tracking-[-0.8px] sm:tracking-[-1px] lg:tracking-[-1.2px] mb-4 sm:mb-5 lg:mb-6">
            AI 도입으로 기대할 수 있는 변화
          </h2>
          <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#222222] text-center leading-tight tracking-[0px] px-4">
            솔루션은 업무 처리 방식의 속도와 품질을<br className="hidden sm:block" />
            새롭게 바꾸기 위해 설계되었습니다.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-[1200px] mx-auto">
          {/* Mobile Layout - Single Column */}
          <div className="block lg:hidden space-y-[16px] sm:space-y-[20px]">
            {/* 업무시간 단축 */}
            <motion.div 
              className="bg-[#f2f4fd] rounded-[20px] sm:rounded-[25px] p-[30px] sm:p-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-[40px] sm:mb-[50px]">
                {isInView && (
                  <motion.div
                    className="flex items-end gap-[2px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      최대{' '}
                    </span>
                    <span className="text-[40px] sm:text-[50px] font-bold text-[#000000] leading-[1] font-['DM_Sans']">
                      <CountUp end={70} duration={2.5} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      %
                    </span>
                  </motion.div>
                )}
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-[#000000] leading-[1] mb-[12px] sm:mb-[16px]">
                  업무시간 단축
                </h3>
                <p className="text-[14px] sm:text-[16px] font-normal text-[#666666] leading-[1.4]">
                  반복 업무를 자동화해 처리 시간을<br />
                  크게 줄일 수 있습니다.
                </p>
              </div>
            </motion.div>

            {/* 콘텐츠 제작 효율 */}
            <motion.div 
              className="bg-[#f2f4fd] rounded-[20px] sm:rounded-[25px] p-[30px] sm:p-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-[40px] sm:mb-[50px]">
                {isInView && (
                  <motion.div
                    className="flex items-end gap-[2px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      최대{' '}
                    </span>
                    <span className="text-[40px] sm:text-[50px] font-bold text-[#000000] leading-[1] font-['DM_Sans']">
                      <CountUp start={0} end={2} decimals={0} duration={2.0} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      배 향상
                    </span>
                  </motion.div>
                )}
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-[#000000] leading-[1] mb-[12px] sm:mb-[16px]">
                  콘텐츠 제작 효율
                </h3>
                <p className="text-[14px] sm:text-[16px] font-normal text-[#666666] leading-[1.4]">
                  기획부터 퍼블리싱까지<br />
                  전 과정을 AI가 도와줍니다.
                </p>
              </div>
            </motion.div>

            {/* 디자인 리드타임 단축 */}
            <motion.div 
              className="bg-[#f2f4fd] rounded-[20px] sm:rounded-[25px] p-[30px] sm:p-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mb-[40px] sm:mb-[50px]">
                {isInView && (
                  <motion.div
                    className="flex items-end gap-[2px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      평균{' '}
                    </span>
                    <span className="text-[40px] sm:text-[50px] font-bold text-[#000000] leading-[1] font-['DM_Sans']">
                      <CountUp end={70} duration={2.5} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      %
                    </span>
                  </motion.div>
                )}
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-[#000000] leading-[1] mb-[12px] sm:mb-[16px]">
                  디자인 리드타임 단축
                </h3>
                <p className="text-[14px] sm:text-[16px] font-normal text-[#666666] leading-[1.4]">
                  스타일가이드 기반 자동 생성으로<br />
                  일관성과 속도를 확보합니다.
                </p>
              </div>
            </motion.div>

            {/* 즉각적인 응답 처리 */}
            <motion.div 
              className="bg-[#f2f4fd] rounded-[20px] sm:rounded-[25px] p-[30px] sm:p-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-[40px] sm:mb-[50px]">
                {isInView && (
                  <motion.div
                    className="flex items-end gap-[2px]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <span className="text-[40px] sm:text-[50px] font-bold text-[#000000] leading-[1] font-['DM_Sans']">
                      <CountUp start={0} end={0.5} decimals={1} duration={1.2} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] font-semibold text-[#222222] leading-[1] mb-[8px] sm:mb-[12px]">
                      초 수준
                    </span>
                  </motion.div>
                )}
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-medium text-[#000000] leading-[1] mb-[12px] sm:mb-[16px]">
                  즉각적인 응답 처리
                </h3>
                <p className="text-[14px] sm:text-[16px] font-normal text-[#666666] leading-[1.4]">
                  고객 응대, 문안 작성 등 다양한 상황에<br />
                  실시간 대응 가능합니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Original Grid */}
          <div className="hidden lg:block">
            {/* First Row */}
            <div className="flex gap-[24px] mb-[24px]">
              {/* 업무시간 단축 */}
              <motion.div 
                className="w-[640px] h-[320px] bg-[#f2f4fd] rounded-[32px] p-[50px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="mb-[68px]">
                  {isInView && (
                    <motion.div
                      className="flex items-end gap-[2px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        최대{' '}
                      </span>
                      <span className="text-[60px] font-bold text-[#000000] leading-[60px] tracking-[-1.8px] font-['DM_Sans']">
                        <CountUp end={70} duration={2.5} />
                      </span>
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        %
                      </span>
                    </motion.div>
                  )}
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-[#000000] leading-[24px] tracking-[-0.72px] mb-[20px]">
                    업무시간 단축
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] leading-[23.87px] tracking-[-0.6px]">
                    반복 업무를 자동화해 처리 시간을<br />
                    크게 줄일 수 있습니다.
                  </p>
                </div>
              </motion.div>

              {/* 콘텐츠 제작 효율 */}
              <motion.div 
                className="w-[536px] h-[320px] bg-[#f2f4fd] rounded-[32px] p-[50px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="mb-[68px]">
                  {isInView && (
                    <motion.div
                      className="flex items-end gap-[2px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        최대{' '}
                      </span>
                      <span className="text-[60px] font-bold text-[#000000] leading-[60px] tracking-[-1.8px] font-['DM_Sans']">
                        <CountUp start={0} end={2} decimals={0} duration={2.0} />
                      </span>
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        배 향상
                      </span>
                    </motion.div>
                  )}
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-[#000000] leading-[24px] tracking-[-0.72px] mb-[20px]">
                    콘텐츠 제작 효율
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] leading-[23.87px] tracking-[-0.6px]">
                    기획부터 퍼블리싱까지<br />
                    전 과정을 AI가 도와줍니다.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex gap-[24px]">
              {/* 디자인 리드타임 단축 */}
              <motion.div 
                className="w-[536px] h-[320px] bg-[#f2f4fd] rounded-[32px] p-[50px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="mb-[68px]">
                  {isInView && (
                    <motion.div
                      className="flex items-end gap-[2px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        평균{' '}
                      </span>
                      <span className="text-[60px] font-bold text-[#000000] leading-[60px] tracking-[-1.8px] font-['DM_Sans']">
                        <CountUp end={70} duration={2.5} />
                      </span>
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        %
                      </span>
                    </motion.div>
                  )}
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-[#000000] leading-[24px] tracking-[-0.72px] mb-[20px]">
                    디자인 리드타임 단축
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] leading-[23.87px] tracking-[-0.6px]">
                    스타일가이드 기반 자동 생성으로<br />
                    일관성과 속도를 확보합니다.
                  </p>
                </div>
              </motion.div>

              {/* 즉각적인 응답 처리 */}
              <motion.div 
                className="w-[640px] h-[320px] bg-[#f2f4fd] rounded-[32px] p-[50px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="mb-[68px]">
                  {isInView && (
                    <motion.div
                      className="flex items-end gap-[2px]"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <span className="text-[60px] font-bold text-[#000000] leading-[60px] tracking-[-1.8px] font-['DM_Sans']">
                        <CountUp start={0} end={0.5} decimals={1} duration={1.2} />
                      </span>
                      <span className="text-[24px] font-semibold text-[#222222] leading-[24px] tracking-[-0.72px] mb-[12px]">
                        초 수준
                      </span>
                    </motion.div>
                  )}
                </div>
                <div>
                  <h3 className="text-[24px] font-medium text-[#000000] leading-[24px] tracking-[-0.72px] mb-[20px]">
                    즉각적인 응답 처리
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] leading-[23.87px] tracking-[-0.6px]">
                    고객 응대, 문안 작성 등 다양한 상황에<br />
                    실시간 대응 가능합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-6 leading-snug px-4">
          ※ 본 수치는 내부 시뮬레이션 및 서비스 기획 기준이며,<br />
          IBK기업은행을 포함한 일부 프로젝트에서 적용 중입니다.<br />
          도입 환경에 따라 성과는 달라질 수 있습니다.
        </p>
      </div>
    </section>
  )
} 