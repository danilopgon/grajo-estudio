'use client'

import { useEffect, useState } from 'react'
import { buttonVariants } from '@/components/ui/button-variants'
import { cn } from '@/lib/utils'

export function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('top')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      href="#contacto"
      aria-label="Ir al formulario de contacto"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        buttonVariants({ variant: 'grajo-primary', size: 'pill' }),
        'fixed bottom-6 right-6 z-40 motion-safe:transition-all motion-safe:duration-300',
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      )}
    >
      Hablemos →
    </a>
  )
}
