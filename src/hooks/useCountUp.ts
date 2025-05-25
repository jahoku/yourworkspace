'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseCountUpProps {
  target: number
  duration?: number
  startOnView?: boolean
}

export function useCountUp({ target, duration = 2000, startOnView = true }: UseCountUpProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (!startOnView || inView) {
      let startTime: number | null = null
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(target * easeOutQuart))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [target, duration, inView, startOnView])

  return startOnView ? { count, ref } : { count, ref: null }
} 