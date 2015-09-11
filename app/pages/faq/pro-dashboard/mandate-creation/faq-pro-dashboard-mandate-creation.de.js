import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateCreationDe extends React.Component {
  displayName = 'FaqProDashboardMandateCreationDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>So werden Lastschriftmandate erstellt</h2>
        <p className='para'>
          Sie müssen Ihre Kunden nicht selbst in Ihr Dashboard übertragen, denn sobald diese unser
          Online-Mandat ausgefüllt haben, werden sie automatisch angezeigt.
        </p>
        <p className='para'>
          Im Bereich <a href='https://manage.gocardless.com/customers' target='_blank'
          className='u-link-color-p u-text-underline'>Customers</a> finden Sie einen Link, den Sie an all Ihre Kunden senden können
          (falls Sie schriftliche Mandate verwenden möchten, wenden Sie sich bitte an uns).
        </p>
        <p className='para'>
          Wenn einige Ihrer Kunden Sie bereits per Lastschrift bezahlen, kontaktieren Sie uns und wir übertragen sie in Ihr Dashboard.
          Melden Sie sich ebenfalls bei uns, wenn Sie sich Mandate schriftlich oder per Telefon einholen möchten.
        </p>

        <img src='/images/faq/en/create-customer.png' />

        <p className='para'>
          Über diesen Link können Ihre Kunden ihre Bankdaten sicher übermitteln (in der Sprache ihrer Wahl).
          Anschließend sind Sie dazu berechtigt, Lastschriften direkt von deren Bankkonto einzuziehen.
        </p>

        <img src='/images/faq/de/sepa-mandate-page.png' />

        <p className='para'>
          Die Liste mit all Ihren Kunden wird im <a href='https://manage.gocardless.com/customers' target='_blank'
          className='u-link-color-p u-text-underline'>selben Bereich</a> Ihres Dashboards angezeigt.
          Sie können diese Liste auch als Excel-Tabelle speichern.
        </p>

      </Translation>
    );
  }
}
