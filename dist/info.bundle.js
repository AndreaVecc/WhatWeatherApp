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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/info.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return info; });\nfunction info(data) {\r\n    city.textContent = data.location.name;\r\n    time.textContent = data.location.localtime;\r\n    temp.textContent = data.current.temp_c + ' °'\r\n    main.style.display = 'flex';\r\n\r\n    // Features\r\n    humidity.textContent = ' Umidita\\': ' + data.current.humidity + '%';\r\n    gust.textContent = 'Velocita\\' vento: ' + data.current.gust_kph + ' Km/h';\r\n    pression.textContent = 'Pressone: ' + data.current.pressure_in + ' mbar';\r\n\r\n    // Condition\r\n    if (data.current.condition.text === 'Sunny' || data.current.condition.text === 'Clear') {\r\n        clear.style.display = 'block';\r\n        cloud.style.display = 'none';\r\n        overcast.style.display = 'none';\r\n        rain.style.display = 'none';\r\n    } else if (data.current.condition.text === 'Partly cloudy') {\r\n        clear.style.display = 'none';\r\n        cloud.style.display = 'block';\r\n        overcast.style.display = 'none';\r\n        rain.style.display = 'none';\r\n    } else if (data.current.condition.text === 'Overcast' || data.current.condition.text === 'Patchy rain possible') {\r\n        clear.style.display = 'none';\r\n        cloud.style.display = 'none';\r\n        overcast.style.display = 'block';\r\n        rain.style.display = 'none';\r\n    } else if (data.current.condition.text === 'Moderate or heavy rain with thunder' || data.current.condition.text === 'Light rain' || data.current.condition.text === 'Moderate rain at times') {\r\n        clear.style.display = 'none';\r\n        cloud.style.display = 'none';\r\n        overcast.style.display = 'none';\r\n        rain.style.display = 'block';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/info.js?");

/***/ })

/******/ });