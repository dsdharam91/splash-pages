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
                      Volledige controle over automatische incasso (SEPA, BACS en Autogiro)
                    </h1>
                  </Translation>
                  <Translation locales='nl-BE'>
                    <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                      Volledige controle over domiciliëringen (SEPA, BACS en Autogiro)
                    </h1>
                  </Translation>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Bouw je eigen systeem voor terugkerende betalingen <br />met ons grensverleggende platform
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
              <Href to='api_reference_link' id='track-sticky-nav-docs'
              className='u-pull-end u-margin-Txxs u-margin-Rm'>
                API documentatie
              </Href>
            </div>
          </StickyNav>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-3of4 u-center'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Maak kennis met GoCardless Pro
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    <Translation locales='nl-NL'>
                      GoCardless Pro is ontwikkeld voor grotere bedrijven.
                      Combineer het gebruiksgemak van het originele GoCardless product met volledige controle over betalingen
                      en gebruikerservaring. Incasseer doorlopende betalingen uit Nederland, de rest van de Eurozone,
                      het Verenigd Koninkrijk en Zweden met één eenvoudige integratie.
                    </Translation>
                    <Translation locales='nl-BE'>
                      GoCardless Pro is ontwikkeld voor grotere bedrijven.
                      Combineer het gebruiksgemak van het originele GoCardless product met volledige controle over betalingen
                      en gebruikerservaring. Incasseer doorlopende betalingen uit België, de rest van de Eurozone,
                      het Verenigd Koninkrijk en Zweden met één eenvoudige integratie.
                    </Translation>
                  </p>
                </div>
                <div className='grid u-margin-Tl u-padding-Tm'>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Volledig whitelabel
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Het draait om jouw merk. Profiteer van volledig controle over betalingspagina's en emailberichten naar klanten.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center'>
                    <figure className='svg-icon u-center'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Eenvoudige, gebruiksvriendelijke API
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Alle documentatie voor GoCardless Pro is gratis beschikbaar in onze
                      <Href to='api_reference_link' id='track-overview-docs'> API docs</Href>.
                      We hebben ons best gedaan om de integratie met jouw systemen zo eenvoudig mogelijk te maken.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Werkt overal
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Het is buitengewoon eenvoudig om voort te bouwen op GoCardless Pro
                      en de volgende generatie van je website of mobiele app te creëren.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                    <figure className='svg-icon u-center'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <SecurityIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                      Veiligheid voorop
                    </div>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Maak je geen zorgen over veiligheid, dat hebben wij al gedaan.
                      We slaan alle bankgegevens op met RSA encryptie en communiceren uitsluitend via beveiligde kanalen.
                    </p>
                  </div>
                </div>
                <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
                  Wil je onze API en dashboard
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                    Je bent in goed gezelschap
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Elke dag vertrouwen de grootste en meest gerespecteerde bedrijven hun betalingen toe aan GoCardless
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Betalingen uit heel Europa ontvangen?
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      <Translation locales='nl-NL'>
                        GoCardless Pro integreert als enige alle incassosystemen uit Europa in één eenvoudige integratie.
                        Dankzij onze API kan jouw bedrijf betalingen incasseren van meer dan 500 miljoen mensen in 23 Europese landen.
                      </Translation>
                      <Translation locales='nl-BE'>
                        GoCardless Pro integreert als enige alle domiciliëringssystemen uit Europa in één eenvoudige integratie.
                        Dankzij onze API kan jouw bedrijf betalingen incasseren van meer dan 500 miljoen mensen in 23 Europese landen.
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tm'>
                    <Message pointer='phone_local' />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-xs u-color-dark-gray u-margin-Ts'>
                      Neem contact met ons op en ontdek hoe GoCardless jouw bedrijf kan helpen.
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light u-margin-Bs'>
                    Jouw dashboard
                  </h2>
                  <div className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                    Een eenvoudige manier om betalingen en klanten te beheren
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
                  <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-xl'>
                    <Message pointer='pricing.pro_cost_per_transaction' /> per transactie
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                    Scherpe tarieven voor alle bedrijven: van 10 tot 10.000.000 klanten.<br />
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
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bm'>
                  Neem contact met ons op voor een vrijblijvende offerte
                </h2>
                <Link to='contact_sales' query={{ s: 'pro' }}
                id='track-cta-contact-sales' className='btn u-margin-Rm'>
                  <Message pointer='cta.pro' />
                </Link>
                <a href='https://manage-sandbox.gocardless.com/signup'
                id='track-cta-try-pro-dash' className='btn btn--hollow'>Test Pro gratis en vrijblijvend</a>
                <hr className='u-margin-Vxxl' />
                <p className='u-color-dark-gray'>
                  <strong>De mogelijkheden bespreken?</strong><br />
                  Neem contact met ons op via <Message pointer='phone_local' />.<br />
                  We zijn van maandag tot vrijdag tussen 9 en 19 uur bereikbaar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
