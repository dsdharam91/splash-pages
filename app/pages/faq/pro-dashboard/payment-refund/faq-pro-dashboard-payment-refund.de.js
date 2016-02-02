import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRefundDe extends React.Component {
  displayName = 'FaqProDashboardPaymentRefundDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>So erstatten Sie Zahlungen zurück</h2>
        <p className='para'>
          Sie haben die Möglichkeit, Zahlungen vollständig oder teilweise zurückzuerstatten.
        </p>
        <p className='para'>
          Wählen Sie eine Zahlung aus: Es können ausschließlich Zahlungen zurückerstattet werden, die bereits
          eingezogen wurden (Status “Confirmed” oder “Paid Out’). Klicken Sie anschließend auf “Refund”.
        </p>

        <img src='/images/faq/en/refund-buttons.png' />

        <p className='para'>
          Geben Sie dann den Betrag ein, den Sie zurückerstatten möchten:
        </p>

        <img src='/images/faq/en/refund-amount.png' />

        <p className='para'>
          Ihre Rückerstattung erfolgt innerhalb von 48 Stunden und wird in der Zahlungshistorie aufgeführt:
        </p>

        <img src='/images/faq/en/refund-tracking.png' />

        <p className='para'>
          GoCardless zieht diese Rückerstattung von der nächsten Auszahlung auf Ihr Bankkonto ab.
        </p>

      </Translation>
    );
  }
}
