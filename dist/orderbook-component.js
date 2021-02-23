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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component\n/* harmony export */ });\nclass Component {\n\n    constructor() {\n        this.parents = [];\n    }\n\n    parent(route) {\n        this.parents.push(route)\n    }\n\n    render(el) {\n        // check if it is parent component or nested component\n        if (this.parents.indexOf(el['path']) !== -1) {\n            var root = document.getElementById('root');\n            root.innerHTML = `<` + el['path'] + `>` + el['template'][0] + `</` + el['path'] + `>`;\n            var style = document.createElement('style');\n            style.innerHTML = el['template'][1];\n            root.appendChild(style);\n            var script = document.createElement('script');\n            script.src = \"../dist/\" + el['path'] + \".js\"\n            root.appendChild(script)\n        }\n        // nested component\n        else {\n            \n            var nested_comp = document.getElementsByTagName(el['path'])[0]\n            var style = document.createElement('style')\n            style.innerHTML = el['template'][1];\n            nested_comp.innerHTML = el['template'][0];\n            nested_comp.appendChild(style);\n            var script = document.createElement('script');\n            script.src = \"../dist/\" + el['path'] + \".js\"\n            nested_comp.appendChild(script)\n        }\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/component.js?");

/***/ }),

/***/ "./app/components/realtime/orderbook/orderbook.component.js":
/*!******************************************************************!*\
  !*** ./app/components/realtime/orderbook/orderbook.component.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderbookComponent\": () => /* binding */ OrderbookComponent\n/* harmony export */ });\n/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../observable.js */ \"./app/observable.js\");\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component.js */ \"./app/component.js\");\n/* harmony import */ var _loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loader/loader.component.html */ \"./app/components/loader/loader.component.html\");\n/* harmony import */ var _loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loader_loader_component_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../loader/loader.component.css */ \"./app/components/loader/loader.component.css\");\n\n\n\n\n\n\nclass OrderbookComponent extends HTMLElement {\n\n    constructor() {\n\n        super();\n        /*  ------------------------------------------------------------------------\n            ------------------------------TICKER------------------------------------\n            ------------------------------------------------------------------------\n        */\n        var price = new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('price');\n        var type = new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('type');\n        var loader = new _component_js__WEBPACK_IMPORTED_MODULE_1__.Component();\n        var websocket_ticker = new WebSocket('wss://ws.bitstamp.net');\n        const message_ticker = {\n            event: \"bts:subscribe\",\n            data: {\n                channel: \"live_trades_btcusd\"\n            }\n        };\n        var checkToLoad = 0;\n        websocket_ticker.onopen = function (evt) { websocket_ticker.send(JSON.stringify(message_ticker)) };\n        websocket_ticker.onmessage = function (evt) {\n            checkToLoad = checkToLoad + 1;\n            if (window.location.hash === '#realtime-component') {\n                var obj = JSON.parse(evt.data)\n                console.log(obj)\n                if (obj.data.price !== undefined) {\n                    price.subscribe(obj.data.price)\n                    if (obj.data.type == 0) {\n                        type.subscribe('buy')\n                    }\n                    else {\n                        type.subscribe('sell')\n                    }\n                }\n                else {\n                   loader.render({'path': 'loader-component', 'template': [(_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_2___default()), _loader_loader_component_css__WEBPACK_IMPORTED_MODULE_3__.default]})\n                }\n\n            } else {\n                websocket_ticker.close()\n            }\n        }\n\n\n        /* ------------------------------------------------------------------------\n           ------------------------------ORDERBOOK---------------------------------\n           ------------------------------------------------------------------------\n       */\n        var bidsArr = [];\n        var asksArr = []\n        for (var i = 0; i < 10; i++) {\n            var liBids = document.createElement('li');\n            liBids.className = 'bids';\n            liBids.setAttribute(\"bind-text\", \"bids-\" + i.toString())\n            document.getElementById('bids').appendChild(liBids);\n            bidsArr.push(new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('bids-' + i))\n\n            var liAsks = document.createElement('li');\n            liAsks.className = 'asks';\n            liAsks.setAttribute(\"bind-text\", \"asks-\" + i.toString())\n            document.getElementById('asks').appendChild(liAsks);\n            asksArr.push(new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('asks-' + i))\n        }\n        var websocket_orderbook = new WebSocket('wss://ws.bitstamp.net');\n        const message_bookorder = {\n            event: \"bts:subscribe\",\n            data: {\n                channel: \"order_book_btcusd\"\n            }\n        };\n        websocket_orderbook.onopen = function (evt) { websocket_orderbook.send(JSON.stringify(message_bookorder)) };\n        websocket_orderbook.onmessage = function (evt) {\n            if (window.location.hash === '#realtime-component') {\n                var obj = JSON.parse(evt.data)\n                if (obj.data.bids !== undefined && obj.data.asks !== undefined) {\n                    obj.data.bids.slice(0, 10).forEach(function (el, i) {\n                        bidsArr[i].subscribe(el[0] + '&nbsp;&nbsp;&nbsp;&nbsp;    ' + el[1])\n                    })\n                    obj.data.asks.slice(0, 10).reverse().forEach(function (el, i) {\n                        asksArr[i].subscribe(el[0] + ' &nbsp;&nbsp;&nbsp;&nbsp;    ' + el[1])\n                    })\n                }\n            } else {\n                websocket_orderbook.close()\n            }\n        }\n\n    }\n\n}\n\ncustomElements.get('orderbook-component') || customElements.define('orderbook-component', OrderbookComponent);\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/orderbook/orderbook.component.js?");

