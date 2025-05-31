'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'

const navItems = [
  { name: 'AutoPageAI', href: '/autopageai' },
  { name: 'ConversAI', href: '/conversai' },
  { name: 'IdentiVis', href: '/identivis' },
]

interface GNBProps {
  isVideoPlaying?: boolean
}

export function GNB({ isVideoPlaying = false }: GNBProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [currentPath, setCurrentPath] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  // pathname 변화 감지 - window.location도 함께 사용
  useEffect(() => {
    setCurrentPath(pathname)
    // 클라이언트 사이드에서 window.location도 확인
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // 스크롤 위치가 100px 이상일 때만 숨김/표시 로직 적용
      if (currentScrollY > 100) {
        // 아래로 스크롤: 숨김
        if (currentScrollY > lastScrollY && isVisible) {
          setIsVisible(false)
        }
        // 위로 스크롤: 표시
        else if (currentScrollY < lastScrollY && !isVisible) {
          setIsVisible(true)
        }
      } else {
        // 상단 근처에서는 항상 표시
        setIsVisible(true)
      }

      // 배경색 변경을 위한 스크롤 감지
      setIsScrolled(currentScrollY > 0)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isVisible])

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
    <nav className={`fixed top-0 w-full z-30 transition-all duration-700 ease-in-out ${
      isScrolled ? "bg-white shadow-sm" : "bg-transparent"
    } ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Main logo area - centered with contact button on right */}
          <div className="flex justify-between items-center pt-4 pb-4">
            {/* Left spacer for balance */}
            <div className="w-24"></div>
            
            {/* Center logo */}
            <Logo isScrolled={isScrolled} />
            
            {/* Right contact button */}
            <Button
              asChild
              className="bg-black text-white hover:bg-[#F26222] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6 text-[16px] font-semibold font-['Pretendard']"
            >
              <Link href="/contact">문의하기</Link>
            </Button>
          </div>
          
          {/* Navigation menu - centered */}
          <div className="flex justify-center items-center pb-0">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = currentPath === item.href
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[16px] font-['Pretendard'] ${
                      isScrolled ? 'text-black' : 'text-white'
                    } transition-all duration-300 hover:font-bold ${
                      isActive ? 'font-bold' : 'font-normal'
                    }`}
                    style={{
                      width: item.name === 'AutoPageAI' ? '90px' : 
                             item.name === 'ConversAI' ? '85px' : 
                             item.name === 'IdentiVis' ? '75px' : 'auto',
                      textAlign: 'center',
                      display: 'inline-block'
                    }}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center h-24 pt-4 pb-4">
          {/* Logo */}
          <div className="flex-shrink-0 pl-1">
            <Logo variant="mobile" isScrolled={isScrolled} />
          </div>

          {/* Mobile menu button */}
          <div className="pr-2 flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-black transition-colors duration-300 mr-6"
              style={{ marginRight: '24px' }}
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
            <div className="sticky top-0 flex justify-between items-center h-24 pt-4 pb-4 bg-white border-b border-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex-shrink-0 pl-1">
                <Logo variant="mobile" />
              </div>
              <div className="pr-2 flex-shrink-0">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-black hover:text-black transition-colors duration-300 mr-6"
                  style={{ marginRight: '24px' }}
                  aria-label="닫기"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-4 pt-12 pb-6 flex flex-col h-full">
              <div className="space-y-6 flex flex-col">
                {navItems.map((item, index) => (
                  <div key={item.href} className="px-4">
                    <Link
                      href={item.href}
                      className={`inline-block py-2 text-[32px] font-semibold font-['Pretendard'] text-black transition-all duration-200 ${
                        pathname === item.href
                          ? 'relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#F26222] after:transition-all after:duration-300'
                          : 'hover:text-[#F26222]'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1"></div>
              <div className="px-4 pb-16 mb-8">
                <Button
                  asChild
                  className="bg-black text-white hover:bg-[#F26222] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-6 py-4 w-[118px] h-[56px] text-[20px] font-semibold font-['Pretendard']"
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