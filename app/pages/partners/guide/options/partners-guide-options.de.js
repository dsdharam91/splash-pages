import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import Link from '../../../../components/link/link';
import XIcon from '../../../../icons/svg/x';
import CheckMarkIcon from '../../../../icons/svg/checkmark';

export default class PartnersGuideOptionsDe extends React.Component {
  displayName = 'PartnersGuideOptionsDe'

  render() {
    return (
      <Translation locales='de'>
        <h2>Optionen</h2>

        <p>
          Sie können zwischen drei GoCardless-Partnerschaften wählen:
        </p>

        <ul>
          <li>
            <b>Affiliate-Programm</b> -  Werben Sie neue GoCardless-Kunden und erhalten Sie Provisionen.
          </li>

          <li>
            <b>App-Integration</b> -  Verbinden Sie die Accounts Ihrer Kunden mit GoCardless und erleichtern Sie ihnen,
            wiederkehrende Zahlungen auf Ihrer Plattform einzuziehen.
          </li>

          <li>
            <b>White-Label-Lösung</b> -  Behalten Sie die volle Kontrolle über Zahlungen durch Integration unserer White-Label-Lösung.
          </li>
        </ul>

        <p>
          Im Folgenden finden Sie Entscheidungshilfen zur Wahl der Partnerschaft, die am besten zu Ihnen passt:
        </p>

        <h3>Möchten Sie Zahlungen per Lastschrift über GoCardless in Ihr Produkt integrieren?</h3>

        <p>
          <strong>Ja</strong> - Dann ist entweder unsere App- oder White-Label-Integration am besten für
          Sie geeignet - lesen Sie weiter und erfahren Sie mehr.
        </p>

        <p>
          <strong>Nein</strong> - Dann ist unser Affiliate-Programm am besten für Sie geeignet - schreiben Sie uns
          an <Href to='partners_email' itemProp='email' /> und erfahren Sie mehr.
        </p>

        <h3>
          Haben Sie vor, Zahlungen selbst einzuziehen und diese dann an Ihre Händler auszuzahlen? (üblich bei Zahlungsdienstleistern)
        </h3>

        <p><strong>Ja</strong> - Dann füllen Sie bitte <a href='/partner-info-template.xlsx' target='_blank'>dieses Formular</a> aus
        und senden es an <Href to='partners_email' itemProp='email' />. Sie müssen zur Verwaltung von Kundengeldern zugelassen
        sein. Zudem müssen Sie von unserem Kreditinstitut als Master-Händler innerhalb des GoCardless-Systems zugelassen werden.
        </p>

        <p><strong>Nein</strong> - Dann ist entweder unsere App- oder White-Label-Lösung am besten für Sie
        geeignet - lesen Sie weiter und erfahren Sie mehr.</p>

        <h3>Welche der folgenden Aussagen treffen auf Sie zu?</h3>

        <ul>
          <li>
            Sie möchten zusätzlichen Aufwand betreiben, um Ihren Kunden mehr Benutzerfreundlichkeit bieten und Ihr eigenes Logo
            hinzufügen zu können, z. B. mittels Händler-Onboarding, Zahlungsseiten für Kunden und Kundenbenachrichtigungen.
            Oder Sie möchten, dass Ihr eigener Name auf dem Kontoauszug Ihrer Kunden erscheint.
          </li>

          <li>
            Sie erfassen bereits Händlerinformationen, um Geldwäsche zu bekämpfen (Verifizierungsprüfungen)? Wenn Sie sich nicht sicher
            sind, lesen Sie die Abschnitte zu Verifizierungen im Rahmen
            der <Link to='partners_guide_app_integration'>App-</Link> oder
            <Link to='partners_guide_white_label_integration'> White-Label-Integration</Link> und
            erfahren Sie mehr.
          </li>

          <li>
            Sie verfügen über eine große Anzahl an Händlern, die weniger als 1.000 Transaktionen pro Monat tätigen und weniger als
            unsere Standardgebühr zahlen sollen (1 % und höchstens 2 € pro Transaktion).
          </li>
        </ul>

        <p>
          Falls Sie mindestens eine dieser Aussagen mit <strong>„Ja“</strong> beantwortet haben, eignet sich unsere White-Label-Lösung
          optimal für Sie - erfahren Sie mehr darüber im
          Abschnitt <Link to='partners_guide_white_label_integration'>White-Label-Integration.</Link>
        </p>

        <p>
          Falls Sie alle Aussagen mit <strong>„Nein“ </strong> beantwortet haben, eignet sich unsere App-Integration am besten für
          Sie  - erfahren Sie mehr darüber im Abschnitt <Link to='partners_guide_app_integration'>App-Integration</Link>.
        </p>

        <h3>
          Verfügen Sie über Mitarbeiter im Kundensupport, die Händlern und Kunden Fragen rund um das Lastschriftverfahren
          beantworten können?
        </h3>
        <p>
          <strong>Ja</strong> - Dann eignet sich unsere White-Label-Lösung optimal für Sie - erfahren Sie mehr darüber im
          Abschnitt <Link to='partners_guide_white_label_integration'>White-Label-Integration.</Link>
        </p>

        <p>
          <strong>Nein</strong> - Dann eignet sich unsere App-Integration am besten für Sie - erfahren Sie mehr darüber im
          Abschnitt <Link to='partners_guide_app_integration'>App-Integration</Link>.
        </p>

        <h3>Vergleichen Sie Ihre Optionen</h3>

        <p>
          Diese Tabelle verschafft Ihnen einen Überblick über die Unterschiede zwischen App- und White-Label-Integration:
        </p>

        <table>
          <tr>
            <th />
            <th>App-Integration</th>
            <th>White-Label-Integration</th>
          </tr>

          <tr>
            <td>Onboarding</td>
            <td>GoCardless</td>
            <td>Partner</td>
          </tr>

          <tr>
            <td>Erfassen von Verifizierungsinfos erforderlich?</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Endkundensupport erforderlich?</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>Ja, wenn Partnername auf Kontoauszug erscheint</td>
          </tr>

          <tr>
            <td>Händlersupport erforderlich?</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Auf Partner zugeschnittene Mandatsseiten</td>

            <td>
              Ja, allerdings taucht dann 'GoCardless' auf dem Kontoauszug auf
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Von Händlern gehostete individuelle Mandatsseiten</td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Von GoCardless gehostete Mandatsseiten mit Händlerlogo</td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Kunden-Benachrichtigungen</td>
            <td>GoCardless oder Händler</td>
            <td>GoCardless oder Partner</td>
          </tr>

          <tr>
            <td>Kundenkontoauszug</td>

            <td>
              „GoCardless re: [Mandatsreferenz] [Zahlungsreferenz]”
              <br/>oder
              <br/>„[Händlername] re: [Mandatsreferenz] [Zahlungsreferenz]”
            </td>

            <td>
              „GoCardless re: [Mandatsreferenz] [Zahlungsreferenz]”
              <br/>oder
              <br/>„[Händlername] re: [Mandatsreferenz] [Zahlungsreferenz]”
            </td>
          </tr>

          <tr>
            <td>Händlerkontoauszug</td>
            <td>„GC C1 re: [individuelle Referenz] [individuelle Referenz]”</td>
            <td>„GC C1 re: [individuelle Referenz] [individuelle Referenz]”</td>
          </tr>

          <tr>
            <td>Gebührenerhebung Händler</td>
            <td>GoCardless - Abzüge oder Rechnung</td>
            <td>Partner</td>
          </tr>

          <tr>
            <td>
              Händlerpreise
            </td>

            <td>
              1 % pro Transaktion, höchstens 2 €. Mengenrabatte ab 1.000 Zahlungen pro Monat und Händler.
              <br/><br/>
              Partner kann Zusatzgebühren erheben. GoCardless kann diese abziehen oder dem Händler in Rechnung stellen.
            </td>

            <td>
              Von Partner vorgegeben. GoCardless stellt Partner Gebühren für Gesamtsumme an Zahlungen aller Händler in Rechnung.
            </td>
          </tr>

          <tr>
            <td>
              Gebührenerhebung Partner
            </td>

            <td>
              Partner berechnet GoCardless 10 % Gewinnbeteiligung und alle Zusatzgebühren, die GoCardless von Händlern eingezogen hat.
            </td>

            <td>
              GoCardless stellt Partner Gebühren in Rechnung.
            </td>
          </tr>

          <tr>
            <td>Partnerpreise</td>
            <td>n. a.</td>

            <td>
              Normalerweise 0,9 %, höchstens 1,80 €. Mengenrabatt je Händler möglich.
            </td>
          </tr>

          <tr>
            <td>Haftung für Rückbuchungen</td>
            <td>Händler übernimmt Haftung</td>

            <td>
              Beträge von Händler zurückgefordert, endgültige Haftung übernimmt jedoch der Partner
            </td>
          </tr>

          <tr>
            <td>Einholen telefonischer und schriftlicher Mandate</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>
              Zahlungsverfolgung
            </td>

            <td>
              Händler haben Zugang zu GoCardless-Dashboards.
              <br/><br/>
              Partner erhalten Zahlungsübersicht über die GoCardless-API, Dashboard nicht verfügbar.
            </td>

            <td>
              Händler haben keinen Zugang zu GoCardless-Dashboards. Partner können Zahlungsübersicht über die GoCardless-API erstellen.
              <br/><br/>
              Partner haben Zugang zu GoCardless-Dashboards.
            </td>
          </tr>

          <tr>
            <td>Verfügbarkeit</td>
            <td>Sofort</td>
            <td>Februar/März 2016</td>
          </tr>

          <tr>
            <td>
              API Dokumentation
            </td>

            <td>
              <a href='https://developer.gocardless.com/pro/#guides-oauth' target='_blank'>Ansehen</a>
            </td>

            <td>
              <a href='https://developer.gocardless.com/pro/#whitelabel-partner-endpoints' target='_blank'>Ansehen</a>
            </td>
          </tr>

          <tr>
            <td>Erforderliche Mitarbeiter für Entwicklung</td>
            <td>Weniger der zwei Lösungen.</td>
            <td>Mehr - Erfassung von Verifizierungsdaten, Zahlungsverfolgung und Erstellen von Mandatsseiten.</td>
          </tr>

        </table>

        <p>
          Wir arbeiten kontinuierlich an der Verbesserung unserer Produkte - wenn Sie Fragen haben,
          die hier nicht beantwortet werden, schreiben Sie uns an <Href to='partners_email' itemProp='email' />.
        </p>
      </Translation>
    );
  }
}
