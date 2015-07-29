import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateCreationEn extends React.Component {
  displayName = 'FaqProDashboardMandateCreationEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Mandate creation</h2>
        <p className='para'>
          In the <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>Customers section</a> of the dashboard, you can add new
          customers from whom you'll be able to collect Direct Debit payments. To do this, click the 'Add Customer' button.
        </p>
        <p className='para'>
          You'll be given a link to send to your customers (you can add this to your website, to your e-mails and invoices). As soon as
          your customers click the link and fill the mandate form in, they'll appear as a new customer in this section of the dashboard.
        </p>
        <p className='para'>
          If you already have customers who pay by Direct Debit, please contact us to import them. Please also contact us if you
          wish to use telephone or paper mandates.
        </p>

        <img src='/images/faq/en/create-customer.png' />

        <p className='para'>
          When using the payment authorisation link, your customers will enter their bank details securely (in the language of
          their choice). This will give you the authorisation to start collecting money from their bank account.
        </p>

        <img src='/images/faq/en/sepa-mandate-page.png' />

        <p className='para'>
          You can view a list of all your customers in the same section of the dashboard. You can also export a list of your
          customers to a spreadsheet.
        </p>

      </Translation>
    );
  }
}
