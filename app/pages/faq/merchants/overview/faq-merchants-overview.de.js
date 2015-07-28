import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';
import IfLinkExists from '../../../../components/if-link-exists/if-link-exists';

export default class FaqMerchantsDe extends React.Component {
  displayName = 'FaqMerchantsDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Übersicht</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wie kann ich GoCardless benutzen?
        </h3>
        <p className='para'>
          Sie können GoCardless auf zweierlei Art und Weise benutzen:
        </p>
        <ul className='list'>
          <li>
            <strong>Über die Benutzeroberfläche</strong> - Mit unserem einfachen Dashboard können Sie Lastschriften
            von Ihren Kunden manuell eintragen und transparent verfolgen.
          </li>
          <li>
            <strong>Über unsere REST API</strong> - Integrieren Sie GoCardless nahtlos in Ihre Webseite mit
            unserer <a href='https://developer.gocardless.com/pro' className='u-link-color-p u-text-underline'>REST API</a>.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Für wen ist GoCardless gemacht?
        </h3>
        <p className='para'>
          GoCardless ist für jeden, der Zahlungen gerne direkt vom Bankkonto seiner Kunden in Deutschland, der Eurozone
          sowie dem Vereinigten Königreich einziehen will.
          Es ist besonders hilfreich für B2B Unternehmen, also denen die Geld von Firmenkunden einziehen, sowie für
          Unternehmen, die wiederkehrende Zahlungen einziehen, wie z.B. Abonnements und Mitgliedschaftsbeiträge.
        </p>
        <p className='para'>
          Unsere einfache Benutzeroberfläche und die starke API machen GoCardless zu einer optimalen Lösung—von innovativen Start Ups
          bis zu internationalen Großunternehmen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wofür kann ich GoCardless verwenden?
        </h3>
        <p className='para'>
          GoCardless hat viele tolle Anwendungsfälle, es gibt aber ein paar Ausnahmen:
        </p>
        <ul className='list'>
          <li>
            <strong>Kreditkartenzahlungen</strong> - GoCardless bietet keine Zahlungen per Kreditkarte an, Sie können aber
            einen Kreditkartenanbieter parallel zu GoCardless verwenden.
          </li>
          <li>
            <strong>Sofortige Zahlungen</strong> - Zahlungen per Lastschrift brauchen in der Regel 3-5 Arbeitstage, bis Sie beim
            Empfänger ankommen. Daher ist das Lastschriftverfahren nicht so gut geeignet, wann immer eine sofortige Bestätigung
            notwendig ist, wie z.B. wenn ein schneller Versand erforderlich ist.
          </li>
        </ul>
        <IfLinkExists to='legal_restrictions'>
          <p className='para'>
            Wir können die meisten Kunden als Nutzer von GoCardless bedienen, es gibt aber manche Ausnahmen. Für Details,
            werfen Sie einen Blick auf unsere <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>restricted
            activities Seite</Link>.
          </p>
        </IfLinkExists>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Gibt es eine Obergrenze für die Höhe der Zahlungen?
        </h3>
        <p className='para'>
          Die Anzahl Ihrer Transaktionen ist unbegrenzt.
        </p>
        <p className='para'>
          In Deutschland und der Eurozone ist die Höhe einer einzelnen Zahlung auf €5.000 beschränkt. Falls Sie GoCardless
          gerne auch für Zahlungen im Vereinigten Königreich einsetzen möchten, dann muss die Transaktion zwischen £1 und £5.000 liegen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wie erhalte ich das Geld, dass ich mit Hilfe von GoCardless eingezogen habe?
        </h3>
        <p className='para'>
          Wir überweisen Ihnen das Geld, das wir von Ihren Kunden empfangen, direkt auf Ihr Bankkonto.
        </p>
        <p className='para'>
          Mit GoCardless werden die <Link to='pricing' title='Pricing' className='u-link-color-p u-text-underline'>Gebühren</Link> automatisch 
          einbehalten, wenn wir Ihnen das Geld auszahlen.
        </p>
        <p className='para'>
          Mit GoCardless Pro stellen wir Ihnen die <Link to='pricing' title='Pricing' className='u-link-color-p u-text-underline'>Gebühren</Link> in Rechnung.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wann erhalte ich die Zahlungen?
        </h3>
        <p className='para'>
          Zahlungen werden 3 Tage nach dem jeweiligen Einzug an Sie ausgezahlt.
          Wir halten das Geld nicht auf Reserve, sondern zahlen alle verfügbaren Gelder an Sie aus.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Kann ich mit GoCardless auch Kreditkartenzahlungen anbieten?
        </h3>
        <p className='para'>
          Nein, GoCardless ist ein Lastschriftexperte und bietet keine Zahlungen per Kreditkarte an.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Warum sollte ich GoCardless anderen Optionen vorziehen?
        </h3>
        <p className='para'>
          Hier ist eine Auswahl von Gründen, warum unsere Kunden uns wählen:
        </p>

        <ul className='list'>
          <li>
            <strong>Stark reduzierter Verwaltungsaufwand</strong> - Sie können wiederkehrende sowie einmalige Zahlungen
            ganz automatisch einziehen. Wir kümmern uns um den Rest.
          </li>
          <li>
            <strong>Clevere Technik</strong> - Wir bieten Ihnen eine hochklassige Lösung, um Zahlungen zu kreieren, zu bearbeiten
            und zu verwalten. Das funktioniert über unser einfaches Online Dashboard und die <a href='https://developer.gocardless.com/'
            className='u-link-color-p u-text-underline'>REST API</a>.
          </li>
          <li>
            <strong>Der persönliche Bezug</strong> - Unser Team ist immer bemüht Sie bestens zu unterstützen und geht dabei regelmäßig
            die Extra Meile.
          </li>
        </ul>
      </Translation>
    );
  }
}
