'use client'

import { useState, useEffect } from 'react'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'

/**
 * Botón Flotante de WhatsApp
 * 
 * Principios aplicados:
 * - Ley de Fitts: Botón grande y siempre accesible
 * - Posición fija para acceso constante
 * - Feedback visual en hover y click
 * - Animación sutil para llamar la atención
 * - Accesibilidad: aria-label, keyboard navigation
 */
export default function WhatsAppFloatButton({
  showNotification = false,
}: {
  showNotification?: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [shouldNudge, setShouldNudge] = useState(false)

  useEffect(() => {
    // Mostrar botón después de un pequeño delay para no distraer al inicio
    const timer = setTimeout(() => {
      setIsVisible(true)
      // UX: animación corta de “saludo” una sola vez, no infinita
      setShouldNudge(true)
      setTimeout(() => setShouldNudge(false), 1200)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.open(getWhatsAppUrl(WHATSAPP_MESSAGES.default), '_blank')
  }

  if (!isVisible) return null

  return (
    <div
      // UX: anclaje estable al viewport (incluye safe-area en móviles)
      className={`fixed right-4 sm:right-6 bottom-[calc(env(safe-area-inset-bottom)+1rem)] sm:bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Botón principal (único elemento interactivo) */}
      <button
        type="button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          relative
          w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full
          bg-whatsapp text-white shadow-2xl
          flex items-center justify-center
          transform transition-all duration-300
          ${isHovered ? 'scale-110 shadow-3xl' : 'scale-100'}
          hover:bg-[#20BA5A] active:scale-95
          focus:outline-none focus:ring-4 focus:ring-whatsapp/50
          ${shouldNudge ? 'animate-bounce' : ''}
        `}
        aria-label="Hablar con un asesor por WhatsApp"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>

        {/* Indicador opcional (solo si hay una notificación real) */}
        {showNotification && (
          <span
            className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"
            aria-hidden="true"
          />
        )}
      </button>

      {/* Tooltip en hover y focus (teclado) */}
      {(isHovered || isFocused) && (
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
          Habla con nosotros
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  )
}
