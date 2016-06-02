import React from 'react';
import Page from '../../components/page/page';
import Translation from '../../components/translation/translation';
import HowToEn from './how-to.en';

export default class HowTo extends React.Component {
  displayName = 'HowTo'

  render() {
    return (
      <div>
        <Translation locales={['en']}>
          <Page>
            <HowToEn />
          </Page>
        </Translation>
      </div>
    );
  }
}
