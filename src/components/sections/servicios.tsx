import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const SERVICIOS = [
  {
    id: 'productos',
    n: '01',
    t: 'Productos digitales',
    d: 'Webs, aplicaciones y frontends modernos construidos para durar. Sin atajos que compliquen el futuro.',
    items: ['Next.js / React / Angular', 'TypeScript', 'Node.js / NestJS', 'Supabase'],
  },
  {
    id: 'accesibilidad',
    n: '02',
    t: 'Accesibilidad & UX',
    d: 'Auditorías, implementación técnica y acompañamiento. La EAA ya está en vigor — te ayudamos a cumplir y a hacerlo bien.',
    items: ['Auditorías WCAG 2.2', 'Consultoría EAA', 'Remediación técnica', 'Acompañamiento'],
  },
  {
    id: 'narrativa',
    n: '04',
    t: 'Narrativa visual',
    d: 'Videoclips, motion y piezas audiovisuales. La misma mirada que el código: ritmo, intención, coherencia.',
    items: ['Videoclip', 'Motion graphics', 'Dirección visual', 'Sistemas en movimiento'],
  },
]

export function Servicios() {
  return (
    <section
      id="servicios"
      className="py-[clamp(4rem,9vh,7rem)]"
      aria-labelledby="servicios-heading"
    >
      <div className="container">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <FadeUp>
              <span className="mb-4 inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                Lo que hacemos
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2
                id="servicios-heading"
                className="mt-4 max-w-[540px] font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-earth"
              >
                Tres formas<br />de hacer bien las cosas.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.16}>
            <p className="max-w-[320px] text-[0.875rem] leading-[1.7] text-earth-mid">
              No hacemos de todo. Hacemos esto, y lo hacemos con criterio.
            </p>
          </FadeUp>
        </div>

        <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s) => (
            <div
              key={s.id}
              className="flex flex-col gap-3 rounded-[var(--radius)] border-[2.5px] border-earth bg-cream-light p-[24px_26px] shadow-[8px_8px_0_var(--earth)]"
            >
              <span className="font-heading text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-orange-accessible">
                {s.n} —
              </span>
              <h3 className="font-display text-[1.5rem] leading-[1.2] tracking-[-0.01em] text-earth">
                {s.t}
              </h3>
              <p className="text-[0.875rem] leading-[1.7] text-earth-mid">{s.d}</p>
              <ul className="mt-1.5 flex flex-wrap gap-x-3.5 gap-y-1 p-0 text-[0.78rem] text-earth-mid">
                {s.items.map((item) => (
                  <li key={item} className="list-none">· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
