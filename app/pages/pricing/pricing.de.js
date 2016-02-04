import React from 'react';
import classNames from 'classnames';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';
import { getMessage } from '../../components/intl/intl';

export default class PricingDe extends React.Component {
  displayName = 'PricingDe'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const hasPercentagePricing = getMessage(this.context.messages, 'country_properties.has_percentage_pricing');
    return (
      <Translation locales='de'>
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
                      Pro Zahlung, gedeckelt bei <Message pointer="pricing.cost_cap" />
                    </p>
                  </div>
                  <ul className='pricing-options__list'>
                    <li className='pricing-options__list-item u-color-dark-gray'>
                      <b>Für kleine und mittelständische Unternehmen</b>
                    </li>
                    <li className='pricing-options__list-item'>
                      Keine Einrichtungs- oder Grundgebühr</li>
                    <li className='pricing-options__list-item'>
                      Volumenpreise verfügbar (<a href='#scale-pricing-container'>?</a>)
                    </li>
                    <IfLinkExists to='features'>
                      <li className='pricing-options__list-item'>
                        <Link to='features'>Erfahren Sie mehr über GoCardless</Link>
                      </li>
                    </IfLinkExists>
                    <IfLocale hasInstantSignup>
                      <li className='pricing-options__list-button'>
                        <Href to='signup.path' className='btn u-size-full'>Jetzt anmelden</Href>
                      </li>
                    </IfLocale>
                    <IfLocale hasInstantSignup={false}>
                      <li className='pricing-options__list-button'>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Kontakt</Link>
                      </li>
                    </IfLocale>
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
                    Pro Zahlung
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-dark-gray'>
                    <b>Für Unternehmen, die volle Kontrolle suchen</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b><Message pointer='pricing.pro_monthly_fee' /> monatlich</b>, keine versteckten Gebühren
                  </li>
                  <li className='pricing-options__list-item'>
                    Für Unternehmen mit <b><Message pointer='pricing.pro_number_of_monthly_payments' /></b> Zahlungen im Monat
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Erfahren Sie mehr über GoCardless Pro</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Kontakt</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-dark-gray'>Über unsere Preise</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>
                  Gibt es wirklich keine weiteren Gebühren?
                </b>
              </div>
              <p className='u-color-dark-gray'>
                Richtig, wir berechnen Ihnen nur die Gebühren, die in der obigen Tabelle aufgelistet sind.
                Wir berechnen niemals Gebühren für Rückerstattungen oder fehlgeschlagene Zahlungen.
                Mit GoCardless zahlen Sie jederzeit nur <Message pointer='pricing.per_transaction_amount_normal' /> des
                Zahlungsbetrages, gedeckelt bei <Message pointer="pricing.cost_cap" />.
                Mit GoCardless Pro zahlen Sie <Message pointer='pricing.pro_monthly_fee' /> im Monat sowie
                eine Gebühr für jede Zahlung.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Bieten Sie Preisnachlässe für große Volumen?</b>
              </div>
              <p className='u-color-dark-gray'>
                Ja, die Gebühr pro Zahlung verringert sich ab 1000 Zahlungen im Monat.
                Um mehr darüber zu erfahren, kontaktieren Sie uns
                bitte <Link to='contact_sales' className='u-link-color-p u-text-underline'>hier</Link>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>Muss ich für die Implementierung zahlen?</b>
              </div>
              <p className='u-color-dark-gray'>
                Nein, die Nutzung unserer API für eine Implementierung mit Ihren Systemen ist kostenfrei.</p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>Fallen Gebühren für gescheiterte Zahlungen an?</b>
              </div>
              <p className='u-color-dark-gray'>
                Nein, wir erheben Gebühren ausschließlich für erfolgreiche Zahlungen.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>Haben Sie Fragen?</h2>
            <p className='u-color-dark-gray u-margin-Ts'>Sprechen Sie mit einem unserer Zahlungsexperten: <Message pointer='phone_local' /></p>
            <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Kontakt</Link>
          </div>
        </div>
      </Translation>
    );
  }
}
