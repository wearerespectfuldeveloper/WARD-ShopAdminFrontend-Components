/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import './Input.scss';

type InputProps = {
  /** Input 태그의 타입 */
  inputType: 'text' | 'password';
  /** 값이 true 이면 Input 컴포넌트를 비활성화합니다 */
  disabled?: boolean;
  /** 희미하게 보이는 안내 글자 */
  inputPlaceHolder?: string;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
  onInputFunc?: (event: React.FormEvent<HTMLInputElement>) => void;
};

const style = css``;
const Input = ({
  disabled,
  inputPlaceHolder,
  inputType,
  onInputFunc,
  className,
}: InputProps) => {
  return (
    <input
      type={inputType}
      css={[style]}
      className={'_input ' + className}
      placeholder={inputPlaceHolder}
      disabled={disabled}
      onInput={onInputFunc}
    />
  );
};

Input.defaultProps = {
  disabled: false,
};

export default React.memo(Input);
