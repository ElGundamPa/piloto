import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANY_INFO } from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'
import CTAWhatsAppCard from '@/components/CTAWhatsAppCard'

export const metadata = {
  title: 'Quiénes somos - Next Station Travel',
  description: 'Conoce la historia, misión y visión de Next Station Travel. Una agencia de viajes que prioriza la atención personalizada y la confianza.',
}

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section - Diferenciado con tonos más cálidos */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-48 h-48 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>
              Nuestra esencia
            </div>
            <h1 className="heading-1 text-white mb-6">
              Quiénes somos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Tu agencia de viajes de confianza, donde cada experiencia es personalizada y cada viaje es único
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra historia */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-6">Nuestra historia</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Next Station Travel S.A.S</strong> nació de la pasión por conectar a las personas
                con experiencias que transforman. Somos una agencia de viajes virtual e híbrida colombiana
                que combina la innovación digital con el toque humano que hace la diferencia.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nos especializamos en crear viajes personalizados, ya sea para destinos regionales,
                nacionales o internacionales. Pero lo que realmente nos distingue es nuestra atención:
                acompañamos a nuestros clientes antes, durante y después de su viaje.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Creemos que cada viaje es una oportunidad única de crear recuerdos inolvidables.
                Por eso, no solo vendemos paquetes turísticos; diseñamos experiencias a medida que
                se adaptan a tus sueños, necesidades y presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="heading-3">Nuestra Misión</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="heading-3">Nuestra Visión</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-6">Nuestros valores</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Confianza</h3>
                <p className="text-gray-600">
                  Construimos relaciones duraderas basadas en transparencia y honestidad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-secondary-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalización</h3>
                <p className="text-gray-600">
                  Cada viaje es único, diseñado especialmente para ti
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Atención humana</h3>
                <p className="text-gray-600">
                  Asesoría personalizada antes, durante y después de tu viaje
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAWhatsAppCard
        title="¿Listo para tu próxima aventura?"
        description="Contáctanos y te ayudaremos a planificar el viaje de tus sueños"
        whatsappMessage={WHATSAPP_MESSAGES.default}
        buttonLabel="Hablar por WhatsApp y cotizar"
      />

      <Footer />
    </main>
  )
}
