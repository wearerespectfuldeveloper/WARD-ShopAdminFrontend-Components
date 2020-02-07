/// <reference types="react" />
declare type TableProps = {
    /** 테이블의 내용물 */
    children: React.ReactNode;
    /** 테이블의 너비를 임의로 설정합니다 */
    width?: string | number;
};
declare const Table: {
    ({ children, width }: TableProps): JSX.Element;
    defaultProps: {};
};
export default Table;
