'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'

const navItems = [
  { name: 'AutoPageAI', href: '/autopageai' },
  { name: 'ConversAI', href: '/conversai' },
  { name: 'IdentiVis', href: '/identivis' },
]

export function SubpageGNB() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add effect for auto-focusing first nav item
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.getElementById("nav-first")?.focus()
    }
  }, [isMobileMenuOpen])

  return (
    <nav className="fixed top-0 w-full z-30 transition-colors duration-300 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pb-3">
          {/* Logo */}
          <div className="flex-shrink-0 pl-4 pt-3">
            <Logo isScrolled={true} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base text-black transition-colors duration-300 hover:text-[#F26222] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#F26222] after:transition-all after:duration-300 after:ease-in-out ${
                  pathname === item.href ? 'font-medium text-[#F26222] after:w-full' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-black text-white hover:bg-[#F26222] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6"
            >
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-[#F26222] transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-white backdrop-blur-md"
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 flex justify-between items-center px-4 pt-3 pb-3 bg-white">
              <div className="pl-4">
                <Logo variant="mobile" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-[#F26222] transition-colors duration-300"
                aria-label="닫기"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  id={index === 0 ? "nav-first" : undefined}
                  tabIndex={index === 0 ? 0 : undefined}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-[#F26222] bg-gray-50'
                      : 'text-gray-700 hover:text-[#F26222] hover:bg-gray-50'
                  } ${index === 0 ? 'focus:underline focus:text-[#F26222] animate-pulse' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full mt-2 bg-black text-white hover:bg-[#F26222] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg rounded-full h-12 text-base"
              >
                <Link href="/contact">문의하기</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 