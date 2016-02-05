import React from 'react';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';

import OnlineManagementYellowIcon from '../../icons/svg/online-management-yellow';
import SaveMoneyGreenIcon from '../../icons/svg/save-money-green';
import CloudRedIcon from '../../icons/svg/cloud-red';
import OwnExperienceYellowIcon from '../../icons/svg/own-experience-yellow';
import IntegrateGreenIcon from '../../icons/svg/integrate-green';

export default class FeaturesEn extends React.Component {
  displayName = 'FeaturesEn'

  render() {
    return (
      <Translation locales='en'>
        <div>
          <Translation locales={['en']} exclude={['en-GB']}>
            <div className='page-hero page-hero--medium page-hero--icon-background u-relative u-size-full'>
              <div className='site-container page-hero__container'>
                <div className='grid u-margin-Vxxl'>
                  <div className='grid__cell u-size-1of2 u-margin-Tm'>
                    <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                      Start taking <br />payments today
                    </h1>
                    <p className='u-text-heading u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                      GoCardless is the quickest and <br />easiest way to take one-off and <br />
                      recurring payments online in <Message pointer='country' />.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <img src='/images/features/overview-video-cover.jpg' className='u-shadow-large'/>
                  </div>
                </div>
              </div>
            </div>
          </Translation>
          <Translation locales='en-GB'>
            <div className='page-hero page-hero--medium page-hero--icon-background u-relative u-size-full'>
              <div className='site-container page-hero__container'>
                <div className='grid u-margin-Vxxl'>
                  <div className='grid__cell u-size-1of2 u-margin-Tm'>
                    <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                      Start taking <br />payments today
                    </h1>
                    <p className='u-text-heading u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                      GoCardless is the quickest and <br />easiest way to take one-off and <br />recurring payments online.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <img src='/images/features/overview-video-cover.jpg' className='u-shadow-large'/>
                  </div>
                </div>
              </div>
            </div>
          </Translation>
          <StickyNav>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#overview' id='track-sticky-nav-overview' className='sticky-nav__link'>
                    Overview
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' id='track-sticky-nav-features' className='sticky-nav__link'>
                    Features
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#partners' id='track-sticky-nav-partners' className='sticky-nav__link'>
                    Partners
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                    Pricing
                  </a>
                </li>
              </ul>
              <IfLocale hasInstantSignup>
                <Href to='signup.path'
                  id='track-sticky-nav-merchants-new'
                  className={
                    'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                    'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                  }>
                  <Message pointer='cta.basic' />
                </Href>
              </IfLocale>
              <Link to='contact_sales' id='track-sticky-nav-contact-sales'
                className={
                  'btn btn--small btn--hollow u-pull-end u-text-transform-none ' +
                  'u-text-light u-text-xxs u-text-no-smoothing u-margin-Rs'
                }>
                <Message pointer='cta.pro' />
              </Link>
            </div>
          </StickyNav>

          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-padding-Vxxl'>
              <div className='grid u-margin-Vl'>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <OnlineManagementYellowIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Save time
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Easy set up and management saves time, and prevents errors & failures
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <SaveMoneyGreenIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Save money
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Less than half the cost of Paypal, with fair, easy-to-understand pricing
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <CloudRedIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Use with your software
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    GoCardless can be used within over 1,000 leading software providers
                  </p>
                </div>

              </div>
            </div>
          </div>

          <hr className='section-divider' />

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='grid u-padding-Vxl'>
              <div className='grid__cell u-size-1of2'>
                <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                  Easy online management
                </h2>
                <h3 className='u-text-xs u-color-dark-gray'>Get started right away</h3>
                <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                  The whole process happens online. Using our online form, your customers can authorise
                  payments in minutes — even from their mobile phone.
                </p>
                <h3 className='u-text-xs u-color-dark-gray'>Powerful yet simple online dashboard</h3>
                <p className='u-color-dark-gray u-margin-Bm'>
                  Provide a great user experience by adding your logo to our<br />payment forms and
                  automatically sending customers back<br />to your site after paying.
                </p>
                <h3 className='u-text-xs u-color-dark-gray'>Multiple users per account</h3>
                <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                  With Direct Debit, there's no need for customers to worry about missing a payment.
                  Customers are also protected by SEPA Direct Debit Customer Protection.
                </p>
                <h3 className='u-text-xs u-color-dark-gray'>Automatically transfer existing Direct Debits</h3>
                <p className='u-color-dark-gray u-margin-Bm'>
                  Provide a great user experience by adding your logo to our<br />payment forms and
                  automatically sending customers back<br />to your site after paying.
                </p>
              </div>
              <div className='grid__cell u-size-1of2 u-text-center'>
                <img src='/images/features/pro-dashboard-overview.png' />
              </div>
            </div>
          </div>

          <hr className='section-divider' />

          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/features/pro-dashboard-timeline.png' />
                </div>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bm'>
                    Stay on top of your business
                  </h2>
                  <h3 className='u-text-xs u-color-dark-gray'>Balance gives you visibility</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    The whole process happens online. Using our online form, your customers can authorise
                    payments in minutes — even from their mobile phone.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Get notified when something happens</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Provide a great user experience by adding your logo to our<br />payment forms and
                    automatically sending customers back<br />to your site after paying.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Search for your custom data</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    With Direct Debit, there's no need for customers to worry about missing a payment.
                    Customers are also protected by SEPA Direct Debit Customer Protection.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Fully or partially refund any payment</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Provide a great user experience by adding your logo to our<br />payment forms and
                    automatically sending customers back<br />to your site after paying.
                  </p>
                </div>
              </div>
            </div>

            <hr className='section-divider' />

            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                    Flexible payments
                  </h2>
                  <h3 className='u-text-xs u-color-dark-gray'>Set up subscriptions, plans, and one-off payments</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    The whole process happens online. Using our online form, your customers can authorise
                    payments in minutes — even from their mobile phone.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Your customers use fully responsive payment pages</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Provide a great user experience by adding your logo to our<br />payment forms and
                    automatically sending customers back<br />to your site after paying.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Collect from the UK, Eurozone, and Sweden</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    With Direct Debit, there's no need for customers to worry about missing a payment.
                    Customers are also protected by SEPA Direct Debit Customer Protection.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/features/pro-dashboard-overview.png' />
                </div>
              </div>
            </div>

          </div>

          <div className='section-scroll-target' id='partners'>
            <div className='site-container'>
              <div className='quote u-text-center u-background-light-gray'>
                <h2 className='u-text-xl u-text-heading u-text-light u-color-primary u-margin-Bm'>Partner up</h2>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-m u-size-4of5 u-center u-margin-Bxl'>
                  Already using accounting software? We’ve partnered with the best in the business so you can
                  use GoCardless directly from their apps.
                </p>
                <img src='/images/features/accounting-partner-logos.png' className='u-padding-Hxl' />
              </div>
            </div>
          </div>

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='product-grid__container'>

                <div className='product-grid__section product-grid__section--first u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <IntegrateGreenIcon className='svg-icon__image' />
                  </figure>
                  <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                    Integrate with your site
                  </p>
                  <p className='u-color-dark-gray u-padding-Vm'>
                    Stop wasting valuable time trying to set up customers, or chasing clients for payment.
                    Instead, get back to doing what you do best, and let GoCardless take care of the rest.
                  </p>
                  <a href='https://developer.gocardless.com/pro' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                    Learn more
                  </a>
                </div>

                <div className='product-grid__section u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <OwnExperienceYellowIcon className='svg-icon__image' />
                  </figure>
                  <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                    Own the experience
                  </p>
                  <p className='u-color-dark-gray u-padding-Vm'>
                    Stop wasting valuable time trying to set up customers, or chasing clients for payment.
                    Instead, get back to doing what you do best, and let GoCardless take care of the rest.
                  </p>
                  <Link to='pro' id='track-cta-features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                    Learn more
                  </Link>
                </div>

            </div>
          </div>

          <hr className='section-divider' />

          <div className='u-text-center u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  Simple, transparent pricing for everyone
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                  Competitive rates for everyone from individuals through to large corporations
                </p>
                <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                  Learn about our pricing
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Translation>
    );
  }
}
