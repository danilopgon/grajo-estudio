import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const MOCKS = [
  { id: 'cultura',       tag: 'Web · Cultura',  title: 'Festival visual independiente', meta: '2025 · Next.js + Sanity' },
  { id: 'fintech',       tag: 'Rescate',         title: 'Refactor de MVP fintech',       meta: '2025 · Angular legacy' },
  { id: 'accesibilidad', tag: 'Accesibilidad',   title: 'Auditoría EAA — sector público',meta: '2025 · WCAG 2.2 AA' },
]

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="bg-cream-light py-[clamp(4rem,9vh,7rem)]"
      aria-labelledby="proyectos-heading"
    >
      <div className="container">
        <FadeUp className="mb-10">
          <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            Proyectos
          </span>
          <h2
            id="proyectos-heading"
            className="mt-4 font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-earth"
          >
            Algunas piezas recientes.
          </h2>
        </FadeUp>

        <StaggerChildren className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {MOCKS.map((m, i) => (
            <div key={m.id} className="flex flex-col">
              {/* Placeholder thumbnail with clay frame */}
              <div
                className="relative mb-[14px] overflow-hidden rounded-[var(--radius)] border-[2.5px] border-earth bg-sand shadow-[8px_8px_0_var(--earth)]"
                style={{ aspectRatio: '4/3' }}
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: 'linear-gradient(135deg, var(--orange-soft) 0%, transparent 70%)' }}
                />
                <span className="absolute bottom-[14px] left-[14px] font-display text-[2.25rem] leading-none text-earth opacity-50">
                  0{i + 1}
                </span>
              </div>
              {/* Tag pill */}
              <span className="mb-2 inline-block self-start rounded-full border border-sand px-[14px] py-1.5 text-[0.69rem] font-semibold text-earth-mid">
                {m.tag}
              </span>
              <h3 className="mt-2 font-heading text-[1.125rem] font-bold leading-[1.3] tracking-[-0.01em] text-earth">
                {m.title}
              </h3>
              <p className="mt-1 text-[0.78rem] leading-[1.5] text-earth-mid">{m.meta}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
