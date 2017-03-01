var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

navigateAllEventsTest(driver_chr);

function navigateAllEventsTest(driver) {
  driver.get('http://localhost:3000/');

  driver.findElement(By.id('all-nav')).click();
  driver.sleep(3000).then(function() {
    driver.findElement(By.className('sub-header')).then(function(h1) {
      h1.getText().then(function(text) {
        if(text === 'ALL EVENTS') {
          console.log('Navigate to All Events Test Passed');
        }
        else {
          console.log('Navigate to All Events Test Failed');
        }
      })
    })
  });

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

  driver.findElement(By.id('location-nav')).click();
  driver.sleep(3000).then(function() {
    driver.findElement(By.className('sub-header')).then(function(h1) {
      h1.getText().then(function(text) {
        if(text === 'SET LOCATION') {
          console.log('Navigate to Set Location Test Passed');
        }
        else {
          console.log('Navigate to Set Location Test Failed');
        }
      })
    })
  });

  driver.quit();
}
