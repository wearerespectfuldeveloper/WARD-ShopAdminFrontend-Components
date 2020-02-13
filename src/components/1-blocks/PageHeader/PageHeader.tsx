/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReadStream } from "tty";

type PageHeaderProps = {
  /** 페이지 헤더의 글자색상을 설정 */
  color: string;
  /** 페이지 헤더의 배경색을 설정 */
  backgroundColor: string;
  /** 페이지 헤더의 왼쪽을 차지할 요소 */
  leftElement: React.ReactNode;
  /** 페이지 헤더의 오른쪽을 차지할 요소 */
  rightElement: React.ReactNode;
  /** Sticky 헤더의 적용 여부 */
  sticky: boolean;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const PageHeader = ({
  color,
  backgroundColor,
  leftElement,
  rightElement,
  sticky,
  className
}: PageHeaderProps) => {
  const style = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    color: ${color};
    background-color: ${backgroundColor};
    ${sticky ? "position: sticky; top: 0" : ""};
    box-shadow: 0px 2px 6px #0000000a;
  `;
  return (
    <div css={[style]} className={className}>
      <div className="left">{leftElement}</div>

      <div className="right">{rightElement}</div>
    </div>
  );
};

PageHeader.defaultProps = {
  color: "black",
  backgroundColor: "#ffffff",
  sticky: false
};

export default PageHeader;
