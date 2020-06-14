"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var Before = require('cucumber').Before;
Before({ tags: "@calculatortesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
Before({ tags: "@angulartesting" }, function () {
    protractor_1.browser.manage().window().maximize();
});
Before({ tags: "@practicetesting" }, function () {
    protractor_1.browser.manage().window().maximize();
    protractor_1.browser.waitForAngularEnabled(false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBcUM7QUFFL0IsSUFBQSxNQUFNLEdBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUF4QixDQUF5QjtBQUdyQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRTtJQUNuQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEVBQUU7SUFDaEMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQyxFQUFFO0lBQy9CLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDckMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQyJ9