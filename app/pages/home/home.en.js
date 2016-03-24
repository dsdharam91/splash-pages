import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Message from '../../components/message/message';

import AutomatedYellowIcon from '../../icons/svg/automated-yellow';
import SaveMoneyGreenIcon from '../../icons/svg/save-money-green';
import LocationGreenIcon from '../../icons/svg/location-green';
import CustomersRedIcon from '../../icons/svg/customers-red';
import SmallBusinessYellowIcon from '../../icons/svg/small-business-yellow';
import EnterpriseGreenIcon from '../../icons/svg/enterprise-green';

export default class HomeEn extends React.Component {
  displayName = 'HomeEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                Our global payments network processes over <Message pointer='payments_processed_volume' /> per year.
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <AutomatedYellowIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Fully automated
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Save time, stop human errors and avoid failed payments
                </p>
              </div>

              <IfLocale domesticScheme='sepa'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <LocationGreenIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    UK &amp; Eurozone
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Accept payments with Bacs Direct Debit, SEPA Direct Debit and Swedish Autogiro
                  </p>
                </div>
              </IfLocale>

               <IfLocale domesticScheme='bg-autogiro'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <LocationGreenIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Sweden, Eurozone &amp; UK
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Accept payments with Swedish Autogiro, SEPA Direct Debit and Bacs Direct Debit
                  </p>
                </div>
              </IfLocale>

              <IfLocale domesticScheme='bacs'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <SaveMoneyGreenIcon className='svg-icon__image' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Ultra-low fees
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Less than half the cost of PayPal, with easy-to-understand pricing
                  </p>
                </div>
              </IfLocale>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CustomersRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  <Message pointer='number_of_merchants' />+ merchants
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  <Translation locales={['en']} exclude={['en-GB']}>
                    Powering payments for companies across Europe
                  </Translation>
                  <Translation locales='en-GB'>
                    Powering payments for companies across the UK and Europe
                  </Translation>
                </p>
              </div>

            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                You'll be in great company
              </h2>
            </div>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-padding-Hxxl u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
            </div>
          </div>
        </div>

        <div className='site-container'>
          <div className='quote page-hero--icon-background u-text-center'>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm'>
              "GoCardless is one of the best payments companies we've worked with.
              I'd highly recommend them to any company that cares about providing a good user experience
              and using the best technology for their Direct Debit."
            </p>
            <img src='/images/logos/funding-circle-logo-white.png' className='u-block u-center u-size-1of4' />
          </div>
        </div>

        <IfLocale hasInstantSignup>
          <hr className='section-divider' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='product-grid__container'>

                <div className='product-grid__section product-grid__section--first u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <SmallBusinessYellowIcon className='svg-icon__image' />
                  </figure>
                  <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                    Small businesses
                  </p>
                  <p className='u-color-dark-gray u-padding-Vm'>
                    Take control of your payments and make sure you get paid on time every time. Improved cashflow, reduced admin and ultra-low fees.
                  </p>
                  <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                    <Message pointer='pricing.per_transaction_amount_normal' /> capped at <Message pointer='pricing.cost_cap' />
                  </p>
                  <Link to='features' id='track-cta-features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                    Learn more
                  </Link>
                </div>

                <div className='product-grid__section u-padding-Vl'>
                  <figure className='svg-icon u-center'>
                    <EnterpriseGreenIcon className='svg-icon__image' />
                  </figure>
                  <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                    Enterprises
                  </p>
                  <p className='u-color-dark-gray u-padding-Vm'>
                    Direct Debit for the digital age. Connected to your business with real-time alerts, increased customer insight and reduced churn.
                  </p>
                  <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                    From <Message pointer='pricing.pro_cost_per_transaction' />
                  </p>
                  <Link to='pro' id='track-cta-features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                    Learn more
                  </Link>
                </div>

            </div>
          </div>
        </IfLocale>

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

        <IfLocale hasInstantSignup>
          <hr className='section-divider' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Sign up in minutes, take payments today
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                No set up costs, no hidden charges, no commitments
              </p>
              <Href to='signup.path' id='track-cta-sign-up' className='btn u-margin-Tm'>Sign up now</Href>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
