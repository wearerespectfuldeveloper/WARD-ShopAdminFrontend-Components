/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../../3-design-tokens/SVGIcon/SVGIcon";

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

const style = css`
  background-color: #43425d;
  top: 0;
  left: 0;
`;

const toggleAnimations = {
  shrink: css`
    transition: width 0.5s ease-out;
    * {
      transition: opacity 0.2s ease-out;
    }
  `,
  slideIn: css`
    transition: transform 1s;
    * {
      transition: opacity 0.2s 1s;
    }
  `
};

const show = {
  shrink: css``,
  slideIn: css`
    transform: translateX(0rem);
  `
};

const hide = {
  shrink: css`
    width: 0rem;
    * {
      opacity: 0;
    }
  `,
  slideIn: css`
    transform: translateX(-100vw);
    * {
      opacity: 0;
    }
  `
};

const headerStyle = css`
  padding: 20px;
  position: relative;

  .toggle-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }
`;

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
        stickyStyle,
        toggleAnimations[toggleAnimation],
        toggled ? show[toggleAnimation] : hide[toggleAnimation],
        {
          width,
          height,
          minWidth,
          maxWidth
        }
      ]}
      className={className}
    >
      <div css={headerStyle}>
        {header}
        <Icon className="toggle-icon" icon="arrowLeft" color="white"></Icon>
      </div>
      {children}
    </div>
  );
};

SideBar.defaultProps = {
  height: "100vh",
  toggled: true
};

export default SideBar;
