import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ProspectForm from '../../components/prospect-form/prospect-form';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import UsersIcon from '../../icons/svg/users';
import AddPartnerIcon from '../../icons/svg/add-partner';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import WhiteLabelIcon from '../../icons/svg/white-label';
import CustomerIcon from '../../icons/svg/customer';

export default class SaaS extends React.Component {
  displayName = 'SaaS'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              The smarter way to collect subscription payments
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              GoCardless improves payment success rate reducing churn and increasing LTV.
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Reduce customer churn
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  With bank-to-bank payments, reduce churn by eliminating card expiry and cancellation.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Superior payment capabilities
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Our cutting edge Direct Debit technology increases automation, reducing payment errors and churn.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Connected to your business
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Integrated with the major subscription platforms, or build your own integration using our API.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              GoCardless powers Direct Debit payments for over <Message pointer='number_of_merchants' /> merchants
            </h2>
            <div className='grid__cell u-size-2of3 u-link-clean u-padding-Vm u-padding-Hn'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <i role='img' className='box-logo stories-item__logo--box'></i>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txxs'>
                  "Box launched GoCardless in Europe to 10x collections from<br />
                  our subscription customers by bringing the cash in the door<br />
                  faster and at a lower cost than traditional payment methods."
                </p>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txxs'>
                  Stefanie Layne<br />
                  Treasurer, Box
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center u-margin-Tl'>
              <img src='/images/logos/pro-logos@2x.png' className='u-size-2of3' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Txxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/partners/pay-via-mobile-illustration@2x.png' className='partners-page__mobile-image'/>
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
                Reduce customer churn
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Improve customer retention &amp; LTV</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                With bank-to-bank payments, your business can significantly reduce customer churn from expired and cancelled credit cards.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Failure handling</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Receive immediate notification about cancelled mandates and failed payments via e-mail and API. Easily take
                actions such as retrying the payment.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Reduce billing errors</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Integrate into your billing system to reduce manual admin with automatic reconciliation of payments against bills.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-margin-Tl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Superior payment capabilities
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Increased conversion rate</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Direct Debit is the preferred payment method for customers paying for subscription services<sup>*</sup>.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Account validation</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Automated submissions and built-in bank account validation help to prevent costly billing errors.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Multi-territory</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Collect money from customers across the UK, the Eurozone and Sweden, with more territories coming soon.
              </p>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm u-text-xxxs'>
                <sup>*</sup> Based on a YouGov poll of 2,044 GB adults.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/products/real-time-reports.jpg' className='basic-page__real-time-reports-image' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of2 u-text-center u-padding-Rl'>
              <img src='/images/features/pro-dashboard-timeline.png' />
            </div>
            <div className='grid__cell u-size-1of2 u-margin-Ts'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Tl'>
                Connected to your business
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Integrates with your subscription platform</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                GoCardless is already integrated with major subscription platforms including Zuora.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Simple, modern API</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Our modern REST API ensures integrating your systems with GoCardless is easy and painless.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Improved cashflow</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Receive daily payouts from GoCardless to ensure customer payments are kept up-to-date.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              A smarter and easier way to take Direct Debit payments
            </h2>
            <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Low, transparent pricing
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Fees from 1p-60p per transaction. No set up costs, hidden charges or minimum commitments.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Completely white-labelled
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  You'll have complete control over your payment pages and your email notifications.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  UK &amp; Eurozone
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Accept payments through Bacs Direct Debit, SEPA Direct Debit and Swedish Autogiro.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center u-center' id='contact-us'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              Want to learn more? Speak with our Direct Debit experts
            </h2>
            <div className='grid__cell u-size-1of2'>
              <ProspectForm prospectType='sales' showNumberOfPayments={false} />
              <hr />
              <p className='u-text-center u-color-meta u-margin-Bs'>
                <b><Message pointer='contact_sales.talk_to_us' /></b><br />
                <Message pointer='contact_sales.call_us' /> <Message pointer='phone_local' />
              </p>
              <hr />
              <p className='u-text-center u-color-meta u-margin-Bs'>
                <b><Message pointer='contact_sales.information1' /></b><br />
                <Message pointer='contact_sales.information2' />
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
