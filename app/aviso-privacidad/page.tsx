import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANY_INFO } from '@/lib/config'

/**
 * Página de Aviso de Privacidad
 * 
 * Documento legal que explica cómo se manejan los datos personales
 */
export const metadata = {
  title: 'Aviso de Privacidad - Next Station Travel',
  description: 'Aviso de privacidad de Next Station Travel S.A.S. Información sobre el tratamiento de datos personales.',
}

export default function AvisoPrivacidadPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-white">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-1 mb-6">Aviso de Privacidad</h1>
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-lg max-w-none space-y-6">
              <section>
                <h2 className="heading-3 mt-8 mb-4">1. Información General</h2>
                <p className="text-gray-700 leading-relaxed">
                  {COMPANY_INFO.legalName}, identificada con NIT {COMPANY_INFO.nit}, 
                  con domicilio en {COMPANY_INFO.address}, es responsable del tratamiento 
                  de sus datos personales. Este aviso explica cómo recopilamos, utilizamos, 
                  protegemos y compartimos su información personal.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">2. Datos Personales que Recopilamos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Recopilamos la siguiente información personal:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nombre completo</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Información sobre viajes (destinos, fechas, número de personas)</li>
                  <li>Cualquier otra información que nos proporcione voluntariamente</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">3. Finalidad del Tratamiento</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Utilizamos sus datos personales para las siguientes finalidades:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Procesar solicitudes de cotización y reservas de viajes</li>
                  <li>Comunicarnos con usted sobre sus viajes y servicios</li>
                  <li>Proporcionar asesoría personalizada</li>
                  <li>Enviar información promocional sobre destinos y ofertas (con su consentimiento)</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                  <li>Mejorar nuestros servicios y experiencia del cliente</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">4. Consentimiento</h2>
                <p className="text-gray-700 leading-relaxed">
                  Al proporcionar sus datos personales y usar nuestros servicios, usted 
                  otorga su consentimiento expreso para el tratamiento de sus datos de 
                  acuerdo con este aviso de privacidad.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">5. Compartir Información</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podemos compartir su información con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Proveedores de servicios de viajes (hoteles, aerolíneas, tours)</li>
                  <li>Proveedores de servicios tecnológicos que nos ayudan a operar nuestro negocio</li>
                  <li>Autoridades gubernamentales cuando sea requerido por ley</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  No vendemos ni alquilamos su información personal a terceros para fines comerciales.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">6. Seguridad de los Datos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas 
                  para proteger sus datos personales contra acceso no autorizado, alteración, 
                  divulgación o destrucción.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">7. Sus Derechos</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Acceder a sus datos personales</li>
                  <li>Rectificar datos inexactos o incompletos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Revocar su consentimiento en cualquier momento</li>
                  <li>Presentar quejas ante la autoridad de protección de datos</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">8. Retención de Datos</h2>
                <p className="text-gray-700 leading-relaxed">
                  Conservaremos sus datos personales durante el tiempo necesario para cumplir 
                  con las finalidades descritas en este aviso y las obligaciones legales aplicables.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">9. Cookies y Tecnologías Similares</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar 
                  su experiencia. Puede configurar su navegador para rechazar cookies, aunque 
                  esto puede afectar algunas funcionalidades del sitio.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">10. Cambios a este Aviso</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de modificar este aviso de privacidad en cualquier 
                  momento. Los cambios serán publicados en esta página con la fecha de última 
                  actualización.
                </p>
              </section>

              <section>
                <h2 className="heading-3 mt-8 mb-4">11. Contacto</h2>
                <p className="text-gray-700 leading-relaxed">
                  Para ejercer sus derechos o realizar consultas sobre este aviso de privacidad, 
                  puede contactarnos en:
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
