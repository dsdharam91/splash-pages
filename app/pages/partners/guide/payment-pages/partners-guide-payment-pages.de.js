import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuidePaymentPagesDe extends React.Component {
  displayName = 'PartnersGuidePaymentPagesDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>Mandatsseiten</h2>

        <h3>Wie sehen die von Ihnen gehosteten Mandatsseiten aus?</h3>

        <p>
          <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>Hier</a> können Sie sich eine von uns gehostete
          Beispiel-Mandatsseite ansehen. Sie können an die Anforderungen jedes Lastschriftverfahrens angepasst werden, was für Sie bedeutet,
          dass, wenn Sie Zahlungen über BACS, SEPA oder andere Verfahren einziehen, Sie nicht für jedes Verfahren neue Mandatsseiten
          erstellen müssen.
        </p>

        <h3>In welcher Sprache ist die Mandatsseite verfügbar?</h3>

        <p>
          Unsere Mandatsseiten werden automatisch ins Englische, Niederländische, Französische, Deutsche, Italienische, Portugiesische
          und Spanische übersetzt. Sie werden automatisch an die Sprache des vom Kunden verwendeten Browsers angepasst.
        </p>

        <h3>Was benötigen Kunden, um ein Lastschriftmandat über GoCardless einzurichten?</h3>

        <p>
          Unsere Plattform basiert auf den existierenden Lastschriftsystemen von Bank zu Bank (SEPA in der Eurozone, BACS im Vereinigten
          Königreich). Kunden müssen lediglich ihren Account-Namen, Kontonummer und Bankleitzahl zum Erstellen eines Mandats
          eingeben. <a href='https://pay-sandbox.gocardless.com/AL000000AKFPFF' target='_blank'>Hier</a> können
          Sie sich eine Beispiel-Mandatsseite ansehen.
        </p>

        <p>
          Gleichermaßen müssen Händler (beim Einziehen von Lastschriften) nur ihre Kontonummer und Bankleitzahl eingeben und können
          sofort mit dem Einziehen von Lastschriften beginnen (automatisierte Verifizierung/Kundenidentitätsprüfungen erfolgen,
          bevor wir Beträge auszahlen). <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'>Hier</a> können
          Sie sehen, wie das Einrichten eines Accounts aussieht.
        </p>

        <h3>Kann ich die Mandatsseiten auf meiner Website hosten?</h3>

        <p>
          Ja, sowohl bei Nutzung der White-Label-Integration als auch der OAuth-Integration können Sie und Ihre Händler
          Ihre eigenen Mandatsseiten entwerfen. Für weitere Details, werfen Sie einen Blick auf die Kapitel
          zu <Link to='partners_guide_app_integration'>App-Integration</Link> und&nbsp;
          <Link to='partners_guide_white_label_integration'>White-Label-Integration</Link>.
        </p>

        <p>
          Beachten Sie jedoch, dass diese die BACS- und SEPA-Vorgaben
          erfüllen. <a href='https://developer.gocardless.com/pro/#appendix-compliance-requirements' target='_blank'>Hier </a>
          finden Sie nähere Informationen zur Erfüllung der Vorgaben.
        </p>

        <p>
          Jede entworfene Mandatsseite muss von uns autorisiert werden, bevor sie live verwendet wird.
        </p>

        <h3>Bieten Sie iFrames?</h3>

        <p>
          Nein - Wir bieten keine iFrames für Ihre Mandatsseiten, da wir die Zuverlässigkeit
          sowie die Sicherheit von iFrames als unzureichend erachten.
        </p>

        <h3>Bieten Sie Sicherheitsprüfungen in zwei Schritten, z. B. per SMS?</h3>

        <p>
         Nein - Wir bieten keine zweistufigen Sicherheitsprüfungen, da die schlechte Auswirkung auf die Konversionsrate
         erfahrungsgemäß kleine Vorteile hinsichtlich der Reduzierung von Rückbuchungen überwiegt.
        </p>
      </Translation>
    );
  }
}
