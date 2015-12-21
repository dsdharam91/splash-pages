import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideWhiteLabelEn from './partners-guide-white-label-integration.en';
import PartnersGuideWhiteLabelDe from './partners-guide-white-label-integration.de';

export default class PartnersGuideWhiteLabel extends React.Component {
  displayName = 'PartnersGuideWhiteLabel'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideWhiteLabelDe />
        <PartnersGuideWhiteLabelEn />
      </PartnersGuidePage>
    );
  }
}
