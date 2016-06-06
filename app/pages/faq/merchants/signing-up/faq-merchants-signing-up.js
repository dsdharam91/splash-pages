import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsSigningUpEn from './faq-merchants-signing-up.en';
import FaqMerchantsSigningUpFr from './faq-merchants-signing-up.fr';
import FaqMerchantsSigningUpDe from './faq-merchants-signing-up.de';
import FaqMerchantsSigningUpEs from './faq-merchants-signing-up.es';

export default class FaqMerchantsSigningUp extends React.Component {
  displayName = 'FaqMerchantsSigningUp'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsSigningUpEn />
        <FaqMerchantsSigningUpFr />
        <FaqMerchantsSigningUpDe />
        <FaqMerchantsSigningUpEs />
      </FaqMerchantsPage>
    );
  }
}
