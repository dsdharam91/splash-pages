import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class PartnersGuideMandatesEn extends React.Component {
  displayName = 'PartnersGuideMandatesEn'

  render() {
    return (
      <Translation locales='en'>
        <h2>Transferring mandates</h2>

        <h3>Can I migrate existing Direct Debit mandates across to GoCardless?</h3>

        <p>
          Yes - we make transferring Direct Debit mandates simple. For transferring UK Direct Debits,
          read our guide <a href='https://gocardless.com/direct-debit/transferring/' target='_blank'>here</a>; for transferring
          SEPA Direct Debits, read our guide <a href='https://gocardless.com/guides/sepa/transferring-mandates/' target='_blank'>here</a>.
        </p>

        <p>
          For the UK, in most cases there are three key things you need to know:
        </p>

        <ul>
          <li>
            <strong>Your customers don't need to lift a finger.</strong> There's no need for your customers to set up new
            mandates to you, or to "opt in" to the change. All that's required is that they're notified of the transfer.
          </li>

          <li>
            <strong>The process takes around 4 weeks.</strong> From start to finish, it takes around 4 weeks to transfer providers
            for UK mandates and 1 week for SEPA mandates.
          </li>

          <li>
            <strong>You'll need to know your customers' details.</strong> Transferring a mandate requires your customer's address,
            email, name and bank details. If you don't know these your current provider should be able to provide them to you.
          </li>
        </ul>

        <p>
          If you already have your own SUN in the UK and are looking to use the ‘Managed Administration’ option,
          then you don’t need to notify your customers. Get in touch directly
          at <Href to='partners_email' itemProp='email' /> for more details on this process.
        </p>
      </Translation>
    );
  }
}
