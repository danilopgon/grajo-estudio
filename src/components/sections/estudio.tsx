import { FadeUp } from '@/components/animations/fade-up'
import { StaggerChildren } from '@/components/animations/stagger-children'

const PERFILES = [
  {
    id: 'maria',
    name: 'María',
    role: 'Accesibilidad · Frontend · UX',
    bio: 'Background en trabajo social y diseño gráfico. Especializada en accesibilidad digital y experiencia de usuario.',
    tags: ['WCAG', 'React', 'Figma'],
  },
  {
    id: 'dani',
    name: 'Dani',
    role: 'Desarrollo · Producto · Narrativa',
    bio: 'Background en comunicación y narrativas transmedia. Desarrollador frontend/fullstack con ojo en el producto.',
    tags: ['Next.js', 'TypeScript', 'Node.js'],
  },
]

export function Estudio() {
  return (
    <section
      id="estudio"
      className="bg-cream-light py-[clamp(4rem,9vh,7rem)]"
      aria-labelledby="estudio-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-[clamp(2rem,5vw,4rem)] md:grid-cols-2">

          {/* Left */}
          <FadeUp className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-orange-accessible">
              <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
              El estudio
            </span>
            <h2
              id="estudio-heading"
              className="font-display text-[clamp(2.2rem,4.6vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-earth"
            >
              Dos perfiles.<br />
              Una forma de entender<br />
              los proyectos.
            </h2>
            <p className="max-w-[460px] text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.7] text-earth-mid">
              Somos María y Dani. Trabajamos desde Cuenca en proyectos donde el código,
              el diseño y la experiencia de usuario tienen que convivir bien.
            </p>
            <p className="max-w-[460px] text-[0.95rem] leading-[1.7] text-earth-mid">
              Sin equipos de 20 personas. Sin capas de gestión. Solo dos personas
              que entienden el proyecto de principio a fin.
            </p>
          </FadeUp>

          {/* Right: clay profile cards */}
          <StaggerChildren className="flex flex-col gap-[18px]">
            {PERFILES.map((p) => (
              <div
                key={p.id}
                className="flex flex-col gap-2.5 rounded-[var(--radius)] border-[2.5px] border-earth bg-cream-light p-[24px_26px] shadow-[8px_8px_0_var(--earth)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3.5">
                  <h3 className="font-heading text-[1.375rem] font-bold tracking-[-0.01em] text-earth">
                    {p.name}
                  </h3>
                  <span className="font-body text-[0.75rem] font-semibold uppercase tracking-[0.04em] text-orange-accessible">
                    {p.role}
                  </span>
                </div>
                <p className="text-[0.84rem] leading-[1.65] text-earth-mid">{p.bio}</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[rgba(232,114,74,0.12)] px-3.5 py-1.5 text-[0.69rem] font-semibold text-orange-accessible"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </StaggerChildren>

        </div>
      </div>
    </section>
  )
}
