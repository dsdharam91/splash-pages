import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Tabs from '../../components/tabs/tabs';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class ProEn extends React.Component {
  displayName = 'ProEn'

  render() {
    return (
      <Translation locales='en'>
        <div>
          <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>Direct Debit for the Digital Age</h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    A cutting edge platform for building your<br />recurring payments ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
          <StickyNav>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#overview' className='sticky-nav__link'>
                    Overview
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' className='sticky-nav__link'>
                    Features
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' className='sticky-nav__link'>
                    Pricing
                  </a>
                </li>
              </ul>
              <Link to='contact_sales' query={{ s: 'pro' }}
              className={
                'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
              }>
                <Message pointer='cta.pro' />
              </Link>

              <Href to='api_docs.path'
              className='u-pull-end u-margin-Txxs u-margin-Rm'>
                API Documentation
              </Href>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-3of4 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Welcome to GoCardless Pro
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Designed specifically for larger enterprises,
                    GoCardless Pro combines the simplicity of our original
                    GoCardless product with complete control over payments and customer experience.
                    It also allows you to collect Direct Debit payments from the UK, the Eurozone and Sweden via one simple integration.
                  </p>
                </div>
                <div className='grid u-margin-Tl u-padding-Tm'>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <img src="/images/pro/whitelabel-fill-icon.png" className="pro-page__feature-image" />
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Completely white-labelled
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      GoCardless Pro puts your brand at the forefront.
                      Enjoy complete control over payment pages and email notifications to your customers.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <img src="/images/pro/developer-fill-icon.png" className="pro-page__feature-image" />
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      A simple, modern API
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      All documentation for our Pro product is freely available in
                      our <Href to='api_docs.path'>API docs</Href>.
                      We’ve worked hard to make integrating your systems as painless as possible.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <img src="/images/pro/tablet-fill-icon.png" className="pro-page__feature-image" />
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Works everywhere
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      We’ve made it incredibly simple to develop on top of GoCardless Pro
                      and create the next generation of your website or mobile apps.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <img src="/images/pro/security-fill-icon.png" className="pro-page__feature-image" />
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Military grade security
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      We’ve sweated over security so you don’t have to.
                      We store all bank details with RSA encryption and communicate only over secure channels.
                    </p>
                  </div>
                </div>
                <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
                  It's easy to try our API and dashboard.&nbsp;
                  <a href='https://manage-sandbox.gocardless.com/signup'>
                    Sign up for a free sandbox account.
                  </a>
                </p>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Txl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                    You’re in good company
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Every day, some of the biggest and most respected businesses
                    trust GoCardless to power their payments.
                  </p>
                </div>
                <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                  <img src='/images/logos/pro-logos@2x.png' />
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div id='optimizely-pro-video' className='u-hidden'>
              <div className='u-text-center u-padding-Vxxl'>
                <div className='site-container u-padding-Vxl'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Watch a short overview of GoCardless Pro
                  </h2>
                  <iframe src='https://player.vimeo.com/video/116341918'
                  className='u-text-center videos-container__iframe u-margin-Vl'>
                  </iframe>
                </div>
              </div>
              <hr className='u-margin-An' />
            </div>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of2 u-center'>
                  <i className='europe-icon u-margin-Bs' />
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Want to take payments in Europe?
                  </h2>
                  <div className='u-center'>
                  <Translation locales={['en']} exclude={['en-SE']}>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      GoCardless Pro is the only product that enables you to collect
                      Direct Debit payments from the UK, the Eurozone and Sweden through a single integration.
                      With our API, your business can take payments from over 500 million people in over 22 European countries.
                    </p>
                  </Translation>
                  <Translation locales='en-SE'>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      GoCardless Pro is the only product that enables you to collect
                      Direct Debit payments from Sweden, the Eurozone and the UK through a single integration.
                      With our API, your business can take payments from over 500 million people in over 22 European countries.
                    </p>
                  </Translation>
                  </div>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of3 u-center'>
                  <figure className='svg-icon u-center'>
                    <img src="/images/pro/phone-fill-icon.png" className="pro-page__feature-image" />
                  </figure>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tm'>
                    <Message pointer='phone_local' />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      Speak with one of our payments experts to learn how GoCardless can help your business.
                    </p>
                  </div>
                  <Link to='contact_sales' query={{ s: 'pro' }}
                  className='btn btn--hollow u-margin-Tm'>
                    <Message pointer='cta.pro' />
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light u-margin-Bs'>
                    Your dashboard
                  </h2>
                  <div className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    A simple way to manage your payments and customers
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                      <a href='#customer-info'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Customer info
                      </a>
                    ), (
                      <a href='#payment-history'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Payment history
                      </a>
                    ), (
                      <a href='#filtering'
                      className='tab-link u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Filtering
                      </a>
                    ),]}>
                    <div>
                      <img src='/images/pro/customer.png'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payment.png'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payments-list.png'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />

          </div>
          <div className='section-scroll-target' id='pricing'>
            <div className='u-text-center u-padding-Vxxl'>
              <div className='site-container u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' /> per transaction
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                    Competitive rates for businesses of any size.<br />
                  </p>
                  <Link to='pricing' className='btn btn--hollow u-margin-Tm'>
                    Learn about our pricing
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-size-1of2 u-center u-padding-Vxl'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bm'>
                  Get in touch for a free quote
                </h2>
                <Link to='contact_sales' query={{ s: 'pro' }}
                className='btn u-margin-Rm'>
                  <Message pointer='cta.pro' />
                </Link>
                <a href='https://manage-sandbox.gocardless.com/signup'
                className='btn btn--hollow'>Try Pro for free</a>
                <hr className='u-margin-Vxxl' />
                <p className='u-color-dark-gray'>
                  <strong>Want to talk to someone first?</strong><br />
                  Call our payments experts on <Message pointer='phone_local' /><br />
                  We're available 9am - 6pm Monday to Friday
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
