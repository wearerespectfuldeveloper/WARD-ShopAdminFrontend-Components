import React from 'react';
import './Input.scss';
declare type InputProps = {
    /** Input 태그의 타입 */
    inputType: 'text' | 'password';
    /** 값이 true 이면 Input 컴포넌트를 비활성화합니다 */
    disabled?: boolean;
    /** 희미하게 보이는 안내 글자 */
    inputPlaceHolder?: string;
    className?: string;
    onInputFunc?: (event: React.FormEvent<HTMLInputElement>) => void;
};
declare const _default: React.MemoExoticComponent<{
    ({ disabled, inputPlaceHolder, inputType, onInputFunc, className, }: InputProps): JSX.Element;
    defaultProps: {
        disabled: boolean;
    };
}>;
export default _default;
