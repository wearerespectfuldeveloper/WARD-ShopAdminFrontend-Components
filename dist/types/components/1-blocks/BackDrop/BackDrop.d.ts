/// <reference types="react" />
import "./BackDrop.scss";
declare type BackDropProps = {
    /** 클릭했을 때 호출할 함수 */
    click?: () => void;
    /** 추가적인 스타일링을 적용하기 위한 클래스 */
    className?: string;
    /** 배경색 */
    backgroundColor: string;
};
declare const BackDrop: {
    ({ click, className, backgroundColor }: BackDropProps): JSX.Element;
    defaultProps: {
        backgroundColor: string;
    };
};
export default BackDrop;
