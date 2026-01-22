'use client'

import CTAWhatsAppCard from '@/components/CTAWhatsAppCard'

/**
 * CTA para página de destino
 * Componente cliente para manejar el click de WhatsApp
 */
interface CTADestinoProps {
  destinoNombre: string
}

export default function CTADestino({ destinoNombre }: CTADestinoProps) {
  return (
    <CTAWhatsAppCard
      title="¿Listo para vivir esta experiencia?"
      description={`Habla con uno de nuestros asesores y obtén una cotización personalizada para ${destinoNombre}`}
      whatsappMessage={`Hola, me interesa el viaje a ${destinoNombre}. ¿Pueden darme más información y cotización?`}
      buttonLabel="Hablar por WhatsApp y cotizar"
    />
  )
}
