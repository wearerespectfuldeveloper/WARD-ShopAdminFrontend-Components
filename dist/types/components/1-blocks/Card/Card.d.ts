/// <reference types="react" />
declare type CardProps = {
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
declare const Card: {
    ({ width, height, children, elevation, title, radius, sideContent, backgroundColor }: CardProps): JSX.Element;
    defaultProps: {
        elevation: string;
        radius: boolean;
    };
};
export default Card;
