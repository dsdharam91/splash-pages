import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRetryEn extends React.Component {
  displayName = 'FaqProDashboardPaymentRetryEn'

  render() {
    return (
      <Translation locales={['en']} exclude={['en-GB']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payment retry</h2>
        <p className='para'>
          When a payment fails, we will indicate the reason as well as a short description of its cause. There are 3 main types of failures:
        </p>
        <ul className='list'>
          <li>
            <strong>The payment has failed and can be retried</strong>: this normally happens when there is insufficient funds in your
            customer's bank account or when a "refer to payer" error was received.
          </li>
          <li>
            <strong>The payment has failed along with the mandate</strong>: you should contact the customer to set up a new mandate.
          </li>
          <li>
            <strong>The payment has been disputed by the customer</strong>: you should contact the customer to understand why they
            contested. You should only create a new payment once the dispute is resolved.
          </li>
        </ul>

        <p className='para'>
          Where it's possible to retry a payment, you'll see a "Retry" button in the top-right corner of the payment status page. If you
          click this button, we'll re-submit your payment immediately. You'll see a new charge date and you can follow the status of the
          retried payment in the payment timeline.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

        <p className='para'>
          The following table shows a list of possible payment failure errors and an explanation for what the error message means:
        </p>

        <table className='table table--faq u-color-heading'>
          <thead>
            <tr>
              <th>
                Payment error
              </th>
              <th>
                Explanation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insufficient funds</td>
              <td>Your customer's bank account had insufficient funds available on the payment date.</td>
            </tr>
            <tr>
              <td>Refer to payer</td>
              <td>The 'refer to payer' error is often used by the banks when no clear reason is given for the failure.
              Quite commonly, it means insufficient funds.</td>
            </tr>
            <tr>
              <td>Bank account closed</td>
              <td>The customer's bank account was closed before the payment could be taken.
              The mandate and all future payments will be cancelled.</td>
            </tr>
            <tr>
              <td>Direct Debit not enabled</td>
              <td>The customer's bank account does not allows Direct Debit payments to be taken.
              The mandate and all future payments will be cancelled.</td>
            </tr>
            <tr>
              <td>Invalid bank details</td>
              <td>The bank account details used to set up the mandate for this payment were incorrect.
              The mandate will be cancelled.</td>
            </tr>
            <tr>
              <td>Mandate cancelled</td>
              <td>Either you or the customer has cancelled the mandate. The customer may have cancelled the mandate at their bank.</td>
            </tr>
            <tr>
              <td>Authorisation disputed</td>
              <td>In the SEPA Direct Debit scheme, customers are entitled to a refund for any payments they did not authorise.
              They have 13 months from the date of the payment to claim a refund.</td>
            </tr>
            <tr>
              <td>Refund requested</td>
              <td>In the SEPA Direct Debit scheme, customers have an 8-week window where they're able to get a refund for authorised
              transactions.</td>
            </tr>
          </tbody>
        </table>

      </Translation>
    );
  }
}
