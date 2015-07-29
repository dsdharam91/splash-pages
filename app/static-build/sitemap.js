import url from 'url';
import request from 'superagent';
const cheerio = require('cheerio');
const crypto = require('crypto');

/**
 * Downloads an old version of the sitemap using Superagent.
 * e.g. downloadOldSitemap('https://gocardless.com', 'https://gocardless.com/sitemap.xml').then((oldSitemap) => { console.log(oldSitemap) })
 *
 * @param {string} host - Domain name to which the sitemap refers
 * @param {string} sitemapUrl - URL at which the sitemap can be found
 */
export function downloadOldSitemap(host, sitemapUrl) {
  return new Promise(function(resolve) {
    request.get(sitemapUrl).buffer().end(function(err, res) {
      if (err) {
        console.log(`Error downloading old sitemap from ${sitemapUrl}: ${err}. Continuing anyway (all pages may have lastMod of today).`);
        return resolve(new Sitemap(host));
      }
      if (res.ok) {
        console.log(`Downloaded old sitemap from ${sitemapUrl}.`);
        resolve(new Sitemap(host).fromXml(res.text));
      } else {
        console.log(`Error downloading old sitemap from ${sitemapUrl}: !res.ok. Continuing anyway (all pages may have lastMod of today).`);
        resolve(new Sitemap(host));
      }
    });
  });
}

/**
 * Returns a md5 hash representation of the content.
 * Will remove script tags and other HTML before generating the hash.
 *
 * @param {string} content - HTML content of the page.
 * @returns {string} md5 hash representation of the content of the page
 */
function getHashOfContent(content) {
  const $ = cheerio.load(content);
  $('script').remove();
  $('style').remove();
  const bodyText = $('body').text();
  const cryptoHash = crypto.createHash('md5').update(bodyText).digest('hex');
  return cryptoHash;
}

/**
 * Creates a new Sitemap object.
 * e.g. const sitemap = new Sitemap('http://example.com')
 *
 * @class
 * @param {string} domain - Domain to which the sitemap refers e.g. https://example.com
 */
export class Sitemap {
  constructor(domain) {
    this.urlSet = {};
    this.domain = domain;
  }

  /**
   * Loads in an existing XML Sitemap and returns a Sitemap object.
   * e.g. let currentSitemap = new Sitemap('http://example.com').fromXml(xmlFileContents)
   *
   * @param {string} xml - Sitemap in XML format
   * @returns {Sitemap} A Sitemap object representing the sitemap.
   */
  fromXml(xml) {
    const $ = cheerio.load(xml);
    const sitemapUrls = $('url');
    sitemapUrls.each((i, element) => {
      let currentUrlElement = $(element);
      let location = currentUrlElement.find('loc').text();
      if (location) {
        let pathName = url.parse(location).pathname;
        let hash = currentUrlElement.find('content\\:hash').text();
        let lastMod = Date.parse(currentUrlElement.find('lastmod').text());
        this.urlSet[pathName] = {
          hash: hash,
          lastMod: lastMod,
        };
      }
    });
    return this;
  }

  /**
   * Returns an XML representation of the current Sitemap object.
   *
   * @returns {string} A XML format representation of the Sitemap object.
   */
  toXml() {
    /*eslint-disable max-len*/
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
              '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
              '  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"\n' +
              '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
              '  xmlns:xhtml="http://www.w3.org/1999/xhtml"\n' +
              '  xmlns:content="https://github.com/gocardless/splash-pages#xml-sitemap-hash">\n';
    /*eslint-enable max-len*/
    for (let pageUrl in this.urlSet) {
      let lastMod = new Date(this.urlSet[pageUrl].lastMod);
      // Date should be in W3C Datetime (YYYY-MM-DD) format
      let lastModW3 = lastMod.toISOString().substring(0,10);
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
   * e.g. const aboutPage = sitemap.getUrl('http://www.example.com/about/')
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
   * @param {Sitemap} oldSitemap - A Sitemap object for the old sitemap
   * @returns {Sitemap} A Sitemap object with imported timestamps from the old sitemap.
   */
  importTimestampsFromOldSitemap(oldSitemap) {
    Object.keys(this.urlSet)
      .filter((pathName) => oldSitemap.urlSet[pathName])
      .filter((pathName) => oldSitemap.urlSet[pathName].hash === this.urlSet[pathName].hash)
      .forEach((pathName) => {
        const oldUrl = oldSitemap.urlSet[pathName];
        const newUrl = this.urlSet[pathName];
        newUrl.lastMod = Math.min(newUrl.lastMod, oldUrl.lastMod);
      });
    return this;
  }
}
