import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentTrackingEn extends React.Component {
  displayName = 'FaqProDashboardPaymentTrackingEn'

  render() {
    return (
      <Translation locales={['en']} exclude={['en-GB']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payment tracking</h2>
        <p className='para'>
          You can follow the status of each Direct Debit payment: either by selecting a specific customer,
          or in the <a href='https://manage.gocardless.com/payments'
          target='_blank' className='u-link-color-p u-text-underline'>list of your payments</a>.
        </p>
        <p className='para'>
          It is possible to filter by period or status (for example to see all recently failed payments),
          as well as export to Excel.
        </p>

        <p className='para'>
          Each step is visible, whether it's a successful payment:
        </p>

        <img src='/images/faq/en/payment-success.png' />

        <p className='para'>
         Or a failed payment:
        </p>

        <img src='/images/faq/en/payment-failed.png' />

        <p className='para'>
          You can <strong>retry a payment</strong> directly by clicking "Retry".
        </p>

        <img src='/images/faq/en/payment-retry.png' />

      </Translation>
    );
  }
}
