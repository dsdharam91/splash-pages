import React from 'react';

export default class CheckMark extends React.Component {
  displayName = 'CheckMark'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg alt='✓' className={this.props.className} role="img" aria-label="Check" width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
        <title>Check</title>
          <g>
            <path d="M13.92 3.002c.112-.113.112-.308 0-.42L11.876.538c-.113-.114-.308-.114-.42 0L5.25 6.76 2.544 4.04c-.113-.114-.308-.114-.42 0L.08 6.08c-.112.114-.112.31 0 .422l4.96 4.96c.064.047.13.08.21.08.08 0 .146-.033.21-.08L13.92 3z"/>
          </g>
      </svg>
    );
  }
}
