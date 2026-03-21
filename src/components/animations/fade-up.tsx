'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface FadeUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeUp({ children, className, delay = 0, duration = 0.9 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Reveal immediately without animation
      el.style.opacity = '1'
      return
    }

    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
      }
    )
  }, [delay, duration])

  // Initial opacity hidden via inline style — GSAP or reduced-motion handler reveals it
  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  )
}
