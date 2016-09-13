import React from 'react';
import rest from 'lodash/array/rest';
import { filterRouteByCategory } from '../../../router/route-helpers';
import Message from '../../../components/message/message';
import Link from '../../../components/link/link';
import IfLinkExists from '../../../components/if-link-exists/if-link-exists';
import AboutHeader from '../about-header';
import Page from '../../../components/page/page';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class JobsPage extends React.Component {
  displayName = 'JobsPage'

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  static contextTypes = {
    currentLocale: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { currentLocale, availableLocales } = this.context;
    const pages = filterRouteByCategory('jobs', currentLocale, availableLocales);

    const categories = pages.reduce(function(memo, job) {
      const category = rest(job.routeConfig.category.split('.')).join('.');
      memo[category] = memo[category] || [];
      memo[category].push(job);
      return memo;
    }, {});

    const jobsNav = Object.keys(categories).map(function(category) {
      return [
        (<li key={category} className='u-text-heading u-text-xs u-text-upcase u-color-dark-gray u-padding-Tm u-padding-Bs'>
          <Message pointer={`jobs.${category}`} />
        </li>),
        categories[category].map(function(job) {
          return (<li key={job.routeConfig.name}>
            <Link to={job.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
              <Message pointer={`${job.routeConfig.name}.title`} />
            </Link>
          </li>);
        }),
      ];
    });

    return (
      <Page>
        <AboutHeader />

        <div className='site-container u-padding-Vxxl u-relative'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
              <Message pointer='jobs.open_positions' />
            </h2>
            <div className='grid'>
              <div className='grid__cell u-size-1of3'>
                <ul className='nav nav-tabs u-margin-Ts'>
                  { jobsNav }
                </ul>
              </div>
              <div className='grid__cell u-size-2of3 u-padding-Tl u-padding-Ll'>
                {this.props.children}
              </div>
            </div>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl jobs-page__direct-applications'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-3of5 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l u-margin-Bm'>
                Not sure which role is right for you?
              </h2>
              <p className='u-text-xs u-color-dark-gray'>
                While we work with a small number of recruitment agencies, we
                really love direct applications. If you're not sure whether a
                role is a good fit for you, please email us
                at <a href='mailto:jobs@gocardless.com'>jobs@gocardless.com</a> to find out more!
              </p>
            </div>
          </div>
        </div>

        <IfLinkExists to='team'>
          <div className='u-text-center u-padding-Vxxl'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  Find out more about working at GoCardless
                </h2>

                <Link to='team'
                className='btn btn--hollow u-margin-Tm'>
                  Visit our team page
                </Link>
              </div>
            </div>
          </div>
        </IfLinkExists>
      </Page>
    );
  }
}
