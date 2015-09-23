import React from 'react';
import Translation from '../../components/translation/translation';
import HomeHoldingPage from './home-holding-page';

export default class HomeNl extends React.Component {
  displayName = 'HomeNl'

  render() {
    return (
      <Translation locales='nl'>
        <HomeHoldingPage/>
      </Translation>
    );
  }
}
