import React from 'react';
import classNames from 'classnames';
import Link from '../../components/link/link';

export default class StoryBigQuote extends React.Component {
  displayName = 'StoryBigQuote';

  static propTypes = {
    person: React.PropTypes.string.isRequired,
    position: React.PropTypes.string.isRequired,
    image: React.PropTypes.string,
    heroClass: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    readfullStoryLink: React.PropTypes.string,
  };

  render() {
    return (
      <div className={classNames('story-hero', this.props.heroClass)}>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-padding-Bxxl u-size-2of3 u-center'>
              <p className='u-text-heading u-color-invert u-text-l u-text-light'>
                “{this.props.children}”
              </p>
            </div>
            {this.props.image &&
              (<img src={this.props.image} alt={this.props.position} className='u-size-1of12 u-text-center u-margin-Bxs' />)}
            <div className='u-color-invert u-text-heading u-text-m u-text-semi'>{this.props.person}</div>
            <div className='u-color-invert u-text-heading u-text-xs'>{this.props.position}</div>
            { this.props.readfullStoryLink && (
              <div className='u-margin-Ts'>
                <Link to={this.props.readfullStoryLink}
                  className='u-link-invert u-text-heading u-color-invert u-text-semi u-text-upcase u-text-xxs'>
                  Read the full story
                </Link>
              </div>) || '' }
          </div>
        </div>
      </div>
    );
  }
}
