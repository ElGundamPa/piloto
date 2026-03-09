'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface Testimonio {
  nombre: string
  destino: string
  texto: string
  rating: number
}

const testimonios: Testimonio[] = [
  {
    nombre: 'María García',
    destino: 'Cartagena',
    texto: 'Increíble experiencia. La atención fue personalizada desde el primer contacto. Nos organizaron todo perfectamente y pudimos disfrutar sin preocupaciones. Definitivamente repetiremos.',
    rating: 5,
  },
  {
    nombre: 'Carlos Rodríguez',
    destino: 'San Andrés',
    texto: 'El viaje a San Andrés superó todas nuestras expectativas. El equipo de Next Station Travel nos recomendó los mejores lugares y la logística fue impecable.',
    rating: 5,
  },
  {
    nombre: 'Ana Martínez',
    destino: 'Eje Cafetero',
    texto: 'Una experiencia única en el Eje Cafetero. La finca cafetera era hermosa y los tours estuvieron muy bien organizados. La asesoría durante todo el viaje fue excelente.',
    rating: 5,
  },
  {
    nombre: 'Diego López',
    destino: 'Medellín',
    texto: 'Viajamos en familia y todo salió perfecto. Nos ayudaron a elegir las mejores actividades para los niños y nos sentimos acompañados en todo momento.',
    rating: 5,
  },
  {
    nombre: 'Laura Sánchez',
    destino: 'Guatapé',
    texto: 'De las mejores decisiones que he tomado. El equipo fue super atento, respondiendo todas mis dudas incluso a altas horas. El hotel y los tours fueron de primera.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonios() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonios.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonios.length) % testimonios.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [isPaused, next])

  return (
    <section className="section bg-gray-50" aria-labelledby="testimonios-heading">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <h2 id="testimonios-heading" className="heading-2 mb-3 sm:mb-4">
            Lo que dicen nuestros viajeros
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-5 md:mb-6 rounded-full" />
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Cientos de viajeros han confiado en nosotros para crear sus mejores recuerdos
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Card del testimonio actual */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 relative">
            {/* Comilla decorativa */}
            <div className="absolute top-6 left-8 text-primary-100 select-none pointer-events-none" aria-hidden="true">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
            </div>

            <div className="relative z-10">
              <StarRating rating={testimonios[current].rating} />
              
              <blockquote className="mt-4 mb-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                  &ldquo;{testimonios[current].texto}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">
                  {testimonios[current].nombre.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonios[current].nombre}</p>
                  <p className="text-sm text-gray-500">Viaje a {testimonios[current].destino}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg text-gray-600 hover:text-primary-600 transition-all duration-300"
              aria-label="Testimonio anterior"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg text-gray-600 hover:text-primary-600 transition-all duration-300"
              aria-label="Testimonio siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
