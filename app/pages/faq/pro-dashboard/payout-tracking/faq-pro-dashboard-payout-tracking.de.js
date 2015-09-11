import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPayoutTrackingDe extends React.Component {
  displayName = 'FaqProDashboardPayoutTrackingDe'

  render() {
    return (
       <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Überblick über Ihre Zahlungseingänge</h2>
        <p className='para'>
          GoCardless zahlt eingezogene Lastschriften an jedem Werktag automatisch auf Ihr Bankkonto ein.
          Es gibt weder einen Mindestbetrag für diese Auszahlungen noch behalten wir Beträge ein.
          Unsere <Link to='pricing' className='u-link-color-p u-text-underline'>Gebühren</Link> werden automatisch
          vom Auszahlungsbetrag abgezogen.
        </p>
        <p className='para'>
         Im Bereich <a href='https://manage.gocardless.com/payouts' target='_blank'
         className='u-link-color-p u-text-underline'>Payouts</a> können Sie Ihre Zahlungseingänge verfolgen.
        </p>

        <img src='/images/faq/en/payout.png' />

        <p className='para'>
          Für jede solche Auszahlung geben wir eine Referenz an, die auch auf Ihrem Kontoauszug aufgeführt wird (hier: W-ZFQSSPNDR689DW).
        </p>
        <p className='para'>
          Unter “Payout Breakdown” können Sie alle einzelnen Zahlungen sehen, die Teil einer Auszahlung sind.
          Dies ermöglicht Ihnen, die Zahlungen in der Buchführung abzustimmen.
        </p>

      </Translation>
    );
  }
}
