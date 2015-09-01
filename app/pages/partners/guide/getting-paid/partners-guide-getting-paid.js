import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import Link from '../../../../components/link/link';

export default class PartnersGuideGettingPaid extends React.Component {
  displayName = 'PartnersGuideGettingPaid'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Getting paid</h2>

        <p>
          In the UK, we pay out funds 2 working days after they’re collected from your customer. You
          can collect one-off, regular or variable Direct Debit payments. You can collect payment from
          customers on any day (we do not place any restrictions on collection days). We settle funds on
          a daily basis. For more information,
          click <Link to='faq_merchants_how_it_works'>here</Link>.
        </p>
      </PartnersGuidePage>
    );
  }
}
