'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { COMPANY_INFO } from '@/lib/config'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'

/**
 * Footer Rediseñado - Mobile-first
 * 
 * Estilo moderno tipo app/ecommerce de viajes
 * Principios aplicados:
 * - Diseño compacto y escaneable
 * - Jerarquía visual clara
 * - Acordeones para organizar contenido en móvil
 * - Mejora de legibilidad y UX
 */
export default function Footer({ showHelpCta = true }: { showHelpCta?: boolean }) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const currentYear = new Date().getFullYear()

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrl(WHATSAPP_MESSAGES.default), '_blank')
  }

  // Navegación principal - Solo lo esencial en móvil
  const mainNavItems = [
    { href: '/', label: 'Inicio' },
    { href: '/destinos', label: 'Destinos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/cotizar', label: 'Cotizar' },
  ]

  // Navegación adicional (desktop)
  const additionalNavItems = [
    { href: '/quienes-somos', label: 'Quiénes somos' },
  ]

  // Enlaces legales
  const legalItems = [
    { href: '/aviso-privacidad', label: 'Aviso de privacidad' },
    { href: '/terminos-condiciones', label: 'Términos y condiciones' },
  ]

  return (
    <>
      {/* CTA de Ayuda - Antes del footer */}
      {showHelpCta && (
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-6 px-4">
          <div className="container-custom max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  ¿Necesitas ayuda?
                </h3>
                <p className="text-sm sm:text-base text-white/90">
                  Habla con nosotros por WhatsApp
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="min-h-[44px] px-6 py-3 bg-white text-primary-600 font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Contactar por WhatsApp"
              >
                Chatear ahora
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer principal - Con padding inferior para el botón WhatsApp */}
      <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 pb-20 sm:pb-24 md:pb-12">
        <div className="container-custom max-w-6xl mx-auto px-4 py-8 sm:py-12">

          {/* Grid principal - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">

            {/* Logo y descripción - Móvil primero */}
            <div className="md:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block mb-3 sm:mb-4">
                <Image
                  src="/logos/logo sin fondo.png"
                  alt={`${COMPANY_INFO.name} - Logo`}
                  width={160}
                  height={50}
                  className="h-auto w-auto"
                  priority
                />
              </Link>
              <p className="text-sm text-gray-600 leading-relaxed">
                Agencia de viajes especializada en experiencias turísticas personalizadas.
              </p>
            </div>

            {/* Navegación - Acordeón en móvil */}
            <div className="lg:col-span-1">
              {/* Desktop: Mostrar directamente */}
              <div className="hidden md:block">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">
                  Navegación
                </h3>
                <ul className="space-y-2">
                  {mainNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  {additionalNavItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile: Acordeón */}
              <div className="md:hidden">
                <button
                  onClick={() => toggleAccordion('nav')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-gray-900 py-3 min-h-[44px]"
                  aria-expanded={openAccordion === 'nav'}
                  aria-controls="nav-accordion"
                >
                  <span>Navegación</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openAccordion === 'nav' ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id="nav-accordion"
                  className={`overflow-hidden transition-all duration-300 ${openAccordion === 'nav' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <ul className="space-y-2 pb-2">
                    {mainNavItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center pl-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal - Acordeón en móvil */}
            <div className="lg:col-span-1">
              {/* Desktop: Mostrar directamente */}
              <div className="hidden md:block">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">
                  Legal
                </h3>
                <ul className="space-y-2">
                  {legalItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile: Acordeón */}
              <div className="md:hidden">
                <button
                  onClick={() => toggleAccordion('legal')}
                  className="w-full flex items-center justify-between text-sm font-semibold text-gray-900 py-3 min-h-[44px]"
                  aria-expanded={openAccordion === 'legal'}
                  aria-controls="legal-accordion"
                >
                  <span>Legal</span>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openAccordion === 'legal' ? 'rotate-180' : ''
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  id="legal-accordion"
                  className={`overflow-hidden transition-all duration-300 ${openAccordion === 'legal' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <ul className="space-y-2 pb-2">
                    {legalItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center pl-2"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contacto - Siempre visible */}
            <div className="lg:col-span-1">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    <span className="break-all">{COMPANY_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors min-h-[44px] flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">
                Recibe ofertas exclusivas
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">
                Suscríbete y recibe las mejores promociones en tu correo
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const input = (e.target as HTMLFormElement).querySelector('input')
                  if (input?.value) {
                    handleWhatsAppClick()
                    input.value = ''
                  }
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  className="flex-1 !rounded-lg !py-2.5 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-300 min-h-[44px] flex-shrink-0"
                >
                  Suscribir
                </button>
              </form>
            </div>
          </div>

          {/* Sellos de confianza */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8 mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                <span className="text-gray-600">Pagos seguros</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-gray-600">Empresa verificada</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-gray-600">Soporte 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                <span className="text-gray-600">98% satisfacción</span>
              </div>
            </div>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                <p>
                  © {currentYear} {COMPANY_INFO.legalName}
                </p>
                <p>
                  NIT: {COMPANY_INFO.nit}
                </p>
                <p className="text-xs">
                  {COMPANY_INFO.address}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-gray-500">
                <p>Hecho con cariño para viajeros</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
