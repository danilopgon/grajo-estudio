import Link from 'next/link'
import { LogoIcon } from '@/components/icons/logo-icon'
import { buttonVariants } from '@/components/ui/button-variants'
import { MobileNav } from './mobile-nav'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/#filosofia', label: 'Filosofía' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#manifiesto', label: 'Manifiesto' },
  { href: '/#estudio', label: 'Estudio' },
  { href: '/#contacto', label: 'Contacto' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-sand bg-[rgba(245,237,227,0.88)] backdrop-blur-[16px]">
      <nav
        aria-label="Navegación principal"
        className="container flex items-center justify-between py-4"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible rounded-sm"
          aria-label="Grajo Estudio — inicio"
        >
          <LogoIcon className="h-7 w-auto shrink-0 text-earth" />
          <span className="font-heading text-[1.35rem] font-extrabold tracking-[-0.02em] text-earth">
            Grajo Estudio
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-body text-[0.92rem] font-medium text-earth transition-colors hover:text-orange-accessible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-accessible rounded-sm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className={cn(buttonVariants({ variant: 'grajo-primary', size: 'pill' }), 'hidden md:inline-flex')}
        >
          Hablemos
        </a>

        {/* Mobile nav */}
        <MobileNav />
      </nav>
    </header>
  )
}
