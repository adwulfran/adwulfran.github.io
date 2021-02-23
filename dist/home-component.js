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

/***/ "./app/component.js":
/*!**************************!*\
  !*** ./app/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component\n/* harmony export */ });\n\nclass Component {\n\n    constructor() {\n    }\n\n    render(el) {\n        var root = document.getElementById('root');\n        root.innerHTML = `<` + el['path'] + `>` + el['template'] + `</` + el['path'] + `>`;\n        var style = document.createElement('style');\n        style.innerHTML = el['style'];\n        root.appendChild(style);\n    }\n\n    subrender(el) {\n        var nested_comp = document.getElementsByTagName(el['path'])[0]\n        var style = document.createElement('style')\n        style.innerHTML = el['style'];\n        nested_comp.innerHTML = el['template'];\n        nested_comp.appendChild(style);\n        var script = document.createElement('script');\n        script.src = \"../dist/\" + el['path'] + \".js\"\n        nested_comp.appendChild(script)\n    }\n\n    show(el) {\n        var root = document.getElementById('root')\n        var script = document.createElement('script');\n        script.src = \"../dist/\" + el['path'] + \".js\"\n        root.appendChild(script)\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/component.js?");

/***/ }),

/***/ "./app/components/home/home.component.js":
/*!***********************************************!*\
  !*** ./app/components/home/home.component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeComponent\": () => /* binding */ HomeComponent\n/* harmony export */ });\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component.js */ \"./app/component.js\");\n/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../observable.js */ \"./app/observable.js\");\n/* harmony import */ var _home_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.html */ \"./app/components/home/home.component.html\");\n/* harmony import */ var _home_component_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_component_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component.css */ \"./app/components/home/home.component.css\");\n\n\n\n// component's template + style\n\n\n\nnew _component_js__WEBPACK_IMPORTED_MODULE_0__.Component().render({\n    'path': 'home-component',\n    'template': (_home_component_html__WEBPACK_IMPORTED_MODULE_2___default()),\n    'style': _home_component_css__WEBPACK_IMPORTED_MODULE_3__.default\n})\n\nclass HomeComponent extends HTMLElement {\n\n    constructor() {\n\n        super();\n        var title = new _observable_js__WEBPACK_IMPORTED_MODULE_1__.Observable(\"title\");\n        title.subscribe(\"Hello Home\");\n\n    }\n}\n\ncustomElements.get('home-component') || customElements.define('home-component', HomeComponent);\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/home/home.component.js?");

/***/ }),

/***/ "./app/observable.js":
/*!***************************!*\
  !*** ./app/observable.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => /* binding */ Observable\n/* harmony export */ });\nclass Observable {\n\n    constructor(data) {\n\n        this.data = {\n            set current(a) {\n                if (document.querySelector(\"[bind-text='\" + data + \"']\") != undefined){\n                document.querySelector(\"[bind-text='\" + data + \"']\").innerHTML = a;\n                }\n                else if (document.querySelector(\"[bind-class='\" + data + \"']\") != undefined){\n                    if(document.querySelector(\"[bind-class='\" + data + \"']\").classList != undefined){\n                        document.querySelector(\"[bind-class='\" + data + \"']\").className = a;\n                    }\n                    else {\n                        document.querySelector(\"[bind-class='\" + data + \"']\").classList.add = a;\n                    }\n                }\n            }\n        }\n\n    }\n    \n    subscribe(param) {\n        this.data.current = param;\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/observable.js?");

/***/ }),

/***/ "./app/components/home/home.component.css":
/*!************************************************!*\
  !*** ./app/components/home/home.component.css ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.home { \\n    color : green;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/home/home.component.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./app/components/home/home.component.html":
/*!*************************************************!*\
  !*** ./app/components/home/home.component.html ***!
  \*************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"\\n<h4 class=\\\"home\\\" bind-text=\\\"title\\\"></h4>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/home/home.component.html?");

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