import Link from 'next/link'
import Image from 'next/image'
import { destinos, formatPrice } from '@/lib/destinos'

const OFERTAS = [
  { slug: 'san-andres', descuento: 15, etiqueta: 'Oferta de temporada' },
  { slug: 'cartagena', descuento: 10, etiqueta: 'Escapada romántica' },
  { slug: 'eje-cafetero', descuento: 12, etiqueta: 'Aventura cafetera' },
]

export default function OfertasDestacadas() {
  const ofertas = OFERTAS.map((oferta) => {
    const destino = destinos.find((d) => d.slug === oferta.slug)
    if (!destino) return null
    const precioOriginal = destino.precioDesde
    const precioOferta = Math.round(precioOriginal * (1 - oferta.descuento / 100))
    return { ...oferta, destino, precioOriginal, precioOferta }
  }).filter(Boolean) as Array<{
    slug: string
    descuento: number
    etiqueta: string
    destino: (typeof destinos)[0]
    precioOriginal: number
    precioOferta: number
  }>

  return (
    <section className="section bg-white" aria-labelledby="ofertas-heading">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 id="ofertas-heading" className="heading-2 mb-3 sm:mb-4">
            Ofertas especiales
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Aprovecha estas oportunidades exclusivas para tu próximo viaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ofertas.map((oferta) => (
            <Link key={oferta.slug} href={`/destinos/${oferta.slug}`}>
              <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-80">
                <Image
                  src={oferta.destino.imagen}
                  alt={oferta.destino.nombre}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Badge de descuento */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                    -{oferta.descuento}% OFF
                  </span>
                </div>

                {/* Etiqueta */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded-full">
                    {oferta.etiqueta}
                  </span>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {oferta.destino.nombre}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-1">
                    {oferta.destino.fraseCorta}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-white/60 line-through text-sm">
                      {formatPrice(oferta.precioOriginal)}
                    </span>
                    <span className="text-white font-bold text-lg">
                      {formatPrice(oferta.precioOferta)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
