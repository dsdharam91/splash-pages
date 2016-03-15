import React from 'react';
import Page from '../../components/page/page';
import Translation from '../../components/translation/translation';
import PricingEn from './pricing.en';
import PricingFr from './pricing.fr';
import PricingDe from './pricing.de';
import PricingEs from './pricing.es';
import PricingNl from './pricing.nl';

export default class Pricing extends React.Component {
  displayName = 'Pricing'

  render() {
    return (
      <div>
        <Translation locales={['en', 'nl']}>
          <Page isInverted={false}>
            <PricingEn />
            <PricingNl />
          </Page>
        </Translation>

        <Translation locales={['fr', 'de', 'es']}>
          <Page>
            <PricingFr />
            <PricingDe />
            <PricingEs />
          </Page>
        </Translation>
      </div>
    );
  }
}
