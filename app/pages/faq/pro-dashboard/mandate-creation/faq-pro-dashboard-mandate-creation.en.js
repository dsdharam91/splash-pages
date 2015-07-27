import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateCreationEn extends React.Component {
  displayName = 'FaqProDashboardMandateCreationEn'

  render() {
    return (
      <Translation locales={['en']} exclude={['en-GB']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Mandate creation</h2>
        <p className='para'>
          You don't need to add customers by yourself in the dashboard. They will appear automatically as soon
          as they fill the mandate page. If you already have customers who pay by Direct Debit, please contact us
          to import them.
        </p>

        <p className='para'>
          You can send all your customers a dedicated link which you can find in our <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>
          Customers section</a>. Please contact us if you wish to use paper mandates.
        </p>

        <img src='/images/faq/en/create-customer.png' />

        <p className='para'>
          Using this link, your customers will indicate their bank details securely (in the language of their choice).
          This gives you the authorisation to start collecting from their bank account.
        </p>

        <img src='/images/faq/en/sepa-mandate-page.png' />

        <p className='para'>
          You can view the list of all your customers in the <a href='https://manage.gocardless.com/customers' target='_blank'
          className='u-link-color-p u-text-underline'>same section</a> and can export it to Excel.
        </p>

      </Translation>
    );
  }
}
