import url from 'url';
const cheerio = require('cheerio');
const crypto = require('crypto');

/**
 * Returns a md5 hash representation of the content.
 * Will remove script tags and other HTML before generating the hash.
 *
 * @param {string} content - HTML content of the page.
 * @returns {string} md5 hash representation of the content of the page
 */
function getHashOfContent(content) {
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  var $ = cheerio.load(content);
  var bodyText = $('body').text();
  var cryptoHash = crypto.createHash('md5').update(bodyText).digest('hex');
  return cryptoHash;
}

/**
 * Creates a new SitemapUrlSet object.
 * e.g. var sitemap = new SitemapUrlSet('http://example.com')
 *
 * @class
 * @param {string} domain - Domain to which the sitemap refers e.g. https://example.com
 */
export class SitemapUrlSet {
  constructor(domain) {
    this.urlSet = {};
    this.domain = domain;
  }

  /**
   * Loads in an existing XML Sitemap and returns a SitemapUrlSet object.
   * e.g. var currentSitemap = new SitemapUrlSet('http://example.com').fromXml(xmlFileContents)
   *
   * @param {string} xml - Sitemap in XML format
   * @returns {SitemapUrlSet} A SitemapUrlSet object representing the sitemap.
   */
  fromXml(xml) {
    var thisSitemap = this;
    var $ = cheerio.load(xml);
    var sitemapUrls = $('url');
    sitemapUrls.each(function() {
      var location = $(this).find('loc').text();
      if (location) {
        var pathName = url.parse(location).pathname;
        var hash = $(this).find('content\\:hash').text();
        var lastMod = Date.parse($(this).find('lastmod').text());
        thisSitemap.urlSet[pathName] = {
          hash: hash,
          lastMod: lastMod,
        };
      }
    });
    return thisSitemap;
  }

  /**
   * Returns an XML representation of the current SitemapUrlSet object.
   *
   * @returns {string} A XML format representation of the SitemapUrlSet object.
   */
  toXml() {
    /*eslint-disable max-len*/
    var xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
              '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
              '  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"\n' +
              '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
              '  xmlns:xhtml="http://www.w3.org/1999/xhtml"\n' +
              '  xmlns:content="https://github.com/gocardless/splash-pages#xml-sitemap-hash">\n';
    /*eslint-enable max-len*/
    for (let pageUrl in this.urlSet) {
      var lastMod = new Date(this.urlSet[pageUrl].lastMod);
      // Date should be in W3C Datetime (YYYY-MM-DD) format
      var lastModW3 = lastMod.toISOString().substring(0,10);
      xml += `  <url>\n` +
             `    <loc>${this.domain}${pageUrl}</loc>\n` +
             `    <content:hash>${this.urlSet[pageUrl].hash}</content:hash>\n` +
             `    <lastmod>${lastModW3}</lastmod>\n` +
             `  </url>\n`;
    }
    xml += '</urlset>';
    return xml;
  }

  /**
   * Add a URL to the sitemap.
   * e.g. sitemap.addUrl('http://www.example.com/about/', 'About Page Contents')
   *
   * @param {string} pageUrl - URL of the page to add to the sitemap
   * @param {string} content - HTML contents of the page
   */
  addUrl(pageUrl, content) {
    const pathName = url.parse(pageUrl).pathname;
    const pageHash = getHashOfContent(content);
    this.urlSet[pathName] = {
      hash: pageHash,
      lastMod: Date.now(),
    };
  }

  /**
   * Extracts a URL from the sitemap.
   * e.g. var aboutPage = sitemap.getUrl('http://www.example.com/about/')
   *
   * @param {string} pageUrl - URL of the page to add to the sitemap
   * @return {{Object|boolean}} Returns URL info if exists in the sitemap; otherwise returns false
   */
  getUrl(pageUrl) {
    const pathName = url.parse(pageUrl).pathname;
    if (pathName in this.urlSet) {
      return this.urlSet[pathName];
    }
    return false;
  }

  /**
   * Removes a URL from the sitemap.
   * e.g. sitemap.removeUrl('http://www.example.com/about/')
   *
   * @param {string} pageUrl - URL of the page to remove from the sitemap
   * @return {boolean} Returns true if page was removed from sitemap; otherwise returns false
   */
  removeUrl(pageUrl) {
    const pathName = url.parse(pageUrl).pathname;
    if (pathName in this.urlSet) {
      delete this.urlSet[pathName];
      return true;
    }
    return false;
  }

  /**
   * Imports the timestamps from an old sitemap when the content is unchanged.
   * e.g. newSitemap.importTimestampsFromOldSitemap(oldSitemap)
   *
   * @param {SitemapUrlSet} oldSitemap - A SitemapUrlSet object for the old sitemap
   * @returns {SitemapUrlSet} A SitemapUrlSet object with imported timestamps from the old sitemap.
   */
  importTimestampsFromOldSitemap(oldSitemap) {
    for (url in this.urlSet) {
      if (url in oldSitemap.urlSet) {
        var oldUrl = oldSitemap.urlSet[url];
        var newUrl = this.urlSet[url];
        if (oldUrl.hash === newUrl.hash) {
          newUrl.lastMod = Math.min(newUrl.lastMod, oldUrl.lastMod);
        }
      }
    }
    return this;
  }
}
