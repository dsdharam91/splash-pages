import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import Href from '../../../../components/href/href';

export default class FaqMerchantsReferrals extends React.Component {
  displayName = 'FaqMerchantsReferrals'

  render() {
    return (
      <FaqMerchantsPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Referral scheme</h2>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Does GoCardless have a referral scheme?
        </h3>
        <p className='para'>
          Our referral scheme is currently unavailable. We’re in the process of reviewing it and aim to launch a new scheme in the
          near future.
        </p>
        <p className='para'>
          If you’re interested in other partnership opportunities with GoCardless, please contact our team by
          emailing <Href to='partners_email' className='u-link-color-p u-text-underline' itemProp='email' />.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What happened to the old referral scheme?
        </h3>
        <p className='para'>
          Our previous referral scheme was closed on February 29th, 2016. All sign-ups made on or after this date no longer qualify
          for the referral incentive.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          I’ve referred a friend to GoCardless. What happens to my GoCardless credit?
        </h3>
        <p className='para'>
          Our old referral scheme is now closed and payouts from that referral scheme will stop from the 30th June 2016.
          Instead we will be offering all those businesses who have outstanding credits from the referral scheme a rebate of transaction
          fees for all transactions processed by GoCardless from 1st July 2016 until the 30th November 2016, subject to fair use
          (and other detail as set out in the T&Cs). All eligible businesses will receive an email to confirm that they will receive a
          one-off credit of the cumulative transaction fee amount by the 16th December 2016 - please note this will be processed
          automatically and paid out to the bank account we hold on file for you on the payment date.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          I’ve joined GoCardless through a referral link. What happens to my fee rebate?
        </h3>
        <p className='para'>
          If you signed up through a friend’s referral link before February 29th 2016 and still have outstanding credits owed, you will
          also be eligible for a rebate of transactions fees for all transactions processed by GoCardless from 1st July 2016 until
          the 30th November 2016, subject to fair use (and other detail as set out in the T&Cs). All eligible businesses will receive an
          email to confirm that they will receive a one off credit of the cumulative transaction fee amount by the 16th December 2016 -
          please note this will be processed automatically and paid out to the bank account we hold on file for you on the payment date.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What happens to my old referral links?
        </h3>
        <p className='para'>
          Our previous referral scheme was closed on February 29th, 2016. Anyone signing up through a referral link from this programme
          after this date will see a message on the sign-up page stating the scheme is no longer available.
        </p>

        <p className='para'>&nbsp;</p>

        <h2 className='u-text-heading-light u-text-m u-color-dark-gray' id='ts-and-cs'>Terms and conditions</h2>

        <p className='para'>
          These terms and conditions are between GoCardless Ltd (“GoCardless”) and you, the supplier or “Merchant”, as referred to in the
          online Merchant Agreement set out here https://gocardless.com/legal/merchants/, or the relevant paper contract entered into
          between us.
        </p>

        <p className='para'>
          On 29th February 2016, GoCardless closed its referral scheme. You have been identified as a Merchant that had credit outstanding
          in relation to that scheme. While GoCardless is not obliged to provide you with payment in respect of that outstanding credit,
          GoCardless wishes to provide a rebate for the transaction fees charged to you for transactions processed during the period
          beginning on 1 July 2016 and ending on 30 November 2016, now that the referral scheme has ceased. The following terms apply
          to that reduction in fees:
        </p>

        <p className='para'>
          GoCardless will, for the GoCardless account to which the notification email you have received relates, credit your account with
          the value of the transaction fees for transactions processed through that GoCardless account from (and including)
          1st July 2016 to 30th November 2016. The rebate will be up to a maximum amount of £1,500 which we consider to be a fair cap on
          this offer. Your GoCardless account will be credited with this amount no later than Friday 16th December. Payment will be made
          to the bank account we hold on file in relation to that same GoCardless account on that date. You will remain liable for all
          other fees, charges, chargebacks etc. as set out in our agreement with you, as referred to above. This includes any fixed
          monthly fee that you may be paying now or agree to pay in the future. All other terms in the agreement between us remain in
          force, and we may not pay out the rebate to you if you are otherwise in breach of that agreement.
        </p>

        <p className='para'>
          No cash alternative or other offer is available.
        </p>

        <p className='para'>
          If you do not wish to benefit from this offer, please contact us
          at <a href='mailto:help@gocardless.com'
            className='u-link-color-p u-text-underline'>help@gocardless.com</a>.
        </p>
      </FaqMerchantsPage>
    );
  }
}
