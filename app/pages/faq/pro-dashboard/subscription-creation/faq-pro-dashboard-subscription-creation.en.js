import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardSubscriptionCreationEn extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Subscription creation</h2>
        <p className='para'>
          A subscription allows you to create a schedule of regular payments with a fixed amount: no need to
          create the same payment month after month.
        </p>
        <p className='para'>
          Select one of your customers, then click Create > Subscription.
        </p>

        <img src='/images/faq/en/subscription-create-buttons.png' />

        <p className='para'>
          You can personalise your subscription:
        </p>
        <ul className='list'>
          <li>Name your subscription</li>
          <li>Choose the amount (max €5,000)</li>
          <li>The reference will appear on the bank statement of your customer (depending on their bank)</li>
          <li>Choose the frequency: weekly, monthly, yearly or personalised (e.g every 3 months)</li>
          <li>Choose the date of the first Direct Debit payment</li>
          <li>Choose the subscription duration: until either you cancel it, a specific date or a set number of
          Direct Debit payments (for example 12 payments of €100)</li>
        </ul>

        <img src='/images/faq/en/subscription-create.png' />

      </Translation>
    );
  }
}
