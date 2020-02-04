/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type SideBarProps = {
  /** 사이드바 안의 내용 */
  children: React.ReactNode;
  /** 사이드바의 모드를 설정합니다. mini로 설정되면 너비가 최소한으로 줄어들며 글자는 사라지고 아이콘만이 보입니다. */
  mode: 'mini' | 'normal';
  /** 사이드바를 화면에서 나타나거나 사리지게합니다 */
  toggled: boolean;
  /** 사이드바의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 사이드바의 높이를 임의로 설정합니다. */
  height?: string | number;
};

// 제대로 스무스하게 할려면 트랜지션이 아니라 애니메이션으로 해야하는 듯

const style = css`
  background-color: #43425D;
  position: fixed;
  transition: width 0.5s ease-out;

  .sidebar-header {
    font-size: 0.9375rem;
    letter-spacing: 0.1875rem;
    color: white;
    margin: 1.625rem 1.25rem;
  }

  * {
    transition: opacity 0.2s ease-out;
  }
`;

const modes = {
  mini: css`
    
  `,
  normal: css`
    
  `
};

const show = css`
  width: 16.25rem;
`;

const hide = css`
  width: 0rem;
  * {
    opacity: 0;
  }
`;

/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */
const SideBar = ({ 
  mode, 
  width,
  height,
  toggled,
  children
}: SideBarProps) => {
  console.log(toggled);
  return (
    <div 
      css={[
        style,
        modes[mode],
        { width, height },
        toggled ? show : hide
      ]}
    >
      <h1 className="sidebar-header">WARD</h1>
      {children}
    </div>
  );
};

SideBar.defaultProps = {
  mode: 'normal',
  width: '16.25rem',
  height: '100vh',
  toggled: true
};

export default SideBar;