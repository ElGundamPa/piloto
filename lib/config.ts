/**
 * Configuración centralizada de la aplicación
 * 
 * Información de Next Station Travel S.A.S
 */

// Información de la empresa
export const COMPANY_INFO = {
  name: 'Next Station Travel S.A.S',
  legalName: 'Next Station Travel S.A.S',
  nit: '901234567-8', // Actualizar con el NIT real
  email: 'info@nextstationtravel.com', // Actualizar con el email real
  phone: '+57 300 123 4567', // Actualizar con el teléfono real
  address: 'Colombia',
  description: 'Agencia de viajes virtual e híbrida especializada en experiencias turísticas regionales, nacionales e internacionales',
  mission: 'Ofrecer experiencias turísticas personalizadas con atención humana y asesoría antes, durante y después del viaje.',
  vision: 'Ser la agencia de viajes de referencia en Colombia, reconocida por generar confianza y crear experiencias únicas que transforman.',
}

// Número de WhatsApp - Puedes usar variable de entorno o valor directo
// Formato: código de país + número sin espacios ni símbolos
// Ejemplo para Colombia: 573001234567
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573001234567'

// Mensajes predefinidos para WhatsApp
export const WHATSAPP_MESSAGES = {
  default: `Hola, me interesa conocer más sobre los servicios de ${COMPANY_INFO.name}.`,
  hero: `Hola, me interesa conocer más sobre los servicios de ${COMPANY_INFO.name}.`,
  cta: 'Hola, estoy listo para planificar mi próximo viaje. ¿Pueden ayudarme?',
  contact: (name: string, message: string) => 
    `Hola, me llamo ${name}. ${message}`,
  quote: (data: {
    nombre: string
    correo: string
    telefono: string
    destino?: string
    fechas?: string
    personas?: string
    mensaje?: string
  }) => {
    let message = `*Solicitud de Cotización*\n\n`
    message += `👤 *Nombre:* ${data.nombre}\n`
    message += `📧 *Correo:* ${data.correo}\n`
    message += `📱 *Teléfono:* ${data.telefono}\n`
    if (data.destino) message += `✈️ *Destino:* ${data.destino}\n`
    if (data.fechas) message += `📅 *Fechas:* ${data.fechas}\n`
    if (data.personas) message += `👥 *Personas:* ${data.personas}\n`
    if (data.mensaje) message += `\n💬 *Mensaje:* ${data.mensaje}\n`
    return message
  }
}

/**
 * Genera la URL de WhatsApp con el mensaje predefinido
 */
export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.default): string => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
}
