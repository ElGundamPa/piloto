import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { COMPANY_INFO } from '@/lib/config'

// Configuración de fuentes - Tipografía clara y accesible
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} - Agencia de Viajes | Experiencias Personalizadas`,
    template: `%s | ${COMPANY_INFO.name}`
  },
  description: COMPANY_INFO.description + ' Viajes personalizados, asesoría humana antes, durante y después del viaje.',
  keywords: 'viajes colombia, turismo colombia, destinos colombia, cartagena, san andres, medellin, guatape, eje cafetero, agencia de viajes, viajes personalizados, viajes internacionales',
  authors: [{ name: COMPANY_INFO.legalName }],
  creator: COMPANY_INFO.legalName,
  publisher: COMPANY_INFO.legalName,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://nextstationtravel.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: '/',
    siteName: COMPANY_INFO.name,
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    images: [
      {
        url: '/logos/logo fondo blanco.jpeg',
        width: 512,
        height: 512,
        alt: COMPANY_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    images: ['/logos/logo fondo blanco.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: COMPANY_INFO.name,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/logos/logo fondo blanco.jpeg', sizes: 'any' },
      { url: '/logos/logo fondo blanco.jpeg', sizes: '192x192', type: 'image/jpeg' },
      { url: '/logos/logo fondo blanco.jpeg', sizes: '512x512', type: 'image/jpeg' },
    ],
    apple: [
      { url: '/logos/logo fondo blanco.jpeg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2D4E9E' },
    { media: '(prefers-color-scheme: dark)', color: '#254080' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* PWA meta tags adicionales */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={COMPANY_INFO.name} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
