import React from 'react';
import Translation from '../../components/translation/translation';
import PaymentsByDirectDebitEn from './payments-by-direct-debit.en';
import PaymentsByDirectDebitFr from './payments-by-direct-debit.fr';

export default class PaymentsByDirectDebit extends React.Component {
  displayName = 'PaymentsByDirectDebit'

  render() {
    return (
      <Translation locales={['en','fr']}>
        <PaymentsByDirectDebitEn />
        <PaymentsByDirectDebitFr />
      </Translation>
    );
  }
}
