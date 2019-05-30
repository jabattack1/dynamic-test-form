module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/parent.js":
/*!******************************!*\
  !*** ./components/parent.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_room1_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/room1.js */ "./components/room1.js");
/* harmony import */ var _components_room2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/room2.js */ "./components/room2.js");
/* harmony import */ var _components_room3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/room3.js */ "./components/room3.js");
/* harmony import */ var _components_room4_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/room4.js */ "./components/room4.js");










var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/components/parent.js";

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n\tposition: relative;\n\tdisplay: flex;\n\tmargin-top: 30px;\n\tmargin-left: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n\tposition: relative;\n\tdisplay: flex;\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n\twidth: calc(100%);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var gridWrap = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.div(_templateObject());
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.button(_templateObject2());
var Clear = styled_components__WEBPACK_IMPORTED_MODULE_11___default.a.button(_templateObject3());

var Parent =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Parent, _React$Component);

  function Parent(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Parent);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Parent).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {});

    if (_this.props.peter !== null) {
      ;
      var initial = _this.props.peter;
      _this.state = {
        checked: initial.checked,
        adults1: initial.adults1,
        children1: initial.children1,
        adults2: initial.adults2,
        children2: initial.children2,
        adults3: initial.adults3,
        children3: initial.children3,
        adults4: initial.adults4,
        children4: initial.children4
      };
    } else {
      _this.state = {
        checked: '',
        adults1: 1,
        children1: 0,
        adults2: 1,
        children2: 0,
        adults3: 1,
        children3: 0,
        adults4: 1,
        children4: 0
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Parent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var room1Value = function room1Value(value) {
        if (value[0] === true && _this2.state.checked === '') {
          _this2.setState({
            checked: ''
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults1: value[2],
            children1: value[3]
          }, function () {});
        }
      };

      var room2Value = function room2Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(2)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults2: value[2],
            children2: value[3]
          }, function () {});
        }
      };

      var room3Value = function room3Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(3)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(2)
          });
        } else if (value[0] === false && _this2.state.checked > value[1]) {
          _this2.setState({
            checked: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(2)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults3: value[2],
            children3: value[3]
          }, function () {});
        }
      };

      var room4Value = function room4Value(value) {
        if (value[0] === true && _this2.state.checked === '' || _this2.state.checked < value[1]) {
          _this2.setState({
            checked: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(4)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(3)
          });
        } else if (value[0] === false) {
          _this2.setState({
            checked: ''
          });
        } else {
          _this2.setState({
            adults4: value[2],
            children4: value[3]
          }, function () {});
        }
      };

      var children = '';

      if (this.props.peter !== null) {
        var chips = this.props.peter;

        if (this.state.checked === 2) {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }));
        } else if (this.state.checked === 3) {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }));
        } else if (this.state.checked === 4) {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }));
        } else {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }));
        }
      } else {
        if (this.state.checked === 2) {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }));
        } else if (this.state.checked === 3) {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }));
        } else if (this.state.checked === 4) {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }));
        } else {
          children = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room2Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 211
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room3Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
            fromChildToParentCallback: room4Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          }));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("gridWrap", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, children, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Submit, {
        type: "button",
        onClick: function onClick() {
          return _this2.storeStuff();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Clear, {
        type: "button",
        onClick: function onClick() {
          return _this2.eraseStuff();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Clear"));
    }
  }, {
    key: "storeStuff",
    value: function storeStuff() {
      var status = this.state;
      localStorage.setItem('submittedData', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(status));
    }
  }, {
    key: "eraseStuff",
    value: function eraseStuff() {
      localStorage.clear();
    }
  }]);

  return Parent;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Parent);

/***/ }),

