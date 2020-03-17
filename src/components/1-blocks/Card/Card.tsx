/** @jsx jsx */
import React from 'react';
import { jsx, css } from "@emotion/core";

type CardProps = {
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 카드의 높이를 임의로 설정 */
  height?: string | number;
  /** 카드의 padding을 직접 설정합니다. 기본값은 상하좌우 전체 20px 입니다. */
  padding?: string | number;
  /** 카드의 제목을 설정. 제목이 있을시 제목 아래 Divider 또한 생성됩니다. */
  title?: string;
  /** 카드의 내용물 */
  children: React.ReactNode;
  /** 카드의 오른쪽 모서리에 위치할 컨텐츠 */
  sideContent?: React.ReactNode;
  /** 카드의 튀어나온 정도를 설정 */
  elevation: "0" | "1" | "2";
  /** 카드 테두리의 radius 적용 여부를 설정 */
  radius: boolean;
  /** 카드 배경색 설정 */
  backgroundColor?: string;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};

const elevations = {
  0: css``,
  1: css`
    box-shadow: 0px 2px 6px #0000000a;
  `,
  2: css`
    box-shadow: 0px 3px 9px #0000000a;
  `
};

const Card = ({
  width,
  maxWidth,
  minWidth,
  height,
  padding,
  children,
  elevation,
  title,
  radius,
  sideContent,
  backgroundColor,
  className
}: CardProps) => {
  const style = css`
    padding: 20px;
    border-radius: ${radius ? "0.25rem" : "0rem"};
    background-color: ${backgroundColor};

    .card-header {
      display: flex;
      justify-content: space-between;
      h1 {
        margin: 0;
      }
      ${
        title
          ? "border-bottom: 1px solid #eee; > h1 { padding-bottom: 1.4375rem; }"
          : ""
      }
      }
    }

    .card-body {

    }
  `;

  return (
    <div className={'$card ' + className} css={[style, { width, maxWidth, minWidth, height, padding }, elevations[elevation]]}>
      <div className="card-header">
        <h1>{title}</h1>
        <div>{sideContent}</div>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

Card.defaultProps = {
  elevation: "1",
  radius: true
};

export default Card;
