import React from 'react';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import ProductComparison from '../../components/product-comparison/product-comparison';
import Tabs from '../../components/tabs/tabs';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import PayOnePercentCTA from '../../components/pay-one-percent/pay-one-percent';
import ClockIcon from '../../icons/svg/clock';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import CheckListIcon from '../../icons/svg/checklist';
import CustomerIcon from '../../icons/svg/customer';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';

export default class FeaturesNl extends React.Component {
  displayName = 'FeaturesNl'

  render() {
    return (
      <Translation locales='nl'>
        <div>
          <div className='page-hero page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-margin-Tm u-color-invert u-text-center u-text-xl u-text-light'>
                   Ontvang vandaag nog uw eerste betalingen
                  </h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless is de snelste en eenvoudigste manier om eenmalige en <br />terugkerende online betalingen te incasseren
                  </p>
                </div>
              </div>
            </div>
          </div>
          <StickyNav>
            <div className='site-container u-padding-Vm'>
              <ul className='u-pull-start u-margin-Txxs'>
                <li className='sticky-nav__item'>
                  <a href='#overview' id='track-sticky-nav-overview' className='sticky-nav__link'>
                    Overzicht
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' id='track-sticky-nav-features' className='sticky-nav__link'>
                    Kenmerken
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#dashboard' id='track-sticky-nav-dashboard' className='sticky-nav__link'>
                    Dashboard
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                    Tarieven
                  </a>
                </li>
              </ul>
              <IfLocale hasInstantSignup>
                <Href to='signup.path'
                id='track-sticky-nav-merchants-new'
                className={
                  'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                  'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                }>
                  Nu registreren
                </Href>
              </IfLocale>
              <Link to='contact_sales' id='track-sticky-nav-contact-sales'
                className={
                  'btn btn--small btn--hollow u-pull-end u-text-transform-none ' +
                  'u-text-light u-text-xxs u-text-no-smoothing u-margin-Rs'
                }>
                <Message pointer='cta.pro' />
              </Link>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='grid'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <ClockIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <ClockIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Start in 24 uur
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      U hebt enkel een bankrekening in <Message pointer='country' /> nodig.&nbsp;
                      <Link to='contact_sales'>Contacteer ons</Link> om te beginnen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Geen set up of aansluitingskosten
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless kost slechts <Message pointer='pricing.per_transaction_amount_normal' /> per betaling
                      (met een maximum van <Message pointer="pricing.cost_cap" />) zonder maandelijkse of set up kosten.
                      Volume kortingen zijn tevens mogelijk.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Automatiseer alles
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless automatiseert het incasseren, opvolgen en reconciliëren van betalingen. Wij doen het harde werk voor u.
                    </p>
                  </div>
                </div>
                <div className='grid u-margin-Txl u-padding-Tl'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CustomerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <CustomerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Betere klantenbinding
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Aangezien GoCardless rond machtigingen en incasso gebouwd is,
                      verliest u geen klanten door annulering of vervallen van krediet kaarten.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Robuuste veiligheid
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      We slaan alle bankgegevens op met RSA versleuteling en communiceren uitsluitend over veilige kanalen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Moderne, RESTful API
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Voeg GoCardless in enkele minuten toe aan uw website of toepassing
                      met behulp van onze API libraries. <a href='https://developer.gocardless.com/pro'>Meer hierover</a>.
                    </p>
                  </div>
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
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                    Behoud controle over uw cashflow
                  </h2>
                  <h3 className='u-text-s'>Actuele Status Rapporten</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Ons overzichtelijk online dashboard evenals onze email berichten houden u op elk moment
                    op de hoogte van gedetailleerde informatie over uw klanten en hun betalingen.
                  </p>
                  <h3 className='u-text-s'>Exporteer uw data</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Bekijk uw data op elk ogenblik zoals u dat wil. GoCardless is compatibel met de meeste boekhoudpakketten.
                  </p>
                  <h3 className='u-text-s'>Incasseer dagelijks betalingen</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Met GoCardless kan u zo vaak als u wil betalingen incasseren — zonder bijkomend werk of kosten.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                    Uw klanten zullen het geweldig vinden
                  </h2>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    GoCardless is een erkende betalingsdienst, die betalingen
                    snel en eenvoudig maakt voor u en uw klanten.
                  </p>
                  <h3 className='u-text-s'>Eenvoudige online setup</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Het volledige proces is online. Uw klanten kunnen betalingen machtigen in enkele minuten
                    via ons online formulier — ook mobiel.
                  </p>
                  <h3 className='u-text-s'>Uw logo en uw naam</h3>
                  <p className='u-color-p u-margin-Bm'>
                    Creëer een goede gebruikerservaring door uw logo,<br />
                    aan ons betalingsformulier toe te voegen, en uw klanten na de betaling automatisch naar uw website verder te leiden.
                  </p>
                  <h3 className='u-text-s'>Een veilige en eenvoudige manier om te betalenn</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Met SEPA incasso hoeven uw klanten zich geen zorgen meer te maken een betaling te missen.
                    Uw klanten zijn daarenboven beschermd door SEPA Direct Debit klantenbescherming.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/features/payment-page--gyms.jpg' className='vertical-page__mobile-image' />
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
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Tm'>
                    <Message pointer="phone_local" />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-s u-color-p u-margin-Ts'>
                      Contacteer één van onze incasso experts om te bespreken hoe we u kunnen helpen.
                    </p>
                  </div>
                  <Link to='contact_sales' id='track-cta-contact-sales' className='btn btn--hollow u-margin-Tm'>
                    <Message pointer='cta.pro' />
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
              <div className='site-container u-padding-Vxl'>
                <ProductComparison />
                <table className='u-size-full'>
                  <tfoot>
                    <tr className='comparison-table__row'>
                      <td />
                      <td />
                      <td className='u-padding-As u-size-1of3'>
                        <Link to='pro' id='track-comparison-table-pro' className='u-color-primary'>
                          Leer meer over GoCardless Pro
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='dashboard'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-xl u-text-light u-margin-Bs'>
                    Uw online dashboard
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Alles wat u nodig heeft om online betalingen te ontvangen, zonder enige software installatie.
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                    <a href='#dashboard-home' id='track-dashboard-home'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Overzicht
                    </a>
                  ), (
                    <a href='#add-customers' id='track-dashboard-customers'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Voeg klanten toe
                    </a>
                  ), (
                    <a href='#take-payments' id='track-dashboard-payments'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Voeg betalingen toe
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
      </Translation>
    );
  }
}
