import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class PartnersGuideWhiteLabelDe extends React.Component {
  displayName = 'PartnersGuideWhiteLabelDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>White-Label-Integration</h2>

        <h3>Händler-Onboarding und Erfassen von Verifizierungsdaten von Händlern</h3>

        <p>
          Wenn Sie sich für die White-Label-Integration entscheiden, können Sie das Händler-Onboarding innerhalb
          Ihrer vorhandenen Anwendung managen. Dazu müssen Sie folgende Daten von Ihren Händlern erfassen:
        </p>

        <ul>
          <li>Registrierungsnummer von Unternehmen/Wohltätigkeitsorganisationen</li>
          <li>Angaben zum Geschäftsführer/Treuhänder - Name, Geburtsdatum, Adresse</li>
          <li>Firmenanschrift</li>
          <li>Angaben zu Anteilseignern (falls ein anderes Unternehmen mit > 25 % beteiligt ist,
            sind dieselben Daten zwingend erforderlich)</li>
        </ul>

        <p>
          Wenn wir Händler nicht über die oben angegebenen Daten identifizieren können (3 % bei Registrierung von Unternehmen,
          20-30 % bei Einzelpersonen oder gemeinnützigen Organisationen), können wir zusätzliche Informationen wie
          Personalausweis oder Führerschein von Geschäftsführer oder Treuhänder verlangen.
        </p>

        <p>
          Zudem haben Sie alle Händler anzuweisen, 0,01 - 1,00 € auf das GoCardless-Konto zur Prüfung der Kundenidentität zu überweisen.
          Daraufhin werden wir über die API prüfen, dass dieser Betrag eingegangen ist, oder ob wir weitere Informationen benötigen.
        </p>

        <h3>Händler- und Kundensupport</h3>

        <p>
          White-Label-Partner müssen einen Händlersupport bereitstellen, da diese möglicherweise nicht wissen, dass GoCardless die Zahlungen
          abwickelt. Kunden können Sie als Partner ebenso kontaktieren, da Ihr Name auf ihrem Kontoauszug erscheint.
        </p>

        <p>
          Ausgegangen von der Anzahl an Anfragen, die zurzeit bei GoCardless eingehen, dürften White-Label-Partner ca. eine E-Mail oder
          Anruf pro 100 abgewickelten Zahlungen erhalten (1 % der Zahlungsanzahl).
        </p>

        <p>
          Die am häufigsten gestellte Anfrage seitens der Händler betrifft den Zahlungsstatus (ca. 80 %), z. B. warum eine Zahlung als
          ausstehend gekennzeichnet ist, wann sie als abgeschlossen markiert wird, warum eine Zahlung als fehlgeschlagen markiert ist usw.
        </p>

        <p>
          Gelegentlich können Händler Partner bezüglich Rückbuchungen und Lastschriftterminen kontaktieren, z. B. wann Beträge von
          Kundenkonten abgebucht werden, wann Beträge auf ihren Konten eingehen usw.
        </p>

        <p>
          Es gibt wenige seltene, jedoch komplizierte Fälle, für die Sie GoCardless kontaktieren sollten,
          damit wir diese zusammen mit Ihrem Support-Team lösen können.
        </p>

        <p>
          Bevor Sie Ihren Service bereitstellen, liefern wir Ihnen umfassende Schulungshandbücher zu Händler- und Kundensupport.
        </p>

        <h3>GoCardless-Mandatsseiten</h3>

        <p>
          Hier finden Sie ein Beispiel einer von GoCardless gehosteten
          <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>Mandatsseite</a>.
        </p>

        <p>
          Derzeit werden diese Seiten automatisch je nach Standort der Kunden in folgende Sprachen übersetzt:
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
          GoCardless plant, weitere Lastschriftverfahren aus Ländern der ganzen Welt zu unterstützen. Wenn Ihre Händler Lastschriften
          möglicherweise über verschiedene Verfahren einziehen, empfehlen wir Ihnen, die GoCardless-Mandatsseiten zu verwenden,
          damit Sie nicht mehrere Seiten erstellen müssen, um die Vorgaben jedes Verfahrens zu erfüllen.
        </p>

        <p>
          Möglicherweise möchten Sie dennoch die Mandatsseiten für alle Ihre Händler individuell gestalten,
          was das Kundenerlebnis sowie die Konversionsrate verbessern kann.
        </p>

        <p>
          Beispiele für Händler, die ihre eigenen Mandatsseiten implementiert haben, finden Sie hier:
        </p>

        <ul>
          <li>
            <a href='http://registration.ft.com/registration/subscription-service/signuppsp?segid=70011' target='_blank'>
              The Financial Times
            </a>
          </li>

          <li>
            <a href='https://shop.tes.co.uk/tesshop/' target='_blank'>Times Educational Supplement</a>
          </li>

          <li>
            <a href='https://subscribe.theguardian.com/?INTCMP=NGW_HEADER_UK_GU_SUBSCRIBE' target='_blank'>The Guardian</a>
          </li>
        </ul>

        <p>
          Mehr Informationen zur Gestaltung von Mandatsseiten, die mit den Lastschriftrichtlinien konform sind, finden Sie
          <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>hier</a>.
        </p>

        <h3>Von Händlern gehostete individuelle Mandatsseiten</h3>

        <p>
          Mit dieser Funktion können Händler ihre eigenen Mandatsseiten kreieren.
        </p>

        <p>
          Dabei ist jedes Layout durch GoCardless zu genehmigen. Aufgrund dessen sowie angesichts des Arbeitsaufwands
          eignet sich diese Option eher für größere Händler.
        </p>

        <h3>Kundenbenachrichtigungen</h3>

        <p>
          Das Lastschriftverfahren sieht vor, Benachrichtigungen an Kunden zu senden, zum einen zur Bestätigung einer Mandatserstellung,
          zum anderen zur Ankündigung eines Lastschrifteinzugs.
        </p>

        <p>
          Für einzelne Zahlungen sind Benachrichtigungen drei Tage vor Lastschrifteinzug zu versenden. Für Abonnementzahlungen,
          die in Häufigkeit und Höhe gleich bleiben, ist eine einzige Benachrichtigung per E-Mail für das gesamte Abonnement ausreichend.
          Diese kann zusammen mit der E-Mail zur Mandatsbestätigung versendet werden.
        </p>

        <p>
          Beispiele zu GoCardless-Kundenbenachrichtigungen finden Sie
          <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>hier</a>.
          Um eine Testzahlung abzuschließen und Testbenachrichtigungen einzufügen, klicken Sie
          <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>hier</a>.
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

        <p>
          Sie können ebenso Ihre selbst erstellten Benachrichtigungen versenden. Mehr Informationen zur Gestaltung
          von Mandatsseiten, die mit den Lastschriftrichtlinien konform sind, finden Sie hier.
          Beachten Sie, dass für das SEPA- und das BACS-Lastschriftverfahren unterschiedliche Vorschriften gelten.
        </p>


        <h3>Kundenkontoauszug</h3>

        <p>
          Innerhalb der White-Label-Integration ist typischerweise der Name des Partners auf dem Kundenkontoauszug zu sehen.
          Dies setzt voraus, dass Sie über Ihre eigene Gläubiger-ID verfügen. Bei deren Beantragung helfen wir Ihnen gerne.
        </p>

        <p>
          Sie können Kundenreferenzen je Mandat (erste Referenz) und/oder je Zahlung (zweite Referenz) einfügen.
          Nähere Informationen finden Sie <a href='https://developer.gocardless.com/pro/#core-endpoints-mandates' target='_blank'>hier</a>
          &nbsp;und <a href='https://developer.gocardless.com/pro/#core-endpoints-payments' target='_blank'>hier</a> in
          der Dokumentation.
        </p>

        <h3>Händlerkontoauszug</h3>

        <p>
          Innerhalb der White-Label-Integration erscheint GC C1 auf dem Kontoauszug von Händlern.
        </p>


        <h3>Gebührenerhebung von Händlern</h3>

        <p>
          Bei Nutzung der White-Label-Lösung werden die GoCardless-Gebühren summiert und vom Partner eingezogen.
        </p>

        <p>
          Üblicherweise stellt GoCardless dem Partner diese Gebühren in Rechnung. Partner können diese Gebühren
          wiederum direkt ihren Händlern berechnen.
        </p>

        <p>
          Wahlweise können wir diese Gebühren auch direkt von den Händlern einziehen und dann unseren Partnern auszahlen.
        </p>

        <h3>Händler- und Partnerpreise</h3>

        <p>
          GoCardless sieht für Händler Gebühren von 1 % pro Transaktion vor (höchstens 2 €). Partner sind berechtigt,
          zusätzliche Gebühren zu erheben.
        </p>

        <p>
          Wir berechnen unseren Partnern Gebühren von 0,9 % (höchstens 1,80 €). Wir gewähren Ihnen Mengenrabatte je Händler.
          Fragen Sie uns, wenn dies Ihnen wichtig erscheint.
        </p>

        <h3>Haftung für Rückbuchungen</h3>

        <p>
          Wenn Kunden Rückbuchungen veranlassen, ist GoCardless verpflichtet, den entsprechenden Betrag wieder auf deren Bankkonto
          zurückzubuchen. Anschließend ziehen wir den Betrag wiederum von unseren Kunden ein.
        </p>

        <p>
          Wir gleichen Rückbuchungen zunächst aus, indem wir die entsprechenden Beträge von den Händlerauszahlungen einbehalten.
          Falls wir die Beträge nicht von Händlern einbehalten können, ziehen wir sie von unseren Partnern ein.
        </p>

        <p>
          Bei der White-Label-Lösung übernimmt der Partner die Haftung, da GoCardless keine Vereinbarung mit den Händlern trifft.
          Tatsächlich können die Händler nicht wissen, dass wir die Zahlungen in Ihrem Auftrag einziehen.
        </p>

        <h3>Einholen telefonischer und schriftlicher Mandate</h3>

        <p>
          Es ist wichtig, dass Ihre Händler sich an die Lastschriftvorgaben halten, wenn sie sich Mandate auf diese Weise einholen.
        </p>

        <p>
          Um sich mündliche Mandate telefonisch gemäß SEPA einzuholen, lesen Sie unseren Leitfaden dazu
          <a href='https://gocardless.com/guides/sepa/telephone-mandate/' target='_blank'>hier</a> (Englisch).
        </p>

        <p>
          Zur Erstellung schriftlicher Mandate gemäß BACS finden Sie den Leitfaden dazu
          <a href='https://gocardless.com/direct-debit/mandates/' target='_blank'>hier</a> und eine Vorlage
          <a href='https://gocardless.com/guides/examples/direct-debit-mandate-template.docx' target='_blank'>hier</a>.
          Setzen Sie sich mit uns in Verbindung, wenn Sie sich im Vereinigten Königreich Mandate mündlich per Telefon einholen möchten.
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
          Da Ihre Kunden bei Nutzung der White-Label-Integration keine GoCardless-Accounts einrichten, haben Sie keinen Zugang zum
          GoCardless-Dashboard. Daher ist ihnen die gesamte Zahlungsverfolgung über die API bereitzustellen. Details zu unseren Webhooks
          finden Sie <a href='https://developer.gocardless.com/pro/#webhooks-overview' target='_blank'>hier</a>.
        </p>

        <h3>Erforderliche Mitarbeiter für die Entwicklung</h3>

        <p>
          Die White-Label-Integration erfordert aus folgenden Gründen einen größeren Entwicklungsaufwand als die Anwendungsintegration:
        </p>

        <ul>
          <li>
            <strong>Händler-Onboarding</strong> - Sie sind dazu verpflichtet, Daten zur Bekämpfung von Geldwäsche von Ihren Händlern zu
            erfassen.
          </li>

          <li>
            <strong>Zahlungsverfolgung</strong> - Da Ihre Händler keinen Zugang zum GoCardless-Dashboard haben, haben Sie ihnen umfassende
            Reporting-Funktionen bereitzustellen.
          </li>

          <li>
            <strong>Mandatsseiten</strong> - Innerhalb der White-Label-Integration ist es unwahrscheinlich, dass Sie oder Ihre Händler
            unsere GoCardless-Mandatsseiten verwenden möchten. Daher müssen diese selbst erstellt werden, und wenn Sie Zahlungen über
            verschiedene Lastschriftverfahren einziehen möchten, müssen sie zudem die Vorgaben jedes Verfahrens erfüllen.
          </li>
        </ul>
      </Translation>
    );
  }
}
