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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/preloader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/preloader.js":
/*!*****************************************!*\
  !*** ./src/assets/scripts/preloader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  preloader().loaded();\n});\nfunction preloader() {\n  var loader = document.querySelector(\".preloader\");\n  var images = document.querySelectorAll(\"img\");\n  var wrapper = document.querySelector(\".wrapper\");\n  var preloaderProgress = document.querySelector(\".preloader__text\");\n  wrapper.style.height = \"100%\";\n\n  var percent = 0;\n  var step = 100 / images.length;\n\n  function percentTick(end, imgLoaded) {\n    var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    if (start <= end) {\n      setTimeout(function () {\n        percent = percent < 100 ? ++percent : 100;\n        preloaderProgress.textContent = \"\" + percent;\n        percentTick(end, imgLoaded, start + 1);\n      }, 10);\n    }\n    if (imgLoaded === images.length && percent === 100) {\n      wrapper.style.height = \"\";\n      loader.classList.add(\"hide\");\n    }\n  }\n  return {\n    loaded: function loaded() {\n      var imgLoaded = 0;\n      if (images.length === 0) {\n        wrapper.style.height = \"\";\n        loader.classList.add(\"hide\");\n        return;\n      }\n\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n\n          var shadowImg = new Image();\n          shadowImg.onload = function (e) {\n            imgLoaded++;\n            percentTick(step, imgLoaded);\n          };\n          shadowImg.src = item.getAttribute(\"src\");\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator.return) {\n            _iterator.return();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  };\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvcHJlbG9hZGVyLmpzPzMwM2QiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicHJlbG9hZGVyIiwibG9hZGVkIiwibG9hZGVyIiwicXVlcnlTZWxlY3RvciIsImltYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3cmFwcGVyIiwicHJlbG9hZGVyUHJvZ3Jlc3MiLCJzdHlsZSIsImhlaWdodCIsInBlcmNlbnQiLCJzdGVwIiwibGVuZ3RoIiwicGVyY2VudFRpY2siLCJlbmQiLCJpbWdMb2FkZWQiLCJzdGFydCIsInNldFRpbWVvdXQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsIml0ZW0iLCJzaGFkb3dJbWciLCJJbWFnZSIsIm9ubG9hZCIsInNyYyIsImdldEF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFDQUEsU0FBU0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLGFBQUs7QUFDakRDLGNBQVlDLE1BQVo7QUFDQSxDQUZGO0FBR0EsU0FBU0QsU0FBVCxHQUFxQjtBQUNqQixNQUFNRSxTQUFTSixTQUFTSyxhQUFULENBQXVCLFlBQXZCLENBQWY7QUFDQSxNQUFNQyxTQUFTTixTQUFTTyxnQkFBVCxDQUEwQixLQUExQixDQUFmO0FBQ0EsTUFBTUMsVUFBVVIsU0FBU0ssYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLE1BQU1JLG9CQUFvQlQsU0FBU0ssYUFBVCxDQUF1QixrQkFBdkIsQ0FBMUI7QUFDQUcsVUFBUUUsS0FBUixDQUFjQyxNQUFkLEdBQXVCLE1BQXZCOztBQUVBLE1BQUlDLFVBQVUsQ0FBZDtBQUNBLE1BQU1DLE9BQU8sTUFBTVAsT0FBT1EsTUFBMUI7O0FBRUEsV0FBU0MsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEJDLFNBQTFCLEVBQWdEO0FBQUEsUUFBWEMsS0FBVyx1RUFBSCxDQUFHOztBQUM5QyxRQUFJQSxTQUFTRixHQUFiLEVBQWtCO0FBQ2hCRyxpQkFBVyxZQUFNO0FBQ2ZQLGtCQUFVQSxVQUFVLEdBQVYsR0FBZ0IsRUFBRUEsT0FBbEIsR0FBNEIsR0FBdEM7QUFDQUgsMEJBQWtCVyxXQUFsQixRQUFtQ1IsT0FBbkM7QUFDQUcsb0JBQVlDLEdBQVosRUFBaUJDLFNBQWpCLEVBQTRCQyxRQUFRLENBQXBDO0FBQ0QsT0FKRCxFQUlHLEVBSkg7QUFLRDtBQUNELFFBQUlELGNBQWNYLE9BQU9RLE1BQXJCLElBQStCRixZQUFZLEdBQS9DLEVBQW9EO0FBQ2xESixjQUFRRSxLQUFSLENBQWNDLE1BQWQsR0FBdUIsRUFBdkI7QUFDQVAsYUFBT2lCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0Q7QUFDRjtBQUNELFNBQU87QUFDTG5CLFVBREssb0JBQ0k7QUFDUCxVQUFJYyxZQUFZLENBQWhCO0FBQ0EsVUFBSVgsT0FBT1EsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qk4sZ0JBQVFFLEtBQVIsQ0FBY0MsTUFBZCxHQUF1QixFQUF2QjtBQUNBUCxlQUFPaUIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsTUFBckI7QUFDQTtBQUNEOztBQU5NO0FBQUE7QUFBQTs7QUFBQTtBQVFQLDZCQUFpQmhCLE1BQWpCLDhIQUF5QjtBQUFBLGNBQWhCaUIsSUFBZ0I7O0FBQ3ZCLGNBQU1DLFlBQVksSUFBSUMsS0FBSixFQUFsQjtBQUNBRCxvQkFBVUUsTUFBVixHQUFtQixhQUFLO0FBQ3RCVDtBQUNBRix3QkFBWUYsSUFBWixFQUFrQkksU0FBbEI7QUFDRCxXQUhEO0FBSUFPLG9CQUFVRyxHQUFWLEdBQWdCSixLQUFLSyxZQUFMLENBQWtCLEtBQWxCLENBQWhCO0FBQ0Q7QUFmTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JSO0FBakJJLEdBQVA7QUFtQkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvcHJlbG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGUgPT4ge1xyXG4gIHByZWxvYWRlcigpLmxvYWRlZCgpO1xyXG4gfSk7XHJcbmZ1bmN0aW9uIHByZWxvYWRlcigpIHtcclxuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKTtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XHJcbiAgICBjb25zdCBwcmVsb2FkZXJQcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyX190ZXh0XCIpO1xyXG4gICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICBcclxuICAgIGxldCBwZXJjZW50ID0gMDtcclxuICAgIGNvbnN0IHN0ZXAgPSAxMDAgLyBpbWFnZXMubGVuZ3RoO1xyXG4gIFxyXG4gICAgZnVuY3Rpb24gcGVyY2VudFRpY2soZW5kLCBpbWdMb2FkZWQsIHN0YXJ0ID0gMCkge1xyXG4gICAgICBpZiAoc3RhcnQgPD0gZW5kKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBwZXJjZW50ID0gcGVyY2VudCA8IDEwMCA/ICsrcGVyY2VudCA6IDEwMDtcclxuICAgICAgICAgIHByZWxvYWRlclByb2dyZXNzLnRleHRDb250ZW50ID0gYCR7cGVyY2VudH1gO1xyXG4gICAgICAgICAgcGVyY2VudFRpY2soZW5kLCBpbWdMb2FkZWQsIHN0YXJ0ICsgMSk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbWdMb2FkZWQgPT09IGltYWdlcy5sZW5ndGggJiYgcGVyY2VudCA9PT0gMTAwKSB7XHJcbiAgICAgICAgd3JhcHBlci5zdHlsZS5oZWlnaHQgPSBcIlwiO1xyXG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbG9hZGVkKCkge1xyXG4gICAgICAgIGxldCBpbWdMb2FkZWQgPSAwO1xyXG4gICAgICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB3cmFwcGVyLnN0eWxlLmhlaWdodCA9IFwiXCI7XHJcbiAgICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaW1hZ2VzKSB7XHJcbiAgICAgICAgICBjb25zdCBzaGFkb3dJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgIHNoYWRvd0ltZy5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICAgICAgaW1nTG9hZGVkKys7XHJcbiAgICAgICAgICAgIHBlcmNlbnRUaWNrKHN0ZXAsIGltZ0xvYWRlZCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgc2hhZG93SW1nLnNyYyA9IGl0ZW0uZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/preloader.js\n");

/***/ })

/******/ });