import React from 'react';
import Link from '../../components/link/link';
import Message from '../../components/message/message';
import classNames from 'classnames';

export default class StoryLink extends React.Component {
  displayName = 'StoryLink'

  static propTypes = {
    imgClass: React.PropTypes.string.isRequired,
    to: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    cssSizeClass: React.PropTypes.string,
  }

  render() {
    const cssSizeClass = this.props.cssSizeClass || 'u-size-1of3';
    const storyLinkClass = classNames('grid__cell u-link-clean u-padding-Rxs u-padding-Bm', cssSizeClass);
    return (
      <Link to={this.props.to} className={storyLinkClass}>
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

