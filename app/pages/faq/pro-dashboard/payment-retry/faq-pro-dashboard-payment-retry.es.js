import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRetryEs extends React.Component {
  displayName = 'FaqProDashboardPaymentRetryEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Reintento de Cobros</h2>
        <p className='para'>
          Cuando un cobro ha fallado, te indicaremos el motivo acompañado de una breve descripción. Hay 3 motivos principales
          para que no se acepte:
        </p>
        <ul className='list'>
          <li>
            <strong>El cobro ha fallado y se puede volver a presentar</strong> : esto se produce principalmente cuando no hay
            fondos suficientes en la cuenta bancaria de tu cliente (fondos insuficientes) o cuando se ha recibido "contacta con
            el cliente".
          </li>
          <li>
            <strong>El cobro ha fallado igual que el mandato</strong> : tienes que contactar con tu cliente para volver a
            activar un mandato.
          </li>
          <li>
            <strong>El cobro ha sido rechazado por el cliente</strong> : tienes que contactar con tu cliente para conocer los
            motivos del rechazo. Solo tienes que establecer un nuevo cobro una vez que se ha solucionado el rechazo.
          </li>
        </ul>

        <p className='para'>
          Cuando puedas volver a presentar el cobro, verás el botón "Retry" en la parte superior derecha de la página del historial
          de cobros. Si haces clic en este botón, volveremos a ejecutar el cobro. La nueva fecha de Adeudo Directo, así como el estado
          del cobro, aparecerá en el mismo historial que el cobro inicial.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>Motivos de rechazo</h3>

        <p className='para'>
          En esta tabla enumeramos la lista completa de rechazos de cobros posibles junto con una explicación del motivo del rechazo:
        </p>

        <table className='table table--faq u-color-dark-gray'>
          <thead>
            <tr>
              <th>
                Rechazo de un cobro
              </th>
              <th>
                Explicación
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insufficient funds (Fondos insuficientes)</td>
              <td>La cuenta bancaria de tu cliente no cuenta con fondos suficientes para realizar el cobro.</td>
            </tr>
            <tr>
              <td>Refer to payer (Contacta con el cliente)</td>
              <td>Los bancos utilizan a menudo este motivo para disimular el motivo del fallo.
              Frecuentemente es un indicio de fondos insuficientes.</td>
            </tr>
            <tr>
              <td>Bank account closed (Cuenta bancaria cancelada)</td>
              <td>La cuenta bancaria del cliente se ha cancelado antes de que se haya producido el Adeudo Directo.
              El mandato y todos los cobros futuros se anularán.</td>
            </tr>
            <tr>
              <td>Direct Debit not enabled (Adeudo Directo no permitido)</td>
              <td>La cuenta bancaria del cliente no permite Adeudos Directos, por ejemplo, porque se encuentra en una
              lista negra o se trata de una cuenta de ahorro. El mandato y todos los cobros futuros se anularán.</td>
            </tr>
            <tr>
              <td>Invalid bank details (Datos bancarios incorrectos)</td>
              <td>El IBAN indicado por el cliente es incorrecto. El mandato y todos los cobros futuros se anularán.</td>
            </tr>
            <tr>
              <td>Mandate cancelled (Mandato cancelado)</td>
              <td>Si los has anulado tú o el cliente a través de su banco.</td>
            </tr>
            <tr>
              <td>Authorisation disputed (Autorización impugnada)</td>
              <td>Con SEPA, los clientes tienen derecho a un reembolso de los cobros no autorizados durante 13 meses.</td>
            </tr>
            <tr>
              <td>Refund requested (Reembolso solicitado)</td>
              <td>Con SEPA, los clientes tienen derecho a un reembolso de los cobros autorizados durante 8 semanas sin tener que
              aportar explicación alguna.</td>
            </tr>
          </tbody>
        </table>

      </Translation>
    );
  }
}
