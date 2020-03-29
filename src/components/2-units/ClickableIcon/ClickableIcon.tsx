/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import "./ClickableIcon.scss";
import Icon, { IconProps } from "../../3-design-tokens/SVGIcon/SVGIcon"

type ClickableIconProps = {
  /** 아이콘 종류 */
  icon: IconProps['icon'];
  /** 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
  /** 아이콘의 너비 */
  size?: string;
  /** 클릭시 수행될 함수 */
  onClick?: () => any
};

const ClickableIcon = ({ icon, size, className, onClick }: ClickableIconProps) => {
  return (
    <div className={'_clickable-icon ' + className} onClick={onClick}>
      <Icon icon={icon} size={size}></Icon>
    </div>
  )
}

ClickableIcon.defaultProps = {
  icon: "settings"
}

export default ClickableIcon;