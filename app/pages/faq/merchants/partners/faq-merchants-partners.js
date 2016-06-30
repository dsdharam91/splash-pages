import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsPartnersFr from './faq-merchants-partners.fr';
import FaqMerchantsPartnersDe from './faq-merchants-partners.de';

export default class FaqMerchantsPartners extends React.Component {
  displayName = 'FaqMerchantsPartners'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsPartnersFr />
        <FaqMerchantsPartnersDe />
      </FaqMerchantsPage>
    );
  }
}
