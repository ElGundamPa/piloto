import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDestinoBySlug, destinos, formatPrice } from '@/lib/destinos'
import Navbar from '@/components/Navbar'
import HeroDestino from '@/components/HeroDestino'
import GaleriaDestino from '@/components/GaleriaDestino'
import IncluyeSection from '@/components/IncluyeSection'
import PlanCard from '@/components/PlanCard'
import CTADestino from '@/components/CTADestino'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import Footer from '@/components/Footer'

/**
 * Página individual de destino
 * 
 * Principios aplicados:
 * - Jerarquía visual clara
 * - Ley de Fitts: CTAs grandes y accesibles
 * - Información organizada y escaneable
 * - Diseño emocional (experiencia de viaje)
 */
interface PageProps {
  params: {
    slug: string
  }
}

// Generar rutas estáticas para todos los destinos
export async function generateStaticParams() {
  return destinos.map((destino) => ({
    slug: destino.slug,
  }))
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: PageProps) {
  const destino = getDestinoBySlug(params.slug)
  
  if (!destino) {
    return {
      title: 'Destino no encontrado',
    }
  }

  return {
    title: `${destino.nombre} - Agencia de Viajes`,
    description: destino.fraseCorta,
  }
}

export default function DestinoPage({ params }: PageProps) {
  const destino = getDestinoBySlug(params.slug)

  if (!destino) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero del destino */}
      <HeroDestino destino={destino} />

      {/* Descripción del viaje */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-6">Sobre este destino</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                {destino.descripcion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Precios desde</h2>
            <p className="text-4xl md:text-5xl font-bold text-primary-600 mb-4">
              {formatPrice(destino.precioDesde)}
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              El precio puede variar según fechas, temporada y servicios adicionales seleccionados. 
              Contáctanos para obtener una cotización personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué incluye? */}
      <IncluyeSection incluye={destino.incluye} />

      {/* Galería de imágenes */}
      <GaleriaDestino destino={destino} />

      {/* Planes / Paquetes */}
      <section className="section bg-white" aria-labelledby="planes-heading">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 id="planes-heading" className="heading-2 mb-4">
              Elige tu plan
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Selecciona el plan que mejor se adapte a tus necesidades y presupuesto
            </p>
          </div>

          {/* Grid de planes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {destino.planes.map((plan, index) => (
              <PlanCard
                key={plan.nombre}
                plan={plan}
                destinoNombre={destino.nombre}
                isPopular={index === 1} // Estándar es el más popular
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Principal - Ley de Fitts */}
      <CTADestino destinoNombre={destino.nombre} />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatButton />
      
      {/* Footer */}
      <Footer showHelpCta={false} />
    </main>
  )
}
