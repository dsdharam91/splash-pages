import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesStudyClever extends React.Component {
  displayName = 'StoriesStudyClever'

  render() {
    return (
      <StoryPageNew
        title='Durch die Zusammenarbeit mit GoCardless können unsere Nutzer schnell und bequem bezahlen, ohne unsere Website verlassen zu müssen.'
        author='David Czaniecki'
        position='Gründer & Geschäftsführer'
        company='study clever GmbH'
        benefits='Automatisierung durch Rest-API, "study clever" auf dem Kontoauszug der Kunden, Verwendung in mehreren Portalen gleichzeitig.'
        bgimgUrl='url(/images/stories/story-images/study-clever/hero-study-clever-gocardless.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/study-clever-logo.png'
        sidebarServices='Online-Steuererklärung'
        sidebarEmployees='10 Mitarbeiter'
        sidebarPreviousProvider='Keiner'
        sidebarTimeSaved='Maximal'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.studentensteuererklaerung.de' className='u-link-color-p u-text-underline'>studentensteuererklärung.de</a> ist
            die erste deutsche Plattform, die Studenten & Absolventen eine speziell auf ihre Bedürfnisse zugeschnittene Online-Steuererklärung
            ermöglicht. Ein intuitiv zu bedienendes Steuer-Tool navigiert die Nutzer anhand einfacher Fragen und mit vielen Hilfen und Tipps
            durch ihre Steuererklärung, die am Ende per Mausklick direkt an das Finanzamt gesendet werden kann. Mittlerweile hat das Berliner
            Unternehmen auch für weitere Zielgruppen spezialisierte Online-Tools zur Erstellung von Steuererklärungen entwickelt.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/study-clever/gruender-study-clever-gocardless.jpg' alt='gruuender-study-clever-gocardless' />
          </div>
          <p className='para'>
            Die Idee zur Entwicklung eines spezialisierten Steuer-Tools für Studenten hatten die Gründer bereits während der eigenen
            Studienzeit. „Als ich meine erste Steuererklärung machen wollte, bereitete mir die Flut an unverständlichen Steuerformularen so
            manche Probleme“, erinnert sich Geschäftsführer David Czaniecki. Eine abgabefertige Steuererklärung brachte der gebürtige
            Hamburger zwar schließlich zustande. Neben einer erfreulichen Steuererstattung brachte der erste Ausflug ins deutsche Steuersystem
            aber vor allem die Erkenntnis: „Das muss doch auch einfacher gehen!“ Mit der Entwicklung von mittlerweile acht Steuer-Tools haben
            die Gründer längst bewiesen, dass eine Steuererklärung keine komplizierte Angelegenheit sein muss.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Sehr einfache Integration der GoCardless API
          </h2>
          <p className='para'>
            Nach einer kostenlosen Testphase musste für studentensteuererklärung.de eine Zahlungsmethode gefunden werden, die die
            Nutzererfahrung nicht verschlechtert. Da die Datensicherheit bei dem hochsensiblen Thema „Steuern“ im Fokus steht, sollten die
            Nutzer auf keinen Fall auf eine externe Website weitergeleitet werden. Die Einbindung von GoCardless stellte hierfür eine
            tolle und sichere Lösung dar.
          </p>
          <p className='story-page__quote'>
            Um unser Online-Angebot weiter zu verbessern, sind wir ständig darauf bedacht, den Aufwand für unsere Nutzer zu reduzieren.
            Da unsere Nutzer ohnehin ihre Bankdaten für das Finanzamt hinterlegen, konnten wir den Zahlungsprozess auf einen Klick reduzieren.
          </p>
          <p className='para'>
            study clever kreierte im Zuge der Integration der GoCardless API eigene Zahlungsseiten, auf der Kunden ihr Mandat erteilen können.
            Durch die Nutzung der GoCardless-Sandbox konnte study clever schon nach wenigen Tagen den kompletten Zahlungsprozess testen.
            Der Wechsel zum Live-Betrieb war dann nur noch eine Sache von Minuten.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Automatisierung aller Bereiche
          </h2>
          <p className='para'>
            Für study clevers Kunden ist die Bestätigung der Zahlung intuitiv und leicht verständlich gestaltet. Für das Team ist dank der
            GoCardless API der Zahlungsverkehr in Echtzeit nachzuvollziehen. Diese Transparenz wird auch an den Kunden weitergegeben: study
            clever kann seine Nutzer jederzeit über den Status einzelner Zahlungen informieren.
          </p>
          <p className='story-page__quote'>
            Durch den reibungslosen Zahlungsverkehr mit GoCardless gewinnen wir viel Zeit, um uns auf weitere wichtige Themen
            konzentrieren zu können.
          </p>
          <p className='para'>
            Das Automatisieren von Rechnungserstellung und Zahlungseinzug sowie die Einbindung ihres eigenen Mahnverfahrens bedeutet für
            study clever, dass sie sich viel besser auf ihr eigentliches Produkt fokussieren können. Sollte ein Kunde sein SEPA-Mandat
            zurückziehen, wird study clever umgehend darüber informiert und kann in Einzelfällen auch individualisierte
            Zahlungsaufforderungen verschicken. Falls einem Kunde eine Rückzahlung zusteht, kann das leicht in GoCardless ausgeführt werden.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/study-clever/study-clever-gocardless.jpg' alt='study-clever-gocardless' />
          </div>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Maximum an Flexibilität
          </h2>
          <p className='story-page__quote'>
            Da wir unseren Kunden in Zukunft auch andere Zahlungsmodelle anbieten wollen, ist es für uns wichtig, ein flexibles
            Zahlungstool nutzen zu können.
          </p>
          <p className='para'>
            Mittlerweile ist die Einbindung von GoCardless auf 6 Portalen aktiv, darunter z.B. www.bundeswehrsteuererklaerung.de und
            www.azubisteuererklaerung.de, mit vielen weiteren in Aussicht. Das Team plant in Zukunft auch weitere Zahlungsmodelle,
            wie z.B. Abonnements, anzubieten. Mit GoCardless ist study clever bestens  aufgestellt, um auch in Zukunft den Einzug ihrer
            Lastschriften flexibel zu gestalten.
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
