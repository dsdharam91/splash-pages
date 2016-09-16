import React from 'react';
import Translation from '../../components/translation/translation';
import Href from '../../components/href/href';
import Page from '../../components/page/page';
import Link from '../../components/link/link';
import Message from '../../components/message/message';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class StoryPageNewDe extends React.Component {
  displayName = 'StoryPageNewDe';

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    benefits: React.PropTypes.string.isRequired,
    position: React.PropTypes.string,
    company: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    bgimgUrl: React.PropTypes.string.isRequired,
    logoimg: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
    sidebarLogoSrc: React.PropTypes.string.isRequired,
    sidebarServices: React.PropTypes.string.isRequired,
    sidebarEmployees: React.PropTypes.string,
    sidebarPreviousProvider: React.PropTypes.string,
    sidebarTimeSaved: React.PropTypes.string,
  };

  render() {
    return (
      <Translation locales='de'>
      <Page>
        <div className='page-hero page-hero--large page-hero--stories u-relative u-size-full' style={{'background-image': this.props.bgimgUrl}}>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                  “{this.props.title}”
                </h1>
                <div className='u-color-invert u-text-heading u-text-m u-text-semi'>
                  {this.props.author}
                </div>
                <div className="u-color-invert u-text-heading u-text-xs">
                  { this.props.position ? this.props.position + ', ' : '' } {this.props.company}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center'>
            <p className="u-text-heavy u-text-upcase u-text-xxxs u-color-medium-gray u-margin-Bs">Key benefits</p>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-size-5of6 u-center'>
              {this.props.benefits}
            </h2>
          </div>
        </div>
        <hr className='section-divider' />
        <div className="site-container u-padding-Vxxl">
          <div className='u-padding-Vxl grid'>
            <div className="grid__cell u-size-2of3">
              {this.props.children}
              <IfLinkExists to='stories'>
                <div className="u-margin-Txl">
                  <Link to='stories' className="u-text-heavy">
                  &larr; Lesen Sie weitere Kundenstimmen
                  </Link>
                </div>
              </IfLinkExists>
            </div>
            <div className='story-sidebar grid__cell u-size-1of3 u-background-light-gray u-padding-Am u-border-radius'>
              <img src={ this.props.sidebarLogoSrc } className='u-block u-center u-margin-Vl u-center story-page__logo' />
              <div className="u-margin-Bm">
                <p className="u-text-xxs u-color-dark-gray u-margin-Bxxs">Unternehmen</p>
                <p className="u-text-xs">{this.props.company}</p>
              </div>
              <div className="u-margin-Bm">
                <p className="u-text-xxs u-color-dark-gray u-margin-Bxxs">Service</p>
                <p className="u-text-xs">{this.props.sidebarServices}</p>
              </div>
              <div className="u-margin-Bm">
                <p className="u-text-xxs u-color-dark-gray u-margin-Bxxs">Mitarbeiterzahl</p>
                <p className="u-text-xs">{this.props.sidebarEmployees}</p>
              </div>
              { this.props.sidebarPreviousProvider && (<div className="u-margin-Bm">
                <p className="u-text-xxs u-color-dark-gray u-margin-Bxxs">Früherer Lastschriftanbieter</p>
                <p className="u-text-xs">{this.props.sidebarPreviousProvider}</p>
              </div>) }
              { this.props.sidebarTimeSaved && (<div>
                <p className="u-text-xxs u-color-dark-gray u-margin-Bxxs">Zeitersparnis mit GoCardless</p>
                <p className="u-text-xs">{this.props.sidebarTimeSaved}</p>
              </div>) }
            </div>
          </div>
        </div>
        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Starten Sie heute mit GoCardless
            </h2>
            <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
              Mehr als <Message pointer='number_of_merchants' /> Unternehmen nutzen GoCardless bereits
            </p>
            <Href to='signup.path' id='track-cta-sign-up' className='btn u-margin-Tm u-margin-Rm'>Jetzt anmelden</Href>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'><Message pointer='cta.pro' /></Link>
          </div>
        </div>
      </Page>
      </Translation>
    );
  }
}
