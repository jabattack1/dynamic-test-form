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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js
var parse_int = __webpack_require__("6BQ9");
var parse_int_default = /*#__PURE__*/__webpack_require__.n(parse_int);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./components/room1.js










function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var GridItem = external_styled_components_default.a.div(_templateObject());
var Item = external_styled_components_default.a.div(_templateObject2());
var ItemWrap = external_styled_components_default.a.div(_templateObject3());
var Box = external_styled_components_default.a.div(_templateObject4());
var Slot = external_styled_components_default.a.div(_templateObject5());
var Heading = external_styled_components_default.a.span(_templateObject6());
var P = external_styled_components_default.a.p(_templateObject7());

var room1_Room1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room1, _React$Component);

  function Room1(props) {
    var _this;

    _classCallCheck(this, Room1);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room1).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "twoCallsAdult", function (e) {
      e.persist();

      _this.functionOneAdult(e);

      _this.functionTwoAdult(e);
    });

    _defineProperty(_assertThisInitialized(_this), "twoCallsChildren", function (e) {
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

  _createClass(Room1, [{
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

      select = external_react_default.a.createElement(ItemWrap, null, external_react_default.a.createElement(Heading, null, "Room ", this.state.room), external_react_default.a.createElement(Item, null, external_react_default.a.createElement(Slot, null, external_react_default.a.createElement(P, null, "Adults"), external_react_default.a.createElement(P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
        id: "selectionAdults",
        onChange: this.twoCallsAdult
      }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))), external_react_default.a.createElement(Slot, null, external_react_default.a.createElement(P, null, "Children"), external_react_default.a.createElement(P, null, "(0-17)"), external_react_default.a.createElement("select", {
        id: "selectionChildren",
        onChange: this.twoCallsChildren
      }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      return external_react_default.a.createElement(GridItem, null, external_react_default.a.createElement(Box, null, select));
    }
  }, {
    key: "functionOneAdult",
    value: function functionOneAdult(e) {
      e.persist();
      this.setState({
        adults: parse_int_default()(e.target.value)
      }, function () {
        this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
      });
    }
  }, {
    key: "functionTwoAdult",
    value: function functionTwoAdult(e) {
      e.persist();
      document.getElementById('selectionAdults').value = parse_int_default()(e.target.value);

      if (this.props.data !== undefined) {
        this.props.data.adults1 = parse_int_default()(e.target.value);
      }
    }
  }, {
    key: "functionOneChildren",
    value: function functionOneChildren(e) {
      e.persist();
      this.setState({
        children: parse_int_default()(e.target.value)
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
}(external_react_default.a.Component);

/* harmony default export */ var room1 = (room1_Room1);
// CONCATENATED MODULE: ./components/room2.js










function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function room2_templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  room2_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function room2_templateObject6() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room2_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function room2_templateObject5() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room2_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function room2_templateObject4() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room2_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function room2_templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room2_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function room2_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  room2_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room2_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  room2_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Checkbox = external_styled_components_default.a.input(room2_templateObject());
var room2_GridItem = external_styled_components_default.a.div(room2_templateObject2());
var room2_Item = external_styled_components_default.a.div(room2_templateObject3());
var room2_ItemWrap = external_styled_components_default.a.div(room2_templateObject4());
var ItemNay = external_styled_components_default.a.div(room2_templateObject5());
var ItemWrapNay = external_styled_components_default.a.div(room2_templateObject6());
var room2_Box = external_styled_components_default.a.div(room2_templateObject7());
var room2_Slot = external_styled_components_default.a.div(_templateObject8());
var Heading2 = external_styled_components_default.a.span(_templateObject9());
var Heading2Nay = external_styled_components_default.a.span(_templateObject10());
var room2_P = external_styled_components_default.a.p(_templateObject11());

var room2_Room2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room2, _React$Component);

  function Room2(props) {
    var _this;

    _classCallCheck(this, Room2);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room2).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

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

  _createClass(Room2, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults2 === 2) {
          optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", {
            selected: true
          }, 2));
        } else {
          optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", {
            selected: true
          }, 1), external_react_default.a.createElement("option", null, 2));
        }

        if (this.props.data.children2 === 0) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", {
            selected: true
          }, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        } else if (this.props.data.children2 === 1) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", {
            selected: true
          }, 1), external_react_default.a.createElement("option", null, 2));
        } else if (this.props.data.children2 === 2) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", {
            selected: true
          }, 2));
        } else {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        }
      } else {
        optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
      }

      if (this.state.check === true) {
        select = external_react_default.a.createElement(room2_ItemWrap, null, external_react_default.a.createElement(Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room2_Item, null, external_react_default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true
        }), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Adults"), external_react_default.a.createElement(room2_P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
          id: "selection",
          onChange: function onChange(e) {
            return _this2.setState({
              adults: parse_int_default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          }
        }, optionsAdults))), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Children"), external_react_default.a.createElement(room2_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              children: parse_int_default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          }
        }, optionsChildren))));
      } else {
        select = external_react_default.a.createElement(ItemWrapNay, null, external_react_default.a.createElement(Heading2Nay, null, "Room ", this.state.room), external_react_default.a.createElement(ItemNay, null, external_react_default.a.createElement(Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        }), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Adults"), external_react_default.a.createElement(room2_P, null, "(18+)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room2_Slot, null, external_react_default.a.createElement(room2_P, null, "Children"), external_react_default.a.createElement(room2_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(room2_GridItem, null, external_react_default.a.createElement(room2_Box, null, select));
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
}(external_react_default.a.Component);

/* harmony default export */ var room2 = (room2_Room2);
// CONCATENATED MODULE: ./components/room3.js










function room3_templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  room3_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function room3_templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  room3_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function room3_templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  room3_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function room3_templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  room3_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function room3_templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  room3_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function room3_templateObject6() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room3_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function room3_templateObject5() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room3_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function room3_templateObject4() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room3_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function room3_templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room3_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function room3_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  room3_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room3_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  room3_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room3_Checkbox = external_styled_components_default.a.input(room3_templateObject());
var room3_GridItem = external_styled_components_default.a.div(room3_templateObject2());
var room3_Item = external_styled_components_default.a.div(room3_templateObject3());
var room3_ItemWrap = external_styled_components_default.a.div(room3_templateObject4());
var room3_ItemNay = external_styled_components_default.a.div(room3_templateObject5());
var room3_ItemWrapNay = external_styled_components_default.a.div(room3_templateObject6());
var room3_Box = external_styled_components_default.a.div(room3_templateObject7());
var room3_Slot = external_styled_components_default.a.div(room3_templateObject8());
var room3_Heading2 = external_styled_components_default.a.span(room3_templateObject9());
var room3_Heading2Nay = external_styled_components_default.a.span(room3_templateObject10());
var room3_P = external_styled_components_default.a.p(room3_templateObject11());

var room3_Room3 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room3, _React$Component);

  function Room3(props) {
    var _this;

    _classCallCheck(this, Room3);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room3).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

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

  _createClass(Room3, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults3 === 2) {
          optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", {
            selected: true
          }, 2));
        } else {
          optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", {
            selected: true
          }, 1), external_react_default.a.createElement("option", null, 2));
        }

        if (this.props.data.children3 === 0) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", {
            selected: true
          }, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        } else if (this.props.data.children3 === 1) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", {
            selected: true
          }, 1), external_react_default.a.createElement("option", null, 2));
        } else if (this.props.data.children3 === 2) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", {
            selected: true
          }, 2));
        } else {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        }
      } else {
        optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
      }

      if (this.state.check === true) {
        select = external_react_default.a.createElement(room3_ItemWrap, null, external_react_default.a.createElement(room3_Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room3_Item, null, external_react_default.a.createElement(room3_Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true
        }), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Adults"), external_react_default.a.createElement(room3_P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
          id: "selectionAdults",
          onChange: function onChange(e) {
            return _this2.setState({
              adults: parse_int_default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          }
        }, optionsAdults))), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Children"), external_react_default.a.createElement(room3_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          id: "selectionChildren",
          onChange: function onChange(e) {
            return _this2.setState({
              children: parse_int_default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          }
        }, optionsChildren))));
      } else {
        select = external_react_default.a.createElement(room3_ItemWrapNay, null, external_react_default.a.createElement(room3_Heading2Nay, null, "Room ", this.state.room), external_react_default.a.createElement(room3_ItemNay, null, external_react_default.a.createElement(room3_Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        }), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Adults"), external_react_default.a.createElement(room3_P, null, "(18+)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room3_Slot, null, external_react_default.a.createElement(room3_P, null, "Children"), external_react_default.a.createElement(room3_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(room3_GridItem, null, external_react_default.a.createElement(room3_Box, null, select));
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
}(external_react_default.a.Component);

/* harmony default export */ var room3 = (room3_Room3);
// CONCATENATED MODULE: ./components/room4.js










function room4_templateObject11() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 1px 0;\n\tfont-size: 12px;\n"]);

  room4_templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function room4_templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tpadding-left: 20px;\n\tbackground: #DADDE8;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tborder-radius-left: 5px;\n\tborder-radius-right: 5px;\n"]);

  room4_templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function room4_templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tfont-weight: bold;\n\tfont-size: 15px;\n\tmargin-left: 20px;\n"]);

  room4_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function room4_templateObject8() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 7px\n"]);

  room4_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function room4_templateObject7() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n"]);

  room4_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function room4_templateObject6() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #C3CAE2;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room4_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function room4_templateObject5() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: #DADDE8;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room4_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function room4_templateObject4() {
  var data = _taggedTemplateLiteral(["\t\n\tmargin-left: 7px;\n\tpadding-top: 3px;\n\tpadding-bottom: 3px;\n\tpadding-left: 3px;\n\tpadding-right: 3px;\n\tbackground: #EAEAEA;\n\tmax-width: 180px;\n\tmax-height: 200px\n\tborder-radius: 5px;\n"]);

  room4_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function room4_templateObject3() {
  var data = _taggedTemplateLiteral(["\t\n\tposition: relative;\n\tdisplay: flex;\n\tflex-basis: calc(15% - 4rem);\n\tflex-grow: 1;\n\tflex-shrink: 0;\n\tmargin: 0 auto;\n\tbackground: white;\n\tpadding-bottom: 11px;\n\tpadding-left: 11px;\n\tpadding-right: 11px;\n\tpadding-top: 11px\n"]);

  room4_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function room4_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: inline-block;\n  \t}\n"]);

  room4_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function room4_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: -18px;\n\tleft: 0;\n"]);

  room4_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var room4_Checkbox = external_styled_components_default.a.input(room4_templateObject());
var room4_GridItem = external_styled_components_default.a.div(room4_templateObject2());
var room4_Item = external_styled_components_default.a.div(room4_templateObject3());
var room4_ItemWrap = external_styled_components_default.a.div(room4_templateObject4());
var room4_ItemNay = external_styled_components_default.a.div(room4_templateObject5());
var room4_ItemWrapNay = external_styled_components_default.a.div(room4_templateObject6());
var room4_Box = external_styled_components_default.a.div(room4_templateObject7());
var room4_Slot = external_styled_components_default.a.div(room4_templateObject8());
var room4_Heading2 = external_styled_components_default.a.span(room4_templateObject9());
var room4_Heading2Nay = external_styled_components_default.a.span(room4_templateObject10());
var room4_P = external_styled_components_default.a.p(room4_templateObject11());

var room4_Room4 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Room4, _React$Component);

  function Room4(props) {
    var _this;

    _classCallCheck(this, Room4);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Room4).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

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

  _createClass(Room4, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var select = '';
      var optionsAdults = '';
      var optionsChildren = '';

      if (this.props.data !== undefined) {
        if (this.props.data.adults4 === 2) {
          optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", {
            selected: true
          }, 2));
        } else {
          optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", {
            selected: true
          }, 1), external_react_default.a.createElement("option", null, 2));
        }

        if (this.props.data.children4 === 0) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", {
            selected: true
          }, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        } else if (this.props.data.children4 === 1) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", {
            selected: true
          }, 1), external_react_default.a.createElement("option", null, 2));
        } else if (this.props.data.children4 === 2) {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", {
            selected: true
          }, 2));
        } else {
          optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        }
      } else {
        optionsAdults = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
        optionsChildren = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2));
      }

      if (this.state.check === true) {
        select = external_react_default.a.createElement(room4_ItemWrap, null, external_react_default.a.createElement(room4_Heading2, null, "Room ", this.state.room), external_react_default.a.createElement(room4_Item, null, external_react_default.a.createElement(room4_Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          },
          checked: true
        }), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Adults"), external_react_default.a.createElement(room4_P, null, "(18+)"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("select", {
          id: "selection",
          onChange: function onChange(e) {
            return _this2.setState({
              adults: parse_int_default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          }
        }, optionsAdults))), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Children"), external_react_default.a.createElement(room4_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          onChange: function onChange(e) {
            return _this2.setState({
              children: parse_int_default()(e.target.value)
            }, function () {
              this.props.fromChildToParentCallback([this.state.check, this.state.room, this.state.adults, this.state.children]);
            });
          }
        }, optionsChildren))));
      } else {
        select = external_react_default.a.createElement(room4_ItemWrapNay, null, external_react_default.a.createElement(room4_Heading2Nay, null, "Room ", this.state.room), external_react_default.a.createElement(room4_ItemNay, null, external_react_default.a.createElement(room4_Checkbox, {
          type: "checkbox",
          onClick: function onClick() {
            return _this2.getStuff();
          }
        }), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Adults"), external_react_default.a.createElement(room4_P, null, "(18+)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2))), external_react_default.a.createElement(room4_Slot, null, external_react_default.a.createElement(room4_P, null, "Children"), external_react_default.a.createElement(room4_P, null, "(0-17)"), external_react_default.a.createElement("select", {
          disabled: true
        }, external_react_default.a.createElement("option", null, 0), external_react_default.a.createElement("option", null, 1), external_react_default.a.createElement("option", null, 2)))));
      }

      return external_react_default.a.createElement(room4_GridItem, null, external_react_default.a.createElement(room4_Box, null, select));
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
}(external_react_default.a.Component);

