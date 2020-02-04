/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type CheckBoxProps = {
  /** 체크박스의 크기를 임의로 결정합니다. */
  width?: string | number;
}

const style = css`

`
const CheckBox = ({
  width
}: CheckBoxProps) => {
  return (
    <div>

    </div>
  )
}

CheckBox.defaultProps = {
  width: '50px'
}

export default CheckBox;