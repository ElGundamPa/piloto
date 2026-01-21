import Image from 'next/image'
import { Destino } from '@/lib/destinos'

/**
 * Hero de Destino Individual
 * 
 * Principios aplicados:
 * - Diseño visual prioritario (imagen grande)
 * - Jerarquía clara: Nombre > Frase inspiracional
 * - Contraste alto para legibilidad
 */
interface HeroDestinoProps {
  destino: Destino
}

export default function HeroDestino({ destino }: HeroDestinoProps) {
  return (
    <section 
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
      aria-label={`Hero de ${destino.nombre}`}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={destino.imagenHero}
          alt={destino.nombre}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="container-custom relative z-10 text-center px-4">
        <h1 className="heading-1 text-white mb-4 drop-shadow-2xl">
          {destino.nombre}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
          {destino.fraseInspiracional}
        </p>
      </div>
    </section>
  )
}
