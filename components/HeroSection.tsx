'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import SearchForm from './SearchForm'
import heroPoster from '../public/imagenes/Bogota/2.webp'

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
    // Lo habilitamos muy pronto (200ms) o tras primera interacción del usuario.
    const enableVideo = () => setShouldLoadVideo(true)

    // Si el usuario tiene "Ahorro de datos", no cargamos video automáticamente.
    // Solo se intentará tras interacción.
    const saveData =
      typeof navigator !== 'undefined' &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Boolean((navigator as any)?.connection?.saveData)

    const interactionEvents = ['touchstart', 'touchend', 'click', 'scroll', 'keydown'] as const
    const handleFirstInteraction = () => {
      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true
      }
      enableVideo()

      // En producción (HTTPS), muchos navegadores bloquean autoplay hasta interacción.
      // Si el video ya está montado/cargado por idle, aquí reintentamos el play.
      // Si todavía no está montado, el `requestAnimationFrame` permite que el <source/> se inserte primero.
      requestAnimationFrame(() => {
        const video = videoRef.current
        if (!video) return
        if (video.paused) {
          video.muted = true
          video.play().catch(() => {
            // Si aún falla, se quedará el fallback (imagen) sin romper UX.
          })
        }
      })
    }

    interactionEvents.forEach((event) => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true })
    })

    // Habilitar muy pronto para que en producción el video empiece a bajar rápido.
    // (sin esto, el overlay se ve "gris" mientras el video/imagen cargan en red real)
    const earlyTimer = saveData ? null : setTimeout(enableVideo, 200)

    return () => {
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleFirstInteraction)
      })
      if (earlyTimer) clearTimeout(earlyTimer)
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
        }
      } catch {
        // Autoplay puede fallar (móvil). Se intentará tras interacción.
      }
    }

    const handleError = (e: Event) => {
      console.error('Error al cargar el video:', e)
    }

    // Solo mostramos el video cuando REALMENTE está reproduciendo (evita pantalla gris)
    const handlePlaying = () => {
      setVideoVisible(true)
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
    video.addEventListener('playing', handlePlaying)
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
      video.removeEventListener('playing', handlePlaying)
      video.removeEventListener('canplay', attemptPlay)
    }
  }, [shouldLoadVideo])

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20"
      aria-label="Sección principal"
    >
      {/* Fondo base inmediato: evita "gris" mientras cargan imagen/video */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500" />

      {/* Fondo ligero (optimizado por Next/Image) para paint rápido */}
      <div className="absolute inset-0">
        <Image
          src={heroPoster}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
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
        preload="auto"
        poster={heroPoster.src}
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
