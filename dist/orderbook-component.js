/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./app/components/loader/loader.component.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/components/loader/loader.component.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".sk-chase {\\n    width: 40px;\\n    height: 40px;\\n    position: relative;\\n    animation: sk-chase 2.5s infinite linear both;\\n}\\n  \\n.sk-chase-dot {\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    left: 0;\\n    top: 0; \\n    animation: sk-chase-dot 2.0s infinite ease-in-out both; \\n  }\\n  \\n.sk-chase-dot:before {\\n    content: '';\\n    display: block;\\n    width: 25%;\\n    height: 25%;\\n    background-color: #6200ee;\\n    border-radius: 100%;\\n    animation: sk-chase-dot-before 2.0s infinite ease-in-out both; \\n  }\\n  \\n  .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }\\n  .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }\\n  .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }\\n  .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }\\n  .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }\\n  .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }\\n  .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }\\n  .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }\\n  .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }\\n  .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }\\n  .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }\\n  .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }\\n  \\n  @keyframes sk-chase {\\n    100% { transform: rotate(360deg); } \\n  }\\n  \\n  @keyframes sk-chase-dot {\\n    80%, 100% { transform: rotate(360deg); } \\n  }\\n  \\n  @keyframes sk-chase-dot-before {\\n    50% {\\n      transform: scale(0.4); \\n    } 100%, 0% {\\n      transform: scale(1.0); \\n    } \\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/loader/loader.component.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ }),

/***/ "./app/components/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./app/components/loader/loader.component.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loader_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./loader.component.css */ \"./node_modules/css-loader/dist/cjs.js!./app/components/loader/loader.component.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_loader_component_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_loader_component_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/loader/loader.component.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://vanilla_spa_framework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./app/component.ts":
/*!**************************!*\
  !*** ./app/component.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n    constructor() {\n    }\n    render(el) {\n        if (globalThis.routes.findIndex((x) => x.path === el['path']) !== -1) {\n            var root = document.getElementById('root');\n            root.innerHTML = `<` + el['path'] + `>` + el['template'] + `</` + el['path'] + `>`;\n            var style = document.createElement('style');\n            style.innerHTML = el['style'];\n            root.appendChild(style);\n        }\n        else {\n            var nested_comp = document.getElementsByTagName(el['path'])[0];\n            var style = document.createElement('style');\n            style.innerHTML = el['style'];\n            nested_comp.innerHTML = el['template'];\n            nested_comp.appendChild(style);\n            var script = document.createElement('script');\n            if (el['path'] === 'home-component') {\n                script.src = \"../dist/\" + el['path'] + \".ts\";\n            }\n            else {\n                script.src = \"../dist/\" + el['path'] + \".js\";\n            }\n            nested_comp.appendChild(script);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/component.ts?");

/***/ }),

