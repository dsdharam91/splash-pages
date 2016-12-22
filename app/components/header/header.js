import React from 'react';
import _ from 'lodash';
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

export default class Header extends React.Component {
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

  renderProductPopover() {
    return (
      <Popover className='popover--large'
      toggle={(
        <a className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.our_products' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          { _.map(['features', 'pro', 'partner_with_us'], (link) =>
            <IfLinkExists to={link}
            tagName='li'
            className='site-header__product'
            key={link}>
              <Link to={link}
              className='site-header__product-link u-link-clean'>
                <span className='site-header__product-link-title u-text-semi'>
                  <Message pointer={`${link}.nav_title`}/>
                </span>

                <p className='u-color-dark-gray'>
                  <Message pointer={`${link}.explainer`}/>
                </p>
              </Link>

              <hr className='site-header__product-link-hr u-margin-Vxs'/>
            </IfLinkExists>
        ) }
        </ul>
      </Popover>
    );
  }

  getIndustryPages() {
    return filterRouteByCategory(
      'industries',
      this.context.currentLocale,
      this.context.availableLocales
    );
  }

  renderIndustriesLinks() {
    return _.map(this.getIndustryPages(), (page) => {
      return (
        <li key={page.routeConfig.name}>
          <Link to={page.localeConfig.path}
          pointer={`${page.routeConfig.name}.nav_title`}
          className='u-padding-Vxs u-padding-Hm u-block' />
        </li>
      );
    });
  }

  getHeaderClassName() {
    return classNames(
      {
        'site-header-wrapper': this.props.isInverted,
      }
    );
  }

  getLinkClassName() {
    return classNames(
      'u-padding-Vl u-block',
      {
        'u-link-invert': this.props.isInverted,
        'u-link-default': !this.props.isInverted,
      }
    );
  }

  getLogoClassName() {
    return classNames(
      'site-logo__image',
      {
        'u-fill-invert': this.props.isInverted,
        'u-fill-primary': !this.props.isInverted,
      }
    );
  }

  getPopoverLinkClassName() {
    return classNames(
      'nav__item-link popover-link',
      {
        'popover-link--invert': this.props.isInverted,
      },
    );
  }

