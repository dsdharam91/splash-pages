import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideGettingPaidEn from './partners-guide-getting-paid.en';
import PartnersGuideGettingPaidDe from './partners-guide-getting-paid.de';

export default class PartnersGuideGettingPaid extends React.Component {
  displayName = 'PartnersGuideGettingPaid'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideGettingPaidDe />
        <PartnersGuideGettingPaidEn />
      </PartnersGuidePage>
    );
  }
}
