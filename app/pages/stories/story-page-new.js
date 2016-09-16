import React from 'react';
import Page from '../../components/page/page';
import StoryPageNewEn from './story-page-new.en';
import StoryPageNewDe from './story-page-new.de';

export default class StoryPageNew extends React.Component {
  displayName = 'StoryPageNew'

  render() {
    return (
      <Page isInverted>
        <StoryPageNewEn />
        <StoryPageNewDe />
      </Page>
    );
  }
}