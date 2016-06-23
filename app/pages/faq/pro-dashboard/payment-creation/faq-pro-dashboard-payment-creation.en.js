import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentCreationEn extends React.Component {
  displayName = 'FaqProDashboardPaymentCreationEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Payment creation</h2>
        <p className='para'>
          After setting up your customer, you'll be able to start taking Direct Debit payments from them. On
          the <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>customers section</a> of the dashboard, choose the customer
          from whom you want to take payments.
        </p>
        <ul className='list'>
          <li>
            <strong>If you're taking payments of a varying amount or varying frequency</strong>, you should set up an individual payment.
            This tutorial shows you how to create individual payments.
          </li>
          <li>
            <strong>If you're taking payments of a regular amount at a regular frequency</strong>, you should set up a subscription
            for the customer. For more information, see our <Link to='faq_pro_dashboard_subscription_creation'
            className='u-link-color-p u-text-underline'>tutorial on subscription creation</Link>.
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Creating a Payment for your Customer
        </h3>
        <p className='para'>
          On the <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>customers section</a> of the dashboard, choose your customer
          followed by Create &gt; Payment.
        </p>

        <img src='/images/faq/en/payment-create-buttons.png' />

        <p className='para'>
          You'll be shown a screen from where you can personalise the Direct Debit payment:
        </p>
        <ul className='list'>
          <li>
            Choose your payment amount (maximum of €5,000).
          </li>
          <li>
            The description allows you to identify the reason why you've collected the payment.
          </li>
          <li>
            The reference will normally appear on your customer's bank statement (the exact format will depend on your customer's bank).
          </li>
          <li>
            You can either take the Direct Debit payment as soon as possible or you can indicate a specific date for the payment.
          </li>
        </ul>

        <img src='/images/faq/en/payment-create.png' />

      </Translation>
    );
  }
}
