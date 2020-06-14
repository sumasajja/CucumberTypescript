import { element, browser, by, WebDriver } from 'protractor';
import { Calculator } from './pageObjects/calculator';
import { AngularHomePage } from './pageObjects/angularHomePage';
describe('Protractor demo app', () => {
    const calculator = new Calculator();
    const angularHomePage = new AngularHomePage();

    const operation = (operator) => {
        return element(by.model('operator'))
            .element(by.css(`option[value=${operator}]`));
    }

    const addNumbers = async (num1, num2) => {
        await calculator.firstEditBox.sendKeys(num1);
        await calculator.secondEditBox.sendKeys(num2);
        await calculator.gobutton.click();
    }

    beforeEach(async () => {
        var width = 800;
        var height = 600;
        browser.driver.manage().window().setSize(width, height);
        await browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toBe('Super Calculator');
    });

    it('should be 6 after adding 4 and 2', async () => {
        await calculator.firstEditBox.sendKeys(4);
        await calculator.secondEditBox.sendKeys(2);
        await calculator.gobutton.click();
        expect(calculator.latest.getText()).toBe('6');
    });

    it('should be 3 after adding 1 and 2', async () => {
        await calculator.firstEditBox.sendKeys(1);
        await calculator.secondEditBox.sendKeys(2);
        await calculator.gobutton.click();
        expect(calculator.result.getText()).toBe('3');
    });

    it('should show in the input box', async () => {
        await calculator.firstEditBox.sendKeys(1);
        expect(calculator.firstEditBox.getAttribute('value')).toBe('1');
    });

    it('should multiply 3 with 2', async () => {
        await calculator.firstEditBox.sendKeys(3);
        await calculator.secondEditBox.sendKeys(2);
        await (<any>operation('MULTIPLICATION')).click();
        await calculator.gobutton.click();
        expect(calculator.result.getText()).toBe('6');
    });


    it('Get all results in the row', async () => {
        await addNumbers(1, 2);
        await addNumbers(3, 4);
        await addNumbers(5, 6);
        await element.all(by.repeater('result in memory')).each((result) => {
            (<any>result).element(by.css('td:last-child')).getText();
        });
    });

    it('angular  web page title validation', async () => {
        await browser.get('https://angularjs.org/');
        await angularHomePage.angularLink.click();
        await angularHomePage.searchBox.sendKeys('binding');
    });

});