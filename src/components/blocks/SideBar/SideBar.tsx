/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type SideBarProps = {
  /** 사이드바의 모드를 설정합니다. mini로 설정되면 너비가 최소한으로 줄어들며 글자는 사라지고 아이콘만이 보입니다. */
  mode: 'mini' | 'normal';
  /** 사이드바를 화면에서 나타나거나 사리지게합니다 */
  toggled: boolean;
  /** 사이드바의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 사이드바의 높이를 임의로 설정합니다. */
  height?: string | number;
};

const style = css`
  background-color: #43425D;
  position: fixed;
  transition: width 0.5s ease-out;
`;

const modes = {
  mini: css`
    
  `,
  normal: css`
    
  `
};

const show = css`
  width: 16.25rem;
  > ul {
    display: block;
  }
`;

const hide = css`
  width: 0rem;
  > ul {
    display: none;
  }
`;

/** `SideBar` 컴포넌트는 화면에 사이드바를 추가할 때 사용합니다.  */
const SideBar = ({ 
  mode, 
  width,
  height,
  toggled
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
      <ul>
        <li>
          haha
        </li>
      </ul>
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