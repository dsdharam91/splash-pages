import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class PartnersGuideChargebacksDe extends React.Component {
  displayName = 'PartnersGuideChargebacksDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>Rückbuchungen, Rückerstattungen und fehlgeschlagene Lastschriften</h2>

        <h3>Wie funktionieren Rückbuchungen?</h3>

        <p>
          Kunden haben ein Recht auf Rückbuchungen gemäß den Vorschriften des britischen sowie des SEPA-Lastschriftverfahrens.
          Nähere Informationen zum SEPA-Lastschriftverfahren finden
          Sie <a href='https://gocardless.com/de/handbuch/sepa/kundenschutz/' target='_blank'>hier</a> und zum britischen
          Lastschriftverfahren auf Englisch <a href='https://gocardless.com/direct-debit/guarantee/' target='_blank'>hier</a>.
        </p>

        <h3>Wie lange haben Kunden Anspruch auf Rückbuchung?</h3>

        <p>
          Im Rahmen des SEPA-Lastschriftverfahrens können Kunden ihre Ansprüche innerhalb von 13 Monaten nach dem Lastschrifteinzug
          geltend machen. Innerhalb der ersten acht Wochen nach Lastschrifteinzug haben Kunden Anspruch auf Rückbuchung von
          autorisierten Lastschriften. Innerhalb von 13 Monaten nach Lastschrifteinzug haben Kunden ausschließlich Anspruch auf
          Rückbuchung von nicht autorisierten Lastschriften. Das britische Lastschriftverfahren sieht keine Frist für die
          Geltendmachung von Rückbuchungsansprüchen vor.
        </p>

        <p>
          Unsere Daten zeigen, dass über drei Viertel aller Rückbuchungen in den ersten acht Wochen nach Lastschrifteinzug geltend
          gemacht werden.
        </p>

        <h3>Was geschieht mit dem Rückbuchungsbetrag?</h3>

        <p>
          Der Kunde fordert eine Rückbuchung bei seiner Bank, die ihm den Betrag zurückerstattet. Die Bank des Kunden fordert
          daraufhin diesen Betrag vom Zahlungsdienstleister zurück. In den meisten Fällen wird dieser Betrag aus dem
          GoCardless-Kundengeldkonto ausgezahlt. GoCardless fordert den Betrag wiederum von jenem Händler zurück, dem der Betrag
          ausgezahlt wurde, indem GoCardless ihn von künftigen Auszahlungen einbehält.
        </p>

        <h3>Wer haftet für Rückbuchungen?</h3>

        <p>
          Im Rahmen der unterschiedlichen Lastschriftverfahren übernimmt der Zahlungsdienstleister die Haftung für Rückbuchungen.
          In den meisten Fällen ist dies GoCardless. Wir behalten den Rückbuchungsbetrag von späteren Auszahlungsbeträgen ein.
        </p>

        <p>
          Im Fall der White-Label-Integration haftet der Partner, wenn wir Rückbuchungsbeträge nicht von Seiten des Händlers erstatten
          können.
        </p>

        <h3>Gewähren Sie Rückerstattungen?</h3>

        <p>
          Ja - Händler können entweder volle oder Teilbeträge über GoCardless zurückerstatten. Wir erstatten die entsprechenden Beträge
          sofort per Banküberweisung an Kunden zurück und ziehen diese von den nächsten Auszahlungen ab. Wir erheben keine Gebühren
          auf Rückerstattungen. Sehen Sie sich unsere
          API-Dokumentationen <a href='https://developer.gocardless.com/pro/#core-endpoints-refunds' target='_blank'>hier</a> an.
        </p>

        <h3>Was passiert, wenn das Kundenkonto zum Zeitpunkt des Lastschrifteinzugs nicht ausreichend gedeckt ist?</h3>

        <p>
          In fast allen Fällen schlägt die Lastschrift fehl und GoCardless sendet einen Webhook mit der Beschreibung des Grunds für die
          fehlgeschlagene Lastschrift zurück. Nähere Informationen dazu finden
          Sie <a href='https://developer.gocardless.com/pro/#webhooks-examples' target='_blank'>hier</a>.
        </p>
        </Translation>
    );
  }
}
