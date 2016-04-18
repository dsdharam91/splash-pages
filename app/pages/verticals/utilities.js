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

export default class Utilities extends React.Component {
  displayName = 'Utilities'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Direct Debit for the Digital Age
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              GoCardless is a simpler and smarter way to collect payments in the utilities sector.
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
                  Better customer experience
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Transform the self-serve experience and enhance call centre channels to improve customer satisfaction.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Superior payment capabilities
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Reduce your admin and get fewer payment errors with our cutting-edge Direct Debit technology.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Connected to your business
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Turn payments into a competitive advantage by connecting Direct Debit to CRM and billing systems.
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
                <i role='img' className='so-energy-logo stories-item__logo--so-energy'></i>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless allows us to automate our entire customer Direct Debit collection, meaning we only deal with the
                  exceptions. What's more, the integration between Junifer and GoCardless ensures customer records are
                  updated automatically, so we know why a payment has failed and can communicate this back to our customers."
                </p>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  Simon Oscroft, So Energy
                </p>
              </div>
            </div>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <i role='img' className='tempus-energy-logo stories-item__logo--tempus-energy'></i>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless has made our payment process much simpler to manage. It allows us to seamlessly set up and bill our
                  customers by Direct Debit on a recurring basis. Their system is incredibly easy to use meaning our customers are
                  happy and our team spend less time on administration and more time on growing the business."
                </p>
                <p className='u-size-9of10 u-center u-color-dark-gray u-margin-Txxs'>
                  Loic Hares, Tempus Energy
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center u-margin-Tl'>
              <img src='/images/logos/pro-logos@2x.png' className='u-size-2of3' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/partners/pay-via-mobile-illustration@2x.png' className='partners-page__mobile-image'/>
            </div>
            <div className='grid__cell u-size-1of2 u-margin-Tl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Transform the customer experience
              </h2>
              <h3 className='u-text-s'>Self-service</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Enable customers to set up and manage their Direct Debit online via desktop or mobile.
              </p>
              <h3 className='u-text-s'>Customer service</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Provides real-time information on payment status to ensure support can resolve calls as quickly as possible.
              </p>
              <h3 className='u-text-s'>Flexible payments</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Allow your customers to pay on the date and at the frequency that suits them.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-margin-Tl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Superior payment capabilities
              </h2>
              <h3 className='u-text-s'>Reduce admin</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Payment files are automatically submitted to Bacs with reports available in real-time via your dashboard or API.
              </p>
              <h3 className='u-text-s'>Reduce errors</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Our real-time bank account validations and reachability checks significantly reduce mandate failure rates.
              </p>
              <h3 className='u-text-s'>Optimised timings</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                The shorter 3 working day notification period allows flexible payments and ensures smart meter billing
                will be as accurate and timely as possible.
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
            <div className='grid__cell u-size-1of2 u-margin-Tl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Connected to your business
              </h2>
              <h3 className='u-text-s'>Customer service</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                GoCardless integrates with CRM systems to provide actionable account information, enabling faster resolution to
                customer contacts.
              </p>
              <h3 className='u-text-s'>Marketing</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Enables integrated lifecycle campaigns based on payment data and customer behaviour.
              </p>
              <h3 className='u-text-s'>Finance</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Integrates with your billing system to reduce manual admin, payment errors and failures. Automatic
                reconciliation of payments against bills.
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
                  Simple, modern API
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Our modern API ensures integrating your systems with GoCardless is easy and painless.</p>
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
                  Simple migration
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  It's quick and easy to move all of your existing customers over to GoCardless.</p>
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
