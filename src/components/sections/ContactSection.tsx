'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            프레임아웃의 AI 솔루션으로 비즈니스의 디지털 혁신을 실현하세요.
            전문 컨설턴트가 최적의 솔루션을 제안해드립니다.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
          >
            <Link href="/contact">문의하기</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 