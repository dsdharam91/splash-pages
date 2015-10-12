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

export default class HomeNl extends React.Component {
  displayName = 'HomeNl'

  render() {
    return (
      <Translation locales='nl'>
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

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  UK &amp; Eurozone
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Accept payments with Bacs Direct Debit and SEPA Direct Debit
                </p>
              </div>

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
