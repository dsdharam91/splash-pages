import React from 'react';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesCrossfitOldenburg extends React.Component {
  displayName = 'StoriesCrossfitOldenburg'

  render() {
    return (
      <StoryPage
        title='CrossFit Oldenburg'
        tagline='CrossFit Oldenburg konnte dank GoCardless monatlich fünf Stunden beim Verwalten ihrer Mitgliedsbeiträge sparen'
        tips={[
            'Tino von CrossFit Oldenburg konnte fünf Stunden pro Monat zurückgewinnen',
            'GoCardless ist nahtlos in ihre Kursverwaltungssoftware APPOINTMAN integriert',
            'GoCardless und APPOINTMAN stehen CrossFit Oldenburg immer zur Seite',
        ]}
        bgimg='crowdcube-logo stories-item__logo--crowdcube'>
        <StoryQuote tag='Vorher durfte ich mich zu jedem Monatsbeginn an den Computer setzen und jede Buchung einzeln eingeben. Das war tatsächlich unglaublich viel Arbeit.'>
          <p className='para u-margin-Tn'><a href='https://crossfitoldenburg.com' className='u-link-color-p u-text-underline' target='_blank'>
          Oldenburgs erstes CrossFit Affiliate</a> wurde 2013 von Tino Petke gegründet und hilft heute mehr als 100 Mitgliedern sportlich über ihre Grenzen hinauszuwachsen.
          Großen Wert legen Tino und sein Team dabei auf Coaching und die Community: am liebsten fokussieren sie sich zu 100% auf die Mitglieder.</p>
          <p className='para'>Von Anfang an hat Tino auf die online Kursverwaltungssoftware APPOINTMAN gesetzt, mit der sich Mitglieder und Buchungen ganz einfach verwalten
          lassen. Eine der wenigen Aufgaben, die offen blieb, war die Verwaltung der Lastschrifteinzüge für die Mitgliedschaftsgebühren. Tino verbrachte jeden Monat 5 Stunden
          damit, die Zahlungen manuell anzustoßen und zu verfolgen. Das waren 5 Stunden, die dem sportbegeisterten Coach und Eigentümer von CrossFit Oldenburg für sein
          Coaching und die Community verloren gingen.</p>
        </StoryQuote>
        <StoryBigQuote person='Tino Petke' position='Gründer und Geschäftsführer'>
          Der Vorteil für mich ist eine Zeitersparnis von ca 5 Stunden! 5 Stunden sind enorm. Jeder, der selbst ein Geschäft führt,
          weiß wie gut das tut, wenn man sich diese 5 Stunden sparen kann!
        </StoryBigQuote>
        <StoryQuote tag='Die neugewonnene Zeit wird effektiv im Laden genutzt!'>
          <p className='para u-margin-Tn'>Dank der Partnerschaft von GoCardless und APPOINTMAN werden die Mitgliedsbeträge jeden Monat automatisch über GoCardless eingezogen.
          Tino spart sich so nicht nur 5 Stunden Schreibtischarbeit, sondern auch viele Nerven zur ordentlichen Verwaltung der Mitgliedschaften. Wenn ein Mitglied sein Abonnement
          für einen Monat pausiert, wird der Status automatisch von APPOINTMAN an GoCardless übermittelt, und die Zahlung wird nicht eingezogen. Ähnlich ist es mit solchen
          Zahlungen, die zwar gebucht werden sollen aber nicht eingezogen werden können, zum Beispiel mangels ausreichender Deckung: in diesem Fall wird CrossFit Oldenburg in
          Echtzeit über den Fehler informiert und kann die Zahlung in APPOINTMAN mit einem Klick erneut versuchen.</p>
        </StoryQuote>
        <StoryQuote tag='Meine abschließenden Worte sind: Danke für die Hilfe!'>
          <p className='para u-margin-Tn'>Neben der Zeitersparnis und der Last, die Tino nun nicht mehr jeden Monat auf den Schultern liegt, sticht für ihn außerdem der Service
          von GoCardless heraus: das Team hat für CrossFit Oldenburg einen reibungslosen Start bereitet, und für Tino die bestehenden Mandate seiner Mitglieder in
          die neue Lösung übertragen. Auch mehrere Monate nach dem Start kann Tino jederzeit auf den schnellen und hilfreichen Service von GoCardless und APPOINTMAN setzen.</p>
        </StoryQuote>
      </StoryPage>
    );
  }
}
