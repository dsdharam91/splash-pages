import React from 'react';
import _ from 'lodash';
import Page from '../../components/page/page';
import Link from '../../components/link/link';
import Message from '../../components/message/message';
import { PropTypes } from '../../helpers/prop-types/prop-types';

import {
  PARTNERS,
  CATEGORIES,
  filterPartnersByCategory,
  getCategory,
 } from '../../constants/partners';

export default class Partners extends React.Component {
  displayName = 'Partners'

  static propTypes = {
    params: PropTypes.object,
  }

  static contextTypes = {
    pathname: PropTypes.string.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      activeCategory: getCategory(this.getCategoryName(this.props.params.category, this.context.pathname)),
    };
  }

  getCategoryName(category, pathname) {
    return category || pathname.replace(/\/|partners/g, '');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      activeCategory: getCategory(this.getCategoryName(nextProps.params.category, nextContext.pathname)),
    });
  }

  isExternalLink(link) {
    return link.match(/(http|https):\/\//g);
  }

  renderPartnerLinkInner(partner) {
    return (
      <div>
        <div className='partner-card__logo'>
          <img src={ partner.logo.source }
          style={{ marginTop: partner.logo.marginTop ? partner.logo.marginTop : null }}
          width={ partner.logo.width + 'px' }
          title={ partner.name }/>
        </div>

        <hr className='u-margin-An'/>

        <div className='u-color-primary u-text-upcase u-text-xxs u-link-clean
        u-text-heading u-text-semi u-margin-Txs'
        target='_blank'>
          { this.isExternalLink(partner.link) ? 'Connect' : 'Read more' }
        </div>
      </div>
    );
  }

  renderPartnerCard(partner) {
    return (
      <div className="grid__cell u-size-1of3 u-text-center" key={ partner.name }>
        {
          this.isExternalLink(partner.link) ?
            <a href={ partner.link }
            className='partner-card partner-card--has-border u-block u-link-clean'
            target='_blank'>
              { this.renderPartnerLinkInner(partner) }
            </a> :

            <Link to={ partner.link }
            className='partner-card partner-card--has-border u-block u-link-clean'>
              { this.renderPartnerLinkInner(partner) }
            </Link>
        }
      </div>
    );
  }

  isPartnerFeaturedOnCategory(partner) {
    return _.find(
      partner.categories,
      { name: this.state.activeCategory.name }
    ).isFeaturedOnCategory;
  }

  renderPartnerCards(partners) {
    return _.map(partners, (partner) => this.renderPartnerCard(partner));
  }

  getCategoriesFeaturedOnHome() {
    return _.filter(CATEGORIES, { isFeaturedOnHome: true });
  }

  getPartnersInHomeFeaturedCategory(categoryName) {
    return _.filter(PARTNERS, (partner) => {
      return _.find(partner.categories, {
        name: categoryName,
        isFeaturedOnHome: true,
      });
    });
  }

  presentPartnersFeaturedOnHome = () => {
    return _.map(this.getCategoriesFeaturedOnHome(), (category) => {
      return {
        name: category.name,
        label: category.label,
        partners: this.getPartnersInHomeFeaturedCategory(category.name),
      };
    });
  };

  renderFrontPage() {
    return _.map(this.presentPartnersFeaturedOnHome(), (featuredCategory) => {
      return (
        <div key={featuredCategory.name}>
          <div>
            <h2 className='u-text-heading u-color-dark-gray
              u-text-l u-text-light u-inline-block'>
              { featuredCategory.label } integrations
            </h2>

            {
              featuredCategory.name !== 'new' ?
                <Link to='partners'
                className='u-color-primary u-text-upcase u-text-xxs u-link-clean
                u-text-heading u-text-semi u-margin-Txs u-pull-end'
                params={{ category: featuredCategory.name }}>
                  View all
                </Link> : null
            }

            <hr/>
          </div>

          <div className="u-margin-Vxl grid">
            { this.renderPartnerCards(featuredCategory.partners) }
          </div>
        </div>
      );
    });
  }

  renderAllPartnersInCategory() {
    return (
      <div className="u-margin-Vxl grid">
        { this.renderPartnerCards(filterPartnersByCategory(this.state.activeCategory.name)) }
      </div>
    );
  }

  getFeaturedPartners() {
    return _.filter(filterPartnersByCategory(this.state.activeCategory.name), (partner) => {
      return this.isPartnerFeaturedOnCategory(partner);
    });
  }

  getRegularPartners() {
    return _.filter(filterPartnersByCategory(this.state.activeCategory.name), (partner) => {
      return !this.isPartnerFeaturedOnCategory(partner);
    });
  }

  renderSortedPartnersInCategory() {
    return (
      <div>
        <div className='u-margin-Tm u-margin-Bs grid'>
          { this.renderPartnerCards(this.getFeaturedPartners()) }
        </div>

        <hr className='u-margin-Tn'/>

        <div className='u-margin-Vxl grid'>
          { this.renderPartnerCards(this.getRegularPartners()) }
        </div>
      </div>
    );
  }

  renderCategoryPage() {
    return (
      <div>
        <div>
          <h2 className='u-text-heading u-color-dark-gray
          u-text-l u-text-light u-inline-block'>
            { this.state.activeCategory.label }
          </h2>

          <Link to='partners'
          className='u-color-primary u-text-upcase u-text-xxs u-link-clean
          u-text-heading u-text-semi u-margin-Txs u-pull-end'>
            Back to overview
          </Link>
        </div>

        <hr/>

        {
          this.state.activeCategory.hasFeaturedSection ?
            <h3 className='u-text-heading u-text-xs u-text-upcase
            u-color-dark-gray u-margin-Tl'>
              Featured
            </h3> : null
        }

        {
          this.state.activeCategory.hasFeaturedSection ?
            this.renderSortedPartnersInCategory() :
            this.renderAllPartnersInCategory()
        }
      </div>
    );
  }

  renderNav() {
    const allowedNavCategories = _.filter(CATEGORIES, (category) => !category.isHiddenFromNav);

    return _.map(allowedNavCategories, (category) => {
      return (
        <li key={category.name}>
          <Link to='partners' params={{ category: category.name }}
          className='nav-tabs__link u-text-no-smoothing'>
            { category.label }
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <Page isInverted>
        <div className='page-hero page-hero--small u-size-full u-relative'>
          <div className='site-container page-hero__container u-text-center'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-light u-padding-Tm'>
                  <Message pointer='partners.title' />
                </h1>

                <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                  <Message pointer='partners.description' />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='u-background-light-gray'>
          <div className='site-container u-padding-Vxl u-relative'>
            <div className='u-padding-Txl'>
              <div className='grid'>
                <div className='grid__cell u-size-1of4'>
                  <ul className='nav nav-tabs u-margin-Ts'>
                    <li className='u-text-heading u-text-xs u-text-upcase u-color-dark-gray u-padding-Tm u-padding-Bs'>
                      Categories
                    </li>

                    { this.renderNav() }
                  </ul>
                </div>

                <div className='grid__cell u-size-3of4 u-padding-Tl u-padding-Ll'>
                  {
                    this.state.activeCategory ?
                      this.renderCategoryPage() :
                      this.renderFrontPage()
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='product-grid__container u-padding-Vxl'>
            <div className='product-grid__section product-grid__section--first u-padding-Vl'>
              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                Looking for something different?
              </p>

              <p className='u-color-dark-gray u-padding-Vm'>
                We're always adding new integrations — get in touch if you'd like to connect to another partner
              </p>

              <Link to='contact_sales' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Contact us
              </Link>
            </div>

            <div className='product-grid__section u-padding-Vl'>
              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                Partner with us
              </p>

              <p className='u-color-dark-gray u-padding-Vm'>
                Your business could benefit from partnering with GoCardless — find out more about how we can work together
              </p>

              <Link to='partner_with_us' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
