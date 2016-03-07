import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import IfLocale from '../../components/if-locale/if-locale';

import MobileIcon from '../../icons/svg/mobile';
import CheckListIcon from '../../icons/svg/checklist';
import TickSquareIcon from '../../icons/svg/tick-square';
import ProIcon from '../../icons/svg/pro';
import ShopIcon from '../../icons/svg/shop';
import IntegrationsIcon from '../../icons/svg/integrations';


export default class HomeDe extends React.Component {
  displayName = 'HomeDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                Die neue bessere Art des Lastschriftverfahrens
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                GoCardless macht es möglich, von den günstigen Gebühren und kleinen Fehlerraten des Lastschriftverfahrens zu profitieren,
                ganz ohne den konventionellen operativen Mehraufwand.
              </p>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Schnelles Einrichten
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                 Ziehen Sie bereits in wenigen Minuten die ersten Zahlungen Ihrer Kunden ein
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Voll automatisiert
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Zeit sparen, menschliche Fehler eliminieren und fehlschlagende Zahlungen vermindern
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <TickSquareIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <TickSquareIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparente Gebühren
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Sie zahlen die Gebühren nur für erfolgreiche Transaktionen und nicht für Rücklastschriften
                </p>
              </div>
            </div>
            <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
              Sie möchten mehr über SEPA erfahren?
            </p>
            <Href to='guides.path' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
              Lesen Sie unser SEPA Handbuch
            </Href>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <h2 className='u-text-l u-text-heading u-colo-heading u-text-light u-margin-Tl'>
            Wie können wir Ihnen helfen?
          </h2>
          <div className='spotlight-grid grid u-margin-Vxxl'>
            <Link to='features' id='track-cta-features' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='spotlight-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <ShopIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <ShopIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ganz einfache<br />online Zahlungen
                </p>
              </div>
              <div className='spotlight-grid__btn btn u-size-full'>Entdecken Sie GoCardless</div>
            </Link>
            <Link to='pro' id='track-cta-pro' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='spotlight-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <ProIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ProIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Volle Kontrolle<br />über Lastschriften
                </p>
              </div>
              <div className='spotlight-grid__btn btn u-size-full'>Entdecken Sie GoCardless Pro</div>
            </Link>
            <Link to='partners' id='track-cta-partners' className='u-link-clean u-text-center grid__cell u-size-1of3'>
              <div className='spotlight-grid__container u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <IntegrationsIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <IntegrationsIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Helfen Sie Ihren Kunden<br />Zahlungen einzuzuiehen
                </p>
              </div>
              <div className='spotlight-grid__btn btn u-size-full'>Entdecken Sie unsere Partner</div>
            </Link>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Tausende Händler vertrauen uns
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                <Message pointer="home.trusted_message_scale" />
                <br />
                Egal, wie groß Ihr Unternehmen ist, GoCardless funktioniert für Sie.
              </p>
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
                Einfache transparente Preise für alle
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Wettbewerbsfähige Preise für jeden: von Einzelpersonen bis zu Großunternehmen.
              </p>
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                Unsere Preise
              </Link>
            </div>
          </div>
        </div>
        <IfLocale hasInstantSignup>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' id='track-cta-sign-up' className='btn'>Jetzt anmelden</Href>
              <p className='u-color-dark-gray u-margin-Ts'>Keine Anschlussgebühr, keine versteckten Gebühren, keine Mindestlaufzeit</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
