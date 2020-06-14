import { ElementFinder, element, by } from "protractor";

export class Calculator {
    firstEditBox: ElementFinder;
    secondEditBox: ElementFinder;
    gobutton: ElementFinder;
    result: ElementFinder;
    latest: ElementFinder;
    
    constructor() {
        this.firstEditBox = element(by.model('first'));
        this.secondEditBox = element(by.model('second'));
        this.gobutton = element(by.id('gobutton'));
        this.result = element(by.repeater('result in memory')).element(by.css('td:last-child'));
        this.latest = element(by.binding('latest'));
    }
}