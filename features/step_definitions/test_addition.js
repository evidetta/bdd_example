
const { Given, When, Then } = require('cucumber');
const { By, Key } = require('selenium-webdriver');
const assert = require('assert');

Given('the result display is clear', async function () {
    const displayText = await this.browser.findElement(By.id("txtDisplay")).getAttribute("value");
    assert.equal(displayText, "");
});

Given('I click on {string}', async function (string) {
    await this.browser.findElement(By.id(this.lookupID(string))).click();
});

Given('I press {string}', async function (string) {
    const actions = this.browser.actions();

    if (string === "Enter") {
        await actions.keyDown(Key.ENTER).keyUp(Key.ENTER).perform();
    } else {
        await actions.keyDown(string).keyUp(string).perform();
    }
});

Then('the result display shows {string}', async function (string) {
    const displayText = await this.browser.findElement(By.id("txtDisplay")).getAttribute("value");
    assert.equal(displayText, string);
});