import React from 'react';
import Page from '../../components/page/page';
import DirectDebitApiEn from './direct-debit-api.en';
import DirectDebitApiFr from './direct-debit-api.fr';

export default class DirectDebitApi extends React.Component {
  displayName = 'DirectDebitApi'

  render() {
    return (
      <Page isInverted>
        <DirectDebitApiEn />
        <DirectDebitApiFr />
      </Page>
    );
  }
}
