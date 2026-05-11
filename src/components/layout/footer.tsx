import { LogoWordmark } from '@/components/icons/logo-wordmark'

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-black py-8 text-center text-xs text-cream/50"
    >
      <div className="container">
        <LogoWordmark className="h-8 w-auto mx-auto mb-4 text-cream/40" />
        <p>
          © {new Date().getFullYear()} Grajo Estudio — Código con alma. Cuenca.
        </p>
      </div>
    </footer>
  )
}
