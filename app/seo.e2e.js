/*eslint-disable */

const countBy = require('lodash/collection/countBy');
const filter = require('lodash/collection/filter');
const forEach = require('lodash/collection/forEach');
const pluck = require('lodash/collection/pluck');
const pick = require('lodash/object/pick');
const cheerio = require('cheerio');
const request = require('superagent');

var availableLocales = require('../config/available-locales');
var getAllPaths = require('./router/route-helpers').getAllPaths;

// Import this from app/static-build/builder
function fetchPage(host, pagePath) {
  return new Promise(function(resolve, reject) {
    const pageUrl = host + pagePath;

    request.get(pageUrl).accept('text/html').end(function(err, res) {
      if (err) {
        return reject(err);
      }

      if (res.ok) {
        resolve([pageUrl, res.text]);
      } else {
        reject([pageUrl, res.text]);
      }
    });
  });
}

var seoMatchers = {
  toNotHaveDuplicateValues: function() {
    return {
      compare: function(allPages, paramName) {
        var result = { pass: true, message: '' };
        var frequencyList = countBy(allPages, paramName);
        var duplicatedValues = pick(frequencyList, function(freq) { return freq > 1; });
        forEach(duplicatedValues, function(freq, value) {
          var pagesWithThisValue = filter(allPages, paramName, value);
          var pagePathsWithThisValue = pluck(pagesWithThisValue, 'pagePath');
          result.message += value + ' (' + freq + ' times)\n' + pagePathsWithThisValue.join('\n') + '\n\n';
          result.pass = false;
        });
        return result;
      },
    };
  },
  toHaveNumberOfTags: function() {
    return {
      compare: function(allPages, paramName, minValue, maxValue) {
        var result = { pass: true, message: '' };
        var pagesWithError = pick(allPages, function(pageInfo) {
          return pageInfo[paramName] < minValue || pageInfo[paramName] > maxValue;
        });
        forEach(pagesWithError, function(pageInfo) {
          result.message += pageInfo.pagePath + ' (' + pageInfo[paramName] + ' tags)\n';
          result.pass = false;
        });
        return result;
      },
    };
  },
  toHaveTagValuesOfLength: function() {
    return {
      compare: function(allPages, paramName, minLength, maxLength, isOptional) {
        var result = { pass: true, message: '' };
        var pagesWithError = pick(allPages, function(pageInfo) {
          return (!isOptional && pageInfo[paramName].length) &&
            (pageInfo[paramName].length < minLength || pageInfo[paramName].length > maxLength);
        });
        forEach(pagesWithError, function(pageInfo) {
          result.message += pageInfo.pagePath + ' (' + pageInfo[paramName].length + ' characters)\n';
          result.pass = false;
        });
        return result;
      },
    };
  },
};

const serverUrl = '';
/*const getAllPaths = [
  'https://dl.dropboxusercontent.com/u/6414301/Test/normal_file.html',
  //'https://dl.dropboxusercontent.com/u/6414301/test/duplicate_file.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/empty_desc.html',
  /*'https://dl.dropboxusercontent.com/u/6414301/test/long_title2.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/long_desc.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/long_desc_2.html'
  ];*/
const allPages = {};

const processPage = function(pagePath) {
  return fetchPage(serverUrl, pagePath)
    .then(function(pageInfo) {
      const pageUrl = pageInfo[0];
      const contents = pageInfo[1];

      const $ = cheerio.load(contents);
      const titleTags = $('head').find('title');
      const metaDescriptionTags = $('head').find('meta[name=description]');
      const h1Tags = $('body').find('h1');
      allPages[pagePath] = {
        pagePath: pageUrl,
        titleTagsNumberOf: titleTags.length,
        titleTagText: titleTags.first().text() || '',
        metaDescriptionTagsNumberOf: metaDescriptionTags.length,
        metaDescriptionTagText: metaDescriptionTags.first().attr('content') || '',
        h1TagsNumberOf: h1Tags.length,
      };
    })
    .catch(console.error.bind(console)
  );
};

describe('SEO', function() {
  beforeAll(function(done) {
    Promise.all(getAllPaths(availableLocales).map(processPage)).then(done).catch(console.error.bind(console));
    jasmine.addMatchers(seoMatchers);
  });

  describe('<title> tag', function() {
    it('should have one on each page', function() {
      expect(allPages).toHaveNumberOfTags('titleTagsNumberOf', 1, 1);
    });
    it('should be no more than 70 characters long', function() {
      expect(allPages).toHaveTagValuesOfLength('titleTagText', 0, 70);
    });
    it('should not be duplicated on multiple pages', function() {
      expect(allPages).toNotHaveDuplicateValues('titleTagText');
    });
  });

  describe('<meta name="description"> tag', function() {
    it('should have no more than one on each page', function() {
      expect(allPages).toHaveNumberOfTags('metaDescriptionTagsNumberOf', 0, 1);
    });
    it('should be 100 to 160 characters in length', function() {
      expect(allPages).toHaveTagValuesOfLength('metaDescriptionTagText', 100, 160, true);
    });
    it('should not be duplicated on multiple pages', function() {
      expect(allPages).toNotHaveDuplicateValues('metaDescriptionTagText');
    });
  });
});
