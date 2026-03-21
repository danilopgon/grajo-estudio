'use client'

import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    let rafCallback: ((time: number) => void) | null = null

    function initLenis() {
      if (lenisRef.current) return

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      lenisRef.current = lenis
      lenis.on('scroll', ScrollTrigger.update)

      rafCallback = (time: number) => lenis.raf(time * 1000)
      gsap.ticker.add(rafCallback)
      gsap.ticker.lagSmoothing(0)
    }

    function destroyLenis() {
      if (!lenisRef.current) return
      lenisRef.current.destroy()
      if (rafCallback) gsap.ticker.remove(rafCallback)
      lenisRef.current = null
      rafCallback = null
    }

    function handleMotionChange(e: MediaQueryListEvent) {
      if (e.matches) destroyLenis()
      else initLenis()
    }

    if (!mq.matches) initLenis()

    mq.addEventListener('change', handleMotionChange)

    return () => {
      mq.removeEventListener('change', handleMotionChange)
      destroyLenis()
    }
  }, [])

  return <>{children}</>
}
