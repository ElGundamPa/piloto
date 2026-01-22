import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANY_INFO } from '@/lib/config'
import Image from 'next/image'
import Link from 'next/link'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'
import CTAWhatsAppCard from '@/components/CTAWhatsAppCard'

/**
 * Página "Quiénes somos"
 * 
 * Objetivos:
 * - Generar confianza
 * - Mostrar valores y propósito
 * - Conectar emocionalmente con los visitantes
 * - Destacar el diferencial (atención personalizada)
 */
export const metadata = {
  title: 'Quiénes somos - Next Station Travel',
  description: 'Conoce la historia, misión y visión de Next Station Travel. Una agencia de viajes que prioriza la atención personalizada y la confianza.',
}

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
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
            {/* Misión */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="heading-3">Nuestra Misión</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Confianza</h3>
                <p className="text-gray-600">
                  Construimos relaciones duraderas basadas en transparencia y honestidad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalización</h3>
                <p className="text-gray-600">
                  Cada viaje es único, diseñado especialmente para ti
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💬</span>
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