/***/ "./components/room1.js":
/*!*****************************!*\
  !*** ./components/room1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/components/room1.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 7px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject2());
var ItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject3());
var Box = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject4());
var Slot = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject5());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject6());
var P = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p(_templateObject7());

var Room1 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Room1, _React$Component);

  function Room1(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Room1);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Room1).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "twoCallsAdult", function (e) {
      e.persist();

      _this.functionOneAdult(e);

      _this.functionTwoAdult(e);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "twoCallsChildren", function (e) {
      e.persist();

      _this.functionOneChildren(e);

      _this.functionTwoChildren(e);
    });

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 1,
        adults: _this.props.data.adults1,
        children: _this.props.data.children1
      };
    } else {
      _this.state = {
        room: 1,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Room1, [{
    key: "render",
    value: function render() {
      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults1 === 2) {
          if (false) {}
        } else {
          if (false) {}
        }

        if (this.props.data.children1 === 0) {
          if (false) {}
        } else if (this.props.data.children1 === 1) {
          if (false) {}
        } else if (this.props.data.children1 === 2) {
          if (false) {}
        } else {
          if (false) {}
        }
      } else {
        if (false) {}

        if (false) {}
      }

      select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "selectionAdults",
        onChange: this.twoCallsAdult,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, 2)))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
        id: "selectionChildren",
        onChange: this.twoCallsChildren,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, 2)))));
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Box, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, select));
    }
  }, {
    key: "functionOneAdult",
    value: function functionOneAdult(e) {
      e.persist();
      this.setState({
        adults: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoAdult",
    value: function functionTwoAdult(e) {
      e.persist();
      document.getElementById('selectionAdults').value = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value);

      if (this.props.data !== undefined) {
        this.props.data.adults1 = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value);
      }
    }
  }, {
    key: "functionOneChildren",
    value: function functionOneChildren(e) {
      e.persist();
      this.setState({
        children: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoChildren",
    value: function functionTwoChildren(e) {
      e.persist();

      if (false) {}
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getStuff();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults1,
            children: this.props.data.children1
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          console.log('titan');
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults1, this.props.data.children1]);
        } else {
          console.log('eh');
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room1;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Room1);

/***/ }),

/***/ "./components/room2.js":
/*!*****************************!*\
  !*** ./components/room2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/components/room2.js";

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 7px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.input(_templateObject());
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject2());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject3());
var ItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject4());
var ItemNay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject5());
var ItemWrapNay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject6());
var Box = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject7());
var Slot = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject8());
var Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject9());
var Heading2Nay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject10());
var P = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p(_templateObject11());

var Room2 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Room2, _React$Component);

  function Room2(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Room2);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Room2).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 2,
        adults: _this.props.data.adults2,
        children: _this.props.data.children2
      };
    } else {
      console.log('tot2');
      _this.state = {
        room: 2,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Room2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults2 === 2) {
          optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, 2));
        } else {
          optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, 2));
        }

        if (this.props.data.children2 === 0) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }, 2));
        } else if (this.props.data.children2 === 1) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, 2));
        } else if (this.props.data.children2 === 2) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }, 2));
        } else {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, 2));
        }
      } else {
        optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }, 2));
        optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, 2));
      }

      if (this.state.check === true) {
        select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrap, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading2, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          id: "selection",
          onChange: function onChange(e) {
            return _this2.setState({
              adults: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        }, optionsAdults))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              children: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          __self: this
        }, optionsChildren))));
      } else {
        select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrapNay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading2Nay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemNay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          __self: this
        }, 2))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: this
        }, 2)))));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Box, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, select));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults2,
            children: this.props.data.children2
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults2, this.props.data.children2]);
        } else {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room2;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Room2);

/***/ }),

/***/ "./components/room3.js":
/*!*****************************!*\
  !*** ./components/room3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/components/room3.js";

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 7px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.input(_templateObject());
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject2());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject3());
var ItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject4());
var ItemNay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject5());
var ItemWrapNay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject6());
var Box = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject7());
var Slot = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject8());
var Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject9());
var Heading2Nay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject10());
var P = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p(_templateObject11());

var Room3 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Room3, _React$Component);

  function Room3(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Room3);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Room3).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 3,
        adults: _this.props.data.adults3,
        children: _this.props.data.children3
      };
    } else {
      console.log('tot3');
      _this.state = {
        room: 3,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Room3, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults3 === 2) {
          optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, 2));
        } else {
          optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, 2));
        }

        if (this.props.data.children3 === 0) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, 2));
        } else if (this.props.data.children3 === 1) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, 2));
        } else if (this.props.data.children3 === 2) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, 2));
        } else {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, 2));
        }
      } else {
        optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, 2));
        optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, 2));
      }

      if (this.state.check === true) {
        select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrap, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading2, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          id: "selectionAdults",
          onChange: function onChange(e) {
            return _this2.setState({
              adults: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, optionsAdults))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          id: "selectionChildren",
          onChange: function onChange(e) {
            return _this2.setState({
              children: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, optionsChildren))));
      } else {
        select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrapNay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading2Nay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemNay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, 2))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, 2)))));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Box, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, select));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults3,
            children: this.props.data.children3
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults3, this.props.data.children3]);
        } else {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room3;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Room3);

/***/ }),

