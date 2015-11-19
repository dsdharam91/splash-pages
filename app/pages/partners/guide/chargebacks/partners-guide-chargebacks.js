import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideChargebacksEn from './partners-guide-chargebacks.en';
import PartnersGuideChargebacksDe from './partners-guide-chargebacks.de';

export default class PartnersGuideChargebacks extends React.Component {
  displayName = 'PartnersGuideChargebacks'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideChargebacksDe />
        <PartnersGuideChargebacksEn />
      </PartnersGuidePage>
    );
  }
}
