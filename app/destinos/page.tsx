import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DestinoCard from '@/components/DestinoCard'
import { destinos } from '@/lib/destinos'

/**
 * Página de catálogo de destinos
 * 
 * Muestra todos los destinos disponibles en un formato de catálogo
 */
export const metadata = {
  title: 'Destinos - Next Station Travel',
  description: 'Descubre todos los destinos increíbles de Colombia. Cartagena, San Andrés, Medellín, Guatapé, Eje Cafetero y más.',
}

export default function DestinosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section - Identidad de exploración */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="container-custom px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              {destinos.length} destinos disponibles
            </div>
            <h1 className="heading-1 text-white mb-6">
              Nuestros Destinos
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Explora los destinos más increíbles de Colombia.
              Cada viaje es una experiencia única diseñada para ti.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de destinos */}
      <section className="section bg-white flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinos.map((destino) => (
              <DestinoCard key={destino.id} destino={destino} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
