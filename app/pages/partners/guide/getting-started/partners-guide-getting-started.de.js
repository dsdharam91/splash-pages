import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class PartnersGuideGettingStartedDe extends React.Component {
  displayName = 'PartnersGuideGettingStartedDe'

  render() {
    return (
      <Translation locales='de'>
        <h2>Erste Schritte</h2>

        <h3>Entwickeln Sie Ihre Integration</h3>

        <p>
          Wenn Sie sich für die App-Integration oder die White-Label-Integration entschieden haben, sollten Sie sich
          unsere <a href='https://developer.gocardless.com/pro/#overview' target='_blank'>API-Dokumentation</a> sorgfältig
          durchlesen. Darin finden Sie spezielle Abschnitte
          zur <a href='https://developer.gocardless.com/pro/#guides-oauth' target='_blank'>App-Integration</a> (Nutzung von
          OAuth) sowie spezielle Abschnitte zur <a
          href='https://developer.gocardless.com/pro/#whitelabel-partner-endpoints' target='_blank'>White-Label-Integration</a>.
        </p>

        <p>
          <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'>Hier</a> können Sie sofort mit dem Entwickeln
          und Testen unserer API über einen Sandbox-Account beginnen.
        </p>

        <p>
          Wenn Sie Fragen haben, schreiben Sie unserem Entwickler-Support-Team an <Href to='email' itemProp='email' />.
          Bei technischen Fragen helfen Ihnen unsere Entwickler montags bis freitags von 10-19 Uhr gerne weiter.
        </p>

        <h3>Testen Sie Ihre Demo-Version mit uns und gehen Sie in den Echtbetrieb</h3>

        <p>
          Sobald Sie die erste Entwicklungs- und Testrunde in unserer Sandbox-Umgebung abgeschlossen haben, schreiben Sie uns
          an <Href to='partners_email' itemProp='email' />, um uns Ihre Integration zu demonstrieren, so dass wir eine optimale
          Beratung und Unterstützung während Ihrer Entwicklung sicherstellen können.
        </p>

        <p>
          Sobald beide Seiten einverstanden sind, schalten wir Ihren Account frei und Sie können in den Echtbetrieb gehen.
        </p>

        <h3>Erstellen Sie ein Handbuch, das Ihren Kunden bei der Nutzung Ihrer neuen Integration hilft</h3>

        <p>
          Ihr Support-Handbuch sollte eine Übersicht über die Integration, Einrichtungsdetails, eine allgemeine Benutzeranleitung sowie
          FAQs enthalten. Diese Informationen sollten leicht für Kunden zugänglich sein und auch für GoCardless, um Kunden darauf verweisen
          zu können. Sollten Sie Änderungen an der Integration vornehmen, stellen Sie sicher, dass Ihr Handbuch aktualisiert wurde!
        </p>

        <p>
          Wenn die Einrichtung aus mehreren Schritten besteht, empfehlen wir, einige kurze Screencasts von 1-3 Min. bereitzustellen.
        </p>

        <h3>Werben Sie für die Partnerschaft!</h3>

        <p>
          Wir raten Ihnen, bei vorhandenen und potenziellen Kunden für Ihre neue Zahlungsfunktion über Ihre Webseite, per E-Mail,
          soziale Netzwerke, Blogs und bei Veranstaltungen zu werben.
        </p>
      </Translation>
    );
  }
}
