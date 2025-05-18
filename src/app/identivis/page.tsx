'use client'

import { Bot, Sparkles, ChartBarIcon, Paintbrush, Search, FileEdit, CodeIcon, Smartphone, Rocket, ArrowRightLeft, Users, Laptop, TrendingUp, Clock, Palette } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import ContactDialog from '@/components/contact-dialog'

// Components
const features = [
  {
    title: '캠페인 목표 설정',
    description: '목표에 따라 템플릿, 문안, 디자인을 자동 추천합니다.',
    img: '/illustrations/AP_icon_01.png',
  },
  {
    title: '콘텐츠 생성',
    description: '카피와 이미지 중심의 콘텐츠를 자동 생성 및 수정합니다.',
    img: '/illustrations/AP_icon_02.png',
  },
  {
    title: 'HTML 변환',
    description: '웹 퍼블리싱이 가능한 HTML이 자동 생성됩니다.',
    img: '/illustrations/AP_icon_03.png',
  },
  {
    title: '운영 대응 안내',
    description: '이벤트 교체, 종료 등 운영 관리가 쉬워집니다.',
    img: '/illustrations/AP_icon_04.png',
  },
  {
    title: '다양한 플랫폼 최적화',
    description: 'PC, 모바일, 커머스에 맞춰 유연하게 대응합니다.',
    img: '/illustrations/AP_icon_05.png',
  },
]

const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    let startTime
    let animationFrame

    if (inView) {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * end))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }
      animationFrame = requestAnimationFrame(step)
    }
    
    return () => cancelAnimationFrame(animationFrame)
  }, [inView, end, duration])

  return (
    <div ref={ref} className="inline">
      {prefix}{count}{suffix}
    </div>
  )
}

const metrics = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: '업무시간 단축',
    highlight: '70',
    suffix: '%',
    prefix: '최대 ',
    description: '반복 업무를 자동화해 처리 시간을 크게 줄일 수 있습니다.',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: '콘텐츠 제작 효율',
    highlight: '2',
    suffix: '배 향상',
    prefix: '최대 ',
    description: '기획부터 퍼블리싱까지 전 과정을 AI가 도와줍니다.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: '디자인 리드타임 단축',
    highlight: '70',
    suffix: '%',
    prefix: '평균 ',
    description: '스타일가이드 기반 자동 생성으로 일관성과 속도를 확보합니다.',
  },
]

