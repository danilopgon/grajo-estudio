import { Hero } from '@/components/sections/hero'
import { Servicios } from '@/components/sections/servicios'
import { Manifiesto } from '@/components/sections/manifiesto'
import { Narrativa } from '@/components/sections/narrativa'
import { Contacto } from '@/components/sections/contacto'

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Servicios />
      <Manifiesto />
      <Narrativa />
      <Contacto />
    </main>
  )
}
