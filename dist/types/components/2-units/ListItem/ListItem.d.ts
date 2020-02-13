import React from "react";
declare type ListItemProps = {
    /** 체크박스의 크기를 임의로 결정합니다. */
    width?: string | number;
    /** 리스트의 앞면에 집어넣을 아이콘이나 아바타 컴포넌트 */
    leading?: React.ReactNode;
    /** 리스트의 뒷면에 집어넣을 아이콘이나 아바타 컴포넌트 */
    trailing?: React.ReactNode;
    /** 어두운 바탕, 밝은 바탕에 따라 달라지는 테마 */
    theme: "light" | "dark";
    /** 리스트 아이템의 테두리 위치 */
    border: "top" | "right" | "bottom" | "left" | "none";
    /** 리스트 아이템 안의 내용 */
    children: React.ReactNode;
    className?: string;
};
declare const _default: React.MemoExoticComponent<{
    ({ width, leading, trailing, theme, children, border, className }: ListItemProps): JSX.Element;
    defaultProps: {
        theme: string;
        border: string;
    };
}>;
export default _default;
