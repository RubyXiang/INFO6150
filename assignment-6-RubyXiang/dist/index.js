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

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details */ \"./app/details.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ \"./scss/main.scss\");\n\n\n\nconst detailsURI = 'todo.json';\n\n/**\n * Get data from .json file\n */\nfetch(detailsURI, {\n    method: 'GET'\n}).then(response => {\n    return response.json();\n}).then(data => {\n    load(data);\n    console.log(data)\n});\n\n/**\n * Add list, checkbox to detail, and add detail to parent\n * @param data\n * @returns {boolean}\n */\nconst load = (data) => {\n    if (localStorage.length === 0) {\n        data.forEach(todo => {\n            localStorage.setItem(todo.item, JSON.stringify(new _details__WEBPACK_IMPORTED_MODULE_0__.Details(todo.item, todo.description, todo.date, false)));\n        });\n    }\n    const ul = document.getElementById('list');\n\n    for (let i = 0; i < localStorage.length; i++) {\n        let item = localStorage.getItem(localStorage.key(i));\n        const detail = JSON.parse(item)\n        createList(detail, ul)\n    }\n    return true;\n}\n\nsetTimeout(() => {\n    console.log('hi')\n}, 2000);\n\nconst createList = (detail, parent) => {\n    const li = document.createElement('li');\n\n    const checkBox = document.createElement('input');\n    checkBox.setAttribute(\"type\", \"checkbox\");\n    if (detail.done) {\n        checkBox.setAttribute('checked', 'checked')\n    }\n    checkBox.addEventListener('click', () => {\n        let currentDetail = localStorage.getItem(detail.item);\n        let parse = JSON.parse(currentDetail);\n        parse.done = !parse.done;\n        localStorage.setItem(detail.item, JSON.stringify(parse))\n    })\n    li.appendChild(checkBox);\n\n    const contentLabel = document.createElement('label');\n    contentLabel.innerHTML = `${detail.item}`\n    contentLabel.addEventListener('click', () => {\n        let item = detail.item;\n        window.location = 'subPage.html?item=' + encodeURI(item)\n    })\n    li.appendChild(contentLabel);\n    \n    parent.appendChild(li);\n}\n\n//# sourceURL=webpack://assignment-6-RubyXiang/./app/index.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://assignment-6-RubyXiang/./scss/main.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;