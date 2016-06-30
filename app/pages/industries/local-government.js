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

export default class LocalGovernment extends React.Component {
  displayName = 'LocalGovernment'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Direct Debit for the Digital Age
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              GoCardless is a simpler and smarter way for local authorities to collect payments
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
                  Increase revenue
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Improve collection rates by offering a simple online setup form and more flexible payment options.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Reduce admin
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Transform the self-serve experience and reduce payment errors with our cutting-edge technology.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple set up
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Our modern API makes it quick and simple to set up and transfer your existing mandates.
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
            <div className='grid__cell u-size-2of3 u-link-clean u-padding-Rxs u-padding-Vm u-center'>
              <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                <i role='img' className='south-kesteven-logo stories-item__logo--south-kesteven'></i>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless helped us to set up an online Direct Debit solution in a matter of weeks. The API was really easy to work
                  with and it saved us having to invest in a bespoke solution that would have taken a number of months to introduce."
                </p>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txs'>
                  "We’ve seen around 60% of our customers chose to pay by Direct Debit
                  so next year, they won’t have to spend time renewing their subscription as it’ll all be taken care of for them."
                </p>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txs'>
                  Lee Sirdifield, Strategic Lead<br />Programme Delivery, South Kesteven District Council
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center u-margin-Tl'>
              <img src='/images/local-authorities/local-authority-logos@2x.png' className='u-size-2of3' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/local-authorities/pay-via-mobile-illustration@2x.png' className='partners-page__mobile-image'/>
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Txl'>
                Increase revenue
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Improve Direct Debit usage</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Increase the number of customers using Direct Debit for council tax and business rates with an online and mobile-friendly
                payment experience.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Increase renewal rates</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Retain more customers paying for new services such as waste collection, parking permits and housing rent.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Offer flexible payments</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Support the most vulnerable users of council services by allowing them to pay on the date, frequency and number of
                instalments that suits them.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
                Reduce admin
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Online self-service</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Transform your self-serve options by offering customers a simple way to set up Direct Debit online, with no
                paperwork required.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Automatic billing</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Automatic validation of bank details and submission of mandates and payments, with clear reporting for simple
                reconciliation.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Consolidate your payment processing</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Allow customers to pay for multiple council services by signing just one Direct Debit mandate. Your payments are processed
                through a single dedicated SUN (Bacs Service User Number).
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
              <img src='/images/features/pro-dashboard-overview.png' />
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
                Simple to set up
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Quick to get started</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Our developer-friendly, modern RESTful API makes it simple to set up and integrate with your existing systems.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Transfer existing mandates</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                It's easy to move your existing Direct Debit mandates across to GoCardless with nothing required from your customers.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Connected to your systems</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Integrate GoCardless with your billing, CRM and accounting systems.
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
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automatic notifications
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Receive real-time alerts on failed payments and cancelled mandates so you can take action immediately.
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
                  Join <Message pointer='number_of_merchants' />+ organisations
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  We collect more than <Message pointer='payments_processed_volume' /> per year for
                  over <Message pointer='number_of_merchants' /> businesses and organisations across the UK.
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
