/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import './Editor.scss';
import EditorButtonGroup from './EditorButtonGroup';
import EditorBlock from './EditorBlock';
import Card from '../Card/Card';

type EditorProps = {
  /** 기본 width */
  width?: string;
  /* 외부에서 클래스를 부여하고 하고싶을 때 사용합니다 */
  className?: string;
};

const Editor = ({ width, className }: EditorProps) => {
  const [editorState, setEditorState] = useState<{
    editorBlockList: React.ReactNode[];
  }>({
    editorBlockList: [],
  });

  const addEditorBlockHandler = () => {
    const proccessed = { ...editorState };
    proccessed.editorBlockList.push(<EditorBlock />);
  };

  useEffect(() => addEditorBlockHandler(), []);

  return (
    <div className={'_editor ' + className}>
      <Card className="_editor__control-wrapper">
        <EditorButtonGroup
          className="_editor__control-buttons"
          buttonList={[
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'b',
            'i',
            's',
            'hr',
            'u',
            'color',
            'indent',
            'orderedList',
            'unorderedList',
            'alignCenter',
          ]}
        />
        <EditorBlock />
      </Card>
    </div>
  );
};

export default Editor;
