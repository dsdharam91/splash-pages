import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuideRestrictionsEn extends React.Component {
  displayName = 'PartnersGuideRestrictionsEn'

  render() {
    return (
        <Translation locales='en'>
       <h2>Restrictions</h2>

        <h3>Are there any types of customers that you don’t serve?</h3>

        <p>
          We tend to operate in low risk verticals and are restricted by our banks from serving the verticals
          listed <Link to='legal_restrictions'>here</Link>, although we can find exceptions
          if there’s reason to expect that chargeback rates will be low or if the volumes are high enough.
        </p>

        <p>
          Before we serve you, we will need to understand what the likely chargeback rate we can expect
          will be and fully understand the verticals you operate in. Typically we don’t serve merchants
          with chargeback rates in excess of 1%. If they have rates above 1% we could begin to discuss
          higher risk pricing and/or a rolling reserve.
        </p>

        <h3>Is there a minimum / maximum amount for payments?</h3>

        <p>
          In the UK, the minimum amount for a single transaction is £1 and the maximum
          amount is £5,000. GoCardless may be able to increase this limit with additional
          verification checks.
        </p>

        <p>
          In the Eurozone, the maximum amount for a single transaction is €5,000.
        </p>
        </Translation>
    );
  }
}
