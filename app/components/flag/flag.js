import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';

export default class Flag extends React.Component {
  displayName = 'Flag'

  static propTypes = {
    country: PropTypes.string.isRequired,
  }

  render() {
    const countryCode = this.props.country.toString();
    const flagPath = `/images/flags/${countryCode}-flag-icon@2x.png`;

    return (<img src={flagPath} alt='' {...this.props} />);
  }
}
