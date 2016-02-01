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

export default class ProNl extends React.Component {
  displayName = 'ProNl'

  render() {
    return (
      <Translation locales='nl'>
        <div>
          <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <Translation locales='nl-NL'>
                    <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                      Volledig controle over SEPA incasso
                    </h1>
                  </Translation>
                  <Translation locales='nl-BE'>
                    <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                      Volledig controle over SEPA domiciliëringen
                    </h1>
                  </Translation>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Een innovatief platform om uw netwerk <br />voor terugkerende betalingen te bouwen
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
                  <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                    Tarieven
                  </a>
                </li>
              </ul>
              <Link to='contact_sales' query={{ s: 'pro' }}
              id='track-sticky-nav-contact-sales'
              className={
                'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
              }>
                <Message pointer='cta.pro' />
              </Link>
              <a href='https://developer.gocardless.com/pro/' id='track-sticky-nav-docs'
              className='u-pull-end u-margin-Txxs u-margin-Rm'>
                API documentatie
              </a>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-3of4 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Welkom bij GoCardless Pro
                  </h2>
                  <p className='u-text-xs u-color-p u-margin-Txs'>
                    <Translation locales='nl-NL'>
                      Ontwikkeld voor grotere bedrijven,
                      GoCardless Pro combineert het gebruiksgemak van ons origineel
                      GoCardless product met volledige controle over betalingen en de gebruikerservaring.
                      Het laat u tevens toe zowel betalingen uit Nederland, de Eurozone en Verenigd Koninkrijk te ontvangen
                      met één eenvoudige integratie.
                    </Translation>
                    <Translation locales='nl-BE'>
                      Ontwikkeld voor grotere bedrijven,
                      GoCardless Pro combineert het gebruiksgemak van ons origineel
                      GoCardless product met volledige controle over betalingen en de gebruikerservaring.
                      Het laat u tevens toe zowel betalingen uit België, de Eurozone, en Verenigd Koninkrijk te ontvangen
                      met één eenvoudige integratie.
                    </Translation>
                  </p>
                </div>
                <div className='grid u-margin-Tl u-padding-Tm'>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Volledig white-label
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      GoCardless Pro zet uw merk op de voorgrond.
                      Geniet van volledig controle over uw betalingspagina's en emailberichten naar uw klanten.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Een eenvoudige, moderne API
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Alle documentatie voor uw Pro product is gratis beschikbaar in
                      onze <a href='https://developer.gocardless.com/pro' id='track-overview-docs'>API docs</a>.
                      We hebben hard gewerkt om de integratie van uw systemen zo eenvoudig mogelijk te maken.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Werkt overal
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      We maken het ongelooflijk eenvoudig om met GoCardless Pro te ontwikkelen
                      en de volgende generatie van uw website of toepassingen te creëren.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <SecurityIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Wereldklasse veiligheid
                    </div>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      We hebben alles in functie van veiligheid gesteld.
                      We slaan alle bank gegevens op met RSA encryptie en communiceren enkel via beveiligde kanalen.
                    </p>
                  </div>
                </div>
                <p className='u-color-p u-margin-Txxl u-padding-Tm'>
                  Wil u onze API en dashboard
                  proberen? <a href='https://manage-sandbox.gocardless.com/signup'>
                    Registeer voor een gratis test account
                  </a>
                </p>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Txl'>
                <div className='u-size-1of2 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                    U bent in goed gezelschap
                  </h2>
                  <p className='u-text-xs u-color-p u-margin-Txs'>
                    Dag na dag vertrouwen vele van de grootste en meest gerespecteerde bedrijven hun betalingen aan GoCardless toe
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
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Bekijk een kort overzicht van GoCardless Pro
                  </h2>
                  <iframe src='https://player.vimeo.com/video/116341918'
                  className='u-text-center videos-container__iframe u-margin-Vl'>
                  </iframe>
                </div>
              </div>
              <hr className='u-margin-An' />
            </div>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of2 u-center'>
                  <i className='europe-icon u-margin-Bs' />
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Wil u betalingen in Europa te ontvangen?
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-p u-margin-Ts'>
                      <Translation locales='nl-NL'>
                        GoCardless Pro is het enige product dat u toelaat
                        SEPA incasso betalingen uit de Eurozone en Verenigd Koninkrijk te ontvangen met één eenvoudige integratie.
                        Met onze API kan uw bedrijf betalingen ontvangen van meer dan 500 miljoen mensen in 22 Europese landen.
                      </Translation>
                      <Translation locales='nl-BE'>
                        GoCardless Pro is het enige product dat u toelaat
                        SEPA domiciliëringen uit de Eurozone en Verenigd Koninkrijk te ontvangen met één eenvoudige integratie.
                        Met onze API kan uw bedrijf betalingen ontvangen van meer dan 500 miljoen mensen in 22 Europese landen.
                      </Translation>
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
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Tm'>
                    <Message pointer='phone_local' />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-p u-margin-Ts'>
                      Spreek met onze betalingsexperts en leer hoe GoCardless uw bedrijf kan helpen.
                    </p>
                  </div>
                  <Link to='contact_sales' query={{ s: 'pro' }} id='track-cta-contact-sales'
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
                  <h2 className='u-text-heading u-color-heading u-text-xl u-text-light u-margin-Bs'>
                    Uw dashboard
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    Een eenvoudige manier om uw betalingen en klanten te beheren
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                      <a href='#customer-info' id='track-dashboard-customer'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Klanten
                      </a>
                    ), (
                      <a href='#payment-history' id='track-dashboard-payment'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Betalingen
                      </a>
                    ), (
                      <a href='#filtering' id='track-dashboard-admin'
                      className='tab-link u-padding-Vxxs u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                        Filter
                      </a>
                    ),]}>
                    <div>
                      <img src='/images/pro/customer.jpg'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payment.jpg'
                      className='pro-page__dashboard-image u-shadow-medium' />
                    </div>
                    <div>
                      <img src='/images/pro/payments-list.jpg'
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
                  <h2 className='u-text-heading u-color-heading u-text-light u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' /> per verrichting
                  </h2>
                  <p className='u-text-xs u-color-p u-margin-Vxs'>
                    Concurrentiële tarieven voor bedrijven van elke omvang.<br />
                  </p>
                  <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                    Meer over onze tarieven
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-size-1of2 u-center u-padding-Vxl'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
                  Neem contact op voor een vrijblijvende offerte
                </h2>
                <Link to='contact_sales' query={{ s: 'pro' }}
                id='track-cta-contact-sales' className='btn u-margin-Rm'>
                  <Message pointer='cta.pro' />
                </Link>
                <a href='https://manage-sandbox.gocardless.com/signup'
                id='track-cta-try-pro-dash' className='btn btn--hollow'>Test Pro gratis en vrijblijvend</a>
                <hr className='u-margin-Vxxl' />
                <p className='u-color-p'>
                  <strong>Wil u eerst met iemand spreken?</strong><br />
                  Contacteer onze betalingsexperts op <Message pointer='phone_local' /><br />
                  We zijn maandag tot vrijdag tussen 10u en 19u bereikbaar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
