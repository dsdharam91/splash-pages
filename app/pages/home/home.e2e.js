require('babel/register');

var BASE_URL = require('../../helpers/e2e/config').BASE_URL;
var EC = protractor.ExpectedConditions;

describe('Swapping languages', function() {
  it('lets you navigate to a page and then swap languages', function() {
    browser.get(BASE_URL);

    $('#nav-more').click();
    $('#nav-security').click();

    browser.wait(EC.textToBePresentInElement($('body'), 'Built securely from the ground up'), 5000);

    element(by.cssContainingText('.popover-link', 'United Kingdom')).click();
    $('a[href="/fr-fr/securite/"]').click();

    browser.wait(EC.textToBePresentInElement($('body'), 'Vous êtes protégé'), 5000);
  });
});
