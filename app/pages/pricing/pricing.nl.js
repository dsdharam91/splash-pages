import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class PricingNl extends React.Component {
  displayName = 'PricingNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing'>
          <div className='site-container'>
            <div className='grid pricing-options pricing-options--three-tiers u-center u-padding-Bxl'>
              <h1 className='u-text-heading u-text-light u-text-center u-color-dark-gray u-margin-Vl'>
                The perfect plan for you
              </h1>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Rxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-primary u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Ideaal voor midden- en kleinbedrijf</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Instant online set-up and approval
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Online dashboard
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Multiple users per account
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> REST API
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Migrate existing Direct Debit customers
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Secure payment pages with your logo
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details online
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          <Message pointer='pricing.per_transaction_amount_normal' />
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Per transactie, met een maximum van € 2
                        </p>
                      </div>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>
                          Registreer nu
                        </Href>
                      </IfLocale>

                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Neem contact op</Link>
                      </IfLocale>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Voor bedrijven die volledige controle willen</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Standard, plus:
                      </p>

                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label payment pages &amp; emails
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label customer bank statements
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details by phone and paper
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          € 0,01 - 0,60
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie,<br/>plus €100 par mois
                        </p>
                      </div>

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Neem contact op</Link>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-xdark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Enterprise</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Voor bedrijven die volledige controle willen</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Everything in Pro, plus:
                      </p>

                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label payment pages &amp; emails
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> White-label customer bank statements
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Collect details by phone and paper
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          € 0,01 - 0,60
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie,<br/>plus €250 par mois
                        </p>
                      </div>

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Neem contact op</Link>
                    </div>
                  </div>
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
