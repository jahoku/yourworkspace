'use client'

import { useState, useEffect } from 'react'
import { motion, Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const scrollIconVariants: Variants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
}

const dotVariants: Variants = {
  animate: {
    y: [0, 16, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 0.5,
    },
  },
}

interface HeroSectionProps {
  onVideoStateChange?: (isPlaying: boolean) => void
}

export function HeroSection({ onVideoStateChange }: HeroSectionProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videoError, setVideoError] = useState(false)
  
  const messages = ['Loading IX : Intelligent eXperience...']
  const currentMessage = messages[Math.floor(currentIndex / 100) % messages.length]

  useEffect(() => {
    if (!isVideoLoading) return
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1)
      const messageIndex = Math.floor(currentIndex / 100) % messages.length
      const charIndex = (currentIndex % 100) % (messages[messageIndex].length + 20)
      
      if (charIndex <= messages[messageIndex].length) {
        setDisplayText(messages[messageIndex].slice(0, charIndex))
      } else {
        setDisplayText(messages[messageIndex])
      }
    }, 80)

    return () => clearInterval(timer)
  }, [currentIndex, isVideoLoading])

  // 최대 로딩 시간 설정 (개발 환경에서는 1초, 프로덕션에서는 3초로 단축)
  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development'
    const maxLoadingTime = isDevelopment ? 1000 : 3000
    
    const maxLoadingTimer = setTimeout(() => {
      if (isVideoLoading) {
        console.log('Video loading timeout, proceeding with fallback')
        setIsVideoLoading(false)
        onVideoStateChange?.(false)
      }
    }, maxLoadingTime)

    return () => clearTimeout(maxLoadingTimer)
  }, [isVideoLoading, onVideoStateChange])

  // 개발 환경에서 빠른 스킵을 위한 키보드 이벤트
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        setIsVideoLoading(false)
        onVideoStateChange?.(false)
      }
    }

    if (isVideoLoading) {
      window.addEventListener('keydown', handleKeyPress)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isVideoLoading, onVideoStateChange])

  const handleVideoLoad = () => {
    console.log('Video loaded successfully')
    setIsVideoLoading(false)
    onVideoStateChange?.(true)
  }

  const handleVideoError = () => {
    console.log('Video failed to load, proceeding with fallback')
    setVideoError(true)
    setIsVideoLoading(false)
    onVideoStateChange?.(false)
  }

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('solutions')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen lg:h-[900px] overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onError={handleVideoError}
          onLoadStart={() => console.log('Video loading started')}
          onPlay={() => console.log('Video started playing')}
          onPause={() => console.log('Video paused')}
          onWaiting={() => console.log('Video waiting for data')}
          onStalled={() => console.log('Video stalled')}
        >
          <source src="https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback Background - 단순한 회색 배경 */}
      {videoError && (
        <div className="absolute inset-0 bg-gray-800 z-0" />
      )}

      {/* Dark Overlay - 원래대로 복원 */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Loading Overlay */}
      {isVideoLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <img
                src="/logos/frameout_ci.png"
                alt="Frameout CI"
                className="h-8 sm:h-12 object-contain"
                style={{
                  animation: 'breathe 2s ease-in-out infinite'
                }}
                onError={(e) => {
                  console.log('Logo image failed to load')
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            <div className="relative flex items-center text-white text-xs sm:text-sm font-light px-4">
              <span className="inline-block min-w-[200px] sm:min-w-[280px] text-left pl-4 sm:pl-8">
                {displayText}
              </span>
              <span 
                className="ml-1 text-white animate-pulse"
              >
                |
              </span>
            </div>
            {/* Skip instruction */}
            <div className="absolute bottom-8 text-white/60 text-xs text-center">
              <p>Press ESC or SPACE to skip</p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[40%] sm:pt-[35%] md:pt-[38%] lg:pt-[375px]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-tight text-center max-w-[95%] sm:max-w-[90%] lg:max-w-none mx-auto"
            style={{ 
              fontFamily: 'Pretendard',
              fontWeight: 700,
              letterSpacing: '-0.6px sm:-0.8px md:-1px lg:-1.44px',
              lineHeight: '1.2'
            }}
          >
            <span className="block lg:hidden">
              마케팅과 디자인을 자동화하는<br />
              가장 쉬운 AI 솔루션
            </span>
            <span className="hidden lg:inline whitespace-nowrap">
              마케팅과 디자인을 자동화하는 가장 쉬운 AI 솔루션
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-white font-normal mt-3 sm:mt-4 lg:mt-6 max-w-[95%] sm:max-w-[80%] lg:max-w-[637px] mx-auto"
            style={{
              fontFamily: 'Pretendard',
              fontWeight: 400,
              letterSpacing: '0px',
              lineHeight: '1.3'
            }}
          >
            <span className="block lg:hidden">
              콘텐츠 제작, 고객 응대, 디자인까지<br />
              한 번에 해결하세요.
            </span>
            <span className="hidden lg:inline">
              콘텐츠 제작, 고객 응대, 디자인까지 — 한 번에 해결하세요.
            </span>
          </motion.p>
        </motion.div>
      </div>
      
      {/* Mouse Scroll Icon - 별도 위치 */}
      <motion.button
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-20 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-30 flex justify-center text-white/80 hover:text-white transition-colors duration-300 cursor-pointer"
      >
        <motion.div 
          variants={scrollIconVariants}
          animate="animate"
          className="relative w-[28px] h-[42px] sm:w-[37px] sm:h-[56px]"
        >
          {/* Mouse Shape */}
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 37 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0"
          >
            <rect
              x="1"
              y="1"
              width="35"
              height="54"
              rx="17.5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          
          {/* Animated Dot */}
          <motion.div
            variants={dotVariants}
            animate="animate"
            className="absolute left-1/2 top-[12px] transform -translate-x-1/2 w-1.5 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.button>
    </section>
  )
} 