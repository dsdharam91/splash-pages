import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuideSecurityDe extends React.Component {
  displayName = 'PartnersGuideSecurityDe'

  render() {
    return (
      <Translation locales='de'>
        <h2>Vorschriften und Sicherheit</h2>

        <h3>Welche Zulassung hat GoCardless? Ist mein Geld sicher bei Ihnen?</h3>

        <p>
          GoCardless ist von der Financial Conduct Authority (FCA) im Rahmen der Payment Services Regulations 2009 des Vereinigten
          Königreichs unter der Registrierungsnummer 597190 als Zahlungsdienstleister zugelassen und stellt seinen Service mehr
          Kunden bereit als jeder andere Lastschriftanbieter. Alle eingezogenen Geldbeträge werden sicher auf einem Kundengeldkonto
          verwahrt und alle Kundengelder sind durch unsere Kreditinstitute abgesichert. Mehr Informationen dazu
          finden Sie <Link to='faq_merchants_security'>hier</Link>. Sie
          können <a href='https://register.fca.org.uk/' target='_blank'>hier</a> nach „GoCardless“ im Verzeichnis der FCA suchen.
        </p>

        <h3>Wie schützt GoCardless meine Daten?</h3>

        <p>
          Sicherheit steht bei GoCardless an oberster Stelle. Wir befolgen eine Reihe an Schritten, um sicherzustellen, dass die
          Daten unserer Kunden jederzeit sicher sind:
        </p>

        <ul>
          <li>
            Unser Zugang zum Lastschriftverfahren wird durch führende europäische Kreditinstitute gewährt,
            die unsere Systeme anerkannt haben.
          </li>

          <li>
            Alle Server werden in sicheren Datenzentren gehostet, die sich in Europa befinden - Daten werden
            niemals außerhalb der EU übertragen.
          </li>

          <li>
            Unser Finanzdatenserver ist über mehrere Firewalls von unserem Anwendungsserver getrennt.
          </li>

          <li>
            Jegliche Client-Server-Kommunikation ist 256-Bit-SSL-verschlüsselt. Das Bankensystem erfordert nur 128 Bit.

          </li>

          <li>
            Mehr Informationen dazu finden Sie <Link to='faq_merchants_security'>hier</Link>.
          </li>
        </ul>

        <h3>Was geschieht mit den Bankdaten von Kunden?</h3>

        <p>
          Wir erfassen die Bankdaten von Kunden in Ihrem Auftrag und übermitteln Ihnen ein Token, damit Sie den
          Lastschrifteinzug für jedes Kunden-/Lastschriftmandat anfordern können.
          Wenn Sie unsere White-Label-Lösung nutzen, können Sie auch selbst Bankdaten Ihrer Kunden erfassen.
        </p>

        <p>
          Hinweis: Innerhalb des SEPA-Raums sind Lastschriftmandate 36 Monate lang ab Autorisierung oder dem letzten
          Lastschrifteinzug gültig. Sie oder Ihre Händler können während seiner Gültigkeit Lastschriften darüber einziehen.
        </p>
      </Translation>
    );
  }
}
