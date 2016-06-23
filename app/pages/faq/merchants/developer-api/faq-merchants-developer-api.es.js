import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import Link from '../../../../components/link/link';

export default class FaqMerchantsDeveloperApiEs extends React.Component {
  displayName = 'FaqMerchantsDeveloperApiEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Developer API</h2>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Para qué puedo utilizar la API?
        </h3>
        <p className='para'>
          Nuestra API REST permite a los desarrolladores crear fácilmente integraciones potentes con GoCardless.
          Consulta nuestra <Href to='documentation_link' className='u-link-color-p u-text-underline'>documentación</Href> para
          obtener más información.
        </p>
        <p className='para'>
          Se puede integrar como comerciante para realizar cobros en su propio nombrenombre o como partner para generar y
          gestionar múltiples comerciantes.
         </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo funciona la API Partner?
        </h3>
        <p className='para'>
          Una integración Partner permite a tus clientes generar rápida y fácilmente una cuenta GoCardless a través de
          un proceso Oauth y empezar a realizar cobros sin copiar y pegar usuarios API.
        </p>
        <p className='para'>
          Para obtener más información sobre nuestro producto para asociados/Partners, por favor <Link to='contact_sales'
          className='u-link-color-p u-text-underline'>contactanos</Link>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué lenguajes de programación puedo utilizar?
        </h3>
        <p className='para'>
          Disponemos de bibliotecas de clientes
          para <a href='https://github.com/gocardless/gocardless-pro-ruby' target='_blank' className='u-link-color-p u-text-underline'>
            Ruby
          </a>
          , <a href='https://github.com/gocardless/gocardless-pro-php' target='_blank' className='u-link-color-p u-text-underline'>
            PHP
          </a> and&nbsp;
          <a href='https://github.com/gocardless/gocardless-pro-java' target='_blank' className='u-link-color-p u-text-underline'>
            Java
          </a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo alojar las páginas de cobro en mi sitio?
        </h3>
        <p className='para'>
          Sí, pero solo con GoCardless Pro. Con Pro, podrás diseñar tus propias páginas de cobro y alojarlas directamente en tu sitio web.
          Hay ciertas normas que tendrás que cumplir, pero te ayudaremos a implementarlas con <a href='https://gocardless.com/es/guias/sepa/pagina-cobro-online/'
          target='_blank' className='u-link-color-p u-text-underline'>nuestras guías de implementación de SEPA y Bacs.</a>
        </p>
        <p className='para'>
          En GoCardless Standard, nosotros almacenamos la páginas de cobro para cumplir con los requisitos legales del Esquema SEPA.
        </p>
        <p className='para'>
          Puedes redireccionar al cliente a nuestras páginas de cobro y luego nosotros le redirigiremos a tu sitio web. Alternativamente,
          puedes permitir que tus clientes vayan a las páginas de cobro a través de un Pop-up en tu web.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Ofrecéis iFrames?
        </h3>
        <p className='para'>
          No - no ofrecemos iFraming de nuestras páginas de cobro ya que no nos convence lo suficiente la fiabilidad y seguridad de iFrames.
        </p>
        <p className='para'>
          Algunos de nuestros socios, como Zuora, pueden ofrecer un iFrame para tus páginas de cobros. También proporcionamos un
          Flow JS que evita que tengas que almacenar datos bancarios en tus servidores.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Se pueden hacer los pagos directamente a través de la API?
        </h3>
        <p className='para'>
          Solo una vez que la autorización (el mandato de Adeudo Directo) se haya realizado. Hay que enviar a los clientes a la páginaa
          seguraa de cobros para realizar la autorización inicial del Adeudo Directo.
        </p>
        <p className='para'>
          Una vez que la autorización se haya realizado, se puede solicitar el cobro a través de la API.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué información está disponible a través de la API?
        </h3>
        <p className='para'>
          GoCardless proporciona webhooks para notificar a los comerciantes cualquier modificación en el estado de sus cobros.
          Un ejemplo extremadamente útil es determinar cuándo se ha pagado una factura.
        </p>
        <p className='para'>
          Podrás encontrar más información acerca de nuestros webhooks disponibles y cómo utilizarlos en
          nuestra <a href='https://developer.gocardless.com/#webhooks-overview' className='u-link-color-p u-text-underline'>guía de
          webhooks</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Dónde puedo obtener soporte técnico?
        </h3>
        <p className='para'>
          Puedes enviarnos un correo electrónico a <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' />. Nuestros desarrolladores estarán disponibles de 10:00 a 19:00 horas de lunes a viernes,
          para ayudarte con tus consultas técnicas.
        </p>
      </Translation>
    );
  }
}
