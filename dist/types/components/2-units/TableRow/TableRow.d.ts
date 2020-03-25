import React from "react";
import "./TableRow.scss";
declare type TableRowProps = {
    /** 테이블 행이 테이블 테이블 헤더의 행인지, 테이블 바디의 행인지를 설정 */
    type: "head" | "body";
    /** 테이블 행에 들어갈 셀의 리스트 데이터.
     * 리스트의 요소는 객체로서 data 값과 type 값을 가져야 합니다.
     * type 값에 따라서 다른 스타일이 적용됩니다.
     */
    cellList: Array<{
        type: "picture";
        data: {
            imageUrl: string | undefined;
            title: string | undefined;
        };
    } | {
        type: "text";
        data: string | undefined;
    } | {
        type: "price";
        data: string | number | undefined;
    } | {
        type: "stock";
        data: string | number | undefined;
    } | {
        type: "date";
        data: string | number | undefined;
    } | {
        type: "extra";
        data: React.ReactNode;
    }>;
    className?: string;
};
declare const _default: React.MemoExoticComponent<{
    ({ type, cellList, className }: TableRowProps): JSX.Element;
    defaultProps: {
        type: string;
    };
}>;
export default _default;
