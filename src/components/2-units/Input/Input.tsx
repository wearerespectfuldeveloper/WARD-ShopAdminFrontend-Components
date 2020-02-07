/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type InputProps = {
  /** Input 컴포넌트의 길이 */
  width: string | number;
  /** Input 태그의 타입 */
  inputType: 'text' | 'password';
  /** 값이 true 이면 Input 컴포넌트를 비활성화합니다 */
  disabled?: boolean;
  /** 희미하게 보이는 안내 글자 */
  inputPlaceHolder?: string;
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
  disabled,
  inputPlaceHolder,
  inputType
}: InputProps) => {
  return (
    <input 
      type={inputType}
      css={[
        style,
        {width}
      ]}
      placeholder={inputPlaceHolder}
      disabled={disabled}
    />
  )
}

Input.defaultProps = {
  width: '400px',
  disabled: false
}

export default Input;

