import React from 'react';
import Page from '../../components/page/page';
import PartnersEn from './partners.en';
import PartnersFr from './partners.fr';
import PartnersDe from './partners.de';
import PartnersEs from './partners.es';

export default class Partners extends React.Component {
  displayName = 'Partners'

  render() {
    return (
      <Page isInverted={true}>
        <PartnersEn />
        <PartnersFr />
        <PartnersDe />
        <PartnersEs />
      </Page>
    );
  }
}
