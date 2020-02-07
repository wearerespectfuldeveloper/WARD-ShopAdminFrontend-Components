/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type ListItemProps = {
  /** 체크박스의 크기를 임의로 결정합니다. */
  width?: string | number;
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
};

const style = css`
  list-style: none;
  cursor: pointer;

  .content {
    display: flex;
    align-items: center;
    position: relative;
    padding: 1rem;

    .trailing {
      position: absolute;
      right: 1.75rem;
    }
    .leading {
      margin-right: 0.75rem;
    }
  }
`;

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
  leading,
  trailing,
  theme,
  children,
  border
}: ListItemProps) => {
  return (
    <li css={[style, { width }, themes[theme], borders[border]]}>
      <div className="content">
        <div className="leading">{leading}</div>
        {children}
        <div className="trailing">{trailing}</div>
      </div>
    </li>
  );
};

ListItem.defaultProps = {
  theme: "dark",
  border: "left"
};

export default ListItem;
