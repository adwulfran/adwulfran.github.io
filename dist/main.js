/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app-routing.module.js":
/*!***********************************!*\
  !*** ./app/app-routing.module.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./app/component.js\");\n/* harmony import */ var _components_home_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component.html */ \"./app/components/home/home.component.html\");\n/* harmony import */ var _components_home_home_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_home_home_component_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_home_home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component.css */ \"./app/components/home/home.component.css\");\n/* harmony import */ var _components_contact_contact_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component.html */ \"./app/components/contact/contact.component.html\");\n/* harmony import */ var _components_contact_contact_component_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_contact_contact_component_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_contact_contact_component_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component.css */ \"./app/components/contact/contact.component.css\");\n/* harmony import */ var _components_realtime_realtime_component_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/realtime/realtime.component.html */ \"./app/components/realtime/realtime.component.html\");\n/* harmony import */ var _components_realtime_realtime_component_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_realtime_realtime_component_html__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_realtime_realtime_component_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/realtime/realtime.component.css */ \"./app/components/realtime/realtime.component.css\");\n// render \n\n\n// templates + styles\n\n\n\n\n\n\n\n\n\n// SINGLE PAGE APPLICATION'S ROUTES \nconst Routes = [\n    {\n        'path': 'home-component', 'template': [(_components_home_home_component_html__WEBPACK_IMPORTED_MODULE_1___default()), _components_home_home_component_css__WEBPACK_IMPORTED_MODULE_2__.default]\n    },\n    {\n        'path': 'contact-component', 'template': [(_components_contact_contact_component_html__WEBPACK_IMPORTED_MODULE_3___default()), _components_contact_contact_component_css__WEBPACK_IMPORTED_MODULE_4__.default]\n    },\n    {\n        'path': 'realtime-component', 'template': [(_components_realtime_realtime_component_html__WEBPACK_IMPORTED_MODULE_5___default()), _components_realtime_realtime_component_css__WEBPACK_IMPORTED_MODULE_6__.default]\n    }\n];\n\n__webpack_require__.g.active = function active(e) {\n    for (var i = 0; i < document.getElementsByClassName('nav-link').length; i++) {\n        document.getElementsByClassName('nav-link')[i].classList.remove(\"active\")\n    }\n    e.classList.add('active')\n}\n\n\nvar component = new _component_js__WEBPACK_IMPORTED_MODULE_0__.Component;\nRoutes.forEach(function(el){\n    component.parent(el['path'])\n})\n\nvar hashStores = [];\nwindow.onhashchange = function () {\n    hashStores.push(window.location.hash)\n    Routes.forEach(function (el, i) {\n        if (window.location.hash === '#' + el.path) {\n            component.render(el)\n        }\n    })\n}\n\nif (hashStores.length == 0) {\n    hashStores.push(window.location.hash)\n    Routes.forEach(function (el, i) {\n        if (window.location.hash === '#' + el.path) {\n            component.render(el)\n        }\n    })\n}\n\n\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/app-routing.module.js?");

/***/ }),

/***/ "./app/component.js":
/*!**************************!*\
  !*** ./app/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component\n/* harmony export */ });\nclass Component {\n\n    constructor() {\n        this.parents = [];\n    }\n\n    parent(route) {\n        this.parents.push(route)\n    }\n\n    render(el) {\n        if (this.parents.indexOf(el['path']) !== -1) {\n            var root = document.getElementById('root');\n            root.innerHTML = `<` + el['path'] + `>` + el['template'][0] + `</` + el['path'] + `>`;\n            var style = document.createElement('style');\n            style.innerHTML = el['template'][1];\n            root.appendChild(style);\n            var script = document.createElement('script');\n            script.src = \"../dist/\" + el['path'] + \".js\"\n            root.appendChild(script)\n        } \n        else {\n            var style = document.createElement('style')\n            style.innerHTML = el['template'][1];\n            document.getElementsByTagName(el['path'])[0].innerHTML = el['template'][0];\n            document.getElementsByTagName(el['path'])[0].appendChild(style);\n            var script = document.createElement('script');\n            script.src = \"../dist/\" + el['path'] + \".js\"\n            document.getElementsByTagName(el['path'])[0].appendChild(script)  \n        }\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/component.js?");

/***/ }),

/***/ "./app/components/contact/contact.component.css":
/*!******************************************************!*\
  !*** ./app/components/contact/contact.component.css ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/contact/contact.component.css?");

/***/ }),

/***/ "./app/components/home/home.component.css":
/*!************************************************!*\
  !*** ./app/components/home/home.component.css ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.home { \\n    color : green;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/home/home.component.css?");

/***/ }),

/***/ "./app/components/realtime/realtime.component.css":
/*!********************************************************!*\
  !*** ./app/components/realtime/realtime.component.css ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/realtime.component.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./app/components/contact/contact.component.html":
/*!*******************************************************!*\
  !*** ./app/components/contact/contact.component.html ***!
  \*******************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<link rel=\\\"stylesheet\\\" href=\\\"/style/components/contact/contact.component.css\\\">\\n<h4> Contact</h4>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/contact/contact.component.html?");

/***/ }),

/***/ "./app/components/home/home.component.html":
/*!*************************************************!*\
  !*** ./app/components/home/home.component.html ***!
  \*************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"\\n<h4 class=\\\"home\\\" bind-text=\\\"title\\\"></h4>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/home/home.component.html?");

/***/ }),

/***/ "./app/components/realtime/realtime.component.html":
/*!*********************************************************!*\
  !*** ./app/components/realtime/realtime.component.html ***!
  \*********************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"row\\\">\\n    <div class=\\\"col-sm-9\\\">\\n        <candlestick-component></candlestick-component>\\n    </div>\\n    <div class=\\\"col-sm-3\\\">\\n        <orderbook-component></orderbook-component>\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/realtime.component.html?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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