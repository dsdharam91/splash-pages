import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsSecurityDe extends React.Component {
  displayName = 'FaqMerchantsSecurityDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Sicherheit</h2>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Woher weiß ich, dass mein Geld sicher ist?
        </h3>
        <p className='para'>
          Wir sind als <a href='http://www.fsa.gov.uk/register/psdFirmBasicDetails.do?sid=315374'
          title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>Zahlungsdienst</a> von
          der Financial Conduct Authority im Vereinigten Königreich autorisiert.
          Es ist uns erlaubt Zahlungen in der gesamten Europäischen Union
          einzuziehen und zu verwalten und bedienen mehr als 10.000 Unternehmen in der EU.
        </p>
        <p className='para'>
          Alle Zahlungen, die wir erhalten, werden in einem sicheren Konto unserer Partnerbank für Sie aufbewahrt.
        </p>
        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Wie schützt GoCardless meine Daten?
        </h3>
        <p className='para'>
          Sicherheit wird groß geschrieben bei GoCardless. Die folgenden Vorkehrungen sind nur eine Auswahl aus unserer Arbeit, Ihre Daten
          sowie Ihre Zahlungen jederzeit sicher zu verwahren:
        </p>
        <ul className='list'>
          <li>Unser Zugang zum Lastschriftverfahren wird von Europas führenden Banken ermöglicht, die unsere Systeme regelmäßig prüfen.</li>
          <li>All unsere Server sind in sicheren Datenzentren in Europa aufbewahrt - Daten werden nie außerhalb der EU übertragen.</li>
          <li>Unser Server für finanzielle Daten ist durch mehrere Firewalls von den Servern für unseren Service getrennt.</li>
          <li>Die Kommunikation mit dem Kundendaten Server ist 256-bit SSL verschlüsselt. Das Minimum für Banken liegt bei 128-bit.</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Was passiert mit meinem Geld, bevor es auf mein Konto ausgezahlt wird?
        </h3>
        <p className='para'>
          Alle von uns empfangen Gelder werden auf einem sicheren Bankkonto mit unserer Partnerbank gehalten, konform mit den notwendigen
          finanziellen Sicherheitsmaßnahmen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Sind meine Kunden abgesichert?
        </h3>
        <p className='para'>
          Ja, Ihre Kunden sind durch das <a href='https://gocardless.com/de/handbuch/sepa/kundenschutz/'
          className='u-link-color-p u-text-underline'>SEPA Lastschriftabkommen</a> abgesichert.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Aufdecken von Sicherheitslücken
        </h3>

        <p className='para'>Es ist uns sehr wichtig, dass unsere Kunden zu jedem Zeitpunkt sicher sind. Falls Sie glauben eine
          Unsicherheit entdeckt zu haben, dann würden wir Sie bitten es auf verantwortungsvolle Art und Weise mit uns zu teilen.
          Verletzlichkeiten zu veröffentlichen bringt all unsere Nutzer in Gefahr, daher möchten wir Sie bitten, solche Kommunikation
          immer privat mit uns zu besprechen, bis wir das etwaige Problem beheben konnten.
        </p>

        <p className='para'>
          Falls Sie Interesse daran haben unsere Systeme auf Sicherheit und Verletzbarkeit zu testen, dann
          können Sie sich einen <a href="https://manage-sandbox.gocardless.com/signup"
          className="u-link-color-p u-text-underline">Test Account</a> einrichten.
        </p>

        <p className='para'>
          Um Ihre Arbeit zu würdigen sowie als Dankeschön dafür, dass Sie uns helfen GoCardless sicher zu halten,
          behält sich GoCardless vor Ihre Arbeit für das verantwortungsvolle Aufdecken von Sicherheitslücken finanziell zu entlohnen.
          Die Höhe einer solchen Entlohnung hängt von der Bedeutung des aufgedeckten Problems ab.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Probleme melden
        </h3>

        <ul className='list'>
          <li>
            Senden Sie uns eine Email an <a href='mailto:security@gocardless.com'
            className='u-link-color-p u-text-underline'>security@gocardless.com</a> sobald Sie ein Problem bemerken.
            Unser GPG Schlüssel ist <code>684ED3A3</code> mit Fingerabdruck <code>8A4C 2665 6632 8EC4 1C83 6BB4 D9E1 ADB2 684E D3A3</code>.
          </li>
          <li>
            Bitte beschreiben Sie das Problem so detailiert wie möglich,
            inklusive der Schritte, denen wir folgen müssen, um das Problem zu reproduzieren.
          </li>
          <li>
            Bitte veröffentlichen Sie keine Informationen zur Sicherheitslücke,
            sondern halten die Kommunikation auf das Team von GoCardless beschränkt.
          </li>
          <li>
            Bitte sehen Sie davon ab, anderen Leuten als dem Team von GoCardless davon zu berichten,
            bis wir die Möglichkeit hatten, das Problem zu lösen.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Entlohnungen
        </h3>

        <p className='para'>
          Wir schätzen die Arbeit, die Sicherheitstester machen, um das Internet und online Services sicherer zu machen, und wir
          möchten solche Arbeit belohnen. Wir werden allerdings keine boshaftigen Tätigkeiten entlohnen, oder solche, die vorsätzlich
          Schaden verursachen. Ob eine Entlohnung in Frage kommt, entscheiden wir von Fall zu Fall. Wir werden aber nie die folgenden
          Fälle entlohnen:
        </p>
        <ul className='list'>
          <li>
            Die Verleumdung von Attacken auf unseren Service
          </li>
          <li>
            Das Verwenden von automatisierten Instrumenten wie z.B. Scanners und Fuzz Testern, da diese unserem Service schaden können
            und dabei viel Lärm machen, der uns viel Zeit kostet zu beseitigen.
          </li>
          <li>
            Social Engineering Attacken
          </li>
          <li>
            Handgreifliche Attacken oder Drohungen gegenüber unseren Mitarbeitern
          </li>
        </ul>
      </Translation>
    );
  }
}
