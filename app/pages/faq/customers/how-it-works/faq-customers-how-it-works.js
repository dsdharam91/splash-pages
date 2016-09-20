import React from 'react';
import FaqCustomersPage from '../faq-customers-page';

export default class FaqCustomersHowItWorks extends React.Component {
  displayName = 'FaqCustomersHowItWorks'

  render() {
    return (
      <FaqCustomersPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>How it works</h2>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          How does the GoCardless transaction model work?
        </h3>
        <p className='para'>
          GoCardless acts as a 'master merchant', processing payments on behalf of many companies.
        </p>
        <p className='para'>
          When you pay by GoCardless we collect payment from your account into our own.
          These funds are then remitted on to the merchant you are paying.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          How does GoCardless collect payment from my account?
        </h3>
        <p className='para'>
          GoCardless uses the Direct Debit protocol to collect all payments. This
          allows us to process payments without using the card networks.
        </p>
        <p className='para'>
          To collect payment by Direct Debit, GoCardless first sets up a Direct Debit mandate on your
          account. This mandate is then used to collect the payment you have specified.
        </p>
        <p className='para'>
          Don't worry - if you have set-up a one-off payment, we will only take the funds once.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          How long does it take to process my payment?
        </h3>
        <p className='para'>
          GoCardless automatically pays out funds <strong>3 working days</strong> after they're collected.
          You can see more details <a href='https://support.gocardless.com/hc/en-us/sections/202492985-Payment-Timings'
          className='u-link-color-p u-text-underline'>here</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What if my funds don't reach the merchant?
        </h3>
        <p className='para'>
          GoCardless is not aware of any payment ever failing to reach its destination. However, if this were to occur for any
          reason you would have a right under the <a href='/direct-debit/guarantee/'
          className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a> to charge back to payment.
        </p>
      </FaqCustomersPage>
    );
  }
}
