import React from 'react';

export default class Frame extends React.Component {
  displayName = 'Frame'

  render() {
    return <iframe {...this.props} />;
  }
}
