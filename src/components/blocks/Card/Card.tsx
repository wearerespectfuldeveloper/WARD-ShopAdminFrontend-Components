/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type CardProps = {
  /** 카드의 너비를 임의로 설정 */
  width?: string | number;
  /** 카드의 높이를 임의로 설정 */
  height?: string | number;
  /** 카드의 내용물 */
  children: React.ReactNode;
  /** 카드의 튀어나온 정도를 설정 */
  elevation: '0' | '1' | '2'
  /** 카드 테두리의 radius 적용 여부를 설정 */
  radius: boolean;
  /** 카드 배경색 설정 */
  background?: string;
}

const style = css`
  padding: 20px;
`;

const elevations = {
  0: css`
  
  `,
  1: css`
  box-shadow: 0px 2px 6px #0000000A;
  `,
  2: css`

  `
}

const Card = ({
  width,
  height,
  children,
  elevation,
  radius,
  background
}: CardProps) => {
  return (
    <div
      css={[style, { width, height }, elevations[elevation]]}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  elevation: '1',
  radius: true
}

export default Card;