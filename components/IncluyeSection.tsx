import { Destino } from '@/lib/destinos'

/**
 * Sección "¿Qué incluye el viaje?"
 * 
 * Principios aplicados:
 * - Iconos para reconocimiento rápido
 * - Diseño escaneable con grid visual
 * - Proximidad: Items relacionados agrupados
 */
interface IncluyeSectionProps {
  incluye: Destino['incluye']
}

export default function IncluyeSection({ incluye }: IncluyeSectionProps) {
  const items = [
    {
      key: 'alojamiento' as const,
      nombre: 'Alojamiento',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      key: 'transporte' as const,
      nombre: 'Transporte',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      key: 'tours' as const,
      nombre: 'Tours',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      key: 'asistencia' as const,
      nombre: 'Asistencia',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ]

  return (
    <section className="section bg-gray-50" aria-labelledby="incluye-heading">
      <div className="container-custom">
        <h2 id="incluye-heading" className="heading-2 text-center mb-12">
          ¿Qué incluye el viaje?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.key}
              className={`card p-6 text-center transition-all duration-300 ${
                incluye[item.key]
                  ? 'bg-white shadow-md'
                  : 'bg-gray-100 opacity-60'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full ${
                incluye[item.key]
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-gray-200 text-gray-400'
              }`}>
                {item.icon}
              </div>
              <p className={`font-semibold ${
                incluye[item.key] ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {item.nombre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
