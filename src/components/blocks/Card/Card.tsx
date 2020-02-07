/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type CardProps = {
  /** 카드의 너비를 임의로 설정 */
  width?: string | number;
  /** 카드의 높이를 임의로 설정 */
  height?: string | number;
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
};

const Card = ({
  width,
  height,
  children,
  elevation,
  title,
  radius,
  sideContent,
  backgroundColor
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

  const elevations = {
    0: css``,
    1: css`
      box-shadow: 0px 2px 6px #0000000a;
    `,
    2: css`
      box-shadow: 0px 3px 9px #0000000a;
    `
  };

  return (
    <div css={[style, { width, height }, elevations[elevation]]}>
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
