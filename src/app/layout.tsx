import type { Metadata } from 'next'
import { dmSerif, bricolage, instrumentSans } from '@/lib/fonts'
import { SmoothScrollProvider } from '@/components/animations/smooth-scroll-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Grajo Estudio — Código con alma',
  description: 'Estudio de desarrollo web y app con sensibilidad visual y foco en accesibilidad.',
  openGraph: {
    title: 'Grajo Estudio',
    description: 'Desarrollo web, accesibilidad y narrativa visual.',
    url: 'https://grajoestudio.com',
    siteName: 'Grajo Estudio',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${bricolage.variable} ${instrumentSans.variable}`}
    >
      <body className="font-body">
        {/* Skip link — WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-earth focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-orange-accessible"
        >
          Saltar al contenido principal
        </a>
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
