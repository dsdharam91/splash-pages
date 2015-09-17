import React from 'react';
import PartnersGuidePage from '../partners-guide-page';

export default class PartnersGuide extends React.Component {
  displayName = 'PartnersGuide'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Introduction</h2>

        <p>
          This guide will explain why it makes sense to become a GoCardless partner,
          what partnership options are best for you, how to get started, as well as
          answering some frequently asked questions.
        </p>

        <p>
          First for some terminology:
        </p>

        <ul>
          <li>
            <b>Partner</b> - an organisation helping a merchant collect payments from customers.
          </li>

          <li>
            <b>Merchant</b> - the organisation collecting the payment.
          </li>

          <li>
            <b>Customer</b> - the individual making a payment to a merchant.
          </li>
        </ul>

        <h3>Why use Direct Debit?</h3>

        <p>
          Direct Debit is a great way to collect recurring payments. Once a customer has signed
          a Direct Debit mandate, a merchant can collect payment of any amount, on any date,
          without the customer needing to do anything further.
        </p>

        <p>
          Being in control of payments has two key benefits:
        </p>

        <ul>
          <li>
            <b>Lower churn rates</b> - payment failure can be reduced by up to 80% compared to credit or
            debit card, where the customer’s card can expire. Payment failure can result in customers leaving
            or not paying at all.
          </li>

          <li>
            <b>Get paid on time</b> - merchants can save time and effort chasing customers for payment compared
            to bank transfers or credit cards. Getting paid on time improves cash flow, which can reduce a merchant’s
            borrowing requirements and avoid them having to pay their own suppliers late.
          </li>
        </ul>

        <p>
          Direct Debit can also <b>save merchants money</b> compared to card payment, which typically costs 2.4% plus
          20p per transaction or more with Paypal.
        </p>

        <p>
          Taking payments with GoCardless costs just <b>1%, capped at £2 per transaction.</b>
        </p>

        <p>
          Finally, many customers prefer to pay via Direct Debit, so offering this payment method helps to <b>increase conversion</b> and
          grow revenue. This is especially the case in Germany and Netherlands, where card penetration is much lower than the UK or US.
        </p>

        <p>
          For more information on the benefits of using Direct Debit, read our detailed
          guides <a href='https://gocardless.com/guides' target='_blank'>here</a>.
        </p>

        <h3>Why become a GoCardless partner?</h3>

        <p>
          GoCardless is the UK’s leading Direct Debit provider. We’ve built a really simple way to collect payment by
          Direct Debit. We’ve improved the underlying Direct Debit system in three key ways:
        </p>

        <ul>
          <li>
            <b>Simplify</b> - we’ve removed the traditional complexity of collecting Direct Debit by providing
            a simple REST API and online dashboard allowing merchants to sign up and start collecting payments
            in as little as 3 minutes
          </li>

          <li>
            <b>Optimise</b> - our payments are delivered to you faster and result in fewer failures.
          </li>

          <li>
            <b>Globalise</b> - we bring together Direct Debit mechanisms around the world into one simple integration
          </li>
        </ul>

        <p>
          We already working with major partners such as Zuora, Xero and Sage and are actively looking to partner with
          more leading organisations across a number of sectors including:
        </p>

        <ul>
          <li>Subscription & Billing</li>
          <li>Banks</li>
          <li>Payment Service Providers</li>
          <li>Accountancy</li>
          <li>Clubs & Memberships</li>
          <li>Charities</li>
          <li>Business Management Software</li>
          <li>Property & Shared Spaces</li>
          <li>Health</li>
        </ul>

        <p>Becoming a GoCardless partner can help your business in the following ways:</p>

        <ul>
          <li>
            <b>Grow your customer base</b> - attract more leads and convert more free trials into paying customers.
          </li>

          <li>
            <b>Reduce Churn</b> - hold on to existing customers as they are more engaged with your product.
          </li>

          <li>
            <b>Develop new revenue streams</b> - refer customers to us and you could earn 10% commission on transaction fees.
          </li>

          <li>
            <b>Expand your markets</b> - enable your customers to take payments from an
            ever-growing number of countries, without having to do any extra work.
          </li>
        </ul>

        <h3>Useful links</h3>

        <ul>
          <li>
            <a href='https://developer.gocardless.com/pro/#partner-guide' target='_blank'>API docs</a>
          </li>

          <li>
            <a href='https://gocardless.com/guides' target='_blank'>Direct Debit Guides</a>
          </li>

          <li>
            <a href='https://gocardless.com/guides/intro-to-direct-debit/merchants-guide/' target='_blank'>Benefits of using GoCardless for
            merchants</a>
          </li>

          <li>
            <a href='https://help.gocardless.com/' target='_blank'>GoCardless Help Centre</a>
          </li>
        </ul>
      </PartnersGuidePage>
    );
  }
}
