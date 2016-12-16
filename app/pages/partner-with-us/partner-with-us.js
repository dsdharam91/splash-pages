import React from 'react';
import Page from '../../components/page/page';
import PartnerWithUsEn from './partner-with-us.en';
import PartnerWithUsFr from './partner-with-us.fr';
import PartnerWithUsDe from './partner-with-us.de';
import PartnerWithUsEs from './partner-with-us.es';
import PartnerWithUsNl from './partner-with-us.nl';

export default class PartnerWithUs extends React.Component {
  displayName = 'PartnerWithUs'

  render() {
    return (
      <Page isInverted>
        <PartnerWithUsEn />
        <PartnerWithUsFr />
        <PartnerWithUsDe />
        <PartnerWithUsEs />
        <PartnerWithUsNl />
      </Page>
    );
  }
}
