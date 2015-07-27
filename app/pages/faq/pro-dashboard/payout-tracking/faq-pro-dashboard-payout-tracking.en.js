import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPayoutTrackingEn extends React.Component {
  displayName = 'FaqProDashboardPayoutTrackingEn'

  render() {
    return (
       <Translation locales={['en']} exclude={['en-GB']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Payout tracking</h2>
        <p className='para'>
          We wire your funds to your bank account automatically, every day. There is no minimal threshold nor
          any rolling reserve. Our fees are automatically deducted from this payout.
        </p>
        <p className='para'>
         You can follow our payouts in our <a href='https://manage.gocardless.com/payouts'
          target='_blank' className='u-link-color-p u-text-underline'>Payouts section</a>.
        </p>

        <img src='/images/faq/en/payout.png' />

        <p className='para'>
          We indicate the reference that will appear on your bank statement (W-ZFQSSPNDR689DW here), as well as the list
          of all individual payments that are part of a payout. This lets you reconciliate these payments for your accounting.
        </p>

      </Translation>
    );
  }
}
