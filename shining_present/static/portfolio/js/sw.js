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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ({

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 1. Open cache\n// 2. Cache files\n// 3. Confirm whether all the requored assets are cached or not\n\nvar CACHE_NAME = 'shining-present-cache-v1';\nvar staticCssPath = '/static/portfolio/css/';\nvar staticJsPath = '/static/portfolio/js/';\nvar staticFontPath = '/static/portfolio/fonts/';\n\nvar urlsToCache = [staticCssPath + 'app.css', staticJsPath + 'app.js'];\n\nself.addEventListener('install', function (e) {\n  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(urlsToCache);\n  }).catch(function (err) {\n    console.log(err, 1);\n  }));\n});\n\nself.addEventListener('fetch', function (e) {\n  e.respondWith(caches.match(e.request).then(function (resp) {\n    if (resp) return resp;\n\n    var fetchRequest = e.request.clone();\n\n    return fetch(fetchRequest).then(function (resp) {\n      if (!resp || resp.status !== 200 || resp.type !== 'basic') {\n        return resp;\n      }\n      var responseToCache = resp.clone();\n\n      caches.open(CACHE_NAME).then(function (cache) {\n        cache.put(e.request, responseToCache);\n      });\n\n      return resp;\n    }).catch(function (err) {\n      console.log(err, 3);\n    });\n  }).catch(function (err) {\n    console.log(err, 2);\n  }));\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zdy5qcz9kNjZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDEuIE9wZW4gY2FjaGVcclxuLy8gMi4gQ2FjaGUgZmlsZXNcclxuLy8gMy4gQ29uZmlybSB3aGV0aGVyIGFsbCB0aGUgcmVxdW9yZWQgYXNzZXRzIGFyZSBjYWNoZWQgb3Igbm90XHJcblxyXG52YXIgQ0FDSEVfTkFNRSA9ICdzaGluaW5nLXByZXNlbnQtY2FjaGUtdjEnO1xyXG52YXIgc3RhdGljQ3NzUGF0aCA9ICcvc3RhdGljL3BvcnRmb2xpby9jc3MvJztcclxudmFyIHN0YXRpY0pzUGF0aCA9ICcvc3RhdGljL3BvcnRmb2xpby9qcy8nO1xyXG52YXIgc3RhdGljRm9udFBhdGggPSAnL3N0YXRpYy9wb3J0Zm9saW8vZm9udHMvJzsgXHJcblxyXG52YXIgdXJsc1RvQ2FjaGUgPSBbXHJcbiAgc3RhdGljQ3NzUGF0aCArICdhcHAuY3NzJyxcclxuICBzdGF0aWNKc1BhdGggKyAnYXBwLmpzJ1xyXG5dO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZnVuY3Rpb24oZSkge1xyXG4gIGUud2FpdFVudGlsKFxyXG4gICAgY2FjaGVzXHJcbiAgICAgIC5vcGVuKENBQ0hFX05BTUUpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGNhY2hlKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbCh1cmxzVG9DYWNoZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDEpO1xyXG4gICAgICB9KVxyXG4gICk7XHRcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24oZSkge1xyXG4gIGUucmVzcG9uZFdpdGgoXHJcbiAgICBjYWNoZXMubWF0Y2goZS5yZXF1ZXN0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XHJcbiAgICAgICAgaWYgKHJlc3ApIFxyXG4gICAgICAgICAgcmV0dXJuIHJlc3A7XHJcblxyXG4gICAgICAgIHZhciBmZXRjaFJlcXVlc3QgPSBlLnJlcXVlc3QuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoUmVxdWVzdClcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcclxuICAgICAgICAgICAgaWYoIXJlc3AgfHwgcmVzcC5zdGF0dXMgIT09IDIwMCB8fCByZXNwLnR5cGUgIT09ICdiYXNpYycpIHtcclxuXHRcdFx0ICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuXHRcdFx0ICAgICAgICAgICAgfVxyXG5cdFx0XHQgICAgICAgICAgICB2YXIgcmVzcG9uc2VUb0NhY2hlID0gcmVzcC5jbG9uZSgpO1xyXG5cdFx0XHQgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSlcclxuICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihjYWNoZSkge1xyXG4gICAgICAgICAgICAgICAgY2FjaGUucHV0KGUucmVxdWVzdCwgcmVzcG9uc2VUb0NhY2hlKTtcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAzKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDIpO1xyXG4gICAgICB9KVxyXG4gICk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL3N3LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///127\n");

/***/ })

/******/ });