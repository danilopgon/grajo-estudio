'use client'

import { useState } from 'react'
import { LogoIcon } from '@/components/icons/logo-icon'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const NAV_LINKS = [
  { href: '/#filosofia', label: 'Filosofía' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#manifiesto', label: 'Manifiesto' },
  { href: '/#estudio', label: 'Estudio' },
  { href: '/#contacto', label: 'Contacto' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="grajo-secondary"
            size="icon"
            aria-label="Abrir menú de navegación"
            className="md:hidden"
          />
        }
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </SheetTrigger>
      <SheetContent side="right" className="bg-cream w-72">
        <SheetHeader>
          <SheetTitle className="text-left flex items-center gap-2">
            <LogoIcon className="h-6 w-auto shrink-0 text-earth" />
            <span className="font-heading text-lg font-bold text-earth">Grajo Estudio</span>
          </SheetTitle>
        </SheetHeader>
        <nav aria-label="Menú móvil" className="mt-8 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-body text-lg font-medium text-earth py-3 border-b border-sand hover:text-orange-accessible transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center h-10 gap-2 rounded-[var(--radius-pill)] px-7 text-[0.95rem] font-semibold tracking-[0.01em] bg-orange text-white border-earth border-[2.5px] [box-shadow:4px_4px_0_var(--earth)] hover:bg-orange-hover hover:translate-x-[2px] hover:translate-y-[2px] hover:[box-shadow:2px_2px_0_var(--earth)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible"
          >
            Hablemos
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
