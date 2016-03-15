import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class PricingDe extends React.Component {
  displayName = 'PricingDe'

  render() {
    return (
      <Translation locales='de'>
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
                      <p className='u-color-invert u-text-xs u-text-center'>Für kleine und mittelständische Unternehmen</p>
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
                          Pro Zahlung, gedeckelt bei 2 €
                        </p>
                      </div>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>
                          Jetzt anmelden
                        </Href>
                      </IfLocale>

                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Kontakt</Link>
                      </IfLocale>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Für Unternehmen, die volle Kontrolle suchen</p>
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
                          0,01 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie,<br/>plus €100 par mois
                        </p>
                      </div>

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Kontakt</Link>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-xdark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Enterprise</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Für Unternehmen, die volle Kontrolle suchen</p>
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
                          0,01 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Par transaction réussie,<br/>plus €250 par mois
                        </p>
                      </div>

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Kontakt</Link>
                    </div>
                  </div>
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
