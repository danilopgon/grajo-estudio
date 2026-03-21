import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const SERVICIOS = [
  {
    id: 'desarrollo',
    num: '01',
    title: 'Desarrollo web y app',
    description:
      'Webs y aplicaciones con tecnologías modernas — Angular, React, Next.js. Código mantenible, escalable y pensado para durar.',
    tags: ['Frontend', 'Fullstack'],
  },
  {
    id: 'accesibilidad',
    num: '02',
    title: 'Accesibilidad digital',
    description:
      'Auditorías, consultoría y acompañamiento. La accesibilidad no es un parche: es la base desde la que diseñamos y desarrollamos.',
    tags: ['WCAG', 'Inclusión'],
  },
  {
    id: 'rescate',
    num: '03',
    title: 'Rescate de código',
    description:
      'Refactorizamos apps rotas, mal planteadas o generadas con IA sin criterio. Convertimos prototipos en productos reales.',
    tags: ['Refactor', 'IA rescue'],
  },
  {
    id: 'narrativa',
    num: '04',
    title: 'Narrativa visual',
    description:
      'Videoclips, motion y piezas audiovisuales. La misma filosofía que aplicamos al código: intención, ritmo y coherencia.',
    tags: ['Videoclip', 'Motion'],
  },
]

export function Servicios() {
  return (
    <section id="servicios" className="py-[clamp(4rem,8vh,7rem)]">
      <div className="container">
        <FadeUp>
          <span className="mb-4 inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-orange">
            ✦ Lo que hacemos
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2 className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] text-earth">
            Cuatro formas<br />de hacer bien las cosas
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="mb-12 max-w-[560px] text-[1.05rem] leading-[1.7] text-earth-mid">
            No hacemos de todo. Hacemos esto, y lo hacemos con criterio.
          </p>
        </FadeUp>

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {SERVICIOS.map((servicio) => (
            <Card key={servicio.id} className="relative overflow-hidden">
              <CardContent className="flex flex-col gap-3 p-[clamp(1.5rem,3vw,2.5rem)]">
                <span
                  className="font-display text-[3.5rem] leading-none text-sand transition-colors duration-300 group-hover/card:text-orange-soft"
                  aria-hidden="true"
                >
                  {servicio.num}
                </span>
                <h3 className="font-heading text-[1.25rem] font-bold text-earth">
                  {servicio.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.65] text-earth-mid">
                  {servicio.description}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {servicio.tags.map((tag) => (
                    <Badge key={tag} variant="accent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
