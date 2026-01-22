import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import DestinoCard from '@/components/DestinoCard'
import { destinos } from '@/lib/destinos'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import WelcomeScreen from '@/components/WelcomeScreen'

/**
 * Página Principal - E-commerce de Destinos
 * 
 * Estructura diseñada siguiendo principios de UI/UX:
 * - Ley de Hick: Grid claro de destinos (decisiones simples)
 * - Diseño escaneable: Patrón F/Z visual
 * - Mobile-first responsive design
 * - Experiencia tipo e-commerce moderna
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* WelcomeScreen solo en Home (menos fricción en el resto del sitio) */}
      <WelcomeScreen />

      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section - Inspiración inicial */}
      <HeroSection />
      
      {/* Grid de Destinos - Estilo E-commerce */}
      <section 
        className="section bg-white"
        aria-labelledby="destinos-heading"
      >
        <div className="container-custom">
          {/* Encabezado de sección con scroll reveal */}
          <ScrollReveal direction="fade" delay={100}>
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 
                id="destinos-heading"
                className="heading-2 mb-3 sm:mb-4"
              >
                Descubre Colombia
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full"></div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
                Explora los destinos más increíbles de Colombia. 
                Cada viaje es una experiencia única diseñada para ti.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid de destinos - Layout tipo e-commerce con scroll reveal - Responsive mejorado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {destinos.map((destino, index) => (
              <ScrollReveal key={destino.id} direction="up" delay={index * 100}>
                <DestinoCard destino={destino} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA para ver todos los destinos */}
          <ScrollReveal direction="fade" delay={300}>
            <div className="text-center">
              <Link 
                href="/destinos"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 active:scale-98 min-h-[44px] flex items-center justify-center"
              >
                Ver todos los destinos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Botón flotante de WhatsApp - Acceso constante */}
      <WhatsAppFloatButton />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
