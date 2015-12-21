import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideEn from './partners-guide-introduction.en';
import PartnersGuideDe from './partners-guide-introduction.de';

export default class PartnersGuide extends React.Component {
  displayName = 'PartnersGuide'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideDe />
        <PartnersGuideEn />
      </PartnersGuidePage>
    );
  }
}
