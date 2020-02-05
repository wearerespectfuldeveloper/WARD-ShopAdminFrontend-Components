/// <reference types="react" />
export declare type FormProps = {
    /** Children */
    children?: React.ReactNode;
    /** 폼의 제목 */
    title: string;
    /** 폼의 소제목 혹은 설명 */
    subTitle?: string;
    /** 폼의 너비를 임의로 설정 */
    width?: string | number;
    /** 폼의 높이를 임의로 설정 */
    height?: string | number;
    /** Form 안에 들어갈 Input 과 기타 요소들 */
    bodyElements: React.ReactNode;
    /** Form 안에 들어갈 Button 과 기타 요소들 */
    footerElements?: React.ReactNode;
    /** 따로 추가적인 스타일 커트서마이징을 하고 싶을 때 넣는 클래스 이름 */
    className?: string;
    /** 리다이렉트 안내 텍스트 */
    redirectText?: string;
    /** 리다이렉트 되어 도착할 주소 */
    redirectUrl?: string;
};
declare const Form: {
    ({ title, subTitle, width, height, bodyElements, footerElements, className, redirectText, redirectUrl }: FormProps): JSX.Element;
    defaultProps: {
        width: string;
    };
};
export default Form;
