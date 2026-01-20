import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'

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
      <section className="section bg-gradient-to-br from-primary-600 to-secondary-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-white mb-6">
              ¿Listo para planificar tu próximo viaje?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contáctanos y recibe una cotización personalizada sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.default)}
                target="_blank"
                className="btn-whatsapp text-lg px-8 py-4 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Habla con un asesor
              </Link>
              <Link
                href="/cotizar"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
