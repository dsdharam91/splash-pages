import React from 'react';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Message from '../../components/message/message';
import _ from 'lodash';

let caseStudies = {
  'Start ups': [
    {
      link: 'stories_gastrofix',
      quote: 'Die Unterstützung seitens GoCardless war hervorragend',
      size: '100 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/gastrofix-logo.png',
      logoWidth: '130',
      industry: 'SaaS',
    },
    {
      link: 'stories_study_clever',
      quote: 'Unsere IT-Abteilung war noch nie so begeistert von einem Zahlungsanbieter',
      size: '10 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/study-clever-logo.png',
      logoWidth: '180',
      industry: 'SaaS / TaxTech',
    },
  ],
  KMUs: [
    {
      link: 'stories_crossfit_oldenburg',
      quote: 'Der Vorteil für mich ist eine Zeitersparnis von ca. 5 Stunden!',
      size: '1 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/crossfit-oldenburg-logo.png',
      logoWidth: '60',
      industry: 'CrossFit',
    },
    {
      link: 'stories_picdrop',
      quote: 'Wir können einen viel besseren Service für unsere Kunden gewährleisten',
      size: '3 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/picdrop-logo.png',
      logoWidth: '200',
      industry: 'SaaS',
    },
  ],
};

const allStories = _.values(caseStudies).reduce((fold, value) => fold.concat(value), []);

const DEFAULT_STORY_CATEGORY = 'Alle';

const groupedStories = _.merge({
  [DEFAULT_STORY_CATEGORY]: allStories,
}, caseStudies);

export default class StoriesDe extends React.Component {
  displayName = 'StoriesDe'

  constructor(props) {
    super(props);
    this.state = { activeCategory: DEFAULT_STORY_CATEGORY };
  }

  setActiveCategory(category) {
    this.setState({ activeCategory: category });
  }

  render() {
    return (
      <Translation locales='de'>
        <div className='page-hero page-hero--large page-hero--stories page-hero--stories-index u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                  “Wir mussten früher täglich mit Rücklastschriften kämpfen. Das fällt jetzt komplett weg.”
                </h1>
                <div className='u-color-invert u-text-heading u-text-m u-text-semi'>
                  Tobias Friese
                </div>
                <div className="u-color-invert u-text-heading u-text-xs">
                  Geschäftsführer, PicDrop
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-container u-text-center u-padding-Vxxl">
          <p className="u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Vxl">
           Von Startups bis zu internationalen Großkonzernen, <br />
           GoCardless hilft täglich tausenden von Kunden mit ihren Zahlungen
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
                        <span className="story-card__key story-card__key--size">Größe:</span>
                      <span className="story-card__value">{ caseStudy.size }</span>
                      </div>

                      <div className="story-card__detail u-margin-Bm">
                        <span className="story-card__key story-card__key--industry">Industrie</span>
                      <span className="story-card__value">{ caseStudy.industry }</span>
                      </div>
                      <Link to={ caseStudy.link } className='btn btn--small u-block'>
                        Lesen Sie mehr
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
              Vereinfachen auch Sie Ihre Lastschriften mit GoCardless
            </h2>
            <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
              Mehr als <Message pointer='number_of_merchants' /> Unternehmen vertrauen bereits auf GoCardless
            </p>
            <Href to='signup.path' id='track-cta-sign-up' className='btn u-margin-Tm u-margin-Rm'>Jetzt anmelden</Href>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'><Message pointer='cta.pro' /></Link>
          </div>
        </div>
      </Translation>
    );
  }
}
