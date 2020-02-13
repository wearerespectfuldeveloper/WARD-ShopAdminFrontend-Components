/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TableProps = {
  /** 테이블의 내용물 */
  children: React.ReactNode;
  /** 테이블의 너비를 임의로 설정합니다 */
  width?: string | number;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const style = css`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
`;

const Table = ({ children, width, className }: TableProps) => {
  return (
    <table css={[style, { width }]} className={className}>
      {children}
    </table>
  );
};

Table.defaultProps = {};

export default Table;
