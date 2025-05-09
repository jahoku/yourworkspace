'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from './Navbar'
import { ChevronDown } from 'lucide-react'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

export function HeroSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true)

  const scrollToSolutions = () => {
    const element = document.getElementById('solutions')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadedData={() => setIsVideoLoading(false)}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Loading State */}
      {isVideoLoading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar />
      </motion.div>

      {/* Centered Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            마케팅과 디자인을 자동화하는 가장 쉬운 AI 솔루션
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            className="text-base md:text-lg text-white/80 mt-4"
          >
            콘텐츠 제작, 고객 응대, 디자인까지 — 하나의 AI로 빠르게 처리하세요
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="mt-6"
          >
            <Button
              asChild
              size="lg"
              className="px-6 py-3 bg-[#F26222] text-white rounded-md shadow-lg hover:bg-[#d8511a] transition-all duration-300"
              onClick={scrollToSolutions}
            >
              <Link href="#solutions">솔루션 살펴보기</Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToSolutions}
            className="mt-10 text-white/80 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  )
} 