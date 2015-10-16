import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import Link from '../../../../components/link/link';

export default class PartnersGuideAppIntegration extends React.Component {
  displayName = 'PartnersGuideAppIntegration'

  render() {
    return (
      <PartnersGuidePage>
        <h2>App integration</h2>

        <h3>Merchant onboarding and collecting merchant verification information</h3>

        <p>
          If you choose an App integration, the merchants are redirected to GoCardless to sign
          up for a GoCardless account. A demo of that flow is <a href='https://oauth-demo.gocardless.com/' target='_blank'>here</a>. This
          means that you are not required as a partner to collect verification information.
        </p>

        <h3>Merchant and customer support</h3>

        <p>
          GoCardless takes care of all customer and merchant support.
        </p>

        <h3>GoCardless payment pages</h3>

        <p>
          To see an example of the GoCardless hosted payment
          pages, <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>click here.</a>
        </p>

        <p>
          Currently these pages are automatically translated into the following languages
          dependent on the customer’s location:
        </p>

        <ul>
          <li>English</li>
          <li>French</li>
          <li>German</li>
          <li>Dutch</li>
          <li>Spanish</li>
          <li>Portuguese</li>
          <li>Italian</li>
        </ul>

        <p>
          The GoCardless hosted payment pages also adapt dynamically to be compliant with the
          SEPA and BACS scheme rules.
        </p>

        <p>
          GoCardless plans to support new Direct Debit schemes around the world. If your merchants
          are likely to be collecting in multiple schemes, we would recommend using the GoCardless
          payment pages to prevent having to create multiple checkout experiences in order to comply with
          the regulations for each scheme.
        </p>

        <p>
          However, you may want to create customised payment pages that are available to all your
          merchants, which can create a better customer journey and improve conversion.

          For examples of merchants that have implemented their own payment pages, take a look at:
        </p>

        <ul>
          <li>
            <a href='http://registration.ft.com/registration/subscription-service/signuppsp?segid=70011' target='_blank'>
              The Financial Times
            </a>
          </li>

          <li>
            <a href='https://shop.tes.co.uk/tesshop/' target='_blank'>
              Times Educational Supplement
            </a>
          </li>

          <li>
            <a href='https://subscribe.theguardian.com/?INTCMP=NGW_HEADER_UK_GU_SUBSCRIBE' target='_blank'>
              The Guardian
            </a>
          </li>
        </ul>

        <p>
          For more details on designing payment pages that comply with the
          Direct Debit guidelines,
          click <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements'
          target='_blank'>here</a>.
        </p>

        <p>
          We will need to approve your payment pages before going live.
        </p>

        <p>
          Note that if you design your own payment pages in App integration, then you must use the
          GoCardless Service User Number and so "GoCardless" will appear on the customer's bank
          statement. If you want your name (as the Partner) to appear on the customer's bank
          statement, you should choose our White label integration.
        </p>

        <p>
          You must also use the GoCardless automated customer notifications.
        </p>

        <h3>Merchant hosted customised payment page</h3>

        <p>
          This is where individual merchants create their own payment pages.
        </p>

        <p>
          This requires each design to be authorised and signed off by GoCardless. Given this, and the amount
          of work required, this option is only suitable for larger merchants.
        </p>

        <h3>Customer notifications</h3>

        <p>
          The Direct Debit scheme requires notifications to be sent to customers to confirm that a mandate has
          been set up, and often in advance of payments being collected.
        </p>

        <p>
          With App integration, these notifications can be automated using the GoCardless notifications.
        </p>

        <p>
          For payments, notifications must be sent three days before payment is collected, although for
          subscription payments, where the frequency and amount remain constant, a single payment notification
          email can be sent for the entire subscription; this can be combined with the mandate confirmation email.
        </p>

        <p>
          For examples of GoCardless customer notifications
          click <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>here</a>. To
          complete an end to end payment, include
          notifications, <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>click
          here</a> and use Account Number 55779911 and Sort Code 200000.
        </p>

        <p>
          Currently these notifications are automatically translated into the following languages:
        </p>

        <ul>
          <li>English</li>
          <li>French</li>
          <li>German</li>
          <li>Dutch</li>
          <li>Spanish</li>
          <li>Portugeuese</li>
          <li>Italian</li>
        </ul>

        <p>
          The language used in email notifications is based on the country of the IBAN that the
          customer uses to set up their Direct Debit mandate.
        </p>

        <h3>Customer bank statement</h3>

        <p>
          If you choose an App integration, the customer bank statement will have GoCardless or
          the merchant’s name. If it is important that the partner’s name is on the bank statement,
          you may want to consider a white label integration - find out more
          in our <Link to='partners_guide_white_label_integration'>white label integration
          section</Link>.
        </p>

        <p>
          You can attach customer references on a per mandate basis (the first reference) and/or
          on a per payment basis (the second reference). Further details can be found&nbsp;
          <a href='https://developer.gocardless.com/pro/#core-endpoints-mandates' target='_blank'>here</a> and&nbsp;
          <a href='https://developer.gocardless.com/pro/#core-endpoints-payments' target='_blank'>here</a> in the documentation.
        </p>

        <p>
          Note that the mandate reference must be unique for a given Service User Number.
          Given this, if you are using the GoCardless SUN, we will auto-populate the mandate reference.
        </p>

        <h3>Merchant bank statement</h3>

        <p>
          With an App integration, merchants will see GC C1 on their bank statement.
        </p>

        <h3>Merchant fee collection</h3>

        <p>
          In an App integration GoCardless collects its fees from each merchant.
        </p>

        <p>
          GoCardless can either deduct fees from the payouts it sends or it can invoice for those fees.
          In both an App and White label integration these two options are available.
        </p>

        <h3>Merchant and partner pricing</h3>

        <p>
          GoCardless expects merchants to pay 1% transaction fees (capped at £2/2€). We also provide our
          partners with 10% revenue share of that fee. Partners can also charge additional fees, which
          can vary on a per-payment basis.
        </p>

        <p>
          In an App integration, we charge each merchant our 1% fee and request our partners
          invoice us for 10% of those fees (net 0.1%).
        </p>

        <p>
          If you are doing an App integration and need to collect your fees from us, you can
          send your invoices to <a href='mailto:accounts@gocardless.com'>accounts@gocardless.com</a>. We’ll
          pay on a 30 day term and accept Direct Debit mandates for repeat collections. From late 2015, GoCardless
          will send your share of the revenue automatically via bank transfer.
        </p>

        <h3>Chargeback liability</h3>

        <p>
          When a customer places a chargeback, GoCardless is required to send those funds back to the payer’s
          bank. We then recuperate the funds from our clients.
        </p>

        <p>
          In an App integration, GoCardless holds the merchants directly liable for chargebacks.
        </p>

        <h3>Telephone and payment mandate collections</h3>

        <p>
          This is currently available only with White label integrations. However, we plan to support
          this soon in App integration - get in touch if this is important to you.
        </p>

        <h3>Reporting</h3>

        <p>
          GoCardless offers three forms of reporting to clients.
        </p>

        <ul>
          <li>Receive the webhooks sent from GoCardless via the API</li>
          <li>Actively query the elements you want to find out about via the API</li>
          <li>Refer to the GoCardless dashboard</li>
        </ul>

        <p>
          In an App integration, your clients will become GoCardless merchants, and as such have access to
          the GoCardless dashboards. This reduces the need to build out a full reporting suite for them. However,
          we recommend building out basic reporting functionality such as payment status (success, failure, etc).
        </p>

        <h3>Required development resource</h3>

        <p>
          An app integration requires less development resource than a white label integration.
        </p>
      </PartnersGuidePage>
    );
  }
}
