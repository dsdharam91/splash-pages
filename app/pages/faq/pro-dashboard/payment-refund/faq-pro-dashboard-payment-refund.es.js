import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRefundEs extends React.Component {
  displayName = 'FaqProDashboardPaymentRefundEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Devolución de cobros</h2>
        <p className='para'>
          Puedes devolver un cobro de Adeudo Directo, total o parcialmente.
        </p>
        <p className='para'>
          Selecciona uno de tus cobros: solo los que ya se han realizado (de estado "Confirmed" o "Paid Out")
          se pueden devolver. A continuación, haz clic en "Refund".
        </p>

        <img src='/images/faq/en/refund-buttons.png' />

        <p className='para'>
          Puedes elegir el importe que deseas devolver:
        </p>

        <img src='/images/faq/en/refund-amount.png' />

        <p className='para'>
          La devolución se realizará en las siguientes 48 horas y aparecerá en el historial de cobro:
        </p>

        <img src='/images/faq/en/refund-tracking.png' />

        <p className='para'>
          Esta devolución se deducirá del siguiente abono de cobros que enviaremos a tu cuenta bancaria.
        </p>

      </Translation>
    );
  }
}
