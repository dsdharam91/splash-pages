import React from 'react';
import StoryPageNew from '../story-page-new.de';

export default class StoriesPicDrop extends React.Component {
  displayName = 'StoriesPicDrop'

  render() {
    return (
      <StoryPageNew
        title='Wir mussten früher täglich mit Rücklastschriften kämpfen. Das fällt jetzt komplett weg.'
        author='Tobias Friese'
        position='Geschäftsführer'
        company='PicDrop GmbH'
        benefits='Keine Gebühren mehr für Rücklastschriften, dafür eine klare API und Transparenz zu allen Zahlungen in Echtzeit.'
        bgimgUrl='url(/images/stories/story-images/picdrop/picdrop-avatar@2x.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/picdrop-logo.png'
        sidebarServices='Bildübertragung für Fotographen'
        sidebarEmployees='3 Mitarbeiter'
        sidebarPreviousProvider='Anderer deutscher Zahlungsdienstleister'
        sidebarTimeSaved='Mindestens 2 Stunden wöchentlich'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.picdrop.de/' className='u-link-color-p u-text-underline'>PicDrop</a> ist eines der führenden Tools zur
            Bildübertragung. Gegründet in 2012 in Berlin, wird es heute von mehr als 16.000 Fotografen genutzt, um einfach und sicher
            Bilder mit Kunden zu teilen.
          </p>
          <p className='para'>PicDrops Gründer, Andreas Chudowski und Tobias Friese, arbeiten stets daran, ihr Produkt weiter zu verbessern.
          Dabei war der tägliche Kampf mit ihren Lastschriften vor der Einbindung von GoCardless eine unwillkommene Ablenkung. Andreas musste
          die Zahlungen jeden Tag bei ihrer Bank bestätigen, und Tobias hatte regelmäßig mit dem Aufspüren geplatzter Lastschriften
          zu kämpfen.</p>
          <p className='para'>Insbesondere die hohen Gebühren bei Rücklastschriften haben sie und ihre Kunden verzweifeln lassen,
          und regelmäßig zu vollständigen Zahlungsausfällen geführt.</p>
          <p className='story-page__quote'>
            Vorher gab es viele Rückläufer, und dadurch unerwartete zusätzliche Kosten im dreistelligen Bereich.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/picdrop/picdrop-founders.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Mit GoCardless fällt der tägliche Kampf mit den Lastschriften weg
          </h2>
          <p className='para'>
            GoCardless konnte PicDrop helfen viele nervenzehrenden Aufgaben aus dem Alltag zu verbannen.
            Tobias bezeichnet den Start mit GoCardless als "den Moment, an dem wir vergaßen, dass wir einen Zahlungsanbieter haben”. PicDrop konnte
            GoCardless so nahtlos in ihr eigenes Produkt einbauen, dass sämtliche früher manuellen Prozesse nun automatisch laufen, und dem kleinen
            Team so mehr als 2 Stunden pro Woche sparen. Die Integration hat Tobias dabei nicht länger als eine Woche gekostet.
          </p>
          <p className='story-page__quote'>
            Wir sparen mindestens 2 Stunden die Woche und konnten zudem unsere Kosten reduzieren.
          </p>
          <p className='para'>
            Mindestens genauso wichtig ist die Kostenersparnis: mit GoCardless fallen für PicDrop keine Gebühren für
            Rücklastschriften mehr an. Das freut sowohl das Team von PicDrop als auch ihre Kunden, an die sie die hohen Rücklastschriftgebühren
            früher weiter gereicht haben.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Transparenz schafft besseren Kundenservice
          </h2>
          <p className='para'>
            Mit GoCardless kann PicDrop Fehlern durch zum Beispiel inkorrekte Kontodaten besser vorbeugen und
          hat zudem stets Transparenz über den Status einer Zahlung. Im Falle einer Rücklastschrift kann PicDrop mit GoCardless die genauen
          Gründe sehen und so einen viel besseren Support an ihre Kunden geben.
          </p>
          <p className='story-page__quote'>
            Unsere Kunden sind zufriedener, und wir können einen viel besseren Support gewährleisten.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/picdrop/picdrop-photos.jpg' alt='' />
          </div>
        </div>
      </StoryPageNew>
    );
  }
}