/* harmony default export */ var room4 = (room4_Room4);
// CONCATENATED MODULE: ./components/parent.js











function parent_templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: flex;\n\tmargin-top: 30px;\n\tmargin-left: 10px;\n"]);

  parent_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function parent_templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\tdisplay: flex;\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n"]);

  parent_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function parent_templateObject() {
  var data = _taggedTemplateLiteral(["\n\twidth: calc(100%);\n"]);

  parent_templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var gridWrap = external_styled_components_default.a.div(parent_templateObject());
var Submit = external_styled_components_default.a.button(parent_templateObject2());
var Clear = external_styled_components_default.a.button(parent_templateObject3());

var parent_Parent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Parent, _React$Component);

  function Parent(props) {
    var _this;

    _classCallCheck(this, Parent);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Parent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {});

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

  _createClass(Parent, [{
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
            checked: parse_int_default()(2)
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
            checked: parse_int_default()(3)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
          });
        } else if (value[0] === false && _this2.state.checked > value[1]) {
          _this2.setState({
            checked: parse_int_default()(2)
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
            checked: parse_int_default()(4)
          });
        } else if (value[0] === false && _this2.state.checked === value[1]) {
          _this2.setState({
            checked: parse_int_default()(3)
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
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        } else if (this.state.checked === 3) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        } else if (this.state.checked === 4) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: true
          }));
        } else {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value,
            data: chips
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            data: chips,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            data: chips,
            check: false
          }));
        }
      } else {
        if (this.state.checked === 2) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        } else if (this.state.checked === 3) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        } else if (this.state.checked === 4) {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: true
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: true
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: true
          }));
        } else {
          children = external_react_default.a.createElement("gridWrap", null, external_react_default.a.createElement(room1, {
            fromChildToParentCallback: room1Value
          }), external_react_default.a.createElement(room2, {
            fromChildToParentCallback: room2Value,
            check: false
          }), external_react_default.a.createElement(room3, {
            fromChildToParentCallback: room3Value,
            check: false
          }), external_react_default.a.createElement(room4, {
            fromChildToParentCallback: room4Value,
            check: false
          }));
        }
      }

      return external_react_default.a.createElement("gridWrap", null, children, external_react_default.a.createElement(Submit, {
        type: "button",
        name: "submit",
        id: "submit",
        onClick: function onClick() {
          return _this2.storeStuff();
        }
      }, "Submit"), external_react_default.a.createElement(Clear, {
        type: "button",
        name: "clear",
        id: "clear",
        onClick: function onClick() {
          return _this2.eraseStuff();
        }
      }, "Clear"));
    }
  }, {
    key: "storeStuff",
    value: function storeStuff() {
      var status = this.state;
      localStorage.setItem('submittedData', stringify_default()(status));
    }
  }, {
    key: "eraseStuff",
    value: function eraseStuff() {
      localStorage.clear();
    }
  }]);

  return Parent;
}(external_react_default.a.Component);

/* harmony default export */ var components_parent = (parent_Parent);
// CONCATENATED MODULE: ./data/rooms.js
var parsedData = '';

if (typeof Storage !== "undefined") {
  parsedData = JSON.parse(localStorage.getItem('submittedData')); // localStorage.clear();
} else {
  parsedData = [];
}

/* harmony default export */ var rooms = (parsedData);
// CONCATENATED MODULE: ./pages/index.js







function pages_templateObject() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n  \tflex-wrap: wrap;\n  \tmax-width: 1200px;\n  \tmargin: 0 auto;\n"]);

  pages_templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Wrap = external_styled_components_default.a.div(pages_templateObject());

var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.data = rooms;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Wrap, null, external_react_default.a.createElement(components_parent, {
        peter: rooms
      }));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });