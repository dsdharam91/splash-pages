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

export default class PartnerWithUsNl extends React.Component {
  displayName = 'PartnerWithUsNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='page-hero page-hero--medium page-hero--partners u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Help je klanten om betaald te krijgen</h1>
                  <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                    Word GoCardless partner en help je klanten om terugkerende betalingen te incasseren
                    <br />uit binnen- en buitenland
                  </p>
               </div>
            </div>
          </div>
        </div>
        <StickyNav>
          <div className='site-container u-padding-Vm'>
            <ul className='u-pull-start u-margin-Txxs'>
              <li className='sticky-nav__item'>
                <a href='#features' className='sticky-nav__link'>
                  Kenmerken
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#pricing' className='sticky-nav__link'>
                  Tarieven
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#examples' className='sticky-nav__link'>
                  Voorbeelden
                </a>
              </li>
            </ul>
            <Link to='contact_sales' query={{ s: 'partners' }}
           
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
                Waarom samenwerken met GoCardless?
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-padding-Ts'>
                <Translation locales='nl-NL'>
                  Met GoCardless profiteer je van alle voordelen van automatische incasso. En dat zonder het gedoe van traditionele aanbieders.
                </Translation>
                <Translation locales='nl-BE'>
                  Met GoCardless profiteer je van alle voordelen van domiciliëringen. En dat zonder het gedoe van traditionele aanbieders.
                </Translation>
              </p>
              <div className='site-container u-padding-Txxl'>
                <div className='grid u-padding-Txl'>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Breid je klantenbestand uit
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Haal meer leads binnen en zet meer free trials om in betalende klanten.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Betere klantenbinding
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Verbeter klantrelaties door je klanten meer bij je oplossingen te betrekken.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Ontwikkel nieuwe inkomstenbronnen
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Vertel je klanten over ons en ontvang commissie op transactiekosten.
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
                  Wereldwijd bereik
                </h2>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Vxs'>
                  Je klanten kunnen terugkerende betalingen incasseren uit steeds meer landen, zonder er iets voor te hoeven doen.
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
                  Je klanten betalen slechts <Message pointer='pricing.per_transaction_amount_normal' />
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                  Geen opstartkosten of verborgen kosten.
                  <br/> Slechts 1% per succesvolle transactie met een maximum van <Message pointer="pricing.cost_cap" />.
                </p>
                <Link to='contact_sales'
                query={{ s: 'partners' }}
               
                className='btn btn--hollow u-margin-Ts'>
                  Meer weten
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
                Sectoren die al met GoCardless werken
              </h2>
              <div className='grid__cell u-size-1of2 partners-page__accountancy-text'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                  Boekhouding &amp; Accountancy
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Bm'>
                  KashFlow werkt samen met GoCardless zodat hun klanten snel en eenvoudig betalingen kunnen incasseren vanuit hun KashFlow account.
                </p>
                <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                  “GoCardless gebruikers zijn loyaler en halen meer voordelen uit hun abonnement.”
                </p>
                <p className='u-text-xs u-margin-Bm u-color-dark-gray'>Duane Jackson, oprichter</p>
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
                Clubs &amp; Ledenadministratie
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Bm'>
                GoCardless partner Teamup helpt sportscholen en clubs om terugkerende betalingen van hun leden te incasseren.
              </p>
              <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                “Onze klanten waarderen de gebruiksvriendelijkheid van GoCardless. Als partner waren ze cruciaal
                om onze groei te versnellen in Verenigd Koninkrijk en Europa.”
              </p>
              <p className='u-text-xs u-margin-Bm u-color-dark-gray'>Matt Pegler, medeoprichter</p>
              <img src='/images/partners/teamup-logo@2x.png' className='partners-page__partner-logo' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Txxl'>
          <div className='site-container u-padding-Txl'>
            <div className='grid__cell u-size-1of2 partners-page__billing-text u-margin-Txs'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                Facturatie &amp; Abonnementsdiensten
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Bl'>
              <Translation locales='nl-NL'>
                Zuora koos voor GoCardless als automatische incasso provider. Klanten kunnen nu wereldwijd betalingen incasseren.
              </Translation>
              <Translation locales='nl-BE'>
                Zuora koos voor GoCardless als domiciliëringsprovider. Klanten kunnen nu wereldwijd betalingen incasseren.
              </Translation>
              </p>
              <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
              <Translation locales='nl-NL'>
                "GoCardless is een belangrijke Zuora partner die onze klanten voorziet van een ongeëvenaarde automatische
                incasso ervaring. Dankzij de Zuora-GoCardless integratie kunnen abonnementsdiensten in Europa en Verenigd Koninkrijk
                hun klanten een naadloze betalingservaring te bieden.”
              </Translation>
              <Translation locales='nl-BE'>
                "GoCardless is een belangrijke Zuora partner die onze klanten voorziet van een ongeëvenaarde domiciliëringservaring.
                Dankzij de Zuora-GoCardless integratie kunnen abonnementsdiensten in Europa en Verenigd Koninkrijk
                hun klanten een naadloze betalingservaring te bieden.”
              </Translation>
              </p>
              <p className='u-text-xs u-margin-Bm u-color-dark-gray'>Tamsyn Attiwell, VP Global Services EMEA</p>
              <img src='/images/partners/zuora-logo@2x.png' className='partners-page__partner-logo' />
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
                Je bent in goed gezelschap
              </h2>
              <img src='/images/partners/partner-logos@2x.png' className='partners-page__partner-logo-group' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
              GoCardless: partner voor de meest uiteenlopende sectoren
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
                    Vastgoed
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Help je makelaars, verhuurders en aanbieders van werkplekken om huur te ontvangen.
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
                    Software ontwikkelaars
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Help je klanten om te groeien door automatische incasso te verwerken in je product.
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
                    Goede doelen
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Help stichtingen en goede doelen om donaties te ontvangen via automatische incasso.
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
                    Banken
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Stuur je klanten naar ons door of gebruik onze whitelabel service.
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
                    Betaaldiensten
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                  <Translation locales='nl-NL'>
                    Bied via GoCardless automatische incasso aan in Nederland en Europa.
                  </Translation>
                  <Translation locales='nl-BE'>
                    Bied via ons domiciliëringen in België, Verenigd Koninkrijk en Europa aan.
                  </Translation>
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
                    En nog veel meer...
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    GoCardless is de partner voor de meest uiteenlopende sectoren.
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
                Welke partner ben jij?
              </h2>
              <div className='grid integrations-grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Affiliate programma
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Verwijs nieuwe klanten door naar GoCardless en verdien commissie.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    App integratie
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Help je klanten om eenvoudig terugkerende betalingen te incasseren.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Whitelabel partnerships
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Behoud volledige controle over betalingen met onze whitelabel oplossing.
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
                Werk vandaag nog met ons samen
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Kan jouw bedrijf profiteren van een samenwerking met GoCardless? Neem dan contact met ons op. We helpen je graag verder.
              </p>
              <Link to='contact_sales'
              query={{ s: 'partners' }}
             
              className='btn btn--hollow u-margin-Ts'>
                <Message pointer='cta.pro' />
              </Link>
            </div>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-dark-gray'><strong>De mogelijkheden bespreken?</strong><br />
              Neem contact met ons op via&thinsp;
              <Message pointer='phone_local' />.<br />
              We zijn bereikbaar van maandag tot vrijdag tussen 9 en 19 uur.
            </p>
          </div>
        </div>
      </Translation>
    );
  }
}
