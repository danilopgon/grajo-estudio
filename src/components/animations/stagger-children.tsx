'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  duration?: number
  childSelector?: string
}

export function StaggerChildren({
  children,
  className,
  stagger = 0.12,
  duration = 0.8,
  childSelector = ':scope > *',
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const children = el.querySelectorAll(childSelector)

    gsap.fromTo(
      children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
          once: true,
        },
      }
    )
  }, [stagger, duration, childSelector])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
