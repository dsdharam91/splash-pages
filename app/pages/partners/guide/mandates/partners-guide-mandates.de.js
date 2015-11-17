import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class PartnersGuideMandatesDe extends React.Component {
  displayName = 'PartnersGuideMandatesDe'

  render() {
    return (
        <Translation locales='de'>
          <h2>Übertragen von Mandaten</h2>

        <h3>Kann ich bereits vorhandene Lastschriftmandate in den GoCardless-Service übertragen?</h3>

        <p>
          Ja - Die Übertragung von Lastschriftmandaten ist völlig unkompliziert. Das Handbuch zur Übertragung
          von SEPA-Mandaten finden Sie
          <a href='https://gocardless.com/de/handbuch/sepa/mandat-uebertragung/' target='_blank'>hier</a>.
          Um Lastschriftmandate aus dem Vereinigten Königreich zu übertragen, lesen Sie unser Handbuch auf Englisch dazu
          <a href='https://gocardless.com/direct-debit/transferring/' target='_blank'>hier</a>.
          
        </p>

        <p>
          Bezüglich SEPA-Mandate gibt es drei Dinge, die Sie wissen sollten:
        </p>

        <ul>
          <li>
            <strong>Ihre Kunden brauchen sich um nichts zu kümmern.</strong> Ihre Kunden müssen weder ein neues Mandat
            ausstellen noch in die Übertragung einwilligen. Sie müssen Ihre Kunden lediglich über die Übertragung informieren.
          </li>

          <li>
            <strong>The process dauert etwa 1 Woche.</strong> Bis der komplette Prozess abgeschlossen ist, dauert es ca. eine Woche
            für die Übertragung von SEPA-Mandaten und ca. 4 Wochen für UK-Mandate.
          </li>

          <li>
            <strong>Dazu benötigen Sie die Daten Ihrer Kunden.</strong> Die Übertragung erfordert die Adresse, E-Mail, den Namen und
            die Bankdaten Ihrer Kunden. Wenn Sie diese nicht zur Hand haben, sollte Ihr aktueller Anbieter Ihnen die Angaben übermitteln können.
          </li>
        </ul>

        <p>
          Für nähere Informationen zur Übertragung von Mandaten schreiben Sie uns direkt an <Href to='partners_email' itemProp='email' />.
        </p>
        </Translation>
    );
  }
}
