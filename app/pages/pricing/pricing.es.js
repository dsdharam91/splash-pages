import React from 'react';
import classNames from 'classnames';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';
import { getMessage } from '../../components/intl/intl';

export default class PricingEs extends React.Component {
  displayName = 'PricingEs'

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const hasPercentagePricing = getMessage(this.context.messages, 'country_properties.has_percentage_pricing');
    return (
      <Translation locales='es'>
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
                      Por transacción, máximo de <Message pointer="pricing.cost_cap" />
                    </p>
                  </div>
                  <ul className='pricing-options__list'>
                    <li className='pricing-options__list-item u-color-dark-gray'>
                      <b>Perfecto para pequeñas y medianas empresas</b>
                    </li>
                    <li className='pricing-options__list-item'>
                      Sin costes por adelantado, sin comisiones ocultas, sin compromiso</li>
                    <li className='pricing-options__list-item'>
                      Tarifas escalables disponibles (<a href='#scale-pricing-container'>?</a>)
                    </li>
                    <IfLinkExists to='features'>
                      <li className='pricing-options__list-item'>
                        <Link to='features'>Descrubre más sobre GoCardless</Link>
                      </li>
                    </IfLinkExists>
                    <li className='pricing-options__list-button'>
                      <IfLocale hasInstantSignup>
                        <Href to='signup.path' className='btn u-size-full'>Regístrate hoy</Href>
                      </IfLocale>
                      <IfLocale hasInstantSignup={false}>
                        <Link to='contact_sales' query={{ s: 'pricing' }} className='btn u-size-full'>Contacta con nosotros</Link>
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
                    Por transacción
                  </p>
                </div>
                <ul className='pricing-options__list'>
                  <li className='pricing-options__list-item u-color-dark-gray'>
                    <b>Para empresas que quieren control total</b>
                  </li>
                  <li className='pricing-options__list-item'>
                    <b><Message pointer='pricing.pro_monthly_fee' /> de gasto fijo mensual</b>, sin gastos ocultos de ningún tipo
                  </li>
                  <li className='pricing-options__list-item'>
                    Para negocios con <b><Message pointer='pricing.pro_number_of_monthly_payments' /></b> al mes
                  </li>
                  <li className='pricing-options__list-item'>
                    <Link to='pro'>Descubre más sobre Pro </Link>
                  </li>
                  <li className='pricing-options__list-button'>
                    <Link to='contact_sales' query={{ s: 'pricing' }} className='btn btn--hollow u-size-full'>Contacta con nosotros</Link>
                  </li>
                </ul>
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
              <Href to='signup.path' className='btn btn--hollow u-margin-Tm'>Registrate hoy</Href>
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
