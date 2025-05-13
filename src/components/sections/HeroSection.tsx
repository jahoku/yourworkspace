'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
<<<<<<< HEAD
import Link from 'next/link'
import { Navbar } from './Navbar'
import { ChevronDown } from 'lucide-react'

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
=======
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
>>>>>>> 9069228938cde4646008770f5d52bcc6ddfe3e3e
}

export function HeroSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true)

<<<<<<< HEAD
  const scrollToSolutions = () => {
    const element = document.getElementById('solutions')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
=======
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('solutions')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
>>>>>>> 9069228938cde4646008770f5d52bcc6ddfe3e3e
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadedData={() => setIsVideoLoading(false)}
<<<<<<< HEAD
=======
        onCanPlay={() => setIsVideoLoading(false)}
>>>>>>> 9069228938cde4646008770f5d52bcc6ddfe3e3e
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

<<<<<<< HEAD
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
=======
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
>>>>>>> 9069228938cde4646008770f5d52bcc6ddfe3e3e
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
<<<<<<< HEAD
            onClick={scrollToSolutions}
            className="mt-10 text-white/80 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.button>
        </div>
=======
            onClick={scrollToNextSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-10 flex justify-center text-white/80 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </motion.button>
        </motion.div>
>>>>>>> 9069228938cde4646008770f5d52bcc6ddfe3e3e
      </div>
    </section>
  )
} 