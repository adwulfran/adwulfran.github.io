/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/components/home/home.component.js":
/*!***********************************************!*\
  !*** ./app/components/home/home.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeComponent\": () => /* binding */ HomeComponent\n/* harmony export */ });\n/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../observable.js */ \"./app/observable.js\");\n\n\nclass HomeComponent extends HTMLElement {\n\n    constructor() {\n\n        super();\n        var title  = new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable(\"title\");\n        title.subscribe(\"Hello Home\");\n        \n    }\n}\n\ncustomElements.get('home-component') || customElements.define('home-component', HomeComponent);\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/home/home.component.js?");

/***/ }),

/***/ "./app/observable.js":
/*!***************************!*\
  !*** ./app/observable.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => /* binding */ Observable\n/* harmony export */ });\nclass Observable {\n\n    constructor(data) {\n\n        this.data = {\n            set current(a) {\n                if (document.querySelector(\"[bind-text='\" + data + \"']\") != undefined){\n                document.querySelector(\"[bind-text='\" + data + \"']\").innerHTML = a;\n                }\n                else if (document.querySelector(\"[bind-class='\" + data + \"']\") != undefined){\n                    if(document.querySelector(\"[bind-class='\" + data + \"']\").classList != undefined){\n                        document.querySelector(\"[bind-class='\" + data + \"']\").className = a;\n                    }\n                    else {\n                        document.querySelector(\"[bind-class='\" + data + \"']\").classList.add = a;\n                    }\n                }\n            }\n        }\n\n    }\n    \n    subscribe(param) {\n        this.data.current = param;\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/observable.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app/components/home/home.component.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;