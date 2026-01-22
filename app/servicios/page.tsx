import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'
import CTAWhatsAppCard from '@/components/CTAWhatsAppCard'

/**
 * Página de Servicios
 * 
 * Objetivos:
 * - Mostrar claramente qué ofrece la agencia
 * - Destacar el diferencial de atención personalizada
 * - Generar confianza y cerrar ventas
 */
export const metadata = {
  title: 'Servicios - Next Station Travel',
  description: 'Descubre nuestros servicios: experiencias turísticas personalizadas, asesoría completa y acompañamiento antes, durante y después del viaje.',
}

export default function ServiciosPage() {
  const servicios = [
    {
      icon: '✈️',
      title: 'Viajes Nacionales',
      description: 'Explora los destinos más increíbles de Colombia. Desde las playas del Caribe hasta los Andes, diseñamos tu experiencia perfecta.',
      features: [
        'Cartagena, San Andrés, Santa Marta',
        'Eje Cafetero, Medellín, Bogotá',
        'Guatapé, Villa de Leyva, Nuquí',
        'Y muchos destinos más'
      ]
    },
    {
      icon: '🌎',
      title: 'Viajes Internacionales',
      description: 'Ampliamos tus horizontes con destinos internacionales seleccionados. Planificamos cada detalle para que solo te preocupes por disfrutar.',
      features: [
        'Asesoría completa para destinos internacionales',
        'Vuelos, hoteles y traslados incluidos',
        'Tours y experiencias exclusivas',
        'Soporte durante todo el viaje'
      ]
    },
    {
      icon: '🎯',
      title: 'Viajes Personalizados',
      description: 'Tu viaje, a tu manera. Creamos experiencias únicas adaptadas a tus gustos, necesidades y presupuesto. Sin paquetes predefinidos, sin compromisos.',
      features: [
        'Diseño de itinerarios personalizados',
        'Ajustes según tu presupuesto',
        'Experiencias a medida',
        'Flexibilidad total'
      ]
    },
    {
      icon: '🤝',
      title: 'Asesoría Integral',
      description: 'Te acompañamos en cada paso del proceso. Desde la planificación inicial hasta tu regreso, estamos contigo.',
      features: [
        'Asesoría antes del viaje',
        'Soporte durante el viaje 24/7',
        'Seguimiento post-viaje',
        'Atención humana personalizada'
      ]
    },
    {
      icon: '🏨',
      title: 'Reservas de Alojamiento',
      description: 'Encontramos el alojamiento perfecto para ti. Desde hoteles boutique hasta resorts todo incluido, según tus preferencias.',
      features: [
        'Hoteles de todas las categorías',
        'Resorts y ecolodges',
        'Fincas y posadas tradicionales',
        'Mejores tarifas garantizadas'
      ]
    },
    {
      icon: '🚗',
      title: 'Transporte y Traslados',
      description: 'Organizamos todos tus traslados para que viajes tranquilo. Vuelos, transporte terrestre, traslados al aeropuerto y más.',
      features: [
        'Gestión de vuelos',
        'Transporte terrestre privado o compartido',
        'Traslados aeropuerto-hotel',
        'Seguridad y puntualidad garantizadas'
      ]
    },
    {
      icon: '🎭',
      title: 'Tours y Experiencias',
      description: 'Vive experiencias auténticas y únicas. Tours culturales, aventuras, gastronomía y actividades exclusivas que hacen la diferencia.',
      features: [
        'Tours guiados en destinos',
        'Experiencias gastronómicas',
        'Actividades de aventura',
        'Acceso a lugares exclusivos'
      ]
    },
    {
      icon: '📋',
      title: 'Cotizaciones sin Compromiso',
      description: 'Solicita tu cotización personalizada. Sin compromiso, sin presión. Te enviamos propuestas detalladas para que elijas la mejor opción.',
      features: [
        'Respuesta rápida',
        'Cotizaciones detalladas',
        'Sin compromiso de compra',
        'Ajustes hasta encontrar tu viaje ideal'
      ]
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Todo lo que necesitas para hacer realidad tu viaje soñado, con atención personalizada y acompañamiento integral
            </p>
          </div>
        </div>
      </section>

      {/* Servicios grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className="card p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{servicio.icon}</div>
                <h3 className="heading-3 mb-4">{servicio.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servicio.description}
                </p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-6">¿Por qué elegirnos?</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Atención Personalizada</h3>
                    <p className="text-gray-600">
                      Cada cliente es único. Nos tomamos el tiempo para entender tus necesidades y crear el viaje perfecto para ti.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Confianza y Transparencia</h3>
                    <p className="text-gray-600">
                      Sin sorpresas, sin letras pequeñas. Te informamos de todo de manera clara y transparente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                    <p className="text-gray-600">
                      Estamos disponibles antes, durante y después de tu viaje. Cualquier duda o problema, te respondemos inmediatamente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mejores Precios</h3>
                    <p className="text-gray-600">
                      Trabajamos con proveedores de confianza para ofrecerte las mejores tarifas sin comprometer la calidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAWhatsAppCard
        title="¿Listo para planificar tu próximo viaje?"
        description="Contáctanos y recibe una cotización personalizada sin compromiso"
        whatsappMessage={WHATSAPP_MESSAGES.default}
        buttonLabel="Hablar por WhatsApp y cotizar"
      />

      <Footer />
    </main>
  )
}
