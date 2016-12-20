import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsSigningUpDe extends React.Component {
  displayName = 'FaqMerchantsSigningUpDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Anmelden</h2>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Wie kann ich mich für GoCardless anmelden?
        </h3>
        <p className='para'>
          Sie können sich innerhalb weniger Minuten für
          einen <Href to='signup.path' className='u-link-color-p u-text-underline'>GoCardless</Href> Account
          registrieren und anfangen die ersten Zahlungen einzuziehen.
        </p>
        <p className='para'>
          Als Entwickler können Sie
          sich <a href='https://manage-sandbox.gocardless.com/registrations/new' className='u-link-color-p u-text-underline'>hier</a> für
          einen Testaccount anmelden, um unsere API zu integrieren.
        </p>
        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Welche Angaben muss ich zur Anmeldung machen?
        </h3>
        <p className='para'>
          Wir benötigen eine Auswahl persönlicher Daten, sodass wir Ihre Identität verifizieren können. Außerdem brauchen wir
          die wichtigsten Angaben zum Unternehmen oder der Organisation, für die Sie Zahlungen einziehen möchten.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Kann ich mich auch anmelden, falls mein Unternehmen nicht im Handelsregister eingetragen ist?
        </h3>
        <p className='para'>
          Ja - GoCardless steht sowohl eingetragenen Unternehmen als auch Stiftungen und Gewerben offen.
        </p>
        <p className='para'>
          Falls Sie nicht im Handelsregister eingetragen sind, dann geben Sie bei der Anmeldung bitte "Individual" an.
          Keine Sorge, das hat keinerlei Konsequenzen für die Funktionen Ihres GoCardless Accounts.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Was mache ich als Entwickler?
        </h3>
        <p className='para'>
          Entwickler sollten sich ganz normal <Href to='signup.path' className='u-link-color-p u-text-underline'>anmelden</Href>. Sobald
          Sie angemeldet sind, können Sie Ihren Entwickler Account freischalten. Unsere API Dokumentation
          ist <Href to='api_reference_link' className='u-link-color-p u-text-underline'>hier</Href> verfügbar.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Gibt es irgendwelche Verbindlichkeiten?
        </h3>
        <p className='para'>
          Nein. Sie können GoCardless nach der Anmeldung ohne jede Verbindlichkeit nutzen. Mit der Anmeldung sagen Sie nur,
          dass Sie das Produkt gerne ausprobieren möchten. Sie können jederzeit aufhören, GoCardless zu benutzen.
        </p>

      </Translation>
    );
  }
}
