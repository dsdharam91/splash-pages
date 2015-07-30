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
            <strong>The payment fails and can be retried</strong>: this is the case mainly for the following causes: insufficient funds
            and refer to payer
          </li>
          <li>
            <strong>The payment fails as well as the mandate</strong>: you should contact your customer to setup a new mandate
          </li>
          <li>
            <strong>The payment is disputed</strong>: you should contact the customer to understand why they contested and only create
            a new payment once this is clarified
          </li>
        </ul>

        <p className='para'>
          When possible, you can <strong>retry the payment</strong> by clicking "Retry". We will resubmit your payment to the banks
          straight away. You can see the new charge date as well as follow the status of the payment in the same history as your initial
          payment.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

        <p className='para'>
          Please find below a full list of the payment failure causes and what they mean.
        </p>

        <table className='table table--faq u-color-heading'>
          <thead>
            <tr>
              <th className='u-padding-Am'>
                Payment error
              </th>
              <th className='u-padding-Am'>
                Explanation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insufficient funds</td>
              <td>The customer did not have funds available to make the payment.</td>
            </tr>
            <tr>
              <td>Refer to payer</td>
              <td>This is often used by banks to obfuscate the failure cause: quite commonly
              indicates insufficient funds.</td>
            </tr>
            <tr>
              <td>Bank account closed</td>
              <td>The customer's bank account was closed before the payment could be taken.
              The mandate will be cancelled.</td>
            </tr>
            <tr>
              <td>Direct Debit not enabled</td>
              <td>The customer's bank account does not allows direct debit payments.
              The mandate will be cancelled.</td>
            </tr>
            <tr>
              <td>Invalid bank details</td>
              <td>The bank account details used to set up the mandate for this payment were incorrect.
              The mandate will be cancelled.</td>
            </tr>
            <tr>
              <td>Mandate cancelled</td>
              <td>Either you cancelled the mandate or the client cancelled it at their bank.</td>
            </tr>
            <tr>
              <td>Authorisation disputed</td>
              <td>In SEPA, customers are entitled to a refund of payments they did not authorise
              within 13 months.</td>
            </tr>
            <tr>
              <td>Refund requested</td>
              <td>In SEPA, customers are entitled to a refund for authorised transactions
              within 8 weeks.</td>
            </tr>
          </tbody>
        </table>

      </Translation>
    );
  }
}
