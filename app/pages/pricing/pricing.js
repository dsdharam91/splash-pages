import React from 'react';
import Page from '../../components/page/page';
import PricingEn from './pricing.en';
import PricingFr from './pricing.fr';
import PricingDe from './pricing.de';
import PricingEs from './pricing.es';
import PricingNl from './pricing.nl';

export default class Pricing extends React.Component {
  displayName = 'Pricing'

  render() {
    return (
      <Page isInverted={false}>
        <PricingEn />
        <PricingFr />
        <PricingDe />
        <PricingEs />
        <PricingNl />
      </Page>
    );
  }
}
