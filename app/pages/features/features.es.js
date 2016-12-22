import React from 'react';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import Tabs from '../../components/tabs/tabs';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import PayOnePercentCTA from '../../components/pay-one-percent/pay-one-percent';
import ClockIcon from '../../icons/svg/clock';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import CheckListIcon from '../../icons/svg/checklist';
import CustomerIcon from '../../icons/svg/customer';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import TickIcon from '../../icons/svg/tick';
import MembershipIcon from '../../icons/svg/membership';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';

export default class FeaturesEs extends React.Component {
  displayName = 'FeaturesEs'

  render() {
    return (
      <Translation locales='es'>
        <div>
          <div className='page-hero page-hero--medium page-hero--icon-background u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl'>
                <div className='grid__cell u-size-1of2 u-margin-Txxl'>
                  <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                    Empieza a Cobrar<br />hoy mismo
                  </h1>
                  <p className='u-text-heading u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless es la manera más rápida<br />y fácil de realizar cobros online únicos<br />o recurrentes online
                    en <Message pointer='country' />.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <div className="videos-container--features">
                    <iframe src="//player.vimeo.com/video/174203778?api=1&player_id=welcome-video" id="welcome-video" width="100%" height="310" frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
                  </div>
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
                  <a href='#dashboard' className='sticky-nav__link'>
                    Panel de Control
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' className='sticky-nav__link'>
                    Tarifas
                  </a>
                </li>
              </ul>
              <IfLocale hasInstantSignup>
                <Href to='signup.path'
                className={
                    'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                    'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                  }>
                  <Message pointer='cta.basic' />
                </Href>
              </IfLocale>
              <Link to='contact_sales'
                className={
                  'btn btn--small btn--hollow u-pull-end u-text-transform-none ' +
                  'u-text-light u-text-xxs u-text-no-smoothing u-margin-Rs'
                }>
                <Message pointer='cta.pro' />
              </Link>
            </div>
          </StickyNav>
          <hr className='u-margin-An' />
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='grid'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <ClockIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <ClockIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>

                    <IfLocale hasInstantSignup={false}>
                      <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                        Comienza en 24 horas
                      </div>
                      <p className='u-color-dark-gray u-margin-Txs'>
                        Solo necesitas una cuenta bancaria en <Message pointer='country' />. <Link to='contact_sales'>
                        Contáctanos</Link> para comenzar.
                      </p>
                    </IfLocale>
                    <IfLocale hasInstantSignup>
                      <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                        Comienza en minutos
                      </div>
                      <p className='u-color-dark-gray u-margin-Txs'>
                        Sólo necesitas una cuenta bancaria en <Message pointer='country' />.&nbsp;
                        <Href to='signup.path'>Regístrate ahora</Href> y
                        podras empezar a cobrar a tus clientes en minutos.
                      </p>
                    </IfLocale>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Sin Costes
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      GoCardless cuesta sólamente <Message pointer='pricing.per_transaction_amount_normal' /> por transacción
                      (máximo de <Message pointer='pricing.cost_cap' />) sin mensualidades ni costes por adelantado.
                      Hay tarifas escalables disponibles.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Automatiza Todo
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      GoCardless automatiza el cobro, el seguimiento y la reconciliación de tus cobros. Hacemos todo el trabajo duro por tí.
                    </p>
                  </div>
                </div>
                <div className='grid u-margin-Txl u-padding-Tl'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CustomerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <CustomerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Alta retención de usuarios
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Como está construido sobre el sistema de Adeudos Directos, con Gocardless
                      no perderás clientes debido a la caducidad de las tajertas o cancelaciones.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Seguridad de grado Militar
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Guardamos todos los datos bancarios con encriptación RSA y nos comunicamente únicamente a través de canales seguros.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Una API RESTful moderna
                    </div>
                      <p className='u-color-dark-gray u-margin-Txs'>
                        Añade GoCardless a tu web o app en minutos con nuestras librerias API.&nbsp;
                        <Href to='developers.path'>Descubre más</Href>.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          <hr className='u-margin-An' />
          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/products/real-time-reports.jpg' className='basic-page__real-time-reports-image' />
                </div>
                <div className='grid__cell u-size-1of2 u-margin-Tl'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                    Asegura tu flujo de caja
                  </h2>
                  <h3 className='u-text-xs'>Sigue el estado de tus pagos en todo momento</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Nuestro panel de control y notificaciones por email te mantendran informado totalmente
                    acerca de todos tus cobros y clientes.
                  </p>
                  <h3 className='u-text-xs'>Exporta tus datos</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Analiza tus datos como quieras. GoCardless es compatible con los programas de contabilidad más populares.
                  </p>
                  <h3 className='u-text-xs'>Realiza tus cobros todos los días</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Con GoCardless puedes realizar cobros tan a menudo como quieras sin mayores costes ni molestias.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bl'>
                    A tus clientes les encantará
                  </h2>
                    <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                      GoCardless es una institución autorizada por la FCA que facilita y
                      agiliza los cobros a ti y a tus clientes.
                    </p>
                  <h3 className='u-text-xs'>Con un sencillo Setup Online</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Todo el proceso es online. Utilizando nuestro mandato online, tus clientes podrán
                    autorizar cobros en minutos - incluso desde su teléfono móvil.
                  </p>
                  <h3 className='u-text-xs'>Tu logo, en todas partes</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Ofrece una gran experiencia de usuarios añadiendo tu logo a nuestros formularios de pago y
                    enviando automáticamente a tus clientes de vuelta a tu página después de pagar.
                  </p>
                  <h3 className='u-text-xs'>Una forma segura y sencilla de pagar</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Con Domiciliación Bancaria, tus clientes no tienen que preocuparse de olvidar un pago.
                    Los clientes también están protegidos por las leyes de Protección al Consumidor de SEPA.
                  </p>
                  <IfLinkExists to='example_checkout'>
                    <Link to='example_checkout'
                    className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi u-block u-margin-Txl'>
                      Analiza una página de pago de ejemplo
                    </Link>
                  </IfLinkExists>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/es/basic-payment-page-es@2x.png' className='vertical-page__mobile-image' />
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                  Es fácil cambiar a GoCardless
                </h2>
                <div className='grid u-margin-Tl u-margin-Bxl u-padding-Vm'>
                  <div className='grid__cell u-size-1of3 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Sencillo proceso de migración
                    </div>
                    <p className='u-size-8of10 u-center u-color-dark-gray u-margin-Txs'>
                      Si ya estás utilizando Domiciliaciones Bancarias, te ayudaremos a migrar a todos en pocas horas.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Nunca estarás solo
                    </div>
                    <p className='u-size-8of10 u-center u-color-dark-gray u-margin-Txs'>
                      Hemos ayudado a cientos de empresas y podemos guiarte en los pasos
                      necesarios para <br />conseguir que tus clientes cambien.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Añade a tus clientes en un click
                    </div>
                    <p className='u-size-8of10 u-center u-color-dark-gray u-margin-Txs'>
                      Nuestra herramienta te permitirá añadir a miles de clientes en minutos; sólo necesitan
                      completar nuestro sencillo formulario de pago.
                    </p>
                  </div>
                </div>
              </div>
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
                      Habla con uno de nuestros expertos en Pagos para descubrir como GoCardless puede ayudar a tu negocio.
                    </p>
                  </div>
                  <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'>
                    <Message pointer='cta.pro' />
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='dashboard'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light u-margin-Bs'>
                    Tu Panel de Control
                  </h2>
                  <div className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Todo en la nube, nada que instalar.<br />Todo lo que necesitas para cobrar
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                    <Tabs triggers={[(
                      <a href='#dashboard-home'
                        className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Panel de Control
                      </a>
                    ), (
                      <a href='#add-customers'
                        className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Añade Clientes
                      </a>
                    ), (
                      <a href='#take-payments'
                        className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Realiza Cobros
                      </a>
                    ),]}>
                      <div>
                        <img src='/images/basic/fr/basic-dashboard-home.png'
                          className='basic-page__dashboard-image' alt='GoCardless Dashboard interface' />
                      </div>
                      <div>
                        <img src='/images/basic/fr/basic-add-customer.png'
                          className='basic-page__dashboard-image' alt='add customers form' />
                      </div>
                      <div>
                        <img src='/images/basic/fr/basic-take-payment.png'
                          className='basic-page__dashboard-image' alt='payment status timeline' />
                      </div>
                    </Tabs>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='pricing'>
            <PayOnePercentCTA />
            <hr className='u-margin-An' />
            <StartTakingPaymentsCTA />
          </div>
        </div>
        </div>
      </Translation>
    );
  }
}
