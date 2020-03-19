/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import './Form.scss';

export type FormProps = {
  /** Children */
  children?: React.ReactNode;
  /** 폼의 제목 */
  title: string;
  /** 폼의 소제목 혹은 설명 */
  subTitle?: string;
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 폼의 높이를 임의로 설정 */
  height?: string | number;
  /** Form 안에 들어갈 Input 과 기타 요소들 */
  bodyElements: React.ReactNode;
  /** Form 안에 들어갈 Button 과 기타 요소들 */
  footerElements?: React.ReactNode;
  /** 리다이렉트 안내 텍스트 */
  redirectText?: string;
  /** 리다이렉트 되어 도착할 주소 */
  redirectUrl?: string;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

/**
 * 여러개의 Input 컴포넌트로 이루어진 Form을 만들고 싶을 때 이 컴포넌트를 사용하세요.
 */

const style = css`
  
`;

const Form = ({
  title,
  subTitle,
  width,
  maxWidth,
  minWidth,
  height,
  bodyElements,
  footerElements,
  className,
  redirectText,
  redirectUrl
}: FormProps) => {
  return (
    <div css={[style, { width, maxWidth, minWidth, height }]} className={'_form ' + className}>
      <div className="form-header">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subTitle}</p>
      </div>
      <div className="form-body">{bodyElements}</div>
      <div className="form-footer">
        {footerElements}
        <a className="guide" href={redirectUrl}>
          {redirectText}
        </a>
      </div>
    </div>
  );
};

Form.defaultProps = {
};

export default Form;
