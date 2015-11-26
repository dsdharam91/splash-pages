import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideReportingEn from './partners-guide-reporting.en';
import PartnersGuideReportingDe from './partners-guide-reporting.de';

export default class PartnersGuideReporting extends React.Component {
  displayName = 'PartnersGuideReporting'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideReportingDe />
        <PartnersGuideReportingEn />
      </PartnersGuidePage>
    );
  }
}
