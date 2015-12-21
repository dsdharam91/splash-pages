import React from 'react';
import Page from '../../components/page/page';
import StoriesEn from './stories.en';
import StoriesFr from './stories.fr';


export default class Stories extends React.Component {
  displayName = 'Stories'

  render() {
    return (
      <Page isInverted>
        <StoriesEn />
        <StoriesFr />
      </Page>
    );
  }
}
