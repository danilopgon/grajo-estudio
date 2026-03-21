'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { num: 'I', text: 'Creemos en el código con alma.' },
  { num: 'II', text: 'Lo técnico y lo humano se encuentran.' },
  { num: 'III', text: 'Venimos de lo social, lo gráfico y lo narrativo.' },
  { num: 'IV', text: 'Arreglamos lo roto y elevamos lo posible.' },
  { num: 'V', text: 'No distinguimos entre pantalla y lienzo.' },
  { num: 'VI', text: 'Hacemos poco, pero lo hacemos bien.' },
]

export function Manifiesto() {
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLOListElement>(null)
  const featherLeftRef = useRef<HTMLSpanElement>(null)
  const featherRightRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const listEl = listRef.current
    const sectionEl = sectionRef.current
    if (!listEl || !sectionEl) return

    const items = listEl.querySelectorAll<HTMLLIElement>('.manifesto-item')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Items are visible by default (no initial-state classes) — nothing to do
      return
    }

    // Set initial state via GSAP so items only hide when JS/animations run
    gsap.set(items, { opacity: 0, y: 40 })

    items.forEach((item, i) => {
      const num = item.querySelector('.manifesto-num')
      const text = item.querySelector('.manifesto-text')

      const tl = gsap.timeline({
        scrollTrigger: { trigger: item, start: 'top 80%', once: true },
      })

      tl.to(item, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: i * 0.08 })
        .from(num, { scale: 0.5, opacity: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.5')
        .from(text, { x: -20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')

      gsap.fromTo(
        item,
        { borderBottomColor: 'rgba(245,237,227,0)' },
        {
          borderBottomColor: 'rgba(245,237,227,0.1)',
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: item, start: 'top 78%', once: true },
        }
      )
    })

    if (featherLeftRef.current) {
      gsap.to(featherLeftRef.current, {
        y: -60, rotation: -25,
        scrollTrigger: { trigger: sectionEl, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      })
    }
    if (featherRightRef.current) {
      gsap.to(featherRightRef.current, {
        y: 60, rotation: 35,
        scrollTrigger: { trigger: sectionEl, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
      })
    }
  }, [])

  return (
    <section
      id="manifiesto"
      ref={sectionRef}
      className="relative overflow-hidden bg-earth py-[clamp(5rem,12vh,9rem)] text-cream"
      aria-labelledby="manifiesto-heading"
    >
      {/* Radial gradient overlays */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(232,114,74,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(196,149,58,0.06) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Decorative feathers */}
      <span
        ref={featherLeftRef}
        className="pointer-events-none absolute left-[5%] top-[20%] select-none text-[clamp(4rem,8vw,8rem)] opacity-[0.04] rotate-[-15deg]"
        aria-hidden="true"
      >
        🪶
      </span>
      <span
        ref={featherRightRef}
        className="pointer-events-none absolute bottom-[15%] right-[5%] select-none text-[clamp(4rem,8vw,8rem)] opacity-[0.04] rotate-[25deg]"
        aria-hidden="true"
      >
        🪶
      </span>

      <div className="container relative">
        {/* Header */}
        <div className="mb-[clamp(3rem,6vh,5rem)] text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-orange-soft">
            ✦ Manifiesto
          </span>
          <h2
            id="manifiesto-heading"
            className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.12] text-cream"
          >
            En lo que creemos
          </h2>
        </div>

        {/* Items */}
        <ol ref={listRef} className="mx-auto flex max-w-[800px] flex-col gap-0">
          {ITEMS.map(({ num, text }) => (
            <li
              key={num}
              className="manifesto-item flex items-start gap-[clamp(1rem,2vw,2rem)] border-b border-b-[rgba(245,237,227,0)] py-[clamp(1.5rem,3vw,2.5rem)] first:border-t first:border-t-[rgba(245,237,227,0)]"
            >
              <span className="manifesto-num font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-none text-orange opacity-70 transition-opacity duration-400 min-w-12 pt-[0.15em] hover:opacity-100">
                {num}
              </span>
              <span className="manifesto-text font-display text-[clamp(1.2rem,2.5vw,1.85rem)] leading-[1.4] tracking-[-0.01em]">
                {text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
