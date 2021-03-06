import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsHowItWorksDe extends React.Component {
  displayName = 'FaqMerchantsHowItWorksDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Wie es funktioniert</h2>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Wann erhalte ich meine Zahlungen?
        </h3>
        <p className='para'>
          Wir zahlen Ihnen automatisch innerhalb von <strong>3 Geschäftstagen</strong> nach Erhalt der Zahlungen Ihrer
          Kunden das Geld auf das von Ihnen angegebene Bankkonto aus.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Welche Arten von Zahlungen kann ich von meinen Kunden einziehen?
        </h3>
        <p className='para'>
          Sie können einmalige und wiederkehrende Lastschriften einziehen, letztere dürfen auch im Betrag variieren. Das funktioniert
          sowohl in der freundlichen Benutzeroberfläche als auch über die API.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Wie läuft der Zahlungsprozess ab?
        </h3>
        <ul className='list'>
          <li>
            Mit Ihrem Online Dashboard können Sie ganz einfach innerhalb von zwei Klicks ein Mandat für das Einziehen von
            Lastschriften von Ihren Kunden erfragen.
          </li>
          <li>
            Wir schicken Ihren Kunden dann einen Link zum Zahlungsformular, wo Ihre Kunden Ihnen ein solches Mandat
            auf sicherem Weg erteilen.
          </li>
          <li>
            Sobald dieses Mandat von Ihren Kunden erteilt wurde, können Sie automatisch Zahlungen kreieren und
            einziehen, z.B. indem Sie eine Abonnementzahlung für Ihren Kunden registrieren.
          </li>
          <li>
            Wir schicken Ihrem Kunden vor jeder Zahlung die nötige Vorabankündigung.
          </li>
        </ul>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Wie können meine Kunden eine Zahlung autorisieren?
        </h3>
        <p className='para'>
          Ihre Kunden können Sie elektronisch oder über ein Papiermandat autorisieren
          Zahlungen von ihnen einzuziehen, indem Sie Ihnen ein Mandat ausstellen und Ihre Bankdaten darin angeben.
          Für das elektronische Mandat können Sie entweder die von GoCardless gehosteten Zahlungsseiten verwenden
          oder im Falle von GoCardless Pro Ihre eigenen benutzen.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Kann ich Zahlungen ganz präzise für ein bestimmtes Datum ansetzen?
        </h3>
        <p className='para'>
          Ja - Sie können sich sehr einfach für einen Tag, ein Datum, die Intervalle und Dauer von (wiederkehrenden)
          Zahlungen entscheiden.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Kann ich eine Zahlung oder eine Reihe wiederkehrender Zahlungen ändern, nachdem sie bereits kreiert wurde?
        </h3>
        <p className='para'>
          Ja, solange die Zahlung noch nicht zu den Banken geschickt wurde, können Sie jederzeit eine eingetragene Zahlung
          abändern oder löschen. Innerhalb Ihres Dashboards können Sie jede Zahlung und deren Status in Echtzeit verfolgen.
          Hier können Sie auch die Änderungen innerhalb weniger Sekunden vornehmen.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Woher weiß ich, dass ich Zahlungen erhalten habe?
        </h3>
        <p className='para'>
          Das GoCardless Online Dashboard bietet Ihnen alle Informationen zu Ihren Zahlungen und Kunden in Echtzeit.
          So können Sie zu jeder Zeit den Status Ihrer Zahlungen überprüfen.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Kann GoCardless mein Konto limitieren?
        </h3>
        <p className='para'>
          Es gibt wenige Situationen, in denen wir gezwungen sind, Ihr GoCardless Konto zu restringieren, diese sind:
        </p>
        <ul className='list'>
          <li>Wenn wir glauben, dass Ihre Anmelde-Informationen unsicher geworden sind.</li>
          <li>Wenn wir glauben, dass Ihr Konto einem Betrug oder einer unautorisierten Verwendung zum Opfer geworden ist.</li>
          <li>Wenn wir von Gesetzes wegen dazu angehalten sind.</li>
        </ul>
        <p className='para'>
          Falls wir dies jemals tun müssen, werden wir Sie natürlich sofort darüber informieren. Es wird zudem
          immer jemanden in unserem Team geben, mit dem Sie über die Situation sprechen können und der Ihnen
          helfen kann, diese so schnell es geht zu beheben.
        </p>
      </Translation>
    );
  }
}
