import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsHowItWorksEn from './faq-merchants-how-it-works.en';
import FaqMerchantsHowItWorksFr from './faq-merchants-how-it-works.fr';
import FaqMerchantsHowItWorksDe from './faq-merchants-how-it-works.de';

export default class FaqMerchantsHowItWorks extends React.Component {
  displayName = 'FaqMerchantsHowItWorks'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsHowItWorksEn />
        <FaqMerchantsHowItWorksFr />
        <FaqMerchantsHowItWorksDe />
      </FaqMerchantsPage>
    );
  }
}
