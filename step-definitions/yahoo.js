
const { Given, Then, Before} = require('@cucumber/cucumber');

Before(() => {
  this.yahoo = browser.page.yahooPage();
})

Given(/^I open Yahoo's search page$/, () => {
  return this.yahoo.openUrl();
});


Then(/^the word is \"([^\"]*)\"$/, title => {
  return this.yahoo.verifyTitle(title);
});

Then(/^the Yahoo search form exists$/, () => {
  return this.yahoo.verifySearch();
});
