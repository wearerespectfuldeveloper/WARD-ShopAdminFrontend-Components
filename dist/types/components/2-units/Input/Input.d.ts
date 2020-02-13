import React from 'react';
declare type InputProps = {
    /** Input 컴포넌트의 길이 */
    width?: string | number;
    /** Input 태그의 타입 */
    inputType: 'text' | 'password';
    /** 값이 true 이면 Input 컴포넌트를 비활성화합니다 */
    disabled?: boolean;
    /** 희미하게 보이는 안내 글자 */
    inputPlaceHolder?: string;
    className?: string;
};
declare const _default: React.MemoExoticComponent<{
    ({ width, disabled, inputPlaceHolder, inputType, className }: InputProps): JSX.Element;
    defaultProps: {
        disabled: boolean;
    };
}>;
export default _default;
