import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import Href from '../../../../components/href/href';

export default class FaqMerchantsReferrals extends React.Component {
  displayName = 'FaqMerchantsReferrals'

  render() {
    return (
      <FaqMerchantsPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Referral scheme</h2>
        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Does GoCardless have a referral scheme?
        </h3>
        <p className='para'>
          Our referral scheme is currently unavailable. We’re in the process of reviewing it and aim to launch a new scheme later
          in the year.
        </p>
        <p className='para'>
          If you’re interested in other partnership opportunities with GoCardless, please contact our team by
          emailing <Href to='partners_email' className='u-link-color-p u-text-underline' itemProp='email' />.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What happened to the old referral scheme?
        </h3>
        <p className='para'>
          Our old referral scheme ceased to function from February 29th, 2016. All sign-ups made on or after this date no longer
          qualify for the referral incentive.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          I’ve referred a friend to GoCardless. What happens to my GoCardless credit?
        </h3>
        <p className='para'>
          If you referred a friend and they signed up before February 29th 2016, you will receive your payout for February, March and April 2016.
          We will be emailing you directly with information on receiving any outstanding rebates post April 2016.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          I’ve joined GoCardless through a referral link. What happens to my fee rebate?
        </h3>
        <p className='para'>
          If you signed up through a friend’s referral link before February 29th 2016, you will receive your payout for February and March 2016.
          We will be emailing you directly with information on receiving any outstanding rebates post March 2016.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What happens to my old referral links?
        </h3>
        <p className='para'>
          Your old GoCardless referral links ceased to function from February 29th, 2016. Anyone signing up through your referral link
          from this date will see a message on the sign-up page stating the scheme is no longer available.
        </p>
      </FaqMerchantsPage>
    );
  }
}
