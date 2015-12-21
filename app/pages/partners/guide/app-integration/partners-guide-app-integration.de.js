import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuideAppIntegrationDe extends React.Component {
  displayName = 'PartnersGuideAppIntegrationDe'

  render() {
    return (
      <Translation locales='de'>
        <h2>App-Integration</h2>

        <h3>Händler-Onboarding und Erfassen von Verifizierungsdaten von Händlern</h3>

        <p>
          Wenn Sie die App-Integration wählen, werden Händler zu GoCardless weitergeleitet, um ihren GoCardless-Account einzurichten.
          Eine Demonstration dazu finden Sie <a href='https://oauth-demo.gocardless.com/' target='_blank'>hier</a>. Das bedeutet, dass Sie
          als Partner keine Verifizierungsdaten erfassen müssen.
        </p>

        <h3>Händler- und Kundensupport</h3>

        <p>
          GoCardless kümmert sich um den gesamten Händler- und Kundensupport.
        </p>

        <h3>GoCardless-Mandatsseiten</h3>

        <p>
          Hier finden Sie ein Beispiel einer von GoCardless
          gehosteten <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>Mandatsseite.</a>
        </p>

        <p>Derzeit werden diese Seiten automatisch je nach Standort der Kunden in folgende Sprachen übersetzt:
        </p>

        <ul>
          <li>Deutsch</li>
          <li>Englisch</li>
          <li>Französisch</li>
          <li>Niederländisch</li>
          <li>Spanisch</li>
          <li>Portugiesisch</li>
          <li>Italienisch</li>
        </ul>

        <p>
          Die von GoCardless gehosteten Mandatsseiten passen sich zudem dynamisch an, um die Vorgaben der
          Lastschriftverfahren gemäß SEPA und dem englischen Lastschriftverfahren BACS zu erfüllen.
        </p>

        <p>
          GoCardless plant, weitere Lastschriftverfahren aus Ländern der ganzen Welt zu unterstützen.
          Wenn Ihre Händler Lastschriften möglicherweise über verschiedene Verfahren einziehen, empfehlen wir Ihnen,
          die GoCardless-Mandatsseiten zu verwenden, damit Sie nicht mehrere Seiten erstellen müssen,
          um die Vorgaben jedes Verfahrens zu erfüllen.
        </p>

        <p>
          Möglicherweise möchten Sie dennoch die Mandatsseiten für alle Ihre Händler individuell gestalten,
          was das Kundenerlebnis sowie die Konversionsrate verbessern kann.

          Beispiele für Händler, die ihre eigenen Mandatsseiten implementiert haben, finden Sie hier:
        </p>

        <ul>
          <li>
            <a href='http://registration.ft.com/registration/subscription-service/signuppsp?segid=70011' target='_blank'>
              The Financial Times
            </a>
          </li>

          <li>
            <a href='https://shop.tes.co.uk/tesshop/' target='_blank'>
              Times Educational Supplement
            </a>
          </li>

          <li>
            <a href='https://subscribe.theguardian.com/?INTCMP=NGW_HEADER_UK_GU_SUBSCRIBE' target='_blank'>
              The Guardian
            </a>
          </li>
        </ul>

        <p>
          Mehr Informationen zur Gestaltung von Mandatsseiten, die mit den Lastschriftrichtlinien konform sind, finden
          Sie <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>hier</a>.
        </p>

        <p>
          Dabei ist jedes Layout durch GoCardless zu genehmigen.
        </p>

        <p>
          Hinweis: wenn Sie Ihre eigenen Zahlungsseiten in der App-Integration kreieren, dann müssen Sie die
          GoCardless Gläubiger-ID verwenden und somit wird "GoCardless" auf dem Bankkonto Ihrer Kunden auftauchen.
          Wenn Sie Ihren Namen auf dem Bankkonto Ihrer Kunden anzeigen lassen möchten, dann sollten Sie die White-Label-Integration
          wählen.
        </p>

        <p>
          Sie müssen außerdem die von GoCardless zur Verfügung gestellten Kundenbenachrichtigungen verwenden.
        </p>

        <h3>Von Händlern gehostete individuelle Mandatsseiten</h3>

        <p>
          Mit dieser Funktion können einzelne Händler ihre eigenen Mandatsseiten kreieren.
        </p>

        <p>
          Dabei ist jedes Layout durch GoCardless zu genehmigen. Aufgrund dessen sowie angesichts des
          Arbeitsaufwands eignet sich diese Option eher für größere Händler.
        </p>

        <h3>Kundenbenachrichtigungen</h3>

        <p>
          Das Lastschriftverfahren sieht vor, Benachrichtigungen an Kunden zu senden, zum einen zur
          Bestätigung einer Mandatserstellung, zum anderen zur Ankündigung eines Lastschrifteinzugs.
        </p>

        <p>
          Innerhalb der App-Integration können diese Benachrichtigungen automatisiert werden,
          indem die GoCardless-Benachrichtigungen verwendet werden.
        </p>

        <p>
          Für einzelne Zahlungen sind Benachrichtigungen drei Tage vor Lastschrifteinzug zu versenden.
          Für Abonnementzahlungen, die in Häufigkeit und Höhe gleich bleiben, ist eine einzige Benachrichtigung per E-Mail
          für das gesamte Abonnement ausreichend. Diese kann zusammen mit der E-Mail zur Mandatsbestätigung versendet werden.
        </p>

        <p>
          Beispiele zu GoCardless-Kundenbenachrichtigungen finden
          Sie <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>hier</a>.
          Um eine Testzahlung abzuschließen und Testbenachrichtigungen einzufügen, klicken
          Sie <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>hier</a>.
          Verwenden Sie dabei die Kontonummer 55779911 und die Bankleitzahl 200000.
        </p>

        <p>
          Derzeit werden diese Benachrichtigungen automatisch in folgende Sprachen übersetzt:
        </p>

        <ul>
          <li>Deutsch</li>
          <li>Englisch</li>
          <li>Französisch</li>
          <li>Niederländisch</li>
          <li>Spanisch</li>
          <li>Portugiesisch</li>
          <li>Italienisch</li>
        </ul>

        <p>
          Die Sprache der E-Mail-Benachrichtigungen basiert auf dem Land, das der IBAN entspricht,
          welche der Kunde beim Erstellen des Mandats verwendet.
        </p>

        <h3>Kundenkontoauszug</h3>

        <p>
          Innerhalb der App-Integration wird auf dem Kontoauszug des Kunden GoCardless oder der Händlername erscheinen.
          Wenn Sie es wichtig finden, dass der Partnername auf dem Kontoauszug zu sehen ist, ist unsere White-Label-Lösung
          besser für Sie geeignet - erfahren Sie mehr darüber im
          Abschnitt <Link to='partners_guide_white_label_integration'>White-Label-Integration</Link>.
        </p>

        <p>
          Sie können Kundenreferenzen je Mandat (erste Referenz) und/oder je Zahlung (zweite Referenz) einfügen.
          Nähere Informationen finden Sie&nbsp;
          <a href='https://developer.gocardless.com/pro/#core-endpoints-mandates' target='_blank'>hier</a> und&nbsp;
          <a href='https://developer.gocardless.com/pro/#core-endpoints-payments' target='_blank'>hier</a> in der Dokumentation.
        </p>

        <p>
          Hinweis: Die Mandatsreferenz muss für eine erteilte Gläubiger-ID (CID) einheitlich sein. Aus diesem Grund füllen
          wir die Mandatsreferenz automatisch aus, wenn Sie eine GoCardless-CID verwenden.
        </p>

        <h3>Händlerkontoauszug</h3>

        <p>
          Innerhalb der App-Integration erscheint GC C1 auf dem Kontoauszug von Händlern.
        </p>

        <h3>Gebührenerhebung von Händlern</h3>

        <p>
          Innerhalb der App-Integration zieht GoCardless seine Gebühren von jedem Händler ein.
        </p>

        <p>
          Entweder zieht GoCardless die Gebühren von den Auszahlungen ab oder stellt sie in Rechnung. Diese beiden Optionen sind
          sowohl in der App- als auch in der White-Label-Integration verfügbar.
        </p>

        <h3>Händler- und Partnerpreise</h3>

        <p>
          GoCardless sieht für Händler Gebühren von 1 % pro Transaktion vor (höchstens 2 €). Unsere Partner profitieren zudem
          von einer Gewinnbeteiligung in Höhe von 10 % dieser Gebühr.
          Darüber hinaus können Partner zusätzliche Gebühren erheben, die je Zahlung variieren können.
        </p>

        <p>
          Innerhalb der App-Integration berechnen wir jedem Händler Gebühren von 1 %,
          von denen uns unsere Partner 10 % in Rechnung stellen (0,1 % netto).
        </p>

        <p>
          Wenn Sie die Anwendungsintegration nutzen, senden Sie Ihre Rechnungen bitte
          an <a href='mailto:accounts@gocardless.com'>accounts@gocardless.com</a>, um Ihre Gebühren von uns einzuziehen.
          Wir begleichen diese Rechnungen innerhalb von 30 Tagen und akzeptieren Lastschriftmandate für wiederkehrende Zahlungen.
          Ab Ende 2015 überweist GoCardless Ihnen Ihre Gewinnbeteiligung automatisch auf Ihr Bankkonto.
        </p>

        <h3>Haftung für Rückbuchungen</h3>

        <p>
          Wenn Kunden Rückbuchungen veranlassen, ist GoCardless verpflichtet, den entsprechenden Betrag wieder auf deren Bankkonto
          zurückzubuchen. Anschließend ziehen wir den Betrag wiederum von unseren Kunden ein.
        </p>

        <p>
          Im Rahmen der App-Integration macht GoCardless Händler direkt für Rückbuchungen haftbar.
        </p>

        <h3>Einholen telefonischer und schriftlicher Mandate</h3>

        <p>
          Diese Optionen sind zurzeit ausschließlich in der White-Label-Integration verfügbar. Allerdings planen wir, diese Funktion
          bald auch in der App-Integration anzubieten - kontaktieren Sie uns einfach, wenn dies wichtig für Sie ist.
        </p>

        <h3>Zahlungsverfolgung</h3>

        <p>
          GoCardless bietet seinen Kunden eine Zahlungsverfolgung auf drei Arten.
        </p>

        <ul>
          <li>Über Webhooks, die GoCardless Ihnen über die API zusendet.</li>
          <li>Durch eine aktive Suche über die API nach den Elementen, die Sie finden möchten.</li>
          <li>Über das GoCardless-Dashboard</li>
        </ul>

        <p>
          Innerhalb einer App-Integration werden Ihre Kunden zu GoCardless-Händlern und erhalten so Zugang zum GoCardless-Dashboard.
          Auf diese Weise müssen Sie keine komplette Reporting-Suite für Ihre Kunden einrichten. Wir empfehlen dennoch,
          grundlegende Reporting-Funktionen wie Zahlungsstatus (erfolgreich, fehlgeschlagen usw.) bereitzustellen.
        </p>

        <h3>Erforderliche Mitarbeiter für die Entwicklung</h3>

        <p>
          Bei einer App-Integration wird weniger Entwicklungspersonal benötigt als bei einer White-Label-Integration.
        </p>
      </Translation>
    );
  }
}
