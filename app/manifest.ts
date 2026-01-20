import { MetadataRoute } from 'next'
import { COMPANY_INFO } from '@/lib/config'

/**
 * Manifest para PWA (Progressive Web App)
 * 
 * Permite que la web app se instale como aplicación en dispositivos móviles
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_INFO.name,
    short_name: 'Next Station',
    description: COMPANY_INFO.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0073e6',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/logos/logo con cuadrado.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/logos/logo con cuadrado.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    categories: ['travel', 'tourism', 'lifestyle'],
    lang: 'es-CO',
    dir: 'ltr',
  }
}
