import React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import PartnersGuideLegalEn from './partners-guide-legal.en';
import PartnersGuideLegalDe from './partners-guide-legal.de';

export default class PartnersGuideLegal extends React.Component {
  displayName = 'PartnersGuideLegal'

  render() {
    return (
      <PartnersGuidePage>
        <PartnersGuideLegalDe />
        <PartnersGuideLegalEn />
      </PartnersGuidePage>
    );
  }
}
