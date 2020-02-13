/// <reference types="react" />
declare type SideBarProps = {
    /** 사이드바 안의 내용 */
    children: React.ReactNode;
    /** 사이드바의 타이틀 */
    title: string;
    /** 사이드바의 모드를 설정합니다. mini로 설정되면 너비가 최소한으로 줄어들며 글자는 사라지고 아이콘만이 보입니다. */
    mode: "mini" | "normal";
    /** 사이드바를 화면에서 나타나거나 사리지게합니다 */
    toggled: boolean;
    /** 사이드바의 토글 동작을 설정합니다 */
    toggleAnimation: "shrink" | "slideIn";
    /** 사이드바의 너비를 임의로 설정합니다. */
    width: string | number;
    /** 사이드바의 높이를 임의로 설정합니다. */
    height: string | number;
};
/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */
declare const SideBar: {
    ({ mode, width, height, toggled, children, title, toggleAnimation }: SideBarProps): JSX.Element;
    defaultProps: {
        mode: string;
        width: string;
        height: string;
        toggled: boolean;
    };
};
export default SideBar;
