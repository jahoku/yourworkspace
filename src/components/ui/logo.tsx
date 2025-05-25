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
    <div className={cn("flex flex-col items-start justify-center", className)}>
      <Link href="/" className="flex flex-col items-start">
        <span className={cn(
          "font-bold leading-tight transition-colors duration-300",
          isMobile ? "text-xl text-black" : "text-xl md:text-2xl",
          !isMobile && (isScrolled ? "text-black" : "text-white"),
          !isMobile && "hover:text-[#F26222]"
        )}>
          IXAgent
        </span>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-xs text-muted-foreground">powered by</span>
          <img
            src="/logos/frameout_ci_black.png"
            alt="Frameout CI"
            className="h-3 object-contain"
          />
        </div>
      </Link>
    </div>
  )
} 