/***/ }),

/***/ "./app/observable.js":
/*!***************************!*\
  !*** ./app/observable.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => /* binding */ Observable\n/* harmony export */ });\nclass Observable {\n\n    constructor(data) {\n\n        this.data = {\n            set current(a) {\n                if (document.querySelector(\"[bind-text='\" + data + \"']\") != undefined){\n                document.querySelector(\"[bind-text='\" + data + \"']\").innerHTML = a;\n                }\n                else if (document.querySelector(\"[bind-class='\" + data + \"']\") != undefined){\n                    if(document.querySelector(\"[bind-class='\" + data + \"']\").classList != undefined){\n                        document.querySelector(\"[bind-class='\" + data + \"']\").className = a;\n                    }\n                    else {\n                        document.querySelector(\"[bind-class='\" + data + \"']\").classList.add = a;\n                    }\n                }\n            }\n        }\n\n    }\n    \n    subscribe(param) {\n        this.data.current = param;\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/observable.js?");

/***/ }),

/***/ "./app/components/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./app/components/loader/loader.component.css ***!
  \****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".sk-chase {\\n    width: 40px;\\n    height: 40px;\\n    position: relative;\\n    animation: sk-chase 2.5s infinite linear both;\\n  }\\n  \\n  .sk-chase-dot {\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    left: 0;\\n    top: 0; \\n    animation: sk-chase-dot 2.0s infinite ease-in-out both; \\n  }\\n  \\n  .sk-chase-dot:before {\\n    content: '';\\n    display: block;\\n    width: 25%;\\n    height: 25%;\\n    background-color: #6200ee;\\n    border-radius: 100%;\\n    animation: sk-chase-dot-before 2.0s infinite ease-in-out both; \\n  }\\n  \\n  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }\\n  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }\\n  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }\\n  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }\\n  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }\\n  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }\\n  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }\\n  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }\\n  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }\\n  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }\\n  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }\\n  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }\\n  \\n  @keyframes sk-chase {\\n    100% { transform: rotate(360deg); } \\n  }\\n  \\n  @keyframes sk-chase-dot {\\n    80%, 100% { transform: rotate(360deg); } \\n  }\\n  \\n  @keyframes sk-chase-dot-before {\\n    50% {\\n      transform: scale(0.4); \\n    } 100%, 0% {\\n      transform: scale(1.0); \\n    } \\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/loader/loader.component.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./app/components/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./app/components/loader/loader.component.html ***!
  \*****************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div class=\\\"sk-chase\\\">\\n  <div class=\\\"sk-chase-dot\\\"></div>\\n  <div class=\\\"sk-chase-dot\\\"></div>\\n  <div class=\\\"sk-chase-dot\\\"></div>\\n  <div class=\\\"sk-chase-dot\\\"></div>\\n  <div class=\\\"sk-chase-dot\\\"></div>\\n  <div class=\\\"sk-chase-dot\\\"></div>\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/loader/loader.component.html?");

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
/******/ 	__webpack_require__("./app/components/realtime/orderbook/orderbook.component.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;