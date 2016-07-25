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
                  Zeit sparen, menschliche Fehler eliminieren und fehlschlagende Zahlungen vermindern
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

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Wir helfen bereits mehr als <Message pointer='number_of_merchants' /> Unternehmen
            </h2>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-padding-Hxxl u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
            </div>
          </div>
        </div>
        <div className='site-container'>
          <div className='quote page-hero--icon-background u-text-center'>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm'>
              “Wir mussten früher täglich mit Rücklastschriften kämpfen. Das fällt jetzt komplett weg. An den Start mit GoCardless denken
              wir gerne als den Moment zurück, an dem wir vergaßen, dass wir einen Zahlungsanbieter haben.”
            </p>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm'>
              Name, Position, PicDrop
            </p>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              GoCardless ist bekannt aus
            </h2>
            <div className='grid u-padding-Vxl'>
              <a href='' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Handelsblatt' className='handelsblatt-logo stories-item__logo--handelsblatt' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc vitae odio efficitur aliquam non in
                    tortor. In molestie augue elit, vitae efficitur lacus maximus vitae'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Read the article</div>
              </a>
              <a href='' className='grid__cell u-size-1of3 u-link-clean u-padding-Bm'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Grunderszene' className='grunderszene-logo stories-item__logo--grunderszene' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc vitae odio efficitur aliquam non in
                    tortor. In molestie augue elit, vitae efficitur lacus maximus vitae'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Read the article</div>
              </a>
              <a href='' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Deutsche Welle' className='deutsche-welle-logo stories-item__logo--deutsche-welle' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc vitae odio efficitur aliquam non in
                    tortor. In molestie augue elit, vitae efficitur lacus maximus vitae'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Read the article</div>
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
                  Learn more
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
                  Verknüpfen Sie Ihren Service eng mit den eingehenden Zahlungen, um in Echtzeit auf Zahlungseingänge oder Fehler zu
                  reagieren.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  Von <Message pointer='pricing.pro_cost_per_transaction' />
                </p>
                <Link to='pro' id='track-cta-features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  Learn more
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
                Wettbewerbsfähige Preise für jeden: von Einzelpersonen bis zu Großunternehmen.
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
              <p className='u-color-dark-gray u-margin-Ts'>Keine Anschlussgebühr, keine versteckten Gebühren, keine Mindestlaufzeit</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
