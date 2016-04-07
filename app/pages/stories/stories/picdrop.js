import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesPicDrop extends React.Component {
  displayName = 'StoriesPicDrop'

  render() {
    return (
      <StoryPage
        title='PicDrop'
        tagline='PicDrop muss sich mit GoCardless keine Gedanken mehr über Lastschriften machen und spart Kosten sowie wertvolle Zeit'
        tips={[
            'Mit GoCardless fällt für PicDrop der tägliche Kampf mit den Lastschriften weg',
            'PicDrop spart die ehemals hohen Gebühren für Rücklastschriften oder Fehler',
            'Dank der Transparenz durch GoCardless kann PicDrop einen viel besseren Kundenservice anbieten',
        ]}
        bgimg='crowdcube-logo stories-item__logo--crowdcube'>
        <StoryQuote tag='Vorher gab es viele Rückläufer, und immer mehr Kosten als gedacht.'>
          <p className='para u-margin-Tn'><a href='https://www.picdrop.de/' className='u-link-color-p u-text-underline' target='_blank'>
          PicDrop</a> ist eines der führenden Tools zur Bildübertragung. Gegründet in 2012 in Berlin, wird es heute von mehr als 12,000
          Fotografen genutzt, um einfach und sicher Bilder mit Kunden zu teilen.</p>
          <p className='para'>PicDrops Gründer, Andreas Chudowski und Tobias Friese, arbeiten täglich daran, ihr Produkt weiter zu verbessern.
          Dabei war der tägliche Kampf mit ihren Lastschriften vor der Einbindung von GoCardless eine unwillkommene Ablenkung. Andreas musste
          die Zahlungen jeden Tag bei ihrer Bank bestätigen, und Tobias hatte regelmäßig mit dem Aufspüren geplatzter Lastschriften
          zu kämfen.</p>
          <p className='para'>Insbesondere die hohen Gebühren bei Rücklastschriften haben sie und ihre Kunden verzweifeln lassen,
          und regelmäßig zu vollständigen Zahlungsausfällen geführt.</p>
        </StoryQuote>
        <StoryBigQuote person='Tobias Friese' position='Mitgründer und Geschäftsführer'>
          Wir mussten früher täglich mit Rücklastschriften kämpfen. Das fällt jetzt komplett weg.
        </StoryBigQuote>
        <StoryQuote tag='Wir sparen mindestens 2 Stunden die Woche und konnten zudem unsere Kosten reduzieren.'>
          <p className='para u-margin-Tn'>GoCardless konnte PicDrop helfen viele nervenzehrenden Aufgaben aus dem Alltag zu verbannen.
          Tobias bezeichnet den Start mit GoCardless als “den Moment, an dem wir vergaßen, dass wir einen Zahlungsanbieter haben”. PicDrop konnte
          GoCardless so nahtlos in ihr eigenes Produkt einbauen, dass sämtliche früher manuellen Prozesse nun automatisch laufen, und dem kleinen
          Team so mehr als 2 Stunden pro Woche sparen. Die Integration hat Tobias dabei nicht länger als eine Woche gekostet.</p>
          <p className='para'>Mindestens genauso wichtig ist die Kostenersparnis: mit GoCardless fallen für PicDrop keine Gebühren für
          Rücklastschriften mehr an. Das freut sowohl das Team von PicDrop als auch ihre Kunden, an die sie die hohen Rücklastschriftgebühren
          früher weiter gereicht haben.</p>
        </StoryQuote>
        <StoryQuote tag='Unsere Kunden sind zufriedener, und wir können einen viel besseren Support gewährleisten.'>
          <p className='para u-margin-Tn'>Mit GoCardless kann PicDrop Fehlern durch zum Beispiel inkorrekte Kontodaten besser vorbeugen und
          hat zudem stets Transparenz über den Status einer Zahlung. Im Falle einer Rücklastschrift kann PicDrop mit GoCardless die genauen
          Gründe sehen und so einen viel besseren Support an ihre Kunden geben.</p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
