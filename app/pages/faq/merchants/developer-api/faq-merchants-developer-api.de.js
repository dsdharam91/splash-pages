import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsDeveloperApiDe extends React.Component {
  displayName = 'FaqMerchantsDeveloperApiDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Entwickler API</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wozu kann ich die API verwenden?
        </h3>
        <p className='para'>
          Unsere REST API erlaubt es Entwicklern auf einfachstem Weg mit GoCardless zu integrieren. Lernen Sie dazu
          mehr in unserer <Href to='documentation_link' className='u-link-color-p u-text-underline'>Dokumentation</Href>.
        </p>
        <p className='para'>
          Sie können GoCardless integrieren, um Lastschriften von Ihren Kunden bequem über Ihr CRM Tool oder
          Ihre Webseite einzuziehen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Welche Programmiersprachen unterstützt GoCardless für die Integration?
        </h3>
        <p className='para'>
           Wir sind mit allen existierenden Programmiersprachen kompatibel, dank der Verwendung der REST Standards.
           Darüber hinaus bieten wir für die gängigen Programmiersprachen Client Libraries zur Unterstützung Ihrer
           Integration an, darunter Ruby, PHP und Java. Wir fügen regelmäßig neue Libraries hinzu.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Kann ich die Zahlungsseiten auch auf meiner Webseite hosten?
        </h3>
          <p className='para'>
            Ja, allerdings nur mit GoCardless Pro. Dann können Sie Ihr eigenes Design anwenden und sie direkt
            auf Ihrer eigenen Webseite hosten. Beachten Sie allerdings, dass es hier gewisse SEPA Regeln gibt, die
            Sie bei der Erstellung Ihrer eigenen Zahlungsseiten einhalten müssen.
          </p>
          <p className='para'>
            Im Falle unseres Standard GoCardless Produktes, hosten wir Ihre Zahlungsseiten sicher auf unserer
            Webseite. Natürlich sind diese Seiten konform mit den SEPA Regelwerken.
          </p>
          <p className='para'>
            In diesem Fall können Sie Ihre Kunden zu der von uns gehosteten Zahlungsseite leiten und nach erfolgreichem
            Ausfüllen des Formulars leiten wir Ihre Kunden wieder zurück auf Ihre Seite.
          </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Sind auch iFrames möglich?
        </h3>
        <p className='para'>
          Nein, wir bieten keine Lösungen für die Zahlungsseiten via iFrames an. Einige unserer Partner allerdings,
          z.B. Zuora, stellen die Zahlungsseiten als iFrames zur Verfügung. Wenn Sie GoCardless Pro benutzen,
          bieten wir Ihnen einen Javascript Flow, der es Ihnen erlaubt, die Zahlungen zu veranlassen ohne die
          Bankdetails Ihrer Kunden auf Ihrem eigenen Server zu speichern.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Welche Informationen sind über die API verfügbar?
        </h3>
        <p className='para'>
          GoCardless bietet Ihnen Webhooks, die Sie über alle Änderungen und Updates in Ihrem GoCardless Account informieren.
          Z.B. werden Sie in Echtzeit darüber informiert, wenn sich der Status einer Zahlung oder eines Mandats ändert.
        </p>
        <p className='para'>
          Sie können in unserer <a href='https://developer.gocardless.com/pro/#webhooks-overview'
          className='u-link-color-p u-text-underline'>Webhook Dokumentation</a> mehr über die Verwendung von Webhooks erfahren.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Ich brauche Unterstützung, wie kann ich technische Hilfe bekommen?
        </h3>
        <p className='para'>
          Sie können uns jederzeit eine E-Mail an <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' /> schicken. 
        </p>

      </Translation>
    );
  }
}
