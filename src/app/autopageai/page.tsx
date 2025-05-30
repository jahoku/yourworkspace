'use client'

import React from 'react'
import { Bot, Sparkles, ChartBarIcon, Paintbrush, Search, FileEdit, CodeIcon, Smartphone, Rocket, ArrowRightLeft, Users, Laptop, TrendingUp, Clock, Palette, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { MessageCircle } from 'lucide-react'
import ContactDialog from '@/components/contact-dialog'
import JsonLd from '@/components/JsonLd'

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

// AutoPageAI Schema
const autoPageAISchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AutoPageAI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    availability: 'https://schema.org/OnlineOnly'
  },
  description: '기획부터 디자인, 배포까지 전 과정을 자동화하는 콘텐츠 제작 플랫폼. 일관된 운영 체계를 구축하세요.',
  url: 'https://www.frameout.co.kr/autopageai',
  author: {
    '@type': 'Organization',
    name: '프레임아웃',
    url: 'https://www.frameout.co.kr'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '120',
    bestRating: '5',
    worstRating: '1'
  },
  featureList: '콘텐츠 자동화, 웹 기반 플랫폼, 기획 자동화, 디자인 자동화, 배포 자동화'
};

export default function AutoPageAI() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    // Use setTimeout to ensure the video is visible before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error)
          // More user-friendly error handling
          setIsVideoPlaying(false)
        })
      }
    }, 100)
  }

  return (
    <React.Fragment>
      <JsonLd data={autoPageAISchema} />
      <main className="pt-16 flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#222222] via-[#333333] to-[#1a1a1a] h-[400px] sm:h-[450px] lg:h-[450px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full opacity-80">
            <Image
              src="/images/AutoPageAI_visual.png"
              alt="AutoPageAI Background"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Hide image on error, fallback to gradient background
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-[28px] sm:text-[36px] lg:text-[48px] font-bold text-white leading-[1.2] tracking-[-0.8px] sm:tracking-[-1.08px] lg:tracking-[-1.44px] mb-6 font-['Pretendard']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block sm:hidden">
                반복되는 콘텐츠 제작,<br />
                이제 AI가 대신합니다
              </span>
              <span className="hidden sm:block">
                반복되는 콘텐츠 제작, 이제 AI가 대신합니다
              </span>
            </motion.h1>
            <motion.p
              className="text-[18px] sm:text-[24px] lg:text-[28px] font-normal text-white leading-[1.3] tracking-[0px] font-['Pretendard']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block sm:hidden">
                기획부터 퍼블리싱까지<br />
                전 과정을 AutoPageAI가<br />
                자동으로 처리합니다.
              </span>
              <span className="hidden sm:block">
                기획부터 퍼블리싱까지 전 과정을 AutoPageAI가 자동으로 처리합니다.
              </span>
            </motion.p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 space-y-8 lg:space-y-10">
            {/* Intro copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 max-w-4xl mx-auto mb-12 sm:mb-16"
            >
              <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] leading-[1.2] tracking-[-0.72px] sm:tracking-[-0.96px] lg:tracking-[-1.2px] font-['Pretendard'] mb-4">
                <span className="block sm:hidden">
                  더 빠르게, 더 완성도 있게<br />
                  콘텐츠 운영의 흐름을<br />
                  AI가 바꿉니다
                </span>
                <span className="hidden sm:block">
                  더 빠르게, 더 완성도 있게<br />
                  콘텐츠 운영의 흐름을 AI가 바꿉니다
                </span>
              </h2>
              <p className="text-[#222222] text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2] font-['Pretendard'] font-normal">
                <span className="block sm:hidden">
                  반복되는 작업은 줄이고,<br />
                  전략과 창의에 집중하세요.<br />
                  AutoPageAI는 성과 높은 패턴을<br />
                  학습하고 브랜드 일관성을 지켜줍니다.
                </span>
                <span className="hidden sm:block">
                  반복되는 작업은 줄이고, 전략과 창의에 집중하세요.<br />
                  AutoPageAI는 성과 높은 패턴을 학습하고 브랜드 일관성을 지켜줍니다.
                </span>
              </p>
            </motion.div>

            {/* 모바일/태블릿 그리드 (lg 미만) */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 sm:gap-6 max-w-4xl mx-auto"
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
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 h-[140px] sm:h-[153px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[18px] sm:text-[22px] lg:text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.66px] lg:tracking-[-0.72px] leading-[1.2] mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] sm:text-[18px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.2]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* 데스크탑용 3x2 레이아웃 (lg 이상) */}
            <motion.div
              className="max-w-[1200px] mx-auto hidden lg:block"
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
              {/* 첫 번째 행 */}
              <div className="flex justify-between gap-6 mb-8">
                {/* 카드 1 - AI 맞춤 콘텐츠 추천 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[24px] p-8 h-[153px] w-[384px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] leading-[28.8px] mb-[13px]">
                    AI 맞춤 콘텐츠 추천
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[24px]">
                    과거 성과 데이터를 분석하여 목적에 맞는<br />
                    템플릿, 문안, 디자인을 제안합니다.
                  </p>
                </motion.div>

                {/* 카드 2 - 브랜드 일관성 자동 적용 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[24px] p-8 h-[153px] w-[384px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] leading-[28.8px] mb-[13px]">
                    브랜드 일관성 자동 적용
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[24px]">
                    브랜드 톤과 스타일을 학습하여 콘텐츠 전반에 일관된 비주얼 가이드를 적용합니다.
                  </p>
                </motion.div>

                {/* 카드 3 - 실시간 경쟁 콘텐츠 분석 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[24px] p-8 h-[153px] w-[384px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] leading-[28.8px] mb-[13px]">
                    실시간 경쟁 콘텐츠 분석
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[24px]">
                    경쟁 콘텐츠를 분석하여 전략 수립에 활용할 수 있는 인사이트를 제공합니다.
                  </p>
                </motion.div>
              </div>

              {/* 두 번째 행 */}
              <div className="flex justify-between gap-6">
                {/* 카드 4 - 카피 및 디자인 자동 생성 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[24px] p-8 h-[153px] w-[384px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] leading-[28.8px] mb-[13px]">
                    카피 및 디자인 자동 생성
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[24px]">
                    기본 문안 작성과 디자인 생성도구를 통해<br />
                    콘텐츠 제작 속도를 높입니다.
                  </p>
                </motion.div>

                {/* 카드 5 - 검수 및 HTML 변환 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[24px] p-8 h-[153px] w-[384px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] leading-[28.8px] mb-[13px]">
                    검수 및 HTML 변환
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[24px]">
                    AI가 1차 검수하고, HTML 변환, 템플릿 관리를 통해 반복 업무를 효율화합니다.
                  </p>
                </motion.div>

                {/* 카드 6 - 멀티 플랫폼 최적화 대응 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-[#f8f8f9] rounded-[24px] p-8 h-[153px] w-[384px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  <h3 className="text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] leading-[28.8px] mb-[13px]">
                    멀티 플랫폼 최적화 대응
                  </h3>
                  <p className="text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[24px]">
                    웹, 모바일, 커머스 채널에 맞춰<br />
                    콘텐츠 리사이징을 지원합니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why AutoPage AI Section */}
        <section className="py-16 sm:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] mb-4 font-['Pretendard'] tracking-[-0.72px] sm:tracking-[-0.96px] lg:tracking-[-1.2px] leading-[1.2] text-center">
                  왜 AutoPageAI인가요?
                </h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[28px] font-normal text-[#333333] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] text-center max-w-4xl mx-auto">
                  <span className="block sm:hidden">
                    자동화 도구는 많지만,<br />
                    흐름까지 연결된 솔루션은<br />
                    찾기 어렵습니다.<br />
                    AutoPageAI는 전략부터<br />
                    유지보수까지, 하나로 이어집니다.
                  </span>
                  <span className="hidden sm:block">
                    자동화 도구는 많지만, 흐름까지 연결된 솔루션은 찾기 어렵습니다.<br />
                    AutoPageAI는 전략부터 유지보수까지, 하나로 이어집니다.
                  </span>
                </p>
              </div>
            </motion.div>
            
            {/* 카드 그리드 - 반응형 레이아웃 */}
            <motion.div
              className="max-w-[1200px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
            >
              {/* 모바일/태블릿: 1열, 데스크탑: 3열 첫 번째 행 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 lg:mb-8">
                {/* 카드 1 - 콘텐츠 제작 속도 향상 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[200px] sm:h-[220px] lg:h-[237px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* 아이콘 영역 */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-1.png"
                      alt="콘텐츠 제작 속도 향상"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* 텍스트 영역 */}
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.2] mb-2 sm:mb-3 lg:mb-[13px]">
                      콘텐츠 제작 속도 향상
                    </h3>
                    <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
                      <span className="block lg:hidden">
                        반복 업무를 자동화해 콘텐츠 제작 시간을 대폭 줄입니다.
                      </span>
                      <span className="hidden lg:block">
                        반복 업무를 자동화해 콘텐츠 제작 시간을<br />
                        대폭 줄입니다.
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* 카드 2 - 전략부터 운영까지 연결 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[200px] sm:h-[220px] lg:h-[237px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* 아이콘 영역 */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-2.png"
                      alt="전략부터 운영까지 연결"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* 텍스트 영역 */}
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.2] mb-2 sm:mb-3 lg:mb-[13px]">
                      전략부터 운영까지 연결
                    </h3>
                    <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
                      <span className="block lg:hidden">
                        경쟁사 분석부터 콘텐츠 운영까지, 하나의 자동화된 흐름으로 연결됩니다.
                      </span>
                      <span className="hidden lg:block">
                        경쟁사 분석부터 콘텐츠 운영까지,<br />
                        하나의 자동화된 흐름으로 연결됩니다.
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* 카드 3 - 협업 효율 향상 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[200px] sm:h-[220px] lg:h-[237px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group sm:col-span-2 lg:col-span-1"
                >
                  {/* 아이콘 영역 */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-3.png"
                      alt="협업 효율 향상"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* 텍스트 영역 */}
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.2] mb-2 sm:mb-3 lg:mb-[13px]">
                      협업 효율 향상
                    </h3>
                    <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
                      <span className="block lg:hidden">
                        팀 간 반복 커뮤니케이션 없이, 더 빠른 결정과 실행이 가능합니다.
                      </span>
                      <span className="hidden lg:block">
                        팀 간 반복 커뮤니케이션 없이,<br />
                        더 빠른 결정과 실행이 가능합니다.
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* 모바일/태블릿: 1열, 데스크탑: 2열 두 번째 행 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* 카드 4 - 멀티플랫폼 대응력 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[200px] sm:h-[220px] lg:h-[237px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* 아이콘 영역 */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-4.png"
                      alt="멀티플랫폼 대응력"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* 텍스트 영역 */}
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.2] mb-2 sm:mb-3 lg:mb-[13px]">
                      멀티플랫폼 대응력
                    </h3>
                    <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
                      <span className="block lg:hidden">
                        웹, 모바일, 커머스 플랫폼에 맞춘 콘텐츠가 자동 퍼블리싱됩니다.
                      </span>
                      <span className="hidden lg:block">
                        웹, 모바일, 커머스 플랫폼에 맞춘 콘텐츠가<br />
                        자동 퍼블리싱됩니다.
                      </span>
                    </p>
                  </div>
                </motion.div>

                {/* 카드 5 - 지속 가능한 성과 향상 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[200px] sm:h-[220px] lg:h-[237px] flex flex-col justify-start transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* 아이콘 영역 */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-5.png"
                      alt="지속 가능한 성과 향상"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* 텍스트 영역 */}
                  <div className="flex-1">
                    <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.2] mb-2 sm:mb-3 lg:mb-[13px]">
                      지속 가능한 성과 향상
                    </h3>
                    <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2]">
                      <span className="block lg:hidden">
                        AI가 성과 높은 콘텐츠 패턴을 학습하고 반영해 예측 가능한 전략이 가능해집니다.
                      </span>
                      <span className="hidden lg:block">
                        AI가 성과 높은 콘텐츠 패턴을 학습하고<br />
                        반영해 예측 가능한 전략이 가능해집니다.
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section - Updated based on Figma */}
        <section id="workflow-impact" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] mb-4 font-['Pretendard'] tracking-[-0.72px] sm:tracking-[-0.96px] lg:tracking-[-1.2px] leading-[1.2] text-center lg:text-left">
                  <span className="block lg:hidden">
                    실무의 흐름을 자동화하면,<br />
                    성과도 달라집니다.
                  </span>
                  <span className="hidden lg:block">
                    실무의 흐름을 자동화하면, 성과도 달라집니다.
                  </span>
                </h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#222222] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] text-center lg:text-left">
                  <span className="block lg:hidden">
                    AutoPageAI는 실무자가 실제로<br />
                    거치는 콘텐츠 제작 과정을<br />
                    자동화합니다.<br />
                    반복되는 작업은 줄이고,<br />
                    전략과 창의에 집중하도록<br />
                    설계되었습니다.
                  </span>
                  <span className="hidden lg:block">
                    AutoPageAI는 실무자가 실제로 거치는 콘텐츠 제작 과정을 자동화합니다.<br />
                    반복되는 작업은 줄이고, 전략과 창의에 집중하도록 설계되었습니다.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Process Steps */}
            <motion.div
              className="max-w-[1200px] mx-auto space-y-8 sm:space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
            >
              {/* Step 1 - 전략 수립 및 방향 설정 */}
              <motion.div
                className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[100px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] order-2 lg:order-1">
                  <div className="relative bg-[#222222] rounded-[16px] sm:rounded-[20px] overflow-hidden w-full h-full">
                    <Image
                      src="/images/workflow/image-1.png"
                      alt="전략 수립 및 방향 설정"
                      width={550}
                      height={300}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/550/300?random=1";
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[550px] order-1 lg:order-2">
                  <div className="mb-4 sm:mb-6">
                    <span className="bg-[#e6f6ff] text-[#4c9dc0] border border-[#bde2f2] rounded-full px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-bold font-['Pretendard'] tracking-[-0.42px] sm:tracking-[-0.48px] leading-[1.1]">
                      STEP 1
                    </span>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.6px] sm:tracking-[-0.72px] lg:tracking-[-0.84px] leading-[1.2] mb-3 sm:mb-4">
                    전략 수립 및 방향 설정
                  </h3>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-4 sm:mb-6">
                    캠페인 정보와 타겟 특성에 따라 콘텐츠 전략 방향을 설정하고, 트렌드와 경쟁사 사례를 참고한 템플릿을 제안합니다.
                  </p>
                  <ul className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#666666] font-['Pretendard'] space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      대상 상품/서비스 및 주요 메시지 입력
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      타겟 특성에 맞는 템플릿 추천
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      경쟁사 콘텐츠 벤치마킹
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 2 - AI 콘텐츠 생성 */}
              <motion.div
                className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[100px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] order-2 lg:order-1">
                  <div className="relative bg-[#4b6080] rounded-[16px] sm:rounded-[20px] overflow-hidden w-full h-full">
                    <Image
                      src="/images/workflow/image-2.png"
                      alt="AI 콘텐츠 생성"
                      width={550}
                      height={300}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/550/300?random=2";
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[550px] order-1 lg:order-2">
                  <div className="mb-4 sm:mb-6">
                    <span className="bg-[#e6f6ff] text-[#4c9dc0] border border-[#bde2f2] rounded-full px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-bold font-['Pretendard'] tracking-[-0.42px] sm:tracking-[-0.48px] leading-[1.1]">
                      STEP 2
                    </span>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.6px] sm:tracking-[-0.72px] lg:tracking-[-0.84px] leading-[1.2] mb-3 sm:mb-4">
                    AI 콘텐츠 생성
                  </h3>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-4 sm:mb-6">
                    설정된 전략에 따라 AI가 브랜드 톤에 맞는 카피와 이미지를 자동 생성합니다. 과거 성과 데이터를 학습하여 최적화된 콘텐츠를 제안합니다.
                  </p>
                  <ul className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#666666] font-['Pretendard'] space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      브랜드 맞춤 카피 생성
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      이미지 및 그래픽 자동 생성
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      템플릿 기반 레이아웃 구성
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 3 - 디자인 최적화 */}
              <motion.div
                className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[100px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] order-2 lg:order-1">
                  <div className="relative bg-[#2d81fd] rounded-[16px] sm:rounded-[20px] overflow-hidden w-full h-full">
                    <Image
                      src="/images/workflow/image-3.png"
                      alt="디자인 최적화"
                      width={550}
                      height={300}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/550/300?random=3";
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[550px] order-1 lg:order-2">
                  <div className="mb-4 sm:mb-6">
                    <span className="bg-[#e6f6ff] text-[#4c9dc0] border border-[#bde2f2] rounded-full px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-bold font-['Pretendard'] tracking-[-0.42px] sm:tracking-[-0.48px] leading-[1.1]">
                      STEP 3
                    </span>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.6px] sm:tracking-[-0.72px] lg:tracking-[-0.84px] leading-[1.2] mb-3 sm:mb-4">
                    디자인 최적화
                  </h3>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-4 sm:mb-6">
                    브랜드 가이드라인에 따라 일관된 비주얼 스타일을 적용하고, 다양한 플랫폼에 최적화된 디자인으로 자동 조정합니다.
                  </p>
                  <ul className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#666666] font-['Pretendard'] space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      브랜드 가이드라인 적용
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      반응형 디자인 자동 생성
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      플랫폼별 사이즈 최적화
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 4 - 검수 및 승인 */}
              <motion.div
                className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[100px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] order-2 lg:order-1">
                  <div className="relative bg-[#cddcfb] rounded-[16px] sm:rounded-[20px] overflow-hidden w-full h-full">
                    <Image
                      src="/images/workflow/image-4.png"
                      alt="검수 및 승인"
                      width={550}
                      height={300}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/550/300?random=4";
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[550px] order-1 lg:order-2">
                  <div className="mb-4 sm:mb-6">
                    <span className="bg-[#e6f6ff] text-[#4c9dc0] border border-[#bde2f2] rounded-full px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-bold font-['Pretendard'] tracking-[-0.42px] sm:tracking-[-0.48px] leading-[1.1]">
                      STEP 4
                    </span>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.6px] sm:tracking-[-0.72px] lg:tracking-[-0.84px] leading-[1.2] mb-3 sm:mb-4">
                    검수 및 승인
                  </h3>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-4 sm:mb-6">
                    AI가 1차 품질 검수를 진행하고, 팀 내 협업 도구를 통해 실시간 피드백과 수정사항을 반영하여 최종 승인을 받습니다.
                  </p>
                  <ul className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#666666] font-['Pretendard'] space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      AI 품질 검수 시스템
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      실시간 협업 및 피드백
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      버전 관리 및 승인 프로세스
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Step 5 - 퍼블리싱 및 운영 */}
              <motion.div
                className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[100px]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] order-2 lg:order-1">
                  <div className="relative bg-[#dce4f5] rounded-[16px] sm:rounded-[20px] overflow-hidden w-full h-full">
                    <Image
                      src="/images/workflow/image-5.png"
                      alt="퍼블리싱 및 운영"
                      width={550}
                      height={300}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://picsum.photos/550/300?random=5";
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[550px] order-1 lg:order-2">
                  <div className="mb-4 sm:mb-6">
                    <span className="bg-[#e6f6ff] text-[#4c9dc0] border border-[#bde2f2] rounded-full px-3 sm:px-4 py-2 text-[14px] sm:text-[16px] font-bold font-['Pretendard'] tracking-[-0.42px] sm:tracking-[-0.48px] leading-[1.1]">
                      STEP 5
                    </span>
                  </div>
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.6px] sm:tracking-[-0.72px] lg:tracking-[-0.84px] leading-[1.2] mb-3 sm:mb-4">
                    퍼블리싱 및 운영
                  </h3>
                  <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-4 sm:mb-6">
                    완성된 콘텐츠를 웹, 모바일, 커머스 플랫폼에 자동 배포하고, 성과 데이터를 수집하여 지속적인 최적화를 진행합니다.
                  </p>
                  <ul className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#666666] font-['Pretendard'] space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      자동 HTML 변환 및 배포
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      멀티 플랫폼 동시 퍼블리싱
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-[#4c9dc0] rounded-full mr-3 flex-shrink-0"></div>
                      성과 분석 및 최적화
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 도입 효과 Section */}
        <section className="py-16 sm:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] mb-4 font-['Pretendard'] tracking-[-0.72px] sm:tracking-[-0.96px] lg:tracking-[-1.2px] leading-[1.2] text-center">
                  도입 효과
                </h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[28px] font-normal text-[#333333] font-['Pretendard'] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] text-center">
                  <span className="block lg:hidden">
                    자동화 프로세스로 콘텐츠 제작 시간을<br />
                    최대 70% 단축하고,<br />
                    브랜드 일관성을 유지하면서<br />
                    효율성을 2배 향상시킬 수 있습니다.
                  </span>
                  <span className="hidden lg:block">
                    자동화 프로세스로 콘텐츠 제작 시간을 최대 70% 단축하고,<br />
                    브랜드 일관성을 유지하면서 효율성을 2배 향상시킬 수 있습니다.
                  </span>
                </p>
              </div>
            </motion.div>

            {/* Statistics Cards */}
            <motion.div
              className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {},
              }}
            >
              {/* Card 1 - 업무시간 단축 */}
              <motion.div
                className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-6 sm:p-8 lg:p-12 h-[240px] sm:h-[260px] lg:h-[300px] flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg sm:col-span-2 lg:col-span-1"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-end mb-4 sm:mb-6">
                    <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#222222] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] mr-1 mb-2 sm:mb-3">
                      최대
                    </span>
                    <span className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#222222] font-['DM Sans'] tracking-[-1.2px] sm:tracking-[-1.5px] lg:tracking-[-1.8px] leading-[1]">
                      <CountUp end={70} duration={2000} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#222222] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] ml-1 mb-2 sm:mb-3">
                      %
                    </span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] mb-3 sm:mb-4">
                    업무시간 단축
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2] flex-1">
                  <span className="block lg:hidden">
                    반복 업무를 자동화해 처리 시간을 크게 줄일 수 있습니다.
                  </span>
                  <span className="hidden lg:block">
                    반복 업무를 자동화해 처리 시간을<br />
                    크게 줄일 수 있습니다.
                  </span>
                </p>
              </motion.div>

              {/* Card 2 - 콘텐츠 제작 효율 */}
              <motion.div
                className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-6 sm:p-8 lg:p-12 h-[240px] sm:h-[260px] lg:h-[300px] flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-end mb-4 sm:mb-6">
                    <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#222222] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] mr-1 mb-2 sm:mb-3">
                      최대
                    </span>
                    <span className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#222222] font-['DM Sans'] tracking-[-1.2px] sm:tracking-[-1.5px] lg:tracking-[-1.8px] leading-[1]">
                      <CountUp end={2} duration={2000} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#222222] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] ml-1 mb-2 sm:mb-3">
                      배 향상
                    </span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] mb-3 sm:mb-4">
                    콘텐츠 제작 효율
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2] flex-1">
                  기획부터 퍼블리싱까지 전 과정을 AI가 도와줍니다.
                </p>
              </motion.div>

              {/* Card 3 - 디자인 리드타임 단축 */}
              <motion.div
                className="bg-white rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-6 sm:p-8 lg:p-12 h-[240px] sm:h-[260px] lg:h-[300px] flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-end mb-4 sm:mb-6">
                    <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#222222] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] mr-1 mb-2 sm:mb-3">
                      평균
                    </span>
                    <span className="text-[40px] sm:text-[50px] lg:text-[60px] font-bold text-[#222222] font-['DM Sans'] tracking-[-1.2px] sm:tracking-[-1.5px] lg:tracking-[-1.8px] leading-[1]">
                      <CountUp end={70} duration={2000} />
                    </span>
                    <span className="text-[16px] sm:text-[20px] lg:text-[24px] font-semibold text-[#222222] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] ml-1 mb-2 sm:mb-3">
                      %
                    </span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-medium text-[#222222] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1] mb-3 sm:mb-4">
                    디자인 리드타임 단축
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#666666] font-['Pretendard'] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2] flex-1">
                  <span className="block lg:hidden">
                    스타일가이드 기반 자동 생성으로 일관성과 속도를 확보합니다.
                  </span>
                  <span className="hidden lg:block">
                    스타일가이드 기반 자동 생성으로 일관성과 속도를 확보합니다.
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#222222] text-center">
          <motion.h2
            className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-white mb-3 sm:mb-4 font-['Pretendard'] tracking-[-0.72px] sm:tracking-[-0.96px] lg:tracking-[-1.2px] leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="block lg:hidden">
              AutoPageAI,<br />
              실제로 이렇게 작동합니다
            </span>
            <span className="hidden lg:block">
              AutoPageAI, 실제로 이렇게 작동합니다
            </span>
          </motion.h2>
          <motion.p
            className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-white mb-6 sm:mb-8 font-['Pretendard'] tracking-[0px] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="block lg:hidden">
              실제 기업 프로젝트에서 활용된<br />
              AutoPageAI의 자동화 흐름을<br />
              영상으로 만나보세요.<br />
              누구나 실무에서 바로 활용할 수<br />
              있도록 설계되었습니다.
            </span>
            <span className="hidden lg:block">
              실제 기업 프로젝트에서 활용된 AutoPageAI의 자동화 흐름을 영상으로 만나보세요.<br />
              누구나 실무에서 바로 활용할 수 있도록 설계되었습니다.
            </span>
          </motion.p>

          <motion.div
            className="relative mx-auto max-w-[1200px] px-4 sm:px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative group cursor-pointer">
              {/* Video Container with exact Figma dimensions */}
              <div className="w-full h-[340px] sm:h-[480px] lg:h-[680px] relative">
                {/* Thumbnail with play button overlay */}
                {!isVideoPlaying && (
                  <>
                    <Image
                      src="/images/autopageai-thumbnail.jpg"
                      alt="AutoPageAI Demo Video Thumbnail"
                      fill
                      className="rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] border border-slate-200 shadow-md object-cover"
                      onClick={handlePlayVideo}
                    />
                    
                    {/* Play button overlay centered */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center" 
                      onClick={handlePlayVideo}
                    >
                      <div className="bg-[#2d81fd] bg-opacity-90 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-100 group-hover:shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Video element with poster for better initial load */}
                <video
                  ref={videoRef}
                  src="https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/autopageai-demo.mp4"
                  poster="/images/autopageai-thumbnail.jpg"
                  controls
                  preload="metadata"
                  playsInline
                  className={isVideoPlaying ? "rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] border border-slate-200 shadow-md w-full h-full object-cover" : "hidden"}
                  id="demoVideo"
                />
              </div>
            </div>
            <motion.p
              className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal text-[#999999] font-['Pretendard'] tracking-[0px] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mt-3 sm:mt-4 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="block sm:hidden">
                ※ 위 영상은 AutoPageAI를 활용한<br />
                IBK기업은행 프로젝트 화면 일부를<br />
                기반으로 제작되었습니다.
              </span>
              <span className="hidden sm:block">
                ※ 위 영상은 AutoPageAI를 활용한 IBK기업은행 프로젝트 화면 일부를 기반으로 제작되었습니다.
              </span>
            </motion.p>
          </motion.div>
        </section>

        {/* Additional CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
          <motion.div
            className="container mx-auto px-4 sm:px-6"
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
              className="text-[18px] sm:text-[20px] lg:text-[24px] font-bold text-[#2d81fd] font-['Pretendard'] tracking-[-0.54px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.3] sm:leading-[1.25] lg:leading-[1.2] mb-4 sm:mb-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="block sm:hidden">
                더 적은 인원으로,<br />
                더 많은 일을 할 수 있다면?
              </span>
              <span className="hidden sm:block">
                더 적은 인원으로, 더 많은 일을 할 수 있다면?
              </span>
            </motion.p>

            {/* 메인 카피 */}
            <motion.h2
              className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] font-['Pretendard'] tracking-[-0.72px] sm:tracking-[-0.96px] lg:tracking-[-1.2px] leading-[1.2] mb-6 sm:mb-8 lg:mb-10"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="block sm:hidden">
                지금, 콘텐츠 자동화를<br />
                시작해보세요
              </span>
              <span className="hidden sm:block">
                지금, 콘텐츠 자동화를 시작해보세요
              </span>
            </motion.h2>

            {/* 서브카피 */}
            <motion.p
              className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#333333] font-['Pretendard'] tracking-[-0.48px] sm:tracking-[-0.6px] lg:tracking-[-0.72px] leading-[1.4] sm:leading-[1.3] lg:leading-[1.2] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="block sm:hidden">
                프레임아웃은 디지털 경험의<br />
                본질을 탐구하는<br />
                Intelligent eXperience Explorer입니다.
              </span>
              <span className="hidden sm:block">
                프레임아웃은 디지털 경험의 본질을 탐구하는<br />
                Intelligent eXperience Explorer입니다.
              </span>
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
                triggerText="문의하기" 
                buttonClassName="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 h-10 sm:h-12 rounded-[50px] bg-[#222222] hover:bg-[#F26222] text-white text-[14px] sm:text-[16px] font-medium font-['Noto Sans KR'] transition-all duration-300"
                icon={<ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 ml-1.5 sm:ml-2" />}
              />
            </motion.div>
          </motion.div>
        </section>
      </main>
    </React.Fragment>
  )
} 