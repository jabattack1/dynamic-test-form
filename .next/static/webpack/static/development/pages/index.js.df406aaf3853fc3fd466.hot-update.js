webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_room1_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/room1.js */ "./components/room1.js");
/* harmony import */ var _components_room2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/room2.js */ "./components/room2.js");
/* harmony import */ var _components_room3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/room3.js */ "./components/room3.js");
/* harmony import */ var _components_room4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/room4.js */ "./components/room4.js");









var _jsxFileName = "/Users/peterhahn/src/new/form-test/with-jest/components/parent.js";






var GridWrap = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div.withConfig({
  displayName: "parent__GridWrap",
  componentId: "wxk209-0"
})(["width:calc(100%);margin:0 auto;display:block;"]);
var Submit = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button.withConfig({
  displayName: "parent__Submit",
  componentId: "wxk209-1"
})(["position:relative;display:flex;margin-top:10px;margin-left:10px;"]);
var Clear = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].button.withConfig({
  displayName: "parent__Clear",
  componentId: "wxk209-2"
})(["position:relative;display:flex;margin-top:30px;margin-left:10px;"]);

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
        console.log(this.state.checked);

        if (this.state.checked === 2) {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }));
        } else if (this.state.checked === 3) {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }));
        } else if (this.state.checked === 4) {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }));
        } else {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            data: chips,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 176
            },
            __self: this
          }));
        }
      } else {
        if (this.state.checked === 2) {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }));
        } else if (this.state.checked === 3) {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 195
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }));
        } else if (this.state.checked === 4) {
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            check: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }));
        } else {
          console.log('empty');
          children = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 212
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room1_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            fromChildToParentCallback: room1Value,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room2_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            fromChildToParentCallback: room2Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 214
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room3_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
            fromChildToParentCallback: room3Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_room4_js__WEBPACK_IMPORTED_MODULE_14__["default"], {
            fromChildToParentCallback: room4Value,
            check: false,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(GridWrap, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, children, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Submit, {
        type: "button",
        onClick: function onClick() {
          return _this2.storeStuff();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Clear, {
        type: "button",
        onClick: function onClick() {
          return _this2.eraseStuff();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
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
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Parent);

/***/ })

})
//# sourceMappingURL=index.js.df406aaf3853fc3fd466.hot-update.js.map