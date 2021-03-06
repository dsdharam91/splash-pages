import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import InlineMessage from '../../components/inline-message/inline-message';
import Translation from '../../components/translation/translation';
import HomeEn from './home.en';
import HomeEnGlobal from './home.en.global';
import HomeFr from './home.fr';
import HomeDe from './home.de';
import HomeEs from './home.es';
import HomeNl from './home.nl';
import HomeHoldingPage from './home-holding-page';
import IfLocale from '../../components/if-locale/if-locale';
import Href from '../../components/href/href';
import Link from '../../components/link/link';

export default class Home extends React.Component {
  displayName = 'Home'

  render() {
    return (
      <div>
        <IfLocale showHoldingPage={false}>
          <Translation locales={['fr', 'de', 'es', 'nl', 'en']} exclude={['en-GB']}>
            <Page>
              <div className='page-hero page-hero--global page-hero--large u-relative u-size-full'>
                <div className='site-container page-hero__container'>
                  <div className='page-hero__inner'>
                    <div className='page-hero__text'>
                      <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                        <InlineMessage pointer='hero.header' locale="en">Recurring payments made simple</InlineMessage>
                      </h1>
                      <div className={'u-text-heading u-text-center u-color-invert ' +
                                      'u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'}>
                        <Message pointer='hero.desc' />
                      </div>
                      <div className='u-text-center u-margin-Tl'>
                        <IfLocale hasInstantSignup={false}>
                          <a href='#learn-more' className='btn btn--invert btn--move u-size-3of12'>
                            <Message pointer='cta.more' />
                          </a>
                          <Link to='contact_sales' className='btn btn--invert-hollow btn-move u-size-2of9 u-margin-Lm'>
                            <Message pointer='cta.pro' />
                          </Link>
                        </IfLocale>
                        <IfLocale hasInstantSignup>
                          <Translation locales='fr'>
                            <Link to='contact_sales' className='btn btn--invert btn-move u-size-1of4'>
                              <Message pointer='cta.pro' />
                            </Link>
                            <Link to='features' className='btn btn--invert-hollow btn--move u-size-3of12 u-margin-Lm'>
                              <Message pointer='cta.more' />
                            </Link>
                          </Translation>
                          <Translation locales={['de', 'es', 'nl', 'en']}>
                            <Href to='signup.path'
                            className='btn btn--invert btn-move u-size-1of4 u-margin-Lm'
                            pointer='cta.signup' />
                            <Link to='contact_sales' className='btn btn--invert-hollow btn-move u-size-1of4 u-margin-Lm'>
                              <Message pointer='cta.pro' />
                            </Link>
                          </Translation>
                        </IfLocale>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <HomeFr />
              <HomeDe />
              <HomeEs />
              <HomeNl />
              <HomeEnGlobal />
            </Page>
          </Translation>

          <Translation locales='en-GB'>
            <Page isInverted={false}>
              <HomeEn />
            </Page>
          </Translation>
        </IfLocale>

        <IfLocale showHoldingPage>
          <HomeHoldingPage />
        </IfLocale>
      </div>
    );
  }
}
