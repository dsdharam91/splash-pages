import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

import CheckListIcon from '../../icons/svg/checklist';
import TickSquareIcon from '../../icons/svg/tick-square';
import UsersIcon from '../../icons/svg/users';

export default class HomeNl extends React.Component {
  displayName = 'HomeNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                Ons wereldwijde betalingsnetwerk heeft meer dan 1 miljard euro verwerkt
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Volledig geautomatiseerd
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Tijd is kostbaar. Maak je niet meer druk over betalingen. Met GoCardless gaat alles volledig automatisch.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Eurozone, UK &amp; Zweden
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  <Translation locales='nl-NL'>
                    Incasseer betalingen uit Nederland en de rest van Europa. GoCardless ondersteunt SEPA (Eurozone), BACS (Verenigd Koninkrijk) en Autogiro (Zweden)
                  </Translation>
                  <Translation locales='nl-BE'>
                    Incasseer betalingen uit België en de rest van Europa. GoCardless ondersteunt SEPA (Eurozone), BACS (Verenigd Koninkrijk) en Autogiro (Zweden)
                  </Translation>
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  13.000 bedrijven
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Van sportschool tot uitgeverij: dankzij GoCardless ontvangen meer dan 13.000 bedrijven hun geld snel en op tijd via automatische incasso
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='site-container u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Je bent in goed gezelschap
              </h2>
            </div>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Transparante tarieven voor iedereen
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Scherpe tarieven voor iedereen: van eenmanszaak tot multinational
              </p>
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                Meer over onze tarieven
              </Link>
            </div>
          </div>
        </div>
        <IfLocale hasInstantSignup>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' id='track-cta-sign-up' className='btn'>Registreer nu</Href>
              <p className='u-color-dark-gray u-margin-Ts'>Geen opstartkosten, verborgen kosten of verplichtingen</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
