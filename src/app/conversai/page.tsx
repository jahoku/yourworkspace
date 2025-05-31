'use client'

import React from 'react'
import { Bot, Sparkles, ChartBarIcon, Paintbrush, Search, FileEdit, CodeIcon, Smartphone, Rocket, ArrowRightLeft, Users, Laptop, TrendingUp, Clock, Palette, XCircle, AlertTriangle, Ban, ListX, Phone, Shield, Database, RefreshCw, GitBranch, Globe, Cloud, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import ContactDialog from '@/components/contact-dialog'
import JsonLd from '@/components/JsonLd'

// ConversAI Schema
const conversAISchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ConversAI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
    availability: 'https://schema.org/OnlineOnly'
  },
  description: '고객 응대부터 내부 커뮤니케이션까지 다양한 채널에서 활용 가능한 AI 커뮤니케이션 도구.',
  url: 'https://www.frameout.co.kr/conversai',
  author: {
    '@type': 'Organization',
    name: '프레임아웃',
    url: 'https://www.frameout.co.kr'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    ratingCount: '98',
    bestRating: '5',
    worstRating: '1'
  },
  featureList: 'AI 커뮤니케이션, 고객 응대 자동화, 내부 커뮤니케이션, 자연어 처리, 음성 텍스트 변환'
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

