import React from 'react';
import Page from '../../components/page/page';
import Link from '../../components/link/link';
import Message from '../../components/message/message';
import ProspectForm from '../../components/prospect-form/prospect-form';
import CheckListIcon from '../../icons/svg/checklist';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import UsersIcon from '../../icons/svg/users';
import AddPartnerIcon from '../../icons/svg/add-partner';
import CustomerIcon from '../../icons/svg/customer';
import MoneyFlowerIcon from '../../icons/svg/money-flower';

export default class Charities extends React.Component {
  displayName = 'Charities'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              A simpler way to take Direct Debit payments
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Join the hundreds of charities who use GoCardless to collect donations.
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
                  Improved donor experience
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Make it easy for donors to sign up and ensure they remain connected to your core mission.
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
                  Optimise your submissions to reduce error and disruption. A cloud solution that's built to scale.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Stay connected
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Give your team the best tools by connecting Direct Debit to your billing and CRM systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-padding-Bl'>
              GoCardless powers Direct Debit payments for over <Message pointer='number_of_merchants' /> merchants
            </h2>
            <div className='grid__cell u-size-2of3 u-link-clean u-padding-Vm u-padding-Hn'>
              <div className='spotlight-grid__container u-text-center u-padding-Tl u-padding-Bxxl'>
                <i role='img' className='foundation-of-hearts-logo stories-item__logo--foundation-of-hearts'></i>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txxs'>
                  “We chose GoCardless for 3 reasons: it's easy for our team to use, easy for our supporters to use, and the fees
                  are brilliantly low. What's more, the quality of service we've received from the team has been fantastic.”
                </p>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Brian Cormack, Foundation of Hearts
                </p>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  <Link to='stories_foundation_of_hearts' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                    Read the full case study
                  </Link>
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center u-margin-Tl'>
              <img src='/images/logos/charity-logos@2x.png' className='u-size-2of3' />
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
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                An improved donor experience
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Works everywhere</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Allow donors to set up Direct Debit payments by paper, telephone or online form. With online, your donors
                can sign up from both desktop and mobile.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Flexible submissions</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Maximise your donor relationship by billing immediately after sign up or by offering flexible contribution dates.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Self-service</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Allow your donors to upgrade or downgrade their recurring contributions with a single click.
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
              <h3 className='u-text-s u-color-dark-gray'>Failure handling</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Easily retry failed payments and rectify chargebacks with immediate notifications via email and API.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Reduce errors</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Automated submissions and built-in bank account validation help to prevent costly billing errors.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Multi-territory</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Collect from donors across the UK, Eurozone and Sweden, with more territories coming soon.
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
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                Connected to your organisation
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Customer service</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                GoCardless integrates with CRM systems to provide actionable account information, enabling faster resolution to
                customer contacts.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Marketing</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Maximise your donor lifetime value by identifying payment behaviours likely to result in churn.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Finance</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Easily reconcile your contributions with fully documented transfers including all failures and deductions.
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
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple migration
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  It's quick and easy to move all of your existing donors over <br/>to GoCardless.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Suitable for everyone
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Get started quickly with our easy-to-use dashboard or integrate our powerful API into your system.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparent pricing
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Fees from 1p-60p per transaction. No set up costs, hidden charges or minimum commitments.</p>
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
