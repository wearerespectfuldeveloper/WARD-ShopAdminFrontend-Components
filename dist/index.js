import { css, jsx } from '@emotion/core';
import React, { Fragment } from 'react';
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

var _ref =
/*#__PURE__*/
React.createElement("defs", null, React.createElement("clipPath", {
  id: "chatting_svg__a"
}, React.createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2 =
/*#__PURE__*/
React.createElement("g", {
  clipPath: "url(#chatting_svg__a)"
}, React.createElement("path", {
  d: "M10 13H5l1.828-2H13a1 1 0 001-1V4h1a1 1 0 011 1v7a1 1 0 01-1 1h-2v3zM3 9H1a1 1 0 01-1-1V1a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H6l-3 3z",
  fill: "#a5a4bf"
}));

function SvgChatting(props) {
  return React.createElement("svg", _extends({
    width: 16,
    height: 16
  }, props), _ref, _ref2);
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var _ref$1 =
/*#__PURE__*/
React.createElement("path", {
  d: "M14 16V0h2v16zM0 16V0h2v16zm11-5V0h2v11zm-5 0V0h4v11zm-3 0V0h2v11z",
  fill: "#a3a0fb"
});

function SvgProducts(props) {
  return React.createElement("svg", _extends$1({
    width: 15.999,
    height: 15.999
  }, props), _ref$1);
}

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var _ref$2 =
/*#__PURE__*/
React.createElement("path", {
  d: "M6.5 10.8L0 4.3l2.1-2.1 4.4 4.3L13 0l2.1 2.1z",
  fill: "#fff"
});

function SvgCheck(props) {
  return React.createElement("svg", _extends$2({
    width: 15.1,
    height: 10.8
  }, props), _ref$2);
}

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var _ref$3 =
/*#__PURE__*/
React.createElement("defs", null, React.createElement("clipPath", {
  id: "dashboard_svg__a"
}, React.createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2$1 =
/*#__PURE__*/
React.createElement("g", {
  clipPath: "url(#dashboard_svg__a)"
}, React.createElement("path", {
  d: "M13 16a.945.945 0 01-1-1V6a.945.945 0 011-1h2a.945.945 0 011 1v9a.945.945 0 01-1 1zm-6 0a.944.944 0 01-1-1V1a.945.945 0 011-1h2a.945.945 0 011 1v14a.944.944 0 01-1 1zm-6 0a.945.945 0 01-1-1v-4a.945.945 0 011-1h2a.946.946 0 011 1v4a.945.945 0 01-1 1z",
  fill: "#a5a4bf"
}));

function SvgDashboard(props) {
  return React.createElement("svg", _extends$3({
    width: 16,
    height: 16
  }, props), _ref$3, _ref2$1);
}

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var _ref$4 =
/*#__PURE__*/
React.createElement("defs", null, React.createElement("clipPath", {
  id: "setting_svg__a"
}, React.createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2$2 =
/*#__PURE__*/
React.createElement("g", {
  clipPath: "url(#setting_svg__a)"
}, React.createElement("path", {
  d: "M13.3 5.2l1.1-2.1L13 1.7l-2.1 1.1a3.582 3.582 0 00-1.1-.4L9 0H7l-.8 2.3a4.179 4.179 0 00-1 .4L3.1 1.6 1.6 3.1l1.1 2.1a4.179 4.179 0 00-.4 1L0 7v2l2.3.8c.1.4.3.7.4 1.1L1.6 13 3 14.4l2.1-1.1a3.582 3.582 0 001.1.4L7 16h2l.8-2.3c.4-.1.7-.3 1.1-.4l2.1 1.1 1.4-1.4-1.1-2.1a3.582 3.582 0 00.4-1.1L16 9V7l-2.3-.8a4.179 4.179 0 00-.4-1zM8 11a2.946 2.946 0 01-3-3 2.946 2.946 0 013-3 2.946 2.946 0 013 3 2.946 2.946 0 01-3 3z",
  fill: "#a5a4bf"
}));

function SvgSetting(props) {
  return React.createElement("svg", _extends$4({
    width: 16,
    height: 16
  }, props), _ref$4, _ref2$2);
}

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var _ref$5 =
/*#__PURE__*/
React.createElement("defs", null, React.createElement("clipPath", {
  id: "customers_svg__a"
}, React.createElement("path", {
  fill: "none",
  d: "M0 0h14v16H0z"
})));

var _ref2$3 =
/*#__PURE__*/
React.createElement("g", {
  clipPath: "url(#customers_svg__a)"
}, React.createElement("path", {
  d: "M0 16a6.018 6.018 0 016-6h2a6.018 6.018 0 016 6zm2.6-2h8.9A4.033 4.033 0 008 12H6.1a4.035 4.035 0 00-3.5 2zM3 5V4a4.012 4.012 0 014-4 4.012 4.012 0 014 4v1a4.012 4.012 0 01-4 4 4.012 4.012 0 01-4-4zm2-1v1a2.006 2.006 0 002 2 2.006 2.006 0 002-2V4a2.006 2.006 0 00-2-2 2.006 2.006 0 00-2 2z",
  fill: "#a5a4bf"
}));

function SvgCustomers(props) {
  return React.createElement("svg", _extends$5({
    width: 14,
    height: 16
  }, props), _ref$5, _ref2$3);
}

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var _ref$6 =
/*#__PURE__*/
React.createElement("defs", null, React.createElement("clipPath", {
  id: "cart_svg__a"
}, React.createElement("path", {
  fill: "none",
  d: "M0 0h16v16H0z"
})));

var _ref2$4 =
/*#__PURE__*/
React.createElement("g", {
  clipPath: "url(#cart_svg__a)"
}, React.createElement("path", {
  d: "M11.014 14a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zm-10 0a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zM0 11V9h12.261l1.427-5H2.014V2h-2V0h3a1 1 0 011 1v1h11a1.021 1.021 0 01.961 1.275l-2 7a1 1 0 01-.962.725zm1-3V7h4v1zm1-2V5h4v1z",
  fill: "#a4a1fb"
}));

function SvgCart(props) {
  return React.createElement("svg", _extends$6({
    width: 16,
    height: 16
  }, props), _ref$6, _ref2$4);
}

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var _ref$7 =
/*#__PURE__*/
React.createElement("path", {
  d: "M8.7 2h3.6L8.7 5.6l-4-4L0 6.3l1.4 1.4 3.3-3.3 4 4 5-5V7h2V0h-7z",
  fill: "#4ad991"
});

function SvgTrendUp(props) {
  return React.createElement("svg", _extends$7({
    width: 15.7,
    height: 8.4
  }, props), _ref$7);
}

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var _ref$8 =
/*#__PURE__*/
React.createElement("defs", null, React.createElement("clipPath", {
  id: "moneyBag_svg__a"
}, React.createElement("path", {
  fill: "none",
  d: "M0 0h14v16H0z"
})));

var _ref2$5 =
/*#__PURE__*/
React.createElement("g", {
  clipPath: "url(#moneyBag_svg__a)"
}, React.createElement("path", {
  d: "M3.167 16a3.359 3.359 0 01-2.768-1.5 3.02 3.02 0 010-3l3.514-6a1.136 1.136 0 01.958-.5h4.258a1.135 1.135 0 01.958.5l3.514 6a3.013 3.013 0 010 3 3.359 3.359 0 01-2.768 1.5zm1.7-13a1 1 0 01-.745-.3l-1.065-1A.975.975 0 013.802 0h6.387a.993.993 0 01.745 1.7l-1.065 1a1 1 0 01-.745.3z",
  fill: "#4ad991"
}));

function SvgMoneyBag(props) {
  return React.createElement("svg", _extends$8({
    width: 14,
    height: 16
  }, props), _ref$8, _ref2$5);
}

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var _ref$9 =
/*#__PURE__*/
React.createElement("path", {
  d: "M12 2a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zM6 2a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2zM0 2a2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2z",
  fill: "#a4afb7"
});

function SvgMenu(props) {
  return React.createElement("svg", _extends$9({
    width: 16,
    height: 4
  }, props), _ref$9);
}

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

var _ref$a =
/*#__PURE__*/
React.createElement("path", {
  d: "M.379.325l5.348 6.2h0l4.706-6.2",
  fill: "none",
  stroke: "#808495"
});

function SvgArrowDown(props) {
  return React.createElement("svg", _extends$a({
    width: 10.83,
    height: 7.318
  }, props), _ref$a);
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
  arrowDown: SvgArrowDown
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
    css: [{
      width: size,
      height: 'auto'
    }, iconColor, bg],
    className: className
  });
};

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 1.5rem;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.5rem 3.875rem 0.5rem 3.875rem;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 0.25rem 1.0625rem;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  svg {\n    margin: 0;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    height: 3rem;\n    font-size: 1.125rem;\n    padding: 0 1.5rem;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    height: 2.5rem;\n    font-size: 1rem;\n    padding: 0.5rem 3.875rem 0.5rem 3.875rem;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 1.75rem;\n    font-size: 0.75rem;\n    padding: 0.3rem 1.0rem;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background: none;\n    color: #43425d;\n    svg {\n      fill: #43425d;\n    }\n    &:disabled {\n      color: #c6c6ce;\n      svg {\n        fill: #c6c6ce;\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    border: 1px solid #43425d;\n    color: #343a40;\n    svg {\n      fill: #343a40;\n    }\n    &:hover:enabled {\n      background: #f1f3f5;\n    }\n    &:active:enabled {\n      background: #dee2e6;\n    }\n    &:disabled {\n      border: 1px solid #c6c6ce;\n      color: #c6c6ce;\n      svg {\n        fill: #c6c6ce;\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    background-color: #43425d;\n    border: none;\n    color: white;\n    svg {\n      fill: white;\n    }\n    &:hover:enabled {\n      background-color: #43425d;\n    }\n    &:active:enabled {\n      background-color: #43425d;\n    }\n    &:disabled {\n      background-color: #c6c6ce;\n    }\n  "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  outline: none;\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n  svg {\n    width: 1rem;\n    margin-right: 1rem;\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var style = css(_templateObject$1());
var themes = {
  primary: css(_templateObject2$1()),
  secondary: css(_templateObject3()),
  tertiary: css(_templateObject4())
};
var sizes = {
  small: css(_templateObject5()),
  medium: css(_templateObject6()),
  big: css(_templateObject7())
};
var iconOnlyStyle = css(_templateObject8());
var iconOnlySizes = {
  small: css(_templateObject9()),
  medium: css(_templateObject10()),
  big: css(_templateObject11())
};
/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */

var Button = function Button(_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      size = _ref.size,
      disabled = _ref.disabled,
      width = _ref.width,
      iconOnly = _ref.iconOnly,
      onClick = _ref.onClick;
  return jsx("button", {
    css: [style, themes[theme], sizes[size], {
      width: width
    }, iconOnly && [iconOnlyStyle, iconOnlySizes[size]]],
    disabled: disabled,
    onClick: onClick
  }, children);
};

Button.defaultProps = {
  theme: "primary",
  size: "medium"
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-bottom: 2px solid #E9E9F0;\n  padding: 9px;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #43425D;\n  }\n  \n  transition: border-bottom 0.5s;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var style$1 = css(_templateObject$2());

var Input = function Input(_ref) {
  var width = _ref.width,
      disabled = _ref.disabled,
      inputPlaceHolder = _ref.inputPlaceHolder,
      inputType = _ref.inputType;
  return jsx("input", {
    type: inputType,
    css: [style$1, {
      width: width
    }],
    placeholder: inputPlaceHolder,
    disabled: disabled
  });
};

Input.defaultProps = {
  width: '400px',
  disabled: false
};

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
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  cursor: pointer;\n\n  .content {\n    display: flex;\n    align-items: center;\n    position: relative;\n    padding: 1rem;\n\n    .trailing {\n      position: absolute;\n      right: 1.75rem;\n    }\n    .leading {\n      margin-right: 0.75rem;\n    }\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var style$2 = css(_templateObject$3());
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
      leading = _ref.leading,
      trailing = _ref.trailing,
      theme = _ref.theme,
      children = _ref.children,
      border = _ref.border;
  return jsx("li", {
    css: [style$2, {
      width: width
    }, themes$1[theme], borders[border]]
  }, jsx("div", {
    className: "content"
  }, jsx("div", {
    className: "leading"
  }, leading), children, jsx("div", {
    className: "trailing"
  }, trailing)));
};

ListItem.defaultProps = {
  theme: "dark",
  border: "left"
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n          font-weight: bold;\n          span {\n            color: rgba(0, 0, 0, 0.5);\n            border-radius: 14px;\n            padding: 0.3125rem 0.9375rem;\n            background-color: rgba(", ", 0.2);\n          }\n        "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n          span {\n            label {\n              cursor: pointer;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              flex-wrap: wrap;\n              img {\n                margin: 0.875rem;\n                border: 1px solid #eee;\n                width: 3.125rem;\n                height: 3.125rem;\n              }\n            }\n          }\n\n        "]);

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
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    th {\n      padding: 0.75rem 1.875rem;\n      text-align: center;\n    }\n    td {\n      padding: 1.25rem 1.875rem;\n      text-align: center;\n    }\n    th,\n    td {\n      width: ", "%;\n      span {\n        font-size: 0.6875rem;\n      }\n    }\n  "]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var TableRow = function TableRow(_ref) {
  var type = _ref.type,
      cellList = _ref.cellList;
  var style = css(_templateObject$4(), 100 / cellList.length);
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
    element = item.data;

    switch (item.type) {
      case "picture":
        element = jsx("label", null, jsx("img", {
          src: item.data[0]
        }), item.data[1]);
        cellStyle = css(_templateObject4$2());
        break;

      case "price":
        element = item.data + '원';
        break;

      case "stock":
        var stateText;
        var stateColor;

        if (+item.data > 50) {
          stateText = " 재고 많음";
          stateColor = "105, 228, 166";
        } else if (+item.data === 0) {
          stateText = " 재고 없음";
          stateColor = "255, 114, 133";
        } else {
          stateText = " 재고 부족";
          stateColor = "255, 202, 131";
        }

        element = item.data + stateText;
        cellStyle = css(_templateObject5$2(), stateColor);
        break;
    }

    return type === "head" ? jsx("th", {
      css: [cellStyle]
    }, jsx("span", null, element)) : jsx("td", {
      css: [cellStyle]
    }, jsx("span", null, element));
  });
  return jsx("tr", {
    css: [style, rowStyle]
  }, RowItems);
};

TableRow.defaultProps = {
  type: "body"
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */
// direction 에 따라 margin-left 또는 margin-top 설정
var gapStyle = function gapStyle(direction, gap) {
  var marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'button + button': _defineProperty({}, marginType, gap)
  });
};

var rightAlignStyle = css(_templateObject$5());

var ButtonGroup = function ButtonGroup(_ref) {
  var direction = _ref.direction,
      rightAlign = _ref.rightAlign,
      children = _ref.children,
      gap = _ref.gap,
      className = _ref.className;
  return jsx("div", {
    css: [{
      display: 'flex',
      flexDirection: direction
    }, gapStyle(direction, gap), rightAlign && rightAlignStyle],
    className: className
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

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject2$4 = function _templateObject2() {
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
var darkLayer = css(_templateObject2$4());
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
      onConfirm = _ref.onConfirm;
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
      style: props
    }) : null;
  }), slideUpTransition.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key,
        props = _ref3.props;
    return item ? jsx(animated.div, {
      css: [fullscreen, whiteBoxWrapper],
      style: props,
      key: key
    }, jsx("div", {
      css: whiteBox
    }, title && jsx("h3", null, title), description && jsx("p", null, description), children, !hideButtons && jsx(ButtonGroup, {
      css: {
        marginTop: "3rem"
      },
      rightAlign: true
    }, cancellable && jsx(Button, {
      theme: "tertiary",
      onClick: onCancel
    }, cancelText), jsx(Button, {
      onClick: onConfirm
    }, confirmText)))) : null;
  }));
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인"
};

