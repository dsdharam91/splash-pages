import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideAppIntegrationEn from './partners-guide-app-integration.en';
import PartnersGuideAppIntegrationDe from './partners-guide-app-integration.de';

export default class PartnersGuideAppIntegration extends React.Component {
  displayName = 'PartnersGuideAppIntegration'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideAppIntegrationDe />
        <PartnersGuideAppIntegrationEn />
      </PartnersGuidePage>
    );
  }
}
