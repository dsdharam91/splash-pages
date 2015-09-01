import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import Link from '../../../../components/link/link';

export default class PartnersGuide extends React.Component {
  displayName = 'PartnersGuide'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Non-UK payments</h2>

        <h3>Do you collect payments for SEPA too?</h3>

        <p>
          Yes - GoCardless lets you take payments in the UK and across the entire Eurozone via a single
          integration. For more details on taking payments by Direct Debit across
          Europe, click <Link to='europe'>here</Link>.
        </p>

        <h3>Do you collect payments outside of the UK & Eurozone?</h3>

        <p>
          GoCardless is expanding internationally. Our vision is to build a new
          global payments network for the internet. Keep checking our website for updates.
        </p>

        <h3>If I am collecting payments in Euros, do I need a Euro-denominated bank account?</h3>

        <p>
          Yes - currently GoCardless can only payout in the same currency as the payment is received,
          so if you took payment in Euros, you would need to have a Euro-denominated bank account to be paid into.
        </p>
      </PartnersGuidePage>
    );
  }
}
