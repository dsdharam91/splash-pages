import React from 'react';
import StoriesFoundationOfHeartsEn from './foundation-of-hearts.en';
import StoriesFoundationOfHeartsFr from './foundation-of-hearts.fr';


export default class StoriesFoundationOfHearts extends React.Component {
  displayName = 'StoriesFoundationOfHearts'

  render() {
    return (
      <div>
        <StoriesFoundationOfHeartsEn />
        <StoriesFoundationOfHeartsFr />
      </div>
    );
  }
}
