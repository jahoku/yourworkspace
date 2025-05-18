'use client'

import { Bot, Sparkles, ChartBarIcon, Paintbrush, Search, FileEdit, CodeIcon, Smartphone, Rocket, ArrowRightLeft, Users, Laptop, TrendingUp, Clock, Palette, XCircle, AlertTriangle, Ban, ListX, Phone, Shield, Database, RefreshCw, GitBranch, Globe, Cloud } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
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

export default function ConversAI() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    setIsVideoPlaying(true)
    // Use setTimeout to ensure the video is visible before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
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
            <div className="md:w-6/12 lg:w-7/12 text-left space-y-4 pl-0 md:pl-8 lg:pl-16 xl:pl-24">
              <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full inline-block">
                AI 고객 커뮤니케이션
              </span>
              <motion.h1
                className="text-3xl sm:text-4xl font-bold text-[#1C2B50] leading-tight sm:leading-snug max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline md:hidden">고객 응대, 내부 안내, 기술지원까지 AI가 고객 경험을 바꿉니다</span>
                <span className="hidden md:inline lg:hidden">고객 응대, 내부 안내,<br />기술지원까지 AI가<br />고객 경험을 바꿉니다</span>
                <span className="hidden lg:inline">고객 응대, 내부 안내, 기술지원까지<br />AI가 고객 경험을 바꿉니다</span>
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline md:hidden">ConversAI는 정확하고 안전한 응답으로 비즈니스 커뮤니케이션의 효율을 획기적으로 높입니다.</span>
                <span className="hidden md:inline lg:hidden">ConversAI는 정확하고 안전한<br />응답으로 비즈니스 커뮤니케이션의<br />효율을 획기적으로 높입니다.</span>
                <span className="hidden lg:inline">ConversAI는 정확하고 안전한 응답으로 비즈니스 커뮤니케이션의 효율을 획기적으로 높입니다.</span>
              </motion.p>
            </div>
            
            {/* Illustration */}
            <div className="md:w-6/12 lg:w-5/12 flex justify-center md:justify-end">
              <Image
                src="/illustrations/conversai_visual.png"
                alt="ConversAI"
                width={460}
                height={400}
                className="w-full max-w-[460px] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 왜 ConversAI인가요 Section */}      
      <motion.section         
        className="py-20 bg-white"        
        initial={{ opacity: 0 }}        
        whileInView={{ opacity: 1 }}        
        viewport={{ once: true }}        
        transition={{ duration: 0.8 }}      
      >        
        <div className="container mx-auto px-4 space-y-12">          
          {/* Section Heading */}          
          <motion.div            
            initial={{ opacity: 0, y: 20 }}            
            whileInView={{ opacity: 1, y: 0 }}            
            viewport={{ once: true, amount: 0.6 }}            
            transition={{ duration: 0.6 }}            
            className="text-center space-y-4 max-w-3xl mx-auto"          
          >            
            <h2 className="text-3xl font-bold text-[#1C2B50] leading-snug">              
              왜 ConversAI인가요?            
            </h2>            
            <p className="text-gray-600 text-lg leading-relaxed">              
              ConversAI는 기존 챗봇의 한계를 해결하고, <span className="text-orange-500">기업 맥락에 맞는 지능형 대화 경험</span>을 제공합니다.
            </p>          
          </motion.div>          
          
          {/* Problems List */}
          <motion.div
            className="max-w-4xl mx-auto mt-10"
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Item 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <XCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-[#1C2B50]">뻔한 FAQ 반복</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  예외 상황 대응이 불가능해 고객 불만 증가
                </p>
              </motion.div>

              {/* Problem Item 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-[#1C2B50]">동문서답</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  실제 질문 의도를 이해하지 못한 엉뚱한 응답
                </p>
              </motion.div>

              {/* Problem Item 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <FileEdit className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-[#1C2B50]">브랜드 어조 불일치</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  기업 이미지와 다른 어투로 신뢰도 하락
                </p>
              </motion.div>

              {/* Problem Item 4 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <ListX className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-[#1C2B50]">정책 반영 어려움</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  사내 정책, 변경사항 반영이 어려움
                </p>
              </motion.div>

              {/* Problem Item 5 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Ban className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-[#1C2B50]">부정확한 정보</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  최신 정보가 반영되지 않아 오답 유발
                </p>
              </motion.div>

              {/* Problem Item 6 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="flex flex-col p-5 rounded-lg bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <Phone className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-[#1C2B50]">결국 콜센터로 연결</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">
                  결국 챗봇이 해결하지 못해 전화로 이어짐
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>      
      </motion.section>

            {/* ConversAI 주요 기능 Section */}      <section className="py-20 bg-[#F9FAFB]">        <div className="container mx-auto px-4 space-y-10">          {/* Intro copy */}          <motion.div            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true, amount: 0.6 }}            transition={{ duration: 0.6 }}            className="text-center space-y-4 max-w-3xl mx-auto"          >            <h2 className="text-3xl font-bold text-[#1C2B50] leading-snug">              ConversAI 주요 기능            </h2>            <p className="text-gray-600 text-lg leading-relaxed">              챗봇을 넘어, 기업 맞춤형 AI 커뮤니케이션 인프라로 확장됩니다.            </p>          </motion.div>                    <motion.div            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"            initial="hidden"            whileInView="visible"            viewport={{ once: true, amount: 0.2 }}            variants={{              visible: {                transition: {                  staggerChildren: 0.15                }              }            }}          >            {/* 카드 1: 정확하고 안전한 응답 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.7, ease: 'easeOut' }}              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"            >              <div className="w-10 h-10 text-orange-500 mb-4">                <Shield className="w-10 h-10" />              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">정확하고 안전한 응답</h3>              <p className="text-sm text-gray-600">                RAG 구조와 Guardrail 시스템으로 신뢰도 높은 응답 제공              </p>            </motion.div>            {/* 카드 2: 기업 데이터 반영 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.7, ease: 'easeOut' }}              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"            >              <div className="w-10 h-10 text-orange-500 mb-4">                <Database className="w-10 h-10" />              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">기업 데이터 반영</h3>              <p className="text-sm text-gray-600">                비공개 문서, 사내 정책 등을 학습해 기업 맥락을 반영              </p>            </motion.div>            {/* 카드 3: 실시간 정보 업데이트 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.7, ease: 'easeOut' }}              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"            >              <div className="w-10 h-10 text-orange-500 mb-4">                <RefreshCw className="w-10 h-10" />              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">실시간 정보 업데이트</h3>              <p className="text-sm text-gray-600">                웹 크롤링과 브라우저 자동화를 통한 최신 정보 반영              </p>            </motion.div>            {/* 카드 4: 맞춤형 대화 시나리오 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.7, ease: 'easeOut' }}              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"            >              <div className="w-10 h-10 text-orange-500 mb-4">                <GitBranch className="w-10 h-10" />              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">맞춤형 대화 시나리오</h3>              <p className="text-sm text-gray-600">                고객 유형, 상황에 맞춰 다양한 응답 흐름 구성 가능              </p>            </motion.div>            {/* 카드 5: 다국어 및 음성 지원 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.7, ease: 'easeOut' }}              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"            >              <div className="w-10 h-10 text-orange-500 mb-4">                <Globe className="w-10 h-10" />              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">다국어 및 음성 지원</h3>              <p className="text-sm text-gray-600">                30개 언어와 STT/TTS로 글로벌 대응 강화              </p>            </motion.div>            {/* 카드 6: 유연한 배포 환경 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.7, ease: 'easeOut' }}              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[1.03]"            >              <div className="w-10 h-10 text-orange-500 mb-4">                <Cloud className="w-10 h-10" />              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">유연한 배포 환경</h3>              <p className="text-sm text-gray-600">                클라우드, 온프레미스, 하이브리드 모두 지원              </p>            </motion.div>          </motion.div>        </div>      </section>

            {/* 도입 효과 Section */}      <section className="py-20 bg-white">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <motion.h2             className="text-3xl font-bold text-center text-[#1C2B50] mb-10"            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true, amount: 0.5 }}            transition={{ duration: 0.6 }}          >            도입 효과          </motion.h2>                    <motion.div            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"            initial="hidden"            whileInView="visible"            viewport={{ once: true, amount: 0.2 }}            variants={{              visible: { transition: { staggerChildren: 0.15 } },              hidden: {},            }}          >            {/* 카드 1: 반복 응대 자동화 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-[#F9FAFB] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="text-slate-500 mb-3"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.2                }}              >                <Smartphone className="w-8 h-8" />              </motion.div>              <p className="text-sm font-medium text-gray-500">반복 응대 자동화</p>              <p className="text-2xl font-bold text-[#1C2B50] mt-1">                <CountUp                   end={70}                   duration={2500}                   suffix="% 감소"                  prefix="최대 "                />              </p>              <p className="text-gray-600 text-sm mt-2">고객센터 및 내부 안내 업무 자동화</p>            </motion.div>            {/* 카드 2: 고객 만족도 향상 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-[#F9FAFB] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="text-slate-500 mb-3"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.3                }}              >                <Users className="w-8 h-8" />              </motion.div>              <p className="text-sm font-medium text-gray-500">고객 만족도 향상</p>              <p className="text-2xl font-bold text-[#1C2B50] mt-1">                <CountUp                   end={2}                   duration={2500}                   suffix="배 증가"                  prefix="최대 "                />              </p>              <p className="text-gray-600 text-sm mt-2">빠르고 정확한 응답으로 이탈률 감소</p>            </motion.div>            {/* 카드 3: 유지보수 효율화 */}            <motion.div              variants={{                hidden: { opacity: 0, y: 20 },                visible: { opacity: 1, y: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-[#F9FAFB] rounded-xl p-6 text-left shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="text-slate-500 mb-3"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.4                }}              >                <RefreshCw className="w-8 h-8" />              </motion.div>              <p className="text-sm font-medium text-gray-500">유지보수 효율화</p>              <p className="text-2xl font-bold text-[#1C2B50] mt-1">                <CountUp                   end={60}                   duration={2500}                   suffix="% 단축"                  prefix="평균 "                />              </p>              <p className="text-gray-600 text-sm mt-2">정책 변경, 내용 수정 시 유지관리 시간 감소</p>            </motion.div>          </motion.div>        </div>      </section>

      {/* ConversAI는 이렇게 작동합니다 Section */}      <motion.section         className="py-24 bg-[#F9FAFB]"        initial={{ opacity: 0 }}        whileInView={{ opacity: 1 }}        viewport={{ once: true }}        transition={{ duration: 0.8 }}      >        <div className="container mx-auto px-4">          <motion.h2            className="text-3xl font-bold text-center text-[#1C2B50] mb-8"            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true, amount: 0.5 }}            transition={{ duration: 0.6 }}          >            ConversAI는 이렇게 이해하고 응답합니다          </motion.h2>          <motion.p            className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto"            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true, amount: 0.5 }}            transition={{ duration: 0.6, delay: 0.2 }}          >            FTIG(Fetch, Train, Infer, Guard) 구조로 <br className="md:hidden" />            정확하고 안전한 AI 대화를 구현합니다          </motion.p>                    <motion.div            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"            initial="hidden"            whileInView="visible"            viewport={{ once: true, amount: 0.2 }}            variants={{              visible: {                transition: {                  staggerChildren: 0.15                }              }            }}          >            {/* 단계 1: 데이터 수집 */}            <motion.div              variants={{                hidden: { opacity: 0, x: -20 },                visible: { opacity: 1, x: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-300"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="flex justify-center mb-4"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.1                }}              >                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center">                  <Database className="w-8 h-8 text-orange-500" />                </div>              </motion.div>              <div className="bg-orange-50 rounded-full py-1 px-3 text-xs font-medium text-orange-600 inline-block mb-3">                F - Fetch              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">데이터 수집</h3>              <p className="text-gray-600 text-sm">                브라우저 자동화 또는 문서 업로드를 통해<br />                실시간 정보 수집              </p>            </motion.div>            {/* 단계 2: 데이터 학습 */}            <motion.div              variants={{                hidden: { opacity: 0, x: -20 },                visible: { opacity: 1, x: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-300"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="flex justify-center mb-4"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.2                }}              >                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">                  <Sparkles className="w-8 h-8 text-blue-500" />                </div>              </motion.div>              <div className="bg-blue-50 rounded-full py-1 px-3 text-xs font-medium text-blue-600 inline-block mb-3">                T - Train              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">데이터 학습</h3>              <p className="text-gray-600 text-sm">                QLoRA 기반 파인튜닝으로 내부 데이터<br />                학습 및 벡터 임베딩 처리              </p>            </motion.div>            {/* 단계 3: 응답 생성 */}            <motion.div              variants={{                hidden: { opacity: 0, x: -20 },                visible: { opacity: 1, x: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-300"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="flex justify-center mb-4"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.3                }}              >                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">                  <Bot className="w-8 h-8 text-green-500" />                </div>              </motion.div>              <div className="bg-green-50 rounded-full py-1 px-3 text-xs font-medium text-green-600 inline-block mb-3">                I - Infer              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">응답 생성</h3>              <p className="text-gray-600 text-sm">                RAG 구조 기반으로 정확하고<br />                맥락 있는 답변 생성              </p>            </motion.div>            {/* 단계 4: 응답 검증 */}            <motion.div              variants={{                hidden: { opacity: 0, x: -20 },                visible: { opacity: 1, x: 0 }              }}              transition={{ duration: 0.5 }}              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-300"              whileHover={{ scale: 1.02 }}            >              <motion.div                 className="flex justify-center mb-4"                initial={{ scale: 0.8 }}                whileInView={{ scale: 1 }}                transition={{                   type: "spring",                  stiffness: 260,                   damping: 20,                  delay: 0.4                }}              >                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center">                  <Shield className="w-8 h-8 text-purple-500" />                </div>              </motion.div>              <div className="bg-purple-50 rounded-full py-1 px-3 text-xs font-medium text-purple-600 inline-block mb-3">                G - Guard              </div>              <h3 className="text-lg font-semibold text-[#1C2B50] mb-2">응답 검증</h3>              <p className="text-gray-600 text-sm">                Guardrail 시스템으로 허위 정보, 유해 발화,<br />                정책 위반 자동 차단              </p>            </motion.div>          </motion.div>          <motion.div            className="mt-16 text-center"            initial={{ opacity: 0, y: 20 }}            whileInView={{ opacity: 1, y: 0 }}            viewport={{ once: true }}            transition={{ duration: 0.6, delay: 0.5 }}          >            <p className="text-sm text-gray-500 max-w-2xl mx-auto">              ConversAI의 FTIG 구조는 데이터 수집부터 안전한 응답 생성까지 모든 과정을 자동화하여               사람의 개입 없이도 정확하고 신뢰할 수 있는 AI 대화 경험을 제공합니다.            </p>          </motion.div>        </div>      </motion.section>

      {/* Demo Video Section */}
      <section className="py-24 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold text-[#1C2B50] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          실제 기업에서는 이렇게 활용하고 있습니다
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          실제 기업 프로젝트에 적용된 ConversAI의 응답 흐름을 직접 확인해보세요.<br />
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
                  alt="ConversAI Demo Video Thumbnail"
                  width={1280}
                  height={720}
                  className="rounded-xl border border-slate-200 shadow-md w-full"
                  onClick={handlePlayVideo}
                />
                
                {/* Play button overlay with enhanced styling */}
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
            ※ 위 영상은 ConversAI를 활용한 에듀윌 프로젝트 화면 일부를 기반으로 제작되었습니다.
          </motion.p>
        </motion.div>
      </section>

      {/* 어떤 산업이든, 고객 대화는 AI로 바뀝니다 Section */}
      <motion.section
        className="py-24 bg-[#F9FAFB]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#1C2B50] mb-4">
              어떤 산업이든, 고객 대화는 AI로 바뀝니다
            </h2>
            <p className="text-gray-600 text-lg">
              금융, 유통, 헬스케어, 교육 등 다양한 현장에서 ConversAI는 실제 고객 문의와 내부 응대를 자동화하고 있습니다.<br />
              업종에 따라 맞춤형 시나리오와 언어 톤을 설계할 수 있습니다.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
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
            {/* 카드 1: 금융 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold text-[#1C2B50] mb-2">금융</h3>
              <p className="text-gray-700 font-medium mb-2">맞춤형 상품 추천, 상담 자동화</p>
              <p className="text-gray-500 text-sm">
                "대출 조건이 궁금해요" → 조건 확인 → 신청 유도
              </p>
            </motion.div>

            {/* 카드 2: 유통 / 커머스 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🏬</div>
              <h3 className="text-xl font-semibold text-[#1C2B50] mb-2">유통 / 커머스</h3>
              <p className="text-gray-700 font-medium mb-2">배송 문의, 반품 접수 자동 처리</p>
              <p className="text-gray-500 text-sm">
                "언제 배송되나요?" → 실시간 배송정보 안내
              </p>
            </motion.div>

            {/* 카드 3: 헬스케어 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold text-[#1C2B50] mb-2">헬스케어</h3>
              <p className="text-gray-700 font-medium mb-2">진료 예약, 복약 안내, 건강 정보 제공</p>
              <p className="text-gray-500 text-sm">
                "내일 예약 돼 있나요?" → 병원 시스템 연동 확인
              </p>
            </motion.div>

            {/* 카드 4: 교육 / 콘텐츠 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-[#1C2B50] mb-2">교육 / 콘텐츠</h3>
              <p className="text-gray-700 font-medium mb-2">수강 상담, 커리큘럼 안내, 수업 일정 관리</p>
              <p className="text-gray-500 text-sm">
                "이 강의 언제 시작하나요?" → 일정 + 안내 제공
              </p>
            </motion.div>

            {/* 카드 5: 제조 / 기술지원 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🛠</div>
              <h3 className="text-xl font-semibold text-[#1C2B50] mb-2">제조 / 기술지원</h3>
              <p className="text-gray-700 font-medium mb-2">제품 설치 가이드, A/S 처리, 기술문서 자동화</p>
              <p className="text-gray-500 text-sm">
                "에러코드 E4는 뭔가요?" → 자동 대응 + 해결 가이드
              </p>
            </motion.div>

            {/* 카드 6: 사내 운영 / 직원 지원 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:translate-y-[-4px]"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">🧑‍💼</div>
              <h3 className="text-xl font-semibold text-[#1C2B50] mb-2">사내 운영 / 직원 지원</h3>
              <p className="text-gray-700 font-medium mb-2">HR, IT, 입사자 교육, 규정 안내</p>
              <p className="text-gray-500 text-sm">
                "연차 어떻게 신청하죠?" → 사내 프로세스 안내 제공
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
            반복되는 질문에, 반복해서 답하고 계신가요?
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
            지금, 고객 커뮤니케이션을 혁신하세요
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