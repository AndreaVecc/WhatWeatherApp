/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.png */ \"./src/background.png\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_background_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* :root {\\r\\n    filter: invert(100%);\\r\\n}   FIGATA */\\r\\n\\r\\n* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-size: cover;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    color: white;\\r\\n    margin-bottom: .5em;\\r\\n    font-weight: bold;\\r\\n    letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.row {\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n#selection {\\r\\n    width: 20%;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\ninput {\\r\\n    margin-bottom: 4em;\\r\\n    border: none;\\r\\n    line-height: 35px;\\r\\n    border-radius: 10px;\\r\\n    padding: 0 1em;\\r\\n    margin-right: .3em;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    width: 20%;\\r\\n    height: 35px;\\r\\n    border: none;\\r\\n    border-radius: 7px;\\r\\n    color: #f2f2f2;\\r\\n    background-color: #00cccc;\\r\\n}\\r\\n\\r\\n#main {\\r\\n    width: 30%;\\r\\n    background-color: #ffff;\\r\\n    border-radius: 20px;\\r\\n    padding: 1em 2em;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.material-icons {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n/* ICONS */\\r\\n\\r\\n#cloud {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n\\r\\n#clear {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n\\r\\n#overcast {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n#rain {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n    margin-left: 10px;\\r\\n}\\r\\n/* ---------------------- */\\r\\n\\r\\n\\r\\n#city-div {\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\nhr {\\r\\n    width: 70%;\\r\\n    background-color: #f2f2f2;\\r\\n}\\r\\n\\r\\nh5 {\\r\\n    letter-spacing: 0px;\\r\\n    line-height: 40px;\\r\\n}\\r\\n\\r\\n#city {\\r\\n    font-weight: bold;\\r\\n    letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n#temp {\\r\\n    font-weight: bold;\\r\\n    letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.icon-features {\\r\\n    width: 32px;\\r\\n    height: 32px;\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n@media only screen and (max-width: 1024px) {\\r\\n\\r\\n    body {\\r\\n        padding: 0 1em;\\r\\n        width: 100%;\\r\\n    }\\r\\n\\r\\n    #selection {\\r\\n        width: 100%;\\r\\n        padding: 0 2em;\\r\\n    }\\r\\n    \\r\\n    #main {\\r\\n        width: 90%;\\r\\n        padding: 1em;\\r\\n    }\\r\\n\\r\\n    h2 {\\r\\n        font-size: 1.3em;\\r\\n    }\\r\\n\\r\\n    #city {\\r\\n        letter-spacing: 1px;\\r\\n    }\\r\\n\\r\\n    #temp {\\r\\n        font-size: 1.1em;\\r\\n        letter-spacing: 1px;\\r\\n    }\\r\\n\\r\\n    h3 {\\r\\n        font-size: 1em;\\r\\n    }\\r\\n\\r\\n    h5 {\\r\\n        font-size: 1em;\\r\\n    }\\r\\n\\r\\n    button {\\r\\n        width: 100%;\\r\\n        padding: 0 1em;\\r\\n    }\\r\\n\\r\\n    input {\\r\\n        margin-bottom: 3em;\\r\\n        width: 200%;\\r\\n    }\\r\\n\\r\\n    #clear {\\r\\n        margin-left: 5px;\\r\\n    }\\r\\n\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/background.png":
/*!****************************!*\
  !*** ./src/background.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8822153aae32bac2226ad84accb4e580.png\");\n\n//# sourceURL=webpack:///./src/background.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n\r\n\r\n\r\nconst input = document.querySelector('input');\r\nconst btn = document.querySelector('button');\r\nconst city = document.querySelector('#city');\r\nconst time = document.querySelector('#time');\r\nconst temp = document.querySelector('#temp');\r\nconst main = document.querySelector('#main');\r\nconst humidity = document.querySelector('#humidity');\r\nconst gust = document.querySelector('#gust');\r\nconst pression = document.querySelector('#pression');\r\nconst overcast = document.querySelector('#overcast'); \r\n\r\n// ICONS\r\n\r\nconst sun = document.querySelector('#sun');\r\nconst cloud = document.querySelector('#cloud');\r\nconst clear = document.querySelector('#clear');\r\nconst rain = document.querySelector('#rain');\r\n\r\nwindow.addEventListener('load', () => {   // Al caricamento della pagina esegue lo script che restituisce le info sulla position corrente\r\n    let long;\r\n    let lat;\r\n\r\n    if (navigator.geolocation) {\r\n        navigator.geolocation.getCurrentPosition(position => {\r\n            long = position.coords.longitude;\r\n            lat = position.coords.latitude;\r\n\r\n            fetch(`https://api.weatherapi.com/v1/current.json?key=7ec877ac8fcd40be90502612200609&q=${lat},${long}`)\r\n            .then((response) => {\r\n                return response.json();\r\n            })\r\n            .then((data) => {\r\n                Object(_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n            }).catch((err) => console('Qualcosa e\\' andato storto'))\r\n        })\r\n    }\r\n    \r\n})\r\n\r\nbtn.addEventListener('click', () => {\r\n\r\n    fetch('https://api.weatherapi.com/v1/current.json?key=7ec877ac8fcd40be90502612200609&q='+ input.value)\r\n    .then((response) => {\r\n        return response.json();\r\n    })\r\n    .then((data) => {\r\n        Object(_info__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\r\n        input.value = '';\r\n    })\r\n    .catch((error) => {\r\n        console.error('Errore');\r\n    })\r\n    \r\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return info; });\nfunction info(data) {\r\n    city.textContent = data.location.name;\r\n    time.textContent = data.location.localtime;\r\n    temp.textContent = data.current.temp_c + ' °'\r\n    main.style.display = 'flex';\r\n\r\n    // Features\r\n    humidity.textContent = ' Umidita\\': ' + data.current.humidity + '%';\r\n    gust.textContent = 'Velocita\\' vento: ' + data.current.gust_kph + ' Km/h';\r\n    pression.textContent = 'Pressone: ' + data.current.pressure_in + ' mbar';\r\n\r\n    // Condition\r\n    if (data.current.condition.text === 'Sunny' || data.current.condition.text === 'Clear') {\r\n        clear.style.display = 'block';\r\n        cloud.style.display = 'none';\r\n        overcast.style.display = 'none';\r\n        rain.style.display = 'none';\r\n    } else if (data.current.condition.text === 'Partly cloudy') {\r\n        clear.style.display = 'none';\r\n        cloud.style.display = 'block';\r\n        overcast.style.display = 'none';\r\n        rain.style.display = 'none';\r\n    } else if (data.current.condition.text === 'Overcast' || data.current.condition.text === 'Patchy rain possible') {\r\n        clear.style.display = 'none';\r\n        cloud.style.display = 'none';\r\n        overcast.style.display = 'block';\r\n        rain.style.display = 'none';\r\n    } else if (data.current.condition.text === 'Moderate or heavy rain with thunder' || data.current.condition.text === 'Light rain' || data.current.condition.text === 'Moderate rain at times') {\r\n        clear.style.display = 'none';\r\n        cloud.style.display = 'none';\r\n        overcast.style.display = 'none';\r\n        rain.style.display = 'block';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/info.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });