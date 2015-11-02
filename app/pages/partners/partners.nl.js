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

export default class PartnersNl extends React.Component {
  displayName = 'PartnersNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='page-hero page-hero--medium page-hero--partners u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Help uw klanten online betalingen te incasseren</h1>
                  <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                    Word GoCardless partner en maak het gemakkelijk voor uw klanten om terugkerende betalingen in Nederland
                    en andere landen te incasseren
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
                  Functies
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#pricing' id='track-sticky-nav-pricing' className='sticky-nav__link'>
                  Tarieven
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#examples' id='track-sticky-nav-features' className='sticky-nav__link'>
                  Voorbeelden
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
              <h2 className='u-text-heading u-color-heading u-text-light'>
                Waarom één van onze partners worden?
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-padding-Ts'>
                GoCardless laat u toe van de lage kosten en het lage percentage niet-succesvolle verrichtingen van automatisch incasso
                 te genieten zonder de problemen van traditionele aanbieders.
              </p>
              <div className='site-container u-padding-Txxl'>
                <div className='grid u-padding-Txl'>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Win meer klanten
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Meer vraag naar uw product en meer betalende klanten.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Verbeter uw klantenbinding
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Bouw lange termijn relaties met uw klanten door hen meer te engageren met uw oplossingen.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                      Ontwikkel nieuwe inkomstenbronnen
                    </h2>
                    <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                      Vertel uw klanten over ons en ontvang een commissie.
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
                <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing'>
                  Wereldwijd bereik
                </h2>
                <p className='u-size-4of5 u-center u-color-p u-margin-Vxs'>
                  Uw klanten zullen zonder extra werk betalingen uit steeds meer landen kunnen ontvangen.
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
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                  Uw klanten betalen slechts <Message pointer='pricing.per_transaction_amount_normal' />
                </h2>
                <p className='u-text-s u-color-p u-margin-Vxs'>
                  Geen bijkomende kosten voor set up, abonnement, geweigerde machtigingen...
                  <br/> Slechts 1 % per succesvolle verrichting en hoogstens <Message pointer="pricing.cost_cap" />.
                </p>
                <Link to='contact_sales'
                query={{ s: 'partners' }}
                id='track-partners-find-out-more'
                className='btn btn--hollow u-margin-Ts'>
                  Meer info
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='section-scroll-target' id='examples'>
          <div className='u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-center u-padding-Bxxl u-margin-Bxl'>
                Sectoren die reeds met GoCardless werken
              </h2>
              <div className='grid__cell u-size-1of2 partners-page__accountancy-text'>
                <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                  Boekhouden
                </h2>
                <p className='u-text-s u-color-p u-margin-Bm'>
                  KashFlow heeft GoCardless geïntegreerd om hun klanten toe te laten snel en eenvoudig betalingen te ontvangen
                  vanuit hun KashFlow account.
                </p>
                <p className='u-text-s u-text-italic u-margin-Bxs partners-page__quote'>
                  “GoCardless gebruikers zijn loyaler en halen meer voordelen uit hun abonnement.”
                </p>
                <p className='u-text-s u-margin-Bm u-color-p'>Duane Jackson, oprichter</p>
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
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                Clubs &amp; lidmaatschap
              </h2>
              <p className='u-text-s u-color-p u-margin-Bm'>
                Teamup is GoCardless partner geworden om het gemakkelijker te maken voor fitness zaken en clubs om terugkerende betalingen
                voor hun leden op te zetten en te ontvangen.
              </p>
              <p className='u-text-s u-text-light u-text-italic u-margin-Bxs partners-page__quote'>
                “Onze klanten waarderen de gebruiksvriendelijkheid van GoCardless. Als partner waren ze cruciaal
                om onze groei te versnellen in Verenigd Koninkrijk en Europa.”
              </p>
              <p className='u-text-s u-margin-Bm u-color-p'>Matt Pegler, mede-oprichter</p>
              <img src='/images/partners/teamup-logo@2x.png' className='partners-page__partner-logo' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Txxl'>
          <div className='site-container u-padding-Txl'>
            <div className='grid__cell u-size-1of2 partners-page__billing-text u-margin-Txs'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bl'>
                Financiën en Accounting
              </h2>
              <p className='u-text-s u-color-p u-margin-Bl'>
                Zuora vertrouwt op de know how van GoCardless voor het aanbieden van SEPA incasso en maakt het zo mogelijk
                voor hun klanten om wereldwijd betalingen te ontvangen.
              </p>
              <p className='u-text-s u-text-light u-text-italic u-margin-Bxs partners-page__quote'>
                "GoCardless is een belangrijke Zuora partner die onze klanten voorziet van een ongeëvenaarde gebruikerservaring
                voor incasso. De Zuora-GoCardless integratie helpt abonnementsdiensten in Verenigd Koninkrijk en
                Europa een naadloze betalingservaring aan te bieden.”
              </p>
              <p className='u-text-s u-margin-Bm u-color-p'>Tamsyn Attiwell, VP Global Services EMEA</p>
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
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l  u-padding-Bxl'>
                U bent in goed gezelschap
              </h2>
              <img src='/images/partners/partner-logos@2x.png' className='partners-page__partner-logo-group' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-padding-Bxl'>
              GoCardless – de ideale partner voor vele sectoren
            </h2>
            <div className='grid integrations-grid'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='partners-page__container u-border-gray u-shadow-small u-text-center
                u-padding-Vl u-padding-Hm u-background-white'>
                  <figure className='svg-icon svg-icon--small u-center'>
                    <PropertyIcon className='svg-icon__image svg-icon__image--small svg-icon__image--shadow u-fill-green' />
                    <PropertyIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Vastgoed
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Help uw makelaars, verhuurders en co-working spaces met het ontvangen van huur en kosten.
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
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Software aanbieders
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Help uw klanten te groeien door tevens de verwerking van betalingen aan te bieden.
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
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Liefdadigheidsinstellingen
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Help liefdadigheidsinstellingen met fondsenwerving en het ontvangen van schenkingen.
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
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Banken
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Vertel uw klanten over ons of gebruik onze white label service.
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
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    Aanbieders van betalingsoplossingen en payment service providers
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    Werk met ons samen om automatisch incasso in Nederland, Verenigd Koninkrijk en Europa aan te bieden.
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
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Ts'>
                    En veel meer...
                  </h2>
                  <p className='u-text-s u-color-p u-margin-Txs'>
                    GoCardless ondersteunt wereldwijd vele industrieën.
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
              <h2 className='u-text-heading u-color-heading u-text-light'>
                Welk type partner bent u?
              </h2>
              <div className='grid integrations-grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Affiliate- programma
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Verdien commissie wanneer u nieuwe klanten naar GoCardless verwijst.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    Integratie in uw oplossing
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Maak het gemakkelijk voor uw klanten om terugkerende betalingen te ontvangen.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-heading u-text-light u-text-no-smoothing u-margin-Tm'>
                    White label partnerships
                  </h2>
                  <p className='u-text-s u-color-p u-size4of5 u-margin-Txs'>
                    Behoud volledige controle over uw betalingen met onze white label oplossing.
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
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Begin vandaag nog met ons samen te werken
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Indien u denkt dat uw bedrijf van een samenwerking met GoCardless kan profiteren,
                neem dan contact op - we helpen u graag verder.
              </p>
              <Link to='contact_sales'
              query={{ s: 'partners' }}
              id='track-partners-contact-sales'
              className='btn btn--hollow u-margin-Ts'>
                <Message pointer='cta.pro' />
              </Link>
            </div>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-p'><strong>Verkiest u eerst met iemand te spreken?</strong><br />
              Contacteer onze betalingsexperts op&thinsp;
              <Message pointer='phone_local' />.<br />
              We zijn bereikbaar van maandag tot vrijdag tussen 10u en 19u.
            </p>
          </div>
        </div>
      </Translation>
    );
  }
}
