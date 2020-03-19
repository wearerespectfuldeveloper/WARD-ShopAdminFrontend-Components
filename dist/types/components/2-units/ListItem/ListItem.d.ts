import React from "react";
import './ListItem.scss';
declare type ListItemProps = {
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
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
    ({ width, maxWidth, minWidth, leading, trailing, theme, children, border, className }: ListItemProps): JSX.Element;
    defaultProps: {
        theme: string;
        border: string;
    };
}>;
export default _default;
