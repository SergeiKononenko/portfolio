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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/blog.js":
/*!************************************!*\
  !*** ./src/assets/scripts/blog.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar blogList = document.querySelector(\".blog__list\");\nvar articles = document.querySelectorAll(\".article\");\nvar links = document.querySelectorAll(\".blog__link\");\n\nlinks[0].parentElement.classList.add(\"blog__item--active\");\n\nfunction windowScroller(reqmove, duration) {\n  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;\n  window.requestAnimationFrame = requestAnimationFrame;\n\n  var scrollHeight = window.scrollY;\n  var diffY = scrollHeight < reqmove ? reqmove - scrollHeight : -1 * (scrollHeight - reqmove);\n\n  var animate = function animate(draw, duration) {\n    var start = performance.now();\n    requestAnimationFrame(function move(time) {\n      var timePassed = time - start;\n      if (timePassed > duration) timePassed = duration;\n      draw(timePassed);\n      if (timePassed < duration) requestAnimationFrame(move);\n    });\n  };\n\n  animate(function (timePassed) {\n    window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1));\n  }, duration);\n}\n\nfunction fixed() {\n  if (blogList.parentElement.getBoundingClientRect().top <= 0) {\n    blogList.classList.remove(\"blog__list--absolute\");\n    blogList.classList.add(\"blog__list--fixed\");\n  } else {\n    blogList.classList.remove(\"blog__list--fixed\");\n    blogList.classList.add(\"blog__list--absolute\");\n  };\n}\n\nfunction checkCurrentArticle() {\n  for (var i = 0; i < articles.length; i++) {\n    if (articles[i].getBoundingClientRect().y < 50 && articles[i].getBoundingClientRect().y > -articles[i].getBoundingClientRect().height) {\n      var prevArticle = links[i].parentElement.previousElementSibling;\n      var nextArticle = links[i].parentElement.nextElementSibling;\n\n      if (prevArticle) {\n        prevArticle.classList.remove(\"blog__item--active\");\n      }\n      if (nextArticle) {\n        nextArticle.classList.remove(\"blog__item--active\");\n      }\n\n      links[i].parentElement.classList.add(\"blog__item--active\");\n    }\n  }\n}\n\nfunction toArticle(name) {\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var item = _step.value;\n\n      if (name === item.dataset.name) {\n        var scrollPos = item.getBoundingClientRect().top + window.scrollY;\n        windowScroller(scrollPos, 300);\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nblogList.addEventListener(\"click\", function (e) {\n  e.preventDefault();\n  if (e.target.classList.contains(\"blog__link\") && !e.target.parentElement.classList.contains(\"blog__item--active\")) {\n    toArticle(e.target.getAttribute(\"data-name\"));\n  }\n});\n\nfixed();\n\nwindow.addEventListener(\"scroll\", function (e) {\n  fixed();\n  checkCurrentArticle();\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcz82OWU5Il0sIm5hbWVzIjpbImJsb2dMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXJ0aWNsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlua3MiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93U2Nyb2xsZXIiLCJyZXFtb3ZlIiwiZHVyYXRpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aW5kb3ciLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInNjcm9sbEhlaWdodCIsInNjcm9sbFkiLCJkaWZmWSIsImFuaW1hdGUiLCJkcmF3Iiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm1vdmUiLCJ0aW1lIiwidGltZVBhc3NlZCIsInNjcm9sbCIsIk1hdGgiLCJtaW4iLCJmaXhlZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInJlbW92ZSIsImNoZWNrQ3VycmVudEFydGljbGUiLCJpIiwibGVuZ3RoIiwieSIsImhlaWdodCIsInByZXZBcnRpY2xlIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsIm5leHRBcnRpY2xlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9BcnRpY2xlIiwibmFtZSIsIml0ZW0iLCJkYXRhc2V0Iiwic2Nyb2xsUG9zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNvbnRhaW5zIiwiZ2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7QUFDQSxJQUFNQyxXQUFXRixTQUFTRyxnQkFBVCxDQUEwQixVQUExQixDQUFqQjtBQUNBLElBQU1DLFFBQVFKLFNBQVNHLGdCQUFULENBQTBCLGFBQTFCLENBQWQ7O0FBRUFDLE1BQU0sQ0FBTixFQUFTQyxhQUFULENBQXVCQyxTQUF2QixDQUFpQ0MsR0FBakMsQ0FBcUMsb0JBQXJDOztBQUVBLFNBQVNDLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxRQUFqQyxFQUEyQztBQUN6QyxNQUFNQyx3QkFDSkMsT0FBT0QscUJBQVAsSUFDQUMsT0FBT0Msd0JBRFAsSUFFQUQsT0FBT0UsMkJBRlAsSUFHQUYsT0FBT0csdUJBSlQ7QUFLQUgsU0FBT0QscUJBQVAsR0FBK0JBLHFCQUEvQjs7QUFFQSxNQUFNSyxlQUFlSixPQUFPSyxPQUE1QjtBQUNBLE1BQU1DLFFBQ0pGLGVBQWVQLE9BQWYsR0FDSUEsVUFBVU8sWUFEZCxHQUVJLENBQUMsQ0FBRCxJQUFNQSxlQUFlUCxPQUFyQixDQUhOOztBQUtBLE1BQU1VLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9WLFFBQVAsRUFBb0I7QUFDbEMsUUFBTVcsUUFBUUMsWUFBWUMsR0FBWixFQUFkO0FBQ0FaLDBCQUFzQixTQUFTYSxJQUFULENBQWNDLElBQWQsRUFBb0I7QUFDeEMsVUFBSUMsYUFBYUQsT0FBT0osS0FBeEI7QUFDQSxVQUFJSyxhQUFhaEIsUUFBakIsRUFBMkJnQixhQUFhaEIsUUFBYjtBQUMzQlUsV0FBS00sVUFBTDtBQUNBLFVBQUlBLGFBQWFoQixRQUFqQixFQUEyQkMsc0JBQXNCYSxJQUF0QjtBQUM1QixLQUxEO0FBTUQsR0FSRDs7QUFVQUwsVUFBUSxzQkFBYztBQUNwQlAsV0FBT2UsTUFBUCxDQUFjLENBQWQsRUFBaUJYLGVBQWVFLFFBQVFVLEtBQUtDLEdBQUwsQ0FBU0gsYUFBYWhCLFFBQXRCLEVBQWdDLENBQWhDLENBQXhDO0FBQ0QsR0FGRCxFQUVHQSxRQUZIO0FBR0Q7O0FBR0QsU0FBU29CLEtBQVQsR0FBaUI7QUFDZixNQUFJL0IsU0FBU00sYUFBVCxDQUF1QjBCLHFCQUF2QixHQUErQ0MsR0FBL0MsSUFBc0QsQ0FBMUQsRUFBNkQ7QUFDM0RqQyxhQUFTTyxTQUFULENBQW1CMkIsTUFBbkIsQ0FBMEIsc0JBQTFCO0FBQ0FsQyxhQUFTTyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixtQkFBdkI7QUFFRCxHQUpELE1BSU87QUFDTFIsYUFBU08sU0FBVCxDQUFtQjJCLE1BQW5CLENBQTBCLG1CQUExQjtBQUNBbEMsYUFBU08sU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsc0JBQXZCO0FBQ0Q7QUFDRjs7QUFFQSxTQUFTMkIsbUJBQVQsR0FBK0I7QUFDN0IsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlqQyxTQUFTa0MsTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3hDLFFBQ0tqQyxTQUFTaUMsQ0FBVCxFQUFZSixxQkFBWixHQUFvQ00sQ0FBcEMsR0FBd0MsRUFBeEMsSUFDQW5DLFNBQVNpQyxDQUFULEVBQVlKLHFCQUFaLEdBQW9DTSxDQUFwQyxHQUNFLENBQUNuQyxTQUFTaUMsQ0FBVCxFQUFZSixxQkFBWixHQUFvQ08sTUFINUMsRUFJSztBQUNBLFVBQU1DLGNBQWNuQyxNQUFNK0IsQ0FBTixFQUFTOUIsYUFBVCxDQUF1Qm1DLHNCQUEzQztBQUNBLFVBQU1DLGNBQWNyQyxNQUFNK0IsQ0FBTixFQUFTOUIsYUFBVCxDQUF1QnFDLGtCQUEzQzs7QUFFQSxVQUFJSCxXQUFKLEVBQWlCO0FBQ2ZBLG9CQUFZakMsU0FBWixDQUFzQjJCLE1BQXRCLENBQTZCLG9CQUE3QjtBQUNEO0FBQ0QsVUFBSVEsV0FBSixFQUFpQjtBQUNmQSxvQkFBWW5DLFNBQVosQ0FBc0IyQixNQUF0QixDQUE2QixvQkFBN0I7QUFDRDs7QUFFRDdCLFlBQU0rQixDQUFOLEVBQVM5QixhQUFULENBQXVCQyxTQUF2QixDQUFpQ0MsR0FBakMsQ0FBcUMsb0JBQXJDO0FBQ0Q7QUFDTDtBQUNGOztBQUVGLFNBQVNvQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN2Qix5QkFBaUIxQyxRQUFqQiw4SEFBMkI7QUFBQSxVQUFsQjJDLElBQWtCOztBQUN6QixVQUFJRCxTQUFTQyxLQUFLQyxPQUFMLENBQWFGLElBQTFCLEVBQWdDO0FBQzlCLFlBQUlHLFlBQVlGLEtBQUtkLHFCQUFMLEdBQTZCQyxHQUE3QixHQUFtQ3BCLE9BQU9LLE9BQTFEO0FBQ0FULHVCQUFldUMsU0FBZixFQUEwQixHQUExQjtBQUNEO0FBQ0Y7QUFOc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU94Qjs7QUFFRGhELFNBQVNpRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxhQUFLO0FBQ3RDQyxJQUFFQyxjQUFGO0FBQ0EsTUFBSUQsRUFBRUUsTUFBRixDQUFTN0MsU0FBVCxDQUFtQjhDLFFBQW5CLENBQTRCLFlBQTVCLEtBQTZDLENBQUNILEVBQUVFLE1BQUYsQ0FBUzlDLGFBQVQsQ0FBdUJDLFNBQXZCLENBQWlDOEMsUUFBakMsQ0FBMEMsb0JBQTFDLENBQWxELEVBQW1IO0FBQ2pIVCxjQUFVTSxFQUFFRSxNQUFGLENBQVNFLFlBQVQsQ0FBc0IsV0FBdEIsQ0FBVjtBQUNEO0FBQ0YsQ0FMRDs7QUFPQXZCOztBQUVBbEIsT0FBT29DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLGFBQUs7QUFDckNsQjtBQUNBSTtBQUNELENBSEQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJsb2dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nX19saXN0XCIpO1xyXG5jb25zdCBhcnRpY2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXJ0aWNsZVwiKTtcclxuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2dfX2xpbmtcIik7XHJcblxyXG5saW5rc1swXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nX19pdGVtLS1hY3RpdmVcIik7XHJcblxyXG5mdW5jdGlvbiB3aW5kb3dTY3JvbGxlcihyZXFtb3ZlLCBkdXJhdGlvbikge1xyXG4gIGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZSA9XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxuICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lXHJcblxyXG4gIGNvbnN0IHNjcm9sbEhlaWdodCA9IHdpbmRvdy5zY3JvbGxZXHJcbiAgY29uc3QgZGlmZlkgPVxyXG4gICAgc2Nyb2xsSGVpZ2h0IDwgcmVxbW92ZVxyXG4gICAgICA/IHJlcW1vdmUgLSBzY3JvbGxIZWlnaHRcclxuICAgICAgOiAtMSAqIChzY3JvbGxIZWlnaHQgLSByZXFtb3ZlKVxyXG5cclxuICBjb25zdCBhbmltYXRlID0gKGRyYXcsIGR1cmF0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gbW92ZSh0aW1lKSB7XHJcbiAgICAgIGxldCB0aW1lUGFzc2VkID0gdGltZSAtIHN0YXJ0XHJcbiAgICAgIGlmICh0aW1lUGFzc2VkID4gZHVyYXRpb24pIHRpbWVQYXNzZWQgPSBkdXJhdGlvblxyXG4gICAgICBkcmF3KHRpbWVQYXNzZWQpXHJcbiAgICAgIGlmICh0aW1lUGFzc2VkIDwgZHVyYXRpb24pIHJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFuaW1hdGUodGltZVBhc3NlZCA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKDAsIHNjcm9sbEhlaWdodCArIGRpZmZZICogTWF0aC5taW4odGltZVBhc3NlZCAvIGR1cmF0aW9uLCAxKSlcclxuICB9LCBkdXJhdGlvbilcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZpeGVkKCkge1xyXG4gIGlmIChibG9nTGlzdC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8PSAwKSB7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZ19fbGlzdC0tYWJzb2x1dGVcIik7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QuYWRkKFwiYmxvZ19fbGlzdC0tZml4ZWRcIik7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QucmVtb3ZlKFwiYmxvZ19fbGlzdC0tZml4ZWRcIik7XHJcbiAgICBibG9nTGlzdC5jbGFzc0xpc3QuYWRkKFwiYmxvZ19fbGlzdC0tYWJzb2x1dGVcIik7XHJcbiAgfTtcclxufVxyXG5cclxuIGZ1bmN0aW9uIGNoZWNrQ3VycmVudEFydGljbGUoKSB7XHJcbiAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICBpZiAoXHJcbiAgICAgICAgICBhcnRpY2xlc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IDwgNTAgJiZcclxuICAgICAgICAgIGFydGljbGVzW2ldLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPlxyXG4gICAgICAgICAgICAtYXJ0aWNsZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2QXJ0aWNsZSA9IGxpbmtzW2ldLnBhcmVudEVsZW1lbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICAgIGNvbnN0IG5leHRBcnRpY2xlID0gbGlua3NbaV0ucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG4gICAgICAgICAgaWYgKHByZXZBcnRpY2xlKSB7XHJcbiAgICAgICAgICAgIHByZXZBcnRpY2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJibG9nX19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAobmV4dEFydGljbGUpIHtcclxuICAgICAgICAgICAgbmV4dEFydGljbGUuY2xhc3NMaXN0LnJlbW92ZShcImJsb2dfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaW5rc1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nX19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICB9XHJcbiB9XHJcblxyXG5mdW5jdGlvbiB0b0FydGljbGUobmFtZSkge1xyXG4gIGZvciAobGV0IGl0ZW0gb2YgYXJ0aWNsZXMpIHtcclxuICAgIGlmIChuYW1lID09PSBpdGVtLmRhdGFzZXQubmFtZSkge1xyXG4gICAgICBsZXQgc2Nyb2xsUG9zID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICB3aW5kb3dTY3JvbGxlcihzY3JvbGxQb3MsIDMwMClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJsb2dMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJsb2dfX2xpbmtcIikgJiYgIWUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYmxvZ19faXRlbS0tYWN0aXZlXCIpKSB7XHJcbiAgICB0b0FydGljbGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZml4ZWQoKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGUgPT4ge1xyXG4gIGZpeGVkKCk7XHJcbiAgY2hlY2tDdXJyZW50QXJ0aWNsZSgpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/blog.js\n");

/***/ })

/******/ });