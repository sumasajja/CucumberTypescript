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
var protractor_1 = require("protractor");
var calculator_1 = require("./pageObjects/calculator");
var angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('Protractor demo app', function () {
    var calculator = new calculator_1.Calculator();
    var angularHomePage = new angularHomePage_1.AngularHomePage();
    var operation = function (operator) {
        return protractor_1.element(protractor_1.by.model('operator'))
            .element(protractor_1.by.css("option[value=" + operator + "]"));
    };
    var addNumbers = function (num1, num2) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculator.firstEditBox.sendKeys(num1)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, calculator.secondEditBox.sendKeys(num2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, calculator.gobutton.click()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var width, height;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = 800;
                    height = 600;
                    protractor_1.browser.driver.manage().window().setSize(width, height);
                    return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should have a title', function () {
        expect(protractor_1.browser.getTitle()).toBe('Super Calculator');
    });
    it('should be 6 after adding 4 and 2', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculator.firstEditBox.sendKeys(4)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, calculator.secondEditBox.sendKeys(2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, calculator.gobutton.click()];
                case 3:
                    _a.sent();
                    expect(calculator.latest.getText()).toBe('6');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be 3 after adding 1 and 2', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculator.firstEditBox.sendKeys(1)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, calculator.secondEditBox.sendKeys(2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, calculator.gobutton.click()];
                case 3:
                    _a.sent();
                    expect(calculator.result.getText()).toBe('3');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should show in the input box', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculator.firstEditBox.sendKeys(1)];
                case 1:
                    _a.sent();
                    expect(calculator.firstEditBox.getAttribute('value')).toBe('1');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should multiply 3 with 2', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, calculator.firstEditBox.sendKeys(3)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, calculator.secondEditBox.sendKeys(2)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, operation('MULTIPLICATION').click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, calculator.gobutton.click()];
                case 4:
                    _a.sent();
                    expect(calculator.result.getText()).toBe('6');
                    return [2 /*return*/];
            }
        });
    }); });
    it('Get all results in the row', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, addNumbers(1, 2)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, addNumbers(3, 4)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, addNumbers(5, 6)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element.all(protractor_1.by.repeater('result in memory')).each(function (result) {
                            result.element(protractor_1.by.css('td:last-child')).getText();
                        })];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('angular  web page title validation', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.get('https://angularjs.org/')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, angularHomePage.angularLink.click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, angularHomePage.searchBox.sendKeys('binding')];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdGVzdC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZEO0FBQzdELHVEQUFzRDtBQUN0RCxpRUFBZ0U7QUFDaEUsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBQzVCLElBQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQ3BDLElBQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTlDLElBQU0sU0FBUyxHQUFHLFVBQUMsUUFBUTtRQUN2QixPQUFPLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMvQixPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsUUFBUSxNQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQTtJQUVELElBQU0sVUFBVSxHQUFHLFVBQU8sSUFBSSxFQUFFLElBQUk7Ozt3QkFDaEMscUJBQU0sVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUE1QyxTQUE0QyxDQUFDO29CQUM3QyxxQkFBTSxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQTdDLFNBQTZDLENBQUM7b0JBQzlDLHFCQUFNLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUE7O29CQUFqQyxTQUFpQyxDQUFDOzs7O1NBQ3JDLENBQUE7SUFFRCxVQUFVLENBQUM7Ozs7O29CQUNILEtBQUssR0FBRyxHQUFHLENBQUM7b0JBQ1osTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDakIsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMs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