import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsCustomerExperienceEs extends React.Component {
  displayName = 'FaqMerchantsCustomerExperienceEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Experiencia de Usuario</h2>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            ¿Puedo rellenar el mandato SEPA online en nombre de mi cliente?
          </h3>
          <p className='para'>
            No - debido a las estrictas restricciones en la Domiciliación Bancaria SEPA, los pagadores deben
            rellenar sus datos de cobro personalmente.
          </p>

          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            ¿Aparecerá el nombre de mi empresa en el extracto bancario del cliente?
          </h3>
          <p className='para'>
            Con GoCardless, el nombre de tu empresa aparecerá en el campo de referencia de la transacción y GoCardless
            aparecerá como el emisor. Con GoCardless Pro, solo aparecerá el nombre de tu negocio en la transacción.
          </p>
          <p className='para'>
            Puedes personalizar como mostramos el nombre de tu negocio en los extractos bancarios de tus clientes
            en los "Settings" de tu panel de control.
          </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo me puede pagar el usuario?
        </h3>
        <p className='para'>
          Tu cliente puede introducir sus datos bancarios online a través de GoCardless; si utilizas GoCardless Pro
          también puede hacerlo por teléfono o por escrito.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo alojar las páginas de cobro en mi sitio web?
        </h3>
        <p className='para'>
          De nuevo, depende de los productos que elijas. Con GoCardless, para cumplir con las normas del esquema de
          Adeudo Directo, alojamos con seguridad las páginas de cobros en nuestro sitio. Puedes redirigir al cliente
          a nuestra página de cobros y le redirigiremos de nuevo a tu sitio. Como alternativa, puedes dar permiso para
          acceder a través de una ventana emergente desde tu sitio.
        </p>
        <p className='para'>
          Con GoCardless Pro, puedes albergar las páginas de pago en tu propio sitio y no tendrás que redirigir a tus clientes.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Ofrecéis iFrames?
        </h3>
        <p className='para'>
          No - no ofrecemos iFraming de nuestras páginas de cobros. Si utilizas GoCardless Pro, ofrecemos un Flow JS
          que te permite no tener ningún dato bancario en tu servidor.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Se pueden hacer los pagos directamente a través de la API?
        </h3>
        <p className='para'>
          Solo una vez que la autorización se haya realizado. Hay que enviar a los clientes a nuestras páginas
          seguras de cobros para realizar la autorización inicial del Adeudo Directo.
        </p>
        <p className='para'>
          Una vez que la autorización se haya realizado, se puede solicitar el cobro a través de la API.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Pueden los clientes pagar desde su móvil?
        </h3>
        <p className='para'>
          Sí - GoCardless es compatible con móviles y tabletas. Nuestras páginas de cobros funcionarán con
          cualquier navegador de Internet.
        </p>
      </Translation>
    );
  }
}
