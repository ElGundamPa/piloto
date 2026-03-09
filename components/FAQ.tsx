'use client'

import { useState } from 'react'

interface FAQItem {
  pregunta: string
  respuesta: string
}

const faqs: FAQItem[] = [
  {
    pregunta: '¿Cómo funciona el proceso de cotización?',
    respuesta: 'Es muy sencillo: nos cuentas tu destino ideal, fechas y presupuesto por WhatsApp o a través de nuestro formulario. En menos de 24 horas recibirás una propuesta personalizada que podemos ajustar hasta que sea perfecta para ti.',
  },
  {
    pregunta: '¿Los precios incluyen vuelos?',
    respuesta: 'Depende del plan seleccionado. El plan Básico generalmente incluye transporte terrestre, mientras que los planes Estándar y Premium incluyen vuelos. En tu cotización personalizada te detallaremos exactamente qué incluye cada opción.',
  },
  {
    pregunta: '¿Puedo personalizar mi viaje?',
    respuesta: 'Absolutamente. Cada viaje lo diseñamos a la medida de tus preferencias. Podemos ajustar itinerarios, alojamientos, actividades y presupuesto. No vendemos paquetes rígidos, creamos experiencias únicas.',
  },
  {
    pregunta: '¿Qué pasa si necesito ayuda durante el viaje?',
    respuesta: 'Contamos con asistencia 24/7. Puedes contactarnos por WhatsApp en cualquier momento durante tu viaje. Nuestro equipo está siempre disponible para resolver cualquier situación o consulta.',
  },
  {
    pregunta: '¿Cuánto tiempo de anticipación necesito para reservar?',
    respuesta: 'Recomendamos al menos 2-3 semanas de anticipación para destinos nacionales y 4-6 semanas para internacionales. Sin embargo, también manejamos reservas de último momento según disponibilidad.',
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos transferencias bancarias, pagos con tarjeta de crédito y débito, y facilidades de pago. Te informamos todas las opciones al momento de tu cotización.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section bg-gray-50" aria-labelledby="faq-heading">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 id="faq-heading" className="heading-2 mb-3 sm:mb-4">
            Preguntas frecuentes
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos las dudas más comunes de nuestros viajeros
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-6 py-5 min-h-[56px] gap-4"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {faq.pregunta}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.respuesta}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
