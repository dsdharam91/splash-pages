import React from 'react';
import _ from 'lodash';
import Link from '../link/link';
import Href from '../href/href';
import Message from '../message/message';
import Translation from '../translation/translation';
import IfLinkExists from '../if-link-exists/if-link-exists';
import IfLocale from '../if-locale/if-locale';
import Logo from '../../icons/logo/logo';
import classNames from 'classnames';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import { filterRouteByCategory } from '../../router/route-helpers';
import HeaderNavGroup from '../header-nav-group/header-nav-group';

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

  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }

  renderProductPopover() {
    return (
      <HeaderNavGroup className='popover--large'
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
      </HeaderNavGroup>
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
          className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block' />
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
      'u-sm-padding-Vxxs u-md-padding-Vl u-block u-sm-text-semi',
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

  getNavClassName() {
    return classNames(
      {
        'u-sm-hidden': !this.state.isActive,
      }
    );
  }

  getNavToggleClassName() {
    return classNames(
      'nav__toggle',
      'u-block',
      {
        'nav__toggle--active': this.state.isActive,
      }
    );
  }


  getPopoverLinkClassName() {
    return classNames(
      'nav__item-link u-relative popover-link',
      {
        'popover-link--invert': this.props.isInverted,
      },
    );
  }

  renderMorePopover() {
    return (
      <HeaderNavGroup toggle={(
        <a className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.more' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <IfLinkExists to='security'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='security'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='security.nav_title' />
          </IfLinkExists>

          <li className='u-md-text-semi'>
            <Href to='guides.path'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='guides.nav_title' />
          </li>

          <Translation locales='en-SE'
          tagName='li'
          className='u-md-text-semi'>
            <Href to='guides_sv.path'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='guides_sv.nav_title' />
          </Translation>

          <IfLinkExists to='faq_merchants'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='faq_merchants'
            pointer='faq_merchants.link_title'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='faq_pro_dashboard'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='faq_pro_dashboard'
            pointer='faq_pro_dashboard.link_title'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='partners'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='partners'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='partners.nav_title' />
          </IfLinkExists>

          <hr className='u-sm-margin-Vxxs u-md-margin-Vs' />

          <IfLinkExists to='about'
          tagName='li'>
            <Link to='about'
            pointer='about.nav_title'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'/>
          </IfLinkExists>

          <IfLinkExists to='jobs'
          tagName='li'>
            <Link to='jobs'
            pointer='jobs.nav_title'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'/>
          </IfLinkExists>
        </ul>
      </HeaderNavGroup>
    );
  }

  renderAboutUsPopover() {
    return (
      <HeaderNavGroup toggle={(
        <a className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.about_us' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <li className='u-md-text-semi'>
            <Link to='about'
            tagName='li'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='about.nav_title'/>
          </li>

          <IfLinkExists to='jobs'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='jobs'
            tagName='li'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='jobs.nav_title'/>
          </IfLinkExists>

          <Translation locales={['en-GB']}
          tagName='li'
          className='u-md-text-semi'>
            <Href to='blog.path'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='blog.nav_title' />
          </Translation>

          <IfLinkExists to='partner_with_us'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='partner_with_us'
            tagName='li'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='partner_with_us.nav_title'/>
          </IfLinkExists>

          <li className='u-md-text-semi'>
            <Link to='contact_sales'
            tagName='li'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='contact_sales.nav_title'/>
          </li>
        </ul>
      </HeaderNavGroup>
    );
  }

  renderHelpResourcesPopover() {
    return (
      <HeaderNavGroup toggle={(
        <a id="help-resources-dropdown"  // For e2e test
        className={ this.getLinkClassName() }>
          <div className={ this.getPopoverLinkClassName() }>
            <Message pointer='header.help_resources' />
          </div>
        </a>
      )}>
        <ul className='u-text-xxs u-padding-Vxs'>
          <Translation locales={['en-GB']}
          tagName='li'
          className='u-md-text-semi'>
            <Href to='help.path'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='help.nav_title' />
          </Translation>

          <li className='u-md-text-semi'>
            <Href to='guides.path'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='guides.nav_title' />
          </li>

          <li className='u-md-text-semi'>
            <Href to='api_docs.path'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='api_docs.nav_title' />
          </li>

          <IfLinkExists to='faq_merchants'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='faq_merchants'
            tagName='li'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='faq_merchants.link_title' />
          </IfLinkExists>

          <IfLinkExists to='security'
          tagName='li'
          className='u-md-text-semi'>
            <Link to='security'
            id="security-link" // For e2e test
            tagName='li'
            className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block'
            pointer='security.nav_title'/>
          </IfLinkExists>
        </ul>
      </HeaderNavGroup>
    );
  }

  renderSolutionsPopover() {
    return (
      <HeaderNavGroup toggle={(
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
          className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block u-md-text-semi'/>

          <Link to='new_to_direct_debit'
          tagName='li'
          pointer='new_to_direct_debit.nav_title'
          className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block u-md-text-semi'/>

          <Link to='existing_direct_debit_user'
          tagName='li'
          pointer='existing_direct_debit_user.nav_title'
          className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block u-md-text-semi'/>

          <Link to='partners'
          tagName='li'
          pointer='partner_integrations.nav_title'
          className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block u-md-text-semi'/>

          <Link to='direct_debit_api'
          tagName='li'
          pointer='direct_debit_api.nav_title'
          className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block u-md-text-semi'/>
        </ul>
      </HeaderNavGroup>
    );
  }

  render() {
    return (
      <div className={ this.getHeaderClassName() }>
        <div className='site-header u-relative u-cf'>
          <Link to='home'
          className='header-logo u-relative u-block u-padding-Vl u-pull-start'>
            <Logo className={ this.getLogoClassName() }/>
          </Link>
          <button type="button"
            className={ this.getNavToggleClassName() }
            onClick={ this.handleClick }>
            <span className="nav__toggle-slice nav__toggle-slice--top u-block"></span>
            <span className="nav__toggle-slice nav__toggle-slice--middle u-block"></span>
            <span className="nav__toggle-slice nav__toggle-slice--bottom u-block"></span>
          </button>
          <div className={ this.getNavClassName() }>
            <div className='u-pull-start u-sm-size-full'>
              <nav className='nav u-sm-size-full u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
                <Translation locales={this.context.availableLocales}
                exclude={['en-GB']}
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  { this.renderProductPopover() }
                </Translation>
                <Translation locales='en-GB'
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  { this.renderSolutionsPopover() }
                </Translation>

                <IfLinkExists to='pricing'
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  <Link to='pricing'
                  className={ this.getLinkClassName() }>
                    <div className='nav__item-link u-relative'>
                      <Message pointer='pricing.nav_title' />
                    </div>
                  </Link>
                </IfLinkExists>

                <Translation locales={this.context.availableLocales}
                exclude={['en-GB']}
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  <IfLinkExists to='stories'
                  tagName='div'>
                    <Link to='stories'
                    pointer='stories.nav_title'
                    className={ this.getLinkClassName() } />
                  </IfLinkExists>
                </Translation>
                <Translation locales={['en-GB']}
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  <HeaderNavGroup toggle={(
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
                      className='u-sm-padding-Hxs u-sm-padding-Vxxs u-md-padding-Vxs u-md-padding-Hm u-block u-md-text-semi'/>

                      <hr className='u-sm-margin-Vxxs u-md-margin-Vs'/>

                      { this.renderIndustriesLinks() }
                    </ul>
                  </HeaderNavGroup>
                </Translation>

                <IfLinkExists to='developers'
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  <Link to='developers'
                  className={ this.getLinkClassName() }>
                    <div className='nav__item-link u-relative'>
                      <Message pointer='developers.nav_title' />
                    </div>
                  </Link>
                </IfLinkExists>
              </nav>
            </div>
            <div className='u-sm-size-full u-pull-end align-btn-small'>
              <nav className='nav u-sm-size-full u-pull-start u-color-primary u-text-xxs u-text-light u-text-no-smoothing'>
                <Translation locales={['en-GB', 'fr-FR']}
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  { this.renderHelpResourcesPopover() }
                </Translation>

                <Translation locales={['en-GB', 'fr-FR']}
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  { this.renderAboutUsPopover() }
                </Translation>

                <Translation locales={this.context.availableLocales}
                exclude={['en-GB', 'fr-FR']}
                tagName='div'
                className='nav__item u-md-margin-Rm u-pull-start u-display-block u-sm-size-full u-relative'>
                  { this.renderMorePopover() }
                </Translation>
              </nav>

              <IfLocale hasInstantSignup
              tagName='ul'
              className='u-pull-start u-cf u-sm-size-full'>
                <li className='u-pull-start u-sm-size-full'>
                  <Href to='signin.path'
                  className={ classNames(
                      'nav-btn btn btn--small u-sm-margin-Vm u-text-light u-text-xxs u-relative u-md-display-inline-block u-sm-display-block',
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
      </div>
    );
  }
}
