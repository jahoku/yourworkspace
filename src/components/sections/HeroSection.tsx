'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
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

export function HeroSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true)

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('solutions')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadedData={() => setIsVideoLoading(false)}
        onCanPlay={() => setIsVideoLoading(false)}
      >
        <source src="https://jdgzfr6tu34zs94q.public.blob.vercel-storage.com/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Loading Overlay */}
      {isVideoLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative h-10 w-10">
            <div className="absolute inline-flex h-full w-full rounded-full bg-[#F26222] opacity-75 animate-ping" />
            <div className="relative inline-flex rounded-full h-10 w-10 bg-[#F26222]" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white leading-snug text-center max-w-[1080px] mx-auto"
          >
            <span className="block md:hidden">
              마케팅과 디자인을 자동화하는<br />
              <span className="whitespace-nowrap">가장 쉬운 AI 솔루션</span>
            </span>
            <span className="hidden md:inline whitespace-nowrap">
              마케팅과 디자인을 자동화하는 가장 쉬운 AI 솔루션
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white font-medium mt-4"
          >
            <span className="md:hidden">
              콘텐츠 제작, 고객 응대, 디자인까지
              <br />
              <span className="whitespace-nowrap">한 번에 해결하세요.</span>
            </span>
            <span className="hidden md:inline">
              콘텐츠 제작, 고객 응대, 디자인까지 — 한 번에 해결하세요.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <Button
              onClick={scrollToNextSection}
              size="lg"
              className="bg-[#F26222] hover:bg-[#F26222]/90 text-white px-8 py-6 text-lg"
            >
              더 알아보기
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToNextSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-10 flex justify-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 