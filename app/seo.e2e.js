require('babel/register');
const cheerio = require('cheerio');
var request = require('superagent');
var BASE_URL = require('./helpers/e2e/config').BASE_URL;

var get = function(url, callback) {
  request.get(BASE_URL + url)
         .accept('text/html')
         .end(callback);
};

var availableLocales = require('../config/available-locales');
var getAllPaths = require('./router/route-helpers').getAllPaths;

describe('SEO Tests', function() {
  getAllPaths(availableLocales).forEach(function(path) {
    it('has a title tag of 55 characters or less on ' + path, function(done) {
      get(path, function(err, res) {
        const $ = cheerio.load(res.text);
        const titleTags = $('head').find('title');
        expect(titleTags.length).toEqual(1);
        const titleTagText = titleTags.first().text();
        expect(titleTagText.length).toBeLessThan(56);
        done();
      });
    });

    /*it('has a meta description that is either blank or more than 100 characters on ' + path, function(done) {
      get(path, function(err, res) {
        const $ = cheerio.load(res.text);
        const metaDescriptionTags = $('head').find('meta[name=description]');
        expect(metaDescriptionTags.length).toBeLessThan(2);
        if (metaDescriptionTags.length === 1) {
          const metaDescriptionTagText = metaDescriptionTags.first().text();
          console.log(metaDescriptionTagText);
          expect(metaDescriptionTagText.length).toBeMoreThan(100);
        }
        done();
      });
    });*/
  });
});
