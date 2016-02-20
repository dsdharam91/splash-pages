import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideSecurityEn from './partners-guide-security.en';
import PartnersGuideSecurityDe from './partners-guide-security.de';

export default class PartnersGuideSecurity extends React.Component {
  displayName = 'PartnersGuideSecurity'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideSecurityDe />
        <PartnersGuideSecurityEn />
      </PartnersGuidePage>
    );
  }
}
