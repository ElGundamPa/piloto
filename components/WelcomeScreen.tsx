'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

/**
 * Pantalla de Bienvenida
 * 
 * Aplica:
 * - Ley de Prägnanz: Diseño limpio y minimalista
 * - Ley de Continuidad: Transición suave hacia el contenido
 * - Primera impresión impactante para generar confianza
 */
export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    // Verificar si ya se mostró en las últimas 24 horas
    const lastShown = localStorage.getItem('nextStation_welcome_shown')
    const lastShownTime = lastShown ? parseInt(lastShown, 10) : 0
    const now = Date.now()
    const twentyFourHours = 24 * 60 * 60 * 1000

    // Mostrar si nunca se ha mostrado o han pasado más de 24 horas
    if (!lastShown || (now - lastShownTime) > twentyFourHours) {
      setShouldShow(true)
      // Pequeño delay para que el componente se monte primero
      setTimeout(() => {
        setIsVisible(true)
      }, 100)
    }
  }, [])

  const handleSkip = () => {
    handleClose()
  }

  const handleClose = () => {
    setIsVisible(false)
    // Guardar timestamp en localStorage
    localStorage.setItem('nextStation_welcome_shown', Date.now().toString())
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
      setShouldShow(false)
    }, 500)
  }

  // Auto-cerrar después de 3 segundos
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        handleClose()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  if (!shouldShow) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Pantalla de bienvenida"
    >
      {/* Contenido principal */}
      <div
        className={`text-center px-6 max-w-md transition-all duration-700 ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logos/logo con cuadrado.png"
            alt="Next Station Travel"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32 animate-fade-in"
            priority
          />
        </div>

        {/* Mensajes con animación secuencial */}
        <div className="space-y-4 mb-8">
          <h1
            className={`text-4xl md:text-5xl font-bold text-white font-display transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Empieza
          </h1>
          <h2
            className={`text-2xl md:text-3xl font-semibold text-white/90 font-display transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Empieza tu nueva aventura
          </h2>
          <p
            className={`text-lg md:text-xl text-white/80 leading-relaxed transition-all duration-700 delay-600 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Encuentra tu viaje perfecto al lugar que deseas
          </p>
        </div>

        {/* Indicador de carga sutil */}
        <div
          className={`flex justify-center transition-opacity duration-500 delay-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-12 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full animate-progress-bar"></div>
          </div>
        </div>
      </div>

      {/* Botón Skip (opcional) */}
      <button
        onClick={handleSkip}
        className={`absolute top-6 right-6 px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 delay-1000 ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2'
        }`}
        aria-label="Saltar presentación"
      >
        Saltar
      </button>
    </div>
  )
}
