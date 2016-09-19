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
      link: 'stories_hotpod_yoga',
      quote: `We’ve reduced the risks associated with franchise payments`,
      size: '2 employees',
      logoSrc: '/images/stories/story-logos/hotpod-yoga.png',
      logoWidth: '117',
      industry: 'Health & Fitness',
    },
    {
      link: 'stories_soaring_falcon',
      quote: `GoCardless gives me a regular income so I can use the funds for growth`,
      size: '3 employees',
      logoSrc: '/images/stories/story-logos/soaring-falcon.png',
      logoWidth: '45',
      industry: 'Accountancy',
    },
    {
      link: 'stories_fd_works',
      quote: `When we heard about GoCardless, we knew it was a no-brainer to use it`,
      size: '8 employees',
      logoSrc: '/images/stories/story-logos/fd-works.png',
      logoWidth: '100',
      industry: 'Accountancy',
    },
    {
      link: 'stories_has_bean_coffee',
      quote: `GoCardless helps prevent uncomfortable conversations about money`,
      size: '15 employees',
      logoSrc: '/images/stories/story-logos/has-bean-coffee.png',
      logoWidth: '115',
      industry: 'Wholesale',
    },
  ],
  SMEs: [
    {
      link: 'stories_bulb_energy',
      quote: `We wanted to give our members the payment options they most trusted`,
      size: '11-50 employees',
      logoSrc: '/images/stories/story-logos/bulb-energy.png',
      logoWidth: '115',
      industry: 'Energy',
    },
    {
      link: 'stories_lyles_sutherland',
      quote: `It's great knowing money will come in each month without having to chase it`,
      size: '16 employees',
      logoSrc: '/images/stories/story-logos/lyles-sutherland.png',
      logoWidth: '140',
      industry: 'Digital services',
    },
    {
      link: 'stories_boost_capital',
      quote: `Being able to offer truly paperless Direct Debit is a great selling point`,
      size: '11-50 employees',
      logoSrc: '/images/stories/story-logos/boost-capital.png',
      logoWidth: '140',
      industry: 'Loans',
    },
    {
      link: 'stories_smart_pension',
      quote: `GoCardless ensures our transactions are accurate, easy to setup and manage`,
      size: '11-50 employees',
      logoSrc: '/images/stories/story-logos/smart-pension.png',
      logoWidth: '156',
      industry: 'Pensions',
    },
    {
      link: 'stories_connexin',
      quote: `Our monthly bill runs are quick and easy since switching to GoCardless`,
      size: '23 employees',
      logoSrc: '/images/stories/story-logos/connexin.png',
      logoWidth: '97',
      industry: 'Telecoms',
    },
    {
      link: 'stories_rock_choir',
      quote: `With GoCardless, we can now retry failed payments at the click of a button`,
      size: '31 employees',
      logoSrc: '/images/stories/story-logos/rock-choir.png',
      logoWidth: '50',
      industry: 'Membership',
    },
  ],
  Corporations: [
    {
      link: 'stories_nutmeg',
      quote: `It's a very automated service so we've not needed to add headcount`,
      size: '80 employees',
      logoSrc: '/images/stories/story-logos/nutmeg.png',
      logoWidth: '140',
      industry: 'Investments',
    },
  ],
};

const allStories = _.values(caseStudies).reduce((fold, value) => fold.concat(value), []);

const DEFAULT_STORY_CATEGORY = 'All';

const groupedStories = _.merge({
  [DEFAULT_STORY_CATEGORY]: allStories,
}, caseStudies);

export default class StoriesEn extends React.Component {
  displayName = 'StoriesEn'

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
      <Translation locales='en'>
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
              Start your GoCardless story today
            </h2>
            <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
              Join the <Message pointer='number_of_merchants' />+ businesses already using GoCardless
            </p>
            <Href to='signup.path' id='track-cta-sign-up' className='btn u-margin-Tm u-margin-Rm'>Sign up now</Href>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'><Message pointer='cta.pro' /></Link>
          </div>
        </div>
      </Translation>
    );
  }
}
