/// <reference types="react" />
declare type PageHeaderProps = {
    /** 페이지 헤더의 글자색상을 설정 */
    color: string;
    /** 페이지 헤더의 배경색을 설정 */
    backgroundColor: string;
    /** 페이지 헤더의 왼쪽을 차지할 요소 */
    leftElement: React.ReactNode;
    /** 페이지 헤더의 오른쪽을 차지할 요소 */
    rightElement: React.ReactNode;
    /** Sticky 헤더의 적용 여부 */
    sticky: boolean;
    className?: string;
};
declare const PageHeader: {
    ({ color, backgroundColor, leftElement, rightElement, sticky, className }: PageHeaderProps): JSX.Element;
    defaultProps: {
        color: string;
        backgroundColor: string;
        sticky: boolean;
    };
};
export default PageHeader;
