import React from 'react';
import classNames from 'classnames';

export default class VideoTile extends React.Component {
  displayName = 'VideoTile'

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    duration: React.PropTypes.string.isRequired,
    slug: React.PropTypes.string.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  }

  render() {
    const {title, duration, slug, isActive} = this.props;

    const containerClassName = classNames({
      'is-active': isActive,
      'u-margin-Hs': true,
      'u-margin-Bs': true,
      'video-tile': true,
    });

    return (
      <div className="grid__cell u-size-1of4 u-text-center u-margin-Bl" title={ title }>
        <a className="u-link-clean" href={`#${ slug }`}>
          <div className={containerClassName}>
            <div className="u-size-5of6 u-center">
              <i className="video-tile__play-button u-margin-Tl u-margin-Bs"></i>
              <p className="video-tile__title u-text-light u-text-no-smoothing u-text-m u-link-clean u-cf u-color-heading">{ title }</p>
              <p className="u-margin-Ts u-color-base video-tile__time">{ duration }</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