/***/ "./app/components/realtime/orderbook/orderbook.component.ts":
/*!******************************************************************!*\
  !*** ./app/components/realtime/orderbook/orderbook.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrderbookComponent\": () => (/* binding */ OrderbookComponent)\n/* harmony export */ });\n/* harmony import */ var _observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../observable */ \"./app/observable.ts\");\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component */ \"./app/component.ts\");\n\n\nclass OrderbookComponent {\n    constructor() {\n        /*  ------------------------------------------------------------------------\n            ------------------------------TICKER------------------------------------\n            ------------------------------------------------------------------------\n        */\n        this.price = new _observable__WEBPACK_IMPORTED_MODULE_0__.Observable('price');\n        this.type = new _observable__WEBPACK_IMPORTED_MODULE_0__.Observable('type');\n        this.loader = new _component__WEBPACK_IMPORTED_MODULE_1__.Component();\n        this.bidsArr = [];\n        this.asksArr = [];\n        var websocket_ticker = new WebSocket('wss://ws.bitstamp.net');\n        const message_ticker = {\n            event: \"bts:subscribe\",\n            data: {\n                channel: \"live_trades_btcusd\"\n            }\n        };\n        var checkToLoad = 0;\n        websocket_ticker.onopen = (evt) => { websocket_ticker.send(JSON.stringify(message_ticker)); };\n        websocket_ticker.onmessage = (evt) => {\n            checkToLoad = checkToLoad + 1;\n            if (window.location.hash === '#realtime-component') {\n                var obj = JSON.parse(evt.data);\n                console.log(obj);\n                if (obj.data.price !== undefined) {\n                    this.price.subscribe(obj.data.price);\n                    if (obj.data.type == 0) {\n                        this.type.subscribe('buy');\n                    }\n                    else {\n                        this.type.subscribe('sell');\n                    }\n                }\n                else {\n                    this.loader.render({\n                        'path': 'loader-component',\n                        'template': __webpack_require__(/*! ../../loader/loader.component.html */ \"./app/components/loader/loader.component.html\"),\n                        'style': __webpack_require__(/*! ../../loader/loader.component.css */ \"./app/components/loader/loader.component.css\")\n                    });\n                }\n            }\n            else {\n                websocket_ticker.close();\n            }\n        };\n        /* ------------------------------------------------------------------------\n           ------------------------------ORDERBOOK---------------------------------\n           ------------------------------------------------------------------------\n       */\n        for (var i = 0; i < 10; i++) {\n            var liBids = document.createElement('li');\n            liBids.className = 'bids';\n            liBids.setAttribute(\"bind-text\", \"bids-\" + i.toString());\n            document.getElementById('bids').appendChild(liBids);\n            this.bidsArr.push(new _observable__WEBPACK_IMPORTED_MODULE_0__.Observable('bids-' + i));\n            var liAsks = document.createElement('li');\n            liAsks.className = 'asks';\n            liAsks.setAttribute(\"bind-text\", \"asks-\" + i.toString());\n            document.getElementById('asks').appendChild(liAsks);\n            this.asksArr.push(new _observable__WEBPACK_IMPORTED_MODULE_0__.Observable('asks-' + i));\n        }\n        var websocket_orderbook = new WebSocket('wss://ws.bitstamp.net');\n        const message_bookorder = {\n            event: \"bts:subscribe\",\n            data: {\n                channel: \"order_book_btcusd\"\n            }\n        };\n        websocket_orderbook.onopen = () => { websocket_orderbook.send(JSON.stringify(message_bookorder)); };\n        websocket_orderbook.onmessage = (evt) => {\n            if (window.location.hash === '#realtime-component') {\n                var obj = JSON.parse(evt.data);\n                if (obj.data.bids !== undefined && obj.data.asks !== undefined) {\n                    obj.data.bids.slice(0, 10).forEach((el, i) => {\n                        this.bidsArr[i].subscribe(el[0] + '&nbsp;&nbsp;&nbsp;&nbsp;    ' + el[1]);\n                    });\n                    obj.data.asks.slice(0, 10).reverse().forEach((el, i) => {\n                        this.asksArr[i].subscribe(el[0] + ' &nbsp;&nbsp;&nbsp;&nbsp;    ' + el[1]);\n                    });\n                }\n            }\n            else {\n                websocket_orderbook.close();\n            }\n        };\n    }\n}\nnew OrderbookComponent();\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/components/realtime/orderbook/orderbook.component.ts?");

/***/ }),

/***/ "./app/observable.ts":
/*!***************************!*\
  !*** ./app/observable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Observable\": () => (/* binding */ Observable)\n/* harmony export */ });\nclass Observable {\n    constructor(data) {\n        this._data = {\n            set current(a) {\n                if (document.querySelector(\"[bind-text='\" + data + \"']\") != undefined) {\n                    document.querySelector(\"[bind-text='\" + data + \"']\").innerHTML = a;\n                }\n                else if (document.querySelector(\"[bind-class='\" + data + \"']\") != undefined) {\n                    if (document.querySelector(\"[bind-class='\" + data + \"']\").classList != undefined) {\n                        document.querySelector(\"[bind-class='\" + data + \"']\").className = a;\n                    }\n                    else {\n                        document.querySelector(\"[bind-class='\" + data + \"']\").classList.add = a;\n                    }\n                }\n            }\n        };\n    }\n    subscribe(param) {\n        this._data.current = param;\n    }\n}\n\n\n//# sourceURL=webpack://vanilla_spa_framework/./app/observable.ts?");

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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/components/realtime/orderbook/orderbook.component.ts");
/******/ 	
/******/ })()
;