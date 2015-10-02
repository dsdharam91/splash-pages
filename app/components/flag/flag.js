import React from 'react';

export default class Flag extends React.Component {
  displayName = 'Flag'

  render() {
    const countryCode = this.props.country.toString();
    const flagPath = `/images/flags/${countryCode}-flag-icon@2x.png`;
    
    return (<img src={flagPath} alt='' {...this.props} />);
  }
}
