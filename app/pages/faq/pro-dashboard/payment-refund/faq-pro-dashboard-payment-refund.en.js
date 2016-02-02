import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRefundEn extends React.Component {
  displayName = 'FaqProDashboardPaymentRefundEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Payment refund</h2>
        <p className='para'>
          From the <a href='https://manage.gocardless.com/payments'
          target='_blank' className='u-link-color-p u-text-underline'>payments section</a> of the dashboard, you can see a list of
          all the payments you've taken. Alternatively, the <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>customers section</a> allows you to see a list of payments
          taken from each individual customer.
        </p>
        <p className='para'>
          To initiate a refund, select a payment that has already been collected (the payment must either have a 'Confirmed'
          or 'Paid Out' status).
        </p>
        <p className='para'>
          In the top right-hand corner, click the 'Refund' button.
        </p>

        <img src='/images/faq/en/refund-buttons.png' />

        <p className='para'>
          You can choose the amount you'd like to refund:
        </p>

        <img src='/images/faq/en/refund-amount.png' />

        <p className='para'>
          Your refund will be processed within 48 hours and will appear in your payment history:
        </p>

        <img src='/images/faq/en/refund-tracking.png' />

        <p className='para'>
          The refund is deducted by GoCardless from the next payout we make to your bank account.
        </p>

      </Translation>
    );
  }
}
