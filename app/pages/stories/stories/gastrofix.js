import React from 'react';
import StoryPageNewDe from '../story-page-new.de';

export default class StoriesGastrofix extends React.Component {
  displayName = 'StoriesGastrofix'

  render() {
    return (
      <StoryPageNewDe
        title='Mit der Spezialisierung von GoCardless auf das SEPA Lastschriftverfahren erhalten wir ein Produkt, das ideal auf unsere Bedürfnisse abgestimmt ist.'
        author='Reinhard Martens'
        position='COO'
        company='Gastrofix GmbH'
        benefits='„Gastrofix“ als Empfänger auf dem Kontoauszug der Kunden, einheitliche internationale Anwendung, Anbindung an Zuora.'
        bgimgUrl='url(/images/stories/story-images/gastrofix/hero-gastrofix.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/gastrofix-logo.png'
        sidebarServices='iPad/Cloud basiertes Kassensystem'
        sidebarEmployees='100 Mitarbeiter'
        sidebarPreviousProvider='Lokale Banken'
        sidebarTimeSaved='Kaufmännische Abteilung wird von unnötigen Verwaltungstätigkeiten entlastet'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.gastrofix.com/' className='u-link-color-p u-text-underline'>Gastrofix</a> stellt Gastronomen ein
            revolutionäres, cloud-basiertes Kassensystem zur Verfügung, das bereits auf über 10.000 Kassen in Restaurants, Bars, Kantinen,
            Hotels, Bäckereien und Franchise-Ketten eingesetzt wird. Das Berliner Unternehmen ist in Deutschland, Österreich, Schweiz,
            Niederlande, Norwegen, Spanien und USA im Einsatz und expandiert weiter.
          </p>
          <p className='story-page__quote'>
            Wir legen den Fokus auf starkes, nachhaltiges Wachstum unseres Unternehmens, daher sind wir darauf angewiesen,
            sämtliche internen Prozesse so schlank und effizient wie möglich zu gestalten.
          </p>
          <p className='para'>
            Um die kaufmännische Abteilung von überflüssigen manuellen Prozessen zu befreien und die Abrechnungsprozesse und Zahlungen zu
            automatisieren, hat Gastrofix das Subscription Management Tool Zuora zusammen mit GoCardless eingeführt.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/gastrofix/Gastrofix-story-text.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            GoCardless und Zuora helfen Prozesse zu automatisieren
          </h2>
          <p className='para'>
            Vor der Einführung von GoCardless und Zuora musste sich das Team von Gastrofix in den verschiedenen Ländern mit den
            unterschiedlichen Anforderungen an die lokale Finanzbuchhaltung und das Bankenwesen auseinandersetzen. Folglich hat
            Gastrofix mit vielen unterschiedlichen Buchhaltungsprogrammen und mehreren regionalen Banken gearbeitet.
          </p>
          <p className='para'>
            Zuora stellt für Gastrofix nun eine Lösung dar, mit der das Team die Abrechnung über Ländergrenzen hinweg vereinheitlichen
            kann. “Zudem ist GoCardless auf SEPA Zahlungen spezialisiert, wodurch wir ein exzellentes Produkt, das ganz auf unsere
            Bedürfnisse ausgerichtet ist, bekommen”, sagt Reinhard Martens, COO Gastrofix.
          </p>
          <p className='para'>
            Die nahtlose Verknüpfung zwischen Zuora und GoCardless bedeutet, dass die Mitarbeiter nur ein System pflegen müssen.
            Kundeninformationen, die in Zuora angelegt werden, werden automatisch an GoCardless übertragen. Zahlungsinformationen,
            die von GoCardless erfasst werden, werden gleichzeitig in  Zuora abgebildet. Rückerstattungen und der wiederholte Einzug
            fehlgeschlagener Zahlungen können so direkt aus Zuora angestoßen werden.
          </p>
          <p className='story-page__quote'>
            Die Integration von GoCardless in Zuora hat auf Anhieb ohne nennenswerte Schwierigkeiten funktioniert.
            Der Support seitens GoCardless war hervorragend.
          </p>
          <p className='para'>
          Dass GoCardless keine Gebühren für Rücklastschriften oder fehlgeschlagene Zahlungen erhebt, hilft dem dynamischen Unternehmen,
          seine Finanzplanung akkurat zu gestalten.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Expansionspläne und Skalierbarkeit
          </h2>
          <p className='para'>
            Gastrofix stellt mit dem GoBD konformen iPad Kassensystem eine Lösung zur Verfügung, mit der seine Kunden wachsen können,
            angefangen bei einer einfachen Einplatz-Kasse bis hin zu komplexen Filiallösungen für Ketten und Systemgastronomen.
            Skalierbarkeit war gleichermaßen bei der Wahl für Zuora und GoCardless ein ausschlaggebendes Argument.
          </p>
          <p className='para'>
            Für die nächsten 18 Monate wird sich Gastrofix weiter auf seine Expansion fokussieren, und Zuora und GoCardless in den
            anstehenden internationalen Märkten ausrollen.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/gastrofix/gastrofix-produkt.jpg' alt='' />
          </div>
        </div>
      </StoryPageNewDe>
    );
  }
}
