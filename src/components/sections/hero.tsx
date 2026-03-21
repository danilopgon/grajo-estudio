import { buttonVariants } from '@/components/ui/button-variants'
import { FadeUp } from '@/components/animations/fade-up'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      className="flex min-h-[85vh] items-center pt-[clamp(7rem,14vh,10rem)] pb-[clamp(4rem,8vh,7rem)]"
      aria-label="Bienvenida"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-[clamp(2rem,5vw,4rem)] items-center md:grid-cols-2">

          {/* Content */}
          <div>
            <FadeUp>
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-[rgba(232,114,74,0.25)] bg-[rgba(232,114,74,0.1)] px-4 py-[0.45rem] text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-orange">
                <span aria-hidden="true">🪶</span>
                Estudio de desarrollo
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mb-6 font-display text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.02em] text-earth">
                Desarrollo web<br />
                con{' '}
                <em className="not-italic text-orange">alma</em>
              </h1>
            </FadeUp>

            <FadeUp delay={0.16}>
              <p className="mb-8 max-w-[480px] text-[clamp(1rem,1.4vw,1.2rem)] leading-[1.7] text-earth-mid">
                Construimos webs, apps y piezas visuales desde lo técnico y lo humano.
                Con foco en accesibilidad, código limpio y narrativa con intención.
              </p>
            </FadeUp>

            <FadeUp delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <a href="/#servicios" className={cn(buttonVariants({ variant: 'grajo-primary', size: 'pill' }))}>
                  Qué hacemos
                </a>
                <a href="/#manifiesto" className={cn(buttonVariants({ variant: 'grajo-secondary', size: 'pill' }))}>
                  Nuestro manifiesto
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Visual grid — hidden on mobile */}
          <div
            className="hidden md:grid grid-cols-2 grid-rows-2 gap-4"
            aria-hidden="true"
          >
            <div className="row-span-2 rounded-[var(--radius)] border-[2.5px] border-earth bg-sand flex items-center justify-center text-[2.5rem] [box-shadow:8px_8px_16px_rgba(61,50,41,0.12),-2px_-2px_8px_rgba(255,253,249,0.7)]">
              💻
            </div>
            <div className="aspect-square rounded-[var(--radius)] border-[2.5px] border-earth bg-sand flex items-center justify-center text-[2.5rem] [box-shadow:8px_8px_16px_rgba(61,50,41,0.12),-2px_-2px_8px_rgba(255,253,249,0.7)]">
              🎬
            </div>
            <div className="aspect-square rounded-[var(--radius)] border-[2.5px] border-earth bg-orange flex items-center justify-center p-6 text-center [box-shadow:8px_8px_16px_rgba(61,50,41,0.12),-2px_-2px_8px_rgba(255,253,249,0.7)]">
              <span className="font-display text-[1.1rem] leading-[1.4] text-white">
                Código limpio.<br />
                Mirada humana.<br />
                Intención real.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
