import React from 'react';
import Link from '../../components/link/link';
import Message from '../../components/message/message';

export default class StoryLink extends React.Component {
  displayName = 'StoryLink'

  static propTypes = {
    imgClass: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  }

  render() {
    return (
      <Link to={this.props.to} className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
        <div className='product-grid__container u-text-center u-padding-Vl'>
          <i role='img' aria-label={this.props.to} className={this.props.imgClass}></i>
          <p className='u-size-3of4 u-center u-color-p u-margin-Txxs'>
             {this.props.children}
          </p>
        </div>
        <div className='stories-item__btn btn u-size-full'><Message pointer='stories.link' /></div>
      </Link>
    );
  }
}

