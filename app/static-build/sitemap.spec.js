import { SitemapUrlSet } from './sitemap';

const sitemapXmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n' +
  '  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"\n' +
  '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
  '  xmlns:xhtml="http://www.w3.org/1999/xhtml"\n' +
  '  xmlns:content="https://github.com/gocardless/splash-pages#xml-sitemap-hash">\n';
const sitemapXmlFooter = '</urlset>';

// Example Sitemaps
const exampleSitemapWithNoPagesXml = sitemapXmlHeader + sitemapXmlFooter;
const exampleSitemapWithNoPagesJs = {};
const exampleSitemapWithOnePageXml = sitemapXmlHeader +
                                     '  <url>\n' +
                                     '    <loc>http://example.com/about/</loc>\n' +
                                     '    <content:hash>069bfb8015349d73655fa878018498de</content:hash>\n' +
                                     '    <lastmod>2015-01-01</lastmod>\n' +
                                     '  </url>\n' +
                                     sitemapXmlFooter;
const exampleSitemapWithOnePageJs = {
  '/about/': {
    hash: '069bfb8015349d73655fa878018498de',
    lastMod: new Date(2015, 0, 1).getTime(),
  },
};
const exampleSitemapWithTwoPagesXml = sitemapXmlHeader +
                                      '  <url>\n' +
                                      '    <loc>http://example.com/about/</loc>\n' +
                                      '    <content:hash>069bfb8015349d73655fa878018498de</content:hash>\n' +
                                      '    <lastmod>2015-01-01</lastmod>\n' +
                                      '  </url>\n' +
                                      '  <url>\n' +
                                      '    <loc>http://example.com/pricing/</loc>\n' +
                                      '    <content:hash>f303f4bfc20f771c2180cfa44327f13f</content:hash>\n' +
                                      '    <lastmod>2015-02-01</lastmod>\n' +
                                      '  </url>\n' +
                                      sitemapXmlFooter;
const exampleSitemapWithTwoPagesJs = {
  '/about/': {
    hash: '069bfb8015349d73655fa878018498de',
    lastMod: new Date(2015, 0, 1).getTime(),
  },
  '/pricing/': {
    hash: 'f303f4bfc20f771c2180cfa44327f13f',
    lastMod: new Date(2015, 1, 1).getTime(),
  },
};
const updatedSitemapAfterChangeJs = {
  '/about/': {
    // About page gets updated with new content so also gets an updated timestamp
    hash: 'ae10751344a1af9b28835466fe43c55b',
    lastMod: new Date(2015, 2, 1).getTime(),
  },
  '/pricing/': {
    // Pricing change remains unchanged so keeps the same timestamp
    hash: 'f303f4bfc20f771c2180cfa44327f13f',
    lastMod: new Date(2015, 1, 1).getTime(),
  },
};

describe('SitemapUrlSet component', () => {
  describe('constructor', () => {
    it('returns a SitemapUrlSet with no entries', () => {
      var blankSitemap = new SitemapUrlSet('http://example.com');
      expect(blankSitemap.urlSet).toEqual(exampleSitemapWithNoPagesJs);
    });
  });

  describe('fromXml', () => {
    it('returns a SitemapUrlSet with the right entries', () => {
      var sitemapWithNoPages = new SitemapUrlSet('http://example.com').fromXml(exampleSitemapWithNoPagesXml);
      expect(sitemapWithNoPages.urlSet).toEqual(exampleSitemapWithNoPagesJs);
      var sitemapWithOnePage = new SitemapUrlSet('http://example.com').fromXml(exampleSitemapWithOnePageXml);
      expect(sitemapWithOnePage.urlSet).toEqual(exampleSitemapWithOnePageJs);
      var sitemapWithTwoPages = new SitemapUrlSet('http://example.com').fromXml(exampleSitemapWithTwoPagesXml);
      expect(sitemapWithTwoPages.urlSet).toEqual(exampleSitemapWithTwoPagesJs);
    });
  });

  describe('toXml', () => {
    it('returns the appropiate XML for the SitemapUrlSet', () => {
      var sitemapWithNoPages = new SitemapUrlSet('http://example.com');
      sitemapWithNoPages.urlSet = exampleSitemapWithNoPagesJs;
      expect(sitemapWithNoPages.toXml()).toEqual(exampleSitemapWithNoPagesXml);
      var sitemapWithOnePage = new SitemapUrlSet('http://example.com');
      sitemapWithOnePage.urlSet = exampleSitemapWithOnePageJs;
      expect(sitemapWithOnePage.toXml()).toEqual(exampleSitemapWithOnePageXml);
      var sitemapWithTwoPages = new SitemapUrlSet('http://example.com');
      sitemapWithTwoPages.urlSet = exampleSitemapWithTwoPagesJs;
      expect(sitemapWithTwoPages.toXml()).toEqual(exampleSitemapWithTwoPagesXml);
    });
  });

  describe('addUrl', () => {
    it('adds the URL correctly to the sitemap', () => {
      jasmine.clock().mockDate(new Date(2015, 0, 1));
      var sitemap = new SitemapUrlSet('http://example.com');
      sitemap.addUrl('http://example.com/about/', '<html><body>About Page Contents</body></html>');
      expect(sitemap.urlSet).toEqual(exampleSitemapWithOnePageJs);
      jasmine.clock().mockDate(new Date(2015, 1, 1));
      sitemap.addUrl('http://example.com/pricing/', '<html><body>Pricing Page Contents</body></html>');
      expect(sitemap.urlSet).toEqual(exampleSitemapWithTwoPagesJs);
    });
  });

  describe('getUrl', () => {
    it('returns the URL correctly from SitemapUrlSet', () => {
      var sitemap = new SitemapUrlSet('http://example.com');
      sitemap.urlSet = exampleSitemapWithOnePageJs;
      expect(sitemap.getUrl('http://example.com/about/')).toEqual(exampleSitemapWithOnePageJs['/about/']);
    });
  });

  describe('removeUrl', () => {
    it('removes the URL correctly from the sitemap', () => {
      var sitemap = new SitemapUrlSet('http://example.com');
      sitemap.urlSet = exampleSitemapWithTwoPagesJs;
      sitemap.removeUrl('http://example.com/pricing/');
      expect(sitemap.urlSet).toEqual(exampleSitemapWithOnePageJs);
      sitemap.removeUrl('http://example.com/about/');
      expect(sitemap.urlSet).toEqual(exampleSitemapWithNoPagesJs);
    });
  });

  describe('importTimestampsFromOldSitemap', () => {
    it('updates the last modified time only for documents which have actually changed', () => {
      jasmine.clock().mockDate(new Date(2015, 2, 1));
      var oldSitemap = new SitemapUrlSet('http://example.com').fromXml(exampleSitemapWithTwoPagesXml);
      var newSitemap = new SitemapUrlSet('http://example.com');
      newSitemap.addUrl('http://example.com/about/', '<html><body>Updated Version of About Page Contents</body></html>');
      newSitemap.addUrl('http://example.com/pricing/', '<html><body>Pricing Page Contents</body></html>');
      newSitemap.importTimestampsFromOldSitemap(oldSitemap);
      expect(newSitemap.urlSet).toEqual(updatedSitemapAfterChangeJs);
    });
  });
});
