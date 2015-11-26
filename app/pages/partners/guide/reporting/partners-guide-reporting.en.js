import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class PartnersGuideGettingPaidEn extends React.Component {
  displayName = 'PartnersGuideGettingPaidEn'

  render() {
    return (
      <Translation locales='en'>
        <h2>Reporting</h2>

        <h3>Can I display payment information in my application?</h3>

        <p>
          Yes - GoCardless provides webhooks to notify of any changes in the status of mandates and payments.
          One extremely useful example is determining when a bill has been paid. Our API has a useful
          guide for reconciling payments with
          events <a href='https://developer.gocardless.com/pro/#events-reconciling-payouts-with-events' target='_blank'> here</a>.
          You can find out more about available webhooks and how to use them in
          our <a href='https://developer.gocardless.com/pro/#webhooks-overview' target='_blank'>webhook guide</a>.
        </p>

        <h3>Can we pass you a reference to appear on the bank statement or for our reconciliation purposes?</h3>

        <p>
          Yes - these references are customisable, e.g. you can specify a reference for all the payments
          related to a mandate, or for specific payments. This reference will appear on the customers’ bank
          statement. Additional references (metadata) can also be applied for reconciliation purposes.
        </p>

        <p>
          Note that the mandate reference must be unique for a given Service User Number.
          Given this, if you are using the GoCardless SUN, we will auto-populate the mandate reference.
        </p>
      </Translation>
    );
  }
}
