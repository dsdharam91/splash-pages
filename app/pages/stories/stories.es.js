import React from 'react';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Message from '../../components/message/message';
import _ from 'lodash';
import classNames from 'classnames';

let caseStudies = {
  'Start ups': [
    {
      link: 'stories_impact_hub',
      quote: `We’ve reduced the risks associated with franchise payments`,
      size: '19 empleados',
      logoSrc: '/images/stories/story-logos/impact-hub.png',
      logoWidth: '120',
      industry: 'Espacio de Coworking',
    },
    {
      link: 'stories_acumbamail',
      quote: `We’ve reduced the risks associated with franchise payments`,
      size: '7 empleados',
      logoSrc: '/images/stories/story-logos/acumbamail.png',
      logoWidth: '150',
      industry: '[xxx]',
    },
    {
      link: 'stories_monras',
      quote: `We’ve reduced the risks associated with franchise payments`,
      size: '50 empleados',
      logoSrc: '/images/stories/story-logos/monras.png',
      logoWidth: '130',
      industry: '[xxx]',
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
    const tabClassesForCategory = (category) => {
      return classNames('industry-filters__tab grid__cell u-size-1of4', {
        active: this.state.activeCategory === category,
      });
    };

    return (
      <Translation locales='es'>
        <div className='page-hero page-hero--large page-hero--stories page-hero--stories-index u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light u-margin-Bm'>
                  “GoCardless ensures our transactions are accurate, easy to setup and manage. It is also significantly
                  cheaper compared to credit card.”
                </h1>
                <div className='u-color-invert u-text-heading u-text-m u-text-semi'>
                  Will Wynne
                </div>
                <div className="u-color-invert u-text-heading u-text-xs">
                  Co-Founder, Smart Pension
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-container u-text-center u-padding-Vxxl">
          <p className="u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Vxl">
            From individuals to multi-national corporations, GoCardless helps thousands of businesses with their payments everyday.
          </p>
        </div>

        <div className="stories-industries">
          <div className="site-container">
            <div className="industry-filters grid">
              { _.map(groupedStories, (stories, category) => {
                return (
                  <div className={tabClassesForCategory(category)} onClick={this.setActiveCategory.bind(this, category)} key={category}>
                    <span className="">{ category }</span>
                  </div>
                );
              })}
            </div>
          </div>

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
                        <span className="story-card__key story-card__key--size">Size:</span>
                      <span className="story-card__value">{ caseStudy.size }</span>
                      </div>

                      <div className="story-card__detail u-margin-Bm">
                        <span className="story-card__key story-card__key--industry">Industry</span>
                      <span className="story-card__value">{ caseStudy.industry }</span>
                      </div>
                      <Link to={ caseStudy.link } className='btn btn--small u-block'>
                        Read more
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
