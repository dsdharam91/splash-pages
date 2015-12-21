import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutDe extends React.Component {
  displayName = 'AboutDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-padding-Vxxl'>
           <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            Über GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                Wir schaffen ein Zahlungsnetzwerk für das Internet. Werden Sie Teil unseres Teams.
              </p>
              <p className='para'>
                Seit der Gründung von GoCardless im Jahr 2011 verfolgen wir ein Ziel:
                das Lastschriftverfahren zu vereinfachen und Unternehmen Zugang dazu zu
                verschaffen, die es zuvor nicht nutzen konnten. Wir verarbeiten bereits
                über <a href='http://www.av-finance.com/aktuelles/newsdetails/artikel/162/fintech-start-up-gocardless-startet-in-deutschland/' target='_blank'>1
                Mrd. Euro pro Jahr</a> für tausende Unternehmen und wir wachsen schnell.
              </p>
              <p className='para'>
                Zahlreiche Organisationen zählen schon jetzt zu unseren Partnern: Kleine Fitnessstudios
                und Pfadfindergruppen nutzen unseren Service, um ihren Verwaltungsaufwand zu reduzieren,
                schnell wachsende Unternehmen wie Funding Circle, um ihr Wachstum zu beschleunigen,
                und etablierte Institutionen wie die Financial Times, um die Fehlerquote im
                Lastschriftverfahren erheblich zu senken.
              </p>
              <p className='para'>
                <a href='https://medium.com/@hirokitakeuchi/a-new-payment-network-for-the-internet-11ffb4d7165b' target='_blank'>Unsere Ziele reichen aber
                noch weit darüber hinaus</a>:
                Wir wollen Barrieren durchbrechen, damit Unternehmen schnell
                und einfach damit beginnen können, Zahlungen von jedem und überall
                auf der Welt einzuziehen.
              </p>
              <p className='para'>
                Im vergangenen Jahr haben wir unser Angebot für größere Unternehmen wie the Guardian und die
                Regierung Großbritanniens erweitert. Zudem haben wir europäische Lastschriftverfahren verschiedener
                Länder in unser Angebot aufgenommen, so dass multinationale Unternehmen Zahlungen nunmehr völlig problemlos
                innerhalb ganz Europas einziehen können. Erst kürzlich haben wir unseren Service in Frankreich und Deutschland
                auf den Markt gebracht und im kommenden Jahr werden wir unsere weltweite Expansion fortführen, indem wir ein
                globales Netzwerk für wiederkehrende Zahlungen schaffen.

              </p>
              <p className='para'>
                Wir sind ein Londoner Unternehmen, das finanziell von international führenden Investoren wie Balderton Capital,
                Accel Partners, Passion Capital und Y Combinator unterstützt wird.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
                  Für Presseanfragen kontaktieren Sie bitte
                  das <a href='mailto:press@gocardless.com'>GoCardless PR Team</a> oder werfen Sie einen Blick auf unser
                  umfangreiches <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>Presse Paket.</a>
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
