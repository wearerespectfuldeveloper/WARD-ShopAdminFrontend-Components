/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./Table.scss";

type TableProps = {
  /** 테이블의 내용물 */
  children: React.ReactNode;
  /** 테이블의 너비를 임의로 설정합니다 */
  width?: string | number;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const style = css``;

const Table = ({ children, width, className }: TableProps) => {
  return (
    <table css={[style, { width }]} className={"_table " + className}>
      <div className="row-container">{children}</div>
    </table>
  );
};

Table.defaultProps = {};

export default Table;
