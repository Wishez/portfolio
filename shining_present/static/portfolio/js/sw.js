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
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sw.js":
/*!***************!*\
  !*** ./sw.js ***!
  \***************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 1. Open cache\n// 2. Cache files\n// 3. Confirm whether all the requored assets are cached or not\nvar CACHE_NAME = 'shining-present-cache-v1';\nvar staticCssPath = '/static/portfolio/css/';\nvar staticJsPath = '/static/portfolio/js/';\nvar urlsToCache = [staticCssPath + 'app.css', staticJsPath + 'app.js'];\nself.addEventListener('install', function (e) {\n  e.waitUntil(caches.open(CACHE_NAME).then(function (cache) {\n    return cache.addAll(urlsToCache);\n  })[\"catch\"](function (err) {\n    console.log(err, 1);\n  }));\n});\nself.addEventListener('fetch', function (e) {\n  e.respondWith(caches.match(e.request).then(function (resp) {\n    if (resp) return resp;\n    var fetchRequest = e.request.clone();\n    return fetch(fetchRequest).then(function (resp) {\n      if (!resp || resp.status !== 200 || resp.type !== 'basic') {\n        return resp;\n      }\n\n      var responseToCache = resp.clone();\n      caches.open(CACHE_NAME).then(function (cache) {\n        cache.put(e.request, responseToCache);\n      });\n      return resp;\n    })[\"catch\"](function (err) {\n      console.log(err, 3);\n    });\n  })[\"catch\"](function (err) {\n    console.log(err, 2);\n  }));\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N3LmpzP2Y3ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gMS4gT3BlbiBjYWNoZVxuLy8gMi4gQ2FjaGUgZmlsZXNcbi8vIDMuIENvbmZpcm0gd2hldGhlciBhbGwgdGhlIHJlcXVvcmVkIGFzc2V0cyBhcmUgY2FjaGVkIG9yIG5vdFxuXG52YXIgQ0FDSEVfTkFNRSA9ICdzaGluaW5nLXByZXNlbnQtY2FjaGUtdjEnO1xudmFyIHN0YXRpY0Nzc1BhdGggPSAnL3N0YXRpYy9wb3J0Zm9saW8vY3NzLyc7XG52YXIgc3RhdGljSnNQYXRoID0gJy9zdGF0aWMvcG9ydGZvbGlvL2pzLyc7XG5cbnZhciB1cmxzVG9DYWNoZSA9IFtcbiAgc3RhdGljQ3NzUGF0aCArICdhcHAuY3NzJyxcbiAgc3RhdGljSnNQYXRoICsgJ2FwcC5qcydcbl07XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignaW5zdGFsbCcsIGZ1bmN0aW9uKGUpIHtcbiAgZS53YWl0VW50aWwoXG4gICAgY2FjaGVzXG4gICAgICAub3BlbihDQUNIRV9OQU1FKVxuICAgICAgLnRoZW4oZnVuY3Rpb24oY2FjaGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbCh1cmxzVG9DYWNoZSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDEpO1xuICAgICAgfSlcbiAgKTtcdFxufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBmdW5jdGlvbihlKSB7XG4gIGUucmVzcG9uZFdpdGgoXG4gICAgY2FjaGVzLm1hdGNoKGUucmVxdWVzdClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgaWYgKHJlc3ApIFxuICAgICAgICAgIHJldHVybiByZXNwO1xuXG4gICAgICAgIHZhciBmZXRjaFJlcXVlc3QgPSBlLnJlcXVlc3QuY2xvbmUoKTtcblxuICAgICAgICByZXR1cm4gZmV0Y2goZmV0Y2hSZXF1ZXN0KVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICAgIGlmKCFyZXNwIHx8IHJlc3Auc3RhdHVzICE9PSAyMDAgfHwgcmVzcC50eXBlICE9PSAnYmFzaWMnKSB7XG5cdFx0XHQgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuXHRcdFx0ICAgICAgICAgICAgfVxuXHRcdFx0ICAgICAgICAgICAgdmFyIHJlc3BvbnNlVG9DYWNoZSA9IHJlc3AuY2xvbmUoKTtcblx0XHRcdCAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FjaGVzLm9wZW4oQ0FDSEVfTkFNRSlcbiAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBjYWNoZS5wdXQoZS5yZXF1ZXN0LCByZXNwb25zZVRvQ2FjaGUpO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIDMpO1xuICAgICAgICAgIH0pO1xuXG5cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyciwgMik7XG4gICAgICB9KVxuICApO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sw.js\n");

/***/ })

/******/ });