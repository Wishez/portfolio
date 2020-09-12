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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// 1. Open cache\n// 2. Cache files\n// 3. Confirm whether all the requored assets are cached or not\n\nvar CACHE_NAME = 'shining-present-cache-v1';\nvar staticCssPath = '/static/portfolio/css/';\nvar staticJsPath = '/static/portfolio/js/';\n\nvar urlsToCache = [staticCssPath + 'app.css', staticJsPath + 'app.js'];\n\nself.addEventListener('install', function (e) {\n  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(urlsToCache);\n  }).catch(function (err) {\n    console.log(err, 1);\n  }));\n});\n\nself.addEventListener('fetch', function (e) {\n  e.respondWith(caches.match(e.request).then(function (resp) {\n    if (resp) return resp;\n\n    var fetchRequest = e.request.clone();\n\n    return fetch(fetchRequest).then(function (resp) {\n      if (!resp || resp.status !== 200 || resp.type !== 'basic') {\n        return resp;\n      }\n      var responseToCache = resp.clone();\n\n      caches.open(CACHE_NAME).then(function (cache) {\n        cache.put(e.request, responseToCache);\n      });\n\n      return resp;\n    }).catch(function (err) {\n      console.log(err, 3);\n    });\n  }).catch(function (err) {\n    console.log(err, 2);\n  }));\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9zdy5qcz9kNjZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDEuIE9wZW4gY2FjaGVcbi8vIDIuIENhY2hlIGZpbGVzXG4vLyAzLiBDb25maXJtIHdoZXRoZXIgYWxsIHRoZSByZXF1b3JlZCBhc3NldHMgYXJlIGNhY2hlZCBvciBub3RcblxudmFyIENBQ0hFX05BTUUgPSAnc2hpbmluZy1wcmVzZW50LWNhY2hlLXYxJztcbnZhciBzdGF0aWNDc3NQYXRoID0gJy9zdGF0aWMvcG9ydGZvbGlvL2Nzcy8nO1xudmFyIHN0YXRpY0pzUGF0aCA9ICcvc3RhdGljL3BvcnRmb2xpby9qcy8nO1xuXG52YXIgdXJsc1RvQ2FjaGUgPSBbXG4gIHN0YXRpY0Nzc1BhdGggKyAnYXBwLmNzcycsXG4gIHN0YXRpY0pzUGF0aCArICdhcHAuanMnXG5dO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbihlKSB7XG4gIGUud2FpdFVudGlsKFxuICAgIGNhY2hlc1xuICAgICAgLm9wZW4oQ0FDSEVfTkFNRSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGNhY2hlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5hZGRBbGwodXJsc1RvQ2FjaGUpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCAxKTtcbiAgICAgIH0pXG4gICk7XHRcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZnVuY3Rpb24oZSkge1xuICBlLnJlc3BvbmRXaXRoKFxuICAgIGNhY2hlcy5tYXRjaChlLnJlcXVlc3QpXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgIGlmIChyZXNwKSBcbiAgICAgICAgICByZXR1cm4gcmVzcDtcblxuICAgICAgICB2YXIgZmV0Y2hSZXF1ZXN0ID0gZS5yZXF1ZXN0LmNsb25lKCk7XG5cbiAgICAgICAgcmV0dXJuIGZldGNoKGZldGNoUmVxdWVzdClcbiAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgICBpZighcmVzcCB8fCByZXNwLnN0YXR1cyAhPT0gMjAwIHx8IHJlc3AudHlwZSAhPT0gJ2Jhc2ljJykge1xuXHRcdFx0ICAgICAgICAgICAgICByZXR1cm4gcmVzcDtcblx0XHRcdCAgICAgICAgICAgIH1cblx0XHRcdCAgICAgICAgICAgIHZhciByZXNwb25zZVRvQ2FjaGUgPSByZXNwLmNsb25lKCk7XG5cdFx0XHQgICAgICAgICAgICBcbiAgICAgICAgICAgIGNhY2hlcy5vcGVuKENBQ0hFX05BTUUpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGNhY2hlKSB7XG4gICAgICAgICAgICAgICAgY2FjaGUucHV0KGUucmVxdWVzdCwgcmVzcG9uc2VUb0NhY2hlKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLCAzKTtcbiAgICAgICAgICB9KTtcblxuXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDIpO1xuICAgICAgfSlcbiAgKTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9zdy5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///125\n");

/***/ })

/******/ });