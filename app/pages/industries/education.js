import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ProspectForm from '../../components/prospect-form/prospect-form';
import CustomerIcon from '../../icons/svg/customer';
import ClockIcon from '../../icons/svg/clock';
import MoneyFlowerIcon from '../../icons/svg/money-flower';

export default class Education extends React.Component {
  displayName = 'Education'

  render() {
    return (
      <Page>
        <div className='page-hero page-hero--education u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              A simpler way for parents to pay
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Join the hundreds of schools and nurseries who use GoCardless to collect payments.
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automated payments
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Avoid those awkward conversations about money with automated collections by GoCardless.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Preferred by parents
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  GoCardless makes it easy for parents to sign up and pay on a schedule that suits them.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ultra-low fees
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Pay just 1% capped at £2 with no hidden charges. Less than half the price of PayPal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              GoCardless powers Direct Debit payments for over <Message pointer='number_of_merchants' /> organisations
            </h2>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless provided a low cost solution that felt like an automation of what we were already doing."
                </p>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  Mark McDermott, Spencer Hockey Club
                </p>
              </div>
            </div>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  “Within a month our average debtor days had halved and 70% of our customers were paying on time.”
                </p>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  Emma Mills, Bluesky Business
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center u-margin-Tl'>
              <img src='/images/logos/education-logos@2x.png' className='u-size-9of10' />
            </div>
          </div>
        </div>

       <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              Easy. Effortless. Instant.
            </h2>
            <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                  Really simple set-up
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Create an account and start taking payments in only two minutes.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                  Connected to your systems
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  GoCardless integrates with leading education &amp; accountancy software.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                  Easy to manage and use
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  The intuitive GoCardless dashboard makes it easy to see who's paid.
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
