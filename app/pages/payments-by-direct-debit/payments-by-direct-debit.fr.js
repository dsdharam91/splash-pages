import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Translation from '../../components/translation/translation';

export default class PaymentsByDirectDebitFr extends React.Component {
  displayName = 'PaymentsByDirectDebitFr'

  render() {
    return (
      <Translation locales='fr'>
        <Page>
          <div className='page-hero u-padding-Bxxl'>
            <div className='site-container u-padding-Vxxl u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                Prenez des paiements récurrents sur Internet avec le prélèvement SEPA
              </h1>
              <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
                Plus besoin de relancer les paiements en retard. Des paiement en ligne flexibles et automatisés avec des frais de 1% seulement.
              </p>
            </div>
          </div>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='grid u-center u-text-center'>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Soyez en contrôle
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Plus de problèmes de trésorerie. Avec le prélèvement, vous serez payé à temps, tout le temps.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Réduisez le travail manuel
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Gérez votre compte en ligne et soyez toujours au courant du statut de vos paiements.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Frais de 1%, plafonnés à 2€
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Plus économique que la carte et sans frais cachés : nous ne facturons que les transactions réussies.
                  </p>
                </div>
              </div>
              <div className='u-padding-Tm u-margin-Tm u-text-center'>
                <Href to='signup.path' className='btn u-padding-Hl'>Créez votre compte</Href>
                <Link to='features' className='btn u-padding-Hl btn--hollow u-margin-Lm'>Apprenez-en plus</Link>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />

          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
                13.000 entreprises font confiance à GoCardless pour leurs prélèvements
              </h2>
              <div className='u-text-center u-margin-Tl u-padding-Vs u-center'>
                <img src='/images/fr/logos/pro-logos-fr@2x.jpg' />
              </div>
              <div className='grid u-margin-Hn u-size-full u-padding-Txl'>
                <Link to='stories_zenchef' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
                  <div className='stories-spotlight__item stories-spotlight__item--zenchef
                  u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “GoCardless a complètement fluidifié le prélèvement comparé aux prestataires historiques.
                        L'automatisation a réduit le taux d'impayés de 50% et augmenté notre chiffre d'affaires de 90.000 €.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Julien Balmont, Zenchef
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Voir la référence</div>
                </Link>
                <Link to='stories_the_french_talents' className='grid__cell u-text-center u-size-1of2
                u-link-clean u-padding-Lxs u-padding-Rn'>
                  <div className='stories-spotlight__item stories-spotlight__item--french-talents u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “Réduire de 50% les retards de paiements a aidé à améliorer la trésorerie et
                        a permis à nos équipes de se concenter sur des activités à plus forte valeur ajoutée.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Martin Gentil, Directeur commercial
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Voir la référence</div>
                </Link>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
                Il n'a jamais été aussi facile d'être payé grâce à GoCardless
              </h2>
              <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Démarrage très simple</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    Créez un compte en ligne et commencer à prendre des paiements en 5 minutes.</p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Migration de mandats facile</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    Si vous avez déjà des mandats SEPA, GoCardless assurera leur migration gratuitement.</p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Rejoignez 13.000 clients</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    Nous avons prélevé plus de 1 milliard d'Euros pour le compte de plus de 13.000 clients.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl u-text-center u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center u-margin-Bl'>
                Ouvrir un compte prend 5 minutes
              </h2>
              <Href to='signup.path' className='btn'>Prenez des paiements aujourd'hui</Href>
              <p className='u-color-p u-margin-Ts'>Pas de frais de mise en place, de frais mensuels ou de frais cachés</p>
              <hr className='u-size-1of2 u-center u-margin-Vxxl' />
              <p className='u-color-p'><strong>Souhaitez-vous d'abord en discuter ?</strong><br />
                Appelez nos experts de paiement au <Message pointer='phone_local' /><br />
                Vous pouvez également <Link to='contact_sales' className='u-link-color-p u-text-underline'>demander que notre équipe vous rappelle</Link>.
              </p>
            </div>
          </div>
        </Page>
      </Translation>
    );
  }
}
