/// <reference types="react" />
import "./PageHeader.scss";
declare type PageHeaderProps = {
    /** 페이지 헤더의 글자색상을 설정 */
    color: string;
    /** 페이지 헤더의 배경색을 설정 */
    backgroundColor: string;
    /** 페이지 헤더의 왼쪽을 차지할 요소 */
    leftElement: React.ReactNode;
    /** 페이지 헤더의 오른쪽을 차지할 요소 */
    rightElement: React.ReactNode;
    /** sticky 헤더의 적용 여부 */
    sticky?: boolean;
    /** 페이지 헤더에 넣을 로고 */
    logo?: React.ReactNode;
    /** 페이지 헤더의 높이 */
    height?: string;
    className?: string;
};
declare const PageHeader: {
    ({ color, backgroundColor, leftElement, rightElement, sticky, logo, height, className }: PageHeaderProps): JSX.Element;
    defaultProps: {
        color: string;
        backgroundColor: string;
        sticky: boolean;
    };
};
export default PageHeader;
