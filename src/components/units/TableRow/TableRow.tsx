/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type TableRowProps = {
  /** 테이블 행이 테이블 테이블 헤더의 행인지, 테이블 바디의 행인지를 설정 */
  type: "head" | "body";
  /** 테이블 행에 들어갈 셀의 리스트 데이터 */
  cellList: Array<{ text: string }>;
};

const TableRow = ({ type, cellList }: TableRowProps) => {
  const style = css`
    display: flex;
    justify-content: space-between;
    th {
      padding: 0.75rem 1.875rem;
      text-align: center;
      width: ${100 / cellList.length}%;
    }
    td {
      padding: 1.25rem 1.875rem;
      text-align: center;
      width: ${100 / cellList.length}%;
    }
  `;

  let typeStyle;
  let RowItems;

  if (type === "head") {
    typeStyle = css`
      background-color: #F5F6FA;
      color: #A3A6B4;
    `;
    RowItems = cellList.map(item => {
      return <th>{item.text}</th>;
    });
  } else {
    typeStyle = css`
      border-bottom: 1px solid #F1F1F3;
      &:hover {
        background-color: rgba(241, 241, 243, 0.5);
      }
    `;
    RowItems = cellList.map(item => {
      return <td>{item.text}</td>;
    });
  }

  return <tr css={[style, typeStyle]}>{RowItems}</tr>;
};

TableRow.defaultProps = {
  type: 'body'
};

export default TableRow;
