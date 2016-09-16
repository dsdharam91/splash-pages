import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesCrossfitOldenburg extends React.Component {
  displayName = 'StoriesCrossfitOldenburg'

  render() {
    return (
      <StoryPageNew
        title='Der Vorteil für mich ist eine Zeitersparnis von ca. 5 Stunden! 5 Stunden sind enorm. Jeder, der selbst ein Geschäft führt,
        weiß wie gut das tut, wenn man sich diese 5 Stunden sparen kann!'
        author='Tino Petke'
        position='Geschäftsführer'
        company='CrossFit Oldenburg GmbH'
        benefits='Zeitersparnis von monatlich 5 Stunden, nahtlose Integration in Kursverwaltungssoftware APPOINTMAN, toller Support.'
        bgimgUrl='url(/images/stories/story-images/crossfit-oldenburg/hero-crossfit.jpg)'
        sidebarLogoSrc='/images/stories/story-images/crossfit-oldenburg/CrossFit-Oldenburg-logo.png'
        sidebarServices='CrossFit-Box'
        sidebarEmployees='1 Mitarbeiter'
        sidebarPreviousProvider='Hausbank'
        sidebarTimeSaved='Etwa 5 Stunden im Monat'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='http://crossfitoldenburg.com/' className='u-link-color-p u-text-underline'>Oldenburgs erstes CrossFit Affiliate</a> wurde
            2013 von Tino Petke gegründet und hilft heute mehr als 100 Mitgliedern sportlich über ihre Grenzen hinauszuwachsen.
            Großen Wert legen Tino und sein Team dabei auf Coaching und die Community: am liebsten fokussieren sie sich zu 100% auf die Mitglieder.
          </p>
          <p className='para'>
            Von Anfang an hat Tino auf die online Kursverwaltungssoftware APPOINTMAN gesetzt, mit der sich Mitglieder und Buchungen ganz einfach verwalten
            lassen. Eine der wenigen Aufgaben, die offen blieb, war die Verwaltung der Lastschrifteinzüge für die Mitgliedschaftsgebühren. Tino verbrachte jeden Monat 5 Stunden
            damit, die Zahlungen manuell anzustoßen und zu verfolgen. Das waren 5 Stunden, die dem sportbegeisterten Coach und Eigentümer von CrossFit Oldenburg für sein
            Coaching und die Community verloren gingen.
          </p>
          <p className='story-page__quote'>
            Vorher durfte ich mich zu jedem Monatsbeginn an den Computer setzen und jede Buchung einzeln eingeben. Das war tatsächlich unglaublich viel Arbeit.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/crossfit-oldenburg/CrossFit-Oldenburg-Tino-Petke.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            GoCardless ist nahtlos in APPOINTMAN integriert
          </h2>
          <p className='para'>
            Dank der Partnerschaft von GoCardless und APPOINTMAN werden die Mitgliedsbeträge jeden Monat automatisch über GoCardless eingezogen.
            Tino spart sich so nicht nur 5 Stunden Schreibtischarbeit, sondern auch viele Nerven zur ordentlichen Verwaltung der Mitgliedschaften.
          </p>
          <p className='story-page__quote'>
            Die neugewonnene Zeit wird effektiv im Laden genutzt!
          </p>
          <p className='para'>
            Wenn ein Mitglied sein Abonnement
            für einen Monat pausiert, wird der Status automatisch von APPOINTMAN an GoCardless übermittelt, und die Zahlung wird nicht eingezogen. Ähnlich ist es mit solchen
            Zahlungen, die zwar gebucht werden sollen aber nicht eingezogen werden können, zum Beispiel mangels ausreichender Deckung: in diesem Fall wird CrossFit Oldenburg in
            Echtzeit über den Fehler informiert und kann die Zahlung in APPOINTMAN mit einem Klick erneut versuchen.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            GoCardless und APPOINTMAN stehen immer zur Seite
          </h2>
          <p className='para'>
            Neben der Zeitersparnis und der Last, die Tino nun nicht mehr jeden Monat auf den Schultern liegt, sticht für ihn außerdem der Service von GoCardless heraus: das Team
            hat für CrossFit Oldenburg einen reibungslosen Start bereitet, und für Tino die bestehenden Mandate seiner Mitglieder in die neue Lösung übertragen. Auch mehrere
            Monate nach dem Start kann Tino jederzeit auf den schnellen und hilfreichen Service von GoCardless und APPOINTMAN setzen.
          </p>
          <p className='story-page__quote'>
            Meine abschließenden Worte sind: Danke für die Hilfe!
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/crossFit-oldenburg/CrossFit-Oldenburg-banner.jpg' alt='' />
          </div>
        </div>
      </StoryPageNew>
    );
  }
}
