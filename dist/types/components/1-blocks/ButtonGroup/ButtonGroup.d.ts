/// <reference types="react" />
import './ButtonGroup.scss';
export declare type ButtonGroupProps = {
    /** 버튼을 보여줄 방향 */
    direction: 'row' | 'column';
    /** 버튼을 우측에 보여줍니다. */
    rightAlign?: boolean;
    /** 버튼과 버튼사이의 간격을 설정합니다. */
    gap: number | string;
    /** 기본 width */
    width?: string;
    /** 최대 width */
    maxWidth?: string;
    /** 최소 width */
    minWidth?: string;
    /** 버튼 그룹에서 보여줄 버튼들 */
    children: React.ReactNode;
    className?: string;
};
declare const ButtonGroup: {
    ({ direction, rightAlign, children, gap, width, maxWidth, minWidth, className }: ButtonGroupProps): JSX.Element;
    defaultProps: {
        direction: string;
        gap: string;
    };
};
export default ButtonGroup;
