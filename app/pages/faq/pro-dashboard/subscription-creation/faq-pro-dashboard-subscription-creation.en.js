import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardSubscriptionCreationEn extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Subscription creation</h2>
        <p className='para'>
          After setting up your customer, you'll be able to start taking Direct Debit payments from them. On
          the <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>customers section</a> of the dashboard, choose the customer
          from whom you want to take payments.
        </p>
        <ul className='list'>
          <li>
            <strong>If you're taking payments of a varying amount or varying frequency</strong>, you should set up an individual payment.
            For more information, see our <Link to='faq_pro_dashboard_payment_creation'
            className='u-link-color-p u-text-underline'>tutorial on creating individual payments</Link>.
          </li>
          <li>
            <strong>If you're taking payments of a regular amount at a regular frequency</strong>, you should set up a subscription
            for the customer. This tutorial shows you how to create subscriptions.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Creating a Subscription for your Customer
        </h3>
        <p className='para'>
          A subscription allows you to collect regular payments of a fixed amount. There's no need to create the same payment
          week-after-week or month-after-month.
        </p>
        <p className='para'>
          On the <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>customers section</a> of the dashboard, choose your customer
          followed by Create &gt; Subscription.
        </p>

        <img src='/images/faq/en/subscription-create-buttons.png' />

        <p className='para'>
          You'll be shown a screen from where you can personalise the subscription:
        </p>
        <ul className='list'>
          <li>
            The subscription name allows you to identify the payment (e.g. it could be the name of your service or plan).
          </li>
          <li>
            Choose your payment amount (maximum of €5,000). Once the subscription is set up, the same amount will be collected every time.
          </li>
          <li>
            The reference will normally appear on your customer's bank statement (the exact format will depend on your customer's bank).
          </li>
          <li>
            You can choose the frequency over which you collect your payments. For instance: weekly, monthly or yearly. You can also
            define custom intervals (e.g. collecting a payment every 3 months).
          </li>
          <li>
            You'll be able to choose the date of the first payment.
          </li>
          <li>
            You can also choose the duration of the subscription. The subscription could continue until further notice, until a specific
            date or only for a specific number of payments (e.g. after 12 payments are taken).
          </li>
        </ul>

        <img src='/images/faq/en/subscription-create.png' />

      </Translation>
    );
  }
}
