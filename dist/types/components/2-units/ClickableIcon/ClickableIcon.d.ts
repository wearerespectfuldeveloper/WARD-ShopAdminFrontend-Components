/// <reference types="react" />
import "./ClickableIcon.scss";
import { IconProps } from "../../3-design-tokens/SVGIcon/SVGIcon";
declare type ClickableIconProps = {
    /** 아이콘 종류 */
    icon: IconProps['icon'];
    /** 추가적인 스타일링을 적용하기 위한 클래스 */
    className?: string;
    /** 아이콘의 너비 */
    size?: string;
    /** 클릭시 수행될 함수 */
    onClick?: () => any;
};
declare const ClickableIcon: {
    ({ icon, size, className, onClick }: ClickableIconProps): JSX.Element;
    defaultProps: {
        icon: string;
    };
};
export default ClickableIcon;
