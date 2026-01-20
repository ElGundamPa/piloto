'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  images: Array<{ src: string; alt: string }>
  currentIndex: number
  isOpen: boolean
  onClose: () => void
}

/**
 * Lightbox para visualización de imágenes en pantalla completa
 * 
 * Características:
 * - Modal a pantalla completa con fondo transparente suave
 * - Navegación con flechas y teclado
 * - Soporte para gestos en móvil (swipe)
 * - Animaciones suaves
 * - Accesibilidad completa
 */
export default function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [index, setIndex] = useState(currentIndex)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Actualizar índice cuando cambia currentIndex
  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  // Prevenir scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Focus en el modal para accesibilidad
      const modal = document.getElementById('image-lightbox-modal')
      modal?.focus()
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Funciones de navegación
  const goToPrevious = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }, [images.length])

  // Navegación con teclado
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          break
        case 'ArrowRight':
          e.preventDefault()
          setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          break
        case 'Escape':
          e.preventDefault()
          onClose()
          break
      }
    },
    [isOpen, onClose, images.length]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, handleKeyDown])

  // Funciones para gestos touch (swipe)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Función helper para detectar si necesita unoptimized
  const necesitaUnoptimized = (src: string) => {
    const tieneExtension = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(src)
    const esArchivoSinExtension = /\/\d+$/.test(src)
    return !tieneExtension || esArchivoSinExtension
  }

  if (!isOpen || !images.length) return null

  const currentImage = images[index]

  return (
    <div
      id="image-lightbox-modal"
      className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm flex items-center justify-center animate-fade-in"
      onClick={(e) => {
        // Cerrar solo si se hace click en el backdrop (no en la imagen)
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imágenes"
      tabIndex={-1}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 min-w-[44px] min-h-[44px] 
                   bg-black/80 hover:bg-black/90 text-white rounded-full 
                   flex items-center justify-center transition-all duration-300
                   focus:outline-none focus:ring-4 focus:ring-white/50
                   backdrop-blur-md shadow-lg"
        aria-label="Cerrar visualizador"
      >
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Contador de imágenes */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 
                      bg-black/80 backdrop-blur-md text-white 
                      px-4 py-2 rounded-full text-sm sm:text-base
                      font-medium shadow-lg">
          {index + 1} / {images.length}
        </div>
      )}

      {/* Flecha anterior */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 z-10
                     min-w-[44px] min-h-[44px]
                     bg-black/80 hover:bg-black/90 text-white rounded-full
                     flex items-center justify-center transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-white/50
                     backdrop-blur-md shadow-lg
                     hidden sm:flex"
          aria-label="Imagen anterior"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      {/* Flecha siguiente */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-10
                     min-w-[44px] min-h-[44px]
                     bg-black/80 hover:bg-black/90 text-white rounded-full
                     flex items-center justify-center transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-white/50
                     backdrop-blur-md shadow-lg
                     hidden sm:flex"
          aria-label="Imagen siguiente"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Imagen principal */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 sm:p-8 md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-7xl max-h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain animate-fade-in"
            sizes="100vw"
            priority
            unoptimized={necesitaUnoptimized(currentImage.src)}
          />
        </div>
      </div>

      {/* Indicadores de navegación en móvil (dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10
                      flex gap-2 sm:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                setIndex(i)
              }}
              className={`min-w-[8px] min-h-[8px] rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
