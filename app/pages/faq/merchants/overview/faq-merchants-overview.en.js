import React from 'react';
import Translation from '../../../../components/translation/translation';
import IfLocale from '../../../../components/if-locale/if-locale';
import Link from '../../../../components/link/link';

export default class FaqMerchantsEn extends React.Component {
  displayName = 'FaqMerchantsEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Overview</h2>
        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          How can I use GoCardless?
        </h3>
        <Translation locales={['en']} exclude={['en-GB']}>
          <p className='para'>
            There are two ways to use GoCardless:
          </p>
          <ul className='list'>
            <li>
              <strong>Our dashboards</strong> - Set up and manage Direct Debit payments
              with your customers using our simple online dashboard.
            </li>
            <li>
              <strong>Our clean, RESTful API</strong> - Integrate GoCardless into your website using
              our <a href='https://developer.gocardless.com/pro' className='u-link-color-p u-text-underline'>REST API</a>.
            </li>
          </ul>
        </Translation>
        <Translation locales='en-GB'>
          <p className='para'>
            There are three ways to use GoCardless:
          </p>
          <ul className='list'>
            <li>
              <strong>Our dashboards</strong> - Set up and manage Direct Debit payments
              with your customers using our simple online dashboard.
            </li>
            <li>
              <strong>Our account software partnerships</strong> - We work with a growing list of <Link to='partners'
              className='u-link-color-p u-text-underline'>partners</Link>, so you can take payments within the online
              services you already use.
            </li>
            <li>
              <strong>Our clean, RESTful API</strong> - Integrate GoCardless into your website using
              our <a href='https://developer.gocardless.com/' className='u-link-color-p u-text-underline'>REST API</a>.
            </li>
          </ul>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Who is GoCardless for?
        </h3>
        <p className='para'>
          GoCardless is for anyone who wants to take payments directly from the bank account of customers in the UK, the
           Eurozone and Sweden.
          It's particularly suited for B2B (business-to-business) and recurring payments.
        </p>
        <p className='para'>
          Our easy-to-use dashboards and powerful API make GoCardless a powerful platform for
          everyone from innovative start-ups to multi-national corporations.
        </p>
        <Translation locales='en-GB'>
          <p className='para'>
            In the UK, we've integrated with many of the most popular accounting packages to enable easy invoicing
            and payment reconciliation. Find out more <Link to='features' className='u-link-color-p u-text-underline'>here</Link>.
          </p>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What can I not use GoCardless for?
        </h3>
        <p className='para'>
          GoCardless is great for many use cases. However, there are some limitations with our service. We aren't able to:
        </p>
        <ul className='list'>
          <li>
            <strong>Let you take credit card payments</strong> - however you <strong>can</strong> use
            another payment provider alongside GoCardless.
          </li>
          <li>
            <strong>Let you accept instant payments</strong> - Direct Debit payments take 3-5 working
            days to clear, so they're not ideal for goods that need to be shipped quickly.
          </li>
        </ul>
        <p className='para'>
          We're able to accept most kinds of customers but there are some exceptions - for
          full details, see our <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>restricted
          activities page</Link>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Are there any limits on the amount I can collect?
        </h3>
        <p className='para'>
          There are no limits on how many transactions you can make.
        </p>
        <p className='para'>
          In the UK, the minimum amount for a single transaction is £1 and the maximum amount is £5,000.
          We may be able to increase this limit with additional verification checks.
        </p>
        <p className='para'>
          In the Eurozone, the maximum amount for a single transaction is €5,000.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          How do I receive funds I have collected with GoCardless?
        </h3>
        <p className='para'>
          The funds collected are paid directly into your bank account.
        </p>
        <Translation locales='en-GB'>
          <p className='para'>
            With GoCardless, our <Link to='pricing' title='Pricing' className='u-link-color-p u-text-underline'>fees</Link> are
            deducted automatically.
          </p>
        </Translation>
        <p className='para'>
          With GoCardless Pro, we'll send you an invoice for
          your <Link to='pricing' title='Pricing' className='u-link-color-p u-text-underline'>fees</Link>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          When do I receive my payment?
        </h3>
        <p className='para'>
          All payments are paid out 3 working days from when the payment was collected.
        </p>
        <p className='para'>
          We don't hold back any of your funds in reserve.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Do you take credit or debit cards?
        </h3>
        <p className='para'>
          No, GoCardless is a Direct Debit company.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Why is GoCardless better than the other options I'm considering?
        </h3>
        <p className='para'>
          Below are just some of the reasons why people choose us:
        </p>

        <ul className='list'>
          <li>
            <strong>Reduced administration</strong> - Collect recurring and one-off payments automatically,
            or at the click of a button. We manage everything else for you.
          </li>
          <Translation locales='en-GB'>
            <li>
               <strong>Simple, low pricing</strong> - We charge <Link to='pricing'
               className='u-link-color-p u-text-underline'>1% per transaction</Link>, and never more
               than £2. Scale pricing is available.
            </li>
          </Translation>
          <li>
            <strong>Powerful tools that suit you</strong> - Everything you need to set up, collect
            and manage Direct Debit payments with our simple online tool or <a href='https://developer.gocardless.com/'
            className='u-link-color-p u-text-underline'>REST API</a>.
          </li>
          <li>
            <strong>The personal touch</strong> - Our support team prides itself on being there to help whenever you need us.
          </li>
        </ul>

        <IfLocale domesticScheme='bacs'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Is GoCardless a Bacs-approved bureau?
          </h3>
          <p className='para'>
            Yes, GoCardless is a <a href='http://www.bacs.co.uk/Bacs/Bureaux/Resources/Pages/ApprovedBureaux.aspx'
            className='u-link-color-p u-text-underline'>Bacs-approved bureau</a>.
          </p>
        </IfLocale>
      </Translation>
    );
  }
}
