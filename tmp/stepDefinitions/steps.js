"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var calculator_1 = require("../pageObjects/calculator");
var angularHomePage_1 = require("../pageObjects/angularHomePage");
var chai_1 = require("chai");
var calculator = new calculator_1.Calculator();
var angularHomePage = new angularHomePage_1.AngularHomePage();
cucumber_1.Given('I login to the {string} site', function (string) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(string === 'calc')) return [3 /*break*/, 2];
                    protractor_1.browser.manage().window().maximize();
                    return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    if (!(string === 'angularJS')) return [3 /*break*/, 4];
                    protractor_1.browser.manage().window().maximize();
                    return [4 /*yield*/, protractor_1.browser.get('https://angularjs.org/')];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('I add {string} and  {string}', function (string, string2) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculator.firstEditBox.sendKeys(string)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, calculator.secondEditBox.sendKeys(string2)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('the output displayed should be {string}', function (string) {
    return __awaiter(this, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Write code here that turns the phrase above into concrete actions
                return [4 /*yield*/, calculator.gobutton.click()];
                case 1:
                    // Write code here that turns the phrase above into concrete actions
                    _a.sent();
                    return [4 /*yield*/, calculator.result.getText()];
                case 2:
                    text = _a.sent();
                    console.log(text);
                    chai_1.expect(text).to.equal(string);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('I clicked on the header link  and enter to the Angular Page', function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, angularHomePage.angularLink.click()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('you will enter {string}  in the search box', function (string) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, angularHomePage.searchBox.sendKeys('binding')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBNkM7QUFDN0MseUNBQXFDO0FBQ3JDLHdEQUF1RDtBQUN2RCxrRUFBaUU7QUFDakUsNkJBQThCO0FBRTlCLElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQ3BDLElBQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0FBRzlDLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsVUFBZ0IsTUFBTTs7Ozs7eUJBRXBELENBQUEsTUFBTSxLQUFLLE1BQU0sQ0FBQSxFQUFqQix3QkFBaUI7b0JBQ2pCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JDLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLEVBQUE7O29CQUE5RCxTQUE4RCxDQUFBOzs7eUJBRXpELENBQUEsTUFBTSxLQUFLLFdBQVcsQ0FBQSxFQUF0Qix3QkFBc0I7b0JBQzNCLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ3JDLHFCQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLEVBQUE7O29CQUEzQyxTQUEyQyxDQUFBOzs7Ozs7Q0FFbEQsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDhCQUE4QixFQUFFLFVBQWdCLE1BQU0sRUFBRSxPQUFPOzs7O3dCQUNoRSxxQkFBTSxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQTs7b0JBQTlDLFNBQThDLENBQUM7b0JBQy9DLHFCQUFNLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFBOztvQkFBaEQsU0FBZ0QsQ0FBQzs7Ozs7Q0FDcEQsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLFVBQWdCLE1BQU07Ozs7OztnQkFDbEUsb0VBQW9FO2dCQUNwRSxxQkFBTSxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFEakMsb0VBQW9FO29CQUNwRSxTQUFpQyxDQUFDO29CQUNyQixxQkFBTSxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFBOztvQkFBeEMsSUFBSSxHQUFHLFNBQWlDO29CQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Q0FDakMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZEQUE2RCxFQUFFOzs7O3dCQUNoRSxxQkFBTSxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBekMsU0FBeUMsQ0FBQzs7Ozs7Q0FDN0MsQ0FBQyxDQUFDO0FBQ0gsZUFBSSxDQUFDLDRDQUE0QyxFQUFFLFVBQWdCLE1BQU07Ozs7d0JBQ3JFLHFCQUFNLGVBQWUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFBOztvQkFBbkQsU0FBbUQsQ0FBQzs7Ozs7Q0FDdkQsQ0FBQyxDQUFDIn0=