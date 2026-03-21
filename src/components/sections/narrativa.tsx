import { buttonVariants } from '@/components/ui/button-variants'
import { FadeUp } from '@/components/animations/fade-up'
import { cn } from '@/lib/utils'

export function Narrativa() {
  return (
    <section
      id="narrativa"
      className="border-y border-sand bg-cream-light py-[clamp(4rem,8vh,7rem)]"
      aria-labelledby="narrativa-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] items-center md:grid-cols-2">

          {/* Text content */}
          <div>
            <FadeUp>
              <span className="mb-4 inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-orange">
                ✦ Narrativa visual
              </span>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h2
                id="narrativa-heading"
                className="mb-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.12] text-earth"
              >
                Otra forma de<br />contar lo mismo
              </h2>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mb-4 max-w-[560px] text-[1.05rem] leading-[1.7] text-earth-mid">
                Videoclips, piezas de motion y experimentos visuales. No es un archivo del
                pasado — es una línea viva que crece con cada proyecto.
              </p>
              <p className="mb-8 max-w-[560px] text-[0.92rem] leading-[1.7] text-earth-mid">
                La misma mirada que ponemos en el código la ponemos delante de una cámara.
                Ritmo, intención, coherencia.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <a
                href="/#contacto"
                className={cn(buttonVariants({ variant: 'grajo-ghost', size: 'pill' }), 'gap-1 px-0 text-earth hover:text-orange')}
              >
                Ver proyectos →
              </a>
            </FadeUp>
          </div>

          {/* Visual placeholder grid */}
          <div
            className="grid grid-cols-2 gap-4"
            aria-hidden="true"
          >
            <div className="row-span-2 flex aspect-auto items-center justify-center rounded-[var(--radius)] border-[2.5px] border-earth bg-sand text-[2rem] [box-shadow:8px_8px_16px_rgba(61,50,41,0.12),-2px_-2px_8px_rgba(255,253,249,0.7)] min-h-[200px]">
              🎥
            </div>
            <div className="flex aspect-[3/4] items-center justify-center rounded-[var(--radius)] border-[2.5px] border-earth bg-earth [box-shadow:8px_8px_16px_rgba(61,50,41,0.12),-2px_-2px_8px_rgba(255,253,249,0.7)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange text-[1.2rem]">
                ▶
              </div>
            </div>
            <div className="flex aspect-[3/4] items-center justify-center rounded-[var(--radius)] border-[2.5px] border-earth bg-sand text-[2rem] [box-shadow:8px_8px_16px_rgba(61,50,41,0.12),-2px_-2px_8px_rgba(255,253,249,0.7)]">
              🎞️
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
