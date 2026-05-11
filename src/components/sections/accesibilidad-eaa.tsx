import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const SUBCARDS = [
  { id: 'auditorias',     t: 'Auditorías WCAG 2.2',    d: 'Diagnóstico completo con priorización.' },
  { id: 'remediacion',    t: 'Remediación técnica',    d: 'Implementamos los arreglos en tu base de código.' },
  { id: 'acompanamiento', t: 'Acompañamiento mensual', d: 'Para mantener el cumplimiento vivo.' },
]

export function AccesibilidadEaa() {
  return (
    <section
      id="accesibilidad"
      className="py-[clamp(4rem,9vh,7rem)]"
      aria-labelledby="accesibilidad-heading"
    >
      <div className="container">
        <FadeUp className="mx-auto mb-12 max-w-[760px] text-center">
          <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            Accesibilidad digital
          </span>

          <h2
            id="accesibilidad-heading"
            className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-earth"
          >
            Auditamos e implementamos<br className="hidden sm:block" /> en el mismo equipo, sobre el mismo código.
          </h2>

          <p className="mt-4 text-[1rem] leading-[1.7] text-earth-mid">
            Sin pasarte un PDF y un teléfono que no contesta. La{' '}
            <strong className="font-semibold text-earth">European Accessibility Act</strong>{' '}
            está en vigor desde junio de 2025 — y cumplir no tiene que ser un proyecto aparte.
          </p>

          <div className="mt-8 inline-flex flex-col items-center gap-1.5 rounded-[var(--radius)] border border-sand bg-cream-light px-8 py-5">
            <span
              className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.9] text-orange-accessible"
              aria-label="Un millón de euros"
            >
              1.000.000 €
            </span>
            <span className="text-[0.78rem] font-medium uppercase tracking-[0.06em] text-earth-mid">
              sanción máxima por incumplimiento
            </span>
          </div>
        </FadeUp>

        <StaggerChildren className="mx-auto grid max-w-[900px] gap-[18px] sm:grid-cols-3">
          {SUBCARDS.map((it) => (
            <div
              key={it.id}
              className="flex flex-col gap-1.5 rounded-[var(--radius)] border-[2.5px] border-earth bg-cream-light p-[20px_22px] shadow-[8px_8px_0_var(--earth)]"
            >
              <h3 className="font-heading text-[1.0625rem] font-bold leading-[1.2] text-earth">
                {it.t}
              </h3>
              <p className="text-[0.8125rem] leading-[1.7] text-earth-mid">{it.d}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
