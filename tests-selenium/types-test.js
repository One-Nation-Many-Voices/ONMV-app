var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

navigateEventTypeTest(driver_chr);

function navigateEventTypeTest(driver) {
  driver.get('http://localhost:3000/');

  driver.findElement(By.id('browse-nav')).click();
  driver.sleep(3000).then(function() {
    driver.findElement(By.className('sub-header')).then(function(h1) {
      h1.getText().then(function(text) {
        if(text === 'BROWSE') {
          console.log('Navigate to Browse Events Test Passed');
        }
        else {
          console.log('Navigate to Browse Events Test Failed');
        }
      })
    })
  });

  driver.findElement(By.id('Townhalls')).click();
  driver.sleep(3000).then(function() {
    driver.findElement(By.tagName('h3')).then(function(h3) {
      h3.getText().then(function(text) {
        if(text === 'Town Hall') {
          console.log('Display Events with Type Selected Test Passed');
        }
        else {
          console.log('Display Events with Type Selected Test Failed');
        }
      })
    })
  });

  driver.quit();
}
