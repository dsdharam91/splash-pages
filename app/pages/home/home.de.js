import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import IfLocale from '../../components/if-locale/if-locale';

import IntegrateGreenIcon from '../../icons/svg/integrate-green';
import ImproveCashflowRedIcon from '../../icons/svg/improve-cashflow-red';
import AutomatedYellowIcon from '../../icons/svg/automated-yellow';
import SmallBusinessYellowIcon from '../../icons/svg/small-business-yellow';
import EnterpriseGreenIcon from '../../icons/svg/enterprise-green';


export default class HomeDe extends React.Component {
  displayName = 'HomeDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
              Automatisieren Sie Ihre Lastschriften mit GoCardless
            </h2>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <IntegrateGreenIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  REST API
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                 Nutzen Sie unsere API, um Zahlungen nahtlos mit Ihrem Service zu verknüpfen
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Voll automatisiert
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Sie sparen Zeit und vermeiden menschliche Fehler sowie fehlschlagende Zahlungen
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <AutomatedYellowIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Transparente Gebühren
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Sie zahlen die Gebühren nur für erfolgreiche Transaktionen und nie für Rücklastschriften
                </p>
              </div>
            </div>
            <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
              Sie möchten SEPA besser verstehen?
            </p>
            <Href to='guides.path' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
              Lesen Sie unser SEPA Handbuch
            </Href>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Wir helfen bereits mehr als <Message pointer='number_of_merchants' /> Unternehmen
            </h2>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-padding-Hxxl u-center'>
              <img src='/images/logos/German-logos-@2.png' />
            </div>
          </div>
        </div>
        <div className='site-container'>
          <div className='quote page-hero--icon-background u-text-center'>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm u-padding-Bl'>
              “Unsere Lastschriften laufen jetzt komplett automatisiert. Der Wechsel zu GoCardless war total einfach und das Team ist immer zur Stelle, wenn wir Fragen haben.”
            </p>
            <div className="">
              <img className="u-size-1of8 u-margin-Bxs" src='/images/testimonials/betahaus__avatar.png' />
              <div className="">
                <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm' className='u-color-invert u-text-heading u-text-m u-text-semi'>
                  Mathias Zinke
                </p>
                <p className='u-color-invert u-text-heading u-text-xs'>
                  betahaus Hamburg
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              GoCardless ist bekannt aus
            </h2>
            <div className='grid u-padding-Vxl'>
              <a href='http://www.handelsblatt.com/unternehmen/banken-versicherungen/kreditech-auch-bei-anderen-sprudeln-die-investitionen/13363814-2.html' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Handelsblatt' className='handelsblatt-logo stories-item__logo--handelsblatt' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    '[...] FinTech GoCardless [hat] einen weiteren Zufluss in Höhe von 13 Millionen Dollar vermeldet.'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Zum Artikel</div>
              </a>
              <a href='http://www.gruenderszene.de/allgemein/entwicklerin-code-girls-jutta-frieden-interview' className='grid__cell u-size-1of3 u-link-clean u-padding-Bm'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Grunderszene' className='grunderszene-logo stories-item__logo--grunderszene' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    '[...] das britische Fintech-Startup GoCardless, das Lastschriften automatisiert abwickelt.'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Zum Artikel</div>
              </a>
              <a href='http://www.zeit.de/2016/28/brexit-unternehmen-europa' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Die Zeit' className='die-zeit-logo stories-item__logo--die-zeit' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    '[...] Start-up GoCardless, das es Unternehmen europaweit ermöglicht, Lastschriften einzuziehen.'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Zum Artikel</div>
              </a>
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='product-grid__container'>
              <div className='product-grid__section product-grid__section--first u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <SmallBusinessYellowIcon className='svg-icon__image' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                  Kleinunternehmen
                </p>
                <p className='u-color-dark-gray u-padding-Vm'>
                  Mit GoCardless haben Sie die Kontrolle über Ihre Zahlungen und können Ihren Cashflow verbessern. Profitieren Sie von
                  unseren geringen Gebühren.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  <Message pointer='pricing.per_transaction_amount_normal' /> gedeckelt bei <Message pointer='pricing.cost_cap' />
                </p>
                <Link to='features' id='track-cta-features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  Erfahren Sie mehr
                </Link>
              </div>
              <div className='product-grid__section u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <EnterpriseGreenIcon className='svg-icon__image' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                  Großunternehmen
                </p>
                <p className='u-color-dark-gray u-padding-Vm'>
                  Verknüpfen Sie Ihren Service nahtlos mit Ihren eingehenden Zahlungen, um in Echtzeit auf Zahlungseingänge oder Fehler zu
                  reagieren.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  Von <Message pointer='pricing.pro_cost_per_transaction' />
                </p>
                <Link to='pro' id='track-cta-features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  Erfahren Sie mehr
                </Link>
              </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Einfache transparente Preise für alle
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Mit GoCardless zahlen Sie nie mehr Gebühren für Rücklastschriften
              </p>
              <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                Unsere Preise
              </Link>
            </div>
          </div>
        </div>

        <IfLocale hasInstantSignup>
          <hr className='section-divider' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' id='track-cta-sign-up' className='btn'>Jetzt anmelden</Href>
              <p className='u-color-dark-gray u-margin-Ts'>Keine Einrichtungsgebühr, keine versteckten Kosten, keine Mindestlaufzeit</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
