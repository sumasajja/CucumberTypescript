import { browser } from "protractor";

var { Before } = require('cucumber');


Before({ tags: "@calculatortesting" }, function () {
    browser.manage().window().maximize();
});

Before({ tags: "@angulartesting" }, function () {
    browser.manage().window().maximize();
});

Before({tags: "@practicetesting"}, function() {
    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
});
