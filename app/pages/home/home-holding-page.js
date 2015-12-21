import React from 'react';
import MobileIcon from '../../icons/svg/mobile';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import Link from '../../components/link/link';
import Translation from '../../components/translation/translation';
import Logo from '../../icons/logo/logo';
import ProspectForm from '../../components/prospect-form/prospect-form';
import { PropTypes } from '../../helpers/prop-types/prop-types';

export default class HomeHoldingPage extends React.Component {
  displayName = 'HomeHoldingPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div className='site-header-wrapper'>
          <div className='site-header u-relative u-text-center'>
            <Link to='home' id='track-nav-home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className='site-logo__image u-fill-invert' />
            </Link>
          </div>
        </div>

        <div className='page-hero page-hero--holding-page page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  Recurring payments made simple
                </h1>

                <div className={
                  'u-text-heading u-text-center u-color-invert ' +
                  'u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'
                }>
                  GoCardless makes collecting by Direct Debit easy for everyone from individuals to multi-national corporations
                </div>

                <div className='email-capture u-center u-margin-Txl u-size-1of2
                u-padding-Al'>
                  <p className="u-text-xxs u-text-light u-text-heading u-text-center u-center u-size-4of5 u-margin-Bm">
                    To be notified when we launch in your country, enter your email address below
                  </p>

                  <ProspectForm prospectType='holding' />
                </div>
              </div>
            </div>
          </div>

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                  Bringing Direct Debit into the 21st century
                </h2>
              </div>
              <div className='grid u-margin-Tl u-padding-Tm'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Built for online
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Whether it's our simple dashboard or our API, you're in control
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Fully automated
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Save time, stop human errors and avoid failed payments
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Ultra-low fees
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Less than half the cost of Paypal, with easy-to-understand pricing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Txl'>
              <div className='u-size-1of2 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Trusted by thousands of businesses
                </h2>
                <p className='u-text-s u-color-p u-margin-Txs'>
                  We collects millions of pounds for our merchants every day. Whatever your scale, GoCardless works for you.
                </p>
              </div>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                <img src='/images/logos/pro-logos@2x.png' />
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />

          <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Want to learn more about GoCardless?
                </h2>

                <a href='https://gocardless.com/' className='btn u-margin-Tm'>
                  Visit our UK site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
