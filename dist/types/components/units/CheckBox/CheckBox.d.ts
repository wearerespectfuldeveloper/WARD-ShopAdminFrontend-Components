/// <reference types="react" />
declare type CheckBoxProps = {
    /** 체크박스의 크기를 임의로 결정합니다. */
    width?: string | number;
};
declare const CheckBox: {
    ({ width }: CheckBoxProps): JSX.Element;
    defaultProps: {
        width: string;
    };
};
export default CheckBox;
