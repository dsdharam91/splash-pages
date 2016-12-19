import React from 'react';
import Translation from '../../components/translation/translation';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Message from '../../components/message/message';

let allStories = [
  {
    link: 'stories_peterborough_council',
    quote: `GoCardless was easy to integrate and offered value for money taking payments`,
    logoSrc: '/images/stories/story-logos/peterborough-council.png',
    logoWidth: '130',
    using: 'Uses GoCardless API',
    industry: 'Local Authority',
  },
  {
    link: 'stories_wow_company',
    quote: `GoCardless solved almost a decade of billing and payment headaches for us`,
    logoSrc: '/images/stories/story-logos/the-wow-company.png',
    logoWidth: '50',
    using: 'Uses GoCardless with Xero',
    industry: 'Accountancy Practice',
  },
  {
    link: 'stories_nutmeg',
    quote: `It's a very automated service so we've not needed to add headcount`,
    logoSrc: '/images/stories/story-logos/nutmeg.png',
    logoWidth: '140',
    using: 'Uses GoCardless API',
    industry: 'Investment Management',
  },
  {
    link: 'stories_teamup',
    quote: `GoCardless was a big leap forward with a high-tech solution to payments`,
    logoSrc: '/images/stories/story-logos/teamup.png',
    logoWidth: '60',
    using: 'GoCardless Partner App',
    industry: 'Health & Fitness Software',
  },
  {
    link: 'stories_has_bean_coffee',
    quote: `GoCardless helps to prevent uncomfortable conversations about money`,
    logoSrc: '/images/stories/story-logos/has-bean-coffee.png',
    logoWidth: '115',
    using: 'Uses GoCardless with Kashflow',
    industry: 'Wholesale Invoicing',
  },
  {
    link: 'stories_hotpod_yoga',
    quote: `GoCardless frees up time and avoids the need to employ dedicated staff`,
    logoSrc: '/images/stories/story-logos/hotpod-yoga.png',
    logoWidth: '117',
    using: 'Uses GoCardless with Teamup',
    industry: 'Health & Fitness Franchise',
  },

  {
    link: 'stories_soaring_falcon',
    quote: `GoCardless gives me a regular income so I can use the funds for growth`,
    logoSrc: '/images/stories/story-logos/soaring-falcon.png',
    logoWidth: '45',
    using: 'Uses GoCardless with Xero',
    industry: 'Accountancy Practice',
  },
  {
    link: 'stories_your_parking_space',
    quote: `You don’t suffer from failed payments caused by expired credit or debit cards.`,
    logoSrc: '/images/stories/story-logos/your-parking-space.png',
    logoWidth: '190',
    using: 'Uses GoCardless Dashboard',
    industry: 'Online Marketplace',
  },
  {
    link: 'stories_bulb_energy',
    quote: `We wanted to give our members the payment options they most trusted`,
    logoSrc: '/images/stories/story-logos/bulb-energy.png',
    logoWidth: '115',
    using: 'Uses GoCardless API',
    industry: 'Energy Supplier',
  },
  {
    link: 'stories_boost_capital',
    quote: `Being able to offer truly paperless Direct Debit is a great selling point`,
    logoSrc: '/images/stories/story-logos/boost-capital.png',
    logoWidth: '140',
    using: 'Uses GoCardless API',
    industry: 'Business Loans',
  },
  {
    link: 'stories_smart_pension',
    quote: `GoCardless ensures our transactions are accurate, easy to setup and manage`,
    logoSrc: '/images/stories/story-logos/smart-pension.png',
    logoWidth: '156',
    using: 'Uses GoCardless API',
    industry: 'Pensions Provider',
  },

  {
    link: 'stories_fd_works',
    quote: `When we heard about GoCardless, we knew it was a no-brainer to use it`,
    logoSrc: '/images/stories/story-logos/fd-works.png',
    logoWidth: '100',
    using: 'Uses GoCardless with Xero',
    industry: 'Accountancy Practice',
  },
  {
    link: 'stories_lyles_sutherland',
    quote: `It's great knowing money will come in each month without having to chase it`,
    logoSrc: '/images/stories/story-logos/lyles-sutherland.png',
    logoWidth: '140',
    using: 'Uses GoCardless with FreeAgent',
    industry: 'Digital Agency & Software',
  },
  {
    link: 'stories_connexin',
    quote: `Our monthly bill runs are quick and easy since switching to GoCardless`,
    logoSrc: '/images/stories/story-logos/connexin.png',
    logoWidth: '97',
    using: 'Uses GoCardless API',
    industry: 'Telecoms Services',
  },
  {
    link: 'stories_rock_choir',
    quote: `With GoCardless, we can now retry failed payments at the click of a button`,
    logoSrc: '/images/stories/story-logos/rock-choir.png',
    logoWidth: '50',
    using: 'Uses GoCardless Dashboard',
    industry: 'Membership Group',
  },
  {
    link: 'stories_slm_connect',
    quote: `Up-to-date payment status information allows us to improve our credit control`,
    logoSrc: '/images/stories/story-logos/slm-connect.png',
    logoWidth: '140',
    using: 'Uses GoCardless API',
    industry: 'Marketing Agency',
  },
];

export default class StoriesEn extends React.Component {
  displayName = 'StoriesEn'

  render() {
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
          <p className="u-text-heading u-color-dark-gray u-text-l u-text-light u-padding-Vs">
            From individuals to multi-national corporations, GoCardless helps thousands of businesses with their payments everyday.
          </p>
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
              Join the <Message pointer='number_of_merchants' />+ businesses already Uses GoCardless
            </p>
            <Href to='signup.path' className='btn u-margin-Tm u-margin-Rm'>Sign up now</Href>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'><Message pointer='cta.pro' /></Link>
          </div>
        </div>
      </Translation>
    );
  }
}
