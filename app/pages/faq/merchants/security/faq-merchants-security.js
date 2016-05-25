import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsSecurityEn from './faq-merchants-security.en';
import FaqMerchantsSecurityFr from './faq-merchants-security.fr';
import FaqMerchantsSecurityDe from './faq-merchants-security.de';
import FaqMerchantsSecurityEs from './faq-merchants-security.es';

export default class FaqMerchantsSecurity extends React.Component {
  displayName = 'FaqMerchantsSecurity'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsSecurityEn />
        <FaqMerchantsSecurityFr />
        <FaqMerchantsSecurityDe />
        <FaqMerchantsSecurityEs />
      </FaqMerchantsPage>
    );
  }
}
