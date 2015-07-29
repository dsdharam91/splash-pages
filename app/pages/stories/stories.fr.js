import React from 'react';
import Translation from '../../components/translation/translation';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import Link from '../../components/link/link';

export default class Stories extends React.Component {
  displayName = 'StoriesFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='page-hero page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner stories-hero-heading'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  Des milliers de clients satisfaits
                </h1>
                <div className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                  Des startups aux multi-nationales, GoCardless<br />
                  aident des milliers d'entreprises chaque jour.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl u-margin-Bxxl'>
          <div className='u-padding-Vxxl u-relative u-margin-Bxxl'>
            <div className='u-padding-Bl'>
              <div className='stories-spotlight grid u-margin-Hn u-size-full'>
                <Link to='stories_1001_menus' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
                  <div className='stories-spotlight__item stories-spotlight__item--has-bean-coffee
                  u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “GoCardless a complètement fluidifié le prélèvement comparé aux prestataires historiques.
                        Nous avons réduit le temps passé sur nos paiements de xh et le taux d'impayés de x%.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Julien Balmont, 1001 Menus
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Voir la référence</div>
                </Link>
                <Link to='stories_the_french_talents' className='grid__cell u-text-center u-size-1of2
                u-link-clean u-padding-Lxs u-padding-Rn'>
                  <div className='stories-spotlight__item stories-spotlight__item--crossfit-hackney u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “En finir avec les retards de paiements a aidé à améliorer la trésorerie et
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
        </div>

        <hr className='u-margin-An' />
        <StartTakingPaymentsCTA />
      </Translation>
  );
  }
}
