'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-[#1C2B50]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto space-y-4"
        >
          <h2 className="text-4xl font-bold text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg text-white/80">
            생성형 AI와 디지털 경험의 가능성을 함께 설계해보세요.
            <br />
            전문 컨설턴트가 가장 적합한 방향을 제안해드립니다.
          </p>
          <Button
            asChild
            size="lg"
            className="inline-flex items-center justify-center px-6 py-3 max-w-[280px] rounded-full bg-[#FF6B1A] hover:bg-[#E95E0D] text-white text-base font-semibold transition-all duration-300"
          >
            <Link href="#">
              <MessageCircle className="w-5 h-5 mr-2" />
              ConversAI로 상담 시작하기
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 