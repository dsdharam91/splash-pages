import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutNl extends React.Component {
  displayName = 'AboutNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Txl'>
            Over GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                GoCardless maakt het eenvoudig om doorlopende betalingen te incasseren.
                We integreren alle incassonetwerken ter wereld en maken dit netwerk toegankelijk voor iedereen.
              </p>
              <p className='para'>
              <Translation locales='nl-NL'>
                Sinds onze oprichting in 2011 zijn we snel uitgegroeid tot één van de marktleiders op het gebied van
                automatische incasso in Europa. We verwerken jaarlijks meer dan een miljard euro voor meer dan 13.000 bedrijven en organisaties.
              </Translation>
              <Translation locales='nl-BE'>
                Sinds onze oprichting in 2011 zijn we snel uitgegroeid tot één van de marktleiders op het gebied van
                domiciliëringen in Europa. We verwerken jaarlijks meer dan een miljard euro voor meer dan 13.000 bedrijven en organisaties.
              </Translation>
              </p>
              <p className='para'>
                Kleine sportscholen en scouting clubs gebruiken ons om hun administratie te minimaliseren.
                Snelgroeiende bedrijven als Funding Circle werken met ons om sneller te groeien.
                En gevestigde merken als de Financial Times rekenen op ons om het aantal mislukte betalingen drastisch te verlagen.
              </p>
              <p className='para'>
                We zijn een klein team in Londen en worden gefinancierd door de beste investeerders ter wereld
                als Balderton Capital, Accel Partners en Y&nbsp;Combinator.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-xs u-color-dark-gray u-margin-Txxl'>
                  Persvragen? Neem contact op met <a href='mailto:press@gocardless.com'>het GoCardless PR team</a> of bekijk onze
                  <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'> uitgebreide press kit</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
