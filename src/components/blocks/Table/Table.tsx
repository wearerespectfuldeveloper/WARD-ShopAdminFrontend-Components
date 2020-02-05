/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type TableProps = {
  /** 테이블의 내용물 */
  children: React.ReactNode;
  

};

const Table = ({
  children
}: TableProps) => {
  const style = css`
    border-collapse: collapse;
    font-size: 0.9rem;
    min-width: 25rem;
  `;

  return (
    <table css={[style]}>
      {children}
    </table>
  )
}

Table.defaultProps = {

}

export default Table;