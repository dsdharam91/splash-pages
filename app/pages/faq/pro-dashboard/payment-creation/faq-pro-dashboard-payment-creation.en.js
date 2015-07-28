import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentCreationEn extends React.Component {
  displayName = 'FaqProDashboardPaymentCreationEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payment creation</h2>
        <p className='para'>
          If you wish to take payments with varying amounts or unfrequent frequency, create individual payments.
          Otherwise please take a look at the <Link to='faq_pro_dashboard_subscription_creation'
          className='u-link-color-p u-text-underline'>Subscription section</Link>.
        </p>
        <p className='para'>
          Select your customer then click on Create > Payment
        </p>

        <img src='/images/faq/en/payment-create-buttons.png' />

        <p className='para'>
          You can personalise your Direct Debit payment:
        </p>
        <ul className='list'>
          <li>Choose your amount (max €5,000)</li>
          <li>The description lets you identify the reason why you collected this payment</li>
          <li>The reference will appear on your customer bank statement (depending on their bank)</li>
          <li>You can either take the Direct Debit payment as soon as possible or indicate a specific date</li>
        </ul>

        <img src='/images/faq/en/payment-create.png' />

      </Translation>
    );
  }
}
