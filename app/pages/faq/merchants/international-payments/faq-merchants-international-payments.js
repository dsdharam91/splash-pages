import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsInternationalPaymentsEn from './faq-merchants-international-payments.en';
import FaqMerchantsInternationalPaymentsFr from './faq-merchants-international-payments.fr';
import FaqMerchantsInternationalPaymentsDe from './faq-merchants-international-payments.de';

export default class FaqMerchantsInternationalPayments extends React.Component {
  displayName = 'FaqMerchantsInternationalPayments'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsInternationalPaymentsEn />
        <FaqMerchantsInternationalPaymentsFr />
        <FaqMerchantsInternationalPaymentsDe />
      </FaqMerchantsPage>
    );
  }
}
