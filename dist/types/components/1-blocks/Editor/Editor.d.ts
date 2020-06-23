/// <reference types="react" />
import './Editor.scss';
declare type EditorProps = {
    /** 기본 width */
    width?: string;
    className?: string;
};
declare const Editor: ({ width, className }: EditorProps) => JSX.Element;
export default Editor;
