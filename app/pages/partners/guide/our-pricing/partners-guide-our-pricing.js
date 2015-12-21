import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideOurPricingEn from './partners-guide-our-pricing.en';
import PartnersGuideOurPricingDe from './partners-guide-our-pricing.de';

export default class PartnersGuidePaymentPages extends React.Component {
  displayName = 'PartnersGuidePaymentPages'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideOurPricingDe />
        <PartnersGuideOurPricingEn />
      </PartnersGuidePage>
    );
  }
}
