import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPayoutTrackingEn extends React.Component {
  displayName = 'FaqProDashboardPayoutTrackingEn'

  render() {
    return (
       <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payout tracking</h2>
        <p className='para'>
          Every day, GoCardless will automatically transfer your collected funds to your bank account. There's no minimum
          threshold required for a payout and we don't hold back any rolling reserve. <Link to='pricing'
          className='u-link-color-p u-text-underline'>Our fees</Link> will be deducted automatically from your payout.
        </p>
        <p className='para'>
          You can follow our payouts in the <a href='https://manage.gocardless.com/payouts'
          target='_blank' className='u-link-color-p u-text-underline'>Payouts section</a> of the dashboard.
        </p>

        <img src='/images/faq/en/payout.png' />

        <p className='para'>
          We indicate the reference that will appear on your bank statement (W-ZFQSSPNDR689DW here).
        </p>
        <p className='para'>
          In the payout breakdown, you can see a list of all individual payments that are part of the payout. This information
          will allow you to reconcile the payments for accounting purposes.
        </p>

      </Translation>
    );
  }
}
