'use client'

import { Plan, formatPrice } from '@/lib/destinos'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'

/**
 * Card de Plan (Básico/Estándar/Premium)
 * 
 * Principios aplicados:
 * - Ley de Fitts: CTA grande y claro
 * - Proximidad: Información del plan agrupada
 * - Contraste: Plan Premium destacado visualmente
 */
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
    <div className={`card p-6 md:p-8 h-full flex flex-col ${
      isPopular ? 'ring-2 ring-primary-500 shadow-xl' : ''
    }`}>
      {/* Badge "Popular" si aplica */}
      {isPopular && (
        <div className="inline-block bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 self-start">
          Más Popular
        </div>
      )}

      {/* Nombre del plan - Jerarquía visual */}
      <h3 className={`heading-3 text-2xl mb-2 ${isPopular ? 'text-primary-600' : ''}`}>
        {plan.nombre}
      </h3>

      {/* Precio destacado */}
      <div className="mb-4">
        <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
          {formatPrice(plan.precio)}
        </p>
        <p className="text-sm text-gray-500">Por persona</p>
      </div>

      {/* Descripción del plan */}
      <p className="text-gray-600 mb-6">{plan.descripcion}</p>

      {/* Lista de características */}
      <ul className="space-y-3 mb-8 flex-1">
        {plan.caracteristicas.map((caracteristica, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg 
              className="w-5 h-5 text-secondary-500 flex-shrink-0 mt-0.5" 
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

      {/* CTA - Ley de Fitts */}
      <button
        onClick={handleWhatsAppClick}
        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
          isPopular 
            ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
        aria-label={`Cotizar plan ${plan.nombre} por WhatsApp`}
      >
        Cotizar este plan
      </button>
    </div>
  )
}
