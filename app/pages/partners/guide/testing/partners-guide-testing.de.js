import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class PartnersGuideTestingDe extends React.Component {
  displayName = 'PartnersGuideTestingDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>Entwickeln und Testen</h2>

        <h3>Wo finde ich die API-Dokumentation?</h3>

        <p>
          Unsere API-Dokumentation finden Sie  <a href='https://developer.gocardless.com/pro/' target='_blank'>hier</a>.
          Spezielle Anleitungen für unsere Anwendungsintegration unter Verwendung von OAuth finden Sie
          <a href='https://developer.gocardless.com/pro/#guides-oauth' target='_blank'>hier</a>.
        </p>

        <h3>Bieten Sie einen Sandbox-Account zum Testen meiner Integration?</h3>

        <p>
          Ja - <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'>Hier</a> können Sie Ihren Sandbox-Account sofort einrichten.
        </p>

        <h3>Welche Programmiersprachen kann ich verwenden?</h3>

        <p>
          Unsere API liegt im RESTful-Stil vor und ist im JSON-Schema veröffentlicht. Wir veröffentlichen ebenso Kundenbibliotheken,
          um unseren Entwicklern zu helfen - diese finden Sie <a href='https://developer.gocardless.com/pro/#overview-client-libraries' target='_blank'>hier</a>.
        </p>

        <h3>Wie erreichen ich den technischen Support?</h3>

        <p>
          Schreiben Sie uns Ihr Anliegen per E-Mail an <Href to='email' itemProp='email' />. Bei technischen Fragen helfen Ihnen unsere Entwickler montags bis
          freitags von 10-19 Uhr gerne weiter.
        </p>

        <h3>Wie stelle ich von der Test-Version auf den Echtbetrieb um?</h3>

        <p>
          Sobald Sie Ihre Integration in unserer Sandbox-Umgebung getestet haben, schreiben Sie uns an <Href to='partners_email' itemProp='email' /> und
          demonstrieren Sie uns Ihre Integration. Wenn alles problemlos läuft, schalten wir Ihren Account frei. 
        </p>
        </Translation>
    );
  }
}
