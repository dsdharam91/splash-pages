import React from 'react';
import classNames from 'classnames';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import { getMessage } from '../../components/intl/intl';

export default class PricingEn extends React.Component {
  displayName = 'PricingEn'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const hasPercentagePricing = getMessage(this.context.messages, 'country_properties.has_percentage_pricing');

    const localScheme = getMessage(this.context.messages, 'country_properties.local_scheme');

    console.log(111, localScheme);
    return (
      <Translation locales='en'>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing'>
          <div className='site-container'>
            <div className={classNames('grid pricing-options pricing-options--new u-center u-padding-Bxl', {
              'pricing-options--three-tiers': localScheme === 'sepa' && hasPercentagePricing,
            })}>

              <h1 className='u-text-heading u-text-light u-text-center u-color-dark-gray u-margin-Vl'>
                The perfect plan for you
              </h1>

              <Translation locales='en' exclude={['en-IE']}>
                <IfLocale hasPercentagePricing>
                  <div className={classNames('grid__cell u-padding-Vxl u-padding-Rxs', { 'u-size-1of2': hasPercentagePricing })}>
                    <div className='u-shadow-large'>
                      <div className='u-relative u-background-primary u-padding-Vxl'>
                        <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Standard</h2>
                        <p className='u-color-invert u-text-xs u-text-center'>Perfect for small to medium sized businesses</p>
                      </div>

                      <div className='u-padding-Am u-text-center u-background-white'>
                        <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Instant online set-up and approval
                          </li>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Online dashboard
                          </li>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Multiple users per account
                          </li>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> REST API
                          </li>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Migrate existing Direct Debit customers
                          </li>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Secure payment pages with your logo
                          </li>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Collect details online
                          </li>
                        </ul>
                        <hr />
                        <div className='u-padding-Vs'>
                          <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                            <Message pointer='pricing.per_transaction_amount_normal' />
                          </h2>
                          <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                            Per transaction, capped at <Message pointer="pricing.cost_cap" />
                          </p>
                        </div>
                        <IfLocale hasInstantSignup>
                          <Href to='signup.path' className='btn u-size-full'>Sign up today</Href>
                        </IfLocale>
                        <IfLocale hasInstantSignup={false}>
                          <Link to='contact_sales' query={{ s: 'pricing' }} className='btn u-size-full'>Contact sales</Link>
                        </IfLocale>
                      </div>
                    </div>
                  </div>
                </IfLocale>

                <div className={classNames('grid__cell u-padding-Vxl u-padding-Rxs', { 'u-size-1of2': hasPercentagePricing })}>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>For organisations that want total control</p>
                    </div>
                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Standard, plus:
                      </p>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label payment pages
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label customer bank statements
                        </li>
                        <IfLocale domesticScheme={['bacs','sepa']}>
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Collect details by phone and paper
                          </li>
                        </IfLocale>
                        <IfLocale domesticScheme='bg-autogiro'>
                          {/* Unlike Bacs and SEPA Direct Debit, Autogiro doesn't have phone Direct Debit */}
                          <li className='u-margin-Bxs'>
                            <span className='u-color-accent'>&#10004;</span> Collect details with paper forms
                          </li>
                        </IfLocale>
                      </ul>
                      <hr />
                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          <Message pointer='pricing.pro_cost_per_transaction' />
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Per transaction, plus <Message pointer='pricing.pro_monthly_fee' /> a month
                        </p>
                      </div>
                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contact sales</Link>
                    </div>
                  </div>
                </div>
              </Translation>

              {/* PRICING TIERS FOR IRELAND */ }
              <Translation locales='en-IE'>
                <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Rxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-primary u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Standard</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Perfect for small to medium sized businesses</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Instant online set-up and approval
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Online dashboard
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Multiple users per account
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> REST API
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Migrate existing Direct Debit customers
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Secure payment pages with your logo
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details online
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Set up subscription plans
                        </li>
                      </ul>
                      <hr />
                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          <Message pointer='pricing.per_transaction_amount_normal' />
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Per transaction, capped at <Message pointer="pricing.cost_cap" />
                        </p>
                      </div>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>Sign up today</Href>
                      </IfLocale>
                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn u-size-full'>Contact sales</Link>
                      </IfLocale>
                    </div>
                  </div>
                </div>

                <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>For fast-growing organisations wanting more control</p>
                    </div>
                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Standard, plus:
                      </p>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label payment pages and emails
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label customer bank statements
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details by phone and paper
                        </li>
                      </ul>
                      <hr />
                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          0,10 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Per transaction, plus 100 € a month
                        </p>
                      </div>
                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contact sales</Link>
                    </div>
                  </div>
                </div>

                <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-xdark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Enterprise</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>For international companies with large teams</p>
                    </div>
                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Pro, plus:
                      </p>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Add and manage multiples entities and regions
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Dedicated training and integration support
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Dedicated customer success
                        </li>
                      </ul>
                      <hr />
                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          0,01 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Per transaction, plus 250 € a month
                        </p>
                      </div>
                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contact sales</Link>
                    </div>
                  </div>
                </div>
              </Translation>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-dark-gray'>About our pricing</h2>
          </div>
          <div className='grid pricing-options--new u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>
                  Are there any other fees?
                </b>
              </div>
              <p className='u-color-dark-gray'>
                <IfLocale hasPercentagePricing>
                  No, there are no other fees except from those listed in the table above.
                  We never charge for set up, implementation, chargebacks or payment failures.<br />
                  With GoCardless, all you ever pay is <Message pointer='pricing.per_transaction_amount_normal' /> of the transaction
                  amount, up to a maximum of <Message pointer="pricing.cost_cap" />.<br />
                  With GoCardless Pro and Enterprise, we charge you a monthly fee and a fee per successful transaction based on your monthly volumes.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  No, we only charge you a monthly fee and a fee for each successful transaction.
                  We never charge for chargebacks or payment failures.
                </IfLocale>
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Do you offer discounts for large volume?</b>
              </div>
              <p className='u-color-dark-gray'>
                <IfLocale hasPercentagePricing>
                  Yes. Our transaction fees are based on your volume of payments per month.
                  To find out more, please <Link to='contact_sales' className='u-link-color-p u-text-underline'>contact sales</Link>.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  Yes. Discounts for high volume are built into the pricing of GoCardless Pro,
                  and scale pricing is available on request for users of regular GoCardless that take over 250 payments per month.
                  To find out more, please <Link to='contact_sales' className='u-link-color-p u-text-underline'>contact sales</Link>.
                </IfLocale>
              </p>
            </div>
            <IfLocale hasPercentagePricing>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>What does ‘capped at <Message pointer="pricing.cost_cap" />’ mean?</b>
                </div>
                <p className='u-color-dark-gray'>
                  You'll never pay more than <Message pointer="pricing.cost_cap" /> per transaction
                  even if the transaction value is greater than <Message pointer='pricing.normal_capped_at_amount' />.
                </p>
              </div>
            </IfLocale>
            <IfLocale hasPercentagePricing={false}>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>Are there any implementation costs?</b>
                </div>
                <p className='u-color-dark-gray'>
                  No, you won't pay to implement GoCardless and our support is free.
                </p>
              </div>
            </IfLocale>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Will I still be charged if a payment fails?</b>
              </div>
              <p className='u-color-dark-gray'>
                No. We only take fees for successful payments.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>Got any questions?</h2>
            <p className='u-color-dark-gray u-margin-Ts'>Speak with one of our payments experts on <Message pointer='phone_local' /></p>
            <IfLocale hasInstantSignup>
              <Href to='signup.path' className='btn btn--hollow u-margin-Tm'>Start taking payments</Href>
            </IfLocale>
            <IfLocale hasInstantSignup={false}>
              <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Contact sales</Link>
            </IfLocale>
          </div>
        </div>
      </Translation>
    );
  }
}
