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
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import ClockIcon from '../../icons/svg/clock';

export default class Telcos extends React.Component {
  displayName = 'Telcos'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Direct Debit for a Connected World
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              GoCardless is a simpler & smarter way for telecom companies to collect payments from customers.
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
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Automate your billing
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Reduce the time spent on your bill runs with automated payment collections.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Real-time alerts
                </h3>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Receive immediate notifications about failed or cancelled payments. Increase insight and reduce churn.
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
                  Turn payments into a competitive advantage. Connect Direct Debit to your billing and accounting systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center'>
            <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
              GoCardless powers Direct Debit payments for over <Message pointer='number_of_merchants' /> merchants
            </h2>
            <div className='grid__cell u-size-2of3 u-link-clean u-padding-Vm u-padding-Hn'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' className='connexin-logo stories-item__logo--connexin'></i>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txxs'>
                  "GoCardless helped us improve both the speed and accuracy of our bill run without any of the complexity of traditional
                  providers. We can easily see who’s paid, and it automatically notifies us when payments fail."
                </p>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txxs'>
                  Alex Yeung, Co-Founder of Connexin
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center'>
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
                Automate your billing
              </h2>
              <h3 className='u-text-s'>Improve customer onboarding</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Enable customers to set up their Direct Debit via a simple online form. Embed the link on your
                website or in customer emails.
              </p>
              <h3 className='u-text-s'>Single payment collection</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Once the customer has set up their Direct Debit, your one-off or recurring payments are collected automatically.
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
                Real-time alerts
              </h2>
              <h3 className='u-text-s'>Increase insight</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Provisioning teams can view real-time reports on customer payment status prior to confirming orders.
              </p>
              <h3 className='u-text-s'>Reduce churn</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Instantly engage with your customers after failed or cancelled payments.
              </p>
              <h3 className='u-text-s'>Limit fraud</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Immediate notifications on customer chargebacks ensuring quick and effective management.
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
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/pro/payment.jpg' className='u-padding-Rl' />
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
              <h3 className='u-text-s'>Reduce billing errors</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Integrate into your billing system to reduce manual admin, payment errors and failures with automatic
                reconciliation of payments against bills. 
              </p>
              <h3 className='u-text-s'>Improved cashflow</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Receive daily payouts from GoCardless to ensure customer payments are kept up-to-date.
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
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple migration
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  It's quick and easy to move all of your existing customers over to GoCardless.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Clean, modern API
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Our API ensures integrating your systems with GoCardless is as painless as possible.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparent pricing
                </h3>
                <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                  Fees from 1p-60p per transaction. No set up costs, hidden charges or minimum commitments.</p>
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
