import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideRestrictionsEn from './partners-guide-restrictions.en';
import PartnersGuideRestrictionsDe from './partners-guide-restrictions.de';

export default class PartnersGuideRestrictions extends React.Component {
  displayName = 'PartnersGuideRestrictions'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideRestrictionsDe />
        <PartnersGuideRestrictionsEn />
      </PartnersGuidePage>
    );
  }
}
