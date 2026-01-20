'use client'

import { useState } from 'react'
import { destinos } from '@/lib/destinos'
import { WHATSAPP_NUMBER } from '@/lib/config'

/**
 * Formulario de Búsqueda
 * 
 * Formulario estilo Decameron con tabs y campos organizados
 * Mobile-first design con animaciones mejoradas
 */
export default function SearchForm() {
  const [searchType, setSearchType] = useState<'hotel' | 'vuelo-hotel'>('hotel')
  const [destino, setDestino] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [habitaciones, setHabitaciones] = useState(1)
  const [adultos, setAdultos] = useState(2)
  const [ninos, setNinos] = useState(0)
  const [codigoPromo, setCodigoPromo] = useState('')
  const [showGift, setShowGift] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Construir mensaje para WhatsApp
    const message = `📋 *Búsqueda de ${searchType === 'hotel' ? 'Hotel' : 'Vuelo + Hotel'}*\n\n` +
      `📍 *Destino:* ${destino || 'No especificado'}\n` +
      `📅 *Check-in:* ${checkIn || 'No especificado'}\n` +
      `📅 *Check-out:* ${checkOut || 'No especificado'}\n` +
      `🛏️ *Habitaciones:* ${habitaciones}\n` +
      `👥 *Huéspedes:* ${adultos} adultos, ${ninos} niños\n` +
      (codigoPromo ? `🎟️ *Código promocional:* ${codigoPromo}\n` : '') +
      `\n¡Hola! Me gustaría obtener más información sobre esta búsqueda.`
    
    // Abrir WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0]
  const minCheckOut = checkIn || today

  return (
    <div className="w-full max-w-5xl md:max-w-full mx-auto px-4 sm:px-6 md:px-4 lg:px-6 xl:px-8">
      <form 
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200/50 p-4 sm:p-5 md:p-4 lg:p-6 transform transition-all duration-500 hover:shadow-3xl search-form-entrance"
        style={{ color: '#000000' }}
      >
        {/* Tabs - Centrados */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-5 lg:mb-6">
          <button
            type="button"
            onClick={() => setSearchType('hotel')}
            className={`flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 tab-button min-h-[44px] ${
              searchType === 'hotel'
                ? 'bg-primary-600 text-white shadow-md scale-105 active'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary-600'
            }`}
            aria-label="Buscar solo hotel"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="whitespace-nowrap">HOTEL</span>
          </button>
          <button
            type="button"
            onClick={() => setSearchType('vuelo-hotel')}
            className={`flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 md:px-6 lg:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 tab-button min-h-[44px] ${
              searchType === 'vuelo-hotel'
                ? 'bg-primary-600 text-white shadow-md scale-105 active'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-primary-600'
            }`}
            aria-label="Buscar vuelo y hotel"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span className="hidden sm:inline whitespace-nowrap">VUELO + HOTEL</span>
            <span className="sm:hidden whitespace-nowrap">VUELO+H</span>
          </button>
        </div>

        {/* Campos de búsqueda - Mobile: vertical, Desktop: horizontal - Mejor distribuidos */}
        <div className="w-full md:w-auto">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-4 md:gap-2.5 lg:gap-3 xl:gap-4 mb-4 sm:mb-6 md:mb-4 lg:mb-5">
            {/* Destino/Hotel */}
            <div className="md:col-span-3">
              <label htmlFor="destino" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5" style={{ color: '#000000' }}>
                Destino o Hotel
              </label>
              <select
                id="destino"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 bg-white form-input-focus min-h-[44px] hover:border-gray-300"
                required
              >
                <option value="">Seleccionar destino</option>
                {destinos.map(d => (
                  <option key={d.id} value={d.nombre}>{d.nombre}</option>
                ))}
                <option value="Internacional">Destino Internacional</option>
              </select>
            </div>

            {/* Check-in */}
            <div className="md:col-span-2">
              <label htmlFor="checkin" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5" style={{ color: '#000000' }}>
                Check-in
              </label>
              <input
                type="date"
                id="checkin"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={today}
                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 form-input-focus min-h-[44px] hover:border-gray-300 bg-white"
                required
              />
            </div>

            {/* Check-out */}
            <div className="md:col-span-2">
              <label htmlFor="checkout" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5" style={{ color: '#000000' }}>
                Check-out
              </label>
              <input
                type="date"
                id="checkout"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={minCheckOut}
                className="w-full px-3 sm:px-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 form-input-focus min-h-[44px] hover:border-gray-300 bg-white"
                required
              />
            </div>

            {/* Habitaciones y Huéspedes */}
            <div className="md:col-span-2">
              <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5" style={{ color: '#000000' }}>
                Habitaciones
              </label>
              <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-1.5 sm:p-2 min-h-[44px] hover:border-gray-300 transition-all duration-300">
                <button
                  type="button"
                  onClick={() => setHabitaciones(Math.max(1, habitaciones - 1))}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-50 border border-gray-300 flex items-center justify-center hover:bg-primary-50 hover:border-primary-500 transition-all duration-300 font-semibold text-gray-700 text-base sm:text-lg"
                  aria-label="Reducir habitaciones"
                >
                  −
                </button>
                <span className="flex-1 text-center font-semibold text-gray-900 text-sm sm:text-base">{habitaciones}</span>
                <button
                  type="button"
                  onClick={() => setHabitaciones(habitaciones + 1)}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-50 border border-gray-300 flex items-center justify-center hover:bg-primary-50 hover:border-primary-500 transition-all duration-300 font-semibold text-gray-700 text-base sm:text-lg"
                  aria-label="Aumentar habitaciones"
                >
                  +
                </button>
              </div>
              <p className="mt-1.5 text-xs text-gray-600">{adultos} adultos, {ninos} niños</p>
            </div>

            {/* Botón buscar */}
            <div className="md:col-span-1">
              <label className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5 opacity-0 pointer-events-none" style={{ color: '#000000' }}>
                Buscar
              </label>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 sm:py-3.5 px-3 sm:px-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 search-submit-btn min-h-[44px] text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">BUSCAR</span>
              </button>
            </div>
          </div>

          {/* Código promocional - Badge compacto */}
          <div className="w-full md:w-auto md:max-w-lg lg:max-w-xl mx-auto">
            <div className="hidden sm:block">
              {showGift ? (
                <button
                  type="button"
                  onClick={() => setShowGift(false)}
                  className="w-full group relative cursor-pointer"
                  aria-label="Abrir código promocional"
                >
                  <div className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border border-primary-200/60 hover:border-primary-300 hover:bg-gradient-to-r hover:from-primary-100 hover:to-primary-150 transition-all duration-300 hover:shadow-md transform hover:scale-[1.02] active:scale-[0.98]">
                    {/* Icono de etiqueta/descuento */}
                    <div className="relative flex-shrink-0">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {/* Pequeño indicador de porcentaje */}
                      <span className="absolute -top-1 -right-1 text-[8px] font-bold text-white bg-primary-600 rounded-full w-3.5 h-3.5 flex items-center justify-center group-hover:bg-primary-700 transition-colors">%</span>
                    </div>
                    
                    {/* Texto */}
                    <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-primary-700 transition-colors duration-300">
                      Tengo un código promocional
                    </span>
                  </div>
                </button>
              ) : (
                <div className="animate-fadeIn">
                  <label htmlFor="codigo-promo" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5 text-center" style={{ color: '#000000' }}>
                    Código Promocional
                    <span className="text-xs font-normal text-gray-500 ml-1">(Opcional)</span>
                  </label>
                  <input
                    type="text"
                    id="codigo-promo"
                    value={codigoPromo}
                    onChange={(e) => setCodigoPromo(e.target.value)}
                    placeholder="Ingresa tu código promocional"
                    className="w-full px-3 sm:px-4 py-3 sm:py-3.5 border-2 border-primary-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 form-input-focus min-h-[44px] hover:border-primary-400 bg-white animate-slideDown"
                    autoFocus
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Código promocional móvil */}
        <div className="sm:hidden mt-4">
          {showGift ? (
            <button
              type="button"
              onClick={() => setShowGift(false)}
              className="w-full group relative cursor-pointer"
              aria-label="Abrir código promocional"
            >
              <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border border-primary-200/60 active:border-primary-300 active:bg-gradient-to-r active:from-primary-100 active:to-primary-150 transition-all duration-300 active:shadow-md transform active:scale-[0.98]">
                {/* Icono de etiqueta/descuento */}
                <div className="relative flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600 group-active:text-primary-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {/* Pequeño indicador de porcentaje */}
                  <span className="absolute -top-1 -right-1 text-[8px] font-bold text-white bg-primary-600 rounded-full w-3.5 h-3.5 flex items-center justify-center group-active:bg-primary-700 transition-colors">%</span>
                </div>
                
                {/* Texto */}
                <span className="text-xs font-medium text-gray-700 group-active:text-primary-700 transition-colors duration-300">
                  Tengo un código promocional
                </span>
              </div>
            </button>
          ) : (
            <div className="animate-fadeIn">
              <label htmlFor="codigo-promo-mobile" className="block text-xs sm:text-sm font-semibold mb-2 sm:mb-2.5" style={{ color: '#000000' }}>
                Código Promocional
                <span className="text-xs font-normal text-gray-500 ml-1">(Opcional)</span>
              </label>
              <input
                type="text"
                id="codigo-promo-mobile"
                value={codigoPromo}
                onChange={(e) => setCodigoPromo(e.target.value)}
                placeholder="Ingresa tu código"
                className="w-full px-3 sm:px-4 py-3 border-2 border-primary-300 rounded-lg sm:rounded-xl text-sm sm:text-base focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 form-input-focus min-h-[44px] hover:border-primary-400 bg-white animate-slideDown"
                autoFocus
              />
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
