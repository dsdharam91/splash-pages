import React from 'react';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';

import OnlineManagementYellowIcon from '../../icons/svg/online-management-yellow';
import SaveMoneyGreenIcon from '../../icons/svg/save-money-green';
import ImproveCashflowRedIcon from '../../icons/svg/improve-cashflow-red';
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
                  <div className='grid__cell u-size-1of2 u-margin-Txxl'>
                    <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                      Start taking <br />payments today
                    </h1>
                    <p className='u-text-heading u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                      GoCardless is the quickest and <br />easiest way to take one-off and <br />
                      recurring payments online in <Message pointer='country' />.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <div className="videos-container--features">
                      <iframe src="//player.vimeo.com/video/158055034?api=1&player_id=welcome-video" id="welcome-video" width="100%" height="310" frameBorder={0} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Translation>
          <Translation locales='en-GB'>
            <div className='page-hero page-hero--medium page-hero--icon-background u-relative u-size-full'>
              <div className='site-container page-hero__container'>
                <div className='grid u-margin-Vxxl'>
                  <div className='grid__cell u-size-1of2 u-margin-Txxl'>
                    <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                      Start taking <br />payments today
                    </h1>
                    <p className='u-text-heading u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                      GoCardless is the quickest and <br />easiest way to take one-off and <br />recurring payments online.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <div className="videos-container--features">
                      <iframe src="//player.vimeo.com/video/158055034?api=1&player_id=welcome-video" id="welcome-video" width="100%" height="310" frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
                    </div>
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
                    Automated payment collection means less time on admin, more time on your business
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
                    Less than half the cost of PayPal with easy to understand pricing. 1% capped at £2
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ImproveCashflowRedIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Improve cashflow
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Take control of your payments and make sure you get paid on time every time
                  </p>
                </div>

              </div>
            </div>
          </div>

          <hr className='section-divider' />

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='grid u-padding-Vxl'>
              <div className='grid__cell u-size-1of2 u-padding-Rm'>
                <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                  Easy online management
                </h2>
                <h3 className='u-text-xs u-color-dark-gray'>Simple online set up</h3>
                <p className='u-color-dark-gray u-margin-Bm u-size-5of6'>
                  Using our online form, customers can authorise payments securely in minutes.
                </p>
                <h3 className='u-text-xs u-color-dark-gray'>Automate your payments</h3>
                <p className='u-color-dark-gray u-margin-Bm'>
                  Customers can sign up to a plan or subscription to make recurring payments to your business.
                </p>
                <h3 className='u-text-xs u-color-dark-gray'>Powerful online dashboard</h3>
                <p className='u-color-dark-gray u-margin-Bm'>
                  Keep up-to-date on the status of all your payments with our online dashboard and email notifications.
                </p>
                <h3 className='u-text-xs u-color-dark-gray'>Multiple users per account</h3>
                <p className='u-color-dark-gray u-margin-Bm'>
                  Securely share access with your colleagues.  Control their access rights and permissions.
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
                <div className='grid__cell u-size-1of2 u-padding-Rm'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bm'>
                    Stay on top of your business
                  </h2>
                  <h3 className='u-text-xs u-color-dark-gray'>Connected to your software</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Integrated with accounting software packages allowing automatic reconciliation against your invoices.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Real-time alerts</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Receive immediate notifications about failed or cancelled payments via email and through your online dashboard.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Track payment status</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    View a timeline for each of your payments. Easily retry failed payments or issue partial or full refunds.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Search for your payments and customers</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Our powerful search tool and filters allow you to quickly and easily find specific customers or payment types.
                  </p>
                </div>
              </div>
            </div>

            <hr className='section-divider' />

            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-padding-Rm'>
                  <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                    Take control of your payments
                  </h2>
                  <h3 className='u-text-xs u-color-dark-gray'>Set up subscriptions, plans and one-off payments</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Complete flexibility on how much and how often you charge your customers. Set up either one-off or recurring payments.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Flexible payments</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Choose the date, frequency and amount of your payments based on customer and business requirements.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Secure online payments</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    GoCardless processes over £1bn per year for 14,000 merchants. Authorised by the FCA and Bacs approved.
                  </p>
                  <h3 className='u-text-xs u-color-dark-gray'>Collect from the UK, Eurozone and Sweden</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Accept payments from over 22 countries with Bacs Direct Debit, SEPA Direct Debit and Swedish Autogiro.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/features/pro-dashboard-payment-plans.png' />
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
                <img src='/images/logos/accounting-partners@2x.jpg' className='u-padding-Hxxl' />
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
                    Want to use GoCardless to power payments on your site? Take a look at our REST API in the comprehensive docs.
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
                    Direct Debit for the digital age. Connected to your business with real-time alerts, increased customer insight and reduced churn.
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
