import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentTrackingDe extends React.Component {
  displayName = 'FaqProDashboardPaymentTrackingDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Überblick über Ihre Zahlungen</h2>

        <p className='para'>
          Sie können den Status Ihrer Lastschriften in zwei Bereichen verfolgen:
        </p>

        <ul className='list'>
          <li>
            <strong>Im Bereich <a href='https://manage.gocardless.com/payments'
            target='_blank' className='u-link-color-p u-text-underline'>Payments</a> des Dashboards:</strong> Hier können Sie
            die Liste aller eingezogenen Zahlungen abrufen. Diese können Sie entweder nach Erstellungsdatum oder aktuellem Status
            sortieren. Ein praktisches Beispiel ist die Ergebnisse nach kürzlich fehlgeschlagenen Lastschriften zu sortieren.
          </li>
          <li>
            <strong>Im Bereich <a href='https://manage.gocardless.com/customers'
            target='_blank' className='u-link-color-p u-text-underline'>Customers</a> des Dashboards:</strong> Hier können
            Sie die Liste der Zahlungen abrufen, die von jedem einzelnen Kunden eingezogen wurden.
          </li>
        </ul>

        <p className='para'>
          Es ist möglich, diese nach Zeitraum oder Status (z. B. kürzlich fehlgeschlagene Lastschriften)
          zu sortieren und die Liste im Excel-Format zu speichern.
        </p>

        <p className='para'>
          So sieht die Historie einer erfolgreichen Lastschrift aus:
        </p>

        <img src='/images/faq/en/payment-success.png' />

        <p className='para'>
         So sieht die Historie einer fehlgeschlagenen Lastschrift aus:
        </p>

        <img src='/images/faq/en/payment-failed.png' />

        <p className='para'>
          Sie können fehlgeschlagene Lastschrifteinzüge durch Klicken auf “Retry” kostenlos erneut ausführen.
          Sie zahlen keine Gebühren für fehlgeschlagene Lastschriften.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

      </Translation>
    );
  }
}
