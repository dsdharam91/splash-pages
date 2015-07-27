import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRefundEn extends React.Component {
  displayName = 'FaqProDashboardPaymentRefundEn'

  render() {
    return (
      <Translation locales={['en']} exclude={['en-GB']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payment refund</h2>
        <p className='para'>
          You can refund a Direct Debit payment, either fully or partially.
        </p>
        <p className='para'>
          Select one of your payments: only those that have already been collected (with status Confirmed or Paid Out)
          can be refunded. Click on "Refund" next.
        </p>

        <img src='/images/faq/en/refund-buttons.png' />

        <p className='para'>
          You can choose the amount you wish to refund:
        </p>

        <img src='/images/faq/en/refund-amount.png' />

        <p className='para'>
          Your refund will be processed within 48h and will appears in your payment history:
        </p>

        <img src='/images/faq/en/refund-tracking.png' />

        <p className='para'>
          This refund will be deducted from the next payout we will wire to your bank account.
        </p>

      </Translation>
    );
  }
}
