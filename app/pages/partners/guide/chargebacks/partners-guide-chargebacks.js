import React from 'react';
import PartnersGuidePage from '../partners-guide-page';

export default class PartnersGuideChargebacks extends React.Component {
  displayName = 'PartnersGuideChargebacks'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Chargebacks, refunds and failures</h2>

        <h3>How do chargebacks work?</h3>

        <p>
          Customers can request chargebacks according to the rules of the UK and SEPA
          schemes. More detail <a href='https://gocardless.com/direct-debit/guarantee/' target='_blank'>here</a> for
          UK and <a href='https://gocardless.com/guides/sepa/protection/' target='_blank'>here</a> for SEPA.
        </p>

        <h3>What is the chargeback period?</h3>

        <p>
          Under the UK Direct Debit Guarantee, there is no time limit to chargeback liability.
          Under the SEPA scheme, customers can make a chargeback claim up to 13 months after payment. In
          the first eight weeks customers can get a chargeback “no questions asked”; between eight weeks
          to 13 months after payment, customers can only claim a chargeback if the mandate was not authorised.
        </p>

        <p>
          Our data shows that over three-quarters of all chargebacks occur in the first eight weeks after payment.
        </p>

        <h3>What is the flow of funds for chargebacks?</h3>

        <p>
          A customer requests a chargeback through their bank, which refunds them. The customer’s
          bank then claims these funds from the Service User. In most instances, this will
          be paid out of the GoCardless client monies account. GoCardless then recuperates this from
          whomever we paid out the funds to by deducting from payouts.
        </p>

        <h3>Who has liability for chargebacks?</h3>

        <p>
          Under the various Direct Debit scheme rules, the Service User has liability for chargebacks.
          In most instances, this is GoCardless. We then recuperate the amounts by deducting from subsequent payouts.
        </p>

        <p>
          In White label partnerships, if we cannot recoup funds from the merchant,
          then the partner will be liable.
        </p>

        <h3>Do you support refunds?</h3>

        <p>
          Yes - merchants can process either full or partial refunds via GoCardless. We pay out the amount
          immediately via bank transfer to the customer and then deduct the amount from the next payout. We
          do not charge for refunds. See our API
          docs <a href='https://developer.gocardless.com/pro/#core-endpoints-refunds' target='_blank'>here</a>.
        </p>

        <h3>What happens if the customer has insufficient funds available on the day of payment?</h3>

        <p>
          In almost all instances the payment will fail and GoCardless will return a web hook explaining
          their reason for the failure details. See <a href='https://developer.gocardless.com/pro/#webhooks-examples' target='_blank'>
          here</a> for more details.
        </p>
      </PartnersGuidePage>
    );
  }
}
