import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class PricingEs extends React.Component {
  displayName = 'PricingEs'

  render() {
    return (
      <Translation locales='es'>
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
                      <p className='u-color-invert u-text-xs u-text-center'>Perfecto para pequeñas y medianas empresas</p>
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
                          Por transacción, máximo de 2€
                        </p>
                      </div>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>
                          Regístrate hoy
                        </Href>
                      </IfLocale>

                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contacta con nosotros</Link>
                      </IfLocale>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Para empresas que<br/>quieren control total</p>
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

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contacta con nosotros</Link>
                    </div>
                  </div>
              </div>

              <div className='grid__cell u-size-1of3 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-xdark-gray u-padding-Vxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Enterprise</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Para empresas que<br/>quieren control total</p>
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

                      <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contacta con nosotros</Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vm' id='scale-pricing-container'>
          <div className='site-container u-text-center u-padding-Vl'>
              <h2 className='u-text-heading-light u-color-dark-gray'>Sobre nuestras tarifas</h2>
          </div>
          <div className='grid u-size-4of5 u-center u-padding-Vm'>
            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Rm'>
              <div className='u-color-dark-gray'>
                <b>
                  ¿Hay algún otro coste?
                </b>
              </div>
              <p className='u-color-dark-gray'>
                <IfLocale hasPercentagePricing>
                  No, no hay ningún otro coste aparte de los descritos en la tabla superior.
                  Nunca cobramos por Devoluciones de recibos o errores de cobro.<br />
                  Con Gocardless, todo lo que pagarás es <Message pointer='pricing.per_transaction_amount_normal' /> del total de la
                  transacción con un máximo de <Message pointer="pricing.cost_cap" />.<br />
                  Con GoCardless Pro, pagarás <Message pointer='pricing.pro_monthly_fee' /> de fijo mensual y
                  una tarifa por cada transacción.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  No, sólo cobramos los <Message pointer='pricing.pro_monthly_fee' /> de fijo mensual y una tarifa por cada transacción.
                  Nunca cobramos por Devoluciones de recibos o errores de cobro.
                  </IfLocale>
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>¿Ofreceis descuentos por grandes volúmenes?</b>
              </div>

              <p className='u-color-dark-gray'>
                <IfLocale hasPercentagePricing>
                  Si. Nuestra tarifa por transacción se reduce a partir de 1.000 cobros al mes.
                  Para saber más, por favor <Link to='contact_sales' className='u-link-color-p u-text-underline'>contacta
                  con nosotros</Link>.
                </IfLocale>
                <IfLocale hasPercentagePricing={false}>
                  Si. Los descuentos por altos vólumenes están incluídos en las tarifas de GoCardless Pro, y los precios
                  escalables están disponibles si son solicitados por los usuarios de Gocardless que superen los
                  250 adeudos mensuales.
                  Para saber más, por favor <Link to='contact_sales' className='u-link-color-p u-text-underline'>
                  contacta con nosotros</Link>.
                </IfLocale>
              </p>
            </div>

            <IfLocale hasPercentagePricing>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>¿Que significa "máximo de<Message pointer="pricing.cost_cap" />"?</b>
                </div>
                <p className='u-color-dark-gray'>
                  Nunca pagarás más de <Message pointer="pricing.cost_cap" /> por transacción
                  incluso si el valor de la transacción es mayor que <Message pointer='pricing.normal_capped_at_amount' />.
                </p>
              </div>
            </IfLocale>

            <IfLocale hasPercentagePricing={false}>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>¿Hay algún coste de implementación?</b>
                </div>
                <p className='u-color-dark-gray'>
                  No, no tendrás que pagar nada por implementar GoCardless y nuestro soporte es gratuito.
                </p>
              </div>
            </IfLocale>

            <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>¿Se me cobrará por un cobro fallido?</b>
              </div>
              <p className='u-color-dark-gray'>
                No. Sólo cobramos nuestra tarifa de los cobros correctos.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />

        <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>¿Tienes alguna pregunta?</h2>

            <p className='u-color-dark-gray u-margin-Ts'>Habla con uno de nuestros expertos en cobros en <Message pointer='phone_local' /></p>

            <IfLocale hasInstantSignup>
              <Href to='signup.path' className='btn btn--hollow u-margin-Tm'>Regístrate hoy</Href>
            </IfLocale>

            <IfLocale hasInstantSignup={false}>
              <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-margin-Tm'>Contacta con nosotros</Link>
            </IfLocale>
          </div>
        </div>
      </Translation>
    );
  }
}
