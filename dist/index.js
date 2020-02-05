import { css, jsx } from '@emotion/core';
import { Fragment } from 'react';

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
  var data = _taggedTemplateLiteral(["\n    background-color: white;\n    border: 1px solid #43425d;\n    color: #343a40;\n    svg {\n      fill: #343a40;\n    }\n    &:hover:enabled {\n      background: #f1f3f5;\n    }\n    &:active:enabled {\n      background: #dee2e6;\n    }\n    &:disabled {\n      color: #c6c6ce;\n      svg {\n        fill: #c6c6ce;\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    background-color: #43425d;\n    border: none;\n    color: white;\n    svg {\n      fill: white;\n    }\n    &:hover:enabled {\n      background-color: #43425d;\n    }\n    &:active:enabled {\n      background-color: #43425d;\n    }\n    &:disabled {\n      background-color: #c6c6ce;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  outline: none;\n  &:focus {\n    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n  svg {\n    width: 1rem;\n    margin-right: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var style = css(_templateObject());
var themes = {
  primary: css(_templateObject2()),
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

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var style$1 = css(_templateObject$1());

var CheckBox = function CheckBox(_ref) {
  var width = _ref.width;
  return jsx("div", null);
};

CheckBox.defaultProps = {
  width: '50px'
};

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  border-bottom: 2px solid #E9E9F0;\n  padding: 9px;\n\n  &:disabled {\n    cursor: not-allowed;\n  }\n\n  &:focus {\n    outline: none;\n    border-bottom: 2px solid #43425D;\n  }\n  \n  transition: border-bottom 0.5s;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var style$2 = css(_templateObject$2());

var Input = function Input(_ref) {
  var width = _ref.width,
      disabled = _ref.disabled,
      inputPlaceHolder = _ref.inputPlaceHolder,
      inputType = _ref.inputType;
  return jsx("input", {
    type: inputType,
    css: [style$2, {
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
  var data = _taggedTemplateLiteral(["\n    background-color: #ffffff;\n    color: #4d4f5c;\n    &:hover {\n      background-color: #eee;\n    }\n  "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    background-color: #43425d;\n    color: #ffffff;\n    &:hover {\n      background-color: #4d4f5c;\n    }\n  "]);

  _templateObject2$1 = function _templateObject2() {
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
var style$3 = css(_templateObject$3());
var themes$1 = {
  dark: css(_templateObject2$1()),
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
    css: [style$3, {
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

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  justify-content: flex-end;\n"]);

  _templateObject$4 = function _templateObject() {
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

var rightAlignStyle = css(_templateObject$4());

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

function _templateObject4$2() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 25rem;\n  background: white;\n  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);\n  padding: 2rem;\n\n  h3 {\n    font-size: 1.5rem;\n    color: #343a40;\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  p {\n    font-size: 1.125rem;\n    margin: 0;\n    color: #868e96;\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n  z-index: 15;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.5);\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var fullscreen = css(_templateObject$5());
var darkLayer = css(_templateObject2$2());
var whiteBoxWrapper = css(_templateObject3$2());
var whiteBox = css(_templateObject4$2());

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
  if (!visible) return null;
  return jsx(Fragment, null, jsx("div", {
    css: [fullscreen, darkLayer]
  }), jsx("div", {
    css: [fullscreen, whiteBoxWrapper]
  }, jsx("div", {
    css: whiteBox
  }, title && jsx("h3", null, title), description && jsx("p", null, description), children, !hideButtons && jsx(ButtonGroup, {
    css: {
      marginTop: '3rem'
    },
    rightAlign: true
  }, cancellable && jsx(Button, {
    theme: "tertiary",
    onClick: onCancel
  }, cancelText), jsx(Button, {
    onClick: onConfirm
  }, confirmText)))));
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인'
};

function _templateObject5$2() {
  var data = _taggedTemplateLiteral(["\n  width: 0rem;\n  * {\n    opacity: 0;\n  }\n"]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = _taggedTemplateLiteral(["\n  width: 16.25rem;\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = _taggedTemplateLiteral(["\n    \n  "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    \n  "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n  background-color: #43425D;\n  position: fixed;\n  transition: width 0.5s ease-out;\n\n  .sidebar-header {\n    font-size: 0.9375rem;\n    letter-spacing: 0.1875rem;\n    color: white;\n    margin: 1.625rem 1.25rem;\n  }\n\n  * {\n    transition: opacity 0.2s ease-out;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
// 제대로 스무스하게 할려면 트랜지션이 아니라 애니메이션으로 해야하는 듯
var style$4 = css(_templateObject$6());
var modes = {
  mini: css(_templateObject2$3()),
  normal: css(_templateObject3$3())
};
var show = css(_templateObject4$3());
var hide = css(_templateObject5$2());
/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */

var SideBar = function SideBar(_ref) {
  var mode = _ref.mode,
      width = _ref.width,
      height = _ref.height,
      toggled = _ref.toggled,
      children = _ref.children;
  console.log(toggled);
  return jsx("div", {
    css: [style$4, modes[mode], {
      width: width,
      height: height
    }, toggled ? show : hide]
  }, jsx("h1", {
    className: "sidebar-header"
  }, "WARD"), children);
};

SideBar.defaultProps = {
  mode: 'normal',
  width: '16.25rem',
  height: '100vh',
  toggled: true
};

function _templateObject$7() {
  var data = _taggedTemplateLiteral(["\n  backroud-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .form-header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 55px;\n\n    .title {\n      margin-bottom: 4px;\n    }\n    .sub-title {\n    }\n  }\n\n  .form-body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    margin-bottom: 39px;\n\n    > input {\n      margin-bottom: 45px;\n    }\n    \n  }\n\n  .form-footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    > a {\n      margin-top: 39px;\n    }\n  }\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 여러개의 Input 컴포넌트로 이루어진 Form을 만들고 싶을 때 이 컴포넌트를 사용하세요.
 */
var style$5 = css(_templateObject$7());

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
    css: [style$5, {
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

export { Button, ButtonGroup, CheckBox, Dialog, Form, Input, ListItem, SideBar };
