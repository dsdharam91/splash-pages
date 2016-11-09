import React from 'react';
import Page from '../../../components/page/page';
import NonDDFunnelEn from './non-dd-funnel.en';

export default class NonDDFunnel extends React.Component {
  displayName = 'NonDDFunnel'

  render() {
    return (
      <Page isInverted>
        <NonDDFunnelEn />
      </Page>
    );
  }
}
