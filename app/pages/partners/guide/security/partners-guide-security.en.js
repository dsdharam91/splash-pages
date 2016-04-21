import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuideSecurityEn extends React.Component {
  displayName = 'PartnersGuideSecurityEn'

  render() {
    return (
      <Translation locales='en'>
        <h2>Regulation and security</h2>

        <h3>How are you regulated? Is our money safe?</h3>

        <p>
          GoCardless is authorised by the Financial Conduct Authority under the Payment Services Regulations
          2009 - registration number 597190 - for the provision of payment services and serve more businesses
          than any other Direct Debit provider. All money collected is held
          in a secure client monies account, and all clients funds are guaranteed by our supporting banks.
          For more information click <Link to='faq_merchants_security'>here</Link>.
          You can also search for “GoCardless” on the FCA
          registry <a href='https://register.fca.org.uk/' target='_blank'>here</a>.
        </p>

        <h3>How does GoCardless protect our data?</h3>

        <p>
          Security is of utmost importance at GoCardless. We take a number of steps to ensure our customers'
          data remains safe at all times:
        </p>

        <ul>
          <li>
            Our access to the Direct Debit system is provided by Europe's major banks, who have approved our systems.
          </li>

          <li>
            All servers are hosted in secure data centres located in Europe - data is never transmitted outside the EU.
          </li>

          <li>
            Our financial data server is separated from our application server by multiple firewalls.
          </li>

          <li>
            All client-server communication is 256-bit SSL encrypted. The banking system requires just 128-bit.
          </li>

          <li>
            For more information click <Link to='faq_merchants_security'>here</Link>.
          </li>
        </ul>

        <h3>What do you do with the customer’s bank details?</h3>

        <p>
          We collect customer’s bank details on your behalf and pass on a token to you so that you can request
          payment collections against each customer / DD mandate. If you use our white-labelled solution, you
          can also collect a customer’s bank details.
        </p>

        <p>
          Note: in the UK, Direct Debit mandates are valid for 13 months from authorisation or from last
          collection. You/your merchants can then collect payments from this mandate so long as
          it remains valid.
        </p>
      </Translation>
    );
  }
}
