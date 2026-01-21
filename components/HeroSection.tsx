'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SearchForm from './SearchForm'

/**
 * Hero Section Rediseñado - Estilo Decameron
 * 
 * Hero section con video de fondo y formulario de búsqueda sobrepuesto
 * Principios aplicados:
 * - Formulario destacado como CTA principal (Ley de Fitts)
 * - Video de fondo con fade in optimizado
 * - Overlay oscuro para contraste
 * - Layout mobile-first responsive
 */
export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoVisible, setVideoVisible] = useState(false)
  const hasInteractedRef = useRef(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    // Objetivo performance: NO descargar el video (32MB) en el primer paint.
    // Lo habilitamos en idle o tras primera interacción del usuario.
    const enableVideo = () => setShouldLoadVideo(true)

    const interactionEvents = ['touchstart', 'touchend', 'click', 'scroll', 'keydown'] as const
    const handleFirstInteraction = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true
      }
      enableVideo()
    }

    interactionEvents.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true })
    })

    // También habilitar en idle (desktop) para que el video aparezca sin bloquear el render inicial
    const w = globalThis as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }
    let idleId: number | null = null
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    if (typeof w.requestIdleCallback === 'function') {
      idleId = w.requestIdleCallback(enableVideo, { timeout: 1500 })
    } else {
      timeoutId = setTimeout(enableVideo, 1200)
    }

    return () => {
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction)
      })
      if (idleId !== null && typeof w.cancelIdleCallback === 'function') {
        w.cancelIdleCallback(idleId)
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    if (!shouldLoadVideo) return
    if (!videoRef.current) return

    const video = videoRef.current

    // Asegurar configuración para autoplay en móviles
    video.loop = true
    video.muted = true
    video.controls = false

    // Función para intentar reproducir el video
    const attemptPlay = async () => {
      try {
        if (video.paused) {
          video.muted = true
          await video.play()
          setVideoVisible(true)
        }
      } catch {
        // Autoplay puede fallar (móvil). Se intentará tras interacción.
      }
    }

    const handleError = (e: Event) => {
      console.error('Error al cargar el video:', e)
    }

    const handleEnded = () => {
      video.currentTime = 0
      video.play().catch(() => {
        setTimeout(() => {
          video.currentTime = 0
          video.play()
        }, 100)
      })
    }

    const handleLoadedData = () => {
      attemptPlay()
    }

    video.addEventListener('error', handleError)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplay', attemptPlay, { once: true })

    // Forzar inicio de carga una vez insertado el <source/>
    video.load()

    // Intentar play inmediatamente (desktop) o quedará para interacción en móvil
    attemptPlay()

    // Fade in inicial
    const timer = setTimeout(() => {
      if (!video.paused || hasInteractedRef.current) {
        setVideoVisible(true)
      }
    }, 120)

    return () => {
      clearTimeout(timer)
      video.removeEventListener('error', handleError)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', attemptPlay)
    }
  }, [shouldLoadVideo])

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20"
      aria-label="Sección principal"
    >
      {/* Fondo ligero (optimizado por Next/Image) para paint rápido */}
      <div className="absolute inset-0">
        <Image
          src="/imagenes/Bogota/2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-500 ${videoVisible ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
      </div>
      
      {/* Video de fondo */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 hide-video-controls"
        style={{
          opacity: videoVisible ? 1 : 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {shouldLoadVideo && <source src="/videos/video.mp4" type="video/mp4" />}
      </video>

      {/* Overlay oscuro mejorado para máximo contraste - Jerarquía visual */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

      {/* Contenido principal - Título arriba, formulario abajo */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
        {/* Título principal - Animado y dinámico */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16 w-full px-3 sm:px-4">
          <h1 className="hero-title mb-4 sm:mb-5 md:mb-6 animate-slide-up-fade text-white px-2">
            Descubre Colombia
          </h1>
          <p className="hero-subtitle max-w-4xl mx-auto px-2 sm:px-4 animate-fade-in-delay">
            Encuentra tu viaje perfecto al lugar que deseas. 
            <span className="block mt-2 font-medium">Experiencias únicas diseñadas para ti.</span>
          </p>
        </div>

        {/* Formulario de búsqueda - Aparece con animación */}
        <div 
          className="w-full max-w-6xl mx-auto px-3 sm:px-4 animate-fade-in" 
          style={{ animationDelay: '200ms' }}
        >
          <SearchForm />
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg 
          className="w-6 h-6 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
