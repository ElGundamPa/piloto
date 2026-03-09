import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'
import CTAWhatsAppCard from '@/components/CTAWhatsAppCard'

export const metadata = {
  title: 'Servicios - Next Station Travel',
  description: 'Descubre nuestros servicios: experiencias turísticas personalizadas, asesoría completa y acompañamiento antes, durante y después del viaje.',
}

const servicioIcons: Record<string, JSX.Element> = {
  plane: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  globe: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  target: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  handshake: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  building: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  truck: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21.75a1.125 1.125 0 001.125-1.125v-3.75a1.125 1.125 0 00-1.125-1.125h-3.375m0 0V6.375a1.125 1.125 0 00-1.125-1.125H3.375a1.125 1.125 0 00-1.125 1.125v8.25m15.375 0h-15" />
    </svg>
  ),
  compass: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  clipboard: (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
}

const colorByIndex = [
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
  'bg-primary-100 text-primary-600',
]

export default function ServiciosPage() {
  const servicios = [
    {
      iconKey: 'plane',
      title: 'Viajes Nacionales',
      description: 'Explora los destinos más increíbles de Colombia. Desde las playas del Caribe hasta los Andes, diseñamos tu experiencia perfecta.',
      features: ['Cartagena, San Andrés, Santa Marta', 'Eje Cafetero, Medellín, Bogotá', 'Guatapé, Villa de Leyva, Nuquí', 'Y muchos destinos más']
    },
    {
      iconKey: 'globe',
      title: 'Viajes Internacionales',
      description: 'Ampliamos tus horizontes con destinos internacionales seleccionados. Planificamos cada detalle para que solo te preocupes por disfrutar.',
      features: ['Asesoría completa para destinos internacionales', 'Vuelos, hoteles y traslados incluidos', 'Tours y experiencias exclusivas', 'Soporte durante todo el viaje']
    },
    {
      iconKey: 'target',
      title: 'Viajes Personalizados',
      description: 'Tu viaje, a tu manera. Creamos experiencias únicas adaptadas a tus gustos, necesidades y presupuesto. Sin paquetes predefinidos, sin compromisos.',
      features: ['Diseño de itinerarios personalizados', 'Ajustes según tu presupuesto', 'Experiencias a medida', 'Flexibilidad total']
    },
    {
      iconKey: 'handshake',
      title: 'Asesoría Integral',
      description: 'Te acompañamos en cada paso del proceso. Desde la planificación inicial hasta tu regreso, estamos contigo.',
      features: ['Asesoría antes del viaje', 'Soporte durante el viaje 24/7', 'Seguimiento post-viaje', 'Atención humana personalizada']
    },
    {
      iconKey: 'building',
      title: 'Reservas de Alojamiento',
      description: 'Encontramos el alojamiento perfecto para ti. Desde hoteles boutique hasta resorts todo incluido, según tus preferencias.',
      features: ['Hoteles de todas las categorías', 'Resorts y ecolodges', 'Fincas y posadas tradicionales', 'Mejores tarifas garantizadas']
    },
    {
      iconKey: 'truck',
      title: 'Transporte y Traslados',
      description: 'Organizamos todos tus traslados para que viajes tranquilo. Vuelos, transporte terrestre, traslados al aeropuerto y más.',
      features: ['Gestión de vuelos', 'Transporte terrestre privado o compartido', 'Traslados aeropuerto-hotel', 'Seguridad y puntualidad garantizadas']
    },
    {
      iconKey: 'compass',
      title: 'Tours y Experiencias',
      description: 'Vive experiencias auténticas y únicas. Tours culturales, aventuras, gastronomía y actividades exclusivas que hacen la diferencia.',
      features: ['Tours guiados en destinos', 'Experiencias gastronómicas', 'Actividades de aventura', 'Acceso a lugares exclusivos']
    },
    {
      iconKey: 'clipboard',
      title: 'Cotizaciones sin Compromiso',
      description: 'Solicita tu cotización personalizada. Sin compromiso, sin presión. Te enviamos propuestas detalladas para que elijas la mejor opción.',
      features: ['Respuesta rápida', 'Cotizaciones detalladas', 'Sin compromiso de compra', 'Ajustes hasta encontrar tu viaje ideal']
    }
  ]

  const porqueElegirnos = [
    {
      iconKey: 'target',
      color: 'bg-primary-100 text-primary-600',
      title: 'Atención Personalizada',
      description: 'Cada cliente es único. Nos tomamos el tiempo para entender tus necesidades y crear el viaje perfecto para ti.',
    },
    {
      iconKey: 'handshake',
      color: 'bg-secondary-100 text-secondary-600',
      title: 'Confianza y Transparencia',
      description: 'Sin sorpresas, sin letras pequeñas. Te informamos de todo de manera clara y transparente.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      color: 'bg-primary-100 text-primary-600',
      title: 'Soporte 24/7',
      description: 'Estamos disponibles antes, durante y después de tu viaje. Cualquier duda o problema, te respondemos inmediatamente.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      color: 'bg-secondary-100 text-secondary-600',
      title: 'Mejores Precios',
      description: 'Trabajamos con proveedores de confianza para ofrecerte las mejores tarifas sin comprometer la calidad.',
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Soluciones completas de viaje
            </div>
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
                className="card p-6 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${colorByIndex[index]}`}>
                  {servicioIcons[servicio.iconKey]}
                </div>
                <h3 className="heading-3 mb-4">{servicio.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {servicio.description}
                </p>
                <ul className="space-y-2">
                  {servicio.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
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
              {porqueElegirnos.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      {item.icon || servicioIcons[item.iconKey!]}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
