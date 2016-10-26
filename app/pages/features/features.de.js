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

export default class FeaturesDe extends React.Component {
  displayName = 'FeaturesDe'

  render() {
    return (
      <Translation locales='de'>
        <div>
          <div className='page-hero page-hero--medium page-hero--icon-background u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl'>
                <div className='grid__cell u-size-1of2 u-margin-Tl'>
                  <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                    Ziehen Sie heute die<br />ersten Zahlungen ein
                  </h1>
                  <p className='u-text-heading u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless bietet die schnellste<br />und einfachste Methode, einmalige sowie<br />wiederkehrende
                    Zahlungen online einzuziehen.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <div className="videos-container--features">
                    <iframe src="//player.vimeo.com/video/174203776?api=1&player_id=welcome-video" id="welcome-video" width="100%" height="310" frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
                  </div>
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
                <Href to='signup.path'
                id='track-sticky-nav-merchants-new'
                className={
                  'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                  'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
                }>
                  Jetzt anmelden
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
                      Starten Sie in nur wenigen Minuten
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Alles, was Sie brauchen, ist ein Bankkonto in <Message pointer='country' />.&nbsp;Richten
                      Sie Ihren Account ein und legen Sie sofort los.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Keine Einrichtungsgebühr
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Sie zahlen nur <Message pointer='pricing.per_transaction_amount_normal' /> pro erfolgreicher Transaktion
                      (höchstens <Message pointer="pricing.cost_cap" />), weder monatliche
                      Gebühren noch Einrichtungsgebühren. Mit zunehmender Transaktionsanzahl sinken die Preise.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Automatieren Sie alles
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      GoCardless automatisiert für Sie das Einziehen, Verfolgen und den Abgleich von Zahlungen.
                      Wir übernehmen die aufwendige Arbeit für Sie.
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
                      Schaffen Sie langfristige Kundenbeziehungen
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Dank der Verwendung des Lastschriftverfahrens verlieren Sie mit GoCardless keine Kunden durch
                      abgelaufene oder gesperrte Kreditkarten.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Absolute Sicherheit
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Wir speichern alle Bankdaten mittels RSA-Verschlüsselung und übertragen diese ausschließlich über sichere Verbindungen.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Moderne, RESTful API
                    </div>
                    <p className='u-color-dark-gray u-margin-Txs'>
                      Integrieren Sie GoCardless innerhalb von Minuten in Ihre Website oder App über unsere benutzerfreundlichen
                      API-Bibliotheken. <Href to='developer_link'>Mehr dazu</Href>.
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
                    Behalten Sie die Kontrolle über Ihren Cashflow
                  </h2>
                  <h3 className='u-text-xs'>Unmittelbare Statusberichte</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Unser übersichtliches Online-Dashboard sowie unsere E-Mail-Benachrichtigungen halten
                    Sie jederzeit über Ihre Kunden und deren Zahlungen auf dem Laufenden.
                  </p>
                  <h3 className='u-text-xs'>Exportieren Sie Ihre Daten</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Managen Sie Ihre Daten genau nach Ihren Vorstellungen. GoCardless ist mit den meisten Verwaltungsprogrammen kompatibel.
                  </p>
                  <h3 className='u-text-xs'>Ziehen Sie täglich Zahlungen ein</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Mit GoCardless können Sie Zahlungen erstellen so oft Sie möchten — ohne zusätzlichen Aufwand oder Kosten.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bl'>
                    Ihre Kunden werden es lieben
                  </h2>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    GoCardless ist ein autorisierter Zahlungsdienst, der Zahlungen für Sie
                    und Ihre Kunden zum Kinderspiel macht.
                  </p>
                  <h3 className='u-text-xs'>Einfache Online-Einrichtung</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Die gesamte Einrichtung erfolgt online. Ihre Kunden können Zahlungen innerhalb von
                    Minuten mittels unseres Online-Mandats autorisieren — und das selbst über Smartphone oder Tablet.
                  </p>
                  <h3 className='u-text-xs'>Ihr Logo und Ihr Name</h3>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    Bleiben Sie stets präsent für Ihre Kunden, indem Sie unsere Zahlungsformulare mit Ihrem Logo versehen
                    und Ihre Kunden nach der Zahlung automatisch auf Ihre Seite leiten.
                  </p>
                  <h3 className='u-text-xs'>Eine sichere und einfache Zahlungsweise</h3>
                  <p className='u-size-5of6 u-color-dark-gray u-margin-Bm'>
                    Dank des Lastschriftverfahrens müssen Ihre Kunden sich keine Sorgen mehr machen, Zahlungen nicht
                    rechtzeitig zu begleichen. Zudem sind sie durch das SEPA-Lastschriftabkommen abgesichert.
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
                      Sprechen Sie noch heute mit einem unserer Experten und erfahren Sie, wie GoCardless Ihnen helfen könnte.
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light u-margin-Bs'>
                    Ihr Online-Dashboard
                  </h2>
                  <div className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Alles, was Sie benötigen, um Zahlungen einzuziehen. Zu 100 % online, ganz ohne Installation.
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
