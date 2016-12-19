import React from 'react';
import Translation from '../../../components/translation/translation';
import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersDebitoorEs extends React.Component {
  displayName = 'PartnersDebitoorEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bm'>
                    GoCardless<br />
                    para Debitoor
                  </h1>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Crea y envía facturas a tus clientes<br />
                    y ofréceles el pago por<br />
                    domiciliación bancaria con GoCardless.
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='https://debitoor.es/funciones/facturacion/pagos-online/gocardless' className='btn u-pull-start'>
                      Empieza ahora
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='debitoor-partner-logo partners-page__debitoor-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--debitoor'
                  src='/images/partners/debitoor-es-screenshot@2x.png'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='section-scroll-target' id='overview'>
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-margin-Vl'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <AutomatedYellowIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Te pagarán más rápido
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Envía facturas a tu clientes y dales la opción de que te paguen directamente por internet.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <OnlineManagementRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ofreces un mejor servicio
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  El pago por domiciliación bancaria es cómodo para ti y para tu cliente.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <SaveMoneyGreenIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ahorras tiempo
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Crea facturas online y automatiza los pagos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>1</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Crea una cuenta con Debitoor
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Suscríbete a Debitoor en <a href='https://debitoor.es/sign-up' className='u-link-color-p u-text-underline'>Debitoor.es</a>.

                Al suscribirte puedes crear hasta tres facturas gratuitas. Para seguir facturando y disfrutar de las
                diferentes funciones, tendrás que elegir un plan de suscripción. Puedes consultarlos en
                el <a href='https://debitoor.es/lista-de-funciones' className='u-link-color-p u-text-underline'>siguiente enlace</a>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__debitoor-instruction-screenshot'
              src='/images/partners/debitoor-es-instruction-1.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>2</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Conecta Debitoor con Gocardless
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Inicia sesión en tu cuenta de Debitoor.
              </p>
              <p className='u-color-dark-gray u-margin-Bm'>
                En <em>Configuración --> Recibir pago</em> encontrarás GoCardless.
                Haz clic en Configuración. Se te remitirá a un formulario en el que te tendrás que abrir una cuenta con GoCardless.
              </p>
              <p className='u-color-dark-gray u-margin-Bm'>
                En caso de que ya tengas una cuenta con GoCardless, puedes iniciar sesión en la parte inferior derecha.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__debitoor-instruction-screenshot'
              src='/images/partners/debitoor-es-instruction-2.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>3</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Cobro por domiciliación bancaria
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Ahora ya puedes cobrar tus facturas en Debitoor por domiciliación bancaria.
              </p>
              <p className='u-color-dark-gray u-margin-Bm'>
                Crea y envía una nueva factura en Debitoor. Tu cliente puede ordenar el pago por domiciliación bancaria haciendo clic
                sobre el botón de pago. Las facturas que envíes en el futuro se pagarán automáticamente por este método de pago.
              </p>
              <p className='u-color-dark-gray u-margin-Bm'>
                Si tu cuenta con GoCardless ya ha sido verificada, no tienes que hacer nada más para recibir el pago.
              </p>
              <p className='u-color-dark-gray u-margin-Bm'>
                En caso de que hayas añadido una nueva cuenta de GoCardless, tendrás que verificar de nuevo tus datos para poder
                recibir los importes transferidos. Este paso es imprescindible desde un punto de vista legal. Encontrarás una
                descripción del proceso de
                verificación <a href='https://debitoor.es/tutorial/socios/conecta-tu-cuenta-de-gocardless'
                className='u-link-color-p u-text-underline'>en el siguiente tutorial</a>.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__debitoor-instruction-screenshot'
              src='/images/partners/debitoor-es-instruction-3.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Empieza a cobrar rápido ahora
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Crea y envía facturas con rapidez y cóbralas online con facilidad.
              </p>
              <a href='https://debitoor.es/funciones/facturacion/pagos-online/gocardless' className='btn btn--hollow u-margin-Vm'>
                Crea tu factura con Debitoor
              </a>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
