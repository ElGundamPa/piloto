'use client'

import Link from 'next/link'
import { useState } from 'react'

/**
 * TopBar Superior
 * 
 * Barra superior oscura con logo y enlaces rápidos
 * Estilo similar a Decameron Hotels
 */
export default function TopBar() {
  const [language, setLanguage] = useState('ES')

  return (
    <div className="bg-primary-900 text-white py-2 px-4 fixed top-0 left-0 right-0 z-[60]">
      <div className="container-custom">
        <div className="flex items-center justify-between text-sm">
          {/* Logo/texto a la izquierda */}
          <div className="font-semibold text-xs md:text-sm tracking-wide">
            NEXT STATION TRAVEL
          </div>

          {/* Enlaces a la derecha */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link 
              href="/cotizar"
              className="hover:text-primary-200 transition-colors duration-300 text-xs md:text-sm font-medium"
            >
              CONTÁCTANOS
            </Link>
            <Link 
              href="/servicios"
              className="hover:text-primary-200 transition-colors duration-300 text-xs md:text-sm font-medium hidden sm:inline"
            >
              AGENCIAS
            </Link>
            <div className="relative">
              <button
                onClick={() => setLanguage(language === 'ES' ? 'EN' : 'ES')}
                className="flex items-center gap-1 hover:text-primary-200 transition-colors duration-300 text-xs md:text-sm font-medium"
                aria-label="Cambiar idioma"
              >
                IDIOMA
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
