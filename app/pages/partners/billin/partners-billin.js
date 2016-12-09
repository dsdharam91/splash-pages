import React from 'react';

import Page from '../../../components/page/page';

import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersBillin extends React.Component {
  displayName = 'PartnersBillin'

  render() {
    return (
      <Page isInverted={false}>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bm'>
                    GoCardless para Billin
                  </h1>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Gestiona el proceso de facturación con Billin<br/>
                    y garantiza el pago de tus facturas<br/>
                    a tiempo con GoCardless
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='https://www.billin.net/programa-facturacion-domiciliacion-bancaria/?utm_source=Gocardless&utm_medium=web&utm_content=billin&utm_campaign=billin'
                    className='btn u-pull-start'>
                      Empieza Ya
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='billin-logo-gray partners-page__billin-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--billin'
                  src='/images/partners/billin-screenshot@2x.png'/>
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
                  Rápido e intuitivo
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Crea tus facturas, envíalas y cobra a tus clientes directamente con Domiciliación Bancaria<br/>
                  sin salir de Billin.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <OnlineManagementRedIcon className='svg-icon__image' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Ten el control
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Controla el estado de cada una de tus facturas en tiempo real<br/>
                  y resuelve cualquier<br/>
                  incidencia al momento.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <SaveMoneyGreenIcon className='svg-icon__image' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Cobra sin retrasos
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Ahorra tiempo, evita errores u olvidos y asegurate que tus clientes pagan a tiempo con la Domiciliación Bancaria.
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
                Abre una cuenta con GoCardless desde Billin
              </h2>

              <p className='u-color-dark-gray u-margin-Bm'>
                Empieza a cobrar en minutos creando una cuenta en GoCardless y conectandola a tu cuenta Billin.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/billin-instruction-1.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>2</div>

              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Solicita un mandato SEPA a tu cliente en solo un click
              </h2>

              <p className='u-color-dark-gray u-margin-Bm'>
                Selecciona a tus clientes uno a uno o en grupo para enviarles una Orden de Domiciliación SEPA. Una vez hayan rellenado un simple formulario online, estarás listo para cobrar.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/billin-instruction-2.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>3</div>

              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Crea tus facturas y cóbralas con Domiciliación Bancaria
              </h2>

              <p className='u-color-dark-gray u-margin-Bm'>
                Cada vez que crees una factura, puedes elegir cobrar por Domiciliación Bancaria en la fecha de vencimiento.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/billin-instruction-3.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>4</div>

              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Seguimiento de cada factura<br/>
                y del pago
              </h2>

              <p className='u-color-dark-gray u-margin-Bm'>
                Una vez recibas el dinero, las facturas correspondientes se marcarán como pagadas, y si hay cualquier incidencia, te informaremos en tiempo real para que puedas gestionarlo fácilmente.
              </p>
            </div>

            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__quickbooks-instruction-screenshot'
              src='/images/partners/billin-instruction-4.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Regístrate hoy y empieza<br/>
              a cobrar inmediatamente
              </h2>

              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Billin y la integración con GoCardless son<br/>completamente gratuitos. Sin costes de setup,<br/>mensualidades ni comisiones ocultas.
              </p>

              <a href='https://www.billin.net/programa-facturacion-domiciliacion-bancaria/?utm_source=Gocardless&utm_medium=web&utm_content=billin&utm_campaign=billin'
              to='pricing' className='btn btn--hollow u-margin-Tm'>
                Empieza a usar Billin
              </a>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
