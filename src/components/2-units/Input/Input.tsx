/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

type InputProps = {
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** Input 태그의 타입 */
  inputType: 'text' | 'password';
  /** 값이 true 이면 Input 컴포넌트를 비활성화합니다 */
  disabled?: boolean;
  /** 희미하게 보이는 안내 글자 */
  inputPlaceHolder?: string;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
}

const style = css`
  border: none;
  border-bottom: 2px solid #E9E9F0;
  padding: 9px;

  &:disabled {
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #43425D;
  }
  
  transition: border-bottom 0.5s;
`
const Input = ({
  width,
  maxWidth,
  minWidth,
  disabled,
  inputPlaceHolder,
  inputType,
  className
}: InputProps) => {
  return (
    <input 
      type={inputType}
      css={[
        style,
        {width, maxWidth, minWidth}
      ]}
      className={className}
      placeholder={inputPlaceHolder}
      disabled={disabled}
    />
  )
}

Input.defaultProps = {
  disabled: false
}

export default React.memo(Input);

