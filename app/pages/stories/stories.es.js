import React from 'react';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Message from '../../components/message/message';
import _ from 'lodash';

let caseStudies = {
  'Start ups': [
    {
      link: 'stories_impact_hub',
      quote: `Ahorramos muchísimo tiempo en la gestión de los mandatos y de los cobros`,
      size: '19 empleados',
      logoSrc: '/images/stories/story-logos/impact-hub.png',
      logoWidth: '120',
      industry: 'Espacio de Coworking',
    },
    {
      link: 'stories_acumbamail',
      quote: `Con GoCardless hemos reducido a cero la administración de clientes`,
      size: '7 empleados',
      logoSrc: '/images/stories/story-logos/acumbamail.png',
      logoWidth: '150',
      industry: 'Email marketing',
    },
    {
      link: 'stories_monras',
      quote: `Nuestros cobros están totalmente automatizados gracias a GoCardless`,
      size: '50 empleados',
      logoSrc: '/images/stories/story-logos/monras.png',
      logoWidth: '130',
      industry: 'Servicios de limpieza',
    },
  ],
};

const allStories = _.values(caseStudies).reduce((fold, value) => fold.concat(value), []);

const DEFAULT_STORY_CATEGORY = 'All';

const groupedStories = _.merge({
  [DEFAULT_STORY_CATEGORY]: allStories,
}, caseStudies);

export default class StoriesEs extends React.Component {
  displayName = 'StoriesEs'

  constructor(props) {
    super(props);
    this.state = { activeCategory: DEFAULT_STORY_CATEGORY };
  }

  setActiveCategory(category) {
    this.setState({ activeCategory: category });
  }

  render() {
    return (
      <Translation locales='es'>
        <div className='page-hero page-hero--large page-hero--stories page-hero--stories-index u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                  “Ahora nuestros cobros están totalmente automatizados gracias a GoCardless y nos enteramos de cualquier problema al momento”
                </h1>
                <div className='u-color-invert u-text-heading u-text-m u-text-semi'>
                  Alfredo Monrabal
                </div>
                <div className="u-color-invert u-text-heading u-text-xs">
                  Fundador, Monras
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-container u-text-center u-padding-Vxxl">
          <p className="u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Vxl">
            Desde autónomos a multinacionales, GoCardless ayuda<br />a miles
            de negocios a tramitar sus cobros cada día.
          </p>
        </div>

        <div className="stories-industries">
          <div className="stories-list u-padding-Vxxl">
            <div className="site-container u-margin-Vxl grid">
              { groupedStories[this.state.activeCategory].map((caseStudy) => {
                return (
                  <div className="grid__cell u-size-1of3 u-text-center" key={ caseStudy.link }>
                    <div className="story-card">
                      <div className={'story-card__logo story-card__' + caseStudy.tag}>
                        <img src={ caseStudy.logoSrc } width={ caseStudy.logoWidth } className='u-block u-center' />
                      </div>

                      <h2 className="story-card__quote u-text-light u-text-m u-color-dark-gray u-text-no-smoothing u-margin-Bm">“{ caseStudy.quote }”</h2>

                      <div className="story-card__detail u-margin-Bs">
                        <span className="story-card__key story-card__key--size">Tamaño:</span>
                        <span className="story-card__value">{ caseStudy.size }</span>
                      </div>

                      <div className="story-card__detail u-margin-Bm">
                        <span className="story-card__key story-card__key--industry">Industria:</span>
                      <span className="story-card__value">{ caseStudy.industry }</span>
                      </div>
                      <Link to={ caseStudy.link } className='btn btn--small u-block'>
                        Descubre más
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
              <Message pointer='stories.start_journey' />
            </h2>

            <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
              Únete a las más de <Message pointer='number_of_merchants' /> empresas que ya utilizan GoCardless
            </p>

            <Href to='signup.path' className='btn u-margin-Tm u-margin-Rm'>
              <Message pointer='cta.signup' />
            </Href>

            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'>
              <Message pointer='cta.pro' />
            </Link>
          </div>
        </div>
      </Translation>
    );
  }
}
