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
      
      {/* Hero section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
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
