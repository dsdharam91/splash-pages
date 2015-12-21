import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideOptionsEn from './partners-guide-options.en';
import PartnersGuideOptionsDe from './partners-guide-options.de';

export default class PartnersGuideOptions extends React.Component {
  displayName = 'PartnersGuideOptions'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideOptionsDe />
        <PartnersGuideOptionsEn />
      </PartnersGuidePage>
    );
  }
}
