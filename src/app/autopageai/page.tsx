'use client'

import React from 'react'
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
          // Fallback for browsers that block autoplay
          alert("비디오 자동 재생에 실패했습니다. 비디오 컨트롤을 사용하여 재생해주세요.")
        })
      }
    }, 100)
  }

  return (
    <React.Fragment>
      <JsonLd data={autoPageAISchema} />
      <main className="pt-16 flex flex-col min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#F9FAFB] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="md:w-5/12 lg:w-5/12 max-w-4xl text-left space-y-4 pl-0 md:pl-8 lg:pl-16 xl:pl-24">
                <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full inline-block">
                  AI 콘텐츠 자동화
                </span>
                <motion.h1
                  className="text-4xl font-bold text-[#1C2B50] leading-snug"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  반복되는 콘텐츠 제작,<br />이제 AI가 대신합니다
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  기획부터 퍼블리싱까지의 전 과정을<br />AutoPageAI가 자동으로 처리합니다.
                </motion.p>
              </div>
              
              {/* Illustration */}
              <div className="md:w-7/12 lg:w-7/12 flex justify-end">
                <Image
                  src="/illustrations/Allura - auto_04.png"
                  alt="AutoPageAI"
                  width={460}
                  height={400}
                  className="w-full max-w-[460px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 space-y-10">
            {/* Intro copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-[#1C2B50] leading-snug">
                더 빠르게, 더 완성도 있게<br />
                콘텐츠 운영의 흐름을 AI가 바꿉니다
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                반복되는 제작 업무에 시간을 빼앗기고 있다면,<br />
                AutoPageAI는 실무자의 시간과 전략을 지켜주는 콘텐츠 자동화 플랫폼입니다.<br />
                성과 높은 패턴은 학습하고, 브랜드는 일관되게 유지하며 운영 효율을 높입니다.
              </p>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-[#1C2B50] text-center mb-12"
            >
              주요 기능
            </motion.h2>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
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
              {/* 카드 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <motion.div
                  className="w-8 h-8 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3"
                >
                  <ChartBarIcon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">AI 맞춤 콘텐츠 추천</h3>
                <p className="text-gray-600">
                  과거 성과 데이터를 분석하여 목적에 맞는 템플릿, 문안, 디자인을 제안합니다.
                </p>
              </motion.div>

              {/* 카드 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <motion.div
                  className="w-8 h-8 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3"
                >
                  <Paintbrush className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">브랜드 일관성 자동 적용</h3>
                <p className="text-gray-600">
                  브랜드 톤과 스타일을 학습하여 콘텐츠 전반에 일관된 비주얼 가이드를 적용합니다.
                </p>
              </motion.div>

              {/* 카드 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <motion.div
                  className="w-8 h-8 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3"
                >
                  <Search className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">실시간 경쟁 콘텐츠 분석</h3>
                <p className="text-gray-600">
                  유사 타깃의 경쟁 콘텐츠를 분석하여 전략 수립에 활용할 수 있는 인사이트를 제공합니다.
                </p>
              </motion.div>

              {/* 카드 4 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <motion.div
                  className="w-8 h-8 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3"
                >
                  <FileEdit className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">카피 및 디자인 자동 생성</h3>
                <p className="text-gray-600">
                  기본 문안 작성과 디자인 생성도구를 통해 콘텐츠 제작 속도를 높입니다.
                </p>
              </motion.div>

              {/* 카드 5 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <motion.div
                  className="w-8 h-8 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3"
                >
                  <CodeIcon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">검수 및 HTML 변환</h3>
                <p className="text-gray-600">
                  AI가 1차 검수하고, HTML 변환, 템플릿 관리를 통해 반복적인 업무를 효율화합니다.
                </p>
              </motion.div>

              {/* 카드 6 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03] group"
              >
                <motion.div
                  className="w-8 h-8 text-slate-500 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3"
                >
                  <Smartphone className="w-8 h-8" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">멀티 플랫폼 최적화 대응</h3>
                <p className="text-gray-600">
                  웹, 모바일, 커머스 채널에 맞춰 콘텐츠 리사이징을 지원하며, CMS 연동은 별도 협의가 필요합니다.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why AutoPage AI Section */}
        <section className="py-20 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-3xl font-bold text-center text-[#1C2B50] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              왜 AutoPageAI인가요?
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              콘텐츠 자동화 도구는 많습니다.<br />
              AutoPageAI는 전략 수립부터 제작, 운영, 유지보수까지<br />
              하나의 흐름으로 연결된 All-in-One 솔루션입니다.
            </motion.p>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto"
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
              {/* 항목 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <Rocket className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1C2B50] mb-2">
                    콘텐츠 제작 속도 향상
                  </h4>
                  <p className="text-gray-600">
                    반복 업무를 자동화해 콘텐츠 제작 시간을 대폭 줄입니다.
                  </p>
                </div>
              </motion.div>

              {/* 항목 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <ArrowRightLeft className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1C2B50] mb-2">
                    전략부터 운영까지 연결
                  </h4>
                  <p className="text-gray-600">
                    경쟁사 분석부터 콘텐츠 운영까지, 하나의 자동화된 흐름으로 연결됩니다.
                  </p>
                </div>
              </motion.div>

              {/* 항목 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <Users className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1C2B50] mb-2">
                    협업 효율 향상
                  </h4>
                  <p className="text-gray-600">
                    팀 간 반복 커뮤니케이션 없이, 더 빠른 결정과 실행이 가능합니다.
                  </p>
                </div>
              </motion.div>

              {/* 항목 4 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4"
              >
                <Laptop className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1C2B50] mb-2">
                    멀티플랫폼 대응력
                  </h4>
                  <p className="text-gray-600">
                    웹, 모바일, 커머스 플랫폼에 맞춘 콘텐츠가 자동 퍼블리싱됩니다.
                  </p>
                </div>
              </motion.div>

              {/* 항목 5 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4 md:col-span-2"
              >
                <TrendingUp className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-[#1C2B50] mb-2">
                    지속 가능한 성과 향상
                  </h4>
                  <p className="text-gray-600">
                    AI가 성과 높은 콘텐츠 패턴을 학습하고 반영해 예측 가능한 전략이 가능해집니다.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How it Works Section - NEW */}
        <section id="workflow-impact" className="py-24 bg-white">
          <div className="container mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold text-[#1C2B50] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
            >
              실무의 흐름을 자동화하면, 성과도 달라집니다
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AutoPageAI는 실무자가 실제로 거치는 콘텐츠 제작 과정을 자동화합니다.<br />
              반복되는 작업은 줄이고, 전략과 창의에 더 많은 시간을 집중할 수 있도록 설계되었습니다.
            </motion.p>

            <motion.p
              className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              콘텐츠 한 페이지를 만드는 데 <span className="text-orange-500 font-medium">평균 3~4일</span>이 걸리던 작업, <br/>
              AutoPageAI를 활용하면 기획부터 퍼블리싱까지 <span className="text-orange-500 font-medium">1~2일 이내로 단축</span>할 수 있습니다. <br/><br/>
              
              운영 중 페이지 수정이나 이벤트 교체도 간단해져 <br/>
              유지보수 시간이 <span className="text-orange-500 font-medium">최대 70%까지 감소</span>하며, <br/>
              브랜드 톤은 일관되게 유지하면서, 제작 <span className="text-orange-500 font-medium">효율은 2배 이상 향상</span>됩니다.
            </motion.p>

            {/* 상단 일러스트 기반 기능 카드 */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center text-center px-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className={`mb-4 ${feature.img.includes('AP_icon_05') ? 'w-auto h-16 object-contain' : 'w-16 h-16'} grayscale hover:grayscale-0 transition duration-300`}
                  />
                  <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* 하단 수치 강조 카드 (B안 스타일) */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: {},
              }}
            >
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#F9FAFB] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="text-slate-500 mb-3"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.2 + idx * 0.1
                    }}
                  >
                    {metric.icon}
                  </motion.div>
                  <p className="text-sm font-medium text-gray-500">{metric.title}</p>
                  <p className="text-2xl font-bold text-[#1C2B50] mt-1">
                    <CountUp 
                      end={parseInt(metric.highlight)} 
                      duration={2500} 
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                    />
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{metric.description}</p>
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
            AutoPageAI, 실제로 이렇게 작동합니다
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            실제 기업 프로젝트에서 활용된 AutoPageAI의 자동화 흐름을 영상으로 만나보세요.<br />
            누구나 실무에서 바로 활용할 수 있도록 설계되었습니다.
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
                    alt="AutoPageAI Demo Video Thumbnail"
                    width={1280}
                    height={720}
                    className="rounded-xl border border-slate-200 shadow-md w-full"
                    onClick={handlePlayVideo}
                  />
                  
                  {/* Play button overlay centered */}
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
              ※ 위 영상은 AutoPageAI를 활용한 IBK기업은행 프로젝트 화면 일부를 기반으로 제작되었습니다.
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
              더 적은 인원으로, 더 많은 일을 할 수 있다면?
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
              지금, 콘텐츠 자동화를 시작해보세요
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
    </React.Fragment>
  )
} 