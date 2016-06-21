require('babel/register');

var BASE_URL = require('../../helpers/e2e/config').BASE_URL;
var expectedConditions = require('../../helpers/e2e/expected-conditions');

describe('Swapping languages', function() {
  var ec = expectedConditions(browser);

  it('lets you navigate to a page and then swap languages', function() {
    browser.get(BASE_URL);

    element(by.id('track-nav-more')).click();
    element(by.id('track-nav-security')).click();

     ec.waitForUrlChange(BASE_URL + '/security/').then(function() {
       var popoverLink = element(by.cssContainingText('.popover-link', 'United Kingdom'));
       var frenchLink = element(by.css('a[href="/fr-fr/securite/"]'));

       ec.waitForClickableThenClick(popoverLink).
       then(ec.waitForClickableThenClick.bind(null, frenchLink)).
       then(function() {
         expect(element(by.cssContainingText('body', 'Vous êtes protégé')).isPresent()).toBe(true);
       });
     });
  });
});
