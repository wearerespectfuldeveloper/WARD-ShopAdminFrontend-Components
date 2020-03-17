/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../../3-design-tokens/SVGIcon/SVGIcon";

type DropDownProps = {
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 드랍다운 버튼의 텍스트 */
  text: string;
  /** 드랍다운을 통해 보여줄 아이템들 */
  items: Array<{ text: string; clickFunc: () => void }>;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};

const style = css`
  display: flex;
  flex-direction: column;
  position: relative;
  button {
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 4px;
    padding: 9px 15px;
    color: rgba(77, 79, 92, 0.5);
    border: 1px solid rgba(77, 79, 92, 0.5);

    path {
      stroke: rgba(77, 79, 92, 0.5);
    }

    transition: all 0.5s;

    svg {
      transition: all 0.5s;
    }

    + ul {
      display: none;
    }

    &:focus {
      border: 1px solid #3b86ff;
      color: #3b86ff;
      outline: none;

      svg {
        transform: rotate(180deg);
        path {
          stroke: #3b86ff;
        }
      }

      + ul {
        display: block;
      }
    }

    span {
      margin-right: 0.5625rem;
    }
  }

  ul {
    position: absolute;
    top: 70%;
    width: 100%;
    padding: 0;
    list-style: none;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(233, 233, 240, 1);

    li {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.375rem;
      color: rgba(77, 79, 92, 0.5);
      transition: all 0.3s;
      &:hover {
        color: rgba(77, 79, 92, 1);
        background-color: #e9e9f0;
      }
    }
  }
`;

const DropDown = ({ text, items, width, maxWidth, minWidth, className }: DropDownProps) => {
  const listElements = items.map(item => {
    return <li>{item.text}</li>;
  });

  return (
    <div css={[style, { width, maxWidth, minWidth }]} className={
      '$drop-down' + className}>
      <button>
        <span>{text}</span>
        <Icon icon="arrowDown" />
      </button>
      <ul>{listElements}</ul>
    </div>
  );
};

DropDown.defaultProps = {};

export default DropDown;
