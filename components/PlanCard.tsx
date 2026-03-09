'use client'

import { Plan, formatPrice } from '@/lib/destinos'
import { getWhatsAppUrl } from '@/lib/config'

interface PlanCardProps {
  plan: Plan
  destinoNombre: string
  isPopular?: boolean
}

export default function PlanCard({ plan, destinoNombre, isPopular = false }: PlanCardProps) {
  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en el plan ${plan.nombre} para ${destinoNombre}. ¿Pueden darme más información?`
    window.open(getWhatsAppUrl(message), '_blank')
  }

  return (
    <div className={`relative card p-6 md:p-8 h-full flex flex-col transition-all duration-300 ${isPopular
        ? 'ring-2 ring-primary-500 shadow-xl scale-[1.02]'
        : 'hover:ring-1 hover:ring-gray-200'
      }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            Más Popular
          </span>
        </div>
      )}

      <h3 className={`heading-3 text-2xl mb-2 ${isPopular ? 'text-primary-600' : ''}`}>
        {plan.nombre}
      </h3>

      <div className="mb-4">
        <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          {formatPrice(plan.precio)}
        </p>
        <p className="text-sm text-gray-500">Por persona</p>
      </div>

      <p className="text-gray-600 mb-6">{plan.descripcion}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.caracteristicas.map((caracteristica, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{caracteristica}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleWhatsAppClick}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${isPopular
            ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-gray-900 hover:bg-primary-50 hover:text-primary-700 hover:ring-2 hover:ring-primary-200'
          }`}
        aria-label={`Cotizar plan ${plan.nombre} por WhatsApp`}
      >
        Cotizar este plan
      </button>
    </div>
  )
}
