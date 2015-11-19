import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideGettingStartedEn from './partners-guide-getting-started.en';
import PartnersGuideGettingStartedDe from './partners-guide-getting-started.de';

export default class PartnersGuideGettingStarted extends React.Component {
  displayName = 'PartnersGuideGettingStarted'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideGettingStartedDe />
        <PartnersGuideGettingStartedEn />
      </PartnersGuidePage>
    );
  }
}
