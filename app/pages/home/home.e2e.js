require('babel/register');

var BASE_URL = require('../../helpers/e2e/config').BASE_URL;
var expectedConditions = require('../../helpers/e2e/expected-conditions');

describe('Navigating to the Pro product', function() {
  it('lets the user navigate to /pro', function() {
    browser.get(BASE_URL);
    element(by.id('track-nav-products')).click();
    element(by.id('track-nav-pro')).click();
    expect(browser.getCurrentUrl()).toEqual(BASE_URL + '/pro/');
  });
});

describe('Swapping languages', function() {
  var ec = expectedConditions(browser);

  it('lets you navigate to a page and then swap languages', function() {
    browser.get(BASE_URL);
    element(by.id('track-nav-products')).click();
    element(by.id('track-nav-pro')).click();

    var popoverLink = element(by.cssContainingText('.popover-link', 'United Kingdom'));
    var frenchLink = element(by.css('a[href="/fr-fr/pro/"]'));

    ec.waitForClickableThenClick(popoverLink).
      then(ec.waitForClickableThenClick.bind(null, frenchLink)).
      then(function() {
        expect(element(by.cssContainingText('body', 'Découvrez GoCardless')).isPresent()).toBe(true);
      });
  });
});
