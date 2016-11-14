import React from 'react';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import ProspectForm from '../../../components/prospect-form/prospect-form';

import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersZuora extends React.Component {
  displayName = 'PartnersZuora'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bm'>
                    GoCardless for Zuora
                  </h1>
                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless works with Zuora<br />
                    powering Direct Debit payments<br />
                    for the Subscription Economy
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='#contact-sales' className='btn u-pull-start'>
                      Contact Sales
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='zuora-logo partners-page__zuora-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--zuora'
                  src='/images/partners/zuora-screenshot@2x.png'/>
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
                  Reduce customer churn
                </div>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txs'>
                  Increase lifetime value with significantly lower failure rates compared to credit cards.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <OnlineManagementRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparent pricing
                </div>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txs'>
                  Competitive, scalable, transaction-based pricing. No additional fees for set-up, failures or chargebacks.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <SaveMoneyGreenIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Payments across Europe
                </div>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txs'>
                  Collect Direct Debit payments across the UK, Eurozone and Sweden via Bacs, SEPA and Autogiro.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container'>
          <div className='quote page-hero--icon-background u-text-center'>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm'>
              "Box launched GoCardless in Europe to 10x<br />collections from
              our subscription customers<br />by bringing the cash in the door
              faster and at a lower cost than traditional payment methods."
            </p>
            <p className='u-color-invert u-text-heading u-text-m u-text-semi'>
              Stefanie Layne
            </p>
            <p className='u-color-invert u-text-heading u-text-xs'>
              Treasurer, Box
            </p>
          </div>
          <div className='u-text-center u-padding-Vs u-center u-margin-Vl'>
            <img src='/images/partners/zuora-logos.png' className='u-size-2of3' />
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>1</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Set up the GoCardless payment gateway in Zuora
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Get started in minutes by configuring the GoCardless gateway in Zuora.
                All you need is your access token (available from the developers section of your GoCardless account dashboard).
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/zuora-instruction-1.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>2</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Configure Zuora hosted payment pages, or design your own
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Use Zuora’s fully compliant hosted payment pages that work across UK and Europe, or design your
                own customised payment pages.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/zuora-instruction-2.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>3</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Set up customers with a Direct Debit mandate
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Set up mandates automatically online. Alternatively, you can manually set up mandates over the phone or via paper
                form all within Zuora.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/zuora-instruction-3.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>4</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Process payments
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Outstanding invoices can be collected automatically against the customer’s Direct Debit mandate.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/zuora-instruction-4.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>5</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Manage exceptions with retries and refunds
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Retry failed payments and configure your retry rules in the Z-Payments settings. You can also refund full or
                partial amounts for a previously collected Direct Debit payment.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/zuora-instruction-5.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center u-text-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l' id='contact-sales'>
                Connect today, take payments right away
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Our Zuora integration is free - no set up costs, hidden charges or minimum contract.
              </p>
              <div className='grid__cell u-size-3of4 u-margin-Vs'>
                <ProspectForm prospectType='sales' showNumberOfPayments={false} />
                <hr />
                <p className='u-text-center u-color-dark-gray u-margin-Bs'>
                  <b><Message pointer='contact_sales.talk_to_us' /></b><br />
                  <Message pointer='contact_sales.call_us' /> <Message pointer='phone_local' />
                </p>
                <hr />
                <p className='u-text-center u-color-dark-gray u-margin-Bs'>
                  <b><Message pointer='contact_sales.information1' /></b><br />
                  <Message pointer='contact_sales.information2' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
