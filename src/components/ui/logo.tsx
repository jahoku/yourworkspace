import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'desktop' | 'mobile'
  isScrolled?: boolean
  className?: string
}

export function Logo({ variant = 'desktop', isScrolled = false, className }: LogoProps) {
  const isMobile = variant === 'mobile'
  
  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      <Link href="/" className="flex flex-col items-center group">
        <span className={cn(
          "font-bold transition-colors duration-300 leading-none",
          isMobile ? "text-xl text-[#F26222] group-hover:text-black" : "text-2xl md:text-3xl text-[#F26222] group-hover:text-black"
        )}>
          AXC
        </span>
        <span className={cn(
          "transition-colors duration-300 leading-none -mt-1",
          isMobile ? "text-sm text-[#F26222] group-hover:text-black" : "text-base md:text-lg text-[#F26222] group-hover:text-black"
        )}>
          (AI eXperience Center)
        </span>
        <div className="flex flex-col items-center mt-1">
          <span className={cn(
            "transition-colors duration-300",
            isMobile ? "text-xs text-gray-500" : "text-xs",
            isMobile ? "" : isScrolled ? "text-gray-500" : "text-gray-400"
          )}>
            powered by
          </span>
          <span className={cn(
            "font-medium transition-colors duration-300",
            isMobile ? "text-xs text-black" : "text-sm",
            isMobile ? "" : isScrolled ? "text-black" : "text-white"
          )}>
            frameout
          </span>
        </div>
      </Link>
    </div>
  )
} 