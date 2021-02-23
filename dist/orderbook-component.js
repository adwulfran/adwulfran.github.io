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

/***/ "./app/components/loader/loader.component.js":
/*!***************************************************!*\
  !*** ./app/components/loader/loader.component.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoaderComponent\": () => /* binding */ LoaderComponent\n/* harmony export */ });\nclass LoaderComponent extends HTMLElement {\n\n    constructor() {\n\n        super();\n    }\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/loader/loader.component.js?");

/***/ }),

/***/ "./app/components/realtime/orderbook/orderbook.component.js":
/*!******************************************************************!*\
  !*** ./app/components/realtime/orderbook/orderbook.component.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderbookComponent\": () => /* binding */ OrderbookComponent\n/* harmony export */ });\n/* harmony import */ var _observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../observable.js */ \"./app/observable.js\");\n/* harmony import */ var _loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../loader/loader.component.html */ \"./app/components/loader/loader.component.html\");\n/* harmony import */ var _loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loader_loader_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../loader/loader.component.js */ \"./app/components/loader/loader.component.js\");\n\n\n\n\n\nclass OrderbookComponent extends HTMLElement {\n\n    constructor() {\n\n        super();\n        /*  ------------------------------------------------------------------------\n            ------------------------------TICKER------------------------------------\n            ------------------------------------------------------------------------\n        */\n        var price = new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('price');\n        var type = new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('type');\n        var websocket_ticker = new WebSocket('wss://ws.bitstamp.net');\n        const message_ticker = {\n            event: \"bts:subscribe\",\n            data: {\n                channel: \"live_trades_btcusd\"\n            }\n        };\n        var checkToLoad = 0;\n        websocket_ticker.onopen = function (evt) { websocket_ticker.send(JSON.stringify(message_ticker)) };\n        websocket_ticker.onmessage = function (evt) {\n            checkToLoad = checkToLoad + 1;\n            if (window.location.hash === '#realtime-component') {\n                var obj = JSON.parse(evt.data)\n                console.log(obj)\n                if (obj.data.price !== undefined) {\n                    price.subscribe(obj.data.price)\n                    if (obj.data.type == 0) {\n                        type.subscribe('buy')\n                    }\n                    else {\n                        type.subscribe('sell')\n                    }\n                }\n                else {\n                    price.subscribe((_loader_loader_component_html__WEBPACK_IMPORTED_MODULE_1___default()))\n                    customElements.get('loader-component') || customElements.define('loader-component', _loader_loader_component_js__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent);\n                }\n\n            } else {\n                websocket_ticker.close()\n            }\n        }\n\n\n        /* ------------------------------------------------------------------------\n           ------------------------------ORDERBOOK---------------------------------\n           ------------------------------------------------------------------------\n       */\n        var bidsArr = [];\n        var asksArr = []\n        for (var i = 0; i < 10; i++) {\n            var liBids = document.createElement('li');\n            liBids.className = 'bids';\n            liBids.setAttribute(\"bind-text\", \"bids-\" + i.toString())\n            document.getElementById('bids').appendChild(liBids);\n            bidsArr.push(new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('bids-' + i))\n\n            var liAsks = document.createElement('li');\n            liAsks.className = 'asks';\n            liAsks.setAttribute(\"bind-text\", \"asks-\" + i.toString())\n            document.getElementById('asks').appendChild(liAsks);\n            asksArr.push(new _observable_js__WEBPACK_IMPORTED_MODULE_0__.Observable('asks-' + i))\n        }\n        var websocket_orderbook = new WebSocket('wss://ws.bitstamp.net');\n        const message_bookorder = {\n            event: \"bts:subscribe\",\n            data: {\n                channel: \"order_book_btcusd\"\n            }\n        };\n        websocket_orderbook.onopen = function (evt) { websocket_orderbook.send(JSON.stringify(message_bookorder)) };\n        websocket_orderbook.onmessage = function (evt) {\n            if (window.location.hash === '#realtime-component') {\n                var obj = JSON.parse(evt.data)\n                if (obj.data.bids !== undefined && obj.data.asks !== undefined) {\n                    obj.data.bids.slice(0, 10).forEach(function (el, i) {\n                        bidsArr[i].subscribe(el[0] + '&nbsp;&nbsp;&nbsp;&nbsp;    ' + el[1])\n                    })\n                    obj.data.asks.slice(0, 10).reverse().forEach(function (el, i) {\n                        asksArr[i].subscribe(el[0] + ' &nbsp;&nbsp;&nbsp;&nbsp;    ' + el[1])\n                    })\n                }\n            } else {\n                websocket_orderbook.close()\n            }\n        }\n\n    }\n\n}\n\ncustomElements.get('orderbook-component') || customElements.define('orderbook-component', OrderbookComponent);\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/orderbook/orderbook.component.js?");

/***/ }),

/***/ "./app/observable.js":
/*!***************************!*\
  !*** ./app/observable.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => /* binding */ Observable\n/* harmony export */ });\nclass Observable {\n\n    constructor(data) {\n\n        this.data = {\n            set current(a) {\n                if (document.querySelector(\"[bind-text='\" + data + \"']\") != undefined){\n                document.querySelector(\"[bind-text='\" + data + \"']\").innerHTML = a;\n                }\n                else if (document.querySelector(\"[bind-class='\" + data + \"']\") != undefined){\n                    if(document.querySelector(\"[bind-class='\" + data + \"']\").classList != undefined){\n                        document.querySelector(\"[bind-class='\" + data + \"']\").className = a;\n                    }\n                    else {\n                        document.querySelector(\"[bind-class='\" + data + \"']\").classList.add = a;\n                    }\n                }\n            }\n        }\n\n    }\n    \n    subscribe(param) {\n        this.data.current = param;\n    }\n\n}\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/observable.js?");

/***/ }),

/***/ "./app/components/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./app/components/loader/loader.component.html ***!
  \*****************************************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<loader-component>\\n  <link rel=\\\"stylesheet\\\" href=\\\"/style/components/loader/loader.component.css\\\">\\n  <div class=\\\"sk-chase\\\">\\n    <div class=\\\"sk-chase-dot\\\"></div>\\n    <div class=\\\"sk-chase-dot\\\"></div>\\n    <div class=\\\"sk-chase-dot\\\"></div>\\n    <div class=\\\"sk-chase-dot\\\"></div>\\n    <div class=\\\"sk-chase-dot\\\"></div>\\n    <div class=\\\"sk-chase-dot\\\"></div>\\n  </div>\\n</loader-component>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/loader/loader.component.html?");

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