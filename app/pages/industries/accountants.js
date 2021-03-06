import React from 'react';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import IntegrationsIcon from '../../icons/svg/integrations';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import CustomerIcon from '../../icons/svg/customer';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import StoryBigQuote from '../stories/story-big-quote';
import CheckListIcon from '../../icons/svg/checklist';
import UsersIcon from '../../icons/svg/users';
import MoneyFlowerIcon from '../../icons/svg/money-flower';

export default class Accountants extends React.Component {
  displayName = 'Accountants'

  static propTypes = {
    routeName: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              GoCardless transforms cashflow for { (this.props.routeName == 'bookkeepers' ? 'bookkeepers' : 'accountants') }
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Reduce late payments and admin overhead for your practice and your clients.
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Txxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <IntegrationsIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <IntegrationsIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Your invoices, paid automatically
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  GoCardless integrates seamlessly with your choice of accounting software. Transactions are pulled straight into your
                  accounts, reducing time spent on admin.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Improve your finances
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Make it easy for clients to pay their monthly fees by Direct Debit. No more chasing late payments or time spent on bad
                  debt. GoCardless is a positive boost for your cash flow.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  A solution for your clients
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Direct Debit is a powerful tool for helping clients reduce their own late payments.
                  With GoCardless, your clients reduce debtor days and improve their underlying cash flow.
                </p>
              </div>
            </div>
            <div className='u-padding-Tm u-margin-Tm u-text-center'>
              <Href to='signup.path' className='btn u-padding-Hl'>Sign up now</Href>
              <Link to='small_medium_businesses' className='btn u-padding-Hl btn--hollow u-margin-Lm'>Find out more</Link>
            </div>
          </div>
        </div>

        <div className='u-padding-Txxl'>
          <StoryBigQuote heroClass='story-hero--bluesky' image='/images/testimonials/bluesky__avatar.png'
            person='Emma Mills' position='Bluesky Business' readfullStoryLink='stories_bluesky_business'>
            Our cashflow and business have been transformed since we started using GoCardless.
            Within a month our average debtor days had halved and 70% of our customers were paying on time.
            We’re wasting less time chasing payments, and can really focus on growing our business
          </StoryBigQuote>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2'>
              <img src='/images/features/pro-dashboard-timeline.png' className='u-padding-Rm' />
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
                Your invoices, paid automatically
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>A better client experience</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Give clients the option to pay you quickly and automatically through Direct Debit.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Connected to your cloud system</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                GoCardless integrates with online accounting and business systems including Xero, QuickBooks, Sage, Kashflow,
                FreeAgent and others.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>More efficient financial management</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Transactions are pulled straight into your accounts so you can spend less time dealing with financial admin and more
                time working with your clients.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
                Transform your firm’s finances
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Automate your cash collection</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Collect fees straight from your client’s bank accounts using Direct Debit.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Reduce your debtor chasing time</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Take control of your payments, with no need to chase outstanding debts.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Improve your firm’s cash flow</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                See the positive impact on your cash-flow situation with predictable client revenue.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/why-dd/slide-3.png' className='auddis-page-illustration u-margin-Txxl u-padding-Ts' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center u-padding-Rxxl'>
              <img src='/images/why-dd/slide-1.png' className='auddis-page-illustration u-margin-Ts'/>
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
                A solution for your clients
              </h2>
              <h3 className='u-text-s u-color-dark-gray'>Move clients to Direct Debit</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Help resolve your clients’ late payment problems by getting them paid on time, every time.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>Streamline their credit control</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Remove the need for time-consuming financial admin and credit control processes.
              </p>
              <h3 className='u-text-s u-color-dark-gray'>A boost to their cash forecasts</h3>
              <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                Help clients to get a stable and predictable flow of cash into their business.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-color-dark-gray u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              The smarter way to manage your firm's payment collections
            </h2>
            <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-color-dark-gray u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple sign-up
                </h3>
                <p className='u-color-dark-gray u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Clients can securely authorise your payments in minutes, protected by military-grade encryption.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-color-dark-gray u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Flexible payments
                </h3>
                <p className='u-color-dark-gray u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Vary the date, frequency and amount of payments based on your business and client requirements.
                 </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-color-dark-gray u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparent pricing
                </h3>
                <p className='u-color-dark-gray u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Pay just 1% of each transaction, capped at £2. No set up costs, hidden charges or commitments.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              Our accountancy software integrations include
            </h2>
            <div className='u-margin-Tm u-padding-Tl u-size-5of6 u-center'>
              <img src='/images/accountants/accounting-group@2x.png' alt='Xero, Directli, Sage, Kashflow, IRIS and FreeAgent' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center u-center'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              It takes just 2 minutes to set up an account
            </h2>
            <Href to='signup.path' className='btn'>Start taking payments</Href>
            <p className='u-color-dark-gray u-margin-Ts'>There are no set up costs, no monthly fees and no hidden charges</p>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-dark-gray'><strong>Want to talk to someone first?</strong><br />
              Call our payments experts on <Message pointer='phone_local' /><br />
              We're available 9am - 6pm Monday to Friday<br />
              You can also <Link to='contact_sales' className='u-link-color-p u-text-underline'>request a call back from our team</Link>.
            </p>
          </div>
        </div>
      </Page>
    );
  }
}
