import React from 'react';
import Page from '../../components/page/page';
import DevelopersEn from './developers.en';
import DevelopersFr from './developers.fr';

export default class Developers extends React.Component {
  displayName = 'Developers'

  render() {
    return (
      <Page isInverted>
        <DevelopersEn />
        <DevelopersFr />
      </Page>
    );
  }
}
