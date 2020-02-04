/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기를 설정합니다 */
  size: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
};


const style = css`
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 1rem;
    margin-right: 1rem;
  }
`;


const themes = {
  primary: css`
    background-color: #43425D;
    border: none;
    color: white;
    svg {
      fill: white;
    }
    &:hover:enabled {
      background-color: #43425D;
    }
    &:active:enabled {
      background-color: #43425D;
    }
    &:disabled {
      background-color: #c6c6ce;
    }
  `,
  secondary: css`
    background-color: white;
    border: 1px solid #43425D;
    color: #343a40;
    svg {
      fill: #343a40;
    }
    &:hover:enabled {
      background: #f1f3f5;
    }
    &:active:enabled {
      background: #dee2e6;
    }
    &:disabled {
      color: #c6c6ce;
      svg {
        fill: #c6c6ce;
      }
    }
  `,
  tertiary: css`
    background: none;
    color: #43425D;
    svg {
      fill: #43425D;
    }
    &:disabled {
      color: #c6c6ce;
      svg {
        fill: #c6c6ce;
      }
    }
  `
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0.25rem 1.0625rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0.5rem 3.875rem 0.5rem 3.875rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    padding: 0.75rem 3.875rem 0.875rem;
  `,
  medium: css`
    padding: 0.75rem 3.875rem 0.875rem;
  `,
  big: css`
    padding: 0.75rem 3.875rem 0.875rem;
  `
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
const Button = ({ 
  children, 
  theme, 
  size, 
  disabled, 
  width, 
  iconOnly, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      css={[
        style, 
        themes[theme], 
        sizes[size], 
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]]
      ]}
      disabled={disabled} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium'
};

export default Button;