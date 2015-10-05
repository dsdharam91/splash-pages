import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import InlineMessage from '../../components/inline-message/inline-message';
import HomeEn from './home.en';
import HomeFr from './home.fr';
import HomeDe from './home.de';
import HomeEs from './home.es';
import HomeSe from './home.se';
import HomeNo from './home.no';
import HomeNl from './home.nl';
import IfLocale from '../../components/if-locale/if-locale';
import Href from '../../components/href/href';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      <div>
        <IfLocale showHoldingPage={false}>
          <Page>
            <div className='page-hero page-hero--home page-hero--large u-relative u-size-full'>
              <div className='site-container page-hero__container'>
                <div className='page-hero__inner'>
                  <div className='page-hero__text'>
                    <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                      <InlineMessage pointer='hero.header' locale="en">Recurring payments made simple</InlineMessage>
                    </h1>

                    <div className={
                      'u-text-heading u-text-center u-color-invert ' +
                      'u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'
                    }>
                      <Message pointer='hero.desc' />
                    </div>

                    <div className='u-text-center u-margin-Tl'>
                      <IfLocale hasInstantSignup={false}>
                        <a href='#learn-more' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-3of12'>
                          <Message pointer='cta.more' />
                        </a>
                      </IfLocale>

                      <IfLocale hasInstantSignup>
                        <a href='#learn-more' id='track-hero-learn-more' className='btn btn--invert btn--move u-size-2of9'>
                          <Message pointer='cta.more' />
                        </a>

                        <Href to='signup.path'
                        className='btn btn--invert-hollow btn-move u-size-2of9 u-margin-Lm'
                        id='track-hero-merchants-new'
                        pointer='cta.signup' />
                      </IfLocale>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <HomeEn />
            <HomeFr />
            <HomeDe />
            <HomeEs />
          </Page>
        </IfLocale>

        <IfLocale showHoldingPage>
          <HomeEn />
          <HomeSe/>
          <HomeNo/>
          <HomeNl/>
        </IfLocale>
      </div>
    );
  }
}
