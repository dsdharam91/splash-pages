import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentTrackingEn extends React.Component {
  displayName = 'FaqProDashboardPaymentTrackingEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payment tracking</h2>

        <p className='para'>
          There are two ways to track the status of payments you've taken:
        </p>
        <ul className='list'>
          <li>
            <strong>From the <a href='https://manage.gocardless.com/payments'
            target='_blank' className='u-link-color-p u-text-underline'>payments section</a> of the dashboard</strong>, you can see
            a list of all the payments you've taken. You can filter the payments either by when they were create or by the current
            status of the payment. A common use case is filtering the results to see payments that have recently failed.
          </li>
          <li>
            <strong>From the <a href='https://manage.gocardless.com/customers'
            target='_blank' className='u-link-color-p u-text-underline'>customers section</a> of the dashboard</strong>, you can see
            a list of the payments taken from each customer.
          </li>
        </ul>

        <p className='para'>
          When clicking on a payment, you can see further details relating to that payment. You can also see a detailed payment history.
        </p>

        <p className='para'>
          The payment history for a successful payment will look like the following:
        </p>
        <img src='/images/faq/en/payment-success.png' />

        <p className='para'>
          Meanwhile, the payment history for a failed payment will look like this:
        </p>
        <img src='/images/faq/en/payment-failed.png' />

        <p className='para'>
          For payments that have failed, you can <strong>retry the payment</strong> by clicking "Retry".
        </p>

        <img src='/images/faq/en/payment-retry.png' />

      </Translation>
    );
  }
}
