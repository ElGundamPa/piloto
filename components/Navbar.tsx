'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Navbar Rediseñado - Estilo Decameron
 * 
 * Barra de navegación centrada con fondo blanco redondeado
 * Principios aplicados:
 * - Diseño premium y elegante
 * - Navegación simple (Ley de Hick)
 * - Mobile-first responsive
 * - Items activos destacados
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // UX móvil: bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (!isOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  // UX: cerrar el menú al navegar
  useEffect(() => {
    setIsOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Función para determinar si un link está activo
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(path)
  }

  const navItems = [
    { href: '/', label: 'INICIO' },
    { href: '/destinos', label: 'DESTINOS' },
    { href: '/servicios', label: 'SERVICIOS' },
    { href: '/quienes-somos', label: 'QUIÉNES SOMOS' },
  ]

  return (
    <>
      {/* Navbar moderno y premium - Responsive mejorado */}
      <nav className="fixed top-2 sm:top-3 md:top-4 lg:top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-3 sm:px-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-lg sm:rounded-xl shadow-lg border border-gray-200/50">
          <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2 lg:py-2.5">
            {/* Logo a la izquierda */}
            <Link 
              href="/" 
              className="flex items-center md:flex-shrink-0 hover:opacity-90 transition-opacity duration-300"
              aria-label="Ir al inicio"
            >
              <Image
                src="/logos/logo.png"
                alt="Next Station Travel"
                width={140}
                height={40}
                className="h-5 sm:h-6 md:h-7 lg:h-7 w-auto"
                priority
              />
            </Link>

            {/* Menú desktop - Centrado con mejor espaciado */}
            <div className="hidden lg:flex items-center gap-1.5 flex-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg font-medium text-xs transition-all duration-300 min-h-[36px] flex items-center ${
                    isActive(item.href)
                      ? 'bg-primary-600 text-white shadow-md scale-105 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Botón Cotizar - Desktop mejorado */}
            <Link
              href="/cotizar"
              className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 min-h-[36px]"
            >
              COTIZAR
            </Link>

            {/* Menú móvil hamburguesa - Mejorado */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-all duration-300 min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil desplegable - Mejorado y responsive */}
      {/* Mantener montado para animación fluida (sin salto) */}
      <div className="lg:hidden">
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/25 backdrop-blur-sm z-30 transition-opacity duration-200 ease-out ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Dropdown */}
        <div
          className={`fixed z-40 transition-all duration-200 ease-out
            left-3 right-3 px-0
            sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full sm:max-w-5xl sm:px-3
            ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}
          `}
          style={{
            top: 'calc(env(safe-area-inset-top) + 72px)',
          }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-3 sm:p-4 border border-gray-200/50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-5 py-3 rounded-xl font-medium transition-colors duration-200 mb-2 min-h-[44px] flex items-center ${
                  isActive(item.href)
                    ? 'bg-primary-600 text-white shadow-md font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/cotizar"
              className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mt-3 min-h-[44px] flex items-center justify-center"
            >
              COTIZAR
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
