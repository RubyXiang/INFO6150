/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/details.js":
/*!************************!*\
  !*** ./app/details.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Details\": () => (/* binding */ Details)\n/* harmony export */ });\nclass Details {\n    constructor(item, description, date ,done) {\n        this.item = item;\n        this.description = description;\n        this.date = date;\n        this.done = done\n    }\n}\n\n//# sourceURL=webpack://assignment-6-RubyXiang/./app/details.js?");

/***/ }),

/***/ "./app/second.js":
/*!***********************!*\
  !*** ./app/second.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./app/details.js\");\n\n\n/**\n * Load data from local storage or web page\n */\nfunction show() {\n    let currentDetail = localStorage.getItem(decodeURI(getQueryVariable('item')));\n    let itemJsonObj = JSON.parse(currentDetail)\n\n    let item = document.getElementById('item');\n    let description = document.getElementById('description');\n    let date = document.getElementById('date');\n    let done = document.getElementById('done');\n    if(currentDetail == null){\n        item.value = ''\n        description.value = ''\n        date.value = ''\n        done.value = false\n    }else{\n    item.value = itemJsonObj.item || ''\n    description.value = itemJsonObj.description || ''\n    date.value = itemJsonObj.date || ''\n    done.value = itemJsonObj.done || false\n    }\n    let elementById = document.getElementById('saveButton');\n    elementById.addEventListener('click', save)\n}\n\nshow()\n\nfunction save() {\n    let item = document.getElementById('item').value;\n    let description = document.getElementById('description').value;\n    let date = document.getElementById('date').value;\n    let done = document.getElementById('done').value;\n    let booleanTypeDone = done === 'true'\n\n    let details = new _details__WEBPACK_IMPORTED_MODULE_0__.Details(item, description, date, booleanTypeDone);\n    localStorage.setItem(item, JSON.stringify(details));\n\n    window.location = 'index.html';\n}\n\nfunction getQueryVariable(variable) {\n    var query = window.location.search.substring(1);\n    var vars = query.split(\"&\");\n    for (var i = 0; i < vars.length; i++) {\n        var pair = vars[i].split(\"=\");\n        if (pair[0] == variable) {\n            return pair[1];\n        }\n    }\n    return (false);\n}\n\n//# sourceURL=webpack://assignment-6-RubyXiang/./app/second.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/second.js");
/******/ 	
/******/ })()
;