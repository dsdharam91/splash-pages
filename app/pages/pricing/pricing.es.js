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
            <div className='grid pricing-options pricing-options--new u-center u-padding-Bxl'>
              <h1 className='u-text-heading u-text-light u-text-center u-color-dark-gray u-margin-Vl'>
                Encuentra el plan perfecto para tí
              </h1>

              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Rxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-primary u-padding-Vxl u-padding-Hxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Perfecto para pequeñas <br/>y medianas empresas</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Empieza a cobrar en 5 min
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Gestión total de los cobros online
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Múltiples usuarios por cuenta
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> API REST
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Migra tus actuales clientes de Domiciliación Bancaria
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Páginas de cobro seguras y online con tu logo
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Crea planes y suscripciones al instante
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          <Message pointer='pricing.per_transaction_amount_normal' />
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Por transacción, máximo de 2 €
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

              <div className='grid__cell u-size-1of2 u-padding-Vxl u-padding-Hxs'>
                  <div className='u-shadow-large'>
                    <div className='u-relative u-background-dark-gray u-padding-Vxl u-padding-Hxl'>
                      <h2 className='u-text-heading-light u-text-center u-color-invert u-text-m'>GoCardless Pro</h2>
                      <p className='u-color-invert u-text-xs u-text-center'>Para empresas de mucho crecimiento <br/>que quieren control total</p>
                    </div>

                    <div className='u-padding-Am u-text-center u-background-white'>
                      <p className='u-padding-Hm u-text-heavy u-color-dark-gray u-text-start u-margin-Bxs'>
                        Todo lo de Standard, más:
                      </p>

                      <ul className='u-padding-Hm u-color-dark-gray u-text-start u-margin-Bl'>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Páginas de cobro e emails personalizados
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Identificador de Acreedor propio
                        </li>
                        <li className='u-margin-Bxs'>
                          <span className='u-color-accent'>&#10004;</span> Recoge datos por teléfono o papel
                        </li>
                      </ul>

                      <hr />

                      <div className='u-padding-Vs'>
                        <h2 className='u-text-heading u-text-light u-color-dark-gray u-text-center u-text-xl'>
                          0,10 - 0,60 €
                        </h2>
                        <p className='u-text-heading u-color-dark-gray u-text-center u-text-xs u-margin-Tn u-margin-Vm'>
                          Por transacción,<br/>más <strong>250 €</strong> al mes
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
                  ¿Cuánto cobráis por devolución o error en el cobro?
                </b>
              </div>
              <p className='u-color-dark-gray'>
                  No cobramos nada de nada a parte de lo que veas en la tabla de arriba.<br />
                  A diferencia de los bancos, somos totalmente transparentes en nuestro precio y
                  solo cobramos por lo que tu puedes controlar, tus transacciones.<br />
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-padding-Bxxl u-padding-Lm'>
              <div className='u-color-dark-gray'>
                <b>¿Ofreceis descuentos por grandes volúmenes?</b>
              </div>

              <p className='u-color-dark-gray'>
                  Si. Nuestra tarifa por transacción se reduce a partir de 200 cobros al mes.
                  Para saber más, por favor <Link to='contact_sales' className='u-link-color-p u-text-underline'>contacta
                  con nosotros</Link>.
              </p>
            </div>

            <IfLocale hasPercentagePricing>
              <div className='grid__cell u-size-1of2 u-padding-Bm u-padding-Rm'>
                <div className='u-color-dark-gray'>
                  <b>¿Que significa "máximo de <Message pointer="pricing.cost_cap" />"?</b>
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
