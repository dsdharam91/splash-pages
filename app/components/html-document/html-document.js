import React from 'react';

import browseHappy from '../layout-static/browse-happy';
import createHTML5Tags from '../layout-static/create-html5-tags';
import GTM from '../layout-static/google-tag-manager';
import websiteSchema from '../layout-static/website-schema';

import getSiteTitle from '../get-site-title/get-site-title';
import { getMessage } from '../intl/intl';
import localeMessages from '../../../config/messages';
import { defaultLocale, localeToLanguage, localeToRegion } from '../../helpers/locale-helper/locale-helper';
import { homeRoute } from '../../router/routes';
import { getLocalesForRouteName } from '../../router/route-helpers';
import { buildSchemaDotOrgForOrganization } from '../../helpers/schema-dot-org/schema-dot-org';
import { PropTypes } from '../../helpers/prop-types/prop-types';

class HtmlDocument extends React.Component {
  displayName = 'HtmlDocument'

  static propTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    availableLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
    routeLocales: PropTypes.array.isRequired,
    router: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    dataRender: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    markup: PropTypes.string.isRequired,
    script: PropTypes.arrayOf(PropTypes.string),
    css: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    script: [],
    css: [],
  }

  static childContextTypes = {
    currentLocale: PropTypes.locale,
    messages: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
    availableLocales: PropTypes.array.isRequired,
    routeLocales: PropTypes.array.isRequired,
    availableCountryNames: PropTypes.object.isRequired,
    router: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
  };

  getChildContext() {
    const { currentLocale, messages, routeName, availableLocales,
            availableCountryNames, routeLocales, router, pathname, config } = this.props;

    return {
      currentLocale: currentLocale,
      messages: messages,
      routeName: routeName,
      availableLocales: availableLocales,
      availableCountryNames: availableCountryNames,
      routeLocales: routeLocales,
      router: router,
      pathname: pathname,
      config: config,
    };
  }

  render() {
    const { messages, routeName, currentLocale, config, pathname, availableLocales, markup, script, css } = this.props;
    const isHome = routeName === homeRoute;
    const schemaDotOrgOrganisation = buildSchemaDotOrgForOrganization(localeMessages, availableLocales, config);
    const routeLocales = getLocalesForRouteName(routeName, availableLocales);
    const pageHref = config.siteRoot + pathname;
    const title = getSiteTitle({ messages, routeName, config });
    const language = localeToLanguage(currentLocale);
    const region = localeToRegion(currentLocale);
    const description = getMessage(messages, `${routeName}.description`);

    function relAlternateLinks(root, locales) {
      var defaultPath = locales[defaultLocale];

      var alternates = Object.keys(locales).map(function(locale) {
        var localePath = locales[locale].path;
        return <link rel='alternate' hrefLang={locale} href={ root + localePath } key={locale} />;
      });

      if (defaultPath && defaultPath.path) {
        alternates.unshift(
          <link rel='alternate' href={root + defaultPath.path} hrefLang='x-default' key='x-default' />
        );
      }

      return alternates;
    }

    return (
      <html className='no-js' lang={language}>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width' />

          <title>{ title }</title>
          { description && <meta name='description' content={ description } />}
          <link href={ config.socialLinks.google } rel='publisher' />
          <meta name='og:image' content={ config.logoUrlSquare } />
          <meta name='og:image:secure_url' content={ config.logoUrlSquare } />
          <meta name='google-site-verification' content={ config.googleSiteVerification } />
          <link rel='canonical' href={ pageHref } />

          { routeLocales &&
              relAlternateLinks(config.siteRoot, routeLocales) }

          { css.map((href, k) => <link key={k} rel='stylesheet' href={href} />) }

          <script dangerouslySetInnerHTML={{ __html: createHTML5Tags }} />

          <link rel='apple-touch-icon-precomposed' sizes='57x57' href='/images/favicons/apple-touch-icon-57x57.png' />
          <link rel='apple-touch-icon-precomposed' sizes='114x114' href='/images/favicons/apple-touch-icon-114x114.png' />
          <link rel='apple-touch-icon-precomposed' sizes='72x72' href='/images/favicons/apple-touch-icon-72x72.png' />
          <link rel='apple-touch-icon-precomposed' sizes='144x144' href='/images/favicons/apple-touch-icon-144x144.png' />
          <link rel='apple-touch-icon-precomposed' sizes='60x60' href='/images/favicons/apple-touch-icon-60x60.png' />
          <link rel='apple-touch-icon-precomposed' sizes='120x120' href='/images/favicons/apple-touch-icon-120x120.png' />
          <link rel='apple-touch-icon-precomposed' sizes='76x76' href='/images/favicons/apple-touch-icon-76x76.png' />
          <link rel='apple-touch-icon-precomposed' sizes='152x152' href='/images/favicons/apple-touch-icon-152x152.png' />
          <link rel='icon' type='image/png' href='/images/favicons/favicon-196x196.png' sizes='196x196' />
          <link rel='icon' type='image/png' href='/images/favicons/favicon-96x96.png' sizes='96x96' />
          <link rel='icon' type='image/png' href='/images/favicons/favicon-32x32.png' sizes='32x32' />
          <link rel='icon' type='image/png' href='/images/favicons/favicon-16x16.png' sizes='16x16' />
          <link rel='icon' type='image/png' href='/images/favicons/favicon-128.png' sizes='128x128' />
          <meta name='application-name' content='GoCardless'/>
          <meta name='msapplication-TileColor' content='#FFFFFF' />
          <meta name='msapplication-TileImage' content='/images/favicons/mstile-144x144.png' />
          <meta name='msapplication-square70x70logo' content='/images/favicons/mstile-70x70.png' />
          <meta name='msapplication-square150x150logo' content='/images/favicons/mstile-150x150.png' />
          <meta name='msapplication-wide310x150logo' content='/images/favicons/mstile-310x150.png' />
          <meta name='msapplication-square310x310logo' content='/images/favicons/mstile-310x310.png' />
        </head>

        <body>

          { config.googleTagManagerId &&
              <div dangerouslySetInnerHTML={{
                __html: GTM.replace('{TAG_ID}', config.googleTagManagerId)
                .replace('{PAGE_LANGUAGE}', language)
                .replace('{PAGE_REGION}', region),
              }} />
          }

          <div dangerouslySetInnerHTML={{ __html: browseHappy }} />

          <div id='root' dangerouslySetInnerHTML={{ __html: markup }} />

          <script dangerouslySetInnerHTML={{ __html: 'window.app=' + JSON.stringify(this.props.dataRender) + ';' }} />

          { script.map((src, k) => <script key={k} src={src} />) }

          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: websiteSchema.replace('{PAGE}', pathname) }} />
          }

          { isHome &&
              <script type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaDotOrgOrganisation) }} />
          }
        </body>
      </html>
    );
  }
}

export default HtmlDocument;
