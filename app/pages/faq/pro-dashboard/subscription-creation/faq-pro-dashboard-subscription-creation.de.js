import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardSubscriptionCreationDe extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>So erstellen Sie Abonnements</h2>
        <p className='para'>
          Ein Abonnement ermöglicht Ihnen, wiederkehrende Zahlungen mit gleichbleibendem Betrag einzuziehen.
          So müssen Sie nicht jede Woche oder jeden Monat dieselbe Zahlung erstellen.
        </p>
        <p className='para'>
          Nachdem Sie Ihren Kunden erstellt haben, können Sie den Zeitpunkt der regelmäßigen automatischen Buchung bestimmen.
          Dazu wählen Sie im Bereich <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>Customers</a> den Kunden aus,
          dessen Konto belastet werden soll.
        </p>
        <ul className='list'>
          <li>
            <strong>Wenn Sie Zahlungen einziehen, die in Betrag oder Häufigkeit variieren,</strong> erstellen Sie einzelne
            Zahlungen. Im Bereich <Link to='faq_pro_dashboard_payment_creation' className='u-link-color-p u-text-underline'>
            Zahlungen erstellen</Link> erfahren Sie mehr darüber.
          </li>
          <li>
            <strong>Wenn Sie Zahlungen mit gleichbleibendem Betrag in regelmäßigen Abständen einziehen möchten, </strong>
            erstellen Sie ein Abonnement. Im nächsten Abschnitt erfahren Sie, wie dies funktioniert.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          So erstellen Sie ein Abonnement für einen Kunden
        </h3>


        <p className='para'>
          Wählen Sie einen Kunden aus und klicken Sie auf “Create > Subscription”.
        </p>

        <img src='/images/faq/de/subscription-create-buttons.png' />

        <p className='para'>
          Anschließend können Sie die Details des Abonnements angeben:
        </p>
        <ul className='list'>
          <li>
            Im Feld ‘Name’ können Sie das Abonnement benennen, um später die Zahlungen zuordnen zu können
            (z. B. Bezeichnung eines Plans oder einer Dienstleistung).
          </li>
          <li>
            Geben Sie den Betrag ein (höchstens 5.000 €). Der eingegebene Betrag wird regelmäßig abgebucht.
          </li>
          <li>
            Im Feld „Reference“ können Sie den Verwendungszweck angeben, der später auf dem Kontoauszug Ihres Kunden zu sehen sein
            wird (abhängig von dessen Bank).
          </li>
          <li>
            Legen Sie die Fälligkeit fest: wöchentlich, monatlich, jährlich oder individuell (z. B. vierteljährlich).
          </li>
          <li>
            Geben Sie das Datum der ersten Buchung an.
          </li>
          <li>
            Bestimmen Sie die Laufzeit des Abonnements: bis zur Kündigung, bis zu einem bestimmten Datum oder bis eine bestimmte
            Anzahl an Buchungen erfolgt ist (z. B. 12 Buchungen in Höhe von 100 €).
          </li>
        </ul>

        <img src='/images/faq/de/subscription-create.png' />

      </Translation>
    );
  }
}
