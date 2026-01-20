'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/config'
import { destinos } from '@/lib/destinos'

/**
 * Página de cotización
 * 
 * Formulario completo para solicitar cotización personalizada
 * Los datos se envían vía WhatsApp para contacto directo
 */
export default function CotizarPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    destino: '',
    fechas: '',
    personas: '',
    mensaje: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'El correo no es válido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    } else if (!/^[0-9+\s()-]{7,}$/.test(formData.telefono)) {
      newErrors.telefono = 'El teléfono no es válido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Construir mensaje para WhatsApp
    const message = WHATSAPP_MESSAGES.quote(formData)

    // Abrir WhatsApp con el mensaje
    const whatsappUrl = getWhatsAppUrl(message)
    window.open(whatsappUrl, '_blank')

    // Resetear formulario después de un breve delay
    setTimeout(() => {
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        destino: '',
        fechas: '',
        personas: '',
        mensaje: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-500 text-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-white mb-6">
              Solicita tu Cotización
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Completa el formulario y nos pondremos en contacto contigo para diseñar tu viaje perfecto
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="section bg-white flex-grow">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.nombre ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Juan Pérez"
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-500">{errors.nombre}</p>
                  )}
                </div>

                {/* Correo y Teléfono en una fila en desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="correo" className="block text-sm font-semibold text-gray-700 mb-2">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.correo ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.correo && (
                      <p className="mt-1 text-sm text-red-500">{errors.correo}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.telefono ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+57 300 123 4567"
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                {/* Destino */}
                <div>
                  <label htmlFor="destino" className="block text-sm font-semibold text-gray-700 mb-2">
                    Destino o tipo de viaje
                  </label>
                  <select
                    id="destino"
                    name="destino"
                    value={formData.destino}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Selecciona un destino...</option>
                    {destinos.map(destino => (
                      <option key={destino.id} value={destino.nombre}>
                        {destino.nombre}
                      </option>
                    ))}
                    <option value="Internacional">Destino Internacional</option>
                    <option value="Personalizado">Viaje Personalizado</option>
                  </select>
                </div>

                {/* Fechas y Personas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fechas" className="block text-sm font-semibold text-gray-700 mb-2">
                      Fechas aproximadas
                    </label>
                    <input
                      type="text"
                      id="fechas"
                      name="fechas"
                      value={formData.fechas}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="Ej: Marzo 2024, Semana Santa, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="personas" className="block text-sm font-semibold text-gray-700 mb-2">
                      Número de personas
                    </label>
                    <input
                      type="text"
                      id="personas"
                      name="personas"
                      value={formData.personas}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="Ej: 2 adultos, 1 niño"
                    />
                  </div>
                </div>

                {/* Mensaje adicional */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Cuéntanos más sobre tu viaje ideal, presupuesto, preferencias especiales..."
                  />
                </div>

                {/* Botón enviar */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-whatsapp w-full md:w-auto text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <svg 
                          className="w-6 h-6 animate-spin-slow" 
                          fill="none" 
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                          ></circle>
                          <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Enviar por WhatsApp
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-sm text-gray-600">
                    Al enviar, se abrirá WhatsApp con tu solicitud prellenada. 
                    Un asesor te contactará en breve para continuar con tu cotización personalizada.
                  </p>
                </div>
              </form>
            </div>

            {/* Información adicional */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">¿Por qué cotizar con nosotros?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Respuesta rápida en menos de 24 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Cotizaciones personalizadas sin compromiso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Ajustes hasta encontrar tu viaje ideal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Atención humana durante todo el proceso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
