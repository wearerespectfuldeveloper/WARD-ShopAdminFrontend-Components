/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./BackDrop.scss";

type BackDropProps = {
  /** 클릭했을 때 호출할 함수 */
  click?: () => void;
  /** 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
  /** 배경색 */
  backgroundColor: string;
};

const BackDrop = ({ click, className, backgroundColor }: BackDropProps) => {
  return <div className={"_back-drop " + className} css={[{backgroundColor}]} onClick={click}></div>;
};

BackDrop.defaultProps = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
}

export default BackDrop;
