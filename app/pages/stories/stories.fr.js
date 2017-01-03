import React from 'react';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Message from '../../components/message/message';

let allStories = [
  {
    link: 'stories_habitat',
    quote: `Nous avons lancé de nouvelles offres d'abonnement`,
    logoSrc: '/images/stories/story-logos/habitat.png',
    logoWidth: '140',
    using: 'Utilise l\'API GoCardless',
    industry: 'Ameublement',
  },
  {
    link: 'stories_zenchef',
    quote: `Nous avons réussi à diminuer le taux d'impayés de 50%`,
    logoSrc: '/images/stories/story-logos/zenchef.png',
    logoWidth: '170',
    using: 'Utilise GoCardless pour Zuora',
    industry: 'SaaS',
  },
  {
    link: 'stories_digidom',
    quote: `Nous avons gagné une demie-journée de travail administratif par mois`,
    logoSrc: '/images/stories/story-logos/digidom.png',
    logoWidth: '170',
    using: 'Utilise l\'API GoCardless',
    industry: 'Service aux entreprises',
  },
];

export default class StoriesFr extends React.Component {
  displayName = 'StoriesFr'

  render() {
    return (
      <Translation locales='fr'>
        <div className='page-hero page-hero--stories-index u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Témoignages
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Startups ou multi-nationales, GoCardless facilite le prélèvement<br />
              automatique pour des milliers d'entreprises chaque jour.
            </p>
          </div>
        </div>

        <div className="stories-industries">
          <div className="stories-list u-padding-Vxxl">
            <div className="site-container u-margin-Vxl grid">
              { allStories.map((caseStudy) => {
                return (
                  <div className="grid__cell u-size-1of3 u-text-center" key={ caseStudy.link }>
                    <div className="story-card">
                      <div className={'story-card__logo story-card__' + caseStudy.tag}>
                        <img src={ caseStudy.logoSrc } width={ caseStudy.logoWidth } className='u-block u-center' />
                      </div>

                      <h2 className="story-card__quote u-text-light u-text-m u-color-dark-gray u-text-no-smoothing u-margin-Bm">“{ caseStudy.quote }”</h2>

                      <div className="story-card__detail u-margin-Bs">
                        <span className="story-card__key story-card__key--industry">{ caseStudy.industry }</span>
                      </div>
                      <div className="story-card__detail u-margin-Bm">
                        <span className="story-card__key story-card__key--link">{ caseStudy.using }</span>
                      </div>
                      <Link to={ caseStudy.link } className='btn btn--small u-block'>
                        En savoir plus
                      </Link>
                    </div>
                  </div>
                );
              }) }
            </div>
          </div>
        </div>

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              Rejoignez l'aventure GoCardless aujourd'hui
            </h2>
            <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
              Plus de <Message pointer='number_of_merchants' /> sociétés sont déjà clientes
            </p>
            <Href to='signup.path' className='btn u-margin-Tm u-margin-Rm'><Message pointer='cta.signup' /></Href>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'><Message pointer='cta.pro' /></Link>
          </div>
        </div>
      </Translation>
    );
  }
}
