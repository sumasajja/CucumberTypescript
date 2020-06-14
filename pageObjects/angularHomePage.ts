import { element, by, ElementFinder } from "protractor";

export class AngularHomePage {
    angularLink: ElementFinder;
    searchBox: ElementFinder;

    constructor() {
        this.angularLink = element(by.linkText("angular.io"));
        this.searchBox = element(by.css('.search-container > input[type="search"]'));
    }
}