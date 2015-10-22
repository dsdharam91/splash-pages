import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutNl extends React.Component {
  displayName = 'AboutNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            Over GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                GoCardless maakt het gemakkelijk om terugkerende betalingen online te incasseren.
                We verenigen alle incasso netwerken in de wereld, maken toegang gebruiksvriendelijk, en openen dit netwerk voor iedereen.
                We creëren daarbij een compleet nieuw type betalingsnetwerk.
              </p>
              <p className='para'>
                We zijn sinds onze oprichting in 2011 snel uitgegroeid tot één van Europa’s leidende incasso aanbieders.
                We verwerken jaarlijks meer dan een miljard Euro voor meer dan tienduizend bedrijven en organisaties.
              </p>
              <p className='para'>
                We werken met een brede waaier van organisaties: kleine fitness zaken en scouts groepen gebruiken ons
                om hun administratie te minimaliseren,
                snel groeiende bedrijven zoals Funding Circle werken met ons om hun groei te ondersteunen,
                en gevestigde merken zoals de Financial Times rekenen op ons om hun mislukte betalingen dramatisch te verlagen.
              </p>
              <p className='para'>
                We zijn een klein team in London dat gefinancierd is door enkele van de beste
                investeerders in de wereld, onder andere Balderton Capital, Accel Partners, en Y&nbsp;Combinator.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
                  Voor pers vragen, gelieve ons te contacteren <a href='mailto:press@gocardless.com'>het GoCardless PR team</a>,
                  of bekijk ons uitgebreid <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>
                    pers dossier
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
