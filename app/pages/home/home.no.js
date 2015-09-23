import React from 'react';
import Translation from '../../components/translation/translation';
import HomeHoldingPage from './home-holding-page';

export default class HomeNo extends React.Component {
  displayName = 'HomeNo'

  render() {
    return (
      <Translation locales='no'>
        <HomeHoldingPage/>
      </Translation>
    );
  }
}
