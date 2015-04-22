import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import locale from 'locale';

import HtmlDocument from '../components/html-document/html-document';
import {getRoutes} from './routes';
import localeMessages from '../config/messages';
import config from '../config';
import formats from '../config/formats';
import {availableLocales, defaultLocale} from '../config/locale';
import {getIntlMessage} from '../components/intl/intl';

process.env.LANG = defaultLocale;

var scriptTags = ['vendor/systemjs/build/system.min.js', 'vendor/es6-module-loader/es6-module-loader.js'];
var cssLinks = ['css/main.css'];

function pathLocale(path) {
  var localePath = (path || '').toLowerCase().match(/^\/([a-z]{2,2}\-[a-z]{2,2})\//);
  var foundLocale = locale.Locale['default'];
  if (localePath && localePath[1]) {
    foundLocale = new locale.Locale(localePath[1]);
  }
  return foundLocale;
}

var scriptTags = ['/vendor/system.js', 'js/loader.js'];
var cssLinks = ['/css/main.css'];

function normalizeLocale(locale) {
  locale = _.cloneDeep(locale);
  locale.normalized = locale.normalized.replace('_', '-');
  return locale;
}

function render(req, res, next) {
  var reqPath = req.path.toLowerCase().replace(/^\/|\/$/g, '');
  reqPath = '/' + reqPath;
  var reqUrl = req.url.toLowerCase();

  var reqLocale = pathLocale(reqPath);
  reqLocale = normalizeLocale(reqLocale);
  var routes = getRoutes(reqLocale.normalized);
  var messages = _.cloneDeep(localeMessages[reqLocale.normalized]);

  function appProps(props) {
    return _.extend({
      locales: reqLocale.normalized,
      language: reqLocale.language,
      messages: messages,
      formats: formats,
      config: config,
      path: reqPath,
    }, props);
  }

  Router.run(routes, reqUrl, function(Handler, state) {
    var stateName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');;
    var stateProps = {
      stateName: stateName,
    }

    const markup = React.renderToString(<Handler {...appProps(stateProps)} />);

    // The application component is rendered to static markup
    // and sent as response.
    const html = React.renderToStaticMarkup(
      <HtmlDocument
        markup={markup}
        script={scriptTags}
        css={cssLinks}
        {...appProps(stateProps)}
      />
    );
    const doctype = '<!DOCTYPE html>';
    res.send(doctype + html);
  });
}

export default render;
