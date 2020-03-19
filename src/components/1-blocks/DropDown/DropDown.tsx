/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../../3-design-tokens/SVGIcon/SVGIcon";
import './DropDown.scss';

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
  
`;

const DropDown = ({ text, items, width, maxWidth, minWidth, className }: DropDownProps) => {
  const listElements = items.map(item => {
    return <li>{item.text}</li>;
  });

  return (
    <div css={[style, { width, maxWidth, minWidth }]} className={
      '_drop-down ' + className}>
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
