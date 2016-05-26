import React from 'react';

import Page from '../../../components/page/page';

import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersQuickbooks extends React.Component {
  displayName = 'PartnersQuickbooks'

  render() {
    return (
      <Page isInverted={false}>
        { /* This is totally incorrect and we shouldn't be doing this as the meta tag is rendered in <body> not <head>. Just need a
        temporary way to noindex this page from search engines until we launch. Please remove this when page goes live. */ }
        <meta name='robots' content='noindex,follow' />

        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bm'>
                    GoCardless<br/>
                    for QuickBooks
                  </h1>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Get paid on time and<br/>
                    reconcile invoices automatically<br/>
                    with GoCardless for QuickBooks
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='https://appcenter.intuit.com/gocardless?locale=en-GB'
                    id='track-cta-pricing' className='btn u-pull-start'>
                      Get started
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='quickbooks-logo partners-page__quickbooks-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--quickbooks'
                  src='/images/partners/quickbooks-screenshot@2x.png'/>
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
                  Collect payments automatically on your QuickBooks invoices as soon as they’re due.
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

        <hr className='section-divider' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>1</div>

              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Connect your account
              </h2>

              <p className='u-color-dark-gray u-margin-Bm'>
                Get started in minutes by creating a GoCardless account and connecting it to your QuickBooks account.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/quickbooks-instruction-1.jpg' />
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
                Select individual or multiple customers to send a Direct Debit mandate request to. Alternatively, you can import your
                existing GoCardless mandates.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/quickbooks-instruction-2.jpg' />
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
                Each time you create an invoice you can choose to schedule a payment to collect by Direct Debit on the invoice due date.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/quickbooks-instruction-3.jpg' />
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
                Once you’ve received payment, the relevant invoices will be marked as paid and the GoCardless fees will also be posted as an expense automatically.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/quickbooks-instruction-4.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Sign up today, take payments right away
              </h2>

              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Our QuickBooks integration is free - no set up costs,<br/>no monthly fees and no hidden charges
              </p>

              <a href='https://appcenter.intuit.com/gocardless?locale=en-GB'
              to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                Start using QuickBooks
              </a>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