export default function IdentiVis() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    // Use setTimeout to ensure the video is visible before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error)
          // Fallback for browsers that block autoplay
          alert("비디오 자동 재생에 실패했습니다. 비디오 컨트롤을 사용하여 재생해주세요.")
        })
      }
    }, 100)
  }

  return (
    <main className="pt-16 flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#F9FAFB] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="md:w-5/12 lg:w-5/12 max-w-4xl text-left space-y-4 pl-0 md:pl-8 lg:pl-16 xl:pl-24">
              <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full inline-block">
                AI 디자인 파트너
              </span>
              <motion.h1
                className="text-4xl font-bold text-[#1C2B50] leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                브랜드의 모든 비주얼을<br />AI가 일관되게 만듭니다
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                오브젝트, 일러스트, 캐릭터까지<br />
                복잡한 아이디어도 일관된 디자인으로 실현합니다.
              </motion.p>
            </div>
            
            {/* Illustration */}
            <div className="md:w-7/12 lg:w-7/12 flex justify-end">
              <Image
                src="/illustrations/identivis_visual.png"
                alt="IdentiVis"
                width={460}
                height={400}
                className="w-full max-w-[460px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold text-[#1C2B50] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            디자인, 왜 항상 제각각일까요?
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            IdentiVis는 이런 문제를 정확히 해결합니다.
          </motion.p>

          {/* 문제 카드 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FDF4F4] border border-red-200 rounded-3xl p-10 mb-12 shadow-lg text-left"
          >
            <div className="flex items-start gap-3 mb-5">
              <span className="text-red-500 text-3xl">🚫</span>
              <h3 className="text-xl font-semibold text-red-800">
                디자인, 왜 항상 제각각일까요?
              </h3>
            </div>
            <ul className="text-red-900 text-base space-y-4 leading-relaxed">
              <li>브랜드 가이드를 공유해도 결과물이 다릅니다.</li>
              <li>협업 시 스타일 일관성을 유지하기 어렵습니다.</li>
              <li>반복적인 디자인 작업에 시간이 과도하게 투입됩니다.</li>
              <li>디자인 퀄리티를 맞추기 위해 많은 리소스가 낭비됩니다.</li>
            </ul>
          </motion.div>

          {/* 해결 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#F1FBF5] border border-green-200 rounded-3xl p-10 shadow-lg text-left"
          >
            <div className="flex items-start gap-3 mb-5">
              <span className="text-green-500 text-3xl">✅</span>
              <h3 className="text-xl font-semibold text-green-800">
                IdentiVis는 다릅니다
              </h3>
            </div>
            <ul className="text-green-900 text-base space-y-4 leading-relaxed">
              <li>스타일가이드를 학습한 AI가 일관된 디자인을 자동 생성합니다.</li>
              <li>누구나 브랜드에 맞는 비주얼을 손쉽게 만들 수 있습니다.</li>
              <li>디자이너는 반복 작업 대신 창의적인 업무에 집중할 수 있습니다.</li>
              <li>적은 리소스로 더 빠르고 정교한 결과물을 제공합니다.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section - Replacement */}
      <section className="w-full py-20 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold text-[#1C2B50] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            브랜드 스타일, 이렇게 자동화됩니다
          </motion.h2>

          <div className="space-y-10 text-left">
            {/* Step 1 */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xl font-bold text-[#FF6B00] shrink-0">Step 1</div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">브랜드 자산 학습</p>
                <p className="text-gray-600">
                  스타일가이드, 로고, 컬러, 폰트 등 핵심 요소를 AI가 학습합니다. 필요 시 <strong>LoRA 기반 맞춤 학습</strong>도 지원합니다.
                </p>
              </div>
            </motion.div>

            {/* Step 2 - Replaced with provided content */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-xl font-bold text-[#FF6B00] shrink-0">Step 2</div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">스타일 및 형식 선택</p>
                <p className="text-gray-600">
                  스타일을 고르고, 레퍼런스 이미지와 함께 2D 또는 3D 형식을 선택합니다.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-xl font-bold text-[#FF6B00] shrink-0">Step 3</div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">프롬프트 입력</p>
                <p className="text-gray-600">
                  예) "핑크 배경에 웃고 있는 곰 캐릭터"<br />
                  텍스트만 입력하면 이미지 제작이 시작됩니다.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-xl font-bold text-[#FF6B00] shrink-0">Step 4</div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">AI 자동 생성 + 스타일 적용</p>
                <p className="text-gray-600">
                  입력한 프롬프트에 따라 <strong>컬러, 폰트, 톤앤매너</strong>가 자동 적용되어 브랜드 스타일을 반영한 비주얼이 완성됩니다.
                </p>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-xl font-bold text-[#FF6B00] shrink-0">Step 5</div>
              <div>
                <p className="font-semibold text-gray-800 mb-1">결과물 다운로드 또는 편집</p>
                <p className="text-gray-600">
                  PNG, JPEG, SVG 등 다양한 포맷으로 저장하고, 디자이너가 바로 수정해 활용할 수 있습니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why IdentiVis Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl font-bold text-[#1C2B50] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            Identivis의 주요 기능
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {[
              {
                title: "Stable Diffusion 기반 이미지 생성",
                desc: "고해상도 이미지 생성이 가능한 최신 딥러닝 모델을 활용합니다."
              },
              {
                title: "LoRA 학습으로 브랜드 스타일 최적화",
                desc: "브랜드 자산을 반영한 경량 학습으로 커스터마이징이 가능합니다."
              },
              {
                title: "프롬프트 기반 아이콘·일러스트 자동화",
                desc: "키워드만 입력하면 아이콘, 배경, 일러스트가 자동 생성됩니다."
              },
              {
                title: "스타일가이드 반영률 98% 이상",
                desc: "CI/CD 기준에 따라 색상, 폰트, 톤앤매너를 정밀하게 반영합니다."
              },
              {
                title: "정교한 표현 제어 기술",
                desc: "ControlNet과 Deep Reasoning으로 세부 요소를 세밀하게 조정할 수 있습니다."
              },
              {
                title: "웹 기반 SaaS + 다양한 포맷 지원",
                desc: "PNG, JPEG, SVG 등으로 저장하고 협업 플랫폼에서 바로 활용할 수 있습니다."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-24 bg-[#F9FAFB] text-center">
        <motion.h2
          className="text-3xl font-bold text-[#1C2B50] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          브랜드 스타일이 자동으로 구현되는 순간
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          스타일가이드를 기반으로 어떻게 이미지가 자동 생성되는지<br />
          실제 작동 화면으로 보여드립니다.
        </motion.p>

        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative group cursor-pointer">
            {/* Thumbnail with play button overlay */}
            {!isVideoPlaying && (
              <>
                <Image
                  src="/images/autopageai-thumbnail.jpg"
                  alt="IdentiVis Demo Video Thumbnail"
                  width={1280}
                  height={720}
                  className="rounded-xl border border-slate-200 shadow-md w-full"
                  onClick={handlePlayVideo}
                />
                
                {/* Play button overlay with enhanced styling and centered position */}
                <div 
                  className="absolute inset-0 flex items-center justify-center" 
                  onClick={handlePlayVideo}
                >
                  <div className="bg-orange-500 bg-opacity-90 rounded-full w-20 h-20 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100 group-hover:shadow-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
            
            {/* Video element with poster for better initial load */}
            <video
              ref={videoRef}
              src="/videos/autopageai.mp4"
              poster="/images/autopageai-thumbnail.jpg"
              controls
              preload="metadata"
              playsInline
              className={isVideoPlaying ? "rounded-xl border border-slate-200 shadow-md w-full" : "hidden"}
              id="demoVideo"
            />
          </div>
          <motion.p
            className="text-sm text-muted-foreground mt-4 leading-snug"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ※ 위 영상은 IdentiVis를 활용한 롯데월드 프로젝트 화면 일부를 기반으로 제작되었습니다.
          </motion.p>
        </motion.div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-24 bg-[#1C2B50] text-center text-white">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {/* 프리헤드 */}
          <motion.p
            className="text-md md:text-lg text-orange-300 font-medium mb-2"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            디자인은 반복되고, 리소스는 부족하다면?
          </motion.p>

          {/* 메인 카피 */}
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            지금, 디자인 자동화를 시작해보세요
          </motion.h2>

          {/* 서브카피 */}
          <motion.p
            className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-slate-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            프레임아웃은 디지털 경험의 본질을 탐구하는<br />
            Intelligent eXperience Explorer입니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ContactDialog 
              triggerText="상담 시작하기" 
              buttonClassName="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-medium transition"
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
} 