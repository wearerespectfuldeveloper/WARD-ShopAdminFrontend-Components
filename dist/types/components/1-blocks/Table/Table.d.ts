/// <reference types="react" />
import "./Table.scss";
declare type TableProps = {
    /** 테이블의 내용물 */
    children: React.ReactNode;
    /** 테이블의 너비를 임의로 설정합니다 */
    width?: string | number;
    className?: string;
};
declare const Table: {
    ({ children, width, className }: TableProps): JSX.Element;
    defaultProps: {};
};
export default Table;
