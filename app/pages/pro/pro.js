import React from 'react';
import Page from '../../components/page/page';
import ProEn from './pro.en';
import ProFr from './pro.fr';
import ProDe from './pro.de';
import ProEs from './pro.es';
import ProNl from './pro.nl';

export default class Pro extends React.Component {
  displayName = 'Pro'

  render() {
    return (
      <Page>
        <ProEn />
        <ProFr />
        <ProDe />
        <ProEs />
        <ProNl />
      </Page>
    );
  }
}
