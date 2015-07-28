import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';

import TickIcon from '../../icons/svg/tick';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import CustomerIcon from '../../icons/svg/customer';
import AddPartnerIcon from '../../icons/svg/add-partner';

import PropertyIcon from '../../icons/svg/property';
import CharityIcon from '../../icons/svg/charity';
import BanksIcon from '../../icons/svg/banks';
import ManageSoftwareIcon from '../../icons/svg/manage-software';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import NewIndustryIcon from '../../icons/svg/new-industry';
import WhiteLabelIcon from '../../icons/svg/white-label';
import MembershipIcon from '../../icons/svg/membership';

import Link from '../../components/link/link';
import StickyNav from '../../components/sticky-nav/sticky-nav';

export default class PartnersEn extends React.Component {
  displayName = 'PartnersEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='page-hero page-hero--medium page-hero--partners u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Help your customers get paid</h1>
                <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                  By partnering with GoCardless your customers will be able to accept<br />recurring payments from the UK and abroad
                </p>
              </div>
            </div>
          </div>
        </div>
        <StickyNav>
          <div className='site-container u-padding-Vm'>
            <ul className='u-pull-start u-margin-Txxs'>
              <li className='sticky-nav__item'>
                <a href='#features' id='track-sticky-nav-overview' className='sticky-nav__link'>
                  Features
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                  Pricing
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#examples' id='track-sticky-nav-features' className='sticky-nav__link'>
                  Examples
                </a>
              </li>
            </ul>
            <Link to='contact_sales' query={{ s: 'partners' }}
            id='track-partners-sticky-nav-contact-sales'
            className={
              'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
              'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
            }>
              <Message pointer='cta.pro' />
            </Link>
          </div>
        </StickyNav>
        <div className='section-scroll-target' id='features'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light'>
                Why partner with us?
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-padding-Ts'>
                GoCardless allows you to benefit from the great fees and low failure rates of Direct Debit
                without the hassle associated with traditional providers.
              </p>
              <div className='site-container u-padding-Txxl'>
                <div className='grid u-padding-Txl'>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Grow your customer base
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Attract more new leads and convert more free trials into paying customers.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Reduce churn
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Hold on to more existing customers by getting them more engaged with your product.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Develop new revenue streams
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Refer customers to us and you could earn commision on transaction fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='u-padding-Vxl'>
              <div className='grid__cell u-size-2of3 u-text-center'>
                <img src='/images/partners/partners-map@2x.jpg' />
              </div>
              <div className='grid__cell u-size-1of3 u-text-center partners-page__global-text'>
                <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing'>
                  Global reach
                </h2>
                <p className='u-size-4of5 u-center u-color-p u-margin-Vxs'>
                  Your customers will be able to take payments from an ever growing number of countries,
                  without having to do any extra work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='pricing'>
          <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
            <div className='u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Your customers pay just 1%
                </h2>
                <p className='u-text-s u-color-p u-margin-Vxs'>
                  No sign-up costs or hidden fees. Just 1% per transaction, capped at £2.
                </p>
                <Link to='contact_sales'
                query={{ s: 'partners' }}
                id='track-partners-find-out-more'
                className='btn btn--hollow u-margin-Ts'>
                  Find out more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='examples'>
          <div className='u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-center u-padding-Bxxl u-margin-Bxl'>
                Industries already using GoCardless
              </h2>
              <div className='grid__cell u-size-1of2 partners-page__accountancy-text'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                  Accountancy
                </h2>
                <p className='u-text-s u-color-p u-margin-Bm'>
                  KashFlow integrated with GoCardless to empower their users to take payments
                  quickly and easily from within their KashFlow account.
                </p>
                <div className="">
                  <p className='u-text-s u-text-italic u-margin-Bxs partners-page__quote'>
                    “GoCardless users stick for longer and get more value out of their subscription.”
                  </p>
                  <p className='u-text-s u-margin-Bs u-color-p'>Duane Jackson, Founder</p>
                  <img src='/images/partners/kashflow-logo@2x.png' className='partners-page__partner-logo' />
                </div>
              </div>
              <div className='grid__cell u-size-1of2 partners-page__illustration'>
                <img src='/images/partners/oauth-illustration@2x.png'
                className='partners-page__browser-image'/>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 partners-page__illustration u-text-start'>
              <img src='/images/partners/take-payment-illustration@2x.png'
              className='partners-page__browser-image'/>
            </div>
            <div className='grid__cell u-size-1of2 partners-page__clubs-text'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                Clubs &amp; membership
              </h2>
              <p className='u-text-s u-color-p u-margin-Bm'>
                TeamUp partnered with GoCardless to help gyms and clubs across the country set-up
                and manage recurring payments from their members.
              </p>
              <div className="">
                <p className='u-text-s u-text-light u-text-italic u-margin-Bxs partners-page__quote'>
                  “Our customers appreciate GoCardless's ease of use, and as a partner they've been
                  pivotal in driving our growth in the UK and increasingly in Europe.”
                </p>
                <p className='u-text-s u-margin-Bs u-color-p'>Matt Pegler, Co-Founder</p>
                <img src='/images/partners/teamup-logo@2x.png' className='partners-page__partner-logo' />
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l  u-padding-Bxl'>
                You'll be in good company
              </h2>
              <img src='/images/partners/partner-logos@2x.png' className='partners-page__partner-logo-group' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-padding-Bxl'>
              More industries that can partner with GoCardless
            </h2>
            <div className='grid integrations-grid'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <PropertyIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <PropertyIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Property &amp; shared spaces
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Enable your agents, landlords and workspace providers to collect rent.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <ManageSoftwareIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-blue' />
                    <ManageSoftwareIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Business Management
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Help your customers grow by offering payments within your product.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <CharityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-yellow' />
                    <CharityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Charities
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Enable charities to collect donations by Direct Debit.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <BanksIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-yellow' />
                    <BanksIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Banks &amp; building societies
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Refer your customers to us or use our white label service.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Payment service providers
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Use us to offer Direct Debit in the UK, Europe and beyond.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <NewIndustryIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-blue' />
                    <NewIndustryIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    And lots more&hellip;
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    GoCardless can help a wide range of industries across the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='options'>
          <div className='u-padding-Vxxl u-text-center'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light'>
                What kind of partner are you?
              </h2>
              <div className='grid integrations-grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Affiliate programme
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Earn commission when you refer new customers to GoCardless.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    App integration
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Make it easy for your customers to collect recurring payments.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    White label partnerships
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Take full control of payments using our white label integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Start your partnership today
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                If you think that your business can benefit from partnering with GoCardless,
                <br />please get in touch – we’ll be happy to help.
              </p>
              <Link to='contact_sales'
              query={{ s: 'partners' }}
              id='track-partners-contact-sales'
              className='btn btn--hollow u-margin-Ts'>
                <Message pointer='cta.pro' />
              </Link>
            </div>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-p'><strong>Want to talk to someone first?</strong><br />
              Call our payments experts on&thinsp;
              <Message pointer='phone_local' /><br />
              We&#39;re available 9am - 6pm Monday to Friday
            </p>
          </div>
        </div>
      </Translation>
    );
  }
}
