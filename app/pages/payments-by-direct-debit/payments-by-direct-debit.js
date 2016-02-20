import React from 'react';
import Translation from '../../components/translation/translation';
import PaymentsByDirectDebitEn from './payments-by-direct-debit.en';
import PaymentsByDirectDebitFr from './payments-by-direct-debit.fr';
import PaymentsByDirectDebitEs from './payments-by-direct-debit.es';

export default class PaymentsByDirectDebit extends React.Component {
  displayName = 'PaymentsByDirectDebit'

  render() {
    return (
      <Translation locales={['en','fr', 'es']}>
        <PaymentsByDirectDebitEn />
        <PaymentsByDirectDebitFr />
        <PaymentsByDirectDebitEs />
      </Translation>
    );
  }
}
