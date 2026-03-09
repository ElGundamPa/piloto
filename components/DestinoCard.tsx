import Link from 'next/link'
import Image from 'next/image'
import { Destino, formatPrice } from '@/lib/destinos'

interface DestinoCardProps {
  destino: Destino
  featured?: boolean
}

const POPULAR_DESTINOS = ['cartagena', 'san-andres', 'eje-cafetero']

export default function DestinoCard({ destino, featured = false }: DestinoCardProps) {
  const isPopular = POPULAR_DESTINOS.includes(destino.slug)

  return (
    <Link href={`/destinos/${destino.slug}`}>
      <article className="card group overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Imagen del destino */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={destino.imagen}
            alt={destino.nombre}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                        opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isPopular && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                Popular
              </span>
            )}
          </div>

          {/* Precio siempre visible */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Desde</span>
              <p className="text-lg font-bold text-primary-600 leading-tight">{formatPrice(destino.precioDesde)}</p>
            </div>
          </div>
        </div>

        {/* Contenido de la card */}
        <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
          <h3 className="heading-3 text-lg sm:text-xl mb-2 group-hover:text-primary-600 transition-colors">
            {destino.nombre}
          </h3>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 flex-1 line-clamp-2">
            {destino.fraseCorta}
          </p>

          {/* Incluye iconos pequeños */}
          <div className="flex items-center gap-3 mb-4 text-gray-400">
            {destino.incluye.alojamiento && (
              <div className="flex items-center gap-1" title="Alojamiento incluido">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
            )}
            {destino.incluye.transporte && (
              <div className="flex items-center gap-1" title="Transporte incluido">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
            )}
            {destino.incluye.tours && (
              <div className="flex items-center gap-1" title="Tours incluidos">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </div>
            )}
            {destino.incluye.asistencia && (
              <div className="flex items-center gap-1" title="Asistencia incluida">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
            )}
          </div>

          <span className="w-full btn-primary text-sm sm:text-base text-center group-hover:bg-primary-600">
            Ver viaje
          </span>
        </div>
      </article>
    </Link>
  )
}
