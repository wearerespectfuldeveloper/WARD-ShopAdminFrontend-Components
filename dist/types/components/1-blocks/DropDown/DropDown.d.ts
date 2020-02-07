/// <reference types="react" />
declare type DropDownProps = {
    /** 드랍다운의 너비를 임의로 설정 */
    width?: string;
    /** 드랍다운 버튼의 텍스트 */
    text: string;
    /** 드랍다운을 통해 보여줄 아이템들 */
    items: Array<{
        text: string;
        clickFunc: () => void;
    }>;
};
declare const DropDown: {
    ({ text, items, width }: DropDownProps): JSX.Element;
    defaultProps: {};
};
export default DropDown;
