'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ITEMS = [
  { num: 'I',   text: 'Antes que rápido, claro.' },
  { num: 'II',  text: 'Lo técnico y lo humano se encuentran.' },
  { num: 'III', text: 'Venimos de lo social, lo gráfico y lo narrativo.' },
  { num: 'IV',  text: 'Arreglamos lo roto y elevamos lo posible.' },
  { num: 'V',   text: 'Código y narrativa son el mismo oficio.' },
  { num: 'VI',  text: 'No competimos por volumen. Competimos por criterio.' },
]

// Each feather: position, size, initial rotation, opacity, parallax config
// Spread evenly across the 3×3 grid of the section (top/mid/bot × left/mid/right)
const FEATHERS = [
  // top-left corner — large, rises fast
  { id: 'f-tl', pos: 'left-[3%]  top-[8%]',     size: 'text-[clamp(5rem,10vw,10rem)]',  rot: '-18deg', opacity: 0.04,  y: -90, rotation: -28, scrub: 1.2 },
  // top-right corner — large faint, sinks slowly
  { id: 'f-tr', pos: 'right-[3%] top-[6%]',      size: 'text-[clamp(4rem,9vw,9rem)]',   rot: '12deg',  opacity: 0.02,  y:  55, rotation:  22, scrub: 3.8 },
  // mid-left — medium, rises mid-speed
  { id: 'f-ml', pos: 'left-[6%]  top-[45%]',     size: 'text-[clamp(3rem,5vw,6rem)]',   rot: '-32deg', opacity: 0.03,  y: -65, rotation:  18, scrub: 2.2 },
  // mid-right — medium, sinks mid-speed
  { id: 'f-mr', pos: 'right-[8%] top-[38%]',     size: 'text-[clamp(3rem,6vw,6.5rem)]', rot: '-20deg', opacity: 0.03,  y:  72, rotation:  30, scrub: 1.6 },
  // mid-centre — small, very faint, sinks slowly
  { id: 'f-mc', pos: 'left-[44%] top-[42%]',     size: 'text-[clamp(2rem,3.5vw,4rem)]', rot: '-6deg',  opacity: 0.018, y:  48, rotation:  14, scrub: 3.2 },
  // bot-left — small, rises slowly
  { id: 'f-bl', pos: 'left-[20%] bottom-[8%]',   size: 'text-[clamp(2.5rem,5vw,5rem)]', rot: '14deg',  opacity: 0.025, y: -42, rotation: -38, scrub: 2.9 },
  // bot-right — medium, sinks fast, strong rotation
  { id: 'f-br', pos: 'right-[18%] bottom-[6%]',  size: 'text-[clamp(3rem,5.5vw,6rem)]', rot: '38deg',  opacity: 0.03,  y:  80, rotation: -44, scrub: 1.4 },
]

export function Manifiesto() {
  const sectionRef  = useRef<HTMLElement>(null)
  const listRef     = useRef<HTMLOListElement>(null)
  const featherRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const listEl    = listRef.current
    const sectionEl = sectionRef.current
    if (!listEl || !sectionEl) return

    const items = listEl.querySelectorAll<HTMLLIElement>('.manifesto-item')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    // Set initial state via GSAP so items only hide when JS runs
    gsap.set(items, { opacity: 0, y: 40 })

    items.forEach((item, i) => {
      const num  = item.querySelector('.manifesto-num')
      const text = item.querySelector('.manifesto-text')

      const tl = gsap.timeline({
        scrollTrigger: { trigger: item, start: 'top 80%', once: true },
      })

      // Use fromTo on children — .from() reads the "natural" opacity from the parent
      // which is 0 (inline style from gsap.set), so it would animate 0→0 invisibly.
      tl.to(item, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: i * 0.08 })
        .fromTo(num,  { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 0.7, duration: 0.6, ease: 'back.out(2)' }, '-=0.5')
        .fromTo(text, { x: -20, opacity: 0 },     { x: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.4')

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

    // Parallax each feather with its own speed + rotation
    featherRefs.current.forEach((el, i) => {
      if (!el) return
      const f = FEATHERS[i]
      gsap.to(el, {
        y: f.y,
        rotation: f.rotation,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: f.scrub,
        },
      })
    })
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

      {/* Decorative feathers — multiple layers at different depths */}
      {FEATHERS.map((f, i) => (
        <span
          key={f.id}
          ref={el => { featherRefs.current[i] = el }}
          className={`pointer-events-none absolute select-none ${f.pos} ${f.size}`}
          style={{ opacity: f.opacity, rotate: f.rot }}
          aria-hidden="true"
        >
          🪶
        </span>
      ))}

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
