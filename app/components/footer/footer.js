import React from 'react';
import sortBy from 'lodash/collection/sortBy';
import merge from 'lodash/object/merge';
import Link from '../link/link';
import Href from '../href/href';
import Message from '../message/message';
import IfLinkExists from '../if-link-exists/if-link-exists';
import Translation from '../translation/translation';
import SchemaItemProp from '../schema-item-prop/schema-item-prop';
import { homeRoute } from '../../router/routes';
import { getLocalesForRouteName } from '../../router/route-helpers';
import Popover from '../popover/popover';
import Flag from '../flag/flag';
import { localeToRegion } from '../../helpers/locale-helper/locale-helper';
import { PropTypes } from '../../helpers/prop-types/prop-types';
import CheckmarkIcon from '../../icons/svg/checkmark';

function buildAvailableLocalePages(currentLocale, routeName, availableLocales, availableCountryNames) {
  const siteLocales = merge({}, getLocalesForRouteName(homeRoute, availableLocales),
    getLocalesForRouteName(routeName, availableLocales));
  const locales = Object.keys(siteLocales).map(function(locale) {
    const isActive = currentLocale === locale;
    const path = siteLocales[locale].path;
    const name = availableCountryNames[locale];
    return { locale, isActive, path, name };
  });

  return sortBy(locales, 'name');
}

class Footer extends React.Component {
  displayName = 'Footer'

  static contextTypes = {
    routeName: PropTypes.string.isRequired,
    currentLocale: PropTypes.locale,
    config: PropTypes.object.isRequired,
    availableLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
  }

