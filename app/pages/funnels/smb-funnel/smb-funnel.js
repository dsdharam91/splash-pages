import React from 'react';
import Page from '../../../components/page/page';
import SMBFunnelEn from './smb-funnel.en';

export default class SMBFunnel extends React.Component {
  displayName = 'SMBFunnel'

  render() {
    return (
      <Page isInverted>
        <SMBFunnelEn />
      </Page>
    );
  }
}
