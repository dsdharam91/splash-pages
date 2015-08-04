var EC = protractor.ExpectedConditions;

var urlHasChangedTo = function(browser, newUrl) {
  return browser.getCurrentUrl().then(function(currentUrl) {
    return currentUrl.match(newUrl);
  });
};

var waitFor = function(browser, fn, timeout) {
  if (!timeout) { timeout = 1000; }

  return browser.wait(fn, timeout);
};

var waitForUrlChange = function(browser, newUrl, timeout) {
  var fn = urlHasChangedTo(browser, newUrl);
  return waitFor(browser, fn, timeout);
};

var waitForClickable = function(browser, elem, timeout) {
  var fn = EC.elementToBeClickable(elem);
  return waitFor(browser, fn, timeout);
};

var waitForVisibility = function(browser, elem, timeout) {
  var fn = EC.visibilityOf(elem);
  return waitFor(browser, fn, timeout);
};

var waitForClickableThenClick = function(browser, elem, timeout) {
  // this works even those these are async
  // because they go through browser.wait, which queues them up
  waitForClickable(browser, elem, timeout);
  return elem.click();
};

module.exports = function(browser) {
  return {
    urlHasChangedTo: urlHasChangedTo.bind(null, browser),
    waitForUrlChange: waitForUrlChange.bind(null, browser),
    waitFor: waitFor.bind(null, browser),
    waitForClickable: waitForClickable.bind(null, browser),
    waitForVisibility: waitForVisibility.bind(null, browser),
    waitForClickableThenClick: waitForClickableThenClick.bind(null, browser),
  };
};
