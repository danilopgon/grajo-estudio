import { buttonVariants } from '@/components/ui/button-variants'
import { FadeUp } from '@/components/animations/fade-up'
import { cn } from '@/lib/utils'

const SERVICES_PREVIEW = [
  { n: '01', t: 'Producto digital',   d: 'Web, app y frontend que dura.' },
  { n: '02', t: 'Accesibilidad',      d: 'WCAG 2.2 AA · EAA · auditorías.' },
  { n: '03', t: 'Diseño & UX',        d: 'Sistemas visuales y dirección.' },
  { n: '04', t: 'Narrativa visual',   d: 'Motion, videoclip, dirección.' },
  { n: '05', t: 'Rescate técnico',    d: 'Refactor, MVPs y código IA.' },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[clamp(7rem,14vh,10rem)] pb-[clamp(4rem,9vh,7rem)]"
      aria-label="Bienvenida"
    >
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -top-[120px] -right-[100px] h-[420px] w-[420px] rounded-full bg-orange-soft opacity-[0.08] blur-[60px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-[80px] -left-[60px] h-[280px] w-[280px] rounded-full bg-[var(--ochre)] opacity-[0.05] blur-[50px]"
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid grid-cols-1 items-center gap-[clamp(2rem,5vw,4rem)] md:grid-cols-[1.4fr_1fr]">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            <FadeUp>
              <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                Estudio · Cuenca · desde 2024
              </span>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[1.03] tracking-[-0.02em] text-earth">
                Desarrollo web<br />
                con{' '}
                <em className="not-italic text-orange-accessible">alma</em>.
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="max-w-[480px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-earth-mid">
                Construimos productos digitales claros, sólidos y humanos.
                Código que dura, accesibilidad desde el inicio, narrativa con intención.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="flex flex-wrap items-center gap-[18px]">
                <a
                  href="#servicios"
                  className={cn(buttonVariants({ variant: 'grajo-primary', size: 'pill' }))}
                >
                  Qué hacemos
                </a>
                <a
                  href="#filosofia"
                  className={cn(buttonVariants({ variant: 'grajo-ghost', size: 'pill' }))}
                >
                  Cómo pensamos →
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right column */}
          <FadeUp delay={0.12} className="flex flex-col gap-[14px]">
            {/* Feature card — dark bg with service list */}
            <div className="relative overflow-hidden rounded-[20px] bg-earth p-[24px_26px] text-cream">
              {/* Watermark "g" */}
              <div
                className="pointer-events-none absolute -top-5 -right-2.5 select-none font-display text-[11rem] leading-none italic text-orange opacity-[0.18]"
                aria-hidden="true"
              >
                g
              </div>
              <span className="relative mb-3 inline-flex items-center gap-2 text-[0.69rem] font-bold uppercase tracking-[0.12em] text-orange-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                Lo que hacemos
              </span>
              <ul className="relative m-0 list-none p-0">
                {SERVICES_PREVIEW.map((s, i) => (
                  <li
                    key={s.n}
                    className={cn(
                      'grid grid-cols-[34px_1fr] items-baseline gap-3 py-[11px]',
                      i < SERVICES_PREVIEW.length - 1 && 'border-b border-cream/[0.08]'
                    )}
                  >
                    <span
                      className="font-display text-[1.125rem] leading-none italic text-orange-soft"
                      aria-hidden="true"
                    >
                      {s.n}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-heading text-[0.875rem] font-semibold leading-tight tracking-[-0.005em] text-cream">
                        {s.t}
                      </span>
                      <span className="font-body text-[0.75rem] leading-[1.45] text-cream/55">
                        {s.d}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Micro-stats */}
            <div className="grid grid-cols-2 gap-[14px]">
              <div className="flex flex-col gap-1 rounded-[14px] border border-sand p-[14px_16px]">
                <span className="font-display text-[2rem] leading-none text-orange-accessible">2</span>
                <span className="text-[0.72rem] leading-[1.4] text-earth-mid">perfiles. Una forma.</span>
              </div>
              <div className="flex flex-col gap-1 rounded-[14px] border border-sand p-[14px_16px]">
                <span className="font-display text-[1.625rem] leading-none text-orange-accessible">WCAG</span>
                <span className="text-[0.72rem] leading-[1.4] text-earth-mid">2.2 AA desde día 1</span>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
