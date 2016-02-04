import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateExportEn extends React.Component {
  displayName = 'FaqProDashboardMandateExportEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Mandate export</h2>
        <p className='para'>
          From the customers screen, you can also export Direct Debit mandates in PDF format. This could come in useful if you wanted
          to send a copy of the mandate to your customers.
        </p>
        <p className='para'>
          To export a mandate as a PDF, start by choosing the customer to whom the mandate belongs to. You should then select
          the relevant mandate under the 'Mandates' sub-heading:
        </p>

        <img src='/images/faq/en/mandate-id.png' />

        <p className='para'>
          Here, you'll be given an 'Export' option in the top-right corner of the screen:
        </p>

        <img src='/images/faq/en/mandate-export-buttons.png' />

        <p className='para'>
          For SEPA Direct Debit mandates, you'll be able to choose the language of the mandate:
        </p>

        <img src='/images/faq/en/mandate-export.png' />

        <p className='para'>
          <strong>Note</strong>: in case you struggle with downloading the mandate, we recommend trying with the
          Chrome web browser.
        </p>

      </Translation>
    );
  }
}
