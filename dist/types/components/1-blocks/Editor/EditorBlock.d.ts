/// <reference types="react" />
import "./EditorBlock.scss";
declare type EditorBlockProps = {
    /** 기본 width */
    width?: string;
    className?: string;
};
declare const EditorBlock: ({ className, width }: EditorBlockProps) => JSX.Element;
export default EditorBlock;
