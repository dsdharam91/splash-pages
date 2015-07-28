import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsPartnersEn from './faq-merchants-partners.en';
import FaqMerchantsPartnersFr from './faq-merchants-partners.fr';
import FaqMerchantsPartnersDe from './faq-merchants-partners.de';

export default class FaqMerchantsPartners extends React.Component {
  displayName = 'FaqMerchantsPartners'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsPartnersEn />
        <FaqMerchantsPartnersFr />
        <FaqMerchantsPartnersDe />
      </FaqMerchantsPage>
    );
  }
}
