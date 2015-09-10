import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentCreationDe extends React.Component {
  displayName = 'FaqProDashboardPaymentCreationDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>So erstellen Sie Zahlungen</h2>
        <p className='para'>
         Nachdem Sie einen Kunden erstellt haben, können Sie beginnen, Lastschriften automatisch von dessen
         Bankkonto einzuziehen. Dazu wählen Sie im Bereich <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>Customers</a> den Kunden aus, dessen Konto belastet werden soll.
        </p>
        <ul className='list'>
          <li>
            <strong>Wenn Sie Zahlungen einziehen möchten, die in Betrag oder Häufigkeit variieren,</strong> müssen Sie einzelne
            Zahlungen erstellen. Auf dieser Seite erfahren Sie, wie dies funktioniert.
          </li>
          <li>
            <strong>Wenn Sie Zahlungen mit gleichbleibendem Betrag in regelmäßigen Abständen einziehen möchten, </strong>
            erstellen Sie ein Abonnement. Im Bereich <Link to='faq_pro_dashboard_subscription_creation'
            className='u-link-color-p u-text-underline'>Abonnements erstellen</Link> erfahren Sie mehr darüber.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
         So ziehen Sie Zahlungen von Kunden ein
        </h3>
        <p className='para'>
         Wählen Sie im Bereich <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>Customers</a> einen Kunden aus und klicken Sie auf
          “Create > Payment”.
        </p>

        <img src='/images/faq/de/payment-create-buttons.png' />

        <p className='para'>
          Anschließend können Sie die Details der Lastschrift angeben:
        </p>
        <ul className='list'>
          <li>
            Geben Sie den Betrag ein (höchstens 5.000 €).
          </li>
          <li>
           Im Feld “Description” können Sie den Grund für die Lastschrift eingeben.
          </li>
          <li>
            Im Feld “Reference” können Sie den Verwendungszweck angeben, der später auf dem Kontoauszug Ihres
            Kunden zu sehen sein wird (abhängig von dessen Bank).
          </li>
          <li>
            Sie können den Betrag entweder zum nächstmöglichen Datum abbuchen oder einen Buchungstermin festlegen.
          </li>
        </ul>

        <img src='/images/faq/de/payment-create.png' />

      </Translation>
    );
  }
}
