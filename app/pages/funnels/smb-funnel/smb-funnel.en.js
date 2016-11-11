import React from 'react';
import Translation from '../../../components/translation/translation';
import Message from '../../../components/message/message';
import Link from '../../../components/link/link';
import ProspectForm from '../../../components/prospect-form/prospect-form';

import TickIcon from '../../../icons/svg/tick';
import OnlineManagementYellowIcon from '../../../icons/svg/online-management-yellow';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import ImproveCashflowRedIcon from '../../../icons/svg/improve-cashflow-red';

export default class SMBFunnelEn extends React.Component {
  displayName = 'SMBFunnelEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='page-hero page-hero--medium'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                  Reduce churn through Direct Debit
                </h1>

                <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
                  Keep customers happy with hassle-free payments
                </p>

                <Link to='contact_sales' id='track-sticky-nav-contact-sales'
                className='btn btn--invert u-margin-Tl'>
                <Message pointer='cta.pro' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='u-padding-Vxxl site-container'>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Direct Debit for the digital age
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    A cutting-edge online Direct Debit solution that's simple to setup, manage and use.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Keep a step ahead of churn
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Real-time notifications of failed or cancelled payments enable swift issue resolution.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Collect payments across Europe
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    We process Direct Debit payments for Bacs, SEPA and Autogiro through a single integration.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Create advanced payment flows
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Re-tries, refunds and subscriptions: automate processes and configure logic around your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='product-grid__container u-padding-Vxxl'>
            <div className='product-grid__section u-text-center product-grid__section--first u-padding-Vl'>
              <img src='/images/funnels/partner-logos.jpg' />

              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                Connect through
                <br/> off-the-shelf integrations
              </p>

              <ul className='list u-margin-Tn u-margin-Bl u-text-start'>
                <li className='list__item u-margin-Tm'>
                  Streamline workflows by connecting Direct Debit to your business.
                </li>

                <li className='list__item u-margin-Tm'>
                  Unlock insights by integrating payments data
                </li>
              </ul>

              <Link to='pro' id='track-cta-features' className='btn btn--small'>
                See all our integrations
              </Link>
            </div>

            <div className='product-grid__section u-text-center u-padding-Vl'>
              <figure className='svg-icon u-center'>
                <TickIcon className='svg-icon__image' />
              </figure>

              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                Create custom integrations with our powerful API
              </p>

              <ul className='list u-margin-Tn u-margin-Bl u-text-start'>
                <li className='list__item u-margin-Tm'>
                  All the tools to build, test and iterate - quickly and easily.
                </li>

                <li className='list__item u-margin-Tm'>
                  Limitless possibilities - you decide how to integrate our API to suit your business.
                </li>
              </ul>

              <Link to='pro' id='track-cta-features' className='btn btn--small'>
                Learn about our API
              </Link>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='u-padding-Vxxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
              Turn payments into a competitive advantage
            </h2>

            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Direct Debit for the digital age
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    A cutting-edge online Direct Debit solution that's simple to setup, manage and use.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Keep a step ahead of churn
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Real-time notifications of failed or cancelled payments enable swift issue resolution.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Collect payments across Europe
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    We process Direct Debit payments for Bacs, SEPA and Autogiro through a single integration.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Create advanced payment flows
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Re-tries, refunds and subscriptions: automate processes and configure logic around your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='u-padding-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                You'll be in great company
              </h2>
            </div>

            <div className='u-text-center u-margin-Vl u-padding-Hxxl u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
            </div>

            <div className='quote page-hero--icon-background'>
              <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm'>
                "GoCardless is one of the best payments companies we've worked with.
                I'd highly recommend them to any company that cares about providing a good user experience
                and using the best technology for their Direct Debit."
              </p>

              <img src='/images/logos/funding-circle-logo-white.png' className='u-block u-center u-size-1of4' />
            </div>

            <Link to='contact_sales' id='track-sticky-nav-contact-sales'
              className='btn u-margin-Txxl'>
              Read more customer stories
            </Link>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-margin-Vxxl'>
          <div className='site-container u-padding-Vxl u-text-center'>
              <figure className='svg-icon u-inline-block'>
                <TickIcon className='svg-icon__image' />
              </figure>

              <div className='u-inline-block u-margin-Lm u-text-start'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                  Create advanced payment flows
                </h3>

                <p className='u-color-dark-gray u-margin-Txs'>
                  Re-tries, refunds and subscriptions: automate processes and configure logic around your needs.
                </p>
              </div>
            </div>
        </div>

        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
              More industries that can partner with GoCardless
            </h2>
            <div className='grid integrations-grid'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-gray u-border-radius u-shadow-small u-padding-Vl u-padding-Hm u-background-white'>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Bxxl'>
                    Guide to chosing the right recurring payment method
                  </h2>
                  <div className='u-margin-Tm'>
                    <Link to='contact_sales' className='btn btn--small u-margin-Rxxs'>Read</Link>
                    <Link to='contact_sales' className='btn btn--small btn--hollow'>Download</Link>
                  </div>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-gray u-border-radius u-shadow-small u-padding-Vl u-padding-Hm u-background-white'>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Bxxl'>
                    Guide to chosing the right recurring payment method
                    </h2>
                    <div className='u-margin-Tm'>
                      <Link to='contact_sales' className='btn btn--small u-margin-Rxxs'>Read</Link>
                      <Link to='contact_sales' className='btn btn--small btn--hollow'>Download</Link>
                    </div>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-gray u-border-radius u-shadow-small u-padding-Vl u-padding-Hm u-background-white'>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Bxxl'>
                    Guide to chosing the right recurring payment method
                  </h2>
                  <div className='u-margin-Tm'>
                    <Link to='contact_sales' className='btn btn--small u-margin-Rxxs'>Read</Link>
                    <Link to='contact_sales' className='btn btn--small btn--hollow'>Download</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='u-padding-Vxxl u-text-center'>
          <div className='site-container u-padding-Vxxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxxl'>
              Our pricing
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image svg-icon--small' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    A cutting-edge online Direct Debit solution that's simple to setup, manage and use.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image svg-icon--small' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Real-time notifications of failed or cancelled payments enable swift issue resolution.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image svg-icon--small' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    We process Direct Debit payments for Bacs, SEPA and Autogiro through a single integration.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon u-pull-start u-inline-block'>
                  <TickIcon className='svg-icon__image svg-icon--small' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <p className='u-color-dark-gray u-margin-Txs'>
                    Re-tries, refunds and subscriptions: automate processes and configure logic around your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container grid grid--center u-margin-Vxl u-padding-Vxl'>
          <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>Want to talk? So do we.</h2>
          <div className='grid__cell u-size-1of2'>
            <ProspectForm prospectType='sales' />
          </div>
        </div>
        <div className='site-container grid grid--center u-margin-Bxl u-padding-Bxl'>
          <p className='u-text-center u-color-dark-gray u-margin-Bs u-text-s'>
            To speak to use immediately call: <Message pointer='phone_local' />
            <Translation locales='en-GB'>
            <br />(<Message pointer='phone_full' /> from outside the UK)
            </Translation>
          </p>
        </div>
      </Translation>
    );
  }
}
