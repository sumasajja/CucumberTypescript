import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { Calculator } from '../pageObjects/calculator';
import { AngularHomePage } from "../pageObjects/angularHomePage";
import { expect } from "chai";

const calculator = new Calculator();
const angularHomePage = new AngularHomePage();


Given('I login to the {string} site', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    if (string === 'calc') {
        browser.manage().window().maximize();
        await browser.get('http://juliemr.github.io/protractor-demo/')
    }
    else if (string === 'angularJS') {
        browser.manage().window().maximize();
        await browser.get('https://angularjs.org/')
    }
});
When('I add {string} and  {string}', async function (string, string2) {
    await calculator.firstEditBox.sendKeys(string);
    await calculator.secondEditBox.sendKeys(string2);
});
Then('the output displayed should be {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    await calculator.gobutton.click();
    const text = await calculator.result.getText();
    console.log(text);
    expect(text).to.equal(string);
});

When('I clicked on the header link  and enter to the Angular Page', async function () {
    await angularHomePage.angularLink.click();
});
Then('you will enter {string}  in the search box', async function (string) {
    await angularHomePage.searchBox.sendKeys('binding');
});
