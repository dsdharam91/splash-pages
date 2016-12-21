import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsInternationalPaymentsEn extends React.Component {
  displayName = 'FaqMerchantsInternationalPaymentsEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>International payments</h2>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Where does my business need to be based?
        </h3>
        <p className='para'>
          As of September 2016, businesses can sign up to collect payments through GoCardless if they are based in any of
          the following countries:
        </p>
        <ul className='list'>
          <li>Austria</li>
          <li>Belgium</li>
          <li>Finland</li>
          <li>France</li>
          <li>Germany</li>
          <li>Ireland</li>
          <li>Luxembourg</li>
          <li>Netherlands</li>
          <li>Spain</li>
          <li>Sweden</li>
          <li>United Kingdom</li>
        </ul>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Which currencies does GoCardless support?
        </h3>
        <p className='para'>
          We currently support payments in GBP, EUR and SEK.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Where can my customers be based?
        </h3>
        <p className='para'>
          You can collect Direct Debit payments from the following countries: Austria, Belgium, Cyprus, Estonia, Finland, France,
          Germany, Greece, Ireland, Italy, Latvia, Luxembourg, Malta, Monaco, the Netherlands, Portugal, San Marino, Slovakia,
          Slovenia, Spain, Sweden and the United Kingdom.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          What is Bacs Direct Debit?
        </h3>
        <p className='para'>
          Bacs Direct Debit allows you to collect GBP-denominated payments from a bank account in the United Kingdom. You can
          read more about it in <a href='/direct-debit/' className='u-link-color-p u-text-underline'>our guide to Bacs Direct Debit</a>.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          What is SEPA Direct Debit?
        </h3>
        <p className='para'>
          SEPA Direct Debit allows you to collect Euro-denominated payments from a bank account in
          the <a href='https://gocardless.com/guides/sepa/what-is-sepa/' target='_blank'
          className='u-link-color-p u-text-underline'>Single Euro Payments Area (SEPA)</a>.
          You can read more about it in <a href='/guides/sepa/introduction/'
          className='u-link-color-p u-text-underline'>our guide to SEPA Direct Debit</a>.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          What is Bg Autogiro?
        </h3>
        <p className='para'>
          Bg Autogiro allows you to collect kronor-denominated payments from a bank account in Sweden. You can read more
          about it in <a href='/guides/bg-autogiro/' className='u-link-color-p u-text-underline'>our guide to Bg Autogiro</a>.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          When will GoCardless be available outside Europe?
        </h3>
        <p className='para'>
          We are working hard to expand our service to more countries soon. You can currently register your interest in
          taking payments from the following countries:
        </p>
        <ul className='list'>
          <li><a href='https://gocardless.com/en-au/' className='u-link-color-p u-text-underline'>Australia</a></li>
          <li><a href='https://gocardless.com/pt-br/' className='u-link-color-p u-text-underline'>Brazil</a></li>
          <li><a href='https://gocardless.com/en-ca/' className='u-link-color-p u-text-underline'>Canada</a></li>
          <li><a href='https://gocardless.com/en-nz/' className='u-link-color-p u-text-underline'>New Zealand</a></li>
          <li><a href='https://gocardless.com/en-us/' className='u-link-color-p u-text-underline'>United States</a></li>
        </ul>
      </Translation>
    );
  }
}
