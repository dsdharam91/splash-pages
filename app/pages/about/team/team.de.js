import React from 'react';
import Translation from '../../../components/translation/translation';

export default class TeamDe extends React.Component {
  displayName = 'TeamDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray u-margin-Bm'>
                Wir sind ein junges Team mit der Mission ein neues Zahlungsnetzwerk für das Internet zu bauen.
              </h2>
              <p className='u-text-heading-light u-text-xs u-color-dark-gray'>
                Sie möchten Teil von GoCardless werden?<br />
                Werfen Sie einen Blick auf
                unsere <a href='https://gocardless.com/about/jobs/' className='u-link-clean ku-link-color-meta u-text-underline'>
                Ausschreibungen (auf Englisch)</a>
              </p>
            </div>
            <div className='grid__cell u-size-2of3'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>Karriere bei GoCardless</h2>
              <span className='u-text-heavy u-color-dark-gray'></span>
              <span className='u-color-dark-gray'>
               <p className='para'>
                Ein großartiges Team zu bilden, ist für uns genauso wichtig wie ein großartiges Unternehmen
                zu schaffen: Wir haben eine starke Unternehmenskultur und arbeiten kontinuierlich daran,
                sie noch weiter zu stärken. Wir stellen talentierte Bewerber ein, meistern spannende
                Herausforderungen und bieten ein tolles Arbeitsklima, das jeden Einzelnen dazu motiviert,
                sein Bestes zu geben, stets dazuzulernen, zu wachsen und sich im Team gegenseitig zu inspirieren.
                </p>
               <p className='para'>
                <strong>Teamarbeit wird bei uns großgeschrieben</strong>: Für uns sind Teamerfolge sehr viel
                wichtiger als Einzelerfolge und wir lieben es, Hand in Hand zu arbeiten. Unsere Überzeugung:
                Von talentierten Menschen umgeben zu sein, ist die beste Voraussetzung, erstklassige Arbeit
                zu leisten.
               </p>
              <p className='para'>
               <strong>Wir sind lernbegierig</strong>: Bei uns stehen Lernen und persönliche Entwicklung an
               oberster Stelle. Egal, ob durch Konferenzen, Schulungen oder neue Herausforderungen – wir
               nehmen uns Zeit zum Lernen, um uns weiterentwickeln zu können. Wir lernen aus unseren Erfolgen
               wie auch aus unseren Fehlern und tauschen regelmäßig direktes, konstruktives Feedback
               untereinander aus, damit wir uns stetig verbessern können.
              </p>
              <p className='para'>
               <strong>Schnelles Vorankommen steht bei uns im Vordergrund</strong>: Wir messen Dingen
               Priorität bei, mit denen wir die beste Wirkung erzielen. Wir setzen auf dauerhaften Erfolg,
               so dass wir in Zukunft genauso rapide wachsen wie heute.
              </p>
              <p className='para'>
               <strong>Wir ergreifen Initiativen</strong>: In unserem Team übernimmt jeder Verantwortung,
               managt seine eigenen Aufgaben und trifft Entscheidungen. Wir fördern Initiativen und motivieren
               jeden Einzelnen dazu, Verbesserungen vorzunehmen, wann immer sich die Gelegenheit dazu ergibt.
              </p>
            </span>
            </div>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Bxl'>
            <div className='grid__cell u-size-1of3'>
              <img src='/images/office/office-picnic-table.jpg' />
            </div>
            <div className='grid__cell u-size-2of3'>
              <img src='/images/office/office-support-booths.jpg' />
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
