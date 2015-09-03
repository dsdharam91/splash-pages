import React from 'react';
import LegalPage from '../legal-page';
import LegalMerchantsEn from './legal-merchants.en';
import LegalMerchantsFr from './legal-merchants.fr';
import LegalMerchantsDe from './legal-merchants.de';

export default class LegalMerchants extends React.Component {
  displayName = 'LegalMerchants'

  render() {
    return (
      <LegalPage>
        <LegalMerchantsEn />
        <LegalMerchantsFr />
        <LegalMerchantsDe />
      </LegalPage>
    );
  }
}
