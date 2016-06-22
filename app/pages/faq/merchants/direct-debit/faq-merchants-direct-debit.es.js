import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsDirectDebitEs extends React.Component {
  displayName = 'FaqMerchantsDirectDebitEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Domiciliación Bancaria</h2>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué es el Adeudo Directo SEPA o Domiciliación Bancaria?
        </h3>
        <p className='para'>
          El Adeudo Directo SEPA es un nuevo instrumento de pago introducido por la Unión Europea en agosto de 2014. Sustituye al
          esquema nacional de Adeudo Directo que operaba previamente. Permite a las empresas recaudar fondos denominados en euros
          de la <a href='https://gocardless.com/es/guias/sepa/que-es-sepa/' target='_blank' className='u-link-color-p u-text-underline'>
          Zona Única de Pagos en Euros (SEPA)</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué es la protección al consumidor?
        </h3>
        <p className='para'>
          Los consumidores tienen derecho a que se les reembolse un cobro de Adeudo Directo SEPA autorizado.
          Para que sea válida, el pagador deberá presentar la solicitud de reembolso en su banco en un plazo
          de 8 semanas después de haberse efectuado el cargo en la cuenta.
        </p>
        <p className='para'>
          Los consumidores también pueden pedir el reembolso inmediato de un cobro de Adeudo Directo no autorizado
          o fraudulento. Deben hacerlo lo antes posible y como máximo a los 13 meses de haberse efectuado el cargo en
          su cuenta.
        </p>
        <p className='para'>
          Un reembolso del banco no implica que la reclamación contra la factura subyacente esté justificada.
          Corresponde al comerciante resolver su disputa comercial con el cliente.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Hay alguna comisión para el cliente?
        </h3>
        <p className='para'>
          No. Con SEPA, los bancos están obligados a no cobrar por las transacciones de Adeudo Directo.
          Por tanto, es gratis para tus clientes.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Necesito un ID de Acreedor SEPA?
        </h3>
        <p className='para'>
          No. Podemos suministrarte uno a través de nuestro banco asociado.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Para qué tipo de cobros es beneficioso?
        </h3>

        <p className='para'>
          Son particularmente beneficiosos para:
        </p>
        <ul className='list'>
          <li>Cobros recurrentes (p. ej. suscripciones o donativos regulares)</li>
          <li>Clientes con una relación habitual (p. ej., suministradores)</li>
          <li>Facturación de servicios (p. ej., contabilidad, asesoramiento fiscal, etc.)</li>
        </ul>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Para qué tipo de cobros no es beneficioso?
        </h3>
        <ul className='list'>
          <li>Transacciones que requieren una liquidación instantánea (p. ej., tiendas de comercio electrónico)</li>
          <li>Pagos puntuales de alto valor para bienes líquidos (p. ej., lingote de oro)</li>
          <li>Transacciones que podrían experimentar devoluciones (p. ej., juegos de azar)</li>
        </ul>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cuáles son los plazos de cobro para el Adeudo Directo SEPA?
        </h3>
        <p className='para'>
          Al contrario que los pagos con tarjeta, las transacciones de Adeudo Directo SEPA no se liquidan instantáneamente.
          En lugar de eso, debes enviar una solicitud de cobro 3 días hábiles antes de que venza el pago cuando hayas creado
          un nuevo mandato con tu cliente.
        </p>
        <p className='para'>
          Una vez que GoCardless haya realizado el cobro a tu cliente, recibirás los fondos en tu cuenta bancaria
          a los 4 días hábiles.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo realizar cobros puntuales a través del Adeudo Directo?
        </h3>
        <p className='para'>
          Sí - aunque el Adeudo Directo se utiliza habitualmente para cobros recurrentes,
          también se puede utilizar para cobros puntuales.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo cambiar fácilmente de proveedor de Adeudo Directo?
        </h3>
        <p className='para'>
          Sí, solo hay que modificar el mandato SEPA para añadir el nombre y el Identificador de Acreedor del nuevo proveedor.
          Debes notificar a tus clientes el cambio, pero no tienes que hacer nada más en absoluto. Para ello, puedes seguir la
          siguiente guía.
        </p>
        <p className='para'>
          GoCardless se ocupa totalmente del cambio. No tienes que hacer nada y el servicio es gratuito.
        </p>
      </Translation>
    );
  }
}
