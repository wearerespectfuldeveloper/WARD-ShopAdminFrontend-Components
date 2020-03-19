/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../../3-design-tokens/SVGIcon/SVGIcon";
import "./SideBar.scss";

type SideBarProps = {
  /** 사이드바 안의 내용 */
  children: React.ReactNode;
  /** 사이드바를 화면에서 나타나거나 사리지게합니다 */
  toggled: boolean;
  /** 사이드바의 토글 동작을 설정합니다 */
  toggleAnimation: "shrink" | "slideIn";
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 사이드바의 맨 위에 위치할 요소 */
  header?: React.ReactNode;
  /** 사이드바의 높이를 임의로 설정합니다. */
  height?: string | number;
  /** 사이드바의 sticky 여부를 결정 */
  sticky?: boolean;
  /** 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
  /** 토글 버튼이 수행할 함수 */
  toggleFunc?: () => void;
};

const style = css``;

const show = {
  shrink: css`
    z-index: 1000;

    transition: width 0.5s ease-out;
    * {
      transition: opacity 0.2s ease-out 0.5s;
    }
  `,
  slideIn: css`
    z-index: 1000;

    transition: transform 0.5s ease-out 0.2s;
    * {
      transition: opacity 0.2s 0.5s;
    }
    transform: translateX(0);
  `
};

const hide = {
  shrink: css`
    z-index: 0;
    transition: width 0.5s ease-out 0.2s;
    * {
      transition: opacity 0.2s ease-out;
    }
    width: 0;
    min-width: 0;

    * {
      opacity: 0;
    }
  `,
  slideIn: css`
    z-index: 0;

    transition: transform 0.5s ease-out;
    * {
      transition: opacity 0.2s;
    }
    transform: translateX(-110%);
    * {
      opacity: 0;
    }
  `
};

/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */
const SideBar = ({
  width,
  minWidth,
  maxWidth,
  height,
  toggled,
  children,
  header,
  sticky,
  toggleAnimation,
  className
}: SideBarProps) => {
  const stickyStyle = sticky
    ? css`
        position: sticky;
      `
    : css`
        position: fixed;
      `;

  return (
    <div
      css={[
        style,
        {
          width,
          height,
          minWidth,
          maxWidth
        },
        stickyStyle,
        toggled ? show[toggleAnimation] : hide[toggleAnimation]
      ]}
      className={"_side-bar " + className}
    >
      <div className="_side-bar__header">{header}</div>
      {children}
    </div>
  );
};

SideBar.defaultProps = {
  height: "100vh",
  toggled: true
};

export default SideBar;
