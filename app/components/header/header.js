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

class Header extends React.Component {
  displayName = 'Header'

  static defaultProps = {
    isInverted: true,
  };

  static propTypes = {
    isInverted: React.PropTypes.bool,
  };

  render() {
    const isInverted = this.props.isInverted;
    const linkClass = classNames('u-padding-Vl u-block', {
      'u-link-invert': isInverted,
      'u-link-default': !isInverted,
    });

    const products = (
      <ul className='u-text-xxs u-padding-Vxs'>
        <IfLinkExists to='features' tagName='li'>
          <Link to='features' id='track-nav-features' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='features.nav_title' /></span>
            <p className='u-color-dark-gray'><Message pointer='features.explainer' /></p>
          </Link>
          <hr className='u-margin-Vxs' />
        </IfLinkExists>
        <IfLinkExists to='pro' tagName='li'>
          <Link to='pro' id='track-nav-pro' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='pro.nav_title' /></span>
            <p className='u-color-dark-gray'><Message pointer='pro.explainer' /></p>
          </Link>
        </IfLinkExists>
        <IfLinkExists to='partners' tagName='li'>
          <hr className='u-margin-Vxs' />
          <Link to='partners' id='track-nav-partners' className='site-header__product-link u-link-clean'>
            <span className='site-header__product-link-title u-text-semi'><Message pointer='partners.nav_title' /></span>
            <p className='u-color-dark-gray'><Message pointer='partners.explainer' /></p>
          </Link>
        </IfLinkExists>
      </ul>
    );

    return (
      <div className={classNames({'site-header-wrapper': isInverted})}>
        <div className='site-header u-relative u-cf'>
          <div className='u-pull-start'>
            <Link to='home' id='track-nav-home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className={classNames('site-logo__image', {
                'u-fill-invert': isInverted,
                'u-fill-primary': !isInverted,
              })} />
            </Link>
          </div>
          <div className='u-pull-end align-btn-small'>
            <nav className='nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
              <div className='nav__item u-relative'>
                <Popover className='popover--large' toggle={
                   (<a href='' id='track-nav-products' className={linkClass}>
                      <div className={classNames('nav__item-link popover-link', {
                        'popover-link--invert': isInverted,
                      })}>
                        <Message pointer='header.our_products' />
                      </div>
                    </a>)
                 }>
                   {products}
                 </Popover>
              </div>
              <IfLinkExists to='pricing' tagName='div' className='nav__item u-relative'>
                <Link to='pricing' id='track-nav-pricing' className={linkClass}>
                  <div className='nav__item-link'>
                    <Message pointer='pricing.nav_title' />
                  </div>
                </Link>
              </IfLinkExists>
              <IfLinkExists to='stories' tagName='div' className='nav__item u-relative'>
                <Link to='stories' id='track-nav-stories' className={linkClass}>
                  <div className='nav__item-link'>
                    <Message pointer='stories.nav_title' />
                  </div>
                </Link>
              </IfLinkExists>
              <div className='nav__item u-relative'>
                <Popover toggle={
                  (<a href='' id='track-nav-more' className={linkClass}>
                    <div className={classNames('nav__item-link popover-link', {
                      'popover-link--invert': isInverted,
                    })}>
                      <Message pointer='header.more' />
                    </div>
                  </a>)
                }>
                  <ul className='u-text-xxs u-padding-Vxs'>
                    <IfLinkExists to='security' tagName='li' className='u-text-semi'>
                      <Link to='security' id='track-nav-security' className='u-padding-Vxs u-padding-Hm u-block'
                        pointer='security.nav_title' />
                    </IfLinkExists>
                    <li className='u-text-semi'>
                      <Href to='guides.path' id='track-nav-guides' className='u-padding-Vxs u-padding-Hm u-block'
                        pointer='guides.nav_title' />
                    </li>
                    <Translation locales='en-GB' tagName='li' className='u-text-semi'>
                      <a href='http://help.gocardless.com' id='track-nav-help' className='u-padding-Vxs u-padding-Hm u-block'>
                        <Message pointer='help.nav_title' />
                      </a>
                    </Translation>
                    <IfLinkExists to='faq_merchants' tagName='li' className='u-text-semi'>
                      <Link to='faq_merchants' pointer='faq_merchants.link_title'
                      id='track-nav-faq' className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>
                    <IfLinkExists to='faq_pro_dashboard' tagName='li' className='u-text-semi'>
                      <Link to='faq_pro_dashboard' pointer='faq_pro_dashboard.link_title'
                      id='track-nav-faq-pro-dashboard' className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>
                    <hr className='u-margin-Vs' />
                    <IfLinkExists to='about' tagName='li'>
                      <Link to='about' pointer='about.nav_title'
                        id='track-nav-about' className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>
                    <IfLinkExists to='jobs' tagName='li'>
                      <Link to='jobs' pointer='jobs.nav_title'
                        id='track-nav-jobs' className='u-padding-Vxs u-padding-Hm u-block' />
                    </IfLinkExists>
                  </ul>
                </Popover>
              </div>
            </nav>
            <IfLocale hasInstantSignup tagName='ul' className='u-pull-start u-cf'>
              <li className='u-pull-start'>
                <Href to='signin.path' id='track-nav-sign-in'
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
