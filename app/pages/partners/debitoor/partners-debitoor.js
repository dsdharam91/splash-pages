import React from 'react';
import Page from '../../../components/page/page';
import PartnersDebitoorDe from './partners-debitoor.de';
//import PartnersDebitoorEs from './partners-debitoor.es';

export default class PartnersDebitoor extends React.Component {
  displayName = 'PartnersDebitoor'

  render() {
    return (
      <Page isInverted={false}>
        <PartnersDebitoorDe />
      </Page>
    );
  }
}
