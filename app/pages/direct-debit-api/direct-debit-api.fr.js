import React from 'react';
import Translation from '../../components/translation/translation';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Slider from '../../components/slider/slider';

import SliderArrow from '../../icons/svg/slider-arrow';
import ReadPdf from '../../icons/svg/ReadPdf';
import DeveloperAPI from '../../icons/svg/DeveloperAPI';
import DevelopTestIterate from '../../icons/svg/DevelopTestIterate';
import ApiFirst from '../../icons/svg/ApiFirst';
import EuropeIcon from '../../icons/svg/globe-europe';
import FutureProof from '../../icons/svg/FutureProof';
import TransformCustomer from '../../icons/svg/TransformCustomer';

export default class DirectDebitApiFr extends React.Component {
  displayName = 'DirectDebitApiFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxl u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                Une API de paiements puissante
              </h1>

              <p className='u-text-heading-light u-text-m u-color-invert'>
                Rationalisez les flux de travail en intégrant le prélèvement automatique.
              </p>

              <Link to='contact_sales' id='track-sticky-nav-contact-sales'
              className='btn btn--invert u-margin-Tl'>
                Contactez-nous
              </Link>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='u-margin-Vl grid'>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <FutureProof className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Technologie de paiement à l'épreuve du temps
              </div>

              <p className='u-center u-color-dark-gray u-margin-Txs'>
                Nous améliorons sans cesse notre solution de prélèvement automatique, sans aucune nécessité de mise à jour.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <TransformCustomer className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Transformez votre <br/>expérience client
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Transmettez les données de paiement en temps réel à nos équipes pour obtenir des échanges clients plus intelligents.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <EuropeIcon className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Une intégration pour la Zone Euro, le Royaume-Uni <br/>et la Suède
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Nous gérons les complexités du prélèvement à travers les différentes zones géographiques.
              </p>
            </div>
          </div>

          <p className='u-text-s u-text-center u-color-dark-gray u-padding-Vxl'>See our&nbsp;
            <Href to='api_docs.path'>
              Consultez notre Documentation API
            </Href>
          </p>
        </div>

        <hr className='section-divider' />

        <div className='u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container u-text-center'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
              Une API intuitive avec une logique de prélèvement intégrée
            </h2>

            <p className='u-color-dark-gray u-margin-Txs u-size-3of4 u-center'>
              Nous avons créé une API optimisée pour le prélèvement automatique, pour que vous puissiez concevoir des intégrations puissantes en maximisant votre temps de développement. Intégrez autant ou aussi peu que vous pouvez, en une seule fois ou au fil de votre évolution.
            </p>

            <div className='u-margin-Tl u-padding-Tm u-center u-size-2of4 u-text-start'>
              <div className='integration-step u-margin-Bxxl'>
                <span className='integration-step__check'>
                  &#x2714;
                </span>

                <div className='integration-step__text u-padding-Txs'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Bs'>
                    Logique de prélèvement automatique
                  </h3>
                  <ul className='list u-margin-An'>
                    <li className='u-margin-Bs'>
                      Délais de prélèvement intégré pour un calcul automatique des prochaines dates de facturation
                    </li>
                    <li>
                      La logique des abonnements prêts à l’emploi évite la construction de zéro
                    </li>
                  </ul>
                </div>
              </div>

              <div className='integration-step u-margin-Bxxl'>
                <span className='integration-step__check'>
                  &#x2714;
                </span>

                <div className='integration-step__text u-padding-Txs'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Bs'>
                    Réduction des erreurs et des échecs
                  </h3>
                  <ul className='list u-margin-An'>
                    <li className='u-margin-Bs'>
                      Les tokens uniques réduisent le risque de doublon
                    </li>
                    <li>
                      Les vérifications bancaires automatiques permettent de réduire de manière significative les taux d’échec
                    </li>
                  </ul>
                </div>
              </div>

              <div className='integration-step u-margin-Bxxl'>
                <span className='integration-step__check'>
                  &#x2714;
                </span>

                <div className='integration-step__text u-padding-Txs'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Bs'>
                    Conformité garantie
                  </h3>
                  <ul className='list u-margin-An'>
                    <li className='u-margin-Bs'>
                      Modèles de notification préconfigurés pour des e-mails clairs, conformes et prêts à l'emploi
                    </li>
                    <li>
                      Mandats PDF générés automatiquement et pré-remplis avec les détails du client
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-center u-text-heading u-color-dark-gray u-text-l u-text-light'>
              Le prélèvement à l’ère du numérique
            </h2>
            <div className='u-padding-Vxl grid'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <ApiFirst className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Intégration entièrement personnalisable
                </div>

                <p className='u-center u-color-dark-gray u-margin-Txs'>
                  Connectez notre API aux outils utilisés quotidiennement et améliorez <br/>votre insight client.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <DevelopTestIterate className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple à développer, <br/>tester et dupliquer
                </div>

                <p className='u-center u-color-dark-gray u-margin-Txs'>
                  Environnement de sandbox gratuit, documentation claire et guides détaillés étape par étape
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <DeveloperAPI className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  PI orientée <br/>développeurs
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Bibliothèques disponibles pour les principaux langages de programmation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-margin-Txxl'>
          <div className='site-container u-text-center u-padding-Txl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Plus de 20 000 clients utilisent déjà Gocardless
            </h2>
            <div className='u-text-center u-margin-Bxxl u-margin-Tm u-center'>
              <img src='/images/logos/pro-logos-colour@2x.png' />
            </div>

            <div className='quote page-hero--icon-background u-relative'>
              <Slider
              prev={(
              <span className='slider-nav slider-nav__prev'>
                <SliderArrow className='svg-icon__image' />
              </span>
              )}
              next={(
              <span className='slider-nav slider-nav__next'>
                <SliderArrow className='svg-icon__image' />
              </span>
              )}>
                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/funding-circle-logo-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "GoCardless est l'une des meilleurs prestataires de paiement avec lesquels nous avons travaillé. Je les recommande fortement à toute entreprise qui se soucie d'avoir une bonne expérience utilisateur et en utilisant la meilleure technologie disponible."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>
                    Elsa Ferreira, responsable de l'équipe de paiements.
                  </p>
                </div>

                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/bulb-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "La simplicité et la facilité d'utilisation de GoCardless et sa capacité à être intégrée à nos autres systèmes ont été un réel avantage"
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>
                    Hayden Wood &amp; Amit Gudka, co-fondateurs.
                  </p>
                </div>

                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/smart-pension-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "Nous ne voulions pas consacrer du temps à l'intégration d'une solution technologique et nous concentrer sur des tâches à plus forte valeur ajoutée. GoCardless est une grande réussite, donc nous n’avons eu aucune inquiétude à ce sujet."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>
                    Will Wynne, co-fondateur
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className='site-container grid grid--center u-margin-Vxl u-padding-Vxl'>
          <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
            Vous voulez échanger? Nous aussi
          </h2>
          <div className='grid__cell u-size-1of2 u-padding-Bxl'>
            <ProspectForm prospectType='sales' />
          </div>

          <p className='u-text-center u-color-dark-gray u-margin-Bs u-text-s'>
            Prenez contact avec nous: <Message pointer='phone_local' />
          </p>
        </div>

        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bl'>
              Ressources utiles
            </h2>

            <div className='grid integrations-grid u-text-center'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Guide du prélèvement automatique
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/fr/guides/sepa/'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Lire
                  </a>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Documentation utile pour développeurs
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <Link to='developers'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Lire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
