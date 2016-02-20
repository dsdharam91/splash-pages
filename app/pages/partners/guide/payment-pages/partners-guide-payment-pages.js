import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuidePaymentPagesEn from './partners-guide-payment-pages.en';
import PartnersGuidePaymentPagesDe from './partners-guide-payment-pages.de';

export default class PartnersGuidePaymentPages extends React.Component {
  displayName = 'PartnersGuidePaymentPages'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuidePaymentPagesDe />
        <PartnersGuidePaymentPagesEn />
      </PartnersGuidePage>
    );
  }
}
