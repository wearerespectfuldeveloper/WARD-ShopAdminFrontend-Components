/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';
import './Button.scss';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: "primary" | "secondary" | "tertiary";
  /** 버튼의 크기를 설정합니다 */
  size: "small" | "medium" | "big";
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};


const themes = {
  primary: css`
    background-color: #43425d;
    border: none;
    color: white;
    svg {
      fill: white;
    }
    &:hover:enabled {
      background-color: #43425d;
    }
    &:active:enabled {
      background-color: #43425d;
    }
    &:disabled {
      background-color: #c6c6ce;
    }
  `,
  secondary: css`
    background-color: white;
    border: 1px solid #43425d;
    color: #343a40;
    svg {
      fill: #343a40;
    }
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      border: 1px solid #c6c6ce;
      color: #c6c6ce;
      svg {
        fill: #c6c6ce;
      }
    }
  `,
  tertiary: css`
    background: none;
    color: #43425d;
    svg {
      fill: #43425d;
    }
    &:disabled {
      color: #c6c6ce;
      svg {
        fill: #c6c6ce;
      }
    }
  `
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0.3rem 1.0rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0.5rem 3.875rem 0.5rem 3.875rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};

const iconOnlyStyle = css`
  padding: 0;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    padding: 0.25rem 1.0625rem;
  `,
  medium: css`
    padding: 0.5rem 3.875rem 0.5rem 3.875rem;
  `,
  big: css`
    padding: 0 1.5rem;
  `
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({
  children,
  theme,
  size,
  disabled,
  width,
  maxWidth,
  minWidth,
  iconOnly,
  onClick,
  className
}: ButtonProps) => {
  return (
    <button
      css={[
        themes[theme],
        sizes[size],
        { width, maxWidth, minWidth },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]]
      ]}
      className={'_button ' + className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "medium"
};

export default React.memo(Button);
