/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export type FormProps = {
  /** Children */
  children?: React.ReactNode;
  /** 폼의 제목 */
  title: string;
  /** 폼의 소제목 혹은 설명 */
  subTitle?: string;
  /** 폼의 너비를 임의로 설정 */
  width?: string | number;
  /** 폼의 높이를 임의로 설정 */
  height?: string | number;
  /** Form 안에 들어갈 Input 과 기타 요소들 */
  bodyElements: React.ReactNode;
  /** Form 안에 들어갈 Button 과 기타 요소들 */
  footerElements?: React.ReactNode;
  /** 따로 추가적인 스타일 커트서마이징을 하고 싶을 때 넣는 클래스 이름 */
  className?: string;
  /** 리다이렉트 안내 텍스트 */
  redirectText?: string;
  /** 리다이렉트 되어 도착할 주소 */
  redirectUrl?: string;
};

/**
 * 여러개의 Input 컴포넌트로 이루어진 Form을 만들고 싶을 때 이 컴포넌트를 사용하세요.
 */

const style = css`
  backroud-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 55px;

    .title {
      margin-bottom: 4px;
    }
    .sub-title {
    }
  }

  .form-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 39px;

    > input {
      margin-bottom: 45px;
    }
    
  }

  .form-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    > a {
      margin-top: 39px;
    }
  }
`;


const Form = ({
  title,
  subTitle,
  width,
  height,
  bodyElements,
  footerElements,
  className,
  redirectText,
  redirectUrl
}: FormProps) => {
  return (
    <div css={[style, { width, height }]} className={className}>
      <div className="form-header">
        <h1 className="title">{title}</h1>
        <p className="sub-title">{subTitle}</p>
      </div>
      <div className="form-body">
        {bodyElements}
      </div>
      <div className="form-footer">
        {footerElements}
        <a className="guide" href={redirectUrl}>{redirectText}</a>
      </div>
    </div>
  );
};

Form.defaultProps = {
  width: '100%'
};

export default Form;