function _templateObject9$1() {
  var data = _taggedTemplateLiteral(["\n      transform: translateX(-100vw);\n      * {\n        opacity: 0;\n      }\n    "]);

  _templateObject9$1 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8$2() {
  var data = _taggedTemplateLiteral(["\n      width: 0rem;\n      * {\n        opacity: 0;\n      }\n    "]);

  _templateObject8$2 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7$2() {
  var data = _taggedTemplateLiteral(["\n      transform: translateX(0rem);\n    "]);

  _templateObject7$2 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = _taggedTemplateLiteral(["\n      position: absolute;\n      transition: transform 1s;\n      * {\n        transition: opacity 0.2s 1s;\n      }\n    "]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = _taggedTemplateLiteral(["\n      position: sticky;\n      transition: width 0.5s ease-out;\n      * {\n        transition: opacity 0.2s ease-out;\n      }\n    "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n    background-color: #43425d;\n    .sidebar-header {\n      font-size: 0.9375rem;\n      letter-spacing: 0.1875rem;\n      color: white;\n      padding: 1.625rem 1.25rem;\n      margin: 0;\n    }\n    width: ", ";\n    height: ", ";\n  "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

// 제대로 스무스하게 할려면 트랜지션이 아니라 애니메이션으로 해야하는 듯

/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */
var SideBar = function SideBar(_ref) {
  var mode = _ref.mode,
      width = _ref.width,
      height = _ref.height,
      toggled = _ref.toggled,
      children = _ref.children,
      title = _ref.title,
      toggleAnimation = _ref.toggleAnimation;
  var style = css(_templateObject$7(), width, height);
  var modes = {
    mini: css(_templateObject2$5()),
    normal: css(_templateObject3$4())
  };
  var toggleAnimations = {
    shrink: css(_templateObject4$4()),
    slideIn: css(_templateObject5$3())
  };
  var show = {
    shrink: css(_templateObject6$2()),
    slideIn: css(_templateObject7$2())
  };
  var hide = {
    shrink: css(_templateObject8$2()),
    slideIn: css(_templateObject9$1())
  };
  return jsx("div", {
    css: [style, modes[mode], toggleAnimations[toggleAnimation], toggled ? show[toggleAnimation] : hide[toggleAnimation]]
  }, jsx("h1", {
    className: "sidebar-header"
  }, title), children);
};

SideBar.defaultProps = {
  mode: "normal",
  width: "16.25rem",
  height: "100vh",
  toggled: true
};

function _templateObject$8() {
  var data = _taggedTemplateLiteral(["\n  backroud-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .form-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 55px;\n\n    .title {\n      margin-bottom: 4px;\n    }\n    .sub-title {\n    }\n  }\n\n  .form-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    margin-bottom: 39px;\n\n    > input {\n      margin-bottom: 45px;\n    }\n    \n  }\n\n  .form-footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    > a {\n      margin-top: 39px;\n    }\n  }\n"]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 Input 컴포넌트로 이루어진 Form을 만들고 싶을 때 이 컴포넌트를 사용하세요.
 */
var style$3 = css(_templateObject$8());

var Form = function Form(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      width = _ref.width,
      height = _ref.height,
      bodyElements = _ref.bodyElements,
      footerElements = _ref.footerElements,
      className = _ref.className,
      redirectText = _ref.redirectText,
      redirectUrl = _ref.redirectUrl;
  return jsx("div", {
    css: [style$3, {
      width: width,
      height: height
    }],
    className: className
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

Form.defaultProps = {
  width: '100%'
};

function _templateObject4$5() {
  var data = _taggedTemplateLiteral(["\n      box-shadow: 0px 3px 9px #0000000a;\n    "]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = _taggedTemplateLiteral(["\n      box-shadow: 0px 2px 6px #0000000a;\n    "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n    border-radius: ", ";\n    background-color: ", ";\n\n    .card-header {\n      display: flex;\n      justify-content: space-between;\n      h1 {\n        margin: 0;\n      }\n      ", "\n      }\n    }\n\n    .card-body {\n\n    }\n  "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var Card = function Card(_ref) {
  var width = _ref.width,
      height = _ref.height,
      children = _ref.children,
      elevation = _ref.elevation,
      title = _ref.title,
      radius = _ref.radius,
      sideContent = _ref.sideContent,
      backgroundColor = _ref.backgroundColor;
  var style = css(_templateObject$9(), radius ? "0.25rem" : "0rem", backgroundColor, title ? "border-bottom: 1px solid #eee; > h1 { padding-bottom: 1.4375rem; }" : "");
  var elevations = {
    0: css(_templateObject2$6()),
    1: css(_templateObject3$5()),
    2: css(_templateObject4$5())
  };
  return jsx("div", {
    css: [style, {
      width: width,
      height: height
    }, elevations[elevation]]
  }, jsx("div", {
    className: "card-header"
  }, jsx("h1", null, title), jsx("div", null, sideContent)), jsx("div", {
    className: "card-body"
  }, children));
};

Card.defaultProps = {
  elevation: "1",
  radius: true
};

function _templateObject$a() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    button {\n      cursor: pointer;\n      background-color: #ffffff;\n      border-radius: 4px;\n      padding: 9px 15px;\n      color: rgba(77, 79, 92, 0.5);\n      border: 1px solid rgba(77, 79, 92, 0.5);\n\n      path {\n        stroke: rgba(77, 79, 92, 0.5);\n      }\n\n      transition: all 0.5s;\n\n      svg {\n        transition: all 0.5s;\n      }\n\n      + ul {\n        display: none;\n      }\n\n      &:focus {\n        border: 1px solid #3b86ff;\n        color: #3b86ff;\n        outline: none;\n\n        svg {\n          transform: rotate( 180deg );\n          path {\n            stroke: #3b86ff;\n          }\n        }\n\n        + ul {\n          display: block;\n        }\n        \n      }\n\n      span {\n        margin-right: 0.5625rem;\n      }\n    }\n\n    ul {\n      position: absolute;\n      top: 70%;\n      width: 100%;\n      padding: 0;\n      list-style: none;\n      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);\n      border: 1px solid rgba(233, 233, 240, 1);\n\n      li {\n        cursor: pointer;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0.375rem;\n        color: rgba(77, 79, 92, 0.5);\n        transition: all 0.3s;\n        &:hover {\n          color: rgba(77, 79, 92, 1);\n          background-color: #E9E9F0;\n        }\n      }\n    }\n  "]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var DropDown = function DropDown(_ref) {
  var text = _ref.text,
      items = _ref.items,
      width = _ref.width;
  var style = css(_templateObject$a());
  var listElements = items.map(function (item) {
    return jsx("li", null, item.text);
  });
  return jsx("div", {
    css: [style, {
      width: width
    }]
  }, jsx("button", null, jsx("span", null, text), jsx(Icon, {
    icon: "arrowDown"
  })), jsx("ul", null, listElements));
};

DropDown.defaultProps = {};

function _templateObject$b() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1rem 1.25rem;\n    color: ", ";\n    background-color: ", ";\n    ", ";\n    box-shadow: 0px 2px 6px #0000000A;\n\n  "]);

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
      sticky = _ref.sticky;
  var style = css(_templateObject$b(), color, backgroundColor, sticky ? "position: sticky; top: 0" : "");
  return jsx("div", {
    css: [style]
  }, jsx("div", {
    className: "left"
  }, leftElement), jsx("div", {
    className: "right"
  }, rightElement));
};

PageHeader.defaultProps = {
  color: "black",
  backgroundColor: "#ffffff",
  sticky: false
};

function _templateObject$c() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 0.9rem;\n  "]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}

var Table = function Table(_ref) {
  var children = _ref.children,
      width = _ref.width;
  var style = css(_templateObject$c());
  return jsx("table", {
    css: [style, {
      width: width
    }]
  }, children);
};

Table.defaultProps = {};

export { Button, ButtonGroup, Card, Dialog, DropDown, Form, Icon, Input, ListItem, PageHeader, SideBar, Table, TableRow };
