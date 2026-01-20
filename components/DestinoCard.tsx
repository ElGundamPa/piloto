'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Destino, formatPrice } from '@/lib/destinos'

/**
 * Card de Destino - Estilo E-commerce
 * 
 * Principios aplicados:
 * - Ley de Fitts: Botón grande y accesible
 * - Feedback visual: Hover effects
 * - Diseño escaneable: Imagen > Título > Descripción > CTA
 * - Proximidad: Información relacionada agrupada
 */
interface DestinoCardProps {
  destino: Destino
}

export default function DestinoCard({ destino }: DestinoCardProps) {
  // Detectar si la imagen no tiene extensión (caso de Bogotá)
  // Si la ruta termina en un número sin extensión, necesita unoptimized
  const tieneExtension = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(destino.imagen)
  const esArchivoSinExtension = /\/\d+$/.test(destino.imagen) // Termina en /número sin extensión
  const necesitaUnoptimized = !tieneExtension || esArchivoSinExtension
  
  return (
    <Link href={`/destinos/${destino.slug}`}>
      <article className="card group overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Imagen del destino - Diseño visual prioritario */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={destino.imagen}
            alt={destino.nombre}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={necesitaUnoptimized}
          />
          {/* Overlay sutil en hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Precio destacado - Visible en hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white px-4 py-2 rounded-lg shadow-lg">
              <span className="text-xs text-gray-600">Desde</span>
              <p className="text-lg font-bold text-primary-600">{formatPrice(destino.precioDesde)}</p>
            </div>
          </div>
        </div>

        {/* Contenido de la card */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          {/* Nombre del destino - Jerarquía visual */}
          <h3 className="heading-3 text-lg sm:text-xl mb-2 group-hover:text-primary-600 transition-colors">
            {destino.nombre}
          </h3>

          {/* Frase corta - Texto escaneable */}
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 line-clamp-2">
            {destino.fraseCorta}
          </p>

          {/* CTA - Ley de Fitts */}
          <button className="w-full btn-primary text-sm sm:text-base text-center group-hover:bg-primary-600">
            Ver viaje
          </button>
        </div>
      </article>
    </Link>
  )
}
