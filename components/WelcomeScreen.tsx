'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Pantalla de Bienvenida Mejorada
 * 
 * Aplica:
 * - Ley de Prägnanz: Diseño limpio y minimalista
 * - Ley de Continuidad: Transición suave hacia el contenido
 * - Animación dinámica con barra de progreso y avión
 * - Primera impresión impactante para generar confianza
 */
export default function WelcomeScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldShow, setShouldShow] = useState(false)
  const [progress, setProgress] = useState(0)
  const [planeFlyingUp, setPlaneFlyingUp] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const animationFrameRef = useRef<number>()
  const startTimeRef = useRef<number>()

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
        startProgressAnimation()
      }, 100)
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const startProgressAnimation = () => {
    startTimeRef.current = Date.now()
    const duration = 2500 // 2.5 segundos para llegar al 95%
    
    const animate = () => {
      const elapsed = Date.now() - (startTimeRef.current || 0)
      const newProgress = Math.min((elapsed / duration) * 95, 95)
      
      setProgress(newProgress)

      if (newProgress < 95) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        // Al llegar al 95%, iniciar vuelo hacia arriba
        setPlaneFlyingUp(true)
        // Completar la barra al 100%
        setTimeout(() => {
          setProgress(100)
        }, 100)
        // Después del vuelo, iniciar transición de salida
        setTimeout(() => {
          setIsExiting(true)
          setTimeout(() => {
            handleClose()
          }, 700) // Duración de la transición de salida
        }, 700) // Duración del vuelo hacia arriba
      }
    }

    animate()
  }

  const handleSkip = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    handleClose()
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsExiting(true)
    // Guardar timestamp en localStorage
    localStorage.setItem('nextStation_welcome_shown', Date.now().toString())
    // Esperar a que termine la animación antes de ocultar
    setTimeout(() => {
      setShouldShow(false)
    }, 700)
  }

  if (!shouldShow) return null

  // Calcular posición del avión
  const planeX = `${progress}%`
  const planeY = planeFlyingUp ? '-50px' : '-25px'
  const planeRotation = planeFlyingUp ? -45 : 0
  const planeOpacity = planeFlyingUp ? 0 : 1

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 flex items-center justify-center transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-label="Pantalla de bienvenida"
    >
      {/* Contenido principal */}
      <div
        className={`text-center px-6 max-w-md transition-all duration-700 ${
          isExiting
            ? 'opacity-0 translate-y-8 scale-95'
            : isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logos/logo inicio.png"
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
              isExiting
                ? 'opacity-0 translate-y-4'
                : isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Empieza
          </h1>
          <h2
            className={`text-2xl md:text-3xl font-semibold text-white/90 font-display transition-all duration-700 delay-400 ${
              isExiting
                ? 'opacity-0 translate-y-4'
                : isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Empieza tu nueva aventura
          </h2>
          <p
            className={`text-lg md:text-xl text-white/80 leading-relaxed transition-all duration-700 delay-600 ${
              isExiting
                ? 'opacity-0 translate-y-4'
                : isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Encuentra tu viaje perfecto al lugar que deseas
          </p>
        </div>

        {/* Barra de progreso con avión */}
        <div className="relative w-full max-w-xs mx-auto">
          {/* Barra de progreso */}
          <div className="relative w-full h-1.5 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-white via-white/95 to-white rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Avión SVG */}
          <div
            className="absolute transition-all duration-75 ease-out"
            style={{
              left: `calc(${planeX} - 16px)`,
              bottom: planeY,
              transform: `rotate(${planeRotation}deg)`,
              opacity: planeOpacity,
              transition: planeFlyingUp
                ? 'left 0.1s ease-out, bottom 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease-out'
                : 'left 0.1s ease-out',
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                fill="currentColor"
                className="drop-shadow-md"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Botón Skip */}
      <button
        onClick={handleSkip}
        className={`absolute top-6 right-6 px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-all duration-300 delay-1000 z-10 ${
          isExiting
            ? 'opacity-0 translate-y-2'
            : isVisible
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
