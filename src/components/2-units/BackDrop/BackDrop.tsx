/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from 'react';
import "./BackDrop.scss";

type BackDropProps = {
  /** 클릭했을 때 호출할 함수 */
  click?: () => void;
};

const backDrop = ({ click }: BackDropProps) => {
  return <div className="back-drop" onClick={click}></div>;
};

export default backDrop;
