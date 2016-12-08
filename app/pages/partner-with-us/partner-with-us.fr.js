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

export default class PartnerWithUsFr extends React.Component {
  displayName = 'PartnerWithUsFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='page-hero page-hero--medium page-hero--partners u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>Aidez vos clients à être payés</h1>
                <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                  En devenant partenaire de GoCardless, vous permettrez à vos clients de prendre des paiements récurrents
                  en <Message pointer='country' /> et à l'étranger
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
                  Fonctionalités
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#pricing' className='sticky-nav__link'>
                  Tarifs
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#examples' className='sticky-nav__link'>
                  Exemples
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
                Pourquoi devenir un de nos partenaires ?
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-padding-Ts'>
                GoCardless vous permet de bénéficier des tarifs intéressants et des taux d'échecs réduits du
                prélèvement automatique sans la complexité associée aux prestataires traditionnels.
              </p>
              <div className='site-container u-padding-Txxl'>
                <div className='grid u-padding-Txl'>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <MembershipIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                      <MembershipIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Attirez plus de clients
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Attirez de nouveaux prospects et fidélisez vos clients existants.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <TickIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                      <TickIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Améliorez la rétention
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                      Conservez vos clients existants plus longtemps en les rendant plus engagés avec votre solution.
                    </p>
                  </div>
                  <div className='grid__cell u-text-center u-size-1of3'>
                    <figure className='svg-icon u-center'>
                      <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                      <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                    </figure>
                    <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                      Créez de nouveaux revenus
                    </h2>
                    <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                     Recommendez-nous à vos clients et recevez une commission sur nos frais de transaction.
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
                  Portée globale
                </h2>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Vxs'>
                  Vos clients pourront prendre des paiements vers de plus en plus de pays,
                  sans avoir quoi ce soit de plus à faire.
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
                  Vos clients paient uniquement <Message pointer='pricing.per_transaction_amount_normal' />
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                  Pas de frais de mise en place, mensuels, de mandat, de rejet... <br/>Seulement 1% par transaction réussie,
                  plafonné à <Message pointer="pricing.cost_cap" /> par transaction.
                </p>
                <Link to='contact_sales'
                query={{ s: 'partners' }}
               
                className='btn btn--hollow u-margin-Ts'>
                  Apprenez-en plus
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
                Secteurs utilisant déjà GoCardless
              </h2>
              <div className='grid__cell u-size-1of2 partners-page__accountancy-text'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                  Facturation et Comptabilité
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Bm'>
                  Avec l’intégration de GoCardless et Debitoor, les clients de Debitoor peuvent être payés facilement et
                  en toute sécurité par prélèvement SEPA. Toutes les informations importantes sont disponibles en temps
                  réel dans leur tableau de bord Debitoor.
                </p>
                <div className="">
                  <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                    "Avec GoCardless, nous résolvons deux problèmes pour nos utilisateurs - être payé rapidement de
                    façon sécurisé, et pouvoir réconcilier ces transactions dans leur système comptable.“
                  </p>
                  <p className='u-text-xs u-margin-Bs u-color-dark-gray'>Pilar Martín, directrice regionale de Debitoor France</p>
                  <img src='/images/partners/debitoor-logo@2x.png' className='partners-page__partner-logo' />
                </div>
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
                Clubs &amp; gestion d'adhérents
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Bm'>
                TeamUp est partenaire de GoCardless et aide les salles de gym et clubs à gérer leurs
                adhérents et leurs paiements récurrents.
              </p>
              <div className="">
                <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                  “Nos clients apprécient la simplicité d'utilisation de GoCardless. En tant que partenaires
                  ils ont beaucoup aidé notre croissance en Grande-Bretagne et en Europe.”
                </p>
                <p className='u-text-xs u-margin-Bs u-color-dark-gray'>Matt Pegler, co-fondateur</p>
                <img src='/images/partners/teamup-logo@2x.png' className='partners-page__partner-logo' />
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Txxl'>
          <div className='site-container u-padding-Txl'>
            <div className='grid__cell u-size-1of2 partners-page__billing-text'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bl'>
                Economie de l'abonnement
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Bl'>
                Zuora a choisi GoCardless comme prestataire préféré de prélèvements bancaires, permettant à leurs clients de prendre
                des paiements à travers l'Europe.
              </p>
              <p className='u-text-xs u-text-italic u-margin-Bxs partners-page__quote'>
                "GoCardless est un partenaire majeur de Zuora qui permet d'offrir à nos clients une expérience
                de prélèvement sans précédent. L'intégration Zuora-GoCardless aide les entreprises dans l'univers
                de l'abonnement en Europe à être payées de façon naturelle et simple."
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
                Vous serez en bonne compagnie
              </h2>
              <img src='/images/partners/partner-logos@2x.png' className='partners-page__partner-logo-group' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
              De nombreux autres secteurs peuvent être partenaires de GoCardless
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
                    Propriétés &amp; co-working
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Aidez vos agents immobiliers, propriétaires et espaces de travail à collecter leur loyer.
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
                    Logiciels métiers
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Aider vos clients à s'agrandir en intégrant les paiements au sein même de votre produit.
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
                    Organisations caritatives
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Aidez les organisation caritatives à collecter des donations par prélèvement.
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
                    Banques
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Recommendez-nous à vos clients ou utilisez notre solution marque blanche directement.
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
                    Prestataires de paiements
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    Utilisez-nous pour offrir le prélèvement automatique en France, en Europe et au-delà.
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
                    Et bien plus&hellip;
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                    GoCardless peut servir une large gamme d'industries à travers le monde.
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
                Quel type de partenaire êtes-vous ?
              </h2>
              <div className='grid integrations-grid u-padding-Txl'>
                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <CustomerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CustomerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Programme d'affiliation
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Touchez des commissions quand vous parrainez de nouveaux clients GoCardless.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Intégration d'application
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Rendez les paiements récurrents faciles pour vos clients.
                  </p>
                </div>

                <div className='grid__cell u-text-center u-size-1of3'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-text-m u-color-dark-gray u-text-light u-text-no-smoothing u-margin-Tm'>
                    Partenariat marque blanche
                  </h2>
                  <p className='u-text-xs u-color-dark-gray u-size4of5 u-margin-Txs'>
                    Contrôlez entièrement les paiements avec notre intégration marque blanche.
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
                Devenez partenaire aujourd'hui
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Si vous pensez que votre entreprise peut bénéficier d'un partenariat avec GoCardless,
                <br />contactez-nous - nous serons ravis de vous aider.
              </p>
              <Link to='contact_sales'
              query={{ s: 'partners' }}
             
              className='btn btn--hollow u-margin-Ts'>
                <Message pointer='cta.pro' />
              </Link>
            </div>
            <hr className='u-size-1of2 u-center u-margin-Vxxl' />
            <p className='u-color-dark-gray'><strong>Vous préférez nous parler ?</strong><br />
              Appelez un de nos experts de paiements au&thinsp;
              <Message pointer='phone_local' /><br />
              Nous sommes disponibles entre 10h et 19h du lundi au vendredi
            </p>
          </div>
        </div>
      </Translation>
    );
  }
}
