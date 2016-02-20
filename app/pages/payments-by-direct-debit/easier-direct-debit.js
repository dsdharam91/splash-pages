import React from 'react';
import Page from '../../components/page/page';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import UsersIcon from '../../icons/svg/users';

export default class EasierDirectDebit extends React.Component {
  displayName = 'EasierDirectDebit'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              A better way to take Direct Debit payments
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Make the switch to GoCardless and discover an easier &amp; smarter way to collect payments.
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple migration
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  It's quick and easy to move all of your existing customers over to GoCardless.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Online management
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Manage your customers and payments online. Get real-time updates on your payments status.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparent pricing
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Fees from 1p-60p per transaction. No set up costs, hidden charges or minimum commitments.
                </p>
              </div>
            </div>
            <div className='u-padding-Tm u-margin-Tm u-text-center'>
              <a href='#contact-us' className='btn u-padding-Hl'>Speak to our experts</a>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              GoCardless powers online Direct Debit for over <Message pointer='number_of_merchants' /> businesses
            </h2>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' className='greater-anglia-logo stories-item__logo--greater-anglia'></i>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                  "Switching to GoCardless has saved us time and money. GoCardless have taken all of the pain out of setting up and
                  managing Direct Debit. Their system is incredibly simple and their expertise is second to none."
                </p>
              </div>
            </div>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='product-grid__container u-text-center u-padding-Vl'>
                <i role='img' className='funding-circle-logo stories-item__logo--funding-circle'></i>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless is one of the best payments companies we've worked with. I'd highly recommend them to any company
                  that cares about a providing good user experience and using the best available technology."
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center'>
              <img src='/images/logos/pro-logos@2x.png' className='u-size-2of3' />
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
                  Get real-time alerts on failed or cancelled payments.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Collect in £ and €
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Take payments through Bacs Direct Debit &amp; SEPA Direct Debit.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Join <Message pointer='number_of_merchants' />+ businesses
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  We've collected more than <Message pointer='payments_processed_volume' /> for
                  over <Message pointer='number_of_merchants' /> businesses.</p>
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
              <ProspectForm prospectType='sales' />
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
      </Page>
    );
  }
}
