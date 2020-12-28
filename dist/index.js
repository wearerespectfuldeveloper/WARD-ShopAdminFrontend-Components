import { css, jsx } from '@emotion/core';
import React__default, { createElement, Fragment } from 'react';
import { useTransition, animated } from 'react-spring';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("clipPath", {
  id: "chatting_svg__a"
}, /*#__PURE__*/createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2 = /*#__PURE__*/createElement("g", {
  clipPath: "url(#chatting_svg__a)"
}, /*#__PURE__*/createElement("path", {
  d: "M10 13H5l1.828-2H13a1 1 0 001-1V4h1a1 1 0 011 1v7a1 1 0 01-1 1h-2v3zM3 9H1a1 1 0 01-1-1V1a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H6l-3 3z",
  fill: "#a5a4bf"
}));

function SvgChatting(props) {
  return /*#__PURE__*/createElement("svg", _extends({
    width: 16,
    height: 16
  }, props), _ref, _ref2);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 = /*#__PURE__*/createElement("path", {
  d: "M14 16V0h2v16zM0 16V0h2v16zm11-5V0h2v11zm-5 0V0h4v11zm-3 0V0h2v11z",
  fill: "#a3a0fb"
});

function SvgProducts(props) {
  return /*#__PURE__*/createElement("svg", _extends$1({
    width: 15.999,
    height: 15.999
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 = /*#__PURE__*/createElement("path", {
  d: "M6.5 10.8L0 4.3l2.1-2.1 4.4 4.3L13 0l2.1 2.1z",
  fill: "#fff"
});

function SvgCheck(props) {
  return /*#__PURE__*/createElement("svg", _extends$2({
    width: 15.1,
    height: 10.8
  }, props), _ref$2);
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$3 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("clipPath", {
  id: "dashboard_svg__a"
}, /*#__PURE__*/createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2$1 = /*#__PURE__*/createElement("g", {
  clipPath: "url(#dashboard_svg__a)"
}, /*#__PURE__*/createElement("path", {
  d: "M13 16a.945.945 0 01-1-1V6a.945.945 0 011-1h2a.945.945 0 011 1v9a.945.945 0 01-1 1zm-6 0a.944.944 0 01-1-1V1a.945.945 0 011-1h2a.945.945 0 011 1v14a.944.944 0 01-1 1zm-6 0a.945.945 0 01-1-1v-4a.945.945 0 011-1h2a.946.946 0 011 1v4a.945.945 0 01-1 1z",
  fill: "#a5a4bf"
}));

function SvgDashboard(props) {
  return /*#__PURE__*/createElement("svg", _extends$3({
    width: 16,
    height: 16
  }, props), _ref$3, _ref2$1);
}

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$4 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("clipPath", {
  id: "setting_svg__a"
}, /*#__PURE__*/createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2$2 = /*#__PURE__*/createElement("g", {
  clipPath: "url(#setting_svg__a)"
}, /*#__PURE__*/createElement("path", {
  d: "M13.3 5.2l1.1-2.1L13 1.7l-2.1 1.1a3.582 3.582 0 00-1.1-.4L9 0H7l-.8 2.3a4.179 4.179 0 00-1 .4L3.1 1.6 1.6 3.1l1.1 2.1a4.179 4.179 0 00-.4 1L0 7v2l2.3.8c.1.4.3.7.4 1.1L1.6 13 3 14.4l2.1-1.1a3.582 3.582 0 001.1.4L7 16h2l.8-2.3c.4-.1.7-.3 1.1-.4l2.1 1.1 1.4-1.4-1.1-2.1a3.582 3.582 0 00.4-1.1L16 9V7l-2.3-.8a4.179 4.179 0 00-.4-1zM8 11a2.946 2.946 0 01-3-3 2.946 2.946 0 013-3 2.946 2.946 0 013 3 2.946 2.946 0 01-3 3z",
  fill: "#a5a4bf"
}));

function SvgSetting(props) {
  return /*#__PURE__*/createElement("svg", _extends$4({
    width: 16,
    height: 16
  }, props), _ref$4, _ref2$2);
}

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$5 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("clipPath", {
  id: "customers_svg__a"
}, /*#__PURE__*/createElement("path", {
  fill: "none",
  d: "M0 0h14v16H0z"
})));

var _ref2$3 = /*#__PURE__*/createElement("g", {
  clipPath: "url(#customers_svg__a)"
}, /*#__PURE__*/createElement("path", {
  d: "M0 16a6.018 6.018 0 016-6h2a6.018 6.018 0 016 6zm2.6-2h8.9A4.033 4.033 0 008 12H6.1a4.035 4.035 0 00-3.5 2zM3 5V4a4.012 4.012 0 014-4 4.012 4.012 0 014 4v1a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4zm2-1v1a2.006 2.006 0 002 2 2.006 2.006 0 002-2V4a2.006 2.006 0 00-2-2 2.006 2.006 0 00-2 2z",
  fill: "#a5a4bf"
}));

function SvgCustomers(props) {
  return /*#__PURE__*/createElement("svg", _extends$5({
    width: 14,
    height: 16
  }, props), _ref$5, _ref2$3);
}

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$6 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("clipPath", {
  id: "cart_svg__a"
}, /*#__PURE__*/createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2$4 = /*#__PURE__*/createElement("g", {
  clipPath: "url(#cart_svg__a)"
}, /*#__PURE__*/createElement("path", {
  d: "M11.014 14a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zm-10 0a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zM0 11V9h12.261l1.427-5H2.014V2h-2V0h3a1 1 0 011 1v1h11a1.021 1.021 0 01.961 1.275l-2 7a1 1 0 01-.962.725zm1-3V7h4v1zm1-2V5h4v1z",
  fill: "#a4a1fb"
}));

function SvgCart(props) {
  return /*#__PURE__*/createElement("svg", _extends$6({
    width: 16,
    height: 16
  }, props), _ref$6, _ref2$4);
}

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var _ref$7 = /*#__PURE__*/createElement("path", {
  d: "M8.7 2h3.6L8.7 5.6l-4-4L0 6.3l1.4 1.4 3.3-3.3 4 4 5-5V7h2V0h-7z",
  fill: "#4ad991"
});

function SvgTrendUp(props) {
  return /*#__PURE__*/createElement("svg", _extends$7({
    width: 15.7,
    height: 8.4
  }, props), _ref$7);
}

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var _ref$8 = /*#__PURE__*/createElement("defs", null, /*#__PURE__*/createElement("clipPath", {
  id: "moneyBag_svg__a"
}, /*#__PURE__*/createElement("path", {
  fill: "none",
  d: "M0 0h14v16H0z"
})));

var _ref2$5 = /*#__PURE__*/createElement("g", {
  clipPath: "url(#moneyBag_svg__a)"
}, /*#__PURE__*/createElement("path", {
  d: "M3.167 16a3.359 3.359 0 01-2.768-1.5 3.02 3.02 0 010-3l3.514-6a1.136 1.136 0 01.958-.5h4.258a1.135 1.135 0 01.958.5l3.514 6a3.013 3.013 0 010 3 3.359 3.359 0 01-2.768 1.5zm1.7-13a1 1 0 01-.745-.3l-1.065-1A.975.975 0 013.802 0h6.387a.993.993 0 01.745 1.7l-1.065 1a1 1 0 01-.745.3z",
  fill: "#4ad991"
}));

function SvgMoneyBag(props) {
  return /*#__PURE__*/createElement("svg", _extends$8({
    width: 14,
    height: 16
  }, props), _ref$8, _ref2$5);
}

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var _ref$9 = /*#__PURE__*/createElement("path", {
  d: "M12 2a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zM6 2a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zM0 2a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2z",
  fill: "#a4afb7"
});

function SvgMenu(props) {
  return /*#__PURE__*/createElement("svg", _extends$9({
    width: 16,
    height: 4
  }, props), _ref$9);
}

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var _ref$a = /*#__PURE__*/createElement("path", {
  d: "M.379.325l5.348 6.2h0l4.706-6.2",
  fill: "none",
  stroke: "#808495"
});

function SvgArrowDown(props) {
  return /*#__PURE__*/createElement("svg", _extends$a({
    width: 10.83,
    height: 7.318
  }, props), _ref$a);
}

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

var _ref$b = /*#__PURE__*/createElement("path", {
  d: "M3.414 7.657l3.95 3.95A1 1 0 015.95 13.02L.293 7.364a.997.997 0 010-1.414L5.95.293a1 1 0 111.414 1.414l-3.95 3.95H13a1 1 0 010 2H3.414z"
});

function SvgArrowLeft(props) {
  return /*#__PURE__*/createElement("svg", _extends$b({
    viewBox: "-5 -5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "arrowLeft_svg__jam arrowLeft_svg__jam-arrow-left"
  }, props), _ref$b);
}

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

var _ref$c = /*#__PURE__*/createElement("text", {
  transform: "translate(0 15)",
  fill: "#fff",
  fontSize: 21,
  fontFamily: "SourceSansPro-Bold, Source Sans Pro",
  fontWeight: 700,
  letterSpacing: ".2em"
}, /*#__PURE__*/createElement("tspan", {
  x: 0,
  y: 0
}, "WARD"));

function SvgLogo(props) {
  return /*#__PURE__*/createElement("svg", _extends$c({
    width: 85,
    height: 21
  }, props), _ref$c);
}

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

var _ref$d = /*#__PURE__*/createElement("path", {
  d: "M7.314 5.9l3.535-3.536A1 1 0 109.435.95L5.899 4.485 2.364.95A1 1 0 10.95 2.364l3.535 3.535L.95 9.435a1 1 0 101.414 1.414l3.535-3.535 3.536 3.535a1 1 0 101.414-1.414L7.314 5.899z"
});

function SvgClose(props) {
  return /*#__PURE__*/createElement("svg", _extends$d({
    viewBox: "-6 -6 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "close_svg__jam close_svg__jam-close"
  }, props), _ref$d);
}

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

var _ref$e = /*#__PURE__*/createElement("path", {
  d: "M6 2V1a1 1 0 011-1h4a1 1 0 011 1v1h4a2 2 0 012 2v1a2 2 0 01-2 2h-.133l-.68 10.2a3 3 0 01-2.993 2.8H5.826a3 3 0 01-2.993-2.796L2.137 7H2a2 2 0 01-2-2V4a2 2 0 012-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 00.998.932h6.368a1 1 0 00.998-.934L13.862 7h-9.72zM7 8a1 1 0 011 1v7a1 1 0 01-2 0V9a1 1 0 011-1zm4 0a1 1 0 011 1v7a1 1 0 01-2 0V9a1 1 0 011-1z"
});

function SvgTrash(props) {
  return /*#__PURE__*/createElement("svg", _extends$e({
    viewBox: "-3 -2 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "trash_svg__jam trash_svg__jam-trash"
  }, props), _ref$e);
}

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

var _ref$f = /*#__PURE__*/createElement("path", {
  d: "M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 000-.707l-.708-.707a.5.5 0 00-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 010 3.535L5.634 17.733l-4.22 1.22a1 1 0 01-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 013.535 0z"
});

function SvgPencil(props) {
  return /*#__PURE__*/createElement("svg", _extends$f({
    viewBox: "-2.5 -2.5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "pencil_svg__jam pencil_svg__jam-pencil"
  }, props), _ref$f);
}

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

var _ref$g = /*#__PURE__*/createElement("path", {
  d: "M3 0h8a1 1 0 010 2H3a1 1 0 110-2zm0 8h8a1 1 0 010 2H3a1 1 0 110-2zM1 4h12a1 1 0 010 2H1a1 1 0 110-2z"
});

function SvgAlignCenter(props) {
  return /*#__PURE__*/createElement("svg", _extends$g({
    viewBox: "-5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "align-center_svg__jam align-center_svg__jam-align-center"
  }, props), _ref$g);
}

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

var _ref$h = /*#__PURE__*/createElement("path", {
  d: "M1 0h12a1 1 0 010 2H1a1 1 0 110-2zm0 8h12a1 1 0 010 2H1a1 1 0 110-2zm0-4h12a1 1 0 010 2H1a1 1 0 110-2z"
});

function SvgAlignJustify(props) {
  return /*#__PURE__*/createElement("svg", _extends$h({
    viewBox: "-5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "align-justify_svg__jam align-justify_svg__jam-align-justify"
  }, props), _ref$h);
}

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

var _ref$i = /*#__PURE__*/createElement("path", {
  d: "M1 0h6a1 1 0 110 2H1a1 1 0 110-2zm0 8h8a1 1 0 110 2H1a1 1 0 110-2zm0-4h12a1 1 0 010 2H1a1 1 0 110-2z"
});

function SvgAlignLeft(props) {
  return /*#__PURE__*/createElement("svg", _extends$i({
    viewBox: "-5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "align-left_svg__jam align-left_svg__jam-align-left"
  }, props), _ref$i);
}

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

var _ref$j = /*#__PURE__*/createElement("path", {
  d: "M7 0h6a1 1 0 010 2H7a1 1 0 110-2zM5 8h8a1 1 0 010 2H5a1 1 0 110-2zM1 4h12a1 1 0 010 2H1a1 1 0 110-2z"
});

function SvgAlignRight(props) {
  return /*#__PURE__*/createElement("svg", _extends$j({
    viewBox: "-5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "align-right_svg__jam align-right_svg__jam-align-right"
  }, props), _ref$j);
}

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

var _ref$k = /*#__PURE__*/createElement("path", {
  d: "M7.543 8l.506 1.386c.17.466.734.722 1.26.57.525-.15.813-.651.643-1.117l-2.05-5.61c-.197-.542-.675-.967-1.285-1.142-1.05-.302-2.179.209-2.52 1.141L2.05 8.838c-.17.467.118.967.643 1.119.525.15 1.09-.105 1.26-.571L4.458 8h3.085zm-.73-2H5.188L6 3.776 6.813 6zM2 0h8a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"
});

function SvgBackgroundColor(props) {
  return /*#__PURE__*/createElement("svg", _extends$k({
    viewBox: "-6 -6 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "background-color_svg__jam background-color_svg__jam-background-color"
  }, props), _ref$k);
}

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

var _ref$l = /*#__PURE__*/createElement("path", {
  d: "M2 5.455v2.727h1.5c.828 0 1.5-.61 1.5-1.364 0-.753-.672-1.363-1.5-1.363H2zm3.514-1.24C6.413 4.793 7 5.744 7 6.819 7 8.575 5.433 10 3.5 10H0V.91C0 .406.448 0 1 0h2c1.657 0 3 1.221 3 2.727 0 .55-.179 1.06-.486 1.489zM2 1.819v1.818h1c.552 0 1-.407 1-.909s-.448-.909-1-.909H2z"
});

function SvgBold(props) {
  return /*#__PURE__*/createElement("svg", _extends$l({
    viewBox: "-8.5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "bold_svg__jam bold_svg__jam-bold"
  }, props), _ref$l);
}

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

var _ref$m = /*#__PURE__*/createElement("path", {
  d: "M6.327 6.99H2.672l-.477 1.306c-.191.524-.826.812-1.417.642-.59-.17-.915-.734-.723-1.258l2.304-6.312C2.743.32 4.011-.256 5.193.084 5.88.282 6.418.76 6.64 1.368L8.945 7.68c.191.524-.133 1.088-.724 1.258-.59.17-1.225-.118-1.417-.642l-.477-1.307zm-.729-1.998L4.5 1.984 3.4 4.992h2.197zM10 4a2 2 0 110-4 2 2 0 010 4z"
});

function SvgColor(props) {
  return /*#__PURE__*/createElement("svg", _extends$m({
    viewBox: "-6 -7.5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "color_svg__jam color_svg__jam-color"
  }, props), _ref$m);
}

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

var _ref$n = /*#__PURE__*/createElement("path", {
  d: "M2 4h4V1a1 1 0 112 0v8a1 1 0 11-2 0V6H2v3a1 1 0 11-2 0V1a1 1 0 112 0v3zm9.52.779H10V3h3.36v7h-1.84V4.779z"
});

function SvgHeader1(props) {
  return /*#__PURE__*/createElement("svg", _extends$n({
    viewBox: "-5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "header-1_svg__jam header-1_svg__jam-header-1"
  }, props), _ref$n);
}

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

var _ref$o = /*#__PURE__*/createElement("path", {
  d: "M2 4h4V1a1 1 0 112 0v8a1 1 0 11-2 0V6H2v3a1 1 0 11-2 0V1a1 1 0 112 0v3zm12.88 4.352V10H10V8.986l.1-.246 1.785-1.913c.43-.435.793-.77.923-1.011.124-.23.182-.427.182-.587 0-.14-.04-.242-.127-.327a.469.469 0 00-.351-.127.443.443 0 00-.355.158c-.105.117-.165.288-.173.525l-.012.338h-1.824l.016-.366c.034-.735.272-1.33.718-1.77.446-.44 1.02-.66 1.703-.66.424 0 .805.091 1.14.275a2.1 2.1 0 01.806.8c.198.343.3.7.3 1.063 0 .416-.23.849-.456 1.307-.222.45-.534.876-1.064 1.555l-.116.123-.254.229h1.938z"
});

function SvgHeader2(props) {
  return /*#__PURE__*/createElement("svg", _extends$o({
    viewBox: "-4.5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "header-2_svg__jam header-2_svg__jam-header-2"
  }, props), _ref$o);
}

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

var _ref$p = /*#__PURE__*/createElement("path", {
  d: "M2 4h4V1a1 1 0 112 0v8a1 1 0 11-2 0V6H2v3a1 1 0 11-2 0V1a1 1 0 112 0v3zm12.453 2.513l.043.055c.254.334.38.728.38 1.172 0 .637-.239 1.187-.707 1.628-.466.439-1.06.658-1.763.658-.671 0-1.235-.209-1.671-.627-.436-.418-.673-.983-.713-1.676L10 7.353h1.803l.047.295c.038.238.112.397.215.49.1.091.23.137.402.137a.566.566 0 00.422-.159.5.5 0 00.158-.38c0-.163-.067-.295-.224-.419-.17-.134-.438-.21-.815-.215l-.345-.004v-1.17l.345-.004c.377-.004.646-.08.815-.215.157-.124.224-.255.224-.418a.5.5 0 00-.158-.381.566.566 0 00-.422-.159.568.568 0 00-.402.138c-.103.092-.177.251-.215.489l-.047.295H10l.022-.37c.04-.693.277-1.258.713-1.675.436-.419 1-.628 1.67-.628.704 0 1.298.22 1.764.658.468.441.708.991.708 1.629a1.892 1.892 0 01-.424 1.226z"
});

function SvgHeader3(props) {
  return /*#__PURE__*/createElement("svg", _extends$p({
    viewBox: "-4.5 -6.5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "header-3_svg__jam header-3_svg__jam-header-3"
  }, props), _ref$p);
}

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

var _ref$q = /*#__PURE__*/createElement("path", {
  d: "M2 4h4V1a1 1 0 112 0v8a1 1 0 11-2 0V6H2v3a1 1 0 11-2 0V1a1 1 0 112 0v3zm10.636 4.74H10V7.302l.06-.198 2.714-4.11h1.687v3.952h.538V8.74h-.538V10h-1.825V8.74zm.154-1.283V5.774l-1.1 1.683h1.1z"
});

function SvgHeader4(props) {
  return /*#__PURE__*/createElement("svg", _extends$q({
    viewBox: "-4.5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "header-4_svg__jam header-4_svg__jam-header-4"
  }, props), _ref$q);
}

function _extends$r() { _extends$r = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }

var _ref$r = /*#__PURE__*/createElement("path", {
  d: "M2 4h4V1a1 1 0 112 0v8a1 1 0 11-2 0V6H2v3a1 1 0 11-2 0V1a1 1 0 112 0v3zm8.003 4.317h2.68c.386 0 .699-.287.699-.642 0-.355-.313-.642-.698-.642H10.01l.002-.244L10 3h5.086v1.888h-3.144l.014.617h1.114c1.355 0 2.469.984 2.523 2.23.052 1.21-.972 2.231-2.288 2.28l-.095.001-3.21-.02V8.73l.003-.414z"
});

function SvgHeader5(props) {
  return /*#__PURE__*/createElement("svg", _extends$r({
    viewBox: "-4 -6.5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "header-5_svg__jam header-5_svg__jam-header-5"
  }, props), _ref$r);
}

function _extends$s() { _extends$s = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }

var _ref$s = /*#__PURE__*/createElement("path", {
  d: "M2 4h4V1a1 1 0 112 0v8a1 1 0 11-2 0V6H2v3a1 1 0 11-2 0V1a1 1 0 112 0v3zm11.949 2.057c.43.44.651.999.651 1.64 0 .629-.228 1.18-.67 1.62-.442.437-.99.663-1.613.663a2.212 2.212 0 01-1.649-.693c-.43-.45-.652-.985-.652-1.58 0-.224.034-.449.1-.672.063-.211.664-1.627.837-1.966.251-.491.65-1.204 1.197-2.137l1.78.652-.917 1.88c.249.113.733.386.936.593zm-1.63.765a.85.85 0 00-.858.863.85.85 0 00.252.613.865.865 0 001.48-.614.844.844 0 00-.25-.611.866.866 0 00-.623-.251z"
});

function SvgHeader6(props) {
  return /*#__PURE__*/createElement("svg", _extends$s({
    viewBox: "-4.5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "header-6_svg__jam header-6_svg__jam-header-6"
  }, props), _ref$s);
}

function _extends$t() { _extends$t = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }

var _ref$t = /*#__PURE__*/createElement("path", {
  d: "M2 0h12a1 1 0 010 2H2a1 1 0 110-2zm0 8h12a1 1 0 010 2H2a1 1 0 110-2zm6-4h6a1 1 0 010 2H8a1 1 0 110-2zM4.44 5.857L2.382 7.091a1 1 0 01-1.515-.857V3.766a1 1 0 011.515-.857l2.056 1.234a1 1 0 010 1.714z"
});

function SvgIndent(props) {
  return /*#__PURE__*/createElement("svg", _extends$t({
    viewBox: "-4.5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "indent_svg__jam indent_svg__jam-indent"
  }, props), _ref$t);
}

function _extends$u() { _extends$u = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }

var _ref$u = /*#__PURE__*/createElement("path", {
  d: "M2.273 8l1.95-6H3a1 1 0 110-2h5a1 1 0 110 2H6.326l-1.95 6H6a1 1 0 110 2H1a1 1 0 110-2h1.273z"
});

function SvgItalic(props) {
  return /*#__PURE__*/createElement("svg", _extends$u({
    viewBox: "-7.5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "italic_svg__jam italic_svg__jam-italic"
  }, props), _ref$u);
}

function _extends$v() { _extends$v = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$v.apply(this, arguments); }

var _ref$v = /*#__PURE__*/createElement("path", {
  d: "M3.19 9.345a.97.97 0 011.37 0 .966.966 0 010 1.367l-2.055 2.052a1.932 1.932 0 000 2.735 1.94 1.94 0 002.74 0l4.794-4.787a.966.966 0 000-1.367.966.966 0 010-1.368.97.97 0 011.37 0 2.898 2.898 0 010 4.103l-4.795 4.787a3.879 3.879 0 01-5.48 0 3.864 3.864 0 010-5.47L3.19 9.344zm11.62-.69a.97.97 0 01-1.37 0 .966.966 0 010-1.367l2.055-2.052a1.932 1.932 0 000-2.735 1.94 1.94 0 00-2.74 0L7.962 7.288a.966.966 0 000 1.367.966.966 0 010 1.368.97.97 0 01-1.37 0 2.898 2.898 0 010-4.103l4.795-4.787a3.879 3.879 0 015.48 0 3.864 3.864 0 010 5.47L14.81 8.656z"
});

function SvgLink(props) {
  return /*#__PURE__*/createElement("svg", _extends$v({
    viewBox: "-3 -3 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "link_svg__jam link_svg__jam-link"
  }, props), _ref$v);
}

function _extends$w() { _extends$w = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$w.apply(this, arguments); }

var _ref$w = /*#__PURE__*/createElement("path", {
  d: "M4 1h9a1 1 0 010 2H4a1 1 0 110-2zm0 8h9a1 1 0 010 2H4a1 1 0 010-2zm0-4h9a1 1 0 010 2H4a1 1 0 110-2zM.438.845h.72L1.111 3H.65L.7 1.28H.224L.438.845zM.523 5.59l-.45-.053c.011-.244.09-.439.234-.582a.76.76 0 01.556-.214c.139 0 .263.03.37.089a.67.67 0 01.26.258.677.677 0 01.097.342.988.988 0 01-.115.435c-.075.153-.211.33-.407.535l-.158.17h.647V7H.014l.015-.231.666-.68c.158-.16.263-.288.313-.382a.531.531 0 00.074-.245.227.227 0 00-.067-.17.242.242 0 00-.179-.067.233.233 0 00-.182.081c-.034.038-.077.132-.131.284zm.982 4.398c.08.106.121.23.121.373a.7.7 0 01-.23.528.813.813 0 01-.579.215.758.758 0 01-.545-.203c-.142-.136-.22-.32-.183-.603l.456.042c.015.101.05.174.1.22a.28.28 0 00.194.068c.083 0 .15-.026.203-.078a.253.253 0 00.08-.19.256.256 0 00-.109-.209c-.075-.06-.187-.09-.386-.143l.046-.401a.622.622 0 00.203-.042.223.223 0 00.092-.077.175.175 0 00.032-.1.142.142 0 00-.045-.109.176.176 0 00-.127-.044.211.211 0 00-.13.044.217.217 0 00-.08.113l-.048.035-.444-.056a.703.703 0 01.185-.413.71.71 0 01.53-.217c.189 0 .35.06.479.182a.58.58 0 01.195.436.516.516 0 01-.087.29c-.056.085-.136.153-.246.12a.626.626 0 01.323.219z"
});

function SvgOrderedList(props) {
  return /*#__PURE__*/createElement("svg", _extends$w({
    viewBox: "-5 -6 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "ordered-list_svg__jam ordered-list_svg__jam-ordered-list"
  }, props), _ref$w);
}

function _extends$x() { _extends$x = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$x.apply(this, arguments); }

var _ref$x = /*#__PURE__*/createElement("path", {
  d: "M4 0h9a1 1 0 010 2H4a1 1 0 110-2zm0 8h9a1 1 0 010 2H4a1 1 0 110-2zm0-4h9a1 1 0 010 2H4a1 1 0 110-2zM1 0a1 1 0 110 2 1 1 0 010-2zm0 8a1 1 0 110 2 1 1 0 010-2zm0-4a1 1 0 110 2 1 1 0 010-2z"
});

function SvgUnorderedList(props) {
  return /*#__PURE__*/createElement("svg", _extends$x({
    viewBox: "-5 -7 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "unordered-list_svg__jam unordered-list_svg__jam-unordered-list"
  }, props), _ref$x);
}

function _extends$y() { _extends$y = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$y.apply(this, arguments); }

var _ref$y = /*#__PURE__*/createElement("path", {
  d: "M3.657 4.935H1.15a2.997 2.997 0 01-.15-.94v-.497A3.498 3.498 0 014.498 0H6a3 3 0 013 3 1 1 0 11-2 0 1 1 0 00-1-1H4.498C3.67 2 3 2.67 3 3.498v.497a1 1 0 00.657.94zm5.186 2.1c.102.301.157.624.157.96v.528a3.528 3.528 0 01-3.528 3.528H4a3 3 0 01-3-3V9a1 1 0 112 0v.05a1 1 0 001 1h1.472C6.316 10.05 7 9.367 7 8.523v-.528a1 1 0 00-.72-.96h2.563zM.5 5.51h9a.5.5 0 010 1h-9a.5.5 0 110-1z"
});

function SvgStrikethrough(props) {
  return /*#__PURE__*/createElement("svg", _extends$y({
    viewBox: "-7 -5.5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "strikethrough_svg__jam strikethrough_svg__jam-strikethrough"
  }, props), _ref$y);
}

function _extends$z() { _extends$z = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$z.apply(this, arguments); }

var _ref$z = /*#__PURE__*/createElement("path", {
  d: "M1.5 10h7a.5.5 0 110 1h-7a.5.5 0 110-1zM7 2a1 1 0 110-2h2a1 1 0 110 2v3a4 4 0 11-8 0V2a1 1 0 110-2h2a1 1 0 110 2v3a2 2 0 104 0V2z"
});

function SvgUnderline(props) {
  return /*#__PURE__*/createElement("svg", _extends$z({
    viewBox: "-7 -6.5 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "underline_svg__jam underline_svg__jam-underline"
  }, props), _ref$z);
}

function _extends$A() { _extends$A = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$A.apply(this, arguments); }

var _ref$A = /*#__PURE__*/createElement("path", {
  d: "M1 0h12a1 1 0 010 2H1a1 1 0 110-2z"
});

function SvgMinus(props) {
  return /*#__PURE__*/createElement("svg", _extends$A({
    viewBox: "-5 -11 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "minus_svg__jam minus_svg__jam-minus"
  }, props), _ref$A);
}

function _extends$B() { _extends$B = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$B.apply(this, arguments); }

var _ref$B = /*#__PURE__*/createElement("path", {
  d: "M18.799 9.957l-1.121-1.121a1 1 0 111.414-1.415l2.828 2.829a1 1 0 010 1.414l-2.828 2.828a1 1 0 01-1.414-1.414l1.121-1.121h-6.485v6.485l1.121-1.121a1 1 0 011.414 1.414l-2.828 2.829a1 1 0 01-1.414 0l-2.829-2.829a1 1 0 011.414-1.414l1.122 1.121v-6.485H3.828l1.122 1.121a1 1 0 01-1.414 1.414L.707 11.664a1 1 0 010-1.414l2.829-2.83A1 1 0 014.95 8.836l-1.122 1.12h6.486V3.473l-1.122 1.12a1 1 0 01-1.414-1.414L10.607.35a1 1 0 011.414 0l2.828 2.829a1 1 0 11-1.414 1.414l-1.121-1.121v6.485h6.485z"
});

function SvgMove(props) {
  return /*#__PURE__*/createElement("svg", _extends$B({
    viewBox: "-0.5 -1 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "move_svg__jam move_svg__jam-move"
  }, props), _ref$B);
}

function _extends$C() { _extends$C = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$C.apply(this, arguments); }

var _ref$C = /*#__PURE__*/createElement("path", {
  d: "M3 4a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6zm0 14a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2zm0-5a3 3 0 110-6 3 3 0 010 6zm0-2a1 1 0 100-2 1 1 0 000 2z"
});

function SvgMoreVertical(props) {
  return /*#__PURE__*/createElement("svg", _extends$C({
    viewBox: "-9 -2 24 24",
    width: 24,
    height: 24,
    preserveAspectRatio: "xMinYMin",
    className: "more-vertical_svg__jam more-vertical_svg__jam-more-vertical"
  }, props), _ref$C);
}



var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  chatting: SvgChatting,
  products: SvgProducts,
  check: SvgCheck,
  dashboard: SvgDashboard,
  settings: SvgSetting,
  customers: SvgCustomers,
  cart: SvgCart,
  trendUp: SvgTrendUp,
  moneyBag: SvgMoneyBag,
  menu: SvgMenu,
  arrowDown: SvgArrowDown,
  arrowLeft: SvgArrowLeft,
  logo: SvgLogo,
  close: SvgClose,
  trash: SvgTrash,
  pencil: SvgPencil,
  alignCenter: SvgAlignCenter,
  alignJustify: SvgAlignJustify,
  alignLeft: SvgAlignLeft,
  alignRight: SvgAlignRight,
  backgroundColor: SvgBackgroundColor,
  b: SvgBold,
  color: SvgColor,
  h1: SvgHeader1,
  h2: SvgHeader2,
  h3: SvgHeader3,
  h4: SvgHeader4,
  h5: SvgHeader5,
  h6: SvgHeader6,
  indent: SvgIndent,
  i: SvgItalic,
  link: SvgLink,
  orderedList: SvgOrderedList,
  unorderedList: SvgUnorderedList,
  s: SvgStrikethrough,
  u: SvgUnderline,
  hr: SvgMinus,
  move: SvgMove,
  moreVertical: SvgMoreVertical
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    path {\n      fill: ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      padding: 11px;\n      border: 1px solid ", ";\n      border-radius: 10px;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className,
      bgColor = _ref.bgColor;
  var bg;

  if (bgColor) {
    bg = css(_templateObject(), bgColor);
  }

  var SVGIcon = icons[icon];
  var iconColor = css(_templateObject2(), color);
  return jsx(SVGIcon, {
    style: {
      margin: '0px'
    },
    css: [{
      width: size,
      height: 'auto'
    }, iconColor, bg],
    className: className
  });
};

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 1.5rem;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.5rem 3.875rem 0.5rem 3.875rem;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.25rem 1.0625rem;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  svg {\n    margin: 0;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    height: 3rem;\n    font-size: 1.125rem;\n    padding: 0 1.5rem;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 2.5rem;\n    font-size: 1rem;\n    padding: 0.5rem 3.875rem 0.5rem 3.875rem;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    height: 1.75rem;\n    font-size: 0.75rem;\n    padding: 0.3rem 1.0rem;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    color: #43425d;\n    svg {\n      fill: #43425d;\n    }\n    &:disabled {\n      color: #c6c6ce;\n      svg {\n        fill: #c6c6ce;\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    border: 1px solid #43425d;\n    color: #343a40;\n    svg {\n      fill: #343a40;\n    }\n    &:hover:enabled {\n      background: #f1f3f5;\n    }\n    &:active:enabled {\n      background: #dee2e6;\n    }\n    &:disabled {\n      border: 1px solid #c6c6ce;\n      color: #c6c6ce;\n      svg {\n        fill: #c6c6ce;\n      }\n    }\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    background-color: #43425d;\n    border: none;\n    color: white;\n    svg {\n      fill: white;\n    }\n    &:hover:enabled {\n      background-color: #43425d;\n    }\n    &:active:enabled {\n      background-color: #43425d;\n    }\n    &:disabled {\n      background-color: #c6c6ce;\n    }\n  "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var themes = {
  primary: css(_templateObject$1()),
  secondary: css(_templateObject2$1()),
  tertiary: css(_templateObject3())
};
var sizes = {
  small: css(_templateObject4()),
  medium: css(_templateObject5()),
  big: css(_templateObject6())
};
var iconOnlyStyle = css(_templateObject7());
var iconOnlySizes = {
  small: css(_templateObject8()),
  medium: css(_templateObject9()),
  big: css(_templateObject10())
};
/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */

var Button = function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      iconOnly = _ref.iconOnly,
      onClick = _ref.onClick,
      className = _ref.className;
  return jsx("button", {
    css: [themes[theme], sizes[size], {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }, iconOnly && [iconOnlyStyle, iconOnlySizes[size]]],
    className: '_button ' + className,
    disabled: disabled,
    onClick: onClick
  }, children);
};

Button.defaultProps = {
  theme: "primary",
  size: "medium"
};
var Button$1 = React__default.memo(Button);

function _templateObject$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var style = css(_templateObject$2());

var Input = function Input(_ref) {
  var disabled = _ref.disabled,
      inputPlaceHolder = _ref.inputPlaceHolder,
      inputType = _ref.inputType,
      onInputFunc = _ref.onInputFunc,
      className = _ref.className;
  return jsx("input", {
    type: inputType,
    css: [style],
    className: '_input ' + className,
    placeholder: inputPlaceHolder,
    disabled: disabled,
    onInput: onInputFunc
  });
};

Input.defaultProps = {
  disabled: false
};
var Input$1 = React__default.memo(Input);

function _templateObject8$1() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8$1 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$1() {
  var data = _taggedTemplateLiteral(["\n    border-left: 0.3125rem solid #a3a0fb;\n    .content {\n      left: -0.3125rem;\n    }\n  "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 0.3125rem solid #a3a0fb;\n    .content {\n      bottom: -0.15rem;\n    }\n  "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    border-right: 0.3125rem solid #a3a0fb;\n    .content {\n      right: -0.3125rem;\n    }\n  "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    border-top: 0.3125rem solid #a3a0fb;\n    .content {\n      top: -0.15rem;\n    }\n  "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    color: #4d4f5c;\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    background-color: #43425d;\n    color: #ffffff;\n    &:hover {\n      background-color: #4d4f5c;\n    }\n  "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var style$1 = css(_templateObject$3());
var themes$1 = {
  dark: css(_templateObject2$2()),
  light: css(_templateObject3$1())
};
var borders = {
  top: css(_templateObject4$1()),
  right: css(_templateObject5$1()),
  bottom: css(_templateObject6$1()),
  left: css(_templateObject7$1()),
  none: css(_templateObject8$1())
};

var ListItem = function ListItem(_ref) {
  var width = _ref.width,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      leading = _ref.leading,
      trailing = _ref.trailing,
      theme = _ref.theme,
      children = _ref.children,
      border = _ref.border,
      className = _ref.className;
  return jsx("li", {
    css: [style$1, {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }, themes$1[theme], borders[border]],
    className: "_list-item " + className
  }, jsx("div", {
    className: "content-wrapper"
  }, jsx("div", {
    className: "content"
  }, jsx("div", {
    className: "leading"
  }, leading), children), jsx("div", {
    className: "trailing"
  }, trailing)));
};

ListItem.defaultProps = {
  theme: "dark",
  border: "left"
};
var ListItem$1 = React__default.memo(ListItem);

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n        font-weight: bold;\n        span {\n          color: rgba(0, 0, 0, 0.5);\n          border-radius: 14px;\n          padding: 0.3125rem 0.9375rem;\n          background-color: rgba(", ", 0.2);\n        }\n      "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n        span {\n          label {\n            cursor: pointer;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            flex-wrap: wrap;\n            img {\n              margin: 0.875rem;\n              border: 1px solid #eee;\n              width: 3.125rem;\n              height: 3.125rem;\n            }\n          }\n        }\n      "]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n      border-bottom: 1px solid #f1f1f3;\n      &:hover {\n        background-color: rgba(241, 241, 243, 0.5);\n      }\n    "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n      background-color: #f5f6fa;\n      color: #a3a6b4;\n    "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    th,\n    td {\n      width: ", "%;\n    }\n\n    @media screen and (max-width: 325px) {\n      th,\n      td {\n        width: ", "%;\n      }\n    }\n  "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var TableRow = function TableRow(_ref) {
  var type = _ref.type,
      cellList = _ref.cellList,
      className = _ref.className;
  var style = css(_templateObject$4(), 100 / cellList.length, 100 / cellList.length);
  var rowStyle;
  var RowItems;

  if (type === "head") {
    rowStyle = css(_templateObject2$3());
  } else {
    rowStyle = css(_templateObject3$2());
  }

  RowItems = cellList.map(function (item) {
    var cellStyle;
    var element;

    if (item.data === undefined || item.data === null) {
      return type === "head" ? jsx("th", {
        css: [cellStyle]
      }, jsx("span", null, "-")) : jsx("td", {
        css: [cellStyle]
      }, jsx("span", null, "-"));
    } else if (item.type === "picture") {
      element = jsx("label", null, jsx("img", {
        src: item.data.imageUrl
      }), item.data.title);
      cellStyle = css(_templateObject4$2());
    } else if (item.type === "text") {
      element = item.data;
    } else if (item.type === "price") {
      element = item.data + "원";
    } else if (item.type === "date") {
      element = item.data;
    } else if (item.type === "stock" && item.data !== undefined && item.data !== null) {
      var stateColor;

      if (+item.data > 50) {
        stateColor = "105, 228, 166";
      } else if (+item.data === 0) {
        stateColor = "255, 114, 133";
      } else {
        stateColor = "255, 202, 131";
      }

      element = item.data;
      cellStyle = css(_templateObject5$2(), stateColor);
    } else if (item.type === "extra") {
      element = item.data;
    }

    return type === "head" ? jsx("th", {
      css: [cellStyle]
    }, jsx("span", null, element)) : jsx("td", {
      css: [cellStyle]
    }, jsx("span", null, element));
  });
  return jsx("tr", {
    css: [style, rowStyle],
    className: "_table-row " + className
  }, RowItems);
};

TableRow.defaultProps = {
  type: "body"
};
var TableRow$1 = React__default.memo(TableRow);

/** @jsx jsx */

var ClickableIcon = function ClickableIcon(_ref) {
  var icon = _ref.icon,
      size = _ref.size,
      className = _ref.className,
      onClick = _ref.onClick;
  return jsx("div", {
    className: '_clickable-icon ' + className,
    onClick: onClick
  }, jsx(Icon, {
    icon: icon,
    size: size
  }));
};

ClickableIcon.defaultProps = {
  icon: "settings"
};

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    button + button {\n      ", ": ", ";\n    }\n\n    @media screen and (max-width: 325px) {\n      flex-direction: column;\n      button + button {\n        margin-left: 0px;\n        margin-top: ", ";\n      }\n    }\n  "]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
// direction 에 따라 margin-left 또는 margin-top 설정
var style$2 = function style(direction, gap) {
  var marginType = direction === 'row' ? 'margin-left' : 'margin-top';
  return css(_templateObject$5(), marginType, gap, gap);
};

var rightAlignStyle = css(_templateObject2$4());

var ButtonGroup = function ButtonGroup(_ref) {
  var direction = _ref.direction,
      rightAlign = _ref.rightAlign,
      children = _ref.children,
      gap = _ref.gap,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      className = _ref.className;
  return jsx("div", {
    css: [{
      display: 'flex',
      flexDirection: direction
    }, style$2(direction, gap), {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }, rightAlign && rightAlignStyle],
    className: '_button-group ' + className
  }, children);
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
};

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 25rem;\n  background: white;\n  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n  padding: 2rem;\n\n  h3 {\n    font-size: 1.5rem;\n    color: #343a40;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  p {\n    font-size: 1.125rem;\n    margin: 0;\n    color: #868e96;\n  }\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n  z-index: 15;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral(["\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var fullscreen = css(_templateObject$6());
var darkLayer = css(_templateObject2$5());
var whiteBoxWrapper = css(_templateObject3$3());
var whiteBox = css(_templateObject4$3());

var Dialog = function Dialog(_ref) {
  var visible = _ref.visible,
      title = _ref.title,
      description = _ref.description,
      hideButtons = _ref.hideButtons,
      cancellable = _ref.cancellable,
      cancelText = _ref.cancelText,
      confirmText = _ref.confirmText,
      children = _ref.children,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm,
      className = _ref.className;
  var fadeTransition = useTransition(visible, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  var slideUpTransition = useTransition(visible, null, {
    from: {
      transform: "translateY(200px) scale(0.8)",
      opacity: 0
    },
    enter: {
      transform: "translateY(0px) scale(1)",
      opacity: 1
    },
    leave: {
      transform: "translateY(200px) scale(0.8)",
      opacity: 0
    },
    config: {
      tension: 200,
      friction: 15
    }
  });
  return jsx(Fragment, null, fadeTransition.map(function (_ref2) {
    var item = _ref2.item,
        key = _ref2.key,
        props = _ref2.props;
    return item ? jsx(animated.div, {
      css: [fullscreen, darkLayer],
      key: key,
      style: props,
      className: '_dialog ' + className
    }) : null;
  }), slideUpTransition.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return item ? jsx(animated.div, {
      css: [fullscreen, whiteBoxWrapper],
      style: props,
      key: key,
      className: className
    }, jsx("div", {
      css: whiteBox
    }, title && jsx("h3", null, title), description && jsx("p", null, description), children, !hideButtons && jsx(ButtonGroup, {
      css: {
        marginTop: "3rem"
      },
      rightAlign: true
    }, cancellable && jsx(Button$1, {
      theme: "tertiary",
      onClick: onCancel
    }, cancelText), jsx(Button$1, {
      onClick: onConfirm
    }, confirmText)))) : null;
  }));
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인"
};

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n        position: fixed;\n      "]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral(["\n        position: sticky;\n      "]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n    z-index: 0;\n    transition: transform 0.5s ease-out;\n    * {\n      transition: opacity 0.2s;\n    }\n    transform: translateX(-110%);\n    * {\n      opacity: 0;\n    }\n  "]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n    z-index: 0;\n    transition: all 0.5s ease-out 0.2s;\n    * {\n      transition: opacity 0.2s ease-out;\n    }\n    width: 0;\n    min-width: 0;\n\n    * {\n      opacity: 0;\n    }\n  "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral(["\n    z-index: 1000;\n\n    transition: transform 0.5s ease-out 0.2s;\n    * {\n      transition: opacity 0.2s 0.5s;\n    }\n    transform: translateX(0);\n  "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral(["\n    z-index: 1000;\n\n    transition: all 0.5s ease-out;\n    * {\n      transition: opacity 0.2s ease-out 0.5s;\n    }\n  "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var style$3 = css(_templateObject$7());
var show = {
  shrink: css(_templateObject2$6()),
  slideIn: css(_templateObject3$4())
};
var hide = {
  shrink: css(_templateObject4$4()),
  slideIn: css(_templateObject5$3())
};
/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */

var SideBar = function SideBar(_ref) {
  var width = _ref.width,
      minWidth = _ref.minWidth,
      maxWidth = _ref.maxWidth,
      height = _ref.height,
      toggled = _ref.toggled,
      children = _ref.children,
      header = _ref.header,
      sticky = _ref.sticky,
      toggleAnimation = _ref.toggleAnimation,
      className = _ref.className;
  var stickyStyle = sticky ? css(_templateObject6$2()) : css(_templateObject7$2());
  return jsx("div", {
    css: [style$3, {
      width: width,
      height: height,
      minWidth: minWidth,
      maxWidth: maxWidth
    }, stickyStyle, toggled ? show[toggleAnimation] : hide[toggleAnimation]],
    className: "_side-bar " + className
  }, jsx("div", {
    className: "_side-bar__header"
  }, header), children);
};

SideBar.defaultProps = {
  height: "100vh",
  toggled: true
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  \n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 Input 컴포넌트로 이루어진 Form을 만들고 싶을 때 이 컴포넌트를 사용하세요.
 */
var style$4 = css(_templateObject$8());

var Form = function Form(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      height = _ref.height,
      bodyElements = _ref.bodyElements,
      footerElements = _ref.footerElements,
      className = _ref.className,
      redirectText = _ref.redirectText,
      redirectUrl = _ref.redirectUrl;
  return jsx("div", {
    css: [style$4, {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
      height: height
    }],
    className: '_form ' + className
  }, jsx("div", {
    className: "form-header"
  }, jsx("h1", {
    className: "title"
  }, title), jsx("p", {
    className: "sub-title"
  }, subTitle)), jsx("div", {
    className: "form-body"
  }, bodyElements), jsx("div", {
    className: "form-footer"
  }, footerElements, jsx("a", {
    className: "guide",
    href: redirectUrl
  }, redirectText)));
};

Form.defaultProps = {};

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n    border-radius: ", ";\n    background-color: ", ";\n\n    &__header {\n      ", "\n    }\n  "]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0px 3px 9px #0000000a;\n  "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$7() {
  var data = _taggedTemplateLiteral(["\n    box-shadow: 0px 2px 6px #0000000a;\n  "]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var elevations = {
  0: css(_templateObject$9()),
  1: css(_templateObject2$7()),
  2: css(_templateObject3$5())
};

var Card = function Card(_ref) {
  var width = _ref.width,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      height = _ref.height,
      padding = _ref.padding,
      children = _ref.children,
      elevation = _ref.elevation,
      title = _ref.title,
      radius = _ref.radius,
      sideContent = _ref.sideContent,
      backgroundColor = _ref.backgroundColor,
      className = _ref.className;
  var style = css(_templateObject4$5(), radius ? "0.25rem" : "0rem", backgroundColor, title ? "border-bottom: 1px solid #eee; > h1 { padding-bottom: 1.4375rem; }" : "");
  return jsx("div", {
    className: "_card " + className,
    css: [style, {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth,
      height: height,
      padding: padding
    }, elevations[elevation]]
  }, jsx("div", {
    className: "_card__header"
  }, jsx("h1", null, title), jsx("div", null, sideContent)), jsx("div", {
    className: "_card__body"
  }, children));
};

Card.defaultProps = {
  elevation: "1",
  radius: true
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n  \n"]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}
var style$5 = css(_templateObject$a());

var DropDown = function DropDown(_ref) {
  var text = _ref.text,
      items = _ref.items,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      className = _ref.className;
  var listElements = items.map(function (item) {
    return jsx("li", null, item.text);
  });
  return jsx("div", {
    css: [style$5, {
      width: width,
      maxWidth: maxWidth,
      minWidth: minWidth
    }],
    className: '_drop-down ' + className
  }, jsx("button", null, jsx("span", null, text), jsx(Icon, {
    icon: "arrowDown"
  })), jsx("ul", null, listElements));
};

DropDown.defaultProps = {};

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    background-color: ", ";\n    ", ";\n    box-shadow: 0px 2px 6px #0000000a;\n    height: ", ";\n  "]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}

var PageHeader = function PageHeader(_ref) {
  var color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      leftElement = _ref.leftElement,
      rightElement = _ref.rightElement,
      sticky = _ref.sticky,
      logo = _ref.logo,
      height = _ref.height,
      className = _ref.className;
  var style = css(_templateObject$b(), color, backgroundColor, sticky ? "position: sticky; top: 0;" : "position: fixed; top: 0;", height);
  return jsx("header", {
    css: [style],
    className: "_page-header " + className
  }, jsx("nav", {
    className: "_page-header__contents"
  }, jsx("div", {
    className: "_page-header__left--items"
  }, leftElement), jsx("div", {
    className: "_page-header__logo"
  }, logo), jsx("div", {
    className: "_page-header__spacer"
  }), jsx("div", {
    className: "_page-header__right--items"
  }, rightElement)));
};

PageHeader.defaultProps = {
  color: "black",
  backgroundColor: "#ffffff",
  sticky: false
};

function _templateObject$c() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var style$6 = css(_templateObject$c());

var Table = function Table(_ref) {
  var children = _ref.children,
      width = _ref.width,
      className = _ref.className;
  return jsx("table", {
    css: [style$6, {
      width: width
    }],
    className: "_table " + className
  }, jsx("div", {
    className: "row-container"
  }, children));
};

Table.defaultProps = {};

/** @jsx jsx */

var BackDrop = function BackDrop(_ref) {
  var click = _ref.click,
      className = _ref.className,
      backgroundColor = _ref.backgroundColor;
  return jsx("div", {
    className: "_back-drop " + className,
    css: [{
      backgroundColor: backgroundColor
    }],
    onClick: click
  });
};

BackDrop.defaultProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
};

export { BackDrop, Button$1 as Button, ButtonGroup, Card, ClickableIcon, Dialog, DropDown, Form, Icon, Input$1 as Input, ListItem$1 as ListItem, PageHeader, SideBar, Table, TableRow$1 as TableRow };
