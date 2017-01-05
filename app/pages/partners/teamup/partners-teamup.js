import React from 'react';

import Page from '../../../components/page/page';

import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersTeamup extends React.Component {
  displayName = 'PartnersTeamup'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bn'>
                    GoCardless<br />
                    for Teamup
                  </h1>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Take payments and manage<br />
                    your members and sessions<br />
                    with GoCardless for Teamup
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='https://support.goteamup.com/hc/en-us/articles/203406632-Enabling-Direct-Debit-Payments-via-GoCardless-For-UK-Businesses-' className='btn u-pull-start'>
                      Get started
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='teamup-partner-page-logo partners-page__teamup-partner-page-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--quickbooks'
                  src='/images/partners/xero-screenshot@2x.png'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='section-scroll-target' id='overview'>
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-margin-Vl'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <AutomatedYellowIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Get paid on time
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Set up memberships and packages. Sell online to customers with automatic payments.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <OnlineManagementRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Reduce admin
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Stop chasing customers for money and get automatic confirmation when payments are collected.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <SaveMoneyGreenIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Low fees
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Free integration. Pay just 1%, capped at £2 per transaction, with no set up costs or hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container'>
          <div className='quote page-hero--icon-background u-text-center'>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm'>
              "Switching to GoCardless cuts out process,<br />
              frees up time, and avoids the need to employ<br />
              a dedicated member of staff."
            </p>
            <p className='u-color-invert u-text-heading u-text-m u-text-semi'>
              Max Henderson
            </p>
            <p className='u-color-invert u-text-heading u-text-xs'>
              Co-Founder, Hotpod Yoga
            </p>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>1</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Connect your account
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                <a href='https://goteamup.com/en-us/' className='u-link-color-p u-text-underline'>Create your teamup account</a> and
                connect it GoCardless through the 'payment settings' screen in your teamup dashboard.
                Teamup will walk you through this with their personal support team.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-1.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>2</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Set up your packages
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Create membership packages and then add them to customers, or direct your customers to your included online portal.
                Teamup can also import your existing GoCardless mandates without customers being affected.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-2.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>3</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Your payments,<br />
                managed automatically
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Once integrated, all your Direct Debit monthly membership payments (as well as one-off payments) will be tracked
                automatically by GoCardless for Teamup. There's no need to check your bank statement to see if someone has paid.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-3.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>4</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Automations to make<br />
                your business run faster
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Track every aspect of your business and manage payments from within Teamup. You can make refunds, charge store purchases
                to a member's direct debit, amend the dates of a payment or change anything you need.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-4.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Sign up today and improve your fitness business
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Our Teamup integration is free - no set up costs, no monthly fees and no hidden charges.
              </p>
              <a href='https://support.goteamup.com/hc/en-us/articles/203406632-Enabling-Direct-Debit-Payments-via-GoCardless-For-UK-Businesses-' className='btn btn--hollow u-margin-Vm'>
                Start using GoCardless for Teamup
              </a>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
