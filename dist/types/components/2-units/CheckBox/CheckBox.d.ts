import React from 'react';
import './CheckBox.scss';
declare type CheckBoxProps = {
    /** 이 체크박스가 지닐 id를 설정 */
    id: string;
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
    /** 정해진 크기 만큼 텍스트 박스의 크기를 결정합니다. */
    size: "mini" | "medium" | "big";
    /** 체크박스의 색상 */
    color: string;
    /** 체크박스 옆의 텍스트 */
    sideText: string;
    /** 체크박스 옆의 텍스트의 색상 */
    sideTextColor: string;
    /** 체크됨 여부 */
    isChecked?: boolean;
    /** 체크 불가능 설정 */
    disabled?: boolean;
    className?: string;
};
declare const _default: React.MemoExoticComponent<{
    ({ width, maxWidth, minWidth, size, color, sideText, sideTextColor, isChecked, disabled, id, className }: CheckBoxProps): JSX.Element;
    defaultProps: {
        size: string;
        isChecked: boolean;
        disabled: boolean;
    };
}>;
export default _default;
