/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./ListItem.scss";

type ListItemProps = {
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 리스트의 앞면에 집어넣을 아이콘이나 아바타 컴포넌트 */
  leading?: React.ReactNode;
  /** 리스트의 뒷면에 집어넣을 아이콘이나 아바타 컴포넌트 */
  trailing?: React.ReactNode;
  /** 어두운 바탕, 밝은 바탕에 따라 달라지는 테마 */
  theme: "light" | "dark";
  /** 리스트 아이템의 테두리 위치 */
  border: "top" | "right" | "bottom" | "left" | "none";
  /** 리스트 아이템 안의 내용 */
  children: React.ReactNode;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const style = css``;

const themes = {
  dark: css`
    background-color: #43425d;
    color: #ffffff;
    &:hover {
      background-color: #4d4f5c;
    }
  `,
  light: css`
    color: #4d4f5c;
  `
};

const borders = {
  top: css`
    border-top: 0.3125rem solid #a3a0fb;
    .content {
      top: -0.15rem;
    }
  `,
  right: css`
    border-right: 0.3125rem solid #a3a0fb;
    .content {
      right: -0.3125rem;
    }
  `,
  bottom: css`
    border-bottom: 0.3125rem solid #a3a0fb;
    .content {
      bottom: -0.15rem;
    }
  `,
  left: css`
    border-left: 0.3125rem solid #a3a0fb;
    .content {
      left: -0.3125rem;
    }
  `,
  none: css``
};

const ListItem = ({
  width,
  maxWidth,
  minWidth,
  leading,
  trailing,
  theme,
  children,
  border,
  className
}: ListItemProps) => {
  return (
    <li
      css={[
        style,
        { width, maxWidth, minWidth },
        themes[theme],
        borders[border]
      ]}
      className={"_list-item " + className}
    >
      <div className="content-wrapper">
        <div className="content">
          <div className="leading">{leading}</div>
          {children}
        </div>

        <div className="trailing">{trailing}</div>
      </div>
    </li>
  );
};

ListItem.defaultProps = {
  theme: "dark",
  border: "left"
};

export default React.memo(ListItem);