export default function ConversAI() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    console.log('Play button clicked')
    console.log('Video error state:', videoError)
    console.log('Video ref:', videoRef.current)
    
    if (videoError) {
      // 에러가 있으면 페이지 새로고침 또는 다른 처리
      console.log('Video error detected, reloading page')
      window.location.reload()
      return
    }
    
    setIsVideoLoading(true)
    setIsVideoPlaying(true)
    console.log('Video state set to playing')
    
    // Use setTimeout to ensure the video is visible before playing
    setTimeout(() => {
      if (videoRef.current) {
        console.log('Attempting to play video')
        console.log('Video readyState:', videoRef.current.readyState)
        console.log('Video networkState:', videoRef.current.networkState)
        
        videoRef.current.play().then(() => {
          console.log('Video play successful')
          setIsVideoLoading(false)
        }).catch(error => {
          console.error("Video playback failed:", error)
          console.error("Error details:", {
            name: error.name,
            message: error.message,
            code: error.code
          })
          setIsVideoPlaying(false)
          setIsVideoLoading(false)
          setVideoError(true)
        })
      } else {
        console.error('Video ref is null')
        setIsVideoPlaying(false)
        setIsVideoLoading(false)
      }
    }, 100)
  }

  const handleVideoError = (e) => {
    console.error("Video failed to load")
    console.error("Video error event:", e)
    if (e.target && e.target.error) {
      console.error("Video error code:", e.target.error.code)
      console.error("Video error message:", e.target.error.message)
    }
    setVideoError(true)
    setIsVideoLoading(false)
    setIsVideoPlaying(false)
  }

  return (
    <React.Fragment>
      <JsonLd data={conversAISchema} />
      <main className="pt-16 flex flex-col min-h-screen bg-white">
      {/* Hero Section - Updated to match Figma design */}
      <section className="relative bg-black h-[450px] md:h-[450px] lg:h-[450px] flex items-center justify-center overflow-hidden mt-8 sm:mt-12 md:mt-20 lg:mt-28">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/ConversAI_visual.png"
            alt="ConversAI Background"
            fill
            className="object-cover w-full h-full"
            priority
          />
          {/* Black overlay to match Figma design */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title - Matching Figma specs with responsive sizing */}
            <motion.h1
              className="text-white text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-tight tracking-[-1px] lg:tracking-[-1.44px] max-w-[400px] sm:max-w-[500px] lg:max-w-[623px] mx-auto font-pretendard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              고객 응대, 내부 안내, 기술지원까지<br />
              AI가 고객 경험을 바꿉니다
            </motion.h1>
            
            {/* Subtitle - Matching Figma specs with responsive sizing */}
            <motion.p
              className="text-white text-[14px] sm:text-[18px] md:text-[24px] lg:text-[28px] leading-relaxed max-w-[320px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1039px] mx-auto font-pretendard font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="block sm:hidden">
                ConversAI는 정확하고 안전한 응답으로<br />
                비즈니스 커뮤니케이션의 효율을 획기적으로 높입니다.
              </span>
              <span className="hidden sm:block">
                ConversAI는 정확하고 안전한 응답으로 비즈니스 커뮤니케이션의 효율을 획기적으로 높입니다.
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 왜 ConversAI인가요 Section - Updated to match Figma design */}      
      <motion.section         
        className="py-12 lg:py-20 bg-white"        
        initial={{ opacity: 0 }}        
        whileInView={{ opacity: 1 }}        
        viewport={{ once: true }}        
        transition={{ duration: 0.8 }}      
      >        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">          
          {/* Section Heading */}          
          <motion.div            
            initial={{ opacity: 0, y: 20 }}            
            whileInView={{ opacity: 1, y: 0 }}            
            viewport={{ once: true, amount: 0.6 }}            
            transition={{ duration: 0.6 }}            
            className="text-center space-y-4 mb-16"          
          >            
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] leading-tight tracking-[-1px] lg:tracking-[-1.2px] font-pretendard">              
              왜 ConversAI 인가요?            
            </h2>            
            <p className="text-[#222222] text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed font-pretendard font-normal max-w-4xl text-center mx-auto">              
              ConversAI는 기존 챗봇의 한계를 해결하고, 기업 맥락에 맞는 지능형 대화 경험을 제공합니다.
            </p>          
          </motion.div>          
          
          {/* Two Column Layout */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto"
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
            {/* Left Column - Problems */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5f6f9] rounded-[16px] lg:rounded-[32px] p-6 lg:p-10 space-y-4 lg:space-y-6"
            >
              {/* Problem Items */}
              <div className="space-y-4 lg:space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <XCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      뻔한 FAQ 반복
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      예외 상황 대응이 불가능해 고객 불만 증가
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <XCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      동문서답
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      실제 질문 의도를 이해하지 못한 엉뚱한 응답
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <XCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      브랜드 어조 불일치
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      기업 이미지와 다른 어투로 신뢰도 하락
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <XCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      정책 반영 어려움
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      사내 정책, 변경사항 반영이 어려움
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <XCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      부정확한 정보
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      최신 정보가 반영되지 않아 오답 유발
                    </p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <XCircle className="w-4 h-4 lg:w-6 lg:h-6 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      결국 콜센터로 연결
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      결국 챗봇이 해결하지 못해 전화로 이어짐
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Solutions */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5f6f9] rounded-[16px] lg:rounded-[32px] p-6 lg:p-10 space-y-4 lg:space-y-6"
            >
              {/* Solution Items */}
              <div className="space-y-4 lg:space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" className="lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      정확하고 안전한 응답
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      RAG 구조와 Guardrail 시스템으로 신뢰도 높은 응답 제공
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" className="lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      기업 데이터 반영
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      비공개 문서, 사내 정책 등을 학습해 기업 맥락을 반영
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" className="lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      실시간 정보 업데이트
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      웹 크롤링과 브라우저 자동화를 통한 최신 정보 반영
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" className="lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      맞춤형 대화 시나리오
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      고객 유형, 상황에 맞춰 다양한 응답 흐름 구성 가능
                    </p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" className="lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      다국어 및 음성 지원
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      30개 언어와 STT/TTS로 글로벌 대응 강화
                    </p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="flex-shrink-0 w-4 h-4 lg:w-6 lg:h-6 mt-0">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg width="12" height="12" className="lg:w-4 lg:h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#111111] leading-tight tracking-[-0.4px] lg:tracking-[-0.6px] font-pretendard">
                      유연한 배포 환경
                    </h3>
                    <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#666666] leading-relaxed tracking-[-0.3px] lg:tracking-[-0.6px] font-pretendard">
                      클라우드, 온프레미스, 하이브리드 모두 지원
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>      
      </motion.section>

      {/* ConversAI는 이렇게 이해하고 응답합니다 Section - Updated to match Figma design */}
      <motion.section 
        className="py-8 lg:py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] leading-tight tracking-[-1px] lg:tracking-[-1.2px] font-pretendard text-left lg:text-left mb-6">
              <span className="block lg:inline">ConversAI는 이렇게 이해하고</span>
              <span className="block lg:inline"> 응답합니다</span>
            </h2>
            <p className="text-[#222222] text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed font-pretendard font-normal max-w-4xl text-left">
              FTIG(Fetch, Train, Infer, Guard) 구조로 정확하고 안전한 AI 대화를 구현합니다.<br />
              ConversAI의 FTIG 구조는 데이터 수집부터 안전한 응답 생성까지 모든 과정을 자동화하여<br />
              사람의 개입 없이도 정확하고 신뢰할 수 있는 AI 대화 경험을 제공합니다.
            </p>
          </motion.div>

          {/* FTIG Steps */}
          <div className="space-y-20">
            {/* Step 1: 데이터 수집 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1200px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div>
                <div className="relative w-full max-w-[550px] mx-auto">
                  <Image
                    src="/images/workflow/image-6.png"
                    alt="데이터 수집"
                    width={550}
                    height={300}
                    className="w-full h-auto rounded-[20px] shadow-sm"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-[#e6f6ff] border border-[#bde2f2] rounded-full lg:mb-0">
                      <span className="text-[#4c9dc0] text-[16px] font-bold font-pretendard tracking-[-0.48px]">STEP 1</span>
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333] leading-tight tracking-[-0.6px] lg:tracking-[-0.84px] font-pretendard">
                      데이터 수집
                    </h3>
                  </div>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#333333] leading-relaxed font-pretendard font-normal">
                    브라우저 자동화 또는 문서 업로드를 통해 실시간 정보 수집
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2: 데이터 학습 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1200px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div>
                <div className="relative w-full max-w-[550px] mx-auto">
                  <Image
                    src="/images/workflow/image-7.png"
                    alt="데이터 학습"
                    width={550}
                    height={300}
                    className="w-full h-auto rounded-[20px] shadow-sm"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-[#e6f6ff] border border-[#bde2f2] rounded-full lg:mb-0">
                      <span className="text-[#4c9dc0] text-[16px] font-bold font-pretendard tracking-[-0.48px]">STEP 2</span>
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333] leading-tight tracking-[-0.6px] lg:tracking-[-0.84px] font-pretendard">
                      데이터 학습
                    </h3>
                  </div>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#333333] leading-relaxed font-pretendard font-normal">
                    QLoRA 기반 파인튜닝으로 내부 데이터 학습 및 벡터 임베딩 처리
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3: 응답 생성 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1200px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div>
                <div className="relative w-full max-w-[550px] mx-auto">
                  <Image
                    src="/images/workflow/image-8.png"
                    alt="응답 생성"
                    width={550}
                    height={300}
                    className="w-full h-auto rounded-[20px] shadow-sm"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-[#e6f6ff] border border-[#bde2f2] rounded-full lg:mb-0">
                      <span className="text-[#4c9dc0] text-[16px] font-bold font-pretendard tracking-[-0.48px]">STEP 3</span>
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333] leading-tight tracking-[-0.6px] lg:tracking-[-0.84px] font-pretendard">
                      응답 생성
                    </h3>
                  </div>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#333333] leading-relaxed font-pretendard font-normal">
                    RAG 구조 기반으로 정확하고 맥락 있는 답변 생성
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 4: 응답 검증 */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-[1200px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              {/* Image */}
              <div>
                <div className="relative w-full max-w-[550px] mx-auto">
                  <Image
                    src="/images/workflow/image-9.png"
                    alt="응답 검증"
                    width={550}
                    height={300}
                    className="w-full h-auto rounded-[20px] shadow-sm"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-4">
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-[#e6f6ff] border border-[#bde2f2] rounded-full lg:mb-0">
                      <span className="text-[#4c9dc0] text-[16px] font-bold font-pretendard tracking-[-0.48px]">STEP 4</span>
                    </div>
                    <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#333333] leading-tight tracking-[-0.6px] lg:tracking-[-0.84px] font-pretendard">
                      응답 검증
                    </h3>
                  </div>
                  <p className="text-[16px] sm:text-[20px] lg:text-[24px] text-[#333333] leading-relaxed font-pretendard font-normal">
                    Guardrail 시스템으로 허위 정보, 유해 발화, 정책 위반 자동 차단
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 도입 효과 Section */}
      <motion.section 
        className="py-20 bg-[#f2f4f6]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] leading-tight tracking-[-1px] lg:tracking-[-1.2px] font-pretendard mb-6">
              도입 효과
            </h2>
            <p className="text-[#333333] text-[18px] sm:text-[24px] lg:text-[28px] leading-relaxed font-pretendard font-normal max-w-4xl mx-auto">
              챗봇을 넘어, 기업 맞춤형 AI 커뮤니케이션 인프라로 확장됩니다.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1200px] mx-auto"
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
            {/* Card 1: 반복 응대 자동화 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[20px] lg:rounded-[32px] p-8 lg:p-12 h-[250px] lg:h-[300px] flex flex-col justify-between"
            >
              <div>
                {/* Number */}
                <div className="flex items-baseline mb-4 lg:mb-6">
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#222222] mr-1 tracking-[-0.48px] lg:tracking-[-0.72px] font-pretendard">
                    최대
                  </span>
                  <span className="text-[40px] lg:text-[60px] font-bold text-[#222222] leading-none tracking-[-1.2px] lg:tracking-[-1.8px]" style={{ fontFamily: 'DM Sans' }}>
                    <CountUp end={70} duration={2000} />
                  </span>
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#222222] ml-1 tracking-[-0.48px] lg:tracking-[-0.72px] font-pretendard">
                    % 감소
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-[20px] sm:text-[22px] lg:text-[26px] font-medium text-[#222222] leading-tight tracking-[-0.54px] lg:tracking-[-0.72px] font-pretendard mb-3 lg:mb-4">
                  반복 응대 자동화
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-[#666666] leading-relaxed tracking-[-0.42px] lg:tracking-[-0.6px] font-pretendard">
                고객센터 및 내부 안내<br />
                업무 자동화
              </p>
            </motion.div>

            {/* Card 2: 고객 만족도 향상 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[20px] lg:rounded-[32px] p-8 lg:p-12 h-[250px] lg:h-[300px] flex flex-col justify-between"
            >
              <div>
                {/* Number */}
                <div className="flex items-baseline mb-4 lg:mb-6">
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#222222] mr-1 tracking-[-0.48px] lg:tracking-[-0.72px] font-pretendard">
                    최대
                  </span>
                  <span className="text-[40px] lg:text-[60px] font-bold text-[#222222] leading-none tracking-[-1.2px] lg:tracking-[-1.8px]" style={{ fontFamily: 'DM Sans' }}>
                    <CountUp end={2} duration={2000} />
                  </span>
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#222222] ml-1 tracking-[-0.48px] lg:tracking-[-0.72px] font-pretendard">
                    배 증가
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-[20px] sm:text-[22px] lg:text-[26px] font-medium text-[#222222] leading-tight tracking-[-0.54px] lg:tracking-[-0.72px] font-pretendard mb-3 lg:mb-4">
                  고객 만족도 향상
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-[#666666] leading-relaxed tracking-[-0.42px] lg:tracking-[-0.6px] font-pretendard">
                빠르고 정확한 응답으로<br />
                이탈률 감소
              </p>
            </motion.div>

            {/* Card 3: 유지보수 효율화 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[20px] lg:rounded-[32px] p-8 lg:p-12 h-[250px] lg:h-[300px] flex flex-col justify-between md:col-span-2 lg:col-span-1"
            >
              <div>
                {/* Number */}
                <div className="flex items-baseline mb-4 lg:mb-6">
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#222222] mr-1 tracking-[-0.48px] lg:tracking-[-0.72px] font-pretendard">
                    평균
                  </span>
                  <span className="text-[40px] lg:text-[60px] font-bold text-[#222222] leading-none tracking-[-1.2px] lg:tracking-[-1.8px]" style={{ fontFamily: 'DM Sans' }}>
                    <CountUp end={60} duration={2000} />
                  </span>
                  <span className="text-[18px] sm:text-[22px] lg:text-[26px] font-semibold text-[#222222] ml-1 tracking-[-0.48px] lg:tracking-[-0.72px] font-pretendard">
                    % 단축
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-[20px] sm:text-[22px] lg:text-[26px] font-medium text-[#222222] leading-tight tracking-[-0.54px] lg:tracking-[-0.72px] font-pretendard mb-3 lg:mb-4">
                  유지보수 효율화
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[16px] sm:text-[18px] lg:text-[22px] text-[#666666] leading-relaxed tracking-[-0.42px] lg:tracking-[-0.6px] font-pretendard">
                정책 변경, 내용 수정 시<br />
                유지관리 시간 감소
              </p>
            </motion.div>
          </motion.div>
        </div>      
      </motion.section>

      {/* 어떤 산업이든, 고객 대화는 AI로 바뀝니다 Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-5xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold text-[#222222] leading-tight tracking-[-1px] lg:tracking-[-1.2px] font-pretendard mb-6">
              <span className="block lg:inline">어떤 산업이든,</span>
              <span className="block lg:inline"> 고객 대화는 AI로 바뀝니다</span>
            </h2>
            <p className="text-[#222222] text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed font-pretendard font-normal max-w-4xl mx-auto">
              <span className="block lg:inline">금융, 유통, 헬스케어, 교육 등 다양한 현장에서</span>
              <span className="block lg:inline">ConversAI는 실제 고객 문의와 내부 응대를 </span>
              <span className="block lg:inline">자동화하고 있습니다.</span>
              <span className="block lg:inline">업종에 따라 맞춤형 시나리오와 언어 톤을 </span>
              <span className="block lg:inline">설계할 수 있습니다.</span>
            </p>
          </motion.div>

          {/* Cards Grid - 2 rows, 3 columns */}
          <motion.div
            className="space-y-8 max-w-[1200px] mx-auto"
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
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 lg:justify-between">
              {/* 카드 1: 금융 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#f8f8f9] rounded-[24px] w-full lg:w-[384px] h-[220px] relative transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer"
              >
                {/* 아이콘 */}
                <div className="absolute left-6 top-6 w-10 h-10 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/icons/icon-6.png"
                    alt="금융 아이콘"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="absolute left-6 top-[80px] lg:top-[110px] w-[336px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[24px] font-bold text-[#222222] leading-[29px] tracking-[-0.72px] font-pretendard mb-2">
                    금융
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[20px] text-[#333333] font-medium leading-[24px] font-pretendard mb-3">
                    맞춤형 상품 추천, 상담 자동화
                  </p>
                  <div className="flex items-center text-[14px] sm:text-[18px] lg:text-[18px] text-[#666666] font-pretendard leading-[22px] flex-wrap">
                    <span className="whitespace-nowrap">"대출 될까요?"</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">조건 확인</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">신청 유도</span>
                  </div>
                </div>
              </motion.div>

              {/* 카드 2: 유통 / 커머스 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#f8f8f9] rounded-[24px] w-full lg:w-[384px] h-[220px] relative transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer"
              >
                {/* 아이콘 */}
                <div className="absolute left-6 top-6 w-10 h-10 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/icons/icon-7.png"
                    alt="유통 아이콘"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="absolute left-6 top-[80px] lg:top-[110px] w-[336px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[24px] font-bold text-[#222222] leading-[29px] tracking-[-0.72px] font-pretendard mb-2">
                    유통 / 커머스
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[20px] text-[#333333] font-medium leading-[24px] font-pretendard mb-3">
                    배송 문의, 반품 접수 자동 처리
                  </p>
                  <div className="flex items-center text-[14px] sm:text-[18px] lg:text-[18px] text-[#666666] font-pretendard leading-[22px] flex-wrap">
                    <span className="whitespace-nowrap">"언제 배송돼요?"</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">실시간 배송정보 안내</span>
                  </div>
                </div>
              </motion.div>

              {/* 카드 3: 헬스케어 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#f8f8f9] rounded-[24px] w-full lg:w-[384px] h-[220px] relative transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer"
              >
                {/* 아이콘 */}
                <div className="absolute left-6 top-6 w-10 h-10 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/icons/icon-8.png"
                    alt="헬스케어 아이콘"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="absolute left-6 top-[80px] lg:top-[110px] w-[336px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[24px] font-bold text-[#222222] leading-[29px] tracking-[-0.72px] font-pretendard mb-2">
                    헬스케어
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[20px] text-[#333333] font-medium leading-[24px] font-pretendard mb-3">
                    진료 예약, 복약 안내, 건강 정보 제공
                  </p>
                  <div className="flex items-center text-[14px] sm:text-[18px] lg:text-[18px] text-[#666666] font-pretendard leading-[22px] flex-wrap">
                    <span className="whitespace-nowrap">"예약 돼있나요?"</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">병원 시스템 연동 확인</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 lg:justify-between">
              {/* 카드 4: 교육 / 콘텐츠 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#f8f8f9] rounded-[24px] w-full lg:w-[384px] h-[220px] relative transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer"
              >
                {/* 아이콘 */}
                <div className="absolute left-6 top-6 w-10 h-10 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/icons/icon-9.png"
                    alt="교육 아이콘"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="absolute left-6 top-[80px] lg:top-[110px] w-[336px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[24px] font-bold text-[#222222] leading-[29px] tracking-[-0.72px] font-pretendard mb-2">
                    교육 / 콘텐츠
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[20px] text-[#333333] font-medium leading-[24px] font-pretendard mb-3">
                    수강 상담, 커리큘럼 안내, 수업 일정 관리
                  </p>
                  <div className="flex items-center text-[14px] sm:text-[18px] lg:text-[18px] text-[#666666] font-pretendard leading-[22px] flex-wrap">
                    <span className="whitespace-nowrap">"강의 언제 시작해요?"</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">일정 + 안내 제공</span>
                  </div>
                </div>
              </motion.div>

              {/* 카드 5: 제조 / 기술지원 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#f8f8f9] rounded-[24px] w-full lg:w-[384px] h-[220px] relative transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer"
              >
                {/* 아이콘 */}
                <div className="absolute left-6 top-6 w-10 h-10 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/icons/icon-10.png"
                    alt="제조 아이콘"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="absolute left-6 top-[80px] lg:top-[110px] w-[336px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[24px] font-bold text-[#222222] leading-[29px] tracking-[-0.72px] font-pretendard mb-2">
                    제조 / 기술지원
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[20px] text-[#333333] font-medium leading-[24px] font-pretendard mb-3">
                    제품설치 가이드, A/S처리, 기술문서자동화
                  </p>
                  <div className="flex items-center text-[14px] sm:text-[18px] lg:text-[18px] text-[#666666] font-pretendard leading-[22px] flex-wrap">
                    <span className="whitespace-nowrap">"에러코드 E4?"</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">자동 대응+해결 가이드</span>
                  </div>
                </div>
              </motion.div>

              {/* 카드 6: 사내 운영 / 직원 지원 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-[#f8f8f9] rounded-[24px] w-full lg:w-[384px] h-[220px] relative transition-all duration-300 ease-in-out hover:shadow-lg group cursor-pointer"
              >
                {/* 아이콘 */}
                <div className="absolute left-6 top-6 w-10 h-10 lg:w-16 lg:h-16 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3">
                  <Image
                    src="/icons/icon-11.png"
                    alt="사내 운영 아이콘"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* 텍스트 영역 */}
                <div className="absolute left-6 top-[80px] lg:top-[110px] w-[336px]">
                  <h3 className="text-[20px] sm:text-[24px] lg:text-[24px] font-bold text-[#222222] leading-[29px] tracking-[-0.72px] font-pretendard mb-2">
                    사내 운영 / 직원 지원
                  </h3>
                  <p className="text-[16px] sm:text-[20px] lg:text-[20px] text-[#333333] font-medium leading-[24px] font-pretendard mb-3">
                    HR, IT, 입사자 교육, 규정 안내
                  </p>
                  <div className="flex items-center text-[14px] sm:text-[18px] lg:text-[18px] text-[#666666] font-pretendard leading-[22px] flex-wrap">
                    <span className="whitespace-nowrap">"연차 신청 방법"</span>
                    <svg className="mx-1.5 w-3 h-4 flex-shrink-0" viewBox="0 0 12 16" fill="none">
                      <path d="M4 2L10 8L4 14" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="whitespace-nowrap">사내 프로세스 안내 제공</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

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
            실제 기업에서는<br />
            이렇게 활용하고 있습니다
          </span>
          <span className="hidden lg:block">
            실제 기업에서는 이렇게 활용하고 있습니다
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
            실제 기업 프로젝트에 적용된<br />
            ConversAI의 응답 흐름을<br />
            직접 확인해보세요.<br />
            누구나 실무에서 바로 활용할 수<br />
            있도록 설계되었습니다.
          </span>
          <span className="hidden lg:block">
            실제 기업 프로젝트에 적용된 ConversAI의 응답 흐름을 직접 확인해보세요.<br />
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
            {/* Video Container with 16:9 aspect ratio */}
            <div className="w-full aspect-video relative">
              {/* Thumbnail with play button overlay */}
              {!isVideoPlaying && (
                <>
                  <Image
                    src="/images/conversai-thumbnail.png"
                    alt="ConversAI Demo Video Thumbnail"
                    fill
                    className="rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] shadow-md object-cover"
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
                poster="/images/conversai-thumbnail.png"
                controls
                preload="metadata"
                playsInline
                webkit-playsinline="true"
                muted={false}
                className={isVideoPlaying ? "rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] shadow-md w-full h-full object-cover" : "hidden"}
                id="demoVideo"
                onError={handleVideoError}
                onLoadStart={() => setIsVideoLoading(true)}
                onCanPlay={() => setIsVideoLoading(false)}
                onLoadedData={() => setIsVideoLoading(false)}
              />
              
              {/* Loading indicator */}
              {isVideoLoading && isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}
              
              {/* Error state */}
              {videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]">
                  <div className="text-center text-white">
                    <p className="mb-4">비디오를 로드할 수 없습니다</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="px-4 py-2 bg-[#2d81fd] text-white rounded-lg hover:bg-[#1e5fd4] transition-colors"
                    >
                      다시 시도
                    </button>
                  </div>
                </div>
              )}
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
              ※ 위 영상은 ConversAI를 활용한<br />
              실제 기업 프로젝트 화면 일부를<br />
              기반으로 제작되었습니다.
            </span>
            <span className="hidden sm:block">
              ※ 위 영상은 ConversAI를 활용한 실제 기업 프로젝트 화면 일부를 기반으로 제작되었습니다.
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
              반복되는 질문에,<br />
              반복해서 답하고 계신가요?
            </span>
            <span className="hidden sm:block">
              반복되는 질문에, 반복해서 답하고 계신가요?
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
              지금, 고객 커뮤니케이션을<br />
              혁신하세요
            </span>
            <span className="hidden sm:block">
              지금, 고객 커뮤니케이션을 혁신하세요
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
              프레임아웃은 IX를 중심으로<br />
              AI 기술을 활용한<br />
              혁신적인 디지털 경험을 제공합니다.
            </span>
            <span className="hidden sm:block">
              프레임아웃은 IX를 중심으로 AI 기술을 활용한<br />
              혁신적인 디지털 경험을 제공합니다.
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