/***/ "./components/room4.js":
/*!*****************************!*\
  !*** ./components/room4.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/components/room4.js";

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tmargin: 7px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Checkbox = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.input(_templateObject());
var GridItem = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject2());
var Item = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject3());
var ItemWrap = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject4());
var ItemNay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject5());
var ItemWrapNay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject6());
var Box = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject7());
var Slot = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.div(_templateObject8());
var Heading2 = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject9());
var Heading2Nay = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.span(_templateObject10());
var P = styled_components__WEBPACK_IMPORTED_MODULE_10___default.a.p(_templateObject11());

var Room4 =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Room4, _React$Component);

  function Room4(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Room4);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Room4).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {});

    if (_this.props.data !== undefined) {
      _this.state = {
        room: 4,
        adults: _this.props.data.adults4,
        children: _this.props.data.children4
      };
    } else {
      console.log('tot4');
      _this.state = {
        room: 4,
        adults: 1,
        children: 0
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Room4, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults4 === 2) {
          optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, 2));
        } else {
          optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, 2));
        }

        if (this.props.data.children4 === 0) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, 2));
        } else if (this.props.data.children4 === 1) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, 2));
        } else if (this.props.data.children4 === 2) {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, 2));
        } else {
          optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, 2));
        }
      } else {
        optionsAdults = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }, 2));
        optionsChildren = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          __self: this
        }, 2));
      }

      if (this.state.check === true) {
        select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrap, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading2, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Item, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          __self: this
        }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          id: "selection",
          onChange: function onChange(e) {
            return _this2.setState({
              adults: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, optionsAdults))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              children: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, optionsChildren))));
      } else {
        select = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemWrapNay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Heading2Nay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 227
          },
          __self: this
        }, "Room ", this.state.room), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ItemNay, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 229
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, "Adults"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }, "(18+)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, 2))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Slot, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, "Children"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(P, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, "(0-17)"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("select", {
          disabled: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, 0), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          __self: this
        }, 1), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("option", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, 2)))));
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Box, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, select));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props != nextProps) {
        if (this.props.data !== undefined) {
          this.setState({
            check: nextProps.check,
            adults: this.props.data.adults4,
            children: this.props.data.children4
          });
        } else {
          this.setState({
            check: nextProps.check,
            adults: this.state.adults,
            children: this.state.children
          });
        }
      }
    }
  }, {
    key: "getStuff",
    value: function getStuff() {
      this.setState({
        check: !this.state.check,
        adults: this.state.adults || 1,
        children: this.state.children
      }, function () {
        if (this.props.data !== undefined) {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.props.data.adults4, this.props.data.children4]);
        } else {
          this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
        }
      });
    }
  }]);

  return Room4;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Room4);

/***/ }),

/***/ "./data/rooms.js":
/*!***********************!*\
  !*** ./data/rooms.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var parsedData = '';

if (typeof Storage !== "undefined") {
  parsedData = JSON.parse(localStorage.getItem('submittedData')); // localStorage.clear();
} else {
  parsedData = [];
}

/* harmony default export */ __webpack_exports__["default"] = (parsedData);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_parent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/parent.js */ "./components/parent.js");
/* harmony import */ var _components_room1_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/room1.js */ "./components/room1.js");
/* harmony import */ var _components_room2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/room2.js */ "./components/room2.js");
/* harmony import */ var _components_room3_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/room3.js */ "./components/room3.js");
/* harmony import */ var _components_room4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/room4.js */ "./components/room4.js");
/* harmony import */ var _data_rooms_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/rooms.js */ "./data/rooms.js");






var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/pages/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n\tdisplay: flex;\n  \tflex-wrap: wrap;\n  \tmax-width: 1200px;\n  \tmargin: 0 auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Wrap = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div(_templateObject());

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.data = _data_rooms_js__WEBPACK_IMPORTED_MODULE_13__["default"];
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Wrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_parent_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        peter: _data_rooms_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peterhahn/src/new/form-test/with-jest/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map