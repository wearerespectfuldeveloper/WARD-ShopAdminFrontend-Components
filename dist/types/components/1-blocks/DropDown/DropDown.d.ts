/// <reference types="react" />
import './DropDown.scss';
declare type DropDownProps = {
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
    /** 드랍다운 버튼의 텍스트 */
    text: string;
    /** 드랍다운을 통해 보여줄 아이템들 */
    items: Array<{
        text: string;
        clickFunc: () => void;
    }>;
    className?: string;
};
declare const DropDown: {
    ({ text, items, width, maxWidth, minWidth, className }: DropDownProps): JSX.Element;
    defaultProps: {};
};
export default DropDown;
