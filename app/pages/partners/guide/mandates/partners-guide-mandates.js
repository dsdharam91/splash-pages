import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideMandatesEn from './partners-guide-mandates.en';
import PartnersGuideMandatesDe from './partners-guide-mandates.de';

export default class PartnersGuideMandates extends React.Component {
  displayName = 'PartnersGuideMandates'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideMandatesDe />
        <PartnersGuideMandatesEn />
      </PartnersGuidePage>
    );
  }
}