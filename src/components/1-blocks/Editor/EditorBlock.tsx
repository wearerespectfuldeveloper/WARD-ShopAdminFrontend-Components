/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./EditorBlock.scss";
import Card from "../Card/Card";

type EditorBlockProps = {
  /** 기본 width */
  width?: string;
  /* 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
};

const EditorBlock = ({className, width}: EditorBlockProps) => {
  return (
    <Card className={"_editor__block " + className}>
      <div className="_editor__block__editable-area" contentEditable="true"></div>
    </Card>
  );
};

export default EditorBlock;
