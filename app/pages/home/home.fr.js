import React from 'react';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import StoryLink from '../stories/story-link';

import DeveloperAPI from '../../icons/svg/DeveloperAPI';
import TransparentfeesEuro from '../../icons/svg/Transparentfees-euro';
import FutureProof from '../../icons/svg/FutureProof';
import SmallBusinessYellowIcon from '../../icons/svg/small-business-yellow';
import EnterpriseGreenIcon from '../../icons/svg/enterprise-green';

export default class HomeFr extends React.Component {
  displayName = 'HomeFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>

          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                GoCardless traite un volume de transactions de plus d'<Message pointer='payments_processed_volume' /> par an.
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
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
            <p className='u-color-dark-gray u-margin-Txxl u-padding-Tm'>
              Vous souhaitez en savoir plus sur le prélèvement SEPA ?
              <br />
              <Href to='guides.path' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Lisez notre guide
              </Href>
            </p>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <p className='u-text-xs u-color-dark-gray u-margin-Txs u-margin-Bl'>
                GoCardless est régulé par la FCA et certifié ISO27001.
                Nous traitons un volume de transactions de plus d'<Message pointer='payments_processed_volume' /> par
                an pour le compte de plus de <Message pointer='number_of_merchants' /> clients.
              </p>
            </div>
            <div className='u-text-center u-margin-Bl u-padding-Vs u-padding-Hxxl u-center'>
              <img src='/images/fr/logos/pro-logos-colour-fr@2x.png' />
            </div>
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

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='product-grid__container'>
              <div className='product-grid__section product-grid__section--right-border u-padding-Vl u-padding-Hxl'>
                <figure className='svg-icon u-center'>
                  <SmallBusinessYellowIcon className='svg-icon__image' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                  TPE et PME
                </p>
                <p className='u-color-dark-gray u-padding-Vm'>
                  Réduisez les tâches administratives liées aux retards de paiement. Soyez payé à temps en prenant
                  le contrôle de vos paiements. Améliorez votre trésorerie.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  <Message pointer='pricing.per_transaction_amount_normal' /> plafonné à <Message pointer='pricing.cost_cap' />
                </p>
                <Link to='features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  En savoir plus
                </Link>
              </div>
              <div className='product-grid__section u-padding-Vl u-padding-Hxl'>
                <figure className='svg-icon u-center'>
                  <EnterpriseGreenIcon className='svg-icon__image' />
                </figure>
                <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                  Grandes entreprises
                </p>
                <p className='u-color-dark-gray u-padding-Vm'>
                  Automatisez votre flux de paiement. Connectez GoCardless à vos outils métiers.
                  Réduisez le churn grâce aux notifications de paiement en temps réel.
                </p>
                <p className='u-color-dark-gray u-text-m u-text-light u-text-no-smoothing u-margin-Bm'>
                  De <Message pointer='pricing.pro_cost_per_transaction' />
                </p>
                <Link to='pro' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                  En savoir plus
                </Link>
              </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light'>
              Dans la presse
            </h2>
            <div className='grid u-padding-Txl'>
              <a href={'http://www.lefigaro.fr/societes/2015/04/12/20005-20150412ARTFIG00171' +
                '-gocardless-pret-a-bousculer-les-banques-francaises.php'}
                target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs u-padding-Bm'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Le Figaro' className='lefigaro-logo stories-item__logo--lefigaro' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    'Avec le prélèvement, GoCardless contourne les aléas liés au paiement par carte bancaire,
                    notamment le risque de perdre des clients à l'expiration de leur carte'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
              </a>
              <a href={'http://www.lesechos.fr/finance-marches/banque-assurances/0213743712' +
                '-le-prelevement-bancaire-seduit-de-nouveaux-acteurs-1110875.php'}
                target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Bm'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='Les Echos' className='lesechos-logo stories-item__logo--lesechos' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    'Mettre en place un prélèvement était jusqu’ici complexe car cela imposait des processus
                    d’agrément bancaire, beaucoup de paperasse mais aussi ensuite des semaines de configuration'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
              </a>
              <a href={'http://www.latribune.fr/entreprises-finance/banques-finance/' +
                'gocardless-ou-quand-la-fintech-londonienne-debarque-en-france-469023.html'}
                target='_blank' className='grid__cell u-size-1of3 u-link-clean u-padding-Rxs'>
                <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                  <i role='img' aria-label='La Tribune' className='latribune-logo stories-item__logo--latribune' />
                  <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                    'Les grandes entreprises n'ont pas plus envie que les startups de devenir des spécialistes des paiements,
                     elles veulent juste une solution de paiement qui fonctionne'
                  </p>
                </div>
                <div className='stories-item__btn btn u-size-full'>Lire l'article</div>
              </a>
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Des tarifs simples et transparents
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Adaptés aux startups comme aux grandes entreprises.
              </p>
              <Link to='pricing' className='btn btn--hollow u-margin-Tm'>
                En savoir plus sur nos tarifs
              </Link>
            </div>
          </div>
        </div>
      <hr className='section-divider' />
      <div className='site-container u-text-center u-padding-Vxxl'>
        <div className='u-padding-Vxl'>
          <Link to='contact_sales' className='btn'>Contactez-nous</Link>
          <p className='u-color-dark-gray u-margin-Ts'>Offre sans engagement, aucun frais de mise en place.</p>
        </div>
      </div>
      </Translation>
    );
  }
}
