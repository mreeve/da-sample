/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Demo.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Demo.ts":
/*!*********************!*\
  !*** ./src/Demo.ts ***!
  \*********************/
/*! exports provided: Demo2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Demo2\", function() { return Demo2; });\n// import {Viewer} from \"@aurigma/design-atoms/Viewer/Viewer\";\r\n// import {Product, Surface, PrintArea, SafetyLine, SurfaceContainer, MockupContainer} from \"@aurigma/design-atoms/Model/Product\";\r\n// import {RectangleF, PointF} from \"@aurigma/design-atoms/Math\";\r\n// import {ColorFactory} from \"@aurigma/design-atoms/Colors\";\r\n// import {assignProperties} from \"@aurigma/design-atoms/Utils/Utils\";\r\n// import {PlainTextItem, TextAlignment, BaseTextItem, TextVerticalAlignment, BoundedTextItem, ImageItem} from \"@aurigma/design-atoms/Model/Product/Items\";\r\n// import {Canvas} from \"@aurigma/design-atoms/Canvas\";\r\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nwindow.CustomersCanvas = window.CustomersCanvas || {};\r\nvar Demo2 = /** @class */ (function () {\r\n    function Demo2() {\r\n    }\r\n    Demo2.prototype.loadIFrame = function () {\r\n        var productDefinition = {\r\n            surfaces: [\r\n                'basicinvite/Confetti_Dots_Storybook-1/Confetti_Dots_Storybook-1',\r\n                'basicinvite/Confetti_Dots_Storybook-2/Confetti_Dots_Storybook-2',\r\n                'basicinvite/Confetti_Dots_Storybook-3/Confetti_Dots_Storybook-3',\r\n                'basicinvite/Confetti_Dots_Storybook-4/Confetti_Dots_Storybook-4',\r\n                'basicinvite/Confetti_Dots_Storybook-5/Confetti_Dots_Storybook-5',\r\n                'basicinvite/Confetti_Dots_Storybook-6/Confetti_Dots_Storybook-6',\r\n            ],\r\n        };\r\n        var editorConfig = {\r\n            initialMode: 'Advanced',\r\n            canvas: {\r\n                rulers: {\r\n                    enabled: false,\r\n                }\r\n            },\r\n            \"violationWarningsSettings\": {\r\n                \"textCropViolationWarningEnabled\": false,\r\n                \"safetyLineViolationWarningEnabled\": false,\r\n            }\r\n        };\r\n        var cc = window.CustomersCanvas;\r\n        return window.CustomersCanvas.IframeApi.loadEditor(document.getElementById(\"product-viewer\"), productDefinition, editorConfig);\r\n    };\r\n    Demo2.prototype.init = function () {\r\n        var _this = this;\r\n        document.addEventListener(\"DOMContentLoaded\", function () { return __awaiter(_this, void 0, void 0, function () {\r\n            var cc, editor, _a;\r\n            var _this = this;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        cc = window.CustomersCanvas;\r\n                        return [4 /*yield*/, this.loadIFrame()];\r\n                    case 1:\r\n                        editor = _b.sent();\r\n                        _a = this;\r\n                        return [4 /*yield*/, editor.getProduct()];\r\n                    case 2:\r\n                        _a.product = _b.sent();\r\n                        editor.subscribe(cc.IframeApi.PostMessage.Events.SelectedItemsChanged, function (args) { return __awaiter(_this, void 0, void 0, function () {\r\n                            var items;\r\n                            return __generator(this, function (_a) {\r\n                                switch (_a.label) {\r\n                                    case 0:\r\n                                        console.log(JSON.stringify(args, null, 4));\r\n                                        return [4 /*yield*/, this.product.getItems(function (item, args) { return item.name === (args[0]._name); })];\r\n                                    case 1:\r\n                                        items = _a.sent();\r\n                                        this.selectedItem = items[0] || {};\r\n                                        return [2 /*return*/];\r\n                                }\r\n                            });\r\n                        }); });\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        }); });\r\n    };\r\n    return Demo2;\r\n}());\r\n\r\n(new Demo2()).init();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRGVtby50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9EZW1vLnRzPzQxNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtWaWV3ZXJ9IGZyb20gXCJAYXVyaWdtYS9kZXNpZ24tYXRvbXMvVmlld2VyL1ZpZXdlclwiO1xyXG4vLyBpbXBvcnQge1Byb2R1Y3QsIFN1cmZhY2UsIFByaW50QXJlYSwgU2FmZXR5TGluZSwgU3VyZmFjZUNvbnRhaW5lciwgTW9ja3VwQ29udGFpbmVyfSBmcm9tIFwiQGF1cmlnbWEvZGVzaWduLWF0b21zL01vZGVsL1Byb2R1Y3RcIjtcclxuLy8gaW1wb3J0IHtSZWN0YW5nbGVGLCBQb2ludEZ9IGZyb20gXCJAYXVyaWdtYS9kZXNpZ24tYXRvbXMvTWF0aFwiO1xyXG4vLyBpbXBvcnQge0NvbG9yRmFjdG9yeX0gZnJvbSBcIkBhdXJpZ21hL2Rlc2lnbi1hdG9tcy9Db2xvcnNcIjtcclxuLy8gaW1wb3J0IHthc3NpZ25Qcm9wZXJ0aWVzfSBmcm9tIFwiQGF1cmlnbWEvZGVzaWduLWF0b21zL1V0aWxzL1V0aWxzXCI7XHJcbi8vIGltcG9ydCB7UGxhaW5UZXh0SXRlbSwgVGV4dEFsaWdubWVudCwgQmFzZVRleHRJdGVtLCBUZXh0VmVydGljYWxBbGlnbm1lbnQsIEJvdW5kZWRUZXh0SXRlbSwgSW1hZ2VJdGVtfSBmcm9tIFwiQGF1cmlnbWEvZGVzaWduLWF0b21zL01vZGVsL1Byb2R1Y3QvSXRlbXNcIjtcclxuLy8gaW1wb3J0IHtDYW52YXN9IGZyb20gXCJAYXVyaWdtYS9kZXNpZ24tYXRvbXMvQ2FudmFzXCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxud2luZG93LkN1c3RvbWVyc0NhbnZhcyA9IHdpbmRvdy5DdXN0b21lcnNDYW52YXMgfHwge307XHJcbnZhciBEZW1vMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERlbW8yKCkge1xyXG4gICAgfVxyXG4gICAgRGVtbzIucHJvdG90eXBlLmxvYWRJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHByb2R1Y3REZWZpbml0aW9uID0ge1xyXG4gICAgICAgICAgICBzdXJmYWNlczogW1xyXG4gICAgICAgICAgICAgICAgJ2Jhc2ljaW52aXRlL0NvbmZldHRpX0RvdHNfU3Rvcnlib29rLTEvQ29uZmV0dGlfRG90c19TdG9yeWJvb2stMScsXHJcbiAgICAgICAgICAgICAgICAnYmFzaWNpbnZpdGUvQ29uZmV0dGlfRG90c19TdG9yeWJvb2stMi9Db25mZXR0aV9Eb3RzX1N0b3J5Ym9vay0yJyxcclxuICAgICAgICAgICAgICAgICdiYXNpY2ludml0ZS9Db25mZXR0aV9Eb3RzX1N0b3J5Ym9vay0zL0NvbmZldHRpX0RvdHNfU3Rvcnlib29rLTMnLFxyXG4gICAgICAgICAgICAgICAgJ2Jhc2ljaW52aXRlL0NvbmZldHRpX0RvdHNfU3Rvcnlib29rLTQvQ29uZmV0dGlfRG90c19TdG9yeWJvb2stNCcsXHJcbiAgICAgICAgICAgICAgICAnYmFzaWNpbnZpdGUvQ29uZmV0dGlfRG90c19TdG9yeWJvb2stNS9Db25mZXR0aV9Eb3RzX1N0b3J5Ym9vay01JyxcclxuICAgICAgICAgICAgICAgICdiYXNpY2ludml0ZS9Db25mZXR0aV9Eb3RzX1N0b3J5Ym9vay02L0NvbmZldHRpX0RvdHNfU3Rvcnlib29rLTYnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGVkaXRvckNvbmZpZyA9IHtcclxuICAgICAgICAgICAgaW5pdGlhbE1vZGU6ICdBZHZhbmNlZCcsXHJcbiAgICAgICAgICAgIGNhbnZhczoge1xyXG4gICAgICAgICAgICAgICAgcnVsZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwidmlvbGF0aW9uV2FybmluZ3NTZXR0aW5nc1wiOiB7XHJcbiAgICAgICAgICAgICAgICBcInRleHRDcm9wVmlvbGF0aW9uV2FybmluZ0VuYWJsZWRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBcInNhZmV0eUxpbmVWaW9sYXRpb25XYXJuaW5nRW5hYmxlZFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNjID0gd2luZG93LkN1c3RvbWVyc0NhbnZhcztcclxuICAgICAgICByZXR1cm4gd2luZG93LkN1c3RvbWVyc0NhbnZhcy5JZnJhbWVBcGkubG9hZEVkaXRvcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3Qtdmlld2VyXCIpLCBwcm9kdWN0RGVmaW5pdGlvbiwgZWRpdG9yQ29uZmlnKTtcclxuICAgIH07XHJcbiAgICBEZW1vMi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNjLCBlZGl0b3IsIF9hO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYyA9IHdpbmRvdy5DdXN0b21lcnNDYW52YXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMubG9hZElGcmFtZSgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvciA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBlZGl0b3IuZ2V0UHJvZHVjdCgpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnByb2R1Y3QgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5zdWJzY3JpYmUoY2MuSWZyYW1lQXBpLlBvc3RNZXNzYWdlLkV2ZW50cy5TZWxlY3RlZEl0ZW1zQ2hhbmdlZCwgZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGFyZ3MsIG51bGwsIDQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucHJvZHVjdC5nZXRJdGVtcyhmdW5jdGlvbiAoaXRlbSwgYXJncykgeyByZXR1cm4gaXRlbS5uYW1lID09PSAoYXJnc1swXS5fbmFtZSk7IH0pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW1zWzBdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEZW1vMjtcclxufSgpKTtcclxuZXhwb3J0IHsgRGVtbzIgfTtcclxuKG5ldyBEZW1vMigpKS5pbml0KCk7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Demo.ts\n");

/***/ })

/******/ });