  render() {
    const { routeName, currentLocale, config, availableLocales, availableCountryNames } = this.context;
    const availableLocalePages = buildAvailableLocalePages(currentLocale, routeName, availableLocales, availableCountryNames);
    const region = localeToRegion(currentLocale);

    return (
      <div className='page-footer u-color-invert u-padding-Tl'>
        <div className='grid site-container u-padding-Vl u-text-center page-footer__start' id='track-footer-links'>
          <div className='grid__cell u-size-1of2'>
            <ul className='u-text-heading u-text-semi u-text-xxs page-footer__link-list'>
              <IfLinkExists to='features' tagName='li'>
                <Link to='features' pointer='features.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='pro' tagName='li'>
                <Link to='pro' pointer='pro.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='partners' tagName='li'>
                <Link to='partners' pointer='partners.link_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='pricing' tagName='li'>
                <Link to='pricing' pointer='pricing.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='stories' tagName='li'>
                <Link to='stories' pointer='stories.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='contact_sales' tagName='li'>
                <Link to='contact_sales' pointer='contact_sales.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <li>
                <Href to='guides.path' pointer='guides.nav_title' className='page-footer__link u-link-invert' />
              </li>
              <Translation locales='en-GB'>
                <li>
                  <a href='https://support.gocardless.com' className='page-footer__link u-link-invert'>
                    <Message pointer='help.nav_title' />
                  </a>
                </li>
              </Translation>
              <IfLinkExists to='faq_merchants' tagName='li'>
                <Link to='faq_merchants' pointer='faq_merchants.link_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='faq_pro_dashboard' tagName='li'>
                <Link to='faq_pro_dashboard' pointer='faq_pro_dashboard.link_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <li>
                <a href='https://developer.gocardless.com/' id='track-footer-api-docs' className='page-footer__link u-link-invert'>
                  <Message pointer='api_docs.nav_title' />
                </a>
              </li>
              <IfLinkExists to='security' tagName='li'>
                <Link to='security' pointer='security.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='europe' tagName='li'>
                <Link to='europe' pointer='europe.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='customer_offers' tagName='li'>
                <Link to='customer_offers' pointer='customer_offers.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='legal' tagName='li'>
                { /** We special case legal's footer link text, since it appears in the legal page's nav with another name  */ }
                <Link to='legal' pointer='legal.footer_nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <li>
                <a href='https://blog.gocardless.com' className='page-footer__link u-link-invert'>
                  <Message pointer='blog.nav_title' />
                </a>
              </li>
              <IfLinkExists to='about' tagName='li'>
                <Link to='about' pointer='about.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='jobs' tagName='li'>
                <Link to='jobs' pointer='jobs.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
              <IfLinkExists to='press' tagName='li'>
                <Link to='press' pointer='press.nav_title' className='page-footer__link u-link-invert' />
              </IfLinkExists>
            </ul>
          </div>
          <div className='grid__cell u-size-1of2'>
            <div className='u-size-2of3 u-pull-end'>
              <p className='u-text-heading u-text-xxs u-color-invert u-margin-Bm' itemScope itemType='http://schema.org/Organization'>
                <SchemaItemProp itemProp='name' content='GoCardless Ltd.' />&nbsp;
                <SchemaItemProp itemProp='url' tagName='meta' content={config.siteRoot} />
                <SchemaItemProp itemProp='address' itemScope='itemScope' itemType='http://schema.org/PostalAddress'>
                  <SchemaItemProp itemProp='streetAddress' pointer='postal_address.street_address' />,&nbsp;
                  <SchemaItemProp itemProp='addressLocality' pointer='postal_address.address_locality' />,&nbsp;
                  <SchemaItemProp itemProp='postalCode' pointer='postal_address.postal_code' />,&nbsp;
                  <SchemaItemProp itemProp='addressCountry' pointer='postal_address.address_country_iso'>
                    <Message pointer='postal_address.address_country' />
                  </SchemaItemProp>.
                </SchemaItemProp><br />
                <SchemaItemProp itemProp='telephone' pointer='phone_full'>
                  <Message pointer='phone_local' />
                </SchemaItemProp>,&nbsp;
                <Href to='email' className='u-link-invert' itemProp='email' />
              </p>
              <p className='u-text-heading u-text-xxs u-color-invert u-margin-Bm'>
                <Message pointer='footer.description' />
              </p>
              <IfLinkExists to='legal_privacy'>
                <p className='u-text-heading u-text-xxs u-color-invert'>
                  <Message pointer='footer.cookies_message' />&nbsp;
                  <Link to='legal_privacy' className='u-link-clean u-link-invert u-text-heavy' pointer='footer.cookies_link_text' />.
                </p>
              </IfLinkExists>
            </div>
          </div>
        </div>
        <div
          className='page-footer__end u-text-center u-text-heading u-text-xxs u-color-invert u-padding-Vl u-margin-Tl'
          id='track-footer-end-links'>
          <div className='u-padding-Vl'>
            <span className='u-relative'>
              <Message pointer='footer.currently_viewing'
              className='u-text-light u-text-no-smoothing u-inline-block' />
              <Popover className='popover--country-select' toggle={
                  (<a className='u-text-semi u-link-invert'>
                    <Flag width="60" height="40" country={region} className='flag-icon u-margin-Hs' alt={ region } />
                    <span className='popover-link popover-link--invert'>
                      <Message pointer='country' />
                    </span>
                  </a>)
                }>
                <ul className='u-text-xxs u-text-start u-padding-Vxs'>
                  {
                    availableLocalePages.map(function(localePage) {
                      return (
                        <li className='u-text-semi' key={localePage.name}>
                          {
                            localePage.isActive && (
                              <span className='u-padding-Vxs u-padding-Hm u-block'>
                                <Flag country={localeToRegion(localePage.locale)}
                                className='flag-icon--popover u-margin-Rs u-align-baseline' alt={ localePage.name } />
                                <span className='country-select-label u-color-dark-gray'>{ localePage.name }</span>
                                <CheckmarkIcon className='u-fill-dark-green u-margin-Ls u-pull-end u-inline checkmark-icon' alt='✓' />
                              </span>
                            ) || (
                              <a className='u-padding-Vxs u-padding-Hm u-block' href={ localePage.path }>
                                <Flag country={localeToRegion(localePage.locale)}
                                className='flag-icon--popover u-margin-Rs u-align-baseline' alt={ localePage.name } />
                                <span className='country-select-label'>{ localePage.name }</span>
                              </a>
                            )
                          }
                        </li>
                      );
                    })
                  }
                </ul>
              </Popover>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
