import React from 'react';

import Page from '../../../components/page/page';

import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersXero extends React.Component {
  displayName = 'PartnersXero'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bn'>
                    GoCardless for Xero
                  </h1>
                  <p className='u-text-heading u-color-primary u-text-m u-text-light u-margin-Bm u-text-no-smoothing'>
                    powered by Directli
                  </p>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Get paid on time and reconcile<br />
                    invoices automatically with<br />
                    GoCardless for Xero
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='http://manage.directli.co.uk/signup' className='btn u-pull-start'>
                      Get started
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='xero-connected-app-logo partners-page__xero-logo u-pull-start'/>
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
                  Collect payments automatically for your Xero invoices as soon as they’re due.
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
                  Stop chasing customers and automatically reconcile invoices with payments.
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
              "We strongly advise our Xero clients to use<br />
              GoCardless. It's quick to set up, improves<br />
              cashflow and admin is reduced to almost<br />
              nothing due to the automatic reconciliation."
            </p>
            <p className='u-color-invert u-text-heading u-text-m u-text-semi'>
              Peter Czapp
            </p>
            <p className='u-color-invert u-text-heading u-text-xs'>
              Co-Founder & Director, The Wow Company
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
                Get started in minutes by connecting your GoCardless and Xero accounts to the GoCardless for Xero App.
                Your accountant can also manage your account on your behalf.
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
                Set up your customers
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Automatically send out requests to set up a Direct Debit when you create a customer in Xero. Alternatively,
                manually email requests or import your existing GoCardless mandates and match them up to your Xero customers.
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
                Start collecting payments
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Each time you create an invoice in Xero you can collect the payment automatically by Direct Debit on the invoice due date.
                Alternatively, you can manually collect payments for specific customers or invoices. Collect payments in both
                Pounds and Euros.
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
                Automatically reconcile invoices
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Once you’ve received a payment, the relevant invoice(s) will be marked as paid with the GoCardless fee posted as an
                expense automatically.
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
                Connect today, take payments right away
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Our Xero integration is free - no set up costs, no monthly fees and no hidden charges.
              </p>
              <a href='http://manage.directli.co.uk/signup' className='btn btn--hollow u-margin-Vm'>
                Start using GoCardless for Xero
              </a>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                <strong>Are you an existing Directli customer?</strong> If you currently use Directli, please contact helpdesk@directli.co.uk or call 01522 282103 to get upgraded to GoCardless
                for Xero.
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
