/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import './DragAndDrop.scss';

type DragAndDropProps = {
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

const DragAndDrop = ({ text, items, width, maxWidth, minWidth, className }: DragAndDropProps) => {
  return
};

DragAndDrop.defaultProps = {};

export default DragAndDrop;
