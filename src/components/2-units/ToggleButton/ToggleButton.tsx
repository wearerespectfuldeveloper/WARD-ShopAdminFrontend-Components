/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import './ToggleButton.scss';

type ToggleButtonProps = {
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const ToggleButton = ({ className }: ToggleButtonProps) => {
 return <div></div>
}

ToggleButton.defaultProps = {
  
};

export default React.memo(ToggleButton);
