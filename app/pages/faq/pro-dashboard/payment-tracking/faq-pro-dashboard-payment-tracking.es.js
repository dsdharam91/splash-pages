import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentTrackingEs extends React.Component {
  displayName = 'FaqProDashboardPaymentTrackingEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Control de los cobros</h2>

        <p className='para'>
          Hay dos maneras de seguir el estado de tus Adeudos Directos:
        </p>

        <ul className='list'>
          <li>
            <strong>En la <a href='https://manage.gocardless.com/payments'
            target='_blank' className='u-link-color-p u-text-underline'>sección "Payments"</a> del panel de control</strong> :
            puedes ver la lista de todos los cobros que has realizado. Se pueden filtrar por fecha de creación o por estado actual
            de cobro. Generalmente, se filtran los resultados para ver los cobros fallidos recientemente.
          </li>
          <li>
            <strong>En la <a href='https://manage.gocardless.com/customers'
            target='_blank' className='u-link-color-p u-text-underline'>sección "Customers"</a> del panel de control</strong> :
            puedes ver el conjunto de cobros realizados a un cliente.
          </li>
        </ul>

        <p className='para'>
          Es posible filtrar por periodo o estado (por ejemplo, para ver los cobros realizados recientemente),
          además de exportarlos a un documento Excel.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>Los estados</h3>

        <table className='table table--faq u-color-dark-gray'>
          <thead>
            <tr>
              <th>
                Estados
              </th>
              <th>
                Explicación
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Created (Creado)</td>
              <td>Has generado una orden de Adeudo Directo que aún no se ha transmitido a los bancos.</td>
            </tr>
            <tr>
              <td>Submitted (Enviado al banco)</td>
              <td>La orden de Adeudo Directo se ha enviado a los bancos.</td>
            </tr>
            <tr>
              <td>Confirmed (Cobrado)</td>
              <td>El Adeudo Directo se ha ejecutado y GoCardless ha recibido un informe de ejecución sin fallo
              alguno en este cobro. GoCardless procederá entonces al envío de los fondos recaudados.</td>
            </tr>
            <tr>
              <td>Paid out (Transferido)</td>
              <td>Los fondos recaudados se transferirán a tu cuenta bancaria designada.</td>
            </tr>
            <tr>
              <td>Failed (Fallido)</td>
              <td>El Adeudo Directo ha resultado fallido. Este estado se puede producir el día del Adeudo Directo o hasta cinco
              días después y, por tanto, se puede dar antes o después de la recepción del estado "Confirmed" o "Paid Out".</td>
            </tr>
            <tr>
              <td>Late failure settled (Fallo tardío liquidado)</td>
              <td>SSi el fallo es tardío y los fondos recaudados ya se han transferido (estado "Paid Out"), GoCardless debe
              recuperar los fondos de tu cuenta a fin de restablecer una balanza de pagos nula. Este estado indica que GoCardless
              ha recibido correctamente los fondos de tu parte.</td>
            </tr>
            <tr>
              <td>Charged back (Reembolso)</td>
              <td>El cliente se ha opuesto al cobro y ha exigido un reembolso o devolución conforme a la protección del consumidor definida
              por el reglamento SEPA.</td>
            </tr>
            <tr>
              <td>Chargeback settled (Reembolso compensado)</td>
              <td>Tras la oposición del cliente, GoCardless debe recuperar los fondos de tu cuenta para proceder al reembolso al cliente.
              Este estado indica que GoCardless ha conseguido recuperar los fondos.</td>
            </tr>
          </tbody>
        </table>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>Las secuencias habituales</h3>

        <p className='para'>
          Cobro correcto (pagado) :
        </p>

        <img src='/images/faq/en/payment-success.png' />

        <p className='para'>
          Cobro fallado el día del Adeudo Directo:
        </p>

        <img src='/images/faq/en/payment-failed.png' />

        <p className='para'>
          Cobro fallado posteriormente:
        </p>

        <img src='/images/faq/en/payment-late-failure.png' />

        <p className='para'>
          Cobro rechazado por el pagador:
        </p>

        <img src='/images/faq/en/payment-chargebacked.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>Representación</h3>

        <p className='para'>
          Puedes <strong>reintentar sin coste alguno cualquier cobro fallido</strong> directamente haciendo clic en “Retry”.
          No tendrás ningún gasto por este tipo de incidencias. No se puede reintentar un cobro que ha sido rechazado.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

      </Translation>
    );
  }
}