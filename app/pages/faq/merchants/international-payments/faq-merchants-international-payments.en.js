import React from 'react';
import Translation from '../../../../components/translation/translation';
import IfLocale from '../../../../components/if-locale/if-locale';
import Message from '../../../../components/message/message';

export default class FaqMerchantsInternationalPayments extends React.Component {
  displayName = 'FaqMerchantsInternationalPayments'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>International payments</h2>
        <IfLocale domesticScheme='bacs'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Can only UK businesses use GoCardless?
          </h3>
          <p className='para'>
            No. You just need to have a GBP bank account so we can pay you. You do not need to be a UK registered business or individual.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            When can I collect from Europe?
          </h3>
          <p className='para'>
            With GoCardless, any merchant registered in the U.K. or Ireland can collect from the Single Europe Payments
            Area. You will need to have a Euro account open in the UK or a Eurozone country.
          </p>
          <p className='para'>
            If you take more than 500 payments a month and want to use our Pro solution, you can be registered anywhere in the world.
          </p>
        </IfLocale>
        <IfLocale domesticScheme='sepa'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            In which countries is GoCardless available?
          </h3>
          <p className='para'>
            GoCardless is available in the UK, Ireland, France and Belgium. GoCardless Pro is available in all countries respecting
            anti-money laundering regulations. You need a bank account in the Eurozone or the UK.
          </p>
        </IfLocale>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Where in Europe can I collect from?
        </h3>
        <p className='para'>
          You can collect from the following countries: Austria, Belgium, Cyprus, Estonia, Finland, France, Germany,
          Greece, Ireland, Italy, Latvia, Luxembourg, Malta, Monaco, the Netherlands, Portugal, San Marino, Slovakia,
          Slovenia and Spain.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          What is SEPA Direct Debit?
        </h3>
        <p className='para'>
          SEPA Direct Debit is a new payments scheme which allows you to collect from any bank account in
          the <a href='https://gocardless.com/guides/sepa/what-is-sepa/' target='_blank'
          className='u-link-color-p u-text-underline'>Single Euro Payments Area (SEPA)</a>.
        </p>
        <p className='para'>
          Read more about it in our guide to <a href='/guides/sepa/introduction/'
          className='u-link-color-p u-text-underline'>the SEPA Direct Debit scheme</a>.
        </p>

        { /* Bacs is only an international scheme for SEPA countries */ }
        <IfLocale domesticScheme='sepa'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            What is Bacs Direct Debit?
          </h3>
          <p className='para'>
            Bacs Direct Debit is the equivalent of SEPA in the United Kingdom and is managed by&nbsp;
            <a href='http://www.bacs.co.uk/Bacs/Businesses/DirectDebit/Pages/DirectDebit.aspx' target='_blank'
            className='u-link-color-p u-text-underline'>Bacs</a>.
          </p>
          <p className='para'>
            Read more about it in our guide to <a href='/direct-debit/'
            className='u-link-color-p u-text-underline'>the Bacs Direct Debit scheme</a>.
          </p>
        </IfLocale>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Which currencies does GoCardless support?
        </h3>
        <p className='para'>
          We support payments in GBP and EUR.
        </p>

        <Translation locales='en-IE'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Will international payments cost the same as in <Message pointer='country' />?
          </h3>
          <p className='para'>
            In Eurozone countries, we charge 1% per transaction, capped at €2. In the UK, we charge 1% per transaction (capped at £2).
          </p>
        </Translation>
        <Translation locales='en-GB'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Will international payments cost the same as in the UK?
          </h3>
          <p className='para'>
            International payments will cost 1% per transaction (capped at €2).
          </p>
        </Translation>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          When will GoCardless be available outside Europe?
        </h3>
        <p className='para'>
          GoCardless will not be available outside Europe in 2015. We are working very hard to expand
          to more countries soon.
        </p>
      </Translation>
    );
  }
}
