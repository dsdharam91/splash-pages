import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import StickyNav from '../../components/sticky-nav/sticky-nav';
import CheckListIcon from '../../icons/svg/checklist';
import DeveloperIcon from '../../icons/svg/developer';
import MobileIcon from '../../icons/svg/mobile';
import WhiteLabelIcon from '../../icons/svg/white-label';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';

export default class ProFr extends React.Component {
  displayName = 'ProFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='page-hero page-hero--pro page-hero--medium u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  Le contrôle total du prélèvement
                </h1>
                <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                  Une plateforme de pointe pour construire <br />votre écosystème de paiements
                </p>
              </div>
            </div>
          </div>
        </div>
        <StickyNav>
          <div className='site-container u-padding-Vm'>
            <ul className='u-pull-start u-margin-Txxs'>
              <li className='sticky-nav__item'>
                <a href='#en-bref' className='sticky-nav__link'>
                  En bref
                </a>
              </li>
              <li className='sticky-nav__item'>
                <a href='#tarifs' className='sticky-nav__link'>
                  Tarifs
                </a>
              </li>
            </ul>
            <Link to='contact_sales' query={{ s: 'pro' }}
              className={
                'sticky-nav__cta btn btn--small btn--hollow u-pull-end ' +
                'u-text-transform-none u-text-light u-text-xxs u-text-no-smoothing'
              }>
              Contactez-nous
            </Link>
            <a href='https://developer.gocardless.com/' className='u-pull-end u-margin-Txxs u-margin-Rm'>
              Documentation API
            </a>
          </div>
        </StickyNav>
        <div className='section-scroll-target' id='en-bref'>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='u-size-3of4 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                  Découvrez GoCardless Pro
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                  Adapté aux grandes entreprises et startups en forte croissance, GoCardless Pro combine simplicité
                  d'utilisation de notre produit original GoCardless et contrôle complet du paiement
                  et de l'expérience client. Il permet également d'encaisser des prélèvements partout en Europe et
                  bientôt dans le monde.
                </p>
              </div>
              <div className='grid u-margin-Tl u-padding-Tm'>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <WhiteLabelIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <WhiteLabelIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    En marque blanche
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    GoCardless Pro donne la priorité à votre marque. Bénéficiez de votre propre ICS
                    et du contrôle total de vos pages de paiements et pré-notifications.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <DeveloperIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <DeveloperIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Une API simple et moderne
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Intégrez l'API REST de GoCardless rapidement dans votre site web et vos systèmes
                    d'information. Découvrez notre
                    <a href='https://developer.gocardless.com/'> documentation</a>.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                  <figure className='svg-icon u-center'>
                    <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Le prélèvement omni-canal
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Acceptez le mandat électronique, papier et téléphone. Les informations collectées sont automatiquement
                    passées à GoCardless et dans vos systèmes.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center u-margin-Txxl u-padding-Txxl'>
                  <figure className='svg-icon u-center'>
                    <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Fini le casse-tête des rejets
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Recevez directement dans vos systèmes le statut de vos prélèvements
                    et retentez automatiquement et gratuitement les rejets.
                  </p>
                </div>
              </div>
              <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
                Vous désirez facilement tester notre API et
                notre tableau de bord?
              </p>
              <p>
                <a href='https://manage-sandbox.gocardless.com/signup'>
                Créez un compte sandbox gratuit
                </a>
              </p>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Txl'>
              <div className='u-size-1of2 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  Vous êtes en bonne compagnie
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                  Chaque jour les plus grandes entreprises et start-ups innovantes font confiance à
                  la technologie de GoCardless pour gérer leurs paiements
                </p>
              </div>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                <img src='/images/fr/logos/pro-logos-fr@2x.jpg' />
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
                      Parlez avec nos experts de vos problématiques paiements.
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
        <div className='section-scroll-target' id='tarifs'>
          <div className='u-text-center u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  Un prix adapté à votre échelle
                </h2>
                <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                  Conçu pour les grandes entreprises et les start-ups en forte croissance
                </p>
                <Link to='pricing' id='track-cta-pricing' className='btn btn--hollow u-margin-Tm'>
                  En apprendre plus sur notre prix
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
