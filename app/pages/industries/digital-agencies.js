import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import StoryBigQuote from '../stories/story-big-quote';

export default class DigitalAgencies extends React.Component {
  displayName = 'DigitalAgencies'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              GoCardless transforms cashflow for agencies
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Over a thousand agencies use GoCardless to reduce late payments and admin overhead.
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Txxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Your invoices, paid automatically
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  GoCardless puts you in control and helps you to improve business cash flow. Take payments automatically on invoices when
                  they’re due.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Reduced admin time
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Spend less time chasing late invoices and more time working with clients. Automatically reconcile invoices
                  with Direct Debit payments.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  1% fees, capped at £2
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Pay just 1%, capped at £2 per transaction. It’s cheaper than taking credit card and much easier than cheque and
                  standing order.
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
          <StoryBigQuote heroClass='story-hero--bluesky' person='Claire Love' position='LWS Marketing'>
            In just 4 months we moved 50% of our recurring payments to Direct Debit after we discovered GoCardless. This has had the
            biggest impact on the company I’ve seen in 8 years – boosting cash flow, morale and ease of admin. Average debtor days
            have reduced from 122 days to just 7 days.
          </StoryBigQuote>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              GoCardless makes getting paid easier than ever
            </h2>
            <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>Really simple setup</h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  Create an account and start taking payments in only two minutes.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>Integrates with your software</h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  GoCardless integrates with leading accountancy software packages.</p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                  Join <Message pointer='number_of_merchants' />+ businesses
                </h3>
                <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                  We've collected more than <Message pointer='payments_processed_volume' /> for
                  over <Message pointer='number_of_merchants' /> merchants.</p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              GoCardless is already integrated with your accounting software
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
