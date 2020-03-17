/// <reference types="react" />
declare type SideBarProps = {
    /** 사이드바 안의 내용 */
    children: React.ReactNode;
    /** 사이드바를 화면에서 나타나거나 사리지게합니다 */
    toggled: boolean;
    /** 사이드바의 토글 동작을 설정합니다 */
    toggleAnimation: "shrink" | "slideIn";
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
    /** 사이드바의 맨 위에 위치할 요소 */
    header?: React.ReactNode;
    /** 사이드바의 높이를 임의로 설정합니다. */
    height?: string | number;
    /** 사이드바의 sticky 여부를 결정 */
    sticky?: boolean;
    /** 추가적인 스타일링을 적용하기 위한 클래스 */
    className?: string;
    /** 토글 버튼이 수행할 함수 */
    toggleFunc?: () => void;
};
/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */
declare const SideBar: {
    ({ width, minWidth, maxWidth, height, toggled, children, header, sticky, toggleAnimation, className }: SideBarProps): JSX.Element;
    defaultProps: {
        height: string;
        toggled: boolean;
    };
};
export default SideBar;
