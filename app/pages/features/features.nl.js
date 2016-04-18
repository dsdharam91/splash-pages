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
                   Ontvang vandaag nog je eerste betalingen
                  </h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless is de snelste en eenvoudigste manier om eenmalige en <br />terugkerende betalingen te incasseren
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
                  Registreer nu
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
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Start vandaag nog
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      GoCardless is er voor iedereen. Je hebt alleen een Nederlandse bankrekening nodig.&nbsp;
                      <Link to='contact_sales'>Neem contact met ons op</Link> om te beginnen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Geen opstartkosten
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Je betaalt slechts <Message pointer='pricing.per_transaction_amount_normal' /> per transactie
                      (met een maximum van <Message pointer="pricing.cost_cap" />).<br />Geen opstart- of abonnementskosten.
                       <br />Ook volumekorting is mogelijk.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Automatiseer alles
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      GoCardless automatiseert de ontvangst, opvolging en reconciliatie van je betalingen. Wij doen al het werk voor je.
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
                      Bespaar tijd
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                    <Translation locales='nl-NL'>
                      Wachten op betalingen of betalingsherinneringen uitsturen is verleden tijd.
                      Met GoCardless ontvang je betalingen via automatische incasso.
                    </Translation>
                    <Translation locales='nl-BE'>
                      Wachten op betalingen of betalingsherinneringen uitsturen is verleden tijd.
                      Met GoCardless ontvang je betalingen via domiciliëring.
                    </Translation>
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Veiligheid voorop
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Maak je geen zorgen over veiligheid, dat hebben wij al gedaan.
                      We slaan alle bankgegevens op met RSA encryptie en communiceren uitsluitend via beveiligde kanalen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Gebruiksvriendelijke, RESTful API
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Voeg GoCardless in enkele minuten toe aan je website of app met onze gebruiksvriendelijke API. <a href='https://developer.gocardless.com/'>Lees meer</a>.
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                    Volledige controle over je cashflow
                  </h2>
                  <h3 className='u-text-xs'>Actuele Status Rapporten</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Altijd op de hoogte van gedetailleerde informatie over je klanten en hun betalingen dankzij
                    een overzichtelijk online dashboard en e-mail notificaties.
                  </p>
                  <h3 className='u-text-xs'>Exporteer je data</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Bekijk je data op jouw manier. GoCardless is compatibel met de meeste boekhoudpakketten.
                  </p>
                  <h3 className='u-text-xs'>Voeg dagelijks nieuwe betalingen toe</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Er zijn geen grenzen. Voeg zo vaak als je wilt nieuwe betalingen toe. Zonder gedoe of extra kosten.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bl'>
                    Waarom jouw klanten blij worden van GoCardless
                  </h2>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    GoCardless is een erkende betalingsdienst.
                    Wij maken betalen simpel en snel voor jou en je klanten.
                  </p>
                  <h3 className='u-text-xs'>Volledig online</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Er komt geen papier of bankpas bij kijken. Klanten kunnen binnen enkele minuten een machtiging afgeven
                    via ons online formulier – zelfs vanaf hun mobiel.
                  </p>
                  <h3 className='u-text-xs'>Personaliseer</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Voeg je logo toe aan het betaalformulier en stuur klanten na betaling automatisch terug
                    naar je website voor een optimale gebruikerservaring.
                  </p>
                  <h3 className='u-text-xs'>Veilig en eenvoudig betalen</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                  <Translation locales='nl-NL'>
                    Dankzij automatische incasso vergeten je klanten nooit meer te betalen. Bovendien zijn ze beschermd
                    door SEPA klantenbescherming.
                  </Translation>
                  <Translation locales='nl-BE'>
                    Dankzij onze domiciliëringen vergeten je klanten nooit meer te betalen. Bovendien zijn ze beschermd
                    door SEPA klantenbescherming.
                  </Translation>
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tm'>
                    <Message pointer="phone_local" />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      Neem contact met ons op en ontdek hoe we jouw bedrijf kunnen helpen.
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
                          Meer over GoCardless Pro
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light u-margin-Bs'>
                    Jouw online dashboard
                  </h2>
                  <div className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Je hoeft geen software te installeren. Alles wat je nodig hebt om betaald te krijgen volledig online.
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
