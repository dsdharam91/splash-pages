import React from 'react';
import Page from '../../../components/page/page';
import DDFunnelEn from './dd-funnel.en';

export default class DDFunnel extends React.Component {
  displayName = 'DDFunnel'

  render() {
    return (
      <Page isInverted>
        <DDFunnelEn />
      </Page>
    );
  }
}
