/// <reference types="react" />
import "./EditorButtonGroup.scss";
import { IconProps } from "../../3-design-tokens/SVGIcon/SVGIcon";
declare type EditorButtonGroupProps = {
    /** 이용할 버튼들 */
    buttonList: Array<IconProps["icon"]>;
    /** 추가적인 스타일링을 적용하기 위한 클래스 */
    className?: string;
    /** 인라인 모드 활성화  */
    inline?: boolean;
};
declare const EditorButtonGroup: ({ buttonList, className }: EditorButtonGroupProps) => JSX.Element;
export default EditorButtonGroup;
