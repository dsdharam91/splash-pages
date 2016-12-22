import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Tabs from '../../components/tabs/tabs';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import WhiteLabelIcon from '../../icons/svg/white-label';
import MobileIcon from '../../icons/svg/mobile';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class ProEs extends React.Component {
  displayName = 'ProEs'

  render() {
    return (
      <Translation locales='es'>
        <div>
          <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                    Controla Totalmente tus Domiciliaciones Bancarias
                  </h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Una plataforma de última tecnología<br /> para tu sistema de cobros recurrentes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <StickyNav>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#overview' className='sticky-nav__link'>
                    Descripción
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' className='sticky-nav__link'>
                    Funcionalidades
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' className='sticky-nav__link'>
                    Tarifas
                  </a>
                </li>
              </ul>
              <Link to='contact_sales' query={{ s: 'pro' }}
              className={
                'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
              }>
                <Message pointer='cta.pro' />
              </Link>

              <Href to='api_docs.path'
              className='u-pull-end u-margin-Txxs u-margin-Rm'>
                Documentación API
              </Href>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-3of4 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Bienvenido a GoCardless Pro
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Diseñado específicamente para grandes empresas,
                    GoCardless Pro combina la simplicidad de nuestro Gocardless original
                    con un completo control sobre los cobros y de la experiencia de usuario.
                    Y también te permite realizar cobros en el Reino Unido y en el espacio SEPA con una sola integración.
                  </p>
                </div>
                <div className='grid u-margin-Tl u-padding-Tm'>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Totalmente Personalizable
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      GoCardless Pro te permite poner tu logo y tu marca en todas partes.
                      Disfruta de un control total sobre tus páginas de pago y sobre las notificaciones por email que envies a tus usuarios.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Una API moderna y simple
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Toda la documentación de Pro está disponible gratuitamente en
                      nuestra <Href to='api_docs.path'>documentación de la API</Href>.
                      Hemos trabajado muy duro para que la integración de tu empresa sea tan sencilla como sea posible.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Funciona en todas partes
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Hemos hecho extremadamente sencillo el desarrollar sobre GoCardless Pro
                      y crear una nueva generación de páginas web y de apps móviles.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <SecurityIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Cifrado de grado Militar
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Nos hemos esforzado mucho en la seguridad para que tu puedas despreocuparte.
                      Protegemos todos los datos bancarios con encriptación RSA y nos comunicamos con canales seguros.
                    </p>
                  </div>
                </div>
                <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
                  ¿Quieres probar nuestra herramienta o API
                  fácilemente? <a href='https://manage-sandbox.gocardless.com/signup'>
                    Regístra una cuenta de prueba gratuita
                  </a>
                </p>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Txl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                    Estás en buena compañía
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Cada día, algunas de las mayores y más respetables compañías
                    confían en GoCardless para realizar sus cobros recurrentes
                  </p>
                </div>
                <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                  <img src='/images/logos/pro-logos@2x.png' />
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div id='optimizely-pro-video' className='u-hidden'>
              <div className='u-text-center u-padding-Vxxl'>
                <div className='site-container u-padding-Vxl'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Ve una corta descripción de GoCardless Pro (Inglés)
                  </h2>
                  <iframe src='https://player.vimeo.com/video/116341918'
                  className='u-text-center videos-container__iframe u-margin-Vl'>
                  </iframe>
                </div>
              </div>
              <hr className='u-margin-An' />
            </div>

            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of3 u-center'>
                  <figure className='svg-icon u-center'>
                    <PhoneIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <PhoneIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tm'>
                    <Message pointer='phone_local' />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      Habla con uno de nuestros expertos en Cobros y descubre como GoCardless puede ayudar a tu negocio.
                    </p>
                  </div>
                  <Link to='contact_sales' query={{ s: 'pro' }}
                  className='btn btn--hollow u-margin-Tm'>
                    <Message pointer='cta.pro' />
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light u-margin-Bs'>
                    Tu Panel de control
                  </h2>
                  <div className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    La manera sencilla de controlar tus cobros y tus clientes
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                      <a href='#customer-info'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Información de los Clientes
                      </a>
                    ), (
                      <a href='#payment-history'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Historial de Cobros
                      </a>
                    ), (
                      <a href='#filtering'
                      className='tab-link u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Filtros
                      </a>
                    ),]}>
                    <div>
                      <img src='/images/pro/customer.png'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payment.png'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payments-list.png'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='pricing'>
            <div className='u-text-center u-padding-Vxxl'>
              <div className='site-container u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' /> por transacción
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                    Precios competitivos para empresas de cualquier tamaño.<br />
                  </p>
                  <Link to='pricing' className='btn btn--hollow u-margin-Tm'>
                    Descubre más sobre nuestras tarifas
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-size-1of2 u-center u-padding-Vxl'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bm'>
                  Ponte en contacto para una cotización gratuita
                </h2>
                <Link to='contact_sales' query={{ s: 'pro' }}
                className='btn u-margin-Rm'>
                  <Message pointer='cta.pro' />
                </Link>
                <a href='https://manage-sandbox.gocardless.com/signup'
                className='btn btn--hollow'>Prueba Pro gratis</a>
                <hr className='u-margin-Vxxl' />
                <p className='u-color-dark-gray'>
                  <strong>¿Quieres hablar con alguien primero?</strong><br />
                  Llama a nuestros expertos en <Message pointer='phone_local' /><br />
                  Estamos disponibles de 10.00 - 19.00 Lunes a Viernes
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
