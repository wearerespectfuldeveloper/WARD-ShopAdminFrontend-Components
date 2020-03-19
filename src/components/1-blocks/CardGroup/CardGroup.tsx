/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Card from '../Card/Card';
import './CardGroup.scss';

export type CardGroupProps = {
  /** 카드 그룹의 방향 */
  mode: 'row' | 'column' | 'mansory';
  /** 카드들 사이의 간격을 설정합니다. */
  gap: number | string;
  /** 기본 width */
  width?: string;
  /** 최대 width */
  maxWidth?: string;
  /** 최소 width */
  minWidth?: string;
  /** 카드 그룹에서 보여줄 카드들 */
  children: React.ReactNode;
  /** 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
}

const CardGroup = ({
  mode,
  gap,
  width,
  maxWidth,
  minWidth,
  children,
  className
}: CardGroupProps) => {

  const style = css`
    
  `

  return (
    <div className={'_card-group ' + className} css={style}>
      test
    </div>
  )
}

CardGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem'
}

export default CardGroup;