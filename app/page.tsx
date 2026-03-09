import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import DestinoCard from '@/components/DestinoCard'
import { destinos } from '@/lib/destinos'
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'
import WelcomeScreen from '@/components/WelcomeScreen'
import OfertasDestacadas from '@/components/OfertasDestacadas'
import StatsCounter from '@/components/StatsCounter'
import Testimonios from '@/components/Testimonios'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeScreen />
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Ofertas especiales */}
      <OfertasDestacadas />
      
      {/* Grid de Destinos */}
      <section 
        className="section bg-gray-50"
        aria-labelledby="destinos-heading"
      >
        <div className="container-custom">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {destinos.map((destino, index) => (
              <ScrollReveal key={destino.id} direction="up" delay={index * 100}>
                <DestinoCard destino={destino} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="fade" delay={300}>
            <div className="text-center">
              <Link 
                href="/destinos"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 active:scale-[0.98] min-h-[44px]"
              >
                Ver todos los destinos
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contador de estadísticas */}
      <StatsCounter />

      {/* Testimonios */}
      <Testimonios />

      {/* FAQ */}
      <FAQ />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloatButton />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
