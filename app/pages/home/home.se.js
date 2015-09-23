import React from 'react';
import Translation from '../../components/translation/translation';
import HomeHoldingPage from './home-holding-page';

export default class HomeSe extends React.Component {
  displayName = 'HomeSe'

  render() {
    return (
      <Translation locales='se'>
        <HomeHoldingPage/>
      </Translation>
    );
  }
}
