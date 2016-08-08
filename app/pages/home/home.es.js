import React from 'react';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

import ImproveCashflowRedIcon from '../../icons/svg/improve-cashflow-red';
import CloudGreenIcon from '../../icons/svg/cloud-green';
import OnlineManagementYellowIcon from '../../icons/svg/online-management-yellow';
import SmallBusinessYellowIcon from '../../icons/svg/small-business-yellow';
import EnterpriseGreenIcon from '../../icons/svg/enterprise-green';

export default class HomeEs extends React.Component {
  displayName = 'HomeEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                Gestiona y realiza tus domiciliaciones bancarias automáticamente
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <ImproveCashflowRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Cobros automatizados
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Reduce el tiempo empleado en crear y gestionar tus cobros con nuestra API o panel de control.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CloudGreenIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Alertas en tiempo real
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Recibe el estado de tus cobros en tiempo real en tu email, o a través de nuestra API o panel de control.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <OnlineManagementYellowIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Mandatos Online
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Genera los mandatos SEPA de forma online, intégralos en tu web y olvídate del papeleo.
                </p>
              </div>
            </div>
            <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
              ¿Quieres saber más sobre SEPA?
            </p>
            <Href to='guides.path' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
              Lee nuestra guía
            </Href>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Procesamos más de 1.700 millones de euros para más de <Message pointer='number_of_merchants' /> clientes
            </h2>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-padding-Hxxl u-center'>
              <img src='/images/logos/German-logos-@2.png' />
            </div>
          </div>
        </div>
        <div className='site-container'>
          <div className='quote page-hero--icon-background u-text-center'>
            <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bm u-padding-Bl'>
              "Integramos GoCardless con nuestro software de manera fácil y sencilla. Y gracias a ellos ahora ahorramos muchísimo tiempo en
              tareas de administración que antes debíamos hacer manualmente."
            </p>
            <div className="">
              <img className="u-size-1of8 u-margin-Bxs" src='/images/testimonials/betahaus__avatar.png' />
              <div className="">
                <p className='u-color-invert u-text-heading u-text-m u-text-semi'>
                  Cristina Arnal
                </p>
                <p className='u-color-invert u-text-heading u-text-xs'>
                  Impact Hub Madrid
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='product-grid__container'>
              <div className='product-grid__section product-grid__section--first u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <SmallBusinessYellowIcon className='svg-icon__image' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                  Autónomos y negocios
                </p>
                <p className='u-color-dark-gray u-padding-Vm'>
                  Toma el control de tus cobros y asegúrate que te paguen siempre a tiempo. Mejora tu flujo de caja, reduce
                  el tiempo en tareas administrativas y paga menos.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  <Message pointer='pricing.per_transaction_amount_normal' />, máx de <Message pointer='pricing.cost_cap' />
                </p>
                <Link to='features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  Descubre más
                </Link>
              </div>
              <div className='product-grid__section u-padding-Vl'>
                <figure className='svg-icon u-center'>
                  <EnterpriseGreenIcon className='svg-icon__image' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                  Mediana y gran empresa
                </p>
                <p className='u-color-dark-gray u-padding-Vm'>
                  Domiciliaciones Bancarias para el mundo digital. Conecta tus cobros a tu empresa, reduce tus problemas
                  y aumenta tu productividad.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  Desde <Message pointer='pricing.pro_cost_per_transaction' />
                </p>
                <Link to='pro' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  Descubre más
                </Link>
              </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Precios simples y transparentes para todos
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Tarifas competitivas para todo el mundo, desde individuos a grandes empresas
              </p>
              <Link to='pricing' className='btn btn--hollow u-margin-Tm'>
                Descubre más sobre nuestras tarifas
              </Link>
            </div>
          </div>
        </div>

        <IfLocale hasInstantSignup>
          <hr className='section-divider' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' className='btn'>Empieza a cobrar a través de Domiciliación Bancaria</Href>
              <p className='u-color-dark-gray u-margin-Ts'>Sin costes por adelantado, sin comisiones encubiertas, sin compromiso</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
