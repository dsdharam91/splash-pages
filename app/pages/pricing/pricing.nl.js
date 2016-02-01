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
                      Per verrichting, met een maximum van <Message pointer="pricing.cost_cap" />
                    </p>
                  </div>
                  <ul className='pricing-options__list'>
                    <li className='pricing-options__list-item u-color-heading'>
                      <b>Perfect voor kleine en middelgrote bedrijven</b>
                    </li>
                    <li className='pricing-options__list-item'>
                      Geen bijkomende kosten, geen verplichtingen</li>
                    <li className='pricing-options__list-item'>
                      Volume kortingen beschikbaar (<a href='#scale-pricing-container'>?</a>)
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
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn u-size-full'>Contact</Link>
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
                    Per verrichting
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-heading'>
                    <b>Voor bedrijven die volledige controle willen</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b><Message pointer='pricing.pro_monthly_fee' /> maandelijks</b>, geen verborgen kosten
                  </li>
                  <li className='pricing-options__list-item'>
                    Voor bedrijven met <b><Message pointer='pricing.pro_number_of_monthly_payments' /></b> betalingen per maand
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Meer over GoCardless Pro</Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-heading'>Over onze tarieven</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-heading'>
                <b>
                  Zijn er echt geen verdere kosten?
                </b>
              </div>
              <p className='u-color-p'>
                <IfLocale hasPercentagePricing>
                  Dat klopt, we rekenen enkel de kosten aan in de tabel hierboven en niets meer.
                  We rekenen nooit kosten aan voor storneringen of niet-succesvolle betalingen.<br />
                  Bij GoCardless betaalt u enkel <Message pointer='pricing.per_transaction_amount_normal' /> per verrichting,
                  met een maximum van <Message pointer="pricing.cost_cap" />.<br />
                  Met GoCardless Pro, betaalt u <Message pointer='pricing.pro_monthly_fee' /> per maand en
                  een kost per verrichting.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  Dat klopt, we rekenen enkel <Message pointer='pricing.pro_monthly_fee' /> per maand en een kost per verrichting.
                  We rekenen nooit kosten aan voor storneringen of niet-succesvolle betalingen.
                </IfLocale>
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Biedt GoCardless volume kortingen aan?</b>
              </div>
              <p className='u-color-p'>
                <IfLocale hasPercentagePricing>
                  Jazeker. Vanaf 1000 betalingen per maand bieden we lagere kosten aan per verrichting.
                  Voor verdere informatie, gelieve contact op te nemen
                  <Link to='contact_sales' className='u-link-color-p u-text-underline'>contact</Link>.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  Jazeker. Volume kortingen maken deel uit van onze GoCardless Pro tarieven,
                  en volume kortingen zijn beschikbaar op aanvraag voor GoCardless gebruikers die meer dan 250 betalingen
                  per maand ontvangen.
                  Voor verdere informatie, gelieve contact op te nemen
                  <Link to='contact_sales' className='u-link-color-p u-text-underline'>contact</Link>.
                </IfLocale>
              </p>
            </div>
            <IfLocale hasPercentagePricing>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-heading'>
                  <b>Wat betekent ‘met een maximum van <Message pointer="pricing.cost_cap" />’?</b>
                </div>
                <p className='u-color-p'>
                  U betaalt nooit meer dan <Message pointer="pricing.cost_cap" /> per verrichting
                  zelfs als de waarde van de verrichting hoger is dan <Message pointer='pricing.normal_capped_at_amount' />.
                </p>
              </div>
            </IfLocale>
            <IfLocale hasPercentagePricing={false}>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-heading'>
                  <b>Zijn er set up kosten?</b>
                </div>
                <p className='u-color-p'>
                  Neen, u betaalt niets om te integreren met GoCardless en onze klanten ondersteuning is volledig gratis.
                </p>
              </div>
            </IfLocale>
            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-heading'>
                <b>Zijn er kosten voor niet-succesvolle betalingen?</b>
              </div>
              <p className='u-color-p'>
                Neen. We rekenen enkel kosten aan voor betalingen die succesvol verwerkt zijn.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>Heeft u vragen?</h2>
            <p className='u-color-p u-margin-Ts'>Spreek met onze betalingsexperts op <Message pointer='phone_local' /></p>
            <IfLocale hasInstantSignup>
              <Href to='signup.path' className='btn btn--hollow u-margin-Tm'>Nu registreren</Href>
            </IfLocale>
            <IfLocale hasInstantSignup={false}>
              <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Contact</Link>
            </IfLocale>
          </div>
        </div>
      </Translation>
    );
  }
}
