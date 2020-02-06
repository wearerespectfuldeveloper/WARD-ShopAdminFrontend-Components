/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type TableProps = {
  /** 테이블의 내용물 */
  children: React.ReactNode;
  /** 테이블의 너비를 임의로 설정합니다 */
  width?: string | number;

};

const Table = ({
  children,
  width
}: TableProps) => {
  const style = css`
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  `;

  return (
    <table css={[style, { width }]}>
      {children}
    </table>
  )
}

Table.defaultProps = {

}

export default Table;