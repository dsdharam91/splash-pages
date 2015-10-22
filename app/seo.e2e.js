const Promise = require('promise');

const countBy = require('lodash/collection/countBy');
const filter = require('lodash/collection/filter');
const forEach = require('lodash/collection/forEach');
const pluck = require('lodash/collection/pluck');
const cheerio = require('cheerio');
const request = require('superagent');

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
  toHaveValidTitle: function() {
    return {
      compare: function(actual) {
        var result = { pass: true, message: '' };
        var failedUrls = [];
        forEach(actual, function(pageInfo, pagePath) {
          if (pageInfo.titleTagsNumberOf != 1) {
            // Should have one <title> tag
            failedUrls.push(pagePath+' (contained '+pageInfo.titleTagsNumberOf+' <title> tags)');
            result.pass = false;
          } else if (pageInfo.titleTagText.length > 70) {
            // Should be less than 70 characters in length
            failedUrls.push(pagePath+' (<title> tag was '+pageInfo.titleTagText.length+' characters long)');
            result.pass = false;
          }
        });
        if (!result.pass) {
          result.message = 'The following pages had an invalid title:\n'+failedUrls.join('\n');
        }
        return result;
      }
    }
  },
  toHaveNonDuplicateTitles: function() {
    return {
      compare: function(actual) {
        var result = { pass: true, message: '' };
        var duplicatedTitles = [];
        var titleTagFrequency = countBy(actual, 'titleTagText');
        forEach(titleTagFrequency, function(freq, titleText) {
          if (freq > 1) {
            var pagePathsWithThisTitleText = pluck(filter(actual, 'titleTagText', titleText), 'pagePath');
            duplicatedTitles.push(titleText+' ('+freq+' times)\n'+pagePathsWithThisTitleText.join('\n')+'\n');
            result.pass = false;
          }
        });
        if (!result.pass) {
          result.message = duplicatedTitles.join('\n');
        }
        return result;
      }
    }
  },
  toHaveValidMetaDescription: function() {
    return {
      compare: function(actual) {
        var result = { pass: true, message: '' };
        var failedUrls = [];
        forEach(actual, function(pageInfo, pagePath) {
          if (pageInfo.metaDescriptionTagsNumberOf > 1) {
            // Should have no more than one <meta name="description"> tag
            failedUrls.push(pagePath+' (contained '+pageInfo.metaDescriptionTagsNumberOf+' <meta name="description"> tags)');
            result.pass = false;
          } else if (pageInfo.metaDescriptionTagText.length < 100 || pageInfo.metaDescriptionTagText.length > 160) {
            // Should be 100 to 160 characters in length
            failedUrls.push(pagePath+' (<meta name="description"> tag was '+pageInfo.metaDescriptionTagText.length+' characters long)');
            result.pass = false;
          }
        });
        if (!result.pass) {
          result.message = 'The following pages had an invalid description:\n'+failedUrls.join('\n');
        }
        return result;
      }
    }
  },
  toHaveNonDuplicateMetaDescriptions: function() {
    return {
      compare: function(actual) {
        var result = { pass: true, message: '' };
        var duplicatedMetaDescriptions = [];
        var metaDescriptionFrequency = countBy(actual, 'metaDescriptionTagText');
        forEach(metaDescriptionFrequency, function(freq, metaDescriptionText) {
          if (freq > 1) {
            var pagePathsWithThisMetaDescription = pluck(filter(actual, 'metaDescriptionTagText', metaDescriptionText), 'pagePath');
            duplicatedMetaDescriptions.push(metaDescriptionText+' ('+freq+' times)\n'+pagePathsWithThisMetaDescription.join('\n')+'\n');
            result.pass = false;
          }
        });
        if (!result.pass) {
          result.message = duplicatedMetaDescriptions.join('\n');
        }
        return result;
      }
    }
  },
}

const serverUrl = '';
const getAllPaths = [
  'https://dl.dropboxusercontent.com/u/6414301/Test/normal_file.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/duplicate_file.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/long_title.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/long_title2.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/long_desc.html',
  'https://dl.dropboxusercontent.com/u/6414301/test/long_desc_2.html'];
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
        'pagePath': pageUrl,
        'titleTagsNumberOf': titleTags.length,
        'titleTagText': titleTags.first().text(),
        'metaDescriptionTagsNumberOf': metaDescriptionTags.length,
        'metaDescriptionTagText': metaDescriptionTags.first().attr('content'),
        'h1TagsNumberOf': h1Tags.length,
      };
    })
    .catch(console.error.bind(console)
  );
};

describe('SEO', function() {
  beforeAll(function(done) {
    Promise.all(getAllPaths.map(processPage)).then(done).catch(console.error.bind(console));
    jasmine.addMatchers(seoMatchers);
  });

  it('all pages should have a title tag of less than 70 characters', function() {
    expect(allPages).toHaveValidTitle();
  });
  it('all pages should have a unique title', function() {
    expect(allPages).toHaveNonDuplicateTitles();
  });
  it('meta description should be between 100 and 160 characters in length', function() {
    expect(allPages).toHaveValidMetaDescription();
  });
  it('all pages should have a unique meta description', function() {
    expect(allPages).toHaveNonDuplicateMetaDescriptions();
  });
});