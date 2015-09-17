import React from 'react';
import PartnersGuidePage from '../partners-guide-page';

export default class PartnersGuide extends React.Component {
  displayName = 'PartnersGuide'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Payment pages</h2>

        <h3>What do your hosted payment pages look like?</h3>

        <p>
          You can view an example of our hosted payment
          pages <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>here</a>.
          They are adaptive to the compliance requirements of each scheme, meaning if you’re collecting for
          UK BACS, SEPA and any other scheme you don’t need to design payment pages for each.
        </p>

        <h3>In what language is the payment page available?</h3>

        <p>
          Our payment pages automatically translate to English, Dutch, French, German, Italian, Portuguese
          and Spanish. They adapt to the language set in the customer’s browser.
        </p>

        <h3>What does a customer need in order to set up a Direct Debit using GoCardless?</h3>

        <p>
          Our platform is built upon the existing bank-to-bank DD systems (BACS in the UK; SEPA in the Eurozone).
          A customer only needs to enter their account name, bank account number and sort code to set up a DD mandate. You can
          see what this looks like on our <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>example
          payment page here.</a>
        </p>

        <p>
          Likewise a merchant (collecting DD payments) only needs to enter their bank account number and sort
          code to start collecting DD payments (automated Verification/KYC checks follow before we payout funds).
          You can also see what signup for merchants looks
          like <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'>here</a>.
        </p>

        <h3>Can I host the payment pages on my site?</h3>

        <p>
          With the App integration using OAuth you cannot provide your own payment pages as a partner, but we plan
          to support this soon. Your merchants can build their own payment pages however.
        </p>

        <p>
          With the white label integration, both you and your merchants can have their own payment pages.
        </p>

        <p>
          Note that they need to comply with BACS and SEPA scheme
          rules. See <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>here</a> for more
          information on compliance requirements.
        </p>

        <p>
          Any customised payment pages will need to be signed off before going live.
        </p>

        <h3>Do you offer iframes?</h3>

        <p>
          No - we do not offer iFraming of our payment pages as we are not sufficiently comfortable with
          the reliability and security of iFrames.
        </p>

        <h3>Do you offer two-step security verification, e.g. SMS?</h3>

        <p>
          No - we do not offer two-step security verification as, from our experience, the negative impact
          on conversion usually outweighs any small benefit in reducing chargebacks.
        </p>
      </PartnersGuidePage>
    );
  }
}
