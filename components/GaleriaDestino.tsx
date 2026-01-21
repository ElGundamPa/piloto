'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Destino } from '@/lib/destinos'
import ImageLightbox from './ImageLightbox'

/**
 * Galería de Destino
 * 
 * Principios aplicados:
 * - Diseño visual prioritario
 * - Proximidad: Imágenes agrupadas
 * - Feedback visual: Hover effects
 * - Responsive grid
 * - Visualización ampliada con lightbox
 */
interface GaleriaDestinoProps {
  destino: Destino
}

export default function GaleriaDestino({ destino }: GaleriaDestinoProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Incluir todas las imágenes del destino (imagenHero, imagen2, imagen3)
  const imagenes = [
    { src: destino.imagenHero, alt: `${destino.nombre} - Imagen principal` },
    { src: destino.imagen2, alt: `${destino.nombre} - Imagen 2` },
    { src: destino.imagen3, alt: `${destino.nombre} - Imagen 3` },
  ]

  const handleImageClick = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <section 
        className="section bg-white"
        aria-labelledby="galeria-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="galeria-heading" className="heading-2 mb-4">
              Galería
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre más sobre {destino.nombre} a través de estas imágenes
            </p>
          </div>

          {/* Grid de galería - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {imagenes.map((imagen, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className="relative h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden 
                         shadow-lg hover:shadow-2xl transition-all duration-300 
                         transform hover:scale-[1.02] group cursor-pointer
                         focus-within:ring-4 focus-within:ring-primary-500 focus-within:ring-offset-2
                         outline-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleImageClick(index)
                  }
                }}
                aria-label={`Abrir imagen ${index + 1} de ${imagenes.length} en visualizador completo`}
              >
                <Image
                  src={imagen.src}
                  alt={imagen.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay sutil en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox para visualización ampliada */}
      <ImageLightbox
        images={imagenes}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
