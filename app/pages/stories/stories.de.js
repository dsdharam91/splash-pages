import React from 'react';
import Translation from '../../components/translation/translation';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import Link from '../../components/link/link';
// import StoryLink from './story-link';

export default class StoriesDe extends React.Component {
  displayName = 'StoriesDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='page-hero page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner stories-hero-heading'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  Tausende von zufriedenen Kunden
                </h1>
                <div className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                  Von Startups bis zu internationalen Großkonzernen, GoCardless<br />
                  hilft täglich tausenden von Kunden mit ihren Zahlungen
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='site-container u-padding-Vxxl u-margin-Bxxl'>
          <div className='u-padding-Vxxl u-relative u-margin-Bxxl'>
            <div className='u-padding-Bl'>
              <div className='stories-spotlight grid u-margin-Hn u-size-full'>
                <Link to='stories_picdrop' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
                  <div className='stories-spotlight__item stories-spotlight__item--picdrop
                  u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “Wir mussten früher täglich mit Rücklastschriften kämpfen. Das fällt jetzt komplett weg.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Tobias Friese, PicDrop
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Zur Referenz</div>
                </Link>
                <Link to='stories_crossfit_oldenburg' className='grid__cell u-text-center u-size-1of2
                u-link-clean u-padding-Lxs u-padding-Rn'>
                  <div className='stories-spotlight__item stories-spotlight__item--crossfit-oldenburg u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “Der Vorteil für mich ist eine Zeitersparnis von ca. 5 Stunden! Die neugewonnene Zeit wird effektiv im Laden genutzt!"
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Tino Petke, CrossFit Oldenburg
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Zur Referenz</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*<hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <StoryLink cssSizeClass='u-size-1of2'
              imgClass='habitat-logo stories-item__logo--habitat' to='stories_habitat'>
              Habitat, la chaîne de design et d’ameublement, a pu lancer une offre innovante d’abonnement en moins de deux mois.
            </StoryLink>
            <StoryLink cssSizeClass='u-size-1of2'
              imgClass='foundation-of-hearts-logo stories-item__logo--foundation-of-hearts' to='stories_foundation_of_hearts'>
              La Foundation of Hearts, une ONG des supporteurs du Hearts FC,
              peut prendre plus de 8.000 donations par mois facilement.
            </StoryLink>
          </div>
        </div>*/}

        <hr className='u-margin-An' />
        <StartTakingPaymentsCTA />
      </Translation>
  );
  }
}
