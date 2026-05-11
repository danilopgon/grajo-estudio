import { Hero }             from '@/components/sections/hero'
import { Filosofia }        from '@/components/sections/filosofia'
import { Servicios }        from '@/components/sections/servicios'
import { Manifiesto }       from '@/components/sections/manifiesto'
import { Proyectos }        from '@/components/sections/proyectos'
import { Rescate }          from '@/components/sections/rescate'
import { AccesibilidadEaa } from '@/components/sections/accesibilidad-eaa'
import { Estudio }          from '@/components/sections/estudio'
import { Contacto }         from '@/components/sections/contacto'

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Filosofia />
      <Servicios />
      <Manifiesto />
      <Proyectos />
      <Rescate />
      <AccesibilidadEaa />
      <Estudio />
      <Contacto />
    </main>
  )
}
