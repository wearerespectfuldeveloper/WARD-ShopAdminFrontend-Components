/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./TableRow.scss";

type TableRowProps = {
  /** 테이블 행이 테이블 테이블 헤더의 행인지, 테이블 바디의 행인지를 설정 */
  type: "head" | "body";
  /** 테이블 행에 들어갈 셀의 리스트 데이터.
   * 리스트의 요소는 객체로서 data 값과 type 값을 가져야 합니다.
   * type 값에 따라서 다른 스타일이 적용됩니다.
   */
  cellList: Array<
    | {
        type: "picture";
        data: { imageUrl: string | undefined; title: string | undefined };
      }
    | { type: "text"; data: string | undefined }
    | { type: "price"; data: string | number | undefined }
    | { type: "stock"; data: string | number | undefined }
    | { type: "date"; data: string | number | undefined }
    | { type: "extra"; data: React.ReactNode }
  >;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const TableRow = ({ type, cellList, className }: TableRowProps) => {
  const style = css`
    th,
    td {
      width: ${100 / cellList.length}%;
    }

    @media screen and (max-width: 325px) {
      th,
      td {
        width: ${100 / cellList.length}%;
      }
    }
  `;

  let rowStyle;
  let RowItems;

  if (type === "head") {
    rowStyle = css`
      background-color: #f5f6fa;
      color: #a3a6b4;
    `;
  } else {
    rowStyle = css`
      border-bottom: 1px solid #f1f1f3;
      &:hover {
        background-color: rgba(241, 241, 243, 0.5);
      }
    `;
  }

  RowItems = cellList.map(item => {
    let cellStyle;
    let element;

    if (item.data === undefined || item.data === null) {
      return type === "head" ? (
        <th css={[cellStyle]}>
          <span>-</span>
        </th>
      ) : (
        <td css={[cellStyle]}>
          <span>-</span>
        </td>
      );
    } else if (item.type === "picture") {
      element = (
        <label>
          <img src={item.data.imageUrl} />
          {item.data.title}
        </label>
      );
      cellStyle = css`
        span {
          label {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            img {
              margin: 0.875rem;
              border: 1px solid #eee;
              width: 3.125rem;
              height: 3.125rem;
            }
          }
        }
      `;
    } else if (item.type === "text") {
      element = item.data;
    } else if (item.type === "price") {
      element = item.data + "원";
    } else if (item.type === "date") {
      element = item.data
    } else if (
      item.type === "stock" &&
      item.data !== undefined && item.data !== null
    ) {
      let stateColor;
      if (+item.data > 50) {
        stateColor = "105, 228, 166";
      } else if (+item.data === 0) {
        stateColor = "255, 114, 133";
      } else {
        stateColor = "255, 202, 131";
      }
      element = item.data;
      cellStyle = css`
        font-weight: bold;
        span {
          color: rgba(0, 0, 0, 0.5);
          border-radius: 14px;
          padding: 0.3125rem 0.9375rem;
          background-color: rgba(${stateColor}, 0.2);
        }
      `;
    } else if (item.type === "extra") {
      element = item.data;
    }

    return type === "head" ? (
      <th css={[cellStyle]}>
        <span>{element}</span>
      </th>
    ) : (
      <td css={[cellStyle]}>
        <span>{element}</span>
      </td>
    );
  });

  return (
    <tr css={[style, rowStyle]} className={"_table-row " + className}>
      {RowItems}
    </tr>
  );
};

TableRow.defaultProps = {
  type: "body"
};

export default React.memo(TableRow);
