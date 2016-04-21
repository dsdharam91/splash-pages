import React from 'react';
import Translation from '../../../../components/translation/translation';
import IfLocale from '../../../../components/if-locale/if-locale';
import Message from '../../../../components/message/message';

export default class FaqMerchantsInternationalPayments extends React.Component {
  displayName = 'FaqMerchantsInternationalPayments'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>International payments</h2>
        <IfLocale domesticScheme='bacs'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Can only UK businesses use GoCardless?
          </h3>
          <p className='para'>
            No. You just need to have a GBP bank account so we can pay you. You do not need to be a UK registered business or individual.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            When can I collect from Europe?
          </h3>
          <p className='para'>
            With GoCardless, any merchant registered in the U.K. or Ireland can collect from the Single Europe Payments
            Area. You will need to have a Euro-denominated bank account open in the UK or a Eurozone country.
          </p>
          <p className='para'>
            If you take more than 500 payments a month and want to use our Pro solution, you can be registered anywhere in the world.
          </p>
        </IfLocale>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Where in Europe can I collect from?
        </h3>
        <p className='para'>
          You can collect Direct Debit payments from the following countries: Austria, Belgium, Cyprus, Estonia, Finland, France,
          Germany, Greece, Ireland, Italy, Latvia, Luxembourg, Malta, Monaco, the Netherlands, Portugal, San Marino, Slovakia,
          Slovenia, Spain, Sweden and the United Kingdom.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Which currencies does GoCardless support?
        </h3>
        <p className='para'>
          We support payments in GBP, EUR and SEK.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          What is SEPA Direct Debit?
        </h3>
        <p className='para'>
          SEPA Direct Debit allows you to collect Euro-denominated payments from a bank account in
          the <a href='https://gocardless.com/guides/sepa/what-is-sepa/' target='_blank'
          className='u-link-color-p u-text-underline'>Single Euro Payments Area (SEPA)</a>.
          You can read more about it in <a href='/guides/sepa/introduction/'
          className='u-link-color-p u-text-underline'>our guide to SEPA Direct Debit</a>.
        </p>

        { /* Bacs is only an international scheme for SEPA countries */ }
        <IfLocale domesticScheme={['sepa','bg-autogiro']}>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            What is Bacs Direct Debit?
          </h3>
          <p className='para'>
            Bacs Direct Debit is the UK equivalent of SEPA Direct Debit. It allows you to collect GBP-denominated payments from bank
            accounts in the United Kingdom. You can read more about it in <a href='/direct-debit/'
            className='u-link-color-p u-text-underline'>our guide to Bacs Direct Debit</a>.
          </p>
        </IfLocale>

        <IfLocale domesticScheme={['bacs','sepa']}>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            What is Bg Autogiro?
          </h3>
          <p className='para'>
            Bg Autogiro allows you to collect kronor-denominated payments from a bank account in Sweden.
            You can read more about it in <a href='/guides/bg-autogiro/'
            className='u-link-color-p u-text-underline'>our guide to Bg Autogiro</a>.
          </p>
        </IfLocale>

        <Translation locales='en-IE'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Will international payments cost the same as in <Message pointer='country' />?
          </h3>
          <p className='para'>
            In Eurozone countries, we charge 1% per transaction, capped at €2. In the UK, we charge 1% per transaction (capped at £2).
            In Sweden, we charge 1% per transaction (capped at 20kr).
          </p>
        </Translation>
        <Translation locales='en-GB'>
          <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Will international payments cost the same as in the UK?
          </h3>
          <p className='para'>
            International payments will cost 1% per transaction (capped at €2 in the Eurozone and 20kr in Sweden).
          </p>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          When will GoCardless be available outside Europe?
        </h3>
        <p className='para'>
          We're working hard to expand our service to more countries soon.
        </p>
      </Translation>
    );
  }
}
