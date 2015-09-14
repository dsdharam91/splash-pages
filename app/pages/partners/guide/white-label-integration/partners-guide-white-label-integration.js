import React from 'react';
import PartnersGuidePage from '../partners-guide-page';

export default class PartnersGuideWhiteLabelIntegration extends React.Component {
  displayName = 'PartnersGuideWhiteLabelIntegration'

  render() {
    return (
      <PartnersGuidePage>
        <h2>White label integration</h2>

        <h3>Merchant onboarding and collecting merchant verification information</h3>

        <p>
          If you choose a White label integration, then the merchant onboarding can be handled
          inside your existing application. This means that you need to collect the following information
          from your merchants:
        </p>

        <ul>
          <li>Company/charity registration number</li>
          <li>Directors/trustees details - name, DOB, address</li>
          <li>Company address</li>
          <li>Shareholder information (if another company is a shareholder with >25% holding, we must obtain the same info from them)</li>
        </ul>

        <p>
          Where we cannot verify the merchant using the above info (3% of business sign-ups, 20-30%
          for individuals or non-profit organisations), we may ask for additional information, such as
          a passport or driving license of the Managing Director or Trustee.
        </p>

        <p>
          In addition, you will need to instruct all merchants to send between 1p-£1 to the GoCardless
          client verification account. We will then verify that this has been received via the API, or if
          we need more information.
        </p>

        <h3>Merchant and customer support</h3>

        <p>
          White label partners will need to provide support to merchants, as they will likely not know that
          GoCardless is powering the payments. Customers may also contact the partner if the partner’s name
          is on the customer bank statement.
        </p>

        <p>
          Based on the volume of contacts GoCardless currently receives, we expect White label partners to
          receive approximately one email or call for every 100 payments processed (1% of payments).
        </p>

        <p>
          The most common merchant enquiry is about payment status (~80%), e.g. why a payment is marked as pending,
          when it will be marked as paid, why a payment has been marked as failed, etc.
        </p>

        <p>
          Occasionally, merchants may contact partners about chargebacks and Direct Debit timings, e.g. when will
          the customer get charged, when funds will appear in their bank account etc.
        </p>

        <p>
          There are a handful of rare but complicated enquiries when you should call GoCardless so we can jointly
          handle with your support team.
        </p>

        <p>
          We will provide full training guides for merchant and customer support prior to go-live.
        </p>

        <h3>GoCardless payment pages</h3>

        <p>
          To see an example of the GoCardless hosted payment
          pages, <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>click here</a>.
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
          <li>Portugeuese</li>
          <li>Italian</li>
        </ul>

        <p>
          The GoCardless hosted payment pages also adapt dynamically to be compliant with the SEPA and BACS scheme rules.
        </p>

        <p>
          GoCardless plans to support new Direct Debit schemes around the world. If your merchants are
          likely to be collecting in multiple schemes, we would recommend using the GoCardless payment pages
          to prevent having to create multiple checkout experiences in order to comply with the regulations
          for each scheme.
        </p>

        <p>
          However, you may want to create customised payment pages that are available to all your merchants,
          which can create a better customer journey and improve conversion.
        </p>

        <p>
          For examples of merchants that have implemented their own payment pages, take a look at:
        </p>

        <ul>
          <li>
            <a href='http://registration.ft.com/registration/subscription-service/signuppsp?segid=70011' target='_blank'>
              The Financial Times
            </a>
          </li>

          <li>
            <a href='https://shop.tes.co.uk/tesshop/' target='_blank'>Times Educational Supplement</a>
          </li>

          <li>
            <a href='https://subscribe.theguardian.com/?INTCMP=NGW_HEADER_UK_GU_SUBSCRIBE' target='_blank'>The Guardian</a>
          </li>
        </ul>

        <p>
          For more details on designing payment pages that comply with the Direct Debit guidelines,
          click <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>here</a>.
        </p>

        <h3>Merchant hosted customised payment pages</h3>

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
          For payments, notifications must be sent three days before payment is collected, although for subscription
          payments, where the frequency and amount remain constant, a single payment notification email can be sent
          for the entire subscription; this can be combined with the mandate confirmation email.
        </p>

        <p>
          For examples of GoCardless customer notifications and a guide to designing your own,
          click <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>here</a>. To complete an
          end to end payment, include
          notifications, <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>click here</a> and use
          Account Number 55779911 and Sort Code 200000.
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
          The language used in email notifications is based on the country of the IBAN that
          the customer uses to set up their Direct Debit mandate.
        </p>

        <p>
          You can also send your own customised notifications. For more information on designing your
          own notifications that comply with Direct Debit guidelines, please click here. Note that there
          are different requirements for BACS and SEPA.
        </p>


        <h3>Customer bank statement</h3>

        <p>
          With a White label integration, typically the partner’s name is on the customers’ bank statements.
          This will require you to have your own Service User Number, which we can help you apply for.
        </p>

        <p>
          You can attach customer references on a per mandate basis (the first reference) and/or on a per
          payment basis (the second reference). Further details can be
          found <a href='https://developer.gocardless.com/pro/#core-endpoints-mandates' target='_blank'>here</a>
          &nbsp;and <a href='https://developer.gocardless.com/pro/#core-endpoints-payments' target='_blank'>here</a> in
          the documentation.
        </p>

        <h3>Merchant bank statement</h3>

        <p>
          With an App integration, merchants will see GC C1 on their bank statement.
        </p>


        <h3>Merchant fee collection</h3>

        <p>
          In a White label integration, the GoCardless fees are aggregated and collected from the partner.
        </p>

        <p>
          Typically GoCardless will invoice the partner for these fees. The partner can recoup these fees
          themselves directly from its merchants.
        </p>

        <p>
          Alternatively we can collect these fees directly from the merchant and then pay out to the partner.
        </p>

        <h3>Merchant and partner pricing</h3>

        <p>
          GoCardless expects merchants to pay 1% transaction fees (capped at £2/2€), although partners are
          free to charge additional fees on top of this.
        </p>

        <p>
          We will charge the partner 0.9% (capped at £1.80/1.80€). Volume discounts
          are also available on a per merchant basis. Get in touch if this is important to you.
        </p>

        <h3>Chargeback liability</h3>

        <p>
          When a customer places a chargeback, GoCardless is required to send those funds back to the payer’s
          bank. We then recuperate the funds from our clients.
        </p>

        <p>
          We will initially recoup chargebacks by deducting funds from the merchant’s payouts. In the event
          that we are unable to recoup these funds from a merchant, we will recoup these funds from the partner.
        </p>

        <p>
          In White label, the chargeback liability lies with the partner. This is because GoCardless holds no
          agreement with the merchants. Indeed they may not know we are collecting payments on your behalf.
        </p>

        <h3>Telephone and payment mandate collections</h3>

        <p>
          It’s important that when your merchants collect using these methods, that they comply with
          the scheme rules for doing so.
        </p>

        <p>
          To set up paperless mandates over the telephone for SEPA,
          see <a href='https://gocardless.com/guides/sepa/telephone-mandate/' target='_blank'>here</a> for a full guide.
        </p>

        <p>
          To set up paper mandates for UK BACS, see <a href='https://gocardless.com/direct-debit/mandates/' target='_blank'>here</a> for
          a guide and <a href='https://gocardless.com/guides/examples/direct-debit-mandate-template.docx' target='_blank'>here</a> for
          a template. Get in touch if you want to set up paperless mandates over the telephone for the UK.
        </p>

        <h3>Reporting</h3>

        <p>
          GoCardless offers three forms of reporting to clients.
        </p>

        <ul>
          <li>Receive the web hooks sent from GoCardless via the API</li>
          <li>Actively query the elements you want to find out about via the API</li>
          <li>Refer to the GoCardless dashboard</li>
        </ul>

        <p>
          In a White label integration, as your clients will not be creating GoCardless accounts, they will
          not have access to a GoCardless dashboard, and so all reporting will need to be provided to them via
          the API. Details of our web hooks can be
          found <a href='https://developer.gocardless.com/pro/#webhooks-overview' target='_blank'>here</a>.
        </p>

        <h3>Required development resource</h3>

        <p>
          A White label integration requires more development time than an App integration for the following reasons:
        </p>

        <ul>
          <li>
            <strong>Merchant onboarding</strong> - you will be required to collect Anti-Money-Laundering information from your merchants
          </li>

          <li>
            <strong>Reporting</strong> - as your merchants will not have access to the GoCardless dashboards, you will be required to
            provide full reporting features to them
          </li>

          <li>
            <strong>Payment Pages</strong> - in a White label integration it is unlikely you or your merchants will want to use the
            GoCardless payment pages. These will need to be built, and if collecting payments from multiple Direct Debit schemes,
            they will need to comply with each set of scheme rules.
          </li>
        </ul>
      </PartnersGuidePage>
    );
  }
}
