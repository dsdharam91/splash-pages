import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import TickSquareIcon from '../../icons/svg/tick-square';
import ProIcon from '../../icons/svg/pro';
import ShopIcon from '../../icons/svg/shop';
import IntegrationsIcon from '../../icons/svg/integrations';
import UsersIcon from '../../icons/svg/users';

export default class HomeNl extends React.Component {
  displayName = 'HomeNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Ons globaal betalingsnetwerk heeft reeds meer dan 1 miljard Eur verwerkt
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Volledig geautomatiseerd
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Bespaar tijd, vermijd menselijke fouten en voorkom mislukte betalingen
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Eurozone &amp; Verenigd Koninkrijk
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Accepteer Nederlandse en internationale betalingen met SEPA Direct Debit (Eurozone) en BACS (Verenigd Koninkrijk)
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  12,000+ bedrijven
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  We verwerken betalingen in het Verenigd Koninkrijk en Europa
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='site-container u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                U bent in goed gezelschap
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
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Eenvoudige, transparante prijszetting voor iedereen
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Voordelige tarieven voor iedereen, van eenmanszaken tot grote organisaties
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
              <Href to='signup.path' id='track-cta-sign-up' className='btn'>Registreer je nu</Href>
              <p className='u-color-p u-margin-Ts'>Geen set up kosten, geen verborgen kosten, geen verplichtingen</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
