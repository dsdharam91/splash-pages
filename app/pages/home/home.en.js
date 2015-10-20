import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import TickSquareIcon from '../../icons/svg/tick-square';
import ProIcon from '../../icons/svg/pro';
import ShopIcon from '../../icons/svg/shop';
import IntegrationsIcon from '../../icons/svg/integrations';
import UsersIcon from '../../icons/svg/users';

export default class HomeEn extends React.Component {
  displayName = 'HomeEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Our global payments network has processed over $1 billion
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
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

              <IfLocale domesticScheme='sepa'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    UK &amp; Eurozone
                  </div>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Accept payments with Bacs Direct Debit, SEPA Direct Debit and Swedish Autogiro
                  </p>
                </div>
              </IfLocale>

              <IfLocale domesticScheme='bacs'>
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
              </IfLocale>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  12,000+ merchants
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Powering payments for companies across the UK and Europe
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='site-container u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                You'll be in great company
              </h2>
            </div>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
            </div>
          </div>
        </div>
        <Translation locales={['en-GB','en-IE']}>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Tl'>
              What are you looking for?
            </h2>
            <div className='product-grid grid u-margin-Vxxl'>
              <Link to='features' id='track-cta-features' className='u-link-clean u-text-center grid__cell u-size-1of3'>
                <div className='product-grid__container u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <ShopIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <ShopIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Super simple<br />online payments
                  </p>
                </div>
                <div className='product-grid__btn btn u-size-full'>Discover GoCardless</div>
              </Link>
              <Link to='pro' id='track-cta-pro' className='u-link-clean u-text-center grid__cell u-size-1of3'>
                <div className='product-grid__container u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <ProIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Complete control<br />over Direct Debit
                  </p>
                </div>
                <div className='product-grid__btn btn u-size-full'>Discover GoCardless Pro</div>
              </Link>
              <Link to='partners' id='track-cta-partners' className='u-link-clean u-text-center grid__cell u-size-1of3'>
                <div className='product-grid__container u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <IntegrationsIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <IntegrationsIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <p className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Help your customers<br />collect payments
                  </p>
                </div>
                <div className='product-grid__btn btn u-size-full'>Discover our partners</div>
              </Link>
            </div>
          </div>
        </Translation>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Simple, transparent pricing for everyone
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Competitive rates for everyone from individuals through to large corporations
              </p>
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                Learn about our pricing
              </Link>
            </div>
          </div>
        </div>
        <IfLocale hasInstantSignup>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' id='track-cta-sign-up' className='btn'>Start taking payments</Href>
              <p className='u-color-p u-margin-Ts'>No set up costs, no hidden charges, no commitments</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
