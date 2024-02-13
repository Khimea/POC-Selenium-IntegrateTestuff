"use strict";
const utils = require("./utils");
const testuff = require("./integration_Testuff");
const { Builder, Browser, Capabilities } = require("selenium-webdriver");
const { Before, After, BeforeAll } = require("@cucumber/cucumber");

BeforeAll(() => {
  testuff.crateLab()
})

Before(async (scenario) => {
  global.driver = new Builder().forBrowser(Browser.CHROME).build();
  driver.manage().window().maximize();
  testuff.getTestId(scenario)
});

After(async (scenario) => {
  testuff.TestStatus(scenario);
  //await utils.takeScreenshot(scenario);
  await driver.quit();
});
