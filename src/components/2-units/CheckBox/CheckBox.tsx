/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';

type CheckBoxProps = {
  /** 이 체크박스가 지닐 id를 설정 */
  id: string;
  /** 체크박스의 크기를 임의로 결정합니다. */
  width?: string | number;
  /** 정해진 크기 만큼 텍스트 박스의 크기를 결정합니다. */
  size: "mini" | "medium" | "big";
  /** 체크박스의 색상 */
  color: string;
  /** 체크박스 옆의 텍스트 */
  sideText: string;
  /** 체크박스 옆의 텍스트의 색상 */
  sideTextColor: string;
  /** 체크됨 여부 */
  isChecked?: boolean;
  /** 체크 불가능 설정 */
  disabled?: boolean;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const CheckBox = ({
  width,
  size,
  color,
  sideText,
  sideTextColor,
  isChecked,
  disabled,
  id,
  className
}: CheckBoxProps) => {
  const style = css`
    #${id} {
      display: none;
    }

    #${id} + label {
      margin-left: 10px;
      position: relative;
      color: ${sideTextColor};
    }

    #${id} + label::before {
      content: "";
      display: inline-block;
      border: 2px solid ${color};
      border-radius: 4px;
      position: relative;
    }

    #${id}:checked + label::before {
      background: ${color};
      border-color: ${color};
      transition: all 0.5s;
    }

    #${id} + label::after {
      content: "";
      position: absolute;
      background: url(${require("../../../assets/icons/svg/check.svg")}) no-repeat center;
      background-size: 0;
      transition: all 0.2s 0.2s;
    }

    #${id}:checked + label::after {
      content: "";
      position: absolute;
      top: 0px;
      left: -5px;
      width: 22px;
      height: 22px;
      background: url(${require("../../../assets/icons/svg/check.svg")}) no-repeat center;
      background-size: 15px auto;
    }
  `;

  const sizes = {
    mini: css`
      #${id} + label::before {
        width: 1.125rem;
        height: 1.125rem;
        top: 0.3125rem;
        right: 0.3438rem;
      }
      #${id} + label::after {
        top: 2.25rem;
        left: -0.25rem;
        width: 1.0rem;
        height: 1.0rem;
      }

      #${id}:checked + label::after {
        background-size: 0.9375rem auto;
      }
    `,
    medium: css`
      #${id} + label::before {
        width: 1.5rem;
        height: 1.5rem;
        top: 0.5625rem;
        right: 0.5rem;
      }
      #${id} + label::after {
        top: 0;
        left: -0.25rem;
        width: 1.375rem;
        height: 1.375rem;
      }
      #${id}:checked + label::after {
        background-size: 0.9375rem auto;
      }
    `,
    big: css`
      #${id} + label::before {
        width: 1.875rem;
        height: 1.875rem;
        top: 0.6875rem;
        right: 0.625rem;
      }
      #${id} + label::after {
        top: 0;
        left: -0.25rem;
        width: 1.675rem;
        height: 1.675rem;
      }
      #${id}:checked + label::after {
        background-size: 0.9375rem auto;
      }
    `
  };

  let disabledStyle;

  disabledStyle = disabled
    ? css`
        opacity: 0.5;
      `
    : css``;

  return (
    <div css={[style, { width }, sizes[size], disabledStyle]} className={className}>
      <input type="checkbox" id={id} disabled={disabled} />
      <label htmlFor={id}>{sideText}</label>
    </div>
  );
};

CheckBox.defaultProps = {
  size: "medium",
  isChecked: false,
  disabled: false
};

export default React.memo(CheckBox);
