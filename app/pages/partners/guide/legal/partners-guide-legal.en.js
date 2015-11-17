import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';
import Href from '../../../../components/href/href';

export default class PartnersGuideLegalEn extends React.Component {
  displayName = 'PartnersGuideLegalEn'

  render() {
    return (
        <Translation locales='en'>
        <h2>Commercials and legal</h2>

        <p>
          Our Partner agreement is available on our
          website <Link to='legal_partners'>here</Link>.
          Get in touch at <Href to='partners_email' itemProp='email' /> for a White label partner agreement,
          or if you have any specific requirements not covered.
        </p>

        <p>
          GoCardless typically charges merchants a transaction fee of 1% per transaction, capped at £2. We
          offer partners a 10% revenue share of GoCardless fees.
        </p>

        <p>
          We also offer a flat fee pricing structure for White label partners or individual merchants taking
          higher volume of payments (typically over 1000 transactions per month). These fees range from 60p-1p
          per transaction and are on a per merchant basis. Get in touch directly
          at <Href to='partners_email' itemProp='email' /> to find out more.
        </p>

        <p>
          If you need your own Service User Number (SUN) or Creditor ID (CID), we can help you with this for
          an additional £200 / €250 per month per SUN / CID.
        </p>
        </Translation>
    );
  }
}
