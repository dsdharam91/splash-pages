import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ProspectForm from '../../components/prospect-form/prospect-form';
import CustomerIcon from '../../icons/svg/customer';
import ClockIcon from '../../icons/svg/clock';
import AddPartnerIcon from '../../icons/svg/add-partner';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import UsersIcon from '../../icons/svg/users';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import StoryBigQuote from '../stories/story-big-quote';

export default class EducationDM extends React.Component {
  displayName = 'EducationDM'

  render() {
    return (
      <Page>
        <div className='page-hero page-hero--education-dm u-padding-Bxxl'>
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
                  Reduced admin time
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Spend less time chasing late payments with automated collections via GoCardless.
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

        <StoryBigQuote heroClass='story-hero--education-dm-quote' person='Mark McDermott' position='Spencer Hockey Club' 
          readfullStoryLink='stories_spencer_hockey'>
          Using GoCardless felt like a natural fit for a membership group, and now the black hole in our finances has disappeared
        </StoryBigQuote>

        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              You'll be in good company
            </h2>
            <div className='u-text-center u-padding-Vs u-center u-margin-Tl'>
              <img src='/images/logos/pro-logos@2x.png' className='u-size-9of10' />
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
