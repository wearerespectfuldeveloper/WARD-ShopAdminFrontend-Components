/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import './ButtonGroup.scss';

export type ButtonGroupProps = {
  /** 버튼을 보여줄 방향 */
  direction: 'row' | 'column';
  /** 버튼을 우측에 보여줍니다. */
  rightAlign?: boolean;
  /** 버튼과 버튼사이의 간격을 설정합니다. */
  gap: number | string;
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 버튼 그룹에서 보여줄 버튼들 */
  children: React.ReactNode;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};

/**
 * 여러개의 `Button` 컴포넌트를 보여주고 싶거나, 버튼을 우측에 정렬하고 싶을 땐 `ButtonGroup` 컴포넌트를 사용하세요.
 */

 // direction 에 따라 margin-left 또는 margin-top 설정
const style = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'margin-left' : 'margin-top';
  return css`
    button + button {
      ${marginType}: ${gap};
    }

    @media screen and (max-width: 325px) {
      flex-direction: column;
      button + button {
        margin-left: 0px;
        margin-top: ${gap};
      }
    }
  `
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;


const ButtonGroup = ({
  direction,
  rightAlign,
  children,
  gap,
  width,
  maxWidth,
  minWidth,
  className
}: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction
        },
        style(direction, gap),
        {
          width,
          maxWidth,
          minWidth
        },
        rightAlign && rightAlignStyle
      ]}
      className={'_button-group ' + className}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
};

export default ButtonGroup;