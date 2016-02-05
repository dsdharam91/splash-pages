import React from 'react';
import Page from '../../components/page/page';
import { filterRouteByCategory } from '../../router/route-helpers';
import Link from '../../components/link/link';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import Message from '../../components/message/message';

export default class LegalPage extends React.Component {
  displayName = 'LegalPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    currentLocale: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { currentLocale, availableLocales } = this.context;
    const pages = filterRouteByCategory('legal', currentLocale, availableLocales);

    const legalNav = pages.map(function(page) {
      return (<li key={page.routeConfig.name}>
        <Link to={page.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
          <Message pointer={`${page.routeConfig.name}.nav_title`} />
        </Link>
      </li>);
    });

    return (
      <Page isInverted={false}>
        <div className='page-hero u-padding-Vxxl'>
          <h1 className='u-text-heading u-text-center u-color-invert u-text-xl u-text-light u-margin-Vxm'>
            <Message pointer='legal.title' />
          </h1>
        </div>
        <div className='site-container u-padding-Vxxl grid'>
          <div className='u-padding-Vxl'>
            <div className='grid__cell u-size-4of12'>
              <div className='u-size-5of6'>
                <ul className='nav nav-tabs'>
                  { legalNav }
                </ul>
                <hr className='u-size-11of12' />
                <p className='para u-padding-Txs'>
                  <Message pointer='legal.sidebar_text'/>&nbsp;
                  <Message pointer='phone_local' />
                </p>
              </div>
            </div>

            <div className='grid__cell u-size-8of12'>
              {this.props.children}
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
