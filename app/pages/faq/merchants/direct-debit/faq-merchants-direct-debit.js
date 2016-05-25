import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsDirectDebitEn from './faq-merchants-direct-debit.en';
import FaqMerchantsDirectDebitFr from './faq-merchants-direct-debit.fr';
import FaqMerchantsDirectDebitDe from './faq-merchants-direct-debit.de';
import FaqMerchantsDirectDebitEs from './faq-merchants-direct-debit.es';

export default class FaqMerchantsDirectDebit extends React.Component {
  displayName = 'FaqMerchantsDirectDebit'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsDirectDebitEn />
        <FaqMerchantsDirectDebitFr />
        <FaqMerchantsDirectDebitDe />
        <FaqMerchantsDirectDebitEs />
      </FaqMerchantsPage>
    );
  }
}
