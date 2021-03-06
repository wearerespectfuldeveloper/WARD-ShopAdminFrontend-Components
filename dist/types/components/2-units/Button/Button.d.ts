import React from 'react';
import './Button.scss';
declare type ButtonProps = {
    /** 버튼 안의 내용 */
    children: React.ReactNode;
    /** 클릭했을 때 호출할 함수 */
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    /** 버튼의 생김새를 설정합니다. */
    theme: "primary" | "secondary" | "tertiary";
    /** 버튼의 크기를 설정합니다 */
    size: "small" | "medium" | "big";
    /** 버튼을 비활성화 시킵니다. */
    disabled?: boolean;
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
    /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
    iconOnly?: boolean;
    className?: string;
};
declare const _default: React.MemoExoticComponent<{
    ({ children, theme, size, disabled, width, maxWidth, minWidth, iconOnly, onClick, className }: ButtonProps): JSX.Element;
    defaultProps: {
        theme: string;
        size: string;
    };
}>;
export default _default;
