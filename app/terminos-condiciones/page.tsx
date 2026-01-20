import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANY_INFO } from '@/lib/config'

/**
 * Página de Términos y Condiciones
 * 
 * Documento legal que establece las condiciones de uso del servicio
 */
export const metadata = {
  title: 'Términos y Condiciones - Next Station Travel',
  description: 'Términos y condiciones de uso de los servicios de Next Station Travel S.A.S.',
}

export default function TerminosCondicionesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Términos y Condiciones</h1>
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-3 mt-8 mb-4">1. Aceptación de los Términos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Al acceder y utilizar los servicios de {COMPANY_INFO.legalName}, identificada 
                  con NIT {COMPANY_INFO.nit}, usted acepta estar sujeto a estos términos y condiciones. 
                  Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">2. Descripción del Servicio</h2>
                <p className="text-gray-700 leading-relaxed">
                  {COMPANY_INFO.name} es una agencia de viajes virtual e híbrida que ofrece servicios 
                  de asesoría, cotización, reserva y gestión de viajes turísticos a destinos regionales, 
                  nacionales e internacionales. Actuamos como intermediarios entre usted y los proveedores 
                  de servicios turísticos (hoteles, aerolíneas, tours, etc.).
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">3. Reservas y Pagos</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Las cotizaciones proporcionadas son estimaciones y pueden variar según disponibilidad y fechas.</li>
                  <li>Los precios están sujetos a cambios sin previo aviso hasta que se confirme la reserva.</li>
                  <li>Se requerirá un depósito o pago completo según las políticas de cada servicio.</li>
                  <li>Las condiciones de pago se acordarán previamente a la confirmación de la reserva.</li>
                  <li>Nos reservamos el derecho de rechazar cualquier solicitud de reserva.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">4. Política de Cancelación y Reembolso</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Las políticas de cancelación y reembolso varían según el proveedor de servicios. 
                  En general:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Las cancelaciones deben comunicarse con la mayor antelación posible.</li>
                  <li>Los reembolsos están sujetos a las políticas de cancelación de cada proveedor.</li>
                  <li>Pueden aplicarse cargos por cancelación según las condiciones acordadas.</li>
                  <li>Los reembolsos pueden tardar varios días hábiles en procesarse.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">5. Responsabilidades del Cliente</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Proporcionar información veraz y precisa para las reservas.</li>
                  <li>Verificar que todos los documentos de viaje estén en orden (pasaporte, visas, seguros).</li>
                  <li>Cumplir con las leyes y regulaciones del destino.</li>
                  <li>Llegar puntualmente a los servicios reservados.</li>
                  <li>Informarnos de cualquier cambio o cancelación con la mayor antelación posible.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">6. Responsabilidades de Next Station Travel</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Proporcionar asesoría profesional y personalizada.</li>
                  <li>Gestionar reservas con proveedores confiables y reconocidos.</li>
                  <li>Proporcionar información clara sobre servicios y condiciones.</li>
                  <li>Ofrecer soporte antes, durante y después del viaje.</li>
                  <li>Actuar como intermediario en caso de problemas o reclamos.</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">7. Limitación de Responsabilidad</h2>
                <p className="text-gray-700 leading-relaxed">
                  {COMPANY_INFO.name} actúa como intermediario y no es responsable directa por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                  <li>Cambios en servicios por parte de proveedores (hoteles, aerolíneas, etc.).</li>
                  <li>Retrasos, cancelaciones o problemas con vuelos u otros transportes.</li>
                  <li>Condiciones climáticas u otras circunstancias fuera de nuestro control.</li>
                  <li>Pérdida, daño o robo de equipaje o pertenencias personales.</li>
                  <li>Problemas de salud o accidentes durante el viaje.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Recomendamos encarecidamente la contratación de seguros de viaje apropiados.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">8. Documentos de Viaje</h2>
                <p className="text-gray-700 leading-relaxed">
                  Es responsabilidad del cliente verificar y obtener todos los documentos necesarios 
                  para viajar, incluyendo pero no limitado a: pasaportes válidos, visas, vacunas 
                  requeridas, seguros de viaje y cualquier otro documento exigido por las autoridades 
                  del destino.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">9. Propiedad Intelectual</h2>
                <p className="text-gray-700 leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y diseño, 
                  es propiedad de {COMPANY_INFO.name} y está protegido por leyes de propiedad intelectual. 
                  No se permite la reproducción sin autorización previa.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">10. Protección de Datos</h2>
                <p className="text-gray-700 leading-relaxed">
                  El tratamiento de sus datos personales se rige por nuestro Aviso de Privacidad, 
                  que forma parte integral de estos términos y condiciones. Al usar nuestros servicios, 
                  acepta nuestro tratamiento de datos según se describe en el Aviso de Privacidad.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">11. Modificaciones</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de modificar estos términos y condiciones en cualquier 
                  momento. Los cambios serán publicados en esta página con la fecha de última actualización. 
                  El uso continuado de nuestros servicios después de los cambios constituye su aceptación 
                  de los nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">12. Ley Aplicable y Jurisdicción</h2>
                <p className="text-gray-700 leading-relaxed">
                  Estos términos y condiciones se rigen por las leyes de la República de Colombia. 
                  Cualquier disputa será resuelta en los tribunales competentes de Colombia.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">13. Contacto</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para consultas sobre estos términos y condiciones, puede contactarnos en:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>{COMPANY_INFO.legalName}</strong><br />
                    NIT: {COMPANY_INFO.nit}<br />
                    Correo: <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600 hover:underline">{COMPANY_INFO.email}</a><br />
                    Teléfono: {COMPANY_INFO.phone}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
