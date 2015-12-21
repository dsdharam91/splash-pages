import React from 'react';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import Href from '../../../components/href/href';
import { PropTypes } from '../../../helpers/prop-types/prop-types';
import rest from 'lodash/array/rest';
import { filterRouteByCategory } from '../../../router/route-helpers';
import Link from '../../../components/link/link';

export default class PartnersGuidePage extends React.Component {
  displayName = 'PartnersGuidePage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    currentLocale: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { currentLocale, availableLocales } = this.context;
    const pages = filterRouteByCategory('partners', currentLocale, availableLocales);

    const categories = pages.reduce(function(memo, page) {
      const category = rest(page.routeConfig.category.split('.')).join('.');
      memo[category] = memo[category] || [];
      memo[category].push(page);
      return memo;
    }, {});

    const partnersGuideNav = Object.keys(categories).map(function(category) {
      return [
        (<li key={category} className='nav__heading u-text-heading u-text-xs u-text-upcase u-color-p u-padding-Bs'>
          <Message pointer={`partners.${category}`} />
        </li>),
        categories[category].map(function(job) {
          return (<li key={job.routeConfig.name}>
            <Link to={job.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
              <Message pointer={`${job.routeConfig.name}.nav_title`} />
            </Link>
          </li>);
        }),
      ];
    });

    return (
      <Page isInverted={false}>
        <div>
          <div>
            <div className='page-hero u-padding-Vxxl'>
              <div className='u-margin-Vxm u-text-center'>
                <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                  <Message pointer='partners_guide.title' />
                </h1>
              </div>
            </div>
          </div>

          <div className='site-container u-padding-Vxxl grid'>
            <div className='u-padding-Vxl'>
              <div className='grid__cell u-size-4of12'>
                <div>
                  <div className='u-size-5of6'>
                    <ul className='nav nav-tabs'>
                      { partnersGuideNav }
                    </ul>
                    <hr className='u-size-11of12' />
                    <p className='para u-padding-Txs'>
                      <Message pointer='partners.sidebar' />&nbsp;
                      <Href to='partners_email' />
                    </p>
                  </div>
                </div>
              </div>

              <div className='grid__cell u-size-8of12 faq-page'>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
