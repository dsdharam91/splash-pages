import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRetryDe extends React.Component {
  displayName = 'FaqProDashboardPaymentRetryDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Wiederholen von Lastschrifteinzügen</h2>
        <p className='para'>
          Wenn eine Lastschrift fehlschlägt, liefern wir Ihnen den Grund sowie eine kurze Beschreibung.
          Es gibt drei Haupttypen fehlgeschlagener Lastschriften:
        </p>
        <ul className='list'>
          <li>
            <strong>Die Lastschrift ist fehlgeschlagen und kann erneut eingezogen werden:</strong> Dies kommt meistens dann vor,
            wenn das Bankkonto Ihres Kunden nicht ausreichend gedeckt oder der Fehler “refer to payer” (Kunde
              kontaktieren) aufgetreten ist.
          </li>
          <li>
            <strong>Die Lastschrift und das Mandat sind fehlgeschlagen:</strong> In diesem Fall müssen Sie sich mit Ihrem Kunden
            in Verbindung setzen, um sich ein neues Mandat einzuholen.
          </li>
          <li>
            <strong>Die Lastschrift wurde vom Kunden widerrufen:</strong> Sie sollten Ihren Kunden kontaktieren,
            um nähere Auskunft darüber zu erhalten.
            Sie sollten erst eine neue Zahlung erstellen, wenn Sie den Widerruf mit Ihrem Kunden geklärt haben.
          </li>
        </ul>

        <p className='para'>
          Wenn es möglich ist, eine Lastschrift erneut einzuziehen, erscheint die Schaltfläche “Retry” oben rechts auf der Seite
          der Zahlungshistorie. Sobald Sie auf diese Schaltfläche klicken, übermitteln wir die Lastschrift sofort erneut an die
          Banken. Anschließend können Sie das neue Buchungsdatum sehen und den Zahlungsstatus in derselben Historie verfolgen
          wie die ursprüngliche Zahlung.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

        <p className='para'>
          In dieser Tabelle finden Sie alle Fehlermeldungen für fehlgeschlagene Lastschriften sowie deren Erklärung:
        </p>

        <table className='table table--faq u-color-heading'>
          <thead>
            <tr>
              <th>
                Fehlermeldung
              </th>
              <th>
                Erklärung
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>“Insufficient funds” <br/>(Konto nicht gedeckt)</td>
              <td>Das Bankkonto Ihres Kunden ist zum Buchungszeitpunkt nicht ausreichend gedeckt.</td>
            </tr>
            <tr>
              <td>“Refer to payer” <br/>(Kunde kontaktieren)</td>
              <td>Diese Fehlermeldung wird häufig von Banken angegeben, wenn kein eindeutiger Grund vorliegt.
              Meist bedeutet dies eine unzureichende Kontodeckung.</td>
            </tr>
            <tr>
              <td>“Bank account closed” <br/>(Bankkonto aufgelöst)</td>
              <td>Das Bankkonto des Kunden wurde aufgelöst, bevor die Lastschrift eingezogen wurde.
              Das Lastschriftmandat und alle ausstehenden Zahlungen werden widerrufen.</td>
            </tr>
            <tr>
              <td>“Direct Debit not enabled” <br/>(Lastschrifteinzug nicht möglich)</td>
              <td>Für das Bankkonto des Kunden sind keine Lastschrifteinzüge autorisiert, z. B. weil der Kunde seine Bank dazu
              angewiesen hat oder das Konto ein Sparkonto ist. Das Lastschriftmandat und alle ausstehenden Zahlungen werden
              widerrufen.</td>
            </tr>
            <tr>
              <td>“Invalid bank details” <br/>(ungültige Bankdaten)</td>
              <td>Die vom Kunden angegebene IBAN ist nicht korrekt. Das Lastschriftmandat und alle ausstehenden Zahlungen
              werden widerrufen.</td>
            </tr>
            <tr>
              <td>“Mandate cancelled” <br/>(Mandat widerrufen)</td>
              <td>Entweder haben Sie oder der Kunde das Mandat bei der Bank widerrufen.</td>
            </tr>
            <tr>
              <td>“Authorisation disputed” <br/>(Autorisierung angefochten)</td>
              <td>Im Rahmen des SEPA-Lastschriftverfahrens haben Kunden während eines Zeitraums von 13 Monaten das
              Recht auf Rückbuchung von Lastschriften, die sie nicht autorisiert haben.</td>
            </tr>
            <tr>
              <td>“Refund requested” <br/>(Rückbuchung beantragt)</td>
              <td>Im Rahmen des SEPA-Lastschriftverfahrens haben Kunden während eines Zeitraums von 8 Wochen das
              Recht auf Rückbuchung von Lastschriften, die sie autorisiert haben.</td>
            </tr>
          </tbody>
        </table>

      </Translation>
    );
  }
}