  renderMorePopover() {
    return (
      <Popover toggle={(
        <a className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.more' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <IfLinkExists to='stories'
          tagName='li'
          className='u-text-semi'>
            <Link to='stories'
            pointer='stories.nav_title'
            className='u-padding-Vxs u-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='security'
          tagName='li'
          className='u-text-semi'>
            <Link to='security'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='security.nav_title' />
          </IfLinkExists>

          <li className='u-text-semi'>
            <Href to='guides.path'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='guides.nav_title' />
          </li>

          <Translation locales='en-SE'
          tagName='li'
          className='u-text-semi'>
            <Href to='guides_sv.path'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='guides_sv.nav_title' />
          </Translation>

          <IfLinkExists to='faq_merchants'
          tagName='li'
          className='u-text-semi'>
            <Link to='faq_merchants'
            pointer='faq_merchants.link_title'
            className='u-padding-Vxs u-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='faq_pro_dashboard'
          tagName='li'
          className='u-text-semi'>
            <Link to='faq_pro_dashboard'
            pointer='faq_pro_dashboard.link_title'
            className='u-padding-Vxs u-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='partners'
          tagName='li'
          className='u-text-semi'>
            <Link to='partners'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='partners.nav_title' />
          </IfLinkExists>

          <hr className='u-margin-Vs' />

          <IfLinkExists to='about'
          tagName='li'>
            <Link to='about'
            pointer='about.nav_title'
            className='u-padding-Vxs u-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='jobs'
          tagName='li'>
            <Link to='jobs'
            pointer='jobs.nav_title'
            className='u-padding-Vxs u-padding-Hm u-block'/>
          </IfLinkExists>
        </ul>
      </Popover>
    );
  }

  renderAboutUsPopover() {
    return (
      <Popover toggle={(
        <a className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.about_us' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <li className='u-text-semi'>
            <Link to='about'
            tagName='li'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='about.nav_title'/>
          </li>

          <li className='u-text-semi'>
            <Link to='jobs'
            tagName='li'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='jobs.nav_title'/>
          </li>

          <li className='u-text-semi'>
            <Href to='blog.path'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='blog.nav_title' />
          </li>

          <li className='u-text-semi'>
            <Link to='partner_with_us'
            tagName='li'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='partner_with_us.nav_title'/>
          </li>

          <li className='u-text-semi'>
            <Link to='contact_sales'
            tagName='li'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='contact_sales.nav_title'/>
          </li>
        </ul>
      </Popover>
    );
  }

  renderHelpResourcesPopover() {
    return (
      <Popover toggle={(
        <a id="help-resources-dropdown"  // For e2e test
        className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.help_resources' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <li className='u-text-semi'>
            <Href to='help.path'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='help.nav_title' />
          </li>

          <li className='u-text-semi'>
            <Href to='guides.path'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='guides.nav_title' />
          </li>

          <li className='u-text-semi'>
            <Href to='api_docs.path'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='api_docs.nav_title' />
          </li>

          <li className='u-text-semi'>
            <Link to='faq_merchants'
            tagName='li'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='faq_merchants.link_title'/>
          </li>

          <li className='u-text-semi'>
            <Link to='security'
            id="security-link" // For e2e test
            tagName='li'
            className='u-padding-Vxs u-padding-Hm u-block'
            pointer='security.nav_title'/>
          </li>
        </ul>
      </Popover>
    );
  }

  renderSolutionsPopover() {
    return (
      <Popover toggle={(
        <a className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.solutions' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <Link to='small_medium_businesses'
          tagName='li'
          pointer='small_medium_businesses.nav_title'
          className='u-padding-Vxs u-padding-Hm u-block u-text-semi'/>

          <Link to='new_to_direct_debit'
          tagName='li'
          pointer='new_to_direct_debit.nav_title'
          className='u-padding-Vxs u-padding-Hm u-block u-text-semi'/>

          <Link to='existing_direct_debit_user'
          tagName='li'
          pointer='optimise_your_direct_debit.nav_title'
          className='u-padding-Vxs u-padding-Hm u-block u-text-semi'/>

          <Link to='partners'
          tagName='li'
          pointer='partner_integrations.nav_title'
          className='u-padding-Vxs u-padding-Hm u-block u-text-semi'/>

          <Link to='integrate_features'
          tagName='li'
          pointer='integrate_features.nav_title'
          className='u-padding-Vxs u-padding-Hm u-block u-text-semi'/>
        </ul>
      </Popover>
    );
  }

  render() {
    return (
      <div className={ this.getHeaderClassName() }>
        <div className='site-header u-relative u-cf'>
          <div className='u-pull-start'>
            <Link to='home'
            className='header-logo u-relative u-block u-padding-Vl u-pull-start'>
              <Logo className={ this.getLogoClassName() }/>
            </Link>

            <nav className='nav u-pull-start u-margin-Ll u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
              <Translation locales={this.context.availableLocales}
              exclude={['en-GB']}
              tagName='div'
              className='nav__item u-relative'>
                { this.renderProductPopover() }
              </Translation>

              <Translation locales='en-GB'
              tagName='div'
              className='nav__item u-relative'>
                { this.renderSolutionsPopover() }
              </Translation>

              <IfLinkExists to='pricing'
              tagName='div'
              className='nav__item u-relative'>
                <Link to='pricing'
                className={ this.getLinkClassName() }>
                  <div className='nav__item-link'>
                    <Message pointer='pricing.nav_title' />
                  </div>
                </Link>
              </IfLinkExists>

              <Translation locales={['en-GB']}
              tagName='div'
              className='nav__item u-relative'>
                <Popover toggle={(
                  <a className={ this.getLinkClassName() }>
                    <div className={ this.getPopoverLinkClassName() }>
                      <Message pointer='header.who_uses_us' />
                    </div>
                  </a>
                )}>
                  <ul className='u-text-xxs u-padding-Vxs'>
                    <Link to='stories'
                    tagName='li'
                    pointer='stories.nav_title'
                    className='u-padding-Vxs u-padding-Hm u-block u-text-semi'/>

                    <hr className='u-margin-Vs'/>

                    { this.renderIndustriesLinks() }
                  </ul>
                </Popover>
              </Translation>

              <div className='nav__item u-relative'>
                <Href to='developers.path'
                className={ this.getLinkClassName() }>
                  <div className='nav__item-link'>
                    <Message pointer='developers.nav_title' />
                  </div>
                </Href>
              </div>
            </nav>
          </div>

          <div className='u-pull-end align-btn-small'>
            <nav className='nav u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
              <Translation locales={['en-GB']}
              tagName='div'
              className='nav__item u-relative'>
                { this.renderHelpResourcesPopover() }
              </Translation>

              <Translation locales={['en-GB']}
              tagName='div'
              className='nav__item u-relative'>
                { this.renderAboutUsPopover() }
              </Translation>

              <Translation locales={this.context.availableLocales}
              exclude={['en-GB']}
              tagName='div'
              className='nav__item u-relative'>
                { this.renderMorePopover() }
              </Translation>
            </nav>

            <IfLocale hasInstantSignup
            tagName='ul'
            className='u-pull-start u-cf'>
              <li className='u-pull-start'>
                <Href to='signin.path'
                className={ classNames(
                    'nav-btn btn btn--small u-text-light u-text-xxs u-relative',
                    'u-text-transform-none u-text-no-smoothing',
                    {
                      'btn--invert-hollow': this.props.isInverted,
                      'btn--hollow': !this.props.isInverted,
                    }
                  )
                }
                pointer='header.login_btn'/>
              </li>
            </IfLocale>
          </div>
        </div>
      </div>
    );
  }
}
