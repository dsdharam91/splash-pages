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
                We bouwen een betalingsnetwerk voor het Internet. Vervoeg ons!
              </p>
              <p className='para'>
              <Translation locales='nl-NL'>
                Sinds de oprichting van GoCardless in 2011, hebben we ons volledig gefocust op het
                vereenvoudigen van incasso en op toegang geven aan bedrijven die dit vroeger niet konden gebruiken.
                We verwerken reeds meer dan <a href='http://www.forbes.com/sites/trevorclawson/2015/07/24/the-upward-march-of-fin-tech-gocardless-breaks-the-1bn-barrier/'>
                $1 miljard per jaar.</a> voor duizenden bedrijven, en we groeien snel.
              </Translation>
              <Translation locales='nl-BE'>
                Sinds de oprichting van GoCardless in 2011, hebben we ons volledig gefocust op het
                vereenvoudigen van domiciliëringen en op toegang geven aan bedrijven die dit vroeger niet konden gebruiken.
                We verwerken reeds meer dan <a href="http://www.forbes.com/sites/trevorclawson/2015/07/24/the-upward-march-of-fin-tech-gocardless-breaks-the-1bn-barrier/">
                 $1 miljard per jaar </a>voor duizenden bedrijven, en we groeien snel.
              </Translation>
              </p>
              <p className='para'>
                We werken met een brede waaier van organisaties: kleine fitness zaken en scout groepen werken met ons om
                hun administratie te minimaliseren; snel groeiende bedrijven zoals Funding Circle gebruiken ons om hun groei
                te ondersteunen; gevestigde merken zoals de Financial Times rekenen op ons in het percentage mislukte
                betalingen dramatisch te verlagen.
              </p>
              <p className='para'>
                Onze ambities reiken <a href="https://medium.com/@hirokitakeuchi/a-new-payment-network-for-the-internet-11ffb4d7165b"> verder</a>:
                we verwijderen alle belemmeringen zodat bedrijven eenvoudig en snel betalingen van eender wie, eender waar in de wereld kunnen ontvangen.
              </p>
              <p className='para'>
              <Translation locales='nl-NL'>
                In het afgelopen jaar hebben we onze oplossingen voor grotere bedrijven, zoals The Guardian en de Engelse
                overheid, uitgebreid. We hebben tevens Europese incasso schema’s toegevoegd, zodat multinationale
                bedrijven eenvoudig betalingen kunnen incasseren in heel Europa. We zijn onlangs in Frankrijk gestart
                en in het komende jaar zetten we onze wereldwijde uitbreiding verder met lanceringen Duitsland, Nederland,
                Zweden en vele andere markten, om zo een wereldwijd netwerk voor terugkerende betalingen te bouwen.
              </Translation>
              <Translation locales='nl-BE'>
                In het afgelopen jaar hebben we onze oplossingen voor grotere bedrijven, zoals The Guardian en de Engelse
                overheid, uitgebreid. We hebben tevens schema’s voor Europese domiciliëring toegevoegd, zodat
                multinationale bedrijven eenvoudig betalingen kunnen incasseren in heel Europa. We zijn onlangs
                in Frankrijk gestart en in het komende jaar zetten we onze wereldwijde uitbreiding verder
                met lanceringen Duitsland, Nederland, België, Zweden en vele andere markten, om zo een wereldwijd
                netwerk voor terugkerende betalingen te bouwen.
              </Translation>
              </p>
              <p className='para'>
                We zijn in Londen gevestigd, en we zijn gefinancierd door enkele van de beste investeerders in de wereld,
                onder andere Balderton Capital, Accel Partners, Passion Capital en Y Combinator.
              </p>
              </div>
              <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-xs u-color-dark-gray u-margin-Txxl'>
                  Persvragen? Neem contact op met <a href='mailto:press@gocardless.com'>het GoCardless PR team</a> of bekijk onze
                  <a href='https://www.dropbox.com/sh/4i9h27y8oaa3hcq/AABWlVX0T44UBFb4bh78Y5HVa?dl=0'> uitgebreide press kit</a>.
                </p>
              </div>
            </div>
           </div>
          </div>
     </Translation>
    );
  }
}
