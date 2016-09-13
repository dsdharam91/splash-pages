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
      link: 'stories_gastrofix',
      quote: 'Die Unterstützung seitens GoCardless ist hervorragend',
      size: '80 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/gastrofix-logo.png',
      logoWidth: '130',
      industry: 'SaaS',
    },
    {
      link: 'stories_picdrop',
      quote: 'We’ve reduced the risks associated with franchise payments',
      size: '3 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/hotpod-yoga.png',
      logoWidth: '117',
      industry: 'SaaS',
    },
  ],
  KMUs: [
    {
      link: 'stories_crossfit_oldenburg',
      quote: 'We wanted to give our members the payment options they most trusted',
      size: '2 Mitarbeiter',
      logoSrc: '/images/stories/story-logos/bulb-energy.png',
      logoWidth: '115',
      industry: 'Fitness',
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
    const tabClassesForCategory = (category) => {
      return classNames('industry-filters__tab grid__cell u-size-1of4', {
        active: this.state.activeCategory === category,
      });
    };

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
              Mehr als <Message pointer='number_of_merchants' />+ Unternehmen vertrauen bereits auf GoCardless
            </p>
            <Href to='signup.path' id='track-cta-sign-up' className='btn u-margin-Tm u-margin-Rm'>Jetzt anmelden</Href>
            <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'><Message pointer='cta.pro' /></Link>
          </div>
        </div>
      </Translation>
    );
  }
}

// export default class StoriesDe extends React.Component {
//   displayName = 'StoriesDe'

//   render() {
//     return (
//       <Translation locales='de'>
//         <div className='page-hero page-hero--large u-relative u-size-full'>
//           <div className='site-container page-hero__container'>
//             <div className='page-hero__inner stories-hero-heading'>
//               <div className='page-hero__text'>
//                 <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
//                   Tausende von zufriedenen Kunden
//                 </h1>
//                 <div className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
//                   Von Startups bis zu internationalen Großkonzernen, GoCardless<br />
//                   hilft täglich tausenden von Kunden mit ihren Zahlungen
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//         <div className='site-container u-padding-Vxxl u-margin-Bxxl'>
//           <div className='u-padding-Vxxl u-relative u-margin-Bxxl'>
//             <div className='u-padding-Bl'>
//               <div className='stories-spotlight grid u-margin-Hn u-size-full'>
//                 <Link to='stories_picdrop' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
//                   <div className='stories-spotlight__item stories-spotlight__item--picdrop
//                   u-relative u-padding-Vl'>
//                     <div className='stories-spotlight__item-text u-margin-Vl'>
//                       <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
//                         “Wir mussten früher täglich mit Rücklastschriften kämpfen. Das fällt jetzt komplett weg.”
//                       </p>
//                       <div className='u-color-invert u-margin-Tm'>
//                         Tobias Friese, PicDrop
//                       </div>
//                     </div>
//                   </div>
//                   <div className='stories-spotlight__btn btn u-size-full'>Zur Referenz</div>
//                 </Link>
//                 <Link to='stories_crossfit_oldenburg' className='grid__cell u-text-center u-size-1of2
//                 u-link-clean u-padding-Lxs u-padding-Rn'>
//                   <div className='stories-spotlight__item stories-spotlight__item--crossfit-oldenburg u-relative u-padding-Vl'>
//                     <div className='stories-spotlight__item-text u-margin-Vl'>
//                       <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
//                         “Der Vorteil für mich ist eine Zeitersparnis von ca. 5 Stunden! Die neugewonnene Zeit wird effektiv im Laden genutzt!"
//                       </p>
//                       <div className='u-color-invert u-margin-Tm'>
//                         Tino Petke, CrossFit Oldenburg
//                       </div>
//                     </div>
//                   </div>
//                   <div className='stories-spotlight__btn btn u-size-full'>Zur Referenz</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/*<hr className='u-margin-An' />
//         <div className='site-container u-padding-Vxxl'>
//           <div className='grid u-padding-Vxl'>
//             <StoryLink cssSizeClass='u-size-1of2'
//               imgClass='habitat-logo stories-item__logo--habitat' to='stories_habitat'>
//               Habitat, la chaîne de design et d’ameublement, a pu lancer une offre innovante d’abonnement en moins de deux mois.
//             </StoryLink>
//             <StoryLink cssSizeClass='u-size-1of2'
//               imgClass='foundation-of-hearts-logo stories-item__logo--foundation-of-hearts' to='stories_foundation_of_hearts'>
//               La Foundation of Hearts, une ONG des supporteurs du Hearts FC,
//               peut prendre plus de 8.000 donations par mois facilement.
//             </StoryLink>
//           </div>
//         </div>*/}

//         <hr className='u-margin-An' />
//         <StartTakingPaymentsCTA />
//       </Translation>
//   );
//   }
// }
