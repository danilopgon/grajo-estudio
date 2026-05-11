import { buttonVariants } from '@/components/ui/button-variants'
import { FadeUp } from '@/components/animations/fade-up'
import { cn } from '@/lib/utils'

const SINTOMAS = [
  'El proyecto tarda semanas en desplegarse.',
  'Nadie sabe qué hace la mitad del código.',
  'Añadir una feature rompe otras tres.',
  'El MVP se convirtió en un Frankenstein.',
]

export function Rescate() {
  return (
    <section
      id="rescate"
      className="relative overflow-hidden bg-earth py-[clamp(4rem,9vh,7rem)] text-cream"
      aria-labelledby="rescate-heading"
      style={{ borderTop: '1px solid rgba(245,237,227,0.08)' }}
    >
      {/* Decorative feathers */}
      <div
        className="pointer-events-none absolute top-[60px] right-[8%] select-none text-[11.25rem] opacity-[0.04]"
        style={{ transform: 'rotate(-18deg)' }}
        aria-hidden="true"
      >
        🪶
      </div>
      <div
        className="pointer-events-none absolute bottom-[80px] left-[10%] select-none text-[6.875rem] opacity-[0.03]"
        style={{ transform: 'rotate(22deg)' }}
        aria-hidden="true"
      >
        🪶
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[1.1fr_0.9fr]">

          {/* Left: text + CTAs */}
          <FadeUp className="flex flex-col gap-[22px]">
            <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
              Servicio diferencial
            </span>
            <h2
              id="rescate-heading"
              className="font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-cream"
            >
              No todo proyecto<br />
              roto necesita{' '}
              <em className="not-italic text-orange-soft">tirarse</em>.
            </h2>
            <p className="max-w-[480px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-cream/70">
              Algunos solo necesitan estructura, criterio y dirección. Recuperamos frontends
              legacy, MVPs sin arquitectura y código generado con IA que nadie sabe ya cómo
              mantener.
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-[18px]">
              <a
                href="#contacto"
                className={cn(buttonVariants({ variant: 'grajo-primary', size: 'pill' }))}
              >
                Cuéntanos qué pasa
              </a>
              <a
                href="#contacto"
                className="font-body text-[0.9375rem] font-medium text-cream underline underline-offset-4 transition-colors hover:text-orange-soft"
              >
                Ver método →
              </a>
            </div>
          </FadeUp>

          {/* Right: symptoms card */}
          <FadeUp delay={0.12}>
            <div className="flex flex-col gap-[14px] rounded-2xl border border-cream/[0.12] bg-white/[0.04] p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[0.69rem] font-bold uppercase tracking-[0.12em] text-orange-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                  Síntomas
                </span>
                <span className="font-display text-[0.875rem] italic text-cream/40">
                  4 de 4 = llámanos
                </span>
              </div>
              <ul className="m-0 list-none p-0">
                {SINTOMAS.map((s, i) => (
                  <li
                    key={s}
                    className={cn(
                      'grid grid-cols-[32px_1fr] items-baseline gap-3 py-[14px] text-[0.875rem] leading-[1.4] text-cream/[0.88]',
                      i < SINTOMAS.length - 1 && 'border-b border-cream/[0.08]'
                    )}
                  >
                    <span
                      className="font-display text-[1.25rem] italic leading-none text-orange-soft"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-cream/[0.12] pt-[14px] font-display text-[1.25rem] italic text-orange-soft">
                → Lo ordenamos.
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
