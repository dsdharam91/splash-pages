import React from 'react';
import Link from '../link/link';
import Href from '../href/href';
import Message from '../message/message';
import Translation from '../translation/translation';
import IfLinkExists from '../if-link-exists/if-link-exists';
import IfLocale from '../if-locale/if-locale';
import Logo from '../../icons/logo/logo';
import Popover from '../popover/popover';
import classNames from 'classnames';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import { filterRouteByCategory } from '../../router/route-helpers';

class Header extends React.Component {
  displayName = 'Header'

  static defaultProps = {
    isInverted: true,
  };

  static propTypes = {
    isInverted: React.PropTypes.bool,
  };

  static contextTypes = {
    currentLocale: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  };

  render() {
    const { currentLocale, availableLocales } = this.context;

    const isInverted = this.props.isInverted;
    const linkClass = classNames('u-padding-Vl u-block', {
      'u-link-invert': isInverted,
      'u-link-default': !isInverted,
    });

    const products = (
      <ul className='u-text-xxs u-padding-Vxs'>
        <IfLinkExists to='features' tagName='li'>
          <Link to='features' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='features.nav_title' /></span>
            <p className='u-color-dark-gray'><Message pointer='features.explainer' /></p>
          </Link>

          <hr className='u-margin-Vxs' />
        </IfLinkExists>

        <IfLinkExists to='pro' tagName='li'>
          <Link to='pro' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='pro.nav_title' /></span>
            <p className='u-color-dark-gray'><Message pointer='pro.explainer' /></p>
          </Link>
        </IfLinkExists>

        <IfLinkExists to='partner_with_us' tagName='li'>
          <hr className='u-margin-Vxs' />

          <Link to='partner_with_us' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='partner_with_us.nav_title' /></span>
            <p className='u-color-dark-gray'><Message pointer='partner_with_us.explainer' /></p>
          </Link>
        </IfLinkExists>
      </ul>
    );

    const industryPages = filterRouteByCategory('industries', currentLocale, availableLocales);
    const industries = (<ul className='u-text-xxs u-padding-Vxs'> {
      industryPages.map((page) => {
        return (
          <li key={page.routeConfig.name} className='u-text-semi'>
            <Link to={page.localeConfig.path} pointer={`${page.routeConfig.name}.nav_title`}
              className='u-padding-Vxs u-padding-Hm u-block' />
          </li>
        );
      })
    } </ul>);

    return (
      <div className={classNames({'site-header-wrapper': isInverted})}>
        <div className='site-header u-relative u-cf'>
          <div className='u-pull-start'>
            <Link to='home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className={classNames('site-logo__image', {
                'u-fill-invert': isInverted,
                'u-fill-primary': !isInverted,
              })} />
            </Link>
          </div>
          <div className='u-pull-end align-btn-small'>
            <nav className='nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>

              <Translation locales={availableLocales} exclude={['en-GB']} tagName='div' className='nav__item u-relative'>
                <Popover className='popover--large' toggle={
                   (<a className={linkClass}>
                      <div className={classNames('nav__item-link popover-link', {
                        'popover-link--invert': isInverted,
                      })}>
                        <Message pointer='header.our_products' />
                      </div>
                    </a>)
                  }>
                  {products}
                </Popover>
              </Translation>

              <Translation locales='en-GB' tagName='div' className='nav__item u-relative'>
                <IfLinkExists to='features'>
                  <Link to='features' className={linkClass}>
                    <div className='nav__item-link'>
                      <Message pointer='features.nav_title' />
                    </div>
                  </Link>
                </IfLinkExists>
              </Translation>

              <IfLinkExists to='pricing' tagName='div' className='nav__item u-relative'>
                <Link to='pricing' className={linkClass}>
                  <div className='nav__item-link'>
                    <Message pointer='pricing.nav_title' />
                  </div>
                </Link>
              </IfLinkExists>

              <Translation locales={['en-GB']} tagName='div' className='nav__item u-relative'>
                <Popover toggle={
                   (<a className={linkClass}>
                      <div className={classNames('nav__item-link popover-link', {
                        'popover-link--invert': isInverted,
                      })}>
                        <Message pointer='header.industries' />
                      </div>
                    </a>)
                  }>
                  {industries}
                </Popover>
              </Translation>

              <div className='nav__item u-relative'>
                <Href to='developer_link' className={linkClass}>
                  <div className='nav__item-link'>
                    <Message pointer='api_docs.nav_title' />
                  </div>
                </Href>
              </div>

              <div className='nav__item u-relative'>
                <Popover toggle={
                  (<a id='nav-more'
                  className={linkClass}>{/* id on this element for e2e tests */}
                    <div className={classNames('nav__item-link popover-link', {
                      'popover-link--invert': isInverted,
                    })}>
                      <Message pointer='header.more' />
                    </div>
                  </a>)
                }>
                  <ul className='u-text-xxs u-padding-Vxs'>
                    <IfLinkExists to='stories' tagName='li' className='u-text-semi'>
                      <Link to='stories' pointer='stories.nav_title'
                      className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>

                    <IfLinkExists to='security' tagName='li' className='u-text-semi'>
                      <Link to='security'
                      id='nav-security'
                      className='u-padding-Vxs u-padding-Hm u-block'
                      pointer='security.nav_title' />
                    </IfLinkExists>{/* id on this element for e2e tests */}

                    <li className='u-text-semi'>
                      <Href to='guides.path' className='u-padding-Vxs u-padding-Hm u-block'
                        pointer='guides.nav_title' />
                    </li>

                    <Translation locales='en-SE' tagName='li' className='u-text-semi'>
                      <Href to='guides_sv.path' className='u-padding-Vxs u-padding-Hm u-block' pointer='guides_sv.nav_title' />
                    </Translation>

                    <Translation locales='en-GB' tagName='li' className='u-text-semi'>
                      <a href='https://support.gocardless.com' className='u-padding-Vxs u-padding-Hm u-block'>
                        <Message pointer='help.nav_title' />
                      </a>
                    </Translation>

                    <IfLinkExists to='faq_merchants' tagName='li' className='u-text-semi'>
                      <Link to='faq_merchants' pointer='faq_merchants.link_title'
                      className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>

                    <IfLinkExists to='faq_pro_dashboard' tagName='li' className='u-text-semi'>
                      <Link to='faq_pro_dashboard' pointer='faq_pro_dashboard.link_title'
                      className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>

                    <IfLinkExists to='partners' tagName='li' className='u-text-semi'>
                      <Link to='partners' className='u-padding-Vxs u-padding-Hm u-block'
                      pointer='partners.nav_title' />
                    </IfLinkExists>

                    <IfLinkExists to='partner_with_us' tagName='li' className='u-text-semi'>
                      <Link to='partner_with_us' className='u-padding-Vxs u-padding-Hm u-block'
                        pointer='partner_with_us.nav_title' />
                    </IfLinkExists>

                    <hr className='u-margin-Vs' />

                    <IfLinkExists to='about' tagName='li'>
                      <Link to='about' pointer='about.nav_title'
                        className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>

                    <IfLinkExists to='jobs' tagName='li'>
                      <Link to='jobs' pointer='jobs.nav_title'
                        className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>
                  </ul>
                </Popover>
              </div>
            </nav>
            <IfLocale hasInstantSignup tagName='ul' className='u-pull-start u-cf'>
              <li className='u-pull-start'>
                <Href to='signin.path'
                className={classNames('nav-btn btn btn--small u-text-light u-text-xxs u-relative',
                  'u-text-transform-none u-text-no-smoothing', {
                  'btn--invert-hollow': isInverted,
                  'btn--hollow': !isInverted,
                })}
                pointer='header.login_btn' />
              </li>
            </IfLocale>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
