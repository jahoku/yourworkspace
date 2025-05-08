'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            AI 기반 디지털 혁신 솔루션
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            프레임아웃의 AI 솔루션으로 비즈니스의 미래를 준비하세요
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link href="#solutions">더 알아보기</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 