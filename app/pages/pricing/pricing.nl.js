import React from 'react';
import classNames from 'classnames';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';
import { getMessage } from '../../components/intl/intl';

export default class PricingNl extends React.Component {
  displayName = 'PricingNl'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const hasPercentagePricing = getMessage(this.context.messages, 'country_properties.has_percentage_pricing');
    return (
      <Translation locales='nl'>
        <div className='page-hero--pricing page-hero'>
          <div className='site-container'>
            <div className='grid pricing-options u-center u-padding-Bxl'>
              <IfLocale hasPercentagePricing>
                <div className={classNames('grid__cell u-padding-Vxl u-padding-Rxs', { 'u-size-1of2': hasPercentagePricing })}>
                  <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless</h1>
                  <div className='u-relative u-background-primary u-padding-Vxl'>
                    <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>
                      <Message pointer='pricing.per_transaction_amount_normal' />
                    </h2>
                    <p className='u-text-heading-light u-text-center u-color-invert u-text-xs u-margin-Txxs'>
                      Per transactie, met een maximum van <Message pointer="pricing.cost_cap" />
                    </p>
                  </div>
                  <ul className='pricing-options__list'>
                    <li className='pricing-options__list-item u-color-dark-gray'>
                      <b>Ideaal voor midden- en kleinbedrijf</b>
                    </li>
                    <li className='pricing-options__list-item'>
                      Geen extra kosten, geen verplichtingen</li>
                    <li className='pricing-options__list-item'>
                      Volumekorting mogelijk (<a href='#scale-pricing-container'>?</a>)
                    </li>
                    <IfLinkExists to='features'>
                      <li className='pricing-options__list-item'>
                        <Link to='features'>Meer over GoCardless</Link>
                      </li>
                    </IfLinkExists>
                    <li className='pricing-options__list-button'>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>Registreer nu</Href>
                      </IfLocale>
                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn u-size-full'>Neem contact op</Link>
                      </IfLocale>
                    </li>
                  </ul>
                </div>
              </IfLocale>

              <div className={classNames('grid__cell u-padding-Vxl u-padding-Rxs', { 'u-size-1of2': hasPercentagePricing })}>
                <h1 className='u-text-heading-light u-text-center u-color-invert u-text-l u-padding-Bs'>GoCardless Pro</h1>
                <div className='u-background-xdark-gray u-padding-Vxl'>
                  <h2 className='u-text-heading-light u-text-center u-color-invert u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' />
                  </h2>
                  <p className='u-text-heading-light u-text-center u-color-invert u-text-xs u-margin-Txxs'>
                    Per transactie
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-dark-gray'>
                    <b>Voor bedrijven die volledige controle willen</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b><Message pointer='pricing.pro_monthly_fee' /> per maand</b>, geen verborgen kosten
                  </li>
                  <li className='pricing-options__list-item'>
                    Voor bedrijven met <b><Message pointer='pricing.pro_number_of_monthly_payments' /></b> betalingen per maand
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Meer over GoCardless Pro</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Neem contact op</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-dark-gray'>Over onze tarieven</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>
                  Zijn er echt geen andere kosten?
                </b>
              </div>
              <p className='u-color-dark-gray'>
                <IfLocale hasPercentagePricing>
                  Nee, we brengen alleen de kosten uit het overzicht hierboven in rekening.
                  We rekenen nooit kosten voor een terugboeking of mislukte betaling.
                  Voor GoCardless betaal je uitsluitend <Message pointer='pricing.per_transaction_amount_normal' /> per transactie,
                  met een maximum van <Message pointer="pricing.cost_cap" />.
                  Voor GoCardless Pro betaal je <Message pointer='pricing.pro_monthly_fee' /> per maand
                  en een vergoeding voor iedere transactie.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  Nee, je betaalt enkel <Message pointer='pricing.pro_monthly_fee' /> per maand en een vergoeding voor iedere transactie.
                  We rekenen nooit kosten voor een terugboeking of mislukte betaling.
                </IfLocale>
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Biedt GoCardless volumekorting aan?</b>
              </div>
              <p className='u-color-dark-gray'>
                <IfLocale hasPercentagePricing>
                  Ja, onze transactiekosten gaan omlaag vanaf 1.000 transacties per maand. Meer weten?<br />
                  <Link to='contact_sales' className='u-link-color-p u-text-underline'>Neem contact op met sales</Link>.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  Ja, onze transactiekosten gaan omlaag vanaf 1.000 transacties per maand. Meer weten?<br />
                  <Link to='contact_sales' className='u-link-color-p u-text-underline'>Neem contact op met sales</Link>.
                </IfLocale>
              </p>
            </div>
            <IfLocale hasPercentagePricing>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>Wat betekent ‘met een maximum van <Message pointer="pricing.cost_cap" />’?</b>
                </div>
                <p className='u-color-dark-gray'>
                  Je betaalt nooit meer dan <Message pointer="pricing.cost_cap" /> per transactie
                  zelfs als de waarde van de transactie hoger is dan <Message pointer='pricing.normal_capped_at_amount' />.
                </p>
              </div>
            </IfLocale>
            <IfLocale hasPercentagePricing={false}>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>Zijn er opstartkosten?</b>
                </div>
                <p className='u-color-dark-gray'>
                  Nee, je betaalt niets om te starten met GoCardless en onze klanten ondersteuning is volledig gratis.
                </p>
              </div>
            </IfLocale>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Moet ik betalen voor een mislukte betaling?</b>
              </div>
              <p className='u-color-dark-gray'>
                Nee. We rekenen alleen kosten voor succesvol verwerkte betalingen.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>Vragen?</h2>
            <p className='u-color-dark-gray u-margin-Ts'>Neem contact met ons op via <Message pointer='phone_local' /></p>
            <IfLocale hasInstantSignup>
              <Href to='signup.path' className='btn btn--hollow u-margin-Tm'>Registreer nu</Href>
            </IfLocale>
            <IfLocale hasInstantSignup={false}>
              <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Neem contact op</Link>
            </IfLocale>
          </div>
        </div>
      </Translation>
    );
  }
}
