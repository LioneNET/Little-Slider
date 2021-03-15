/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Little-Slider.js":
/*!******************************!*\
  !*** ./src/Little-Slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LittleSlider)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction createSlider(o) {\n  var $element = document.createElement('div');\n  $element.classList.add('little-scale');\n  $element.insertAdjacentHTML('afterbegin', \"\\n\\t\\t\\t<div class=\\\"little-slider-line\\\"></div>\\n\\t\\t\\t<div class=\\\"little-pointer\\\"></div>\\n\\t\");\n  return $element;\n}\n\nvar LittleSlider = /*#__PURE__*/function () {\n  function LittleSlider(el) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, LittleSlider);\n\n    this.x1 = 0;\n    this.x2 = 0;\n    this.options = options;\n    this.max = options.max || 100;\n    this.min = options.min || 0;\n    this.value = typeof options.value === 'number' ? options.value : this.min;\n    this.step = options.step || 1;\n    this.currentValue = 0;\n    this.$element = createSlider();\n    this.$sliderLine = this.$element.querySelector('.little-slider-line');\n    this.$pointer = this.$element.querySelector('.little-pointer');\n    document.querySelector(el).appendChild(this.$element);\n    this.pointerWidth = this.$pointer.offsetWidth;\n    this.pointToMiddle = this.pointerWidth / 2;\n    this.scaleWidth = this.$element.offsetWidth - this.pointerWidth;\n    this.init();\n  }\n\n  _createClass(LittleSlider, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.options.onInit && this.options.onInit.call();\n      ['mouseDownHandler', 'mouseUpHandler', 'mouseMoveHandler'].forEach(function (element) {\n        return _this[element] = _this[element].bind(_this);\n      });\n      this.$element.addEventListener(\"mousedown\", this.mouseDownHandler);\n      this.setPosition(this.getPositionFromValue(this.value));\n    } //при нажатии кнопки мыши\n\n  }, {\n    key: \"mouseDownHandler\",\n    value: function mouseDownHandler(e) {\n      e.preventDefault(); //console.log('mouseDown')\n\n      this.options.onMouseDown && this.options.onMouseDown.call(this.options, e);\n      this.x2 = this.eventPos(e, this.$element);\n      this.setPosition(this.x2 - this.pointToMiddle);\n      document.addEventListener('mouseup', this.mouseUpHandler);\n      document.addEventListener('mousemove', this.mouseMoveHandler);\n    } //при отпускании кнопки мыши\n\n  }, {\n    key: \"mouseUpHandler\",\n    value: function mouseUpHandler(e) {\n      //console.log('mouseup')\n      this.options.onMouseUp && this.options.onMouseUp.call(this.options, e);\n      document.removeEventListener(\"mousemove\", this.mouseMoveHandler);\n      document.removeEventListener('mouseup', this.mouseUpHandler);\n    } //при движении мыши\n\n  }, {\n    key: \"mouseMoveHandler\",\n    value: function mouseMoveHandler(e) {\n      e.preventDefault();\n      this.options.onSlide && this.options.onSlide.call(this.options, e);\n      var x1 = this.eventPos(e, this.$element);\n      this.setPosition(x1 - this.pointToMiddle);\n    } //установить позицию и отобразить результат\n\n  }, {\n    key: \"setPosition\",\n    value: function setPosition(pos) {\n      pos = pos < 0 ? 0 : pos >= this.scaleWidth ? this.scaleWidth : pos;\n      var value = this.getValueFromPosition(pos);\n      value = value > this.max ? this.max : value < this.min ? this.min : value;\n      var x = this.getPositionFromValue(value); //выполнится, когда величина изменится\n\n      if (value > this.currentValue || value < this.currentValue) {\n        this.currentValue = value;\n        this.options.onChange && this.options.onChange.call(this.options, this.currentValue); //конец слайдера\n\n        if (value === this.max) {\n          this.options.onSlideEnd && this.options.onSlideEnd.call(this.options, this.currentValue);\n        }\n      }\n\n      this.$sliderLine.style.width = x + \"px\";\n      this.$pointer.style.left = x + \"px\";\n    } //получить позицию по величине\n\n  }, {\n    key: \"getPositionFromValue\",\n    value: function getPositionFromValue(val) {\n      var percent = (val - this.min) / (this.max - this.min);\n      return percent * this.scaleWidth;\n    } //получить величину по позиции\n\n  }, {\n    key: \"getValueFromPosition\",\n    value: function getValueFromPosition(pos) {\n      var percent = pos / this.scaleWidth;\n      var value = this.step * Math.round(percent * (this.max - this.min) / this.step) + this.min;\n      return Number(value.toFixed(this.fixTofractional(this.step)));\n    } //возвращает количество чисел, после запятой\n\n  }, {\n    key: \"fixTofractional\",\n    value: function fixTofractional(fractional) {\n      return fractional.toString().replace(\".\", '').length - 1;\n    } //возвращает позицию x от длинны  элемента\n\n  }, {\n    key: \"eventPos\",\n    value: function eventPos(ev, toElement) {\n      return ev.pageX - toElement.getBoundingClientRect().left;\n    }\n  }]);\n\n  return LittleSlider;\n}();\n/**\r\n * @callback LittleSlider~onInit\r\n */\n\n/**\r\n* @callback LittleSlider~onChange\r\n* @param {number} currentValue\r\n*/\n\n/**\r\n* @callback LittleSlider~onSlideEnd\r\n* @param {number} currentValue\r\n*/\n\n/**\r\n * @callback LittleSlider~onSlide\r\n * @param {object} e\r\n */\n\n/**\r\n * @callback LittleSlider~onMouseUp\r\n * @param {object} e\r\n */\n\n/**\r\n * @callback RangeSlider~onMouseDown\r\n * @param {object} e\r\n */\n\n\n\n\n//# sourceURL=webpack://test/./src/Little-Slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LittleSlider\": () => (/* reexport safe */ _Little_Slider_js__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _Little_Slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Little-Slider.js */ \"./src/Little-Slider.js\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n//import capital from \"./capital\"\n//import addDOMContent from \"./addDOMContent\"\n\n\n\n\n//# sourceURL=webpack://test/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test/./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});