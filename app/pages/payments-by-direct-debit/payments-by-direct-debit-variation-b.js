import React from 'react';
import Translation from '../../components/translation/translation';
import PaymentsByDirectDebitVariationBEn from './payments-by-direct-debit-variation-b.en';
import PaymentsByDirectDebitVariationBFr from './payments-by-direct-debit-variation-b.fr';

export default class PaymentsByDirectDebitVariationB extends React.Component {
  displayName = 'PaymentsByDirectDebitVariationB'

  render() {
    return (
      <Translation locales={['en','fr']}>
        <PaymentsByDirectDebitVariationBEn />
        <PaymentsByDirectDebitVariationBFr />
      </Translation>
    );
  }
}
