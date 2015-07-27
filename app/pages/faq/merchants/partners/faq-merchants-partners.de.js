import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsPartnersDe extends React.Component {
  displayName = 'FaqMerchantsPartnersDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Partner</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Was ist ein Partner?
        </h3>
        <p className='para'>
          Ein Partner ist jemand, der die GoCardless API nutzt, um mehrere GoCardless Konten für Händler zu kreieren und zu verwalten.
          Eine Partnerschaft mit GoCardless erlaubt es Ihren Kunden, Lastschriftzahlungen innerhalb Ihrer Systeme zu kreieren.
        </p>
        <p className='para'>
          Für weitere Informationen, werfen Sie einen Blick auf unseren <a href='https://developer.gocardless.com/pro/#partner-guide'
          className='u-link-color-p u-text-underline'>Partner API Leitfaden</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Welche Partner nutzen GoCardless bereits?
        </h3>
        <p className='para'>
          GoCardless ist bereits in viele verschiedene Verwaltungssoftwares und beliebte Services integriert, darunter z.B.:
        </p>
        <ul className='list'>
          <li>
            <a href='https://www.cobot.me/spaces' target='_blank' className='u-link-color-p u-text-underline' rel='nofollow'>
              Cobot
            </a>
          </li>
          <li>
            <a href='https://goteamup.com/de/' target='_blank' className='u-link-color-p u-text-underline' rel='nofollow'>
              teamup
            </a>
          </li>
          <li>
            <a href='https://de.zuora.com/' target='_blank' className='u-link-color-p u-text-underline' rel='nofollow'>
              Zuora
            </a>
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Kann ich einen Revenue Share erhalten?
        </h3>
        <p className='para'>
          Ja - wir bieten unseren Partnern einen Revenue Share von 10% der Zahlungsgebühren.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wie werde ich Partner?
        </h3>
        <p className='para'>
          Schicken Sie eine Email an <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' /> mit einer kurzen Beschreibung Ihres Services und wie Sie GoCardless verwenden möchten, und
          wir werden uns so bald wie möglich bei Ihnen melden.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wie funktioniert es für meine Nutzer?
        </h3>
        <p className='para'>
          Eine Partner Integration erlaubt es Ihren Nutzern, schnell und einfach einen GoCardless Account zu kreieren.
        </p>
        <p className='para'>
          Dieser Account wird dann mit Ihrem Master GoCardless Account verlinkt, sodass Sie die Accounts Ihrer Nutzer direkt
          verwalten können und Zahlungen in deren Namen kreieren und verwalten.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Kann ich Zahlungsinformationen in meinem Service anzeigen?
        </h3>
        <p className='para'>
          Ja - GoCardless bietet Webhooks, die genutzt werden können, um Händler über alle Änderungen
          in ihrem Account in Echtzeit zu informieren. Ein sehr hilfreiches Beispiel ist z.B. die Benachrichtigung darüber,
          wenn eine Rechnung bezahlt wurde.
        </p>
        <p className='para'>
          Sie können in unserem <a href='https://developer.gocardless.com/pro/#webhook'
          className='u-link-color-p u-text-underline'>Webhook Leitfaden</a> mehr über die Verwendung und die Art von Webhooks erfahren.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Kann ich die Zahlungsseiten auf meiner eigenen Seite hosten?
        </h3>
        <p className='para'>
          Nein - wir hosten die Zahlungsseiten sicher auf unserer eigenen Seite, um sicherzustellen,
          dass sie mit den SEPA Richtlinien konform sind.
        </p>
        <p className='para'>
          Sie können Ihre Kunden leicht auf unsere Seite weiterleiten und nach Bestätigung der
          Angaben wieder zurück auf Ihre Seite leiten.
          Alternativ können Sie diesen Prozess auch als Pop-Up von Ihrer Seite implementieren.
        </p>
        <p className='para'>
          Um es so leicht wie möglich für Ihre Kunden zu machen, können Sie uns Angaben zu Ihren Kunden schon über die API zuspielen,
          sodass wir das Zahlungsformular mit den jeweiligen Daten füllen können.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Bietet GoCardless auch iFrames an?
        </h3>
        <p className='para'>
          Nein - wir bieten keine iFrames für unsere Zahlungsseiten an, da wir nicht 100% überzeugt sind von der Verlässlichkeit sowie
          Sicherheit von iFrames.
        </p>

      </Translation>
    );
  }
}
