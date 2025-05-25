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

export function GNB() {
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Add effect for auto-focusing first nav item
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.getElementById("nav-first")?.focus()
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={`fixed top-0 w-full z-30 transition-colors duration-300 ${
      isScrolled ? "bg-white shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pb-3">
          {/* Logo */}
          <div className="flex-shrink-0 pl-4 pt-3">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-base ${
                  isScrolled ? 'text-black' : 'text-white'
                } transition-colors duration-300 hover:text-[#F26222] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#F26222] after:transition-all after:duration-300 after:ease-in-out`}
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
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:text-[#F26222] z-50 relative`}
              aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
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
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 z-40 bg-white backdrop-blur-md overflow-hidden"
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 flex justify-between items-center px-4 pt-3 pb-3 bg-white border-b border-gray-100">
              <div className="pl-4">
                <Logo variant="mobile" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-[#F26222] transition-colors duration-300 p-2"
                aria-label="닫기"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-4 pt-6 pb-3 space-y-2 bg-white h-full overflow-y-auto">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  id={index === 0 ? "nav-first" : undefined}
                  tabIndex={index === 0 ? 0 : undefined}
                  className={`block px-4 py-4 rounded-md text-lg font-medium ${
                    pathname === item.href
                      ? 'text-[#F26222] bg-gray-50'
                      : 'text-gray-700 hover:text-[#F26222] hover:bg-gray-50'
                  } ${index === 0 ? 'focus:underline focus:text-[#F26222] animate-pulse' : ''} transition-all duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full bg-black text-white hover:bg-[#F26222] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg rounded-full h-12 text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href="/contact">문의하기</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 