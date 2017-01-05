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
import LinkedinIcon from '../../icons/svg/linkedin';
import TwitterIcon from '../../icons/svg/twitter';
import FacebookIcon from '../../icons/svg/facebook';
import YoutubeIcon from '../../icons/svg/youtube';

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

class FooterEn extends React.Component {
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
    const hiddenLocales = ['en-AU', 'en-CA', 'en-US', 'pt-BR', 'en-NZ'];

    return (
      <div className='page-footer'>
        <div className='u-background-light-gray'>
          <div className='site-container u-padding-Vl u-text-center page-footer__start'>
            <div className='grid__cell u-size-4of4'>
              Connect with us
              <ul className='u-inline-block u-margin-Lxl'>
                <li className='u-inline-block u-margin-Rm'>
                  <Href to='social_links.linkedin'>
                    <LinkedinIcon alt='LinkedIn'
                    className='page-footer__social-icon' />
                  </Href>
                </li>
                <li className='u-inline-block u-margin-Rm'>
                  <Href to='social_links.twitter'>
                    <TwitterIcon alt='Twitter'
                    className='page-footer__social-icon' />
                  </Href>
                </li>
                <li className='u-inline-block u-margin-Rm'>
                  <Href to='social_links.facebook'>
                    <FacebookIcon alt='Facebook'
                    className='page-footer__social-icon' />
                  </Href>
                </li>
                <li className='u-inline-block'>
                  <Href to='social_links.youtube'>
                    <YoutubeIcon alt='YouTube'
                    className='page-footer__social-icon' />
                  </Href>
                </li>
              </ul>
              <hr className='u-margin-Vm' />
            </div>
            <div className='grid__cell u-size-1of4'>
              <ul className='u-text-heading u-text-semi u-text-xxs'>
                <li className='u-margin-Bxxs'>
                  <p className='u-color-dark-gray'>
                    Solutions
                  </p>
                </li>
                <IfLinkExists to='features' tagName='li'>
                  <Link to='features' pointer='features.nav_title' className='page-footer__link'/>
                </IfLinkExists>
                <IfLinkExists to='pro' tagName='li'>
                  <Link to='pro' pointer='pro.nav_title' className='page-footer__link'/>
                </IfLinkExists>
                <IfLinkExists to='small_medium_businesses' tagName='li'>
                  <Link to='small_medium_businesses' pointer='small_medium_businesses.nav_title' className='page-footer__link'/>
                </IfLinkExists>
                <IfLinkExists to='new_to_direct_debit' tagName='li'>
                  <Link to='new_to_direct_debit' pointer='new_to_direct_debit.nav_title' className='page-footer__link'/>
                </IfLinkExists>
                <IfLinkExists to='existing_direct_debit_user' tagName='li'>
                  <Link to='existing_direct_debit_user' pointer='existing_direct_debit_user.nav_title' className='page-footer__link'/>
                </IfLinkExists>
                <IfLinkExists to='partners' tagName='li'>
                  <Link to='partners' pointer='partners.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='direct_debit_api' tagName='li'>
                  <Link to='direct_debit_api' pointer='direct_debit_api.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='pricing' tagName='li'>
                  <Link to='pricing' pointer='pricing.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='stories' tagName='li'>
                  <Link to='stories' pointer='stories.nav_title' className='page-footer__link' />
                </IfLinkExists>
              </ul>
            </div>
            <div className='grid__cell u-size-1of4'>
              <ul className='u-text-heading u-text-semi u-text-xxs'>
                <li className='u-margin-Bxxs'>
                  <p className='u-color-dark-gray'>
                    Help &amp; Resources
                  </p>
                </li>
                <Translation locales='en-GB'>
                  <li>
                    <a href='https://support.gocardless.com' className='page-footer__link'>
                      <Message pointer='help.nav_title' />
                    </a>
                  </li>
                </Translation>
                <li>
                  <Href to='guides.path' pointer='guides.nav_title' className='page-footer__link' />
                </li>
                <IfLinkExists to='security' tagName='li'>
                  <Link to='security' pointer='security.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='faq_pro_dashboard' tagName='li'>
                  <Link to='faq_pro_dashboard' pointer='faq_pro_dashboard.link_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='faq_merchants' tagName='li'>
                  <Link to='faq_merchants' pointer='faq_merchants.link_title' className='page-footer__link' />
                </IfLinkExists>
                <li>
                  <Href to='api_docs.path' pointer='api_docs.nav_title' className='page-footer__link' />
                </li>
                <IfLinkExists to='customer_offers' tagName='li'>
                  <Link to='customer_offers' pointer='customer_offers.nav_title' className='page-footer__link' />
                </IfLinkExists>
              </ul>
            </div>
            <div className='grid__cell u-size-1of4'>
              <ul className='u-text-heading u-text-semi u-text-xxs'>
                <li className='u-margin-Bxxs'>
                  <p className='u-color-dark-gray'>
                    About GoCardless
                  </p>
                </li>
                <IfLinkExists to='about' tagName='li'>
                  <Link to='about' pointer='about.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='jobs' tagName='li'>
                  <Link to='jobs' pointer='jobs.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <li>
                  <a href='https://blog.gocardless.com' className='page-footer__link'>
                    <Message pointer='blog.nav_title' />
                  </a>
                </li>
                <IfLinkExists to='press' tagName='li'>
                  <Link to='press' pointer='press.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='legal' tagName='li'>
                  { /** We special case legal's footer link text, since it appears in the legal page's nav with another name  */ }
                  <Link to='legal' pointer='legal.footer_nav_title' className='page-footer__link' />
                </IfLinkExists>
                <IfLinkExists to='partner_with_us' tagName='li'>
                  <Link to='partner_with_us' pointer='partner_with_us.link_title' className='page-footer__link' />
                </IfLinkExists>
              </ul>
            </div>
            <div className='grid__cell u-size-1of4'>
              <ul className='u-text-heading u-text-semi u-text-xxs'>
                <li className='u-margin-Bxxs'>
                  <p className='u-color-dark-gray'>
                    Contact Us
                  </p>
                </li>
                <li>
                  <p className='page-footer__list-subtitle u-color-dark-gray'>
                    Sales
                  </p>
                </li>
                <IfLinkExists to='contact_sales' tagName='li'>
                  <Link to='contact_sales' pointer='contact_sales.nav_title' className='page-footer__link' />
                </IfLinkExists>
                <li>
                  <p className='u-text-normal'>
                    <Message pointer='phone_full' />
                  </p>
                </li>
                <li className='u-margin-Txl'>
                  <p className='page-footer__list-subtitle u-color-dark-gray'>
                    Support
                  </p>
                </li>
                <li>
                  <p className='page-footer__link'>
                    <a href='https://support.gocardless.com' className='page-footer__link'>
                      Request support
                    </a>
                  </p>
                </li>
                <li>
                  <p className='u-text-normal'>
                    <Message pointer='phone_full' />
                  </p>
                </li>
              </ul>
              <p className='u-color-dark-gray u-margin-Tm u-margin-Bxl'>
                Seen 'GoCardless LTD' on your bank statement?&nbsp;
                <a href='https://support.gocardless.com/hc/en-us/articles/211440409-I-ve-seen-GoCardless-on-my-bank-statement-Who-are-you-' className='u-text-semi'>
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className='u-background-white u-padding-Bl'>
          <div className='site-container u-padding-Bl u-padding-Txl u-text-center page-footer__middle'>
            <div className='grid__cell u-size-3of4'>
              <div className='u-size-8of9'>
                <p className='u-text-heading u-text-xs u-margin-Bm' itemScope itemType='http://schema.org/Organization'>
                  <SchemaItemProp itemProp='name' content='GoCardless Ltd.' />&nbsp;
                  <SchemaItemProp itemProp='url' tagName='meta' content={config.siteRoot} />
                  <SchemaItemProp itemProp='address' itemScope='itemScope' itemType='http://schema.org/PostalAddress'>
                    <SchemaItemProp itemProp='streetAddress' pointer='postal_address.street_address' />,&nbsp;
                    <SchemaItemProp itemProp='addressLocality' pointer='postal_address.address_locality' />,&nbsp;
                    <SchemaItemProp itemProp='postalCode' pointer='postal_address.postal_code' />,&nbsp;
                    <SchemaItemProp itemProp='addressCountry' pointer='postal_address.address_country_iso'>
                      <Message pointer='postal_address.address_country' />
                    </SchemaItemProp>
                  </SchemaItemProp>
                </p>
                <p className='u-text-heading u-margin-Bm page-footer__legal'>
                  <Message pointer='footer.description' />
                </p>
                <IfLinkExists to='legal_privacy'>
                  <p className='u-text-heading page-footer__legal'>
                    <Message pointer='footer.cookies_message' />&nbsp;
                    <Link to='legal_privacy' className='u-link-clean u-text-heavy' pointer='footer.cookies_link_text' />
                  </p>
                </IfLinkExists>
              </div>
            </div>
            <div className='grid__cell u-size-1of4'>
              <img src='/images/footer/deloitte-technology-2016-winner.png'
                   className='page-footer__logo' />
            </div>
          </div>
        </div>
        <div className='page-footer__end u-text-center u-text-heading u-text-xxs'>
          <div className='u-padding-Vm'>
            <span className='u-relative'>
              <Message pointer='footer.currently_viewing'
              className='u-text-light u-text-no-smoothing u-inline-block u-color-invert' />
              <Popover className='popover--country-select' toggle={
                  (<a className='u-text-semi'>
                    <Flag width="60" height="40" country={region} className='flag-icon u-margin-Hs' alt={ region } />
                    <span className='popover-link popover-link--invert'>
                      <Message pointer='country' />
                    </span>
                  </a>)
                }>
                <ul className='u-text-xxs u-text-start u-padding-Vxs'>
                  {
                    availableLocalePages.map(function(localePage) {
                      if (hiddenLocales.indexOf(localePage.locale) < 0) {
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
                      }
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

export default FooterEn;
