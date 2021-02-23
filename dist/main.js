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

/***/ "./app/app-routing.module.js":
/*!***********************************!*\
  !*** ./app/app-routing.module.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./app/component.js\");\n// render \n\n\n// SINGLE PAGE APPLICATION'S ROUTES \nconst Routes = [\n    {\n        'path': 'home-component'\n    },\n    {\n        'path': 'contact-component'\n    },\n    {\n        'path': 'realtime-component'\n    }\n];\n\nvar component = new _component_js__WEBPACK_IMPORTED_MODULE_0__.Component;\n\nvar hashStores = [];\nwindow.onhashchange = function () {\n    hashStores.push(window.location.hash)\n    Routes.forEach(function (el, i) {\n        if (window.location.hash === '#' + el.path) {\n            component.show(el)\n        }\n    })\n}\n\nif (hashStores.length == 0) {\n    hashStores.push(window.location.hash)\n    Routes.forEach(function (el, i) {\n        if (window.location.hash === '#' + el.path) {\n            component.show(el)\n        }\n    })\n}\n\n__webpack_require__.g.active = function active(e) {\n    for (var i = 0; i < document.getElementsByClassName('nav-link').length; i++) {\n        document.getElementsByClassName('nav-link')[i].classList.remove(\"active\")\n    }\n    e.classList.add('active')\n}\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/app-routing.module.js?");

/***/ }),

/***/ "./app/component.js":
/*!**************************!*\
  !*** ./app/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component\n/* harmony export */ });\n\nclass Component {\n\n    constructor() {\n    }\n\n    render(el) {\n        var root = document.getElementById('root');\n        root.innerHTML = `<` + el['path'] + `>` + el['template'] + `</` + el['path'] + `>`;\n        var style = document.createElement('style');\n        style.innerHTML = el['style'];\n        root.appendChild(style);\n    }\n\n    subrender(el) {\n        var nested_comp = document.getElementsByTagName(el['path'])[0]\n        var style = document.createElement('style')\n        style.innerHTML = el['style'];\n        nested_comp.innerHTML = el['template'];\n        nested_comp.appendChild(style);\n        var script = document.createElement('script');\n        script.src = \"../dist/\" + el['path'] + \".js\"\n        nested_comp.appendChild(script)\n    }\n\n    show(el) {\n        var root = document.getElementById('root')\n        var script = document.createElement('script');\n        script.src = \"../dist/\" + el['path'] + \".js\"\n        root.appendChild(script)\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/component.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	__webpack_require__("./app/app-routing.module.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;