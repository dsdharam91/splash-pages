import React from 'react';
import IfLocale from '../../../../components/if-locale/if-locale';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsDirectDebitEs extends React.Component {
  displayName = 'FaqMerchantsDirectDebitEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Domiciliación Bancaria</h2>
        <IfLocale domesticScheme='bacs'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            What is the Direct Debit Guarantee?
          </h3>
          <p className='para'>
            <a href='/direct-debit/guarantee/'
            className='u-link-color-p u-text-underline'>The Direct Debit Guarantee</a> offers protection to customers paying by
            Direct Debit in the rare event that there is an error in a payment.
          </p>
          <p className='para'>
            If a customer receives a refund they are not entitled to, they must pay it back at the organisation's
            request. Dispute resolution takes place outside of the Direct Debit scheme.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Do I need a Service User Number (SUN) or permission from my bank?
          </h3>
          <p className='para'>
            There is no need to talk to your bank either. We provide you with everything you need to sign up online
            and start taking payments.
          </p>
        </IfLocale>

        <IfLocale domesticScheme='sepa'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            ¿Qué es el Adeudo Directo SEPA o Domiciliación Bancaria?
          </h3>
          <p className='para'>
            El Adeudo Directo SEPA es un nuevo instrumento de pago introducido por la Unión Europea en agosto de 2014. Sustituye al
            esquema nacional de Adeudo Directo que operaba previamente. Permite a las empresas recaudar fondos denominados en euros
            de la <a href='https://gocardless.com/guides/sepa/countries/' target='_blank' className='u-link-color-p u-text-underline'>
            Zona Única de Pagos en Euros (SEPA, en inglés)</a>.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
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

          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            ¿Hay alguna comisión para el cliente?
          </h3>
          <p className='para'>
            No. Con SEPA, los bancos están obligados a no cobrar por las transacciones de Adeudo Directo.
            Por tanto, es gratis para tus clientes.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            ¿Necesito un ID de Acreedor SEPA?
          </h3>
          <p className='para'>
            No. Podemos suministrarte uno a través de nuestro banco asociado.
          </p>
        </IfLocale>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
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

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Para qué tipo de cobros no es beneficioso?
        </h3>
        <ul className='list'>
          <li>Transacciones que requieren una liquidación instantánea (p. ej., tiendas de comercio electrónico)</li>
          <li>Pagos puntuales de alto valor para bienes líquidos (p. ej., lingote de oro)</li>
          <li>Transacciones que podrían experimentar devoluciones (p. ej., juegos de azar)</li>
        </ul>

        <IfLocale domesticScheme='bacs'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            What are the payment timings for Direct Debit?
          </h3>
          <p className='para'>
            Unlike card payments, Direct Debits don't clear instantly. Instead, it takes 3 days to set up
            each new payer, and to collect from payers who you currently have a Direct Debit relationship with.
          </p>
          <p className='para'>
            Once GoCardless has collected payment from your customer we hold the money for 3 working days
            before sending it directly to your bank account.
          </p>
        </IfLocale>
        <IfLocale domesticScheme='sepa'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
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
        </IfLocale>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo realizar cobros puntuales a través del Adeudo Directo?
        </h3>
        <p className='para'>
          Sí - aunque el Adeudo Directo se utiliza habitualmente para cobros recurrentes,
          también se puede utilizar para cobros puntuales.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo cambiar fácilmente de proveedor de Adeudo Directo?
        </h3>
        <IfLocale domesticScheme='bacs'>
          <p className='para'>
            Yes - the <a href='/direct-debit/transferring/'
            className='u-link-color-p u-text-underline'>Direct Debit bulk change</a> process allows you to
            move Direct Debits between providers easily.
          </p>
          <p className='para'>
            GoCardless has experience managing the entire transfer process for several large merchants,
            including Greater Anglia Railways. Your existing customers won't need to take any action
            whatsoever, and we offer this service free of charge.
          </p>
        </IfLocale>
        <IfLocale domesticScheme='sepa'>
          <p className='para'>
            Sí, solo hay que modificar el mandato SEPA para añadir el nombre y el Identificador de Acreedor del nuevo proveedor.
            Debes notificar a tus clientes el cambio, pero no tienes que hacer nada más en absoluto. Para ello, puedes seguir la
            siguiente guía.
          </p>
          <p className='para'>
            GoCardless se ocupa totalmente del cambio. No tienes que hacer nada y el servicio es gratuito.
          </p>
        </IfLocale>
      </Translation>
    );
  }
}
