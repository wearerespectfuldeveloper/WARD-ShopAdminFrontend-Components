/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from 'react'

type BorderBoxProps = {
  /** 테두리의 유형 */
  border: any;
}

const BorderBox = ({border}: BorderBoxProps) => {

  const style = border;

  return (
    <div 
      css={[style]}
    >
      somthing
    </div>
  )
}

export default BorderBox;