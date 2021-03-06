/// <reference types="react" />
import './Form.scss';
export declare type FormProps = {
    /** Children */
    children?: React.ReactNode;
    /** 폼의 제목 */
    title: string;
    /** 폼의 소제목 혹은 설명 */
    subTitle?: string;
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
    /** 폼의 높이를 임의로 설정 */
    height?: string | number;
    /** Form 안에 들어갈 Input 과 기타 요소들 */
    bodyElements: React.ReactNode;
    /** Form 안에 들어갈 Button 과 기타 요소들 */
    footerElements?: React.ReactNode;
    /** 리다이렉트 안내 텍스트 */
    redirectText?: string;
    /** 리다이렉트 되어 도착할 주소 */
    redirectUrl?: string;
    className?: string;
};
declare const Form: {
    ({ title, subTitle, width, maxWidth, minWidth, height, bodyElements, footerElements, className, redirectText, redirectUrl }: FormProps): JSX.Element;
    defaultProps: {};
};
export default Form;
