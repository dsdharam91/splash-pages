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
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';

export default class FeaturesDe extends React.Component {
  displayName = 'FeaturesDe'

  render() {
    return (
      <Translation locales='de'>
        <div>
          <div className='page-hero page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-margin-Tm u-color-invert u-text-center u-text-xl u-text-light'>
                   Ziehen Sie heute die ersten Zahlungen ein
                  </h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless ist der schnellste und einfachste Weg einmalige sowie <br />wiederkehrende online Zahlungen
                    in Deutschland einzuziehen
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
                    Überblick
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#features' id='track-sticky-nav-features' className='sticky-nav__link'>
                    Funktionen
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#dashboard' id='track-sticky-nav-dashboard' className='sticky-nav__link'>
                    Dashboard
                  </a>
                </li>
                <li className='sticky-nav__item'>
                  <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                    Preise
                  </a>
                </li>
              </ul>
              <IfLocale hasInstantSignup>
                <a href='https://manage.gocardless.com/signup' id='track-sticky-nav-merchants-new'
                  className={
                    'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                    'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                  }>
                  Jetzt anmelden
                </a>
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
                      Starten Sie in 24 Stunden
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Sie brauchen nur ein Bankkonto in <Message pointer='country' />.&nbsp;
                      <Link to='contact_sales'>Kontaktieren Sie uns</Link> um zu beginnen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Keine Anschlussgebühr
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless kostet <Message pointer='pricing.per_transaction_amount_normal' /> pro Zahlung
                      (gedeckelt bei <Message pointer="pricing.cost_cap" />) ohne monatliche oder Anschlussgebühr.
                      Mit wachsendem Volumen sinken die Preise.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Automatieren Sie alles
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless automatisiert für Sie das Einziehen, Verfolgen und die Schlichtung von Zahlungen. Wir übernehmen die
                      anstrengende Arbeit für Sie.
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
                      Starke Verbleibquote
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Da GoCardless auf dem Lastschriftverfahren aufbaut,
                      verlieren Sie weniger Kunden durch Kreditkartenablauf oder Kündigungen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Robuste Sicherheit
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Wir speichern alle Bankdetails mit RSA Verschlüsselung und kommunizieren ausschließlich über sichere Verbindungen.
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
                      Integrieren Sie GoCardless innerhalb von Minuten in Ihre Webseite oder App mit Hilfe
                      unserer API Leitfäden. <a href='https://developer.gocardless.com/pro'>Mehr hierzu</a>.
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
                    Halten Sie die Kontrolle über Ihren Cashflow
                  </h2>
                  <h3 className='u-text-s'>Sehen Sie sofortige Status Reports</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Unser übersichtliches Online Dashboard sowie unsere Email Benachrichtigungen halten Sie jederzeit
                    auf dem Laufenden über Ihre Kunden und deren Zahlungen.
                  </p>
                  <h3 className='u-text-s'>Exportieren Sie Ihre Daten</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Sehen Sie Ihre Daten genau so, wie Sie das möchten. GoCardless ist mit den meisten Verwaltungssoftwares kompatibel.
                  </p>
                  <h3 className='u-text-s'>Ziehen Sie täglich Zahlungen ein</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Mit GoCardless können Sie so oft Sie möchten Zahlungen kreieren — ohne extra Aufwand oder Kosten.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                    Ihre Kunden werden es lieben
                  </h2>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    GoCardless ist ein authorisierter Zahlungsdienst, der Zahlungen für Sie
                    und Ihre Kunden zum Kinderspiel macht.
                  </p>
                  <h3 className='u-text-s'>Einfache online Einrichtung</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Der gesamte Prozess findet online statt. Ihre Kunden können Zahlungen innerhalb von Minuten in unserem
                    online Formular authorisieren — auch mobil.
                  </p>
                  <h3 className='u-text-s'>Ihr Logo und Ihr Name</h3>
                  <p className='u-color-p u-margin-Bm'>
                    Generieren Sie eine tolle User Experience für Ihre Kunden,<br />indem Sie unsere Zahlungsformulare mit
                    Ihrem Logo ausstatten, und Ihre Kunden nach der Zahlung automatisch auf Ihre Seite leiten.
                  </p>
                  <h3 className='u-text-s'>Ein sicherer und einfacher Weg zu zahlen</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Mit Lastschriften gibt es für Ihre Kunden keinen Grund mehr sich über Zahlungsverzögerungen zu sorgen.
                    Ihre Kunden sind außerdem geschützt durch das SEPA Lastschriftabkommen.
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
                      Sprechen Sie heute mit einem unserer Lastschriftexperten, um zu erfahren, wie GoCardless Ihnen helfen könnte.
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
                          Erfahren Sie mehr über GoCardless Pro
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
                    Ihr Online Dashboard
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Alles, was Sie benötigen, um Zahlungen zu empfangen. Ganz ohne Installation.
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                    <a href='#dashboard-home' id='track-dashboard-home'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Überblick
                    </a>
                  ), (
                    <a href='#add-customers' id='track-dashboard-customers'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Neue Kunden
                    </a>
                  ), (
                    <a href='#take-payments' id='track-dashboard-payments'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Neue Zahlungen
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
