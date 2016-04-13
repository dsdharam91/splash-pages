import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';

import TickIcon from '../../icons/svg/tick';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import CustomerIcon from '../../icons/svg/customer';
import AddPartnerIcon from '../../icons/svg/add-partner';

import PropertyIcon from '../../icons/svg/property';
import CharityIcon from '../../icons/svg/charity';
import BanksIcon from '../../icons/svg/banks';
import ManageSoftwareIcon from '../../icons/svg/manage-software';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import NewIndustryIcon from '../../icons/svg/new-industry';
import WhiteLabelIcon from '../../icons/svg/white-label';
import MembershipIcon from '../../icons/svg/membership';

import Link from '../../components/link/link';
import StickyNav from '../../components/sticky-nav/sticky-nav';

export default class PartnersEs extends React.Component {
  displayName = 'PartnersEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='page-hero page-hero--medium page-hero--partners u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Ayuda a tus clientes a ganar dinero</h1>
                <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                  Siendo Asociado de GoCardless tus clientes serán capaces de realizar<br />cobros recurrentes
                  de <Message pointer='country' /> y el extranjero.
                </p>
              </div>
            </div>
          </div>
        </div>
        <StickyNav>
          <div className='site-container u-padding-Vm'>
            <ul className='u-pull-start u-margin-Txxs'>
              <li className='sticky-nav__item'>
                <a href='#features' id='track-sticky-nav-overview' className='sticky-nav__link'>
                  Funcionalidades
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                  Tarifas
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#examples' id='track-sticky-nav-features' className='sticky-nav__link'>
                  Ejemplos
                </a>
              </li>
            </ul>
            <Link to='contact_sales' query={{ s: 'partners' }}
            id='track-partners-sticky-nav-contact-sales'
            className={
              'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
              'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
            }>
              <Message pointer='cta.pro' />
            </Link>
          </div>
        </StickyNav>
        <div className='section-scroll-target' id='features'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light'>
                ¿Por qué ser nuestro asociado?
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-padding-Ts'>
                GoCardless permite beneficiarte de nuestras geniales tarifas y nuestra baja tasa de cobros fallidos en
                Domiciliaciones Bancarias
                sin las complicaciines asociadas a los bancos.
              </p>
              <div className='site-container u-padding-Txxl'>
                <div className='grid u-padding-Txl'>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Obten más usuarios
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Atrae nuevos usuarios y convierte más pruebas gratuitas en clientes de pago.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Reduce el abandono
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Conserva a un mayor número de clientes, haciendoles más dependientes de tu producto.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Consigue nuevos ingresos
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Traenos nuevos usuarios y ganarás una comisión de cada transacción realizada.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='u-padding-Vxl'>
              <div className='grid__cell u-size-2of3 u-text-center'>
                <img src='/images/partners/partners-map@2x.jpg' />
              </div>
              <div className='grid__cell u-size-1of3 u-text-center partners-page__global-text'>
                <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing'>
                  Alcance global
                </h2>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Vxs'>
                  Tus clientes podrán realizar cobros de un número cada vez mayor de países,
                  sin tener que hacer nada extra.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='pricing'>
          <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
            <div className='u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  Tus clientes sólamente pagan un <Message pointer='pricing.per_transaction_amount_normal' />
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                  El registro es gratuito y no hay comisiones ocultas. Solo un 1% por transacción, con un máximo
                  de <Message pointer="pricing.cost_cap" />.
                </p>
                <Link to='contact_sales'
                query={{ s: 'partners' }}
                id='track-partners-find-out-more'
                className='btn btn--hollow u-margin-Ts'>
                  Saber más
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='examples'>
          <div className='u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-center u-padding-Bxxl u-margin-Bxl'>
                Sectores que ya utilizan GoCardless
              </h2>
              <div className='grid__cell u-size-1of2 partners-page__accountancy-text'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                  Contabilidad
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Bm'>
                  KashFlow se integró con GoCardless para permitir a sus usuarios realizar cobros
                  rápida y fácilmente desde su propia cuenta de KashFlow.
                </p>
                <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                  “Los usuarios de GoCardless se quedan más tiempo y obtenemos más ingresos de sus cuentas.”
                </p>
                <p className='u-text-xs u-margin-Bm u-color-dark-gray'>Duane Jackson, Fundador</p>
                <img src='/images/partners/kashflow-logo@2x.png' className='partners-page__partner-logo' />
              </div>
              <div className='grid__cell u-size-1of2 partners-page__illustration'>
                <img src='/images/partners/oauth-illustration@2x.png'
                className='partners-page__browser-image'/>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 partners-page__illustration u-text-start'>
              <img src='/images/partners/take-payment-illustration@2x.png'
              className='partners-page__browser-image'/>
            </div>
            <div className='grid__cell u-size-1of2 partners-page__clubs-text'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                Clubs &amp; Asociaciones
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Bm'>
                TeamUp se asoció con GoCardless para ayudar a los gimnasios y clubs de todo el mundo a realizar
                y administrar las suscripciones de sus miembros.
              </p>
              <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                “A nuestros clientes les encanta lo fácil que resulta utilizar GoCardless, y eso nos ha ayudado a crecer
                muchísimo en el Reino Unido y el resto de Europa.”
              </p>
              <p className='u-text-xs u-margin-Bm u-color-dark-gray'>Matt Pegler, Co-Fundador</p>
              <img src='/images/partners/teamup-logo@2x.png' className='partners-page__partner-logo' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Txxl'>
          <div className='site-container u-padding-Txl'>
            <div className='grid__cell u-size-1of2 partners-page__billing-text'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                Contabilidad
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Bl'>
                Con la integración de GoCardless y Debitoor, los clientes de Debitoor podrán cobrar de forma segura
                y sencilla por Domiciliación Bancaria. Toda la información relevante estará disponible en el panel de
                control de Debitoor en tiempo real.
              </p>
              <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                "Con GoCardless, solucionamos dos problemas de nuestros clientes - poder cobrar rápidamente y de forma
                segura y ser capaz de ver y reconciliar estas transacciones en su contabilidad."
              </p>
              <p className='u-text-xs u-margin-Bm u-color-dark-gray'>Pilar Martin, Director de España</p>
              <img src='/images/partners/debitoor-logo@2x.png' className='partners-page__partner-logo' />
            </div>
            <div className='grid__cell u-size-1of2 partners-page__illustration u-text-center'>
              <img src='/images/partners/pay-via-mobile-illustration@2x.png'
              className='partners-page__mobile-image'/>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l  u-padding-Bxl'>
                Estarás en buena compañía
              </h2>
              <img src='/images/partners/partner-logos@2x.png' className='partners-page__partner-logo-group' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
              Más sectores que se pueden asociar con GoCardless
            </h2>
            <div className='grid integrations-grid'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <PropertyIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <PropertyIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Ts'>
                    Administradores de Fincas
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Permite a tus administradores cobrar la cuota de la comunidad.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <ManageSoftwareIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-blue' />
                    <ManageSoftwareIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Ts'>
                    Business Management
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Ayuda a tus clientes a crecer ofreciendoles pagos en tu producto.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <CharityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-yellow' />
                    <CharityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Ts'>
                    Organizaciones Benéficas
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Permite cobrar donaciones a través de Domiciliación Bancaria.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <BanksIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-yellow' />
                    <BanksIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Ts'>
                    Bancos &amp; Gestores
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Remitenos a tus clientes o usa nuestro servicio de marca blanca.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Ts'>
                    Prov. de Servicios de Pago
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Úsanos para ofrecer Domiciliaciones Bancarias en todo el mundo.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <NewIndustryIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-blue' />
                    <NewIndustryIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Ts'>
                    Y muchos más&hellip;
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    GoCardless puede ayudar a muchos sectores en todo el mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='options'>
          <div className='u-padding-Vxxl u-text-center'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light'>
                ¿Qué tipo de Asociado eres tu?
              </h2>
              <div className='grid integrations-grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Programa de afiliados
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Gana una comisión cuando nos remitas nuevos usuarios a Gocardless.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Integración de la App
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Simplifica a tus clientes los cobros recurrentes.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Asociado de Marca Blanca
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Toma control total de los cobros usando nuestra integración de marca blanca.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Conviertete en nuestro asociado hoy
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Si crees que tu negocio puede beneficiarse de asociarse con GoCardless,
                <br />por favor ponte en contacto con nosotros – estaremos encantados de ayudar.
              </p>
              <Link to='contact_sales'
              query={{ s: 'partners' }}
              id='track-partners-contact-sales'
              className='btn btn--hollow u-margin-Ts'>
                <Message pointer='cta.pro' />
              </Link>
            </div>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-dark-gray'><strong>¿Quieres hablar con alguien primero?</strong><br />
              Llama a nuestros expertos en cobros a &thinsp;
              <Message pointer='phone_local' /><br />
              Estamos disponibles de 9.00 - 18.00 Lunes a Viernes
            </p>
          </div>
        </div>
      </Translation>
    );
  }
}
