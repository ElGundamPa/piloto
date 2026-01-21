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
  const [isExiting, setIsExiting] = useState(false)
  const [phase, setPhase] = useState<'loading' | 'takeoff' | 'exit'>('loading')
  const [takeoffProgress, setTakeoffProgress] = useState(0)
  const animationFrameRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const takeoffStartTimeRef = useRef<number>()

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
    setPhase('loading')
    setTakeoffProgress(0)
    const duration = 2400 // duración total de la carga
    
    const animate = () => {
      const elapsed = Date.now() - (startTimeRef.current || 0)
      const newProgress = Math.min((elapsed / duration) * 100, 100)
      
      setProgress(newProgress)

      if (newProgress < 100) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        // Al llegar al 100%, iniciar despegue
        setPhase('takeoff')
        takeoffStartTimeRef.current = Date.now()
        const takeoffDuration = 850 // 0.7–0.9s

        const animateTakeoff = () => {
          const takeoffElapsed = Date.now() - (takeoffStartTimeRef.current || 0)
          const t = Math.min(takeoffElapsed / takeoffDuration, 1)
          setTakeoffProgress(t)

          if (t < 1) {
            animationFrameRef.current = requestAnimationFrame(animateTakeoff)
          } else {
            // Despegue completo → iniciar salida/transición hacia la página
            setPhase('exit')
            // Pequeño delay para que el avión termine de desaparecer antes del fade-out
            setTimeout(() => {
              handleClose()
            }, 120)
          }
        }

        animateTakeoff()
      }
    }

    animate()
  }

  const handleSkip = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    setPhase('exit')
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
    }, 600)
  }

  if (!shouldShow) return null

  // --- Avión ---
  // El SVG actual apunta "hacia arriba" por defecto. Le aplicamos un offset para que visualmente quede horizontal (hacia la derecha).
  // Si en tu caso quedara mirando hacia la izquierda, cambia 90 por -90.
  const rotationOffset = 90
  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
  const takeoffT = phase === 'takeoff' ? easeOutCubic(takeoffProgress) : 0

  // Movimiento horizontal (recorrido = carga):
  // En "loading" anclamos la COLA exactamente al final del fill (sin ir adelantado).
  const planeAnchorPercent = phase === 'loading' ? progress : 100

  // Posición vertical:
  // La barra tiene `h-1.5` (~6px). Su centro queda ~3px desde el top del contenedor.
  // Queremos que la *cola* (punto de anclaje / transform-origin) quede EXACTA sobre la línea de carga,
  // así que alineamos el `transform-origin` (Y=50% del icono ~16px) con el centro de la barra (3px):
  // baseTop ≈ 3 - 16 = -13. En la práctica lo subimos 2px para que la cola no quede abajo.
  const baseTop = -18
  const finalTop = -170
  const planeTop =
    phase === 'takeoff' ? baseTop + (finalTop - baseTop) * takeoffT : baseTop

  // Rotación (sutil) solo durante el despegue para no parecer "choque"
  const takeoffTilt = phase === 'takeoff' ? -18 * takeoffT : 0
  const visualRotation = rotationOffset + takeoffTilt

  // Opacidad: fade suave en takeoff, oculto en exit
  const planeOpacity =
    phase === 'takeoff' ? Math.max(0, 1 - takeoffT * 1.15) : phase === 'exit' ? 0 : 1

  // Aceleración extra (px) para sensación de impulso en takeoff
  const planeKickX = phase === 'takeoff' ? takeoffT * 10 : 0
  // Offset de cola en X: el icono es 32px; con `transformOrigin: 20%` la cola queda ~6.4px desde la izquierda.
  // Usamos 6px para que la cola caiga exactamente en el final del fill.
  const tailXpx = 6

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
            ? 'opacity-0 translate-y-8 scale-[0.98] blur-[1px]'
            : isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-[0.98] blur-[1px]'
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
            className="absolute pointer-events-none"
            style={{
              // Anclamos la cola al final del fill
              left: `calc(${planeAnchorPercent}% - ${tailXpx}px)`,
              top: `${planeTop}px`,
              transform: `translate3d(${planeKickX}px, 0, 0) rotate(${visualRotation}deg)`,
              transformOrigin: '20% 50%', // ancla en la cola (mantiene la cola sobre la línea al rotar)
              opacity: planeOpacity,
              transition: 'none',
              willChange: phase === 'takeoff' ? 'transform, opacity, top, left' : 'left',
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white drop-shadow-lg"
            >
              <path
                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                fill="currentColor"
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
