import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsHowItWorksEs extends React.Component {
  displayName = 'FaqMerchantsHowItWorksEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>¿Cómo funciona?</h2>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cuándo recibo mi cobro?
        </h3>
        <p className='para'>
          Ingresamos automáticamente tus fondos en la cuenta bancaria
          especificada <strong>3 días hábiles</strong> después de haberlos cobrado al cliente.
          Obtendrás más información <a href='https://help.gocardless.com/customer/portal/articles/1563666'
          className='u-link-color-p u-text-underline'>aquí</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué tipos de cobros puedo realizar?
        </h3>
        <p className='para'>
          Puedes realizar cobros puntuales, recurrentes o variables a través de Domiciliación Bancaria on nuestro
          panel de control online o la API.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo funciona el proceso de cobro?
        </h3>
        <ul className='list'>
          <li>
             Con nuestra herramienta online podrás enviar una solicitud de autorización (Mandato SEPA) para realizar
             cobros de Adeudo Directo o Domiciliación Bancaria de un cliente en 2 clics.
          </li>
          <li>
            Enviamos a tu cliente un enlace a nuestro mandato Online. Para confirmar la autorización,
            hacen clic en el enlace y completan nuestro proceso de compra seguro.
          </li>
          <li>
            Una vez autorizan el Mandato SEPA, puedes realizar cobros de los clientes automáticamente incorporándolos
            a una suscripción o un cobro puntual. Puedes hacer esto desde nuestro panel, a través de Excel o desde la
            API.
          </li>
          <li>
            Los clientes recibirán una notificación cada vez que se realice un nuevo cobro.
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo autoriza un cobro mi cliente?
        </h3>
        <p className='para'>
          Puedes generar una solicitud de autorización de GoCardless (Mandato SEPA) añadiendo directamente a un cliente
          (Solo para clientes Pro o superior), envíandoles un enlace al Mandato SEPA online o envíandoles un email para
          que se suscriban a uno de tus Planes.
        </p>
        <p className='para'>
          Tu cliente solo tendrá que hacer clic en el enlace e introducir sus datos en nuestra página segura de cobros
          online para realizar una Domociliación Bancaria o Adeudo Directo y autorizarte a realizar cobros futuros automáticamente.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Pueden los clientes registrarse en mi sitio web?
        </h3>
        <p className='para'>
          Sí - los clientes pueden autorizar el Mandato SEPA en tu propio flujo de venta, bien a través de una integración
          con nuestra <a href='https://developer.gocardless.com/' className='u-link-color-p u-text-underline'>API</a> o
          generando un enlace para un plan de cobros e incrustándolo como botón en tu propio sitio web.
        </p>
        <p className='para'>
          Al hacer clic en el botón, el cliente será reenviado a nuestra página segura de cobros online desde la que puede autorizar los pagos.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo configurar los cobros para que empiecen y terminen en una fecha concreta?
        </h3>
        <p className='para'>
          Sí - puedes personalizar fácilmente el día, la fecha, la frecuencia y la duración de los cobros.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo modificar un cobro o una suscripción una vez que se ha creado?
        </h3>
        <p className='para'>
          Siempre y cuando el cobro no se haya enviado aún al banco, podrás cancelar fácilmente un pago
          existente o quitar a un cliente del plan y añadir a otro nuevo. Todo esto se puede hacer desde el
          panel de control en cuestión de segundos.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo sé si me han pagado?
        </h3>
        <p className='para'>
          Nuestro panel de control ofrece información en tiempo real de todos tus
          cobros y clientes, lo que te permite controlar el estado de un cobro en cualquier momento.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Pondréis algún límite a mi cuenta?
        </h3>
        <p className='para'>
          Hay ciertas situaciones en las que podría ser necesario imponer restricciones en tu cuenta:
        </p>
        <ul className='list'>
          <li>Si consideramos que podría haber una brecha en la seguridad de los datos de tu cuenta;</li>
          <li>Si sospechamos un uso no autorizado o fraudulento de tu cuenta;</li>
          <li>Cuando nos lo exija la ley.</li>
        </ul>
        <p className='para'>
          Si alguna vez tenemos que hacerlo, puedes estar seguro de que te lo notificaremos tan pronto
          como sea posible y nos aseguraremos de que siempre haya alguien con el que puedas hablar para
          resolver la situación lo más rápido posible.
        </p>
      </Translation>
    );
  }
}
