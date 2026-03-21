import type { Metadata } from 'next'
import { dmSerif, bricolage, instrumentSans } from '@/lib/fonts'
import { SmoothScrollProvider } from '@/components/animations/smooth-scroll-provider'
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
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
