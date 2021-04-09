/*! For license information please see little-slider.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.LittleSlider=n():e.LittleSlider=n()}(self,(function(){return function(){"use strict";var __webpack_modules__={"./src/Little-Slider.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ LittleSlider; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction createSlider(o) {\n  var $element = document.createElement(\'div\');\n  $element.classList.add(\'little-scale\');\n  $element.insertAdjacentHTML(\'afterbegin\', "\\n\\t\\t\\t<div class=\\"little-slider-line\\"></div>\\n\\t\\t\\t<div class=\\"little-pointer\\"></div>\\n\\t");\n  return $element;\n}\n\nvar LittleSlider = /*#__PURE__*/function () {\n  function LittleSlider(el) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, LittleSlider);\n\n    this.x1 = 0;\n    this.x2 = 0;\n    this.options = options;\n    this.max = options.max || 100;\n    this.min = options.min || 0;\n    this.value = typeof options.value === \'number\' ? options.value : this.min;\n    this.step = options.step || 1;\n    this.currentValue = 0;\n    this.$element = createSlider();\n    this.$sliderLine = this.$element.querySelector(\'.little-slider-line\');\n    this.$pointer = this.$element.querySelector(\'.little-pointer\');\n    document.querySelector(el).appendChild(this.$element);\n    this.pointerWidth = this.$pointer.offsetWidth;\n    this.pointToMiddle = this.pointerWidth / 2;\n    this.scaleWidth = this.$element.offsetWidth - this.pointerWidth;\n    this.init();\n  }\n\n  _createClass(LittleSlider, [{\n    key: "init",\n    value: function init() {\n      var _this = this;\n\n      this.options.onInit && this.options.onInit.call();\n      [\'mouseDownHandler\', \'mouseUpHandler\', \'mouseMoveHandler\'].forEach(function (element) {\n        return _this[element] = _this[element].bind(_this);\n      });\n      this.$element.addEventListener("mousedown", this.mouseDownHandler);\n      this.setPosition(this.getPositionFromValue(this.value));\n    } //при нажатии кнопки мыши\n\n  }, {\n    key: "mouseDownHandler",\n    value: function mouseDownHandler(e) {\n      e.preventDefault(); //console.log(\'mouseDown\')\n\n      this.options.onMouseDown && this.options.onMouseDown.call(this.options, e);\n      this.x2 = this.eventPos(e, this.$element);\n      this.setPosition(this.x2 - this.pointToMiddle);\n      document.addEventListener(\'mouseup\', this.mouseUpHandler);\n      document.addEventListener(\'mousemove\', this.mouseMoveHandler);\n    } //при отпускании кнопки мыши\n\n  }, {\n    key: "mouseUpHandler",\n    value: function mouseUpHandler(e) {\n      //console.log(\'mouseup\')\n      this.options.onMouseUp && this.options.onMouseUp.call(this.options, e);\n      document.removeEventListener("mousemove", this.mouseMoveHandler);\n      document.removeEventListener(\'mouseup\', this.mouseUpHandler);\n    } //при движении мыши\n\n  }, {\n    key: "mouseMoveHandler",\n    value: function mouseMoveHandler(e) {\n      e.preventDefault();\n      this.options.onSlide && this.options.onSlide.call(this.options, e);\n      var x1 = this.eventPos(e, this.$element);\n      this.setPosition(x1 - this.pointToMiddle);\n    } //установить позицию и отобразить результат\n\n  }, {\n    key: "setPosition",\n    value: function setPosition(pos) {\n      pos = pos < 0 ? 0 : pos >= this.scaleWidth ? this.scaleWidth : pos;\n      var value = this.getValueFromPosition(pos);\n      value = value > this.max ? this.max : value < this.min ? this.min : value;\n      var x = this.getPositionFromValue(value); //выполнится, когда величина изменится\n\n      if (value > this.currentValue || value < this.currentValue) {\n        this.currentValue = value;\n        this.options.onChange && this.options.onChange.call(this.options, this.currentValue); //конец слайдера\n\n        if (value === this.max) {\n          this.options.onSlideEnd && this.options.onSlideEnd.call(this.options, this.currentValue);\n        }\n      }\n\n      this.$sliderLine.style.width = x + "px";\n      this.$pointer.style.left = x + "px";\n    } //получить позицию по величине\n\n  }, {\n    key: "getPositionFromValue",\n    value: function getPositionFromValue(val) {\n      var percent = (val - this.min) / (this.max - this.min);\n      return percent * this.scaleWidth;\n    } //получить величину по позиции\n\n  }, {\n    key: "getValueFromPosition",\n    value: function getValueFromPosition(pos) {\n      var percent = pos / this.scaleWidth;\n      var value = this.step * Math.round(percent * (this.max - this.min) / this.step) + this.min;\n      return Number(value.toFixed(this.fixTofractional(this.step)));\n    } //возвращает количество чисел, после запятой\n\n  }, {\n    key: "fixTofractional",\n    value: function fixTofractional(fractional) {\n      return fractional.toString().replace(".", \'\').length - 1;\n    } //возвращает позицию x от длинны  элемента\n\n  }, {\n    key: "eventPos",\n    value: function eventPos(ev, toElement) {\n      return ev.pageX - toElement.getBoundingClientRect().left;\n    }\n  }]);\n\n  return LittleSlider;\n}();\n/**\r\n * @callback LittleSlider~onInit\r\n */\n\n/**\r\n* @callback LittleSlider~onChange\r\n* @param {number} currentValue\r\n*/\n\n/**\r\n* @callback LittleSlider~onSlideEnd\r\n* @param {number} currentValue\r\n*/\n\n/**\r\n * @callback LittleSlider~onSlide\r\n * @param {object} e\r\n */\n\n/**\r\n * @callback LittleSlider~onMouseUp\r\n * @param {object} e\r\n */\n\n/**\r\n * @callback RangeSlider~onMouseDown\r\n * @param {object} e\r\n */\n\n\n\n\n//# sourceURL=webpack://LittleSlider/./src/Little-Slider.js?')},"./src/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "LittleSlider": function() { return /* reexport safe */ _Little_Slider_js__WEBPACK_IMPORTED_MODULE_0__.default; }\n/* harmony export */ });\n/* harmony import */ var _Little_Slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Little-Slider.js */ "./src/Little-Slider.js");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");\n//import capital from "./capital"\n//import addDOMContent from "./addDOMContent"\n\n\n\n\n//# sourceURL=webpack://LittleSlider/./src/index.js?')},"./src/style.scss":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://LittleSlider/./src/style.scss?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=function(e,n){for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__}()}));