'use client'

import React from 'react'
import { Bot, Sparkles, ChartBarIcon, Paintbrush, Search, FileEdit, CodeIcon, Smartphone, Rocket, ArrowRightLeft, Users, Laptop, TrendingUp, Clock, Palette, XCircle } from 'lucide-react'
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

// IdentiVis Schema
const identiVisSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'IdentiVis',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    availability: 'https://schema.org/OnlineOnly'
  },
  description: '스타일가이드를 기반으로 브랜드 일관성을 유지하며 시각 자산을 자동 생성하는 AI 비주얼 솔루션.',
  url: 'https://www.frameout.co.kr/identivis',
  author: {
    '@type': 'Organization',
    name: '프레임아웃',
    url: 'https://www.frameout.co.kr'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '85',
    bestRating: '5',
    worstRating: '1'
  },
  featureList: '브랜드 스타일, 시각 자산 자동 생성, 그래픽 디자인, 브랜드 캐릭터, 디자인 자동화'
};

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
          // More user-friendly error handling
          setIsVideoPlaying(false)
        })
      }
    }, 100)
  }

  return (
    <React.Fragment>
      <JsonLd data={identiVisSchema} />
      <main className="pt-16 flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section 
          className="relative h-[350px] sm:h-[400px] lg:h-[450px] bg-black flex items-center justify-center"
          style={{
            backgroundImage: 'url(/images/IdentiVis_visual.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
            <motion.h1
              className="text-white mb-4 sm:mb-6 leading-tight"
              style={{ 
                fontFamily: 'Pretendard, sans-serif',
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: 'clamp(-0.84px, -0.03em, -1.44px)',
                lineHeight: 'clamp(33.6px, 1.2em, 57.6px)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block sm:hidden">
                브랜드의 모든 비주얼을<br />
                AI가 일관되게 만듭니다
              </span>
              <span className="hidden sm:block">
                브랜드의 모든 비주얼을 AI가 일관되게 만듭니다
              </span>
            </motion.h1>
            <motion.p
              className="text-white text-center"
              style={{ 
                fontFamily: 'Pretendard, sans-serif',
                fontSize: 'clamp(16px, 3vw, 28px)',
                fontWeight: 400,
                letterSpacing: '0px',
                lineHeight: 'clamp(19.2px, 1.2em, 33.6px)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              오브젝트, 일러스트, 캐릭터까지<br />
              복잡한 아이디어도 일관된 디자인으로 실현합니다.
            </motion.p>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Title */}
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2 
                className="text-[#222222] mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: 'clamp(-0.84px, -0.03em, -1.2px)',
                  lineHeight: 'clamp(33.6px, 1.2em, 48px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
              >
                디자인, 왜 항상 제각각일까요?
              </motion.h2>
              <motion.p 
                className="text-[#222222]"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '0px',
                  lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                IdentiVis는 이런 문제를 정확히 해결합니다.
              </motion.p>
            </div>

            {/* Content - Two columns */}
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-center items-center"
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
              {/* Problem Box */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="bg-[#f5f6f9] rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] w-full max-w-[580px] p-6 sm:p-8 lg:p-10"
                style={{ 
                  minHeight: '200px'
                }}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <XCircle className="w-full h-full text-red-500" />
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      브랜드 가이드를 공유해도 결과물이 다릅니다.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <XCircle className="w-full h-full text-red-500" />
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      협업 시 스타일 일관성을 유지하기 어렵습니다.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <XCircle className="w-full h-full text-red-500" />
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      반복적인 디자인 작업에 시간이 과도하게 투입됩니다.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <XCircle className="w-full h-full text-red-500" />
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      디자인 퀄리티를 맞추기 위해 많은 리소스가 낭비됩니다.
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Solution Box */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="bg-[#f5f6f9] rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] w-full max-w-[580px] p-6 sm:p-8 lg:p-10"
                style={{ 
                  minHeight: '200px'
                }}
              >
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                          <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      스타일가이드를 학습한 AI가 일관된 디자인을 자동 생성합니다.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                          <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      누구나 브랜드에 맞는 비주얼을 손쉽게 만들 수 있습니다.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                          <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      반복 작업 대신 창의적인 업무에 집중할 수 있습니다.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-0.5">
                      <div className="w-full h-full bg-green-500 rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                          <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <span 
                      className="text-[#111111]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(16px, 2.5vw, 20px)',
                        fontWeight: 600,
                        letterSpacing: 'clamp(-0.48px, -0.03em, -0.6px)',
                        lineHeight: 'clamp(19.2px, 1.2em, 24px)'
                      }}
                    >
                      적은 리소스로 더 빠르고 정교한 결과물을 제공합니다.
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section - Replacement */}
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Title */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <motion.h2 
                className="text-[#222222] text-left"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: 'clamp(-0.84px, -0.03em, -1.2px)',
                  lineHeight: 'clamp(33.6px, 1.2em, 48px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
              >
                브랜드 스타일, 이렇게 자동화됩니다
              </motion.h2>
            </div>

            {/* Workflow Steps */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {/* Step 1 */}
              <motion.div 
                className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] bg-[#bbefd3] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/workflow/image-10.png"
                    alt="브랜드 자산 학습"
                    width={550}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-[550px] flex flex-col">
                  {/* Badge */}
                  <div 
                    className="inline-flex items-center justify-center rounded-full self-start mb-6 sm:mb-8 lg:mb-8"
                    style={{
                      backgroundColor: '#e6f6ff',
                      border: '1px solid #bde2f2',
                      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)'
                    }}
                  >
                    <span 
                      className="text-[#4c9dc0]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.42px, -0.03em, -0.48px)',
                        lineHeight: 'clamp(13.3px, 0.95em, 15.2px)'
                      }}
                    >
                      STEP 1
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[#333333] text-left mb-3 sm:mb-4"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      fontWeight: 700,
                      letterSpacing: 'clamp(-0.66px, -0.03em, -0.84px)',
                      lineHeight: 'clamp(26.4px, 1.2em, 33.6px)'
                    }}
                  >
                    브랜드 자산 학습
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[#333333] text-left"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(16px, 3vw, 24px)',
                      fontWeight: 400,
                      letterSpacing: '0px',
                      lineHeight: 'clamp(19.2px, 1.2em, 28.8px)'
                    }}
                  >
                    <span className="block lg:hidden">
                      스타일가이드, 로고, 컬러, 폰트 등 핵심 요소를 AI가 학습합니다. 필요 시 LoRA 기반 맞춤 학습도 지원합니다.
                    </span>
                    <span className="hidden lg:block">
                      스타일가이드, 로고, 컬러, 폰트 등<br />
                      핵심 요소를 AI가 학습합니다.<br />
                      필요 시 LoRA 기반 맞춤 학습도 지원합니다.
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] bg-[#cddcfb] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/workflow/image-11.png"
                    alt="스타일 및 형식 선택"
                    width={550}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-[550px] flex flex-col">
                  {/* Badge */}
                  <div 
                    className="inline-flex items-center justify-center rounded-full self-start mb-6 sm:mb-8 lg:mb-8"
                    style={{
                      backgroundColor: '#e6f6ff',
                      border: '1px solid #bde2f2',
                      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)'
                    }}
                  >
                    <span 
                      className="text-[#4c9dc0]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.42px, -0.03em, -0.48px)',
                        lineHeight: 'clamp(13.3px, 0.95em, 15.2px)'
                      }}
                    >
                      STEP 2
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[#333333] text-left mb-3 sm:mb-4"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      fontWeight: 700,
                      letterSpacing: 'clamp(-0.66px, -0.03em, -0.84px)',
                      lineHeight: 'clamp(26.4px, 1.2em, 33.6px)'
                    }}
                  >
                    스타일 및 형식 선택
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[#333333] text-left"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(16px, 3vw, 24px)',
                      fontWeight: 400,
                      letterSpacing: '0px',
                      lineHeight: 'clamp(19.2px, 1.2em, 28.8px)'
                    }}
                  >
                    <span className="block lg:hidden">
                      스타일을 고르고, 레퍼런스 이미지와 함께 2D 또는 3D 형식을 선택합니다.
                    </span>
                    <span className="hidden lg:block">
                      스타일을 고르고, 레퍼런스 이미지와 함께<br />
                      2D 또는 3D 형식을 선택합니다.
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] bg-[#4b607f] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/workflow/image-12.png"
                    alt="프롬프트 입력"
                    width={550}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-[550px] flex flex-col">
                  {/* Badge */}
                  <div 
                    className="inline-flex items-center justify-center rounded-full self-start mb-6 sm:mb-8 lg:mb-8"
                    style={{
                      backgroundColor: '#e6f6ff',
                      border: '1px solid #bde2f2',
                      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)'
                    }}
                  >
                    <span 
                      className="text-[#4c9dc0]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.42px, -0.03em, -0.48px)',
                        lineHeight: 'clamp(13.3px, 0.95em, 15.2px)'
                      }}
                    >
                      STEP 3
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[#333333] text-left mb-3 sm:mb-4"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      fontWeight: 700,
                      letterSpacing: 'clamp(-0.66px, -0.03em, -0.84px)',
                      lineHeight: 'clamp(26.4px, 1.2em, 33.6px)'
                    }}
                  >
                    프롬프트 입력
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[#333333] text-left"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(16px, 3vw, 24px)',
                      fontWeight: 400,
                      letterSpacing: '0px',
                      lineHeight: 'clamp(19.2px, 1.2em, 28.8px)'
                    }}
                  >
                    예) "핑크 배경에 웃고 있는 곰 캐릭터" 텍스트만 입력하면 이미지 제작이 시작됩니다.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] bg-[#171717] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/workflow/image-13.png"
                    alt="AI 자동 생성 + 스타일 적용"
                    width={550}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-[550px] flex flex-col">
                  {/* Badge */}
                  <div 
                    className="inline-flex items-center justify-center rounded-full self-start mb-6 sm:mb-8 lg:mb-8"
                    style={{
                      backgroundColor: '#e6f6ff',
                      border: '1px solid #bde2f2',
                      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)'
                    }}
                  >
                    <span 
                      className="text-[#4c9dc0]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.42px, -0.03em, -0.48px)',
                        lineHeight: 'clamp(13.3px, 0.95em, 15.2px)'
                      }}
                    >
                      STEP 4
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[#333333] text-left mb-3 sm:mb-4"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      fontWeight: 700,
                      letterSpacing: 'clamp(-0.66px, -0.03em, -0.84px)',
                      lineHeight: 'clamp(26.4px, 1.2em, 33.6px)'
                    }}
                  >
                    AI 자동 생성 + 스타일 적용
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[#333333] text-left"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(16px, 3vw, 24px)',
                      fontWeight: 400,
                      letterSpacing: '0px',
                      lineHeight: 'clamp(19.2px, 1.2em, 28.8px)'
                    }}
                  >
                    <span className="block lg:hidden">
                      입력한 프롬프트에 따라 컬러, 폰트, 톤앤매너가 자동 적용되어 브랜드 스타일을 반영한 비주얼이 완성됩니다.
                    </span>
                    <span className="hidden lg:block">
                      입력한 프롬프트에 따라 컬러, 폰트, 톤앤매너가<br />
                      자동 적용되어브랜드 스타일을 반영한 비주얼이<br />
                      완성됩니다.
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div 
                className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full lg:w-[550px] h-[200px] sm:h-[250px] lg:h-[300px] bg-[#f5f5aa] rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/workflow/image-14.png"
                    alt="결과물 다운로드 또는 편집"
                    width={550}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="w-full lg:w-[550px] flex flex-col">
                  {/* Badge */}
                  <div 
                    className="inline-flex items-center justify-center rounded-full self-start mb-6 sm:mb-8 lg:mb-8"
                    style={{
                      backgroundColor: '#e6f6ff',
                      border: '1px solid #bde2f2',
                      padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 16px)'
                    }}
                  >
                    <span 
                      className="text-[#4c9dc0]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.42px, -0.03em, -0.48px)',
                        lineHeight: 'clamp(13.3px, 0.95em, 15.2px)'
                      }}
                    >
                      STEP 5
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-[#333333] text-left mb-3 sm:mb-4"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(22px, 4vw, 28px)',
                      fontWeight: 700,
                      letterSpacing: 'clamp(-0.66px, -0.03em, -0.84px)',
                      lineHeight: 'clamp(26.4px, 1.2em, 33.6px)'
                    }}
                  >
                    결과물 다운로드 또는 편집
                  </h3>
                  
                  {/* Description */}
                  <p 
                    className="text-[#333333] text-left"
                    style={{
                      fontFamily: 'Pretendard, sans-serif',
                      fontSize: 'clamp(16px, 3vw, 24px)',
                      fontWeight: 400,
                      letterSpacing: '0px',
                      lineHeight: 'clamp(19.2px, 1.2em, 28.8px)'
                    }}
                  >
                    <span className="block lg:hidden">
                      PNG, JPEG, SVG 등 다양한 포맷으로 저장하고, 디자이너가 바로 수정해 활용할 수 있습니다.
                    </span>
                    <span className="hidden lg:block">
                      PNG, JPEG, SVG 등 다양한 포맷으로 저장하고,<br />
                      디자이너가 바로 수정해 활용할 수 있습니다.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why IdentiVis Section */}
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Title */}
            <div className="text-center mb-12 sm:mb-16">
              <motion.h2 
                className="text-[#333333]"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: 'clamp(-0.84px, -0.03em, -1.2px)',
                  lineHeight: 'clamp(33.6px, 1.2em, 48px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6 }}
              >
                IdentiVis의 주요 기능
              </motion.h2>
              <motion.p 
                className="text-[#222222] mt-4 sm:mt-6"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '0px',
                  lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block sm:hidden">
                  ConversAI는 기존 챗봇의 한계를 해결하고, 기업 맥락에 맞는 지능형 대화 경험을 제공합니다.
                </span>
                <span className="hidden sm:block">
                  ConversAI는 기존 챗봇의 한계를 해결하고, 기업 맥락에 맞는 지능형 대화 경험을 제공합니다.
                </span>
              </motion.p>
            </div>

            {/* Content Grid */}
            <motion.div 
              className="space-y-6 sm:space-y-8"
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
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Card 1: Stable Diffusion, 이미지 생성 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[180px] sm:h-[200px] lg:h-[237px] transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-12.png"
                      alt="Stable Diffusion 이미지 생성"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 
                      className="text-[#333333] mb-2 sm:mb-3"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                        lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                      }}
                    >
                      Stable Diffusion, 이미지 생성
                    </h3>
                    <p 
                      className="text-[#666666]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '0px',
                        lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                      }}
                    >
                      고해상도 이미지 생성이 가능한 최신 딥러닝 모델을 활용합니다.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: LoRA 학습, 브랜드 스타일 최적화 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[180px] sm:h-[200px] lg:h-[237px] transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-13.png"
                      alt="LoRA 학습 브랜드 스타일 최적화"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 
                      className="text-[#333333] mb-2 sm:mb-3"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                        lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                      }}
                    >
                      LoRA 학습, 브랜드 스타일 최적화
                    </h3>
                    <p 
                      className="text-[#666666]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '0px',
                        lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                      }}
                    >
                      브랜드 자산을 반영한 경량 학습으로 커스터마이징이 가능합니다.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: 프롬프트, 아이콘·일러스트 자동화 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[180px] sm:h-[200px] lg:h-[237px] transition-all duration-300 ease-in-out hover:shadow-lg group sm:col-span-2 lg:col-span-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-14.png"
                      alt="프롬프트 아이콘 일러스트 자동화"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 
                      className="text-[#333333] mb-2 sm:mb-3"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                        lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                      }}
                    >
                      프롬프트, 아이콘·일러스트 자동화
                    </h3>
                    <p 
                      className="text-[#666666]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '0px',
                        lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                      }}
                    >
                      키워드만 입력하면 아이콘, 배경, 일러스트가 자동 생성됩니다.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Card 4: 스타일가이드 반영률 98% 이상 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[180px] sm:h-[200px] lg:h-[237px] transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-15.png"
                      alt="스타일가이드 반영률"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 
                      className="text-[#333333] mb-2 sm:mb-3"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                        lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                      }}
                    >
                      스타일가이드 반영률 98% 이상
                    </h3>
                    <p 
                      className="text-[#666666]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '0px',
                        lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                      }}
                    >
                      CI/CD 기준에 따라 색상, 폰트, 톤앤매너를 정밀하게 반영합니다.
                    </p>
                  </div>
                </motion.div>

                {/* Card 5: 정교한 표현 제어 기술 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[180px] sm:h-[200px] lg:h-[237px] transition-all duration-300 ease-in-out hover:shadow-lg group"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-16.png"
                      alt="정교한 표현 제어 기술"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 
                      className="text-[#333333] mb-2 sm:mb-3"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                        lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                      }}
                    >
                      정교한 표현 제어 기술
                    </h3>
                    <p 
                      className="text-[#666666]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '0px',
                        lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                      }}
                    >
                      ControlNet과 Deep Reasoning으로 세부 요소를 세밀하게 조정할 수 있습니다.
                    </p>
                  </div>
                </motion.div>

                {/* Card 6: 웹 기반 SaaS + 다양한 포맷 지원 */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="bg-white rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] p-4 sm:p-5 lg:p-6 h-[180px] sm:h-[200px] lg:h-[237px] transition-all duration-300 ease-in-out hover:shadow-lg group sm:col-span-2 lg:col-span-1"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-4 sm:mb-5 lg:mb-6 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                    <Image
                      src="/icons/icon-17.png"
                      alt="웹 기반 SaaS 다양한 포맷 지원"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <h3 
                      className="text-[#333333] mb-2 sm:mb-3"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 700,
                        letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                        lineHeight: 'clamp(21.6px, 1.2em, 28.8px)'
                      }}
                    >
                      웹 기반 SaaS + 다양한 포맷 지원
                    </h3>
                    <p 
                      className="text-[#666666]"
                      style={{
                        fontFamily: 'Pretendard, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 20px)',
                        fontWeight: 400,
                        letterSpacing: '0px',
                        lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                      }}
                    >
                      PNG, JPEG, SVG 등으로 저장하고 협업 플랫폼에서 바로 활용할 수 있습니다.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#222222] text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Title */}
            <div className="mb-12 sm:mb-16">
              <motion.h2
                className="text-white mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: 'clamp(-0.84px, -0.03em, -1.2px)',
                  lineHeight: 'clamp(33.6px, 1.2em, 47.73px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                브랜드 스타일이 자동으로 구현되는 순간
              </motion.h2>
              <motion.p
                className="text-white"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(16px, 3vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: '0px',
                  lineHeight: 'clamp(19.2px, 1.2em, 28.8px)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="block sm:hidden">
                  스타일가이드를 기반으로 어떻게 이미지가 자동 생성되는지 실제 작동 화면으로 보여드립니다.
                </span>
                <span className="hidden sm:block">
                  스타일가이드를 기반으로 어떻게 이미지가 자동 생성되는지<br />
                  실제 작동 화면으로 보여드립니다.
                </span>
              </motion.p>
            </div>

            {/* Video Container */}
            <motion.div
              className="relative mx-auto max-w-[1200px] px-4 sm:px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative group cursor-pointer">
                {/* Video Background Container with responsive dimensions */}
                <div className="w-full h-[240px] sm:h-[400px] lg:h-[680px] relative">
                  {/* Thumbnail with play button overlay */}
                  {!isVideoPlaying && (
                    <>
                      <Image
                        src="/images/identivis-thumbnail.jpg"
                        alt="IdentiVis Demo Video Thumbnail"
                        fill
                        className="object-cover w-full h-full rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
                        onClick={handlePlayVideo}
                      />
                      
                      {/* Play button overlay with responsive sizing */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center" 
                        onClick={handlePlayVideo}
                      >
                        <div 
                          className="bg-[#2d81fd] rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Video element */}
                  <video
                    ref={videoRef}
                    src="https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/identivis-demo.mp4"
                    poster="/images/identivis-thumbnail.jpg"
                    controls
                    preload="metadata"
                    playsInline
                    className={isVideoPlaying ? "rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] w-full h-full object-cover" : "hidden"}
                    id="demoVideo"
                  />
                </div>
              </div>
              
              {/* Caption */}
              <motion.p
                className="text-[#999999] mt-4 sm:mt-6"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 20px)',
                  fontWeight: 400,
                  letterSpacing: '0px',
                  lineHeight: 'clamp(16.8px, 1.2em, 24px)'
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                ※ 위 영상은 IdentiVis를 활용한 롯데월드 프로젝트 화면 일부를 기반으로 제작되었습니다.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Additional CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center max-w-[1200px] mx-auto"
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
                className="text-[#2d81fd] mb-3 sm:mb-4"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: 700,
                  letterSpacing: 'clamp(-0.54px, -0.03em, -0.72px)',
                  lineHeight: 'clamp(25.2px, 1.4em, 33.6px)'
                }}
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
                className="text-[#222222] mb-4 sm:mb-6"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(28px, 5vw, 40px)',
                  fontWeight: 700,
                  letterSpacing: 'clamp(-0.84px, -0.03em, -1.2px)',
                  lineHeight: 'clamp(33.6px, 0.95em, 38px)'
                }}
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
                className="text-[#333333] mb-6 sm:mb-8"
                style={{
                  fontFamily: 'Pretendard, sans-serif',
                  fontSize: 'clamp(16px, 3vw, 24px)',
                  fontWeight: 400,
                  letterSpacing: 'clamp(-0.48px, -0.03em, -0.72px)',
                  lineHeight: 'clamp(22.4px, 1.4em, 33.6px)'
                }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="block sm:hidden">
                  프레임아웃은 디지털 경험의 본질을 탐구하는 Intelligent eXperience Explorer입니다.
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
                  buttonClassName="inline-flex items-center justify-center w-[120px] h-[44px] sm:w-[133px] sm:h-[48px] rounded-[50px] bg-[#222222] hover:bg-[#F26222] text-white transition-all duration-300 font-['Noto_Sans_KR'] font-medium text-[14px] sm:text-[16px] leading-[14px] sm:leading-[16px]"
                  icon={<svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 sm:w-[14px] sm:h-[14px]">
                    <path d="M13 1L1 13M13 1L13 9M13 1L5 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
} 