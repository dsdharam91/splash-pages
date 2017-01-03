import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import ProspectForm from '../../components/prospect-form/prospect-form';
import DeveloperAPI from '../../icons/svg/DeveloperAPI';
import TransparentfeesEuro from '../../icons/svg/Transparentfees-euro';
import FutureProof from '../../icons/svg/FutureProof';
import StoryLink from '../stories/story-link';

export default class PaymentsByDirectDebitVariationBFr extends React.Component {
  displayName = 'PaymentsByDirectDebitVariationBFr'

  render() {
    return (
      <Translation locales='fr'>
        <Page>
         <div className='page-hero u-padding-Bxxl'>
            <div className='site-container u-padding-Vxxl u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                Gérez vos paiements récurrents<br />
                grâce aux prélèvements SEPA
              </h1>
              <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
                GoCardless est la solution simplifiée de gestion des paiements récurrents via<br />
                le prélèvement automatique : fidélisez vos clients et améliorez votre taux de conversion.
              </p>
            </div>
          </div>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='grid u-center u-text-center'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon svg-icon--medium u-center'>
                    <DeveloperAPI className='svg-icon__image svg-icon__image--medium' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    API simple et flexible
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Intégration rapide. Automatisation du flux de paiement. Diminution des tâches administratives.
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon svg-icon--medium u-center'>
                    <TransparentfeesEuro className='svg-icon__image svg-icon__image--medium' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Tarifs transparents
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Aucun frais de mise en place. Pas de frais de rejet. Aucun dépôt de garantie.
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon svg-icon--medium u-center'>
                    <FutureProof className='svg-icon__image svg-icon__image--medium' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Augmentation des revenus
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    Amélioration du taux de conversion. Meilleure gestion des rejets. Réduction du churn.
                  </p>
                </div>
              </div>
              <div className='u-padding-Tm u-margin-Tm u-text-center'>
                <Link to='contact_sales' className='btn u-padding-Hl'><Message pointer='cta.pro' /></Link>
                <Link to='features' className='btn u-padding-Hl btn--hollow u-margin-Lm'>En savoir plus</Link>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />

          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
                <Message pointer='number_of_merchants' /> entreprises font confiance à GoCardless pour leurs prélèvements
              </h2>
              <div className='u-text-center u-margin-Tl u-padding-Vs u-center'>
                <img src='/images/fr/logos/pro-logos-colour-fr@2x.png' alt='' />
              </div>
              <div className='grid u-margin-Hn u-size-full u-padding-Txl u-text-center'>
                <StoryLink cssSizeClass='u-size-1of2'
                  imgClass='habitat-logo stories-item__logo--habitat' to='stories_habitat'>
                  Habitat, la chaîne de design et d’ameublement, a réussi à lancer une offre innovante d’abonnement en moins de deux mois.
                </StoryLink>
                <StoryLink cssSizeClass='u-size-1of2'
                  imgClass='zenchef-logo stories-item__logo--zenchef' to='stories_zenchef'>
                  Zenchef a réussi à augmenter la valeur vie client (LTV) tout en minimisant les coûts d’acquisition (CAC) grace au prélèvement.
                </StoryLink>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
                Accélérez votre croissance en confiant<br />la gestion de vos paiements
                à GoCardless
              </h2>
              <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>Migration de mandats</h3>
                  <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                    GoCardless s'occupe gratuitement de la migration de vos mandats existants conformément à la réglementation SEPA.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>Tableau de bord intuitif</h3>
                  <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                    Créez un compte en ligne et commencez à prendre des paiements en 5 minutes.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Prélèvements à l'international
                  </h3>
                  <p className='u-color-dark-gray u-margin-Txs u-size-5of6 u-center'>
                    Prélevez vos clients en Europe (SEPA), au Royaume-Uni (BACS) et en Suède (Autogiro).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl u-text-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
                Contactez nous pour en savoir plus
              </h2>
              <div className='grid__cell u-size-1of2 u-margin-Bxl'>
                <ProspectForm prospectType='sales' />
              </div>

              <p className='u-text-center u-color-dark-gray u-margin-Bs u-text-s'>
                Prenez contact avec nous: <Message pointer='phone_local' />
              </p>
            </div>
          </div>
        </Page>
      </Translation>
    );
  }
}
