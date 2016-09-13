import React from 'react';
import Page from '../../components/page/page';
import StoryPageNewEn from './story-page-new.en';
import StoryPageNewDe from './story-page-new.de';
// import StoryPageNewFr from './story-page-new.fr';
// import StoryPageNewEs from './story-page-new.es';

export default class StoryPageNew extends React.Component {
  displayName = 'StoryPageNew'

  render() {
    return (
      <Page isInverted>
        <StoryPageNewEn />
        <StoryPageNewDe />
        {/*<StoryPageNewFr />*/}
        {/*<StoryPageNewEs />*/}
      </Page>
    );
  }
}