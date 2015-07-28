import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateExportEn extends React.Component {
  displayName = 'FaqProDashboardMandateExportEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Mandate export</h2>
        <p className='para'>
          You can export your mandates as PDF, for example if you wish to send them to your customers.
        </p>
        <p className='para'>
          Select the customer whose mandate you wish to export, then click on their mandate:
        </p>

        <img src='/images/faq/en/mandate-id.png' />

        <p className='para'>
          You can save the mandate in PDF format by selecting the "Export" button in the top right options:
        </p>

        <img src='/images/faq/en/mandate-export-buttons.png' />

        <p className='para'>
          You can also select the language of the mandate, if your customer doesn't speak English for example:
        </p>

        <img src='/images/faq/en/mandate-export.png' />

        <p className='para'>
          <strong>Note</strong>: in case you struggle downloading the mandate, we recommend trying with the
          Chrome browser.
        </p>

      </Translation>
    );
  }
}
