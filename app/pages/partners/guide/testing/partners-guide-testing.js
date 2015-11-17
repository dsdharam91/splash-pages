import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideTestingEn from './partners-guide-testing.en';
import PartnersGuideTestingDe from './partners-guide-testing.de';

export default class PartnersGuideTesting extends React.Component {
  displayName = 'PartnersGuideTesting'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideTestingDe />
        <PartnersGuideTestingEn />
      </PartnersGuidePage>
    );
  }
}
