import React from 'react';

import Page from '../../../components/page/page';

import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersKashflow extends React.Component {
  displayName = 'PartnersKashflow'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bm'>
                    GoCardless for<br />
                    KashFlow
                  </h1>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Get paid on time and<br />
                    reconcile invoices automatically<br />
                    with GoCardless for KashFlow
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='https://www.kashflow.com/support/kb/direct-debits-1/' className='btn u-pull-start'>
                      Get started
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='kashflow-app-logo partners-page__kashflow-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--kashflow'
                  src='/images/partners/kashflow-screenshot@2x.png'/>
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
                  Collect payments automatically on your KashFlow invoices as soon as they’re due.
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
              "GoCardless gives us control over when<br />
              we get paid and takes away the uncomfortable<br />conversations about money"
            </p>
            <p className='u-color-invert u-text-heading u-text-m u-text-semi'>
              Steve Leighton
            </p>
            <p className='u-color-invert u-text-heading u-text-xs'>
              Founder, Has Bean Coffee
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
                Get started in minutes by connecting your GoCardless and KashFlow accounts. You can do this from the Payments tab within
                KashFlow by selecting the ‘Bank Payments’ option.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__kashflow-instruction-screenshot'
              src='/images/partners/kashflow-instruction-1.jpg' />
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
                Send out email requests to your customers to set up a Direct Debit mandate. You can do this via the customer
                tab or when you create an invoice in KashFlow.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__kashflow-instruction-screenshot'
              src='/images/partners/kashflow-instruction-2.jpg' />
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
                Each time you create an invoice in KashFlow, you can collect the payment automatically by Direct Debit.
                Alternatively, your customers can also make one-off payments by Direct Debit.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__kashflow-instruction-screenshot'
              src='/images/partners/kashflow-instruction-3.jpg' />
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
              <img className='partners-page__kashflow-instruction-screenshot'
              src='/images/partners/kashflow-instruction-4.jpg' />
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
                Our KashFlow integration is free - no set up costs, no monthly fees and no hidden charges.
              </p>
              <a href='https://www.kashflow.com/support/kb/direct-debits-1/' className='btn btn--hollow u-margin-Vm'>
                Start using GoCardless for KashFlow
              </a>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}