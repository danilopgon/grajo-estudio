import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const ITEMS = [
  {
    id: 'claridad',
    n: '01',
    t: 'Claridad',
    d: 'Antes de escribir una línea de código, entendemos qué se está construyendo y por qué.',
  },
  {
    id: 'mantenibilidad',
    n: '02',
    t: 'Mantenibilidad',
    d: 'El mejor proyecto es el que puede crecer sin romperse. Y sin depender de nosotros para siempre.',
  },
  {
    id: 'accesibilidad',
    n: '03',
    t: 'Accesibilidad',
    d: 'No es un extra. Es parte de hacerlo bien — y la base sobre la que se construye lo demás.',
  },
]

export function Filosofia() {
  return (
    <section
      id="filosofia"
      className="bg-cream-light py-[clamp(4rem,9vh,7rem)]"
      aria-labelledby="filosofia-heading"
    >
      <div className="container">
        <FadeUp className="mx-auto mb-14 max-w-[720px] text-center">
          <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            Cómo pensamos
          </span>
          <h2
            id="filosofia-heading"
            className="mt-[18px] font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] tracking-[-0.02em] text-earth"
          >
            La mayoría de proyectos digitales<br />
            no necesitan más ruido.<br />
            Necesitan <em className="not-italic text-orange-accessible">claridad</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-[580px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-earth-mid">
            Construimos con lo que va a durar: código mantenible, accesibilidad desde el inicio,
            sistemas que el cliente puede evolucionar sin depender de nosotros para siempre.
          </p>
        </FadeUp>

        <StaggerChildren className="mx-auto grid max-w-[900px] gap-6 sm:grid-cols-3">
          {ITEMS.map((it) => (
            <div key={it.id} className="flex flex-col gap-2">
              <span
                className="font-display text-[1.75rem] leading-none text-orange-accessible"
                aria-hidden="true"
              >
                {it.n}
              </span>
              <h3 className="font-heading text-[1.25rem] font-bold leading-[1.2] tracking-[-0.005em] text-earth">
                {it.t}
              </h3>
              <p className="text-[0.95rem] leading-[1.7] text-earth-mid">{it.d}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
