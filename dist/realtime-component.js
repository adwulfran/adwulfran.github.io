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

/***/ "./app/components/realtime/realtime.component.js":
/*!*******************************************************!*\
  !*** ./app/components/realtime/realtime.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RealtimeComponent\": () => /* binding */ RealtimeComponent\n/* harmony export */ });\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component.js */ \"./app/component.js\");\n/* harmony import */ var _realtime_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./realtime.component.html */ \"./app/components/realtime/realtime.component.html\");\n/* harmony import */ var _realtime_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_realtime_component_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _realtime_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realtime.component.css */ \"./app/components/realtime/realtime.component.css\");\n/* harmony import */ var _candlestick_candlestick_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candlestick/candlestick.component.html */ \"./app/components/realtime/candlestick/candlestick.component.html\");\n/* harmony import */ var _candlestick_candlestick_component_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_candlestick_candlestick_component_html__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _candlestick_candlestick_component_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candlestick/candlestick.component.css */ \"./app/components/realtime/candlestick/candlestick.component.css\");\n/* harmony import */ var _orderbook_orderbook_component_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderbook/orderbook.component.html */ \"./app/components/realtime/orderbook/orderbook.component.html\");\n/* harmony import */ var _orderbook_orderbook_component_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_orderbook_orderbook_component_html__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _orderbook_orderbook_component_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderbook/orderbook.component.css */ \"./app/components/realtime/orderbook/orderbook.component.css\");\n\n\n// component's template + style\n\n\n\n// sub component's templates + styles\n\n\n\n\n\nnew _component_js__WEBPACK_IMPORTED_MODULE_0__.Component().render({\n    'path': 'realtime-component', \n    'template': (_realtime_component_html__WEBPACK_IMPORTED_MODULE_1___default()), \n    'style': _realtime_component_css__WEBPACK_IMPORTED_MODULE_2__.default\n})\nclass RealtimeComponent extends HTMLElement {\n\n    constructor() {\n\n        super();\n        var component = new _component_js__WEBPACK_IMPORTED_MODULE_0__.Component();\n        component.subrender({\n            'path': 'candlestick-component', \n            'template': (_candlestick_candlestick_component_html__WEBPACK_IMPORTED_MODULE_3___default()), \n            'style' : _candlestick_candlestick_component_css__WEBPACK_IMPORTED_MODULE_4__.default \n        });\n        component.subrender({\n            'path': 'orderbook-component',\n            'template': (_orderbook_orderbook_component_html__WEBPACK_IMPORTED_MODULE_5___default()),\n            'style' : _orderbook_orderbook_component_css__WEBPACK_IMPORTED_MODULE_6__.default \n        })\n\n    }\n\n}\n\ncustomElements.get('realtime-component') || customElements.define('realtime-component', RealtimeComponent);\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/realtime.component.js?");

/***/ }),

/***/ "./app/components/realtime/candlestick/candlestick.component.css":
/*!***********************************************************************!*\
  !*** ./app/components/realtime/candlestick/candlestick.component.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".underline_period { \\n  color :  #6200ee;\\n  border-bottom: 3px solid #6200ee;\\n  padding-bottom: 3px\\n}\\n\\n\\n\\ntd { \\n  padding: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/candlestick/candlestick.component.css?");

/***/ }),

/***/ "./app/components/realtime/orderbook/orderbook.component.css":
/*!*******************************************************************!*\
  !*** ./app/components/realtime/orderbook/orderbook.component.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".bids, .asks { \\n    list-style-type : none;\\n    line-height : 25px;\\n    font-size: 80%;\\n    color : #424242\\n}\\n\\n.card-body {\\n    padding : 0px !important; \\n}\\n\\n.sell {\\n    color: red;\\n}\\n\\n.buy {\\n    color : green;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/orderbook/orderbook.component.css?");

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

/***/ "./app/components/realtime/candlestick/candlestick.component.html":
/*!************************************************************************!*\
  !*** ./app/components/realtime/candlestick/candlestick.component.html ***!
  \************************************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"card text-white\\\"\\n    style=\\\"text-align:center;color: black !important; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\\">\\n    <div class=\\\"card-header\\\" style=\\\"background-color: #ebebeb !important ;color : #424242\\\">\\n        <table>\\n            <tr>\\n                <td><strong onclick=\\\"period(this,'60')\\\" class=\\\"period\\\">Minutes</strong></td>\\n\\n                <td> <strong onclick=\\\"period(this,'3600')\\\" class=\\\"period\\\">Hours</strong>\\n                </td>\\n                <td> <strong onclick=\\\"period(this,'86400')\\\" class=\\\"period\\\">Days</strong>\\n                </td>\\n                <td><strong onclick=\\\"period(this,'259200')\\\" class=\\\"period\\\">Weeks</strong>\\n                </td>\\n            </tr>\\n        </table>\\n    </div>\\n    <div class=\\\"card-body\\\">\\n        <div id=\\\"main\\\"\\n            style=\\\"width:100%;height:700px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\\">\\n        </div>\\n\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/candlestick/candlestick.component.html?");

/***/ }),

/***/ "./app/components/realtime/orderbook/orderbook.component.html":
/*!********************************************************************!*\
  !*** ./app/components/realtime/orderbook/orderbook.component.html ***!
  \********************************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"\\n<div class=\\\"card text-white mb-3\\\"\\n    style=\\\"max-width: 18rem;text-align:center;color: black !important; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\\">\\n    <div class=\\\"card-header\\\" style=\\\"background-color: #ebebeb !important ;color: #6200ee\\\"><strong>BTC/USD</strong>\\n    </div>\\n    <div class=\\\"card-body\\\" id=\\\"asks\\\">\\n        <h5 class=\\\"card-title\\\"></h5>\\n        <p class=\\\"card-text\\\"></p>\\n    </div>\\n    <div class=\\\"card-body\\\" bind-class=\\\"type\\\" bind-text=\\\"price\\\" style=\\\"font-size: 30px;\\\">\\n        <loader-component></loader-component>\\n    </div>\\n    <div class=\\\"card-body\\\" id=\\\"bids\\\">\\n        <h5 class=\\\"card-title\\\"></h5>\\n        <p class=\\\"card-text\\\"></p>\\n    </div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/orderbook/orderbook.component.html?");

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
/******/ 	__webpack_require__("./app/components/realtime/realtime.component.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;