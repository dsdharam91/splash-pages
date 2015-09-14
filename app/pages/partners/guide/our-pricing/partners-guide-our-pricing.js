import React from 'react';
import PartnersGuidePage from '../partners-guide-page';

export default class PartnersGuide extends React.Component {
  displayName = 'PartnersGuide'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Our pricing</h2>

        <h3>What are GoCardless fees?</h3>

        <p>
          We charge 1% per transaction, capped at £2 (or €2). Volume discounts are available for
          merchants processing in excess of 1000 payments per month. If you need us to apply for an
          SUN / CID on your behalf, there is a charge of £200 (€250) per month.
        </p>

        <h3>Do you offer a revenue share for partners?</h3>

        <p>
          Yes - we offer partners a 10% share of GoCardless revenue generated via that partner.
        </p>

        <h3>Can I charge an additional fee on top of the GoCardless transaction charge?</h3>

        <p>
          Yes - you can take either/both an additional percentage or a flat fee per
          transaction, on top of the GoCardless transaction charge.
        </p>
      </PartnersGuidePage>
    );
  }
}
