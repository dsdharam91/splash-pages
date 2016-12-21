import React from 'react';
import Message from '../../../../components/message/message';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsSecurityEs extends React.Component {
  displayName = 'FaqMerchantsSecurityEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'><strong>Seguridad</strong></h2>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Cómo sé que mi dinero está seguro?
          </strong>
        </h3>
        <p className='para'>
          Estamos autorizados por la Autoridad de Conducta Financiera (FCA) en el Reino Unido a proporcionar servicios
          de cobros como <a href='https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000000NMgMPAA1'
          title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>una Institución de cobro autorizada
          </a> y actualmente prestamos servicio a más de <Message pointer='number_of_merchants' /> empresas.
        </p>
        <p className='para'>
          Todo el dinero recaudado se guarda en una cuenta Escrow (nosotros no podemos tocar el dinero de esta cuenta, no está en nuestro balance y
          está supervisada por los reguladores comunitarios) en uno de nuestros bancos asociados.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Cómo protege GoCardless mis datos?
          </strong>
        </h3>
        <p className='para'>
          La seguridad es de vital importancia en GoCardless. Tomamos una serie de medidas
          para asegurarnos de que los datos de nuestros clientes permanezcan seguros en todo momento:
        </p>

        <ul className='list'>
          <li>Nuestro acceso al sistema de Adeudo Directo nos lo proporciona uno de los principales bancos europeos, que ha aprobado
          nuestros sistemas.</li>
          <li>Todos los datos del cliente se tratan conforme a las leyes europeas de protección de datos, incluida la Ley de Protección
          de Datos 1998.</li>
          <li>Nuestro servidor de datos financieros está separado de nuestro servidor de aplicaciones por múltiples cortafuegos.</li>
          <li>Toda la comunicación cliente-servidor está encriptada con tecnología de cifrado SSL de 256 bits. El sistema bancario
          requiere solo 128 bits.</li>
        </ul>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Qué hacéis con mi dinero antes de ingresármelo?
          </strong>
        </h3>
        <p className='para'>
          Todo el dinero recaudado se guarda en una cuenta Escrow del cliente en uno de nuestros bancos asociados.
        </p>
        <p className='para'>
          Los fondos se guardan de plena conformidad con las disposiciones de protección aceptadas por los reguladores Europeos.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Es seguro para mis clientes?
          </strong>
        </h3>
        <p className='para'>
          Sí. Tus clientes están protegidos
          por <a href='https://gocardless.com/es/guias/sepa/proteccion/' className='u-link-color-p u-text-underline'>
          la Protección al cliente en el Adeudo Directo SEPA</a> en la Eurozona y por <a href='/direct-debit/guarantee/'
          className='u-link-color-p u-text-underline'>la Protección al consumidor de Adeudo Directo</a> en el Reino Unido.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            Revelación de vulnerabilidades
          </strong>
        </h3>
        <p className='para'>
          Nos preocupamos enormemente por la seguridad de nuestros clientes. Si consideras que
          has descubierto una vulnerabilidad, te rogamos que la comuniques de manera responsable. Compartir las
          vulnerabilidades públicamente pone en riesgo a toda nuestra base usuarios, por lo que te rogamos que estos
          asuntos se mantengan en privado hasta que tengamos la oportunidad de corregirlos.
        </p>
        <p className='para'>
          Si estás interesado en probar si nuestro servicio presenta alguna vulnerabilidad,
          agradeceríamos cualquier informe en relación a nuestro panel de control y nuestra API.
          Puedes <a href="https://manage-sandbox.gocardless.com/signup"
          className="u-link-color-p u-text-underline">registrarte en una cuenta de sandbox/prueba</a> para empezar.
        </p>
        <p className='para'>
          En reconocimiento a tus esfuerzos, y para agradecerte la colaboración por mantener la
          seguridad de GoCardless, ofrecemos gratificaciones económicas por descubrir vulnerabilidades responsables.
          Las gratificaciones se determinan conforme a nuestro criterio, en función de la gravedad del problema.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            Comunicar problemas
          </strong>
        </h3>
        <ul className='list'>
          <li>
            Envíanos un correo electrónico a <a href='mailto:security@gocardless.com'
            className='u-link-color-p u-text-underline'>security@gocardless.com</a> en cuanto detectes el problema.
            Nuestro identificador de clave GPG es <code>684ED3A3</code>, y su huella de seguridad es
            <code>8A4C 2665 6632 8EC4 1C83 6BB4 D9E1 ADB2 684E D3A3</code>
          </li>
          <li>
            Incluye toda la información que sea posible, incluidos los pasos para reproducir el problema.
          </li>
          <li>
            No abuses de la vulnerabilidad, excepto para demostrar el problema al personal de GoCardless.
          </li>
          <li>
            No informes a nadie del problema hasta que lo hayamos solucionado
          </li>
        </ul>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            Requisitos para recibir la gratificación
          </strong>
        </h3>
        <p className='para'>
          Agradecemos los esfuerzos de quienes descubran problemas que afecten a la seguridad de la web,
          y estamos dispuestos a recompensar su trabajo. Sin embargo, no premiaremos ningún comportamiento
          malintencionado que genere deliberadamente una interrupción de nuestro servicio. Los requisitos
          para recibir la gratificación se deciden caso por caso, pero nunca premiaremos:
        </p>
        <ul className='list'>
          <li>
            Los ataques de denegación de servicio.
          </li>
          <li>
            El uso de herramientas automáticas como escáneres y fuzzers, ya que tienen un impacto negativo
            en nuestro servicio y generan un enorme caos que cuesta mucho tiempo solucionar.
          </li>
          <li>
            Los ataques de ingeniería social.
          </li>
          <li>
            Los ataques físicos o amenazas a nuestro personal o usuarios.
          </li>
        </ul>
      </Translation>
    );
  }
}
