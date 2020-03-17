/// <reference types="react" />
export declare type CardGroupProps = {
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
};
declare const CardGroup: {
    ({ mode, gap, width, maxWidth, minWidth, children, className }: CardGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        gap: string;
    };
};
export default CardGroup;
