/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./PageHeader.scss";

type PageHeaderProps = {
  /** 페이지 헤더의 글자색상을 설정 */
  color: string;
  /** 페이지 헤더의 배경색을 설정 */
  backgroundColor: string;
  /** 페이지 헤더의 왼쪽을 차지할 요소 */
  leftElement: React.ReactNode;
  /** 페이지 헤더의 오른쪽을 차지할 요소 */
  rightElement: React.ReactNode;
  /** sticky 헤더의 적용 여부 */
  sticky?: boolean;
  /** 페이지 헤더에 넣을 로고 */
  logo?: React.ReactNode;
  /** 페이지 헤더의 높이 */
  height?: string;
  /* 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
};

const PageHeader = ({
  color,
  backgroundColor,
  leftElement,
  rightElement,
  sticky,
  logo,
  height,
  className
}: PageHeaderProps) => {
  const style = css`
    color: ${color};
    background-color: ${backgroundColor};
    ${sticky ? "position: sticky; top: 0;" : "position: fixed; top: 0;"};
    box-shadow: 0px 2px 6px #0000000a;
    height: ${height};
  `;
  return (
    <header css={[style]} className={"_page-header " + className}>
      <nav className="_page-header__contents">
        <div className="_page-header__left--items">{leftElement}</div>
        <div className="_page-header__logo">{logo}</div>
        <div className="_page-header__spacer"></div>
        <div className="_page-header__right--items">{rightElement}</div>
      </nav>
    </header>
  );
};

PageHeader.defaultProps = {
  color: "black",
  backgroundColor: "#ffffff",
  sticky: false
};

export default PageHeader;
