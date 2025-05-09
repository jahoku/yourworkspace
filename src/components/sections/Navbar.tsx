'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`font-bold text-xl transition-colors duration-300 ${
              scrolled ? 'text-black hover:text-[#F26222]' : 'text-white hover:text-[#F26222]'
            }`}
          >
            yourworkspace.ai
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#solutions"
              className={`relative transition-colors duration-300 hover:text-[#F26222] ${
                scrolled ? 'text-black' : 'text-white'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F26222] after:transition-all after:duration-300 hover:after:w-full`}
            >
              AutoPageAI
            </Link>
            <Link
              href="#solutions"
              className={`relative transition-colors duration-300 hover:text-[#F26222] ${
                scrolled ? 'text-black' : 'text-white'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F26222] after:transition-all after:duration-300 hover:after:w-full`}
            >
              ConversAI
            </Link>
            <Link
              href="#solutions"
              className={`relative transition-colors duration-300 hover:text-[#F26222] ${
                scrolled ? 'text-black' : 'text-white'
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#F26222] after:transition-all after:duration-300 hover:after:w-full`}
            >
              IdentiVis
            </Link>
            <Button
              asChild
              className="bg-[#F26222] text-white hover:bg-black hover:text-white shadow-md transition-all duration-300"
            >
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled ? 'text-black' : 'text-white'
            }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  )
} 