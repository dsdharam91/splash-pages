import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ProspectForm from '../../components/prospect-form/prospect-form';
import CheckListIcon from '../../icons/svg/checklist';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import UsersIcon from '../../icons/svg/users';
import AddPartnerIcon from '../../icons/svg/add-partner';
import WhiteLabelIcon from '../../icons/svg/white-label';
import CustomerIcon from '../../icons/svg/customer';

export default class Finance extends React.Component {
  displayName = 'Finance'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Transforming the way that the financial services sector collect payments
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              A simpler and smarter way to collect recurring payments from your customers.
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
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Increase revenue
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Improve collection rates and reduce failures with a simple online sign-up form and flexible payment options.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Reduce admin
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Transform the self-service experience and reduce payment errors with our modern technology.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple integration
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Our API makes it easy to integrate payments across your business and react quickly to new data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center u-margin-Bl'>
              GoCardless powers Direct Debit payments for over <Message pointer='number_of_merchants' /> merchants
            </h2>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <i role='img' className='funding-circle-logo stories-item__logo--funding-circle'></i>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless is one of the best payments companies we've worked with. I'd highly recommend them to any company
                  that cares about a providing good user experience and using the best available technology."
                </p>
              </div>
            </div>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <i role='img' className='nutmeg-logo stories-item__logo--nutmeg'></i>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere justo lobortis tincidunt ultricies. Cras nisi
                  ipsum, mattis in dolor eu, fringilla pulvinar nunc. Phasellus efficitur elit vel mauris tempor."
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
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/partners/pay-via-mobile-illustration@2x.png' className='partners-page__mobile-image'/>
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Simplifying the B2B lending experience
              </h2>
              <h3 className='u-text-s'>Increase Direct Debit usage</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Increase the number of customers using Direct Debit to make repayments. Offer an online, mobile-friendly
                payments experience.
              </p>
              <h3 className='u-text-s'>Flexible payments</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Support vulnerable customers by allowing them to pay on the date, frequency and number of instalments that suits them.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-margin-Tl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Optimise the top-up of e-wallets and prepaid cards
              </h2>
              <h3 className='u-text-s'>Online self-service</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Transform your self-serve options with a simple online set up - no paperwork required.
              </p>
              <h3 className='u-text-s'>Automatic billing</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Automatic validation and submission of mandates and payments with clear reporting for simple reconciliation.
              </p>
              <h3 className='u-text-s'>Consolidate your payment processing</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Enable your customers to pay for multiple services using one mandate with a single Service User Number.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/products/real-time-reports.jpg' className='basic-page__real-time-reports-image' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center u-padding-Rl'>
              <img src='/images/features/pro-dashboard-timeline.png' />
            </div>
            <div className='grid__cell u-size-1of2 u-margin-Ts'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Join <Message pointer='number_of_merchants' />+ businesses
              </h2>
              <h3 className='u-text-s'>Quick to get started</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Our developer-friendly REST API makes it simple to set up and integrate with your existing systems.
              </p>
              <h3 className='u-text-s'>Transfer existing mandates</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                It's easy to move your existing Direct Debit mandates across to GoCardless. Nothing is required from your customers.
              </p>
              <h3 className='u-text-s'>Connected to your systems</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Integrate GoCardless with your billing, CRM and accounting systems.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
              A smarter and easier way to take Direct Debit payments
            </h2>
            <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automatic notifications
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Get real-time alerts on failed or cancelled payments.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Completely white-labelled
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Your brand is at the forefront. Have complete control over payment pages and email notifications.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Join <Message pointer='number_of_merchants' />+ businesses
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  We've collected more than <Message pointer='payments_processed_volume' /> for
                  over <Message pointer='number_of_merchants' /> merchants.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center u-center' id='contact-us'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center u-margin-Bl'>
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
