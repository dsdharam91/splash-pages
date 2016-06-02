import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Immutable from 'immutable';
import Href from '../../components/href/href';
import Frame from '../../components/frame/frame';
import VideoTile from '../../components/video-tile/video-tile';

export default class HowToEn extends React.Component {
  displayName = 'HowToEn'

  constructor(props) {
    super(props);

    const videos = Immutable.fromJS([
      { id: 167890582, title: 'Adding customers', duration: '01:49', slug: 'adding-customers' },
      { id: 167887618, title: 'Plans', duration: '02:32', slug: 'plans' },
      { id: 167887615, title: 'Payments and paylinks', duration: '02:57', slug: 'payments-and-paylinks' },
      { id: 167887610, title: 'Teams', duration: '02:11', slug: 'teams' },
    ]);

    this.locationHasChanged = this.locationHasChanged.bind(this);

    this.state = {
      videos,
      autoplay: 0,
      active: videos.get(0),
    };
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
    router: React.PropTypes.func,
  }

  componentDidMount() {
    this.locationHasChanged();
    window.addEventListener('hashchange', this.locationHasChanged);
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.locationHasChanged);
  }

  locationHasChanged(event) {
    const { hash } = window && window.location;
    this.setState(() => {
      return {
        active: this.state.videos.find(
          (item) => item.get('slug') === hash.substring(1)
        ) || this.state.videos.get(0),
        /**
         * the presence of the event parameter indicates that we should autoplay, since
         * it must mean that hash has changed since the initial load
         */
        autoplay: event ? 1 : 0,
      };
    });
    window.scrollTo(window, 0);
  }

  render() {
    return (
      <Translation locales='en'>
        <div className='page-hero u-relative u-size-full'>
          <div className='u-text-center u-padding-Vl'>
            <h1 className="u-text-heading u-text-xl u-text-light u-color-invert u-padding-Bs">Here's how it works</h1>
            <div className="u-padding-Tl">
              <div className="u-center videos-container__iframe u-margin-Vl">
                <Frame src={ `https://player.vimeo.com/video/${ this.state.active.get('id') }?autoplay=${ this.state.autoplay }` } width="100%" height="100%" frameBorder="0" allowFullScreen />
              </div>
              <div className="u-size-2of5 u-center u-padding-Vs u-color-invert">
                <p className="u-text-heavy u-margin-Bxs">Trying out GoCardless</p>
                <p>The easiest way to know if GoCardless is right for you is to sign up and try it out. It's quick and free, and you can use your own details to take trial payments.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="videos-container__select-a-video u-text-center u-color-base u-padding-Vl">
          <h2 className="u-text-heading u-color-heading u-text-l u-text-light u-padding-Vl u-margin-Bl">Select a video to learn more about our Dashboard</h2>

          <div className="grid site-container">{ this.state.videos.map(video => <VideoTile key={ video.get('id') } { ...video.toJS() } isActive={ this.state.active === video } />) }</div>

          <hr className="u-margin-An u-margin-Txxl"></hr>

          <div className="site-container u-text-center u-padding-Vxxl">
            <div className="u-padding-Vxl">
              <Href to='signup.path' id='track-how-to-merchants-new' className={ 'btn' }>
                <Message pointer='cta.basic' />
              </Href>

              <p className="u-color-p u-margin-Ts">No set up costs, no monthly fees, no hidden charges</p>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
