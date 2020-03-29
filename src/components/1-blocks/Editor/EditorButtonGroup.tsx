/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import "./EditorButtonGroup.scss";

import Button from "../../2-units/Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

import Icon, { IconProps } from "../../3-design-tokens/SVGIcon/SVGIcon";

type EditorButtonGroupProps = {
  /** 이용할 버튼들 */
  buttonList: Array<IconProps["icon"]>;
  /** 추가적인 스타일링을 적용하기 위한 클래스 */
  className?: string;
  /** 인라인 모드 활성화  */
  inline?: boolean;
};

const EditorButtonGroup = ({
  buttonList,
  className
}: EditorButtonGroupProps) => {
  const changeElementHandler = (element: string) => {
    if (document.getSelection()?.toString().length === 0) {
      alert("Please select some text before editing the content");
      return;
    }
    let range = window.getSelection()?.getRangeAt(0);
    if (range) {
      const oldContent = document.createTextNode(range.toString());
      
    }
  };

  const changeStyleHandler = (style: string) => {};

  const editHandler = (editType: any) => {
    if (
      editType === "h1" ||
      "h2" ||
      "h3" ||
      "h4" ||
      "h5" ||
      "h6" ||
      "indent" ||
      "i" ||
      "b" ||
      "link" ||
      "orderedList" ||
      "unorderedList" ||
      "indent" ||
      "strikeThrough" ||
      "underline" ||
      "color" ||
      "alignLeft" ||
      "alignCenter" ||
      "alignRight" ||
      "alignJustify" ||
      "backgroundColor"
    ) {
      let range = window.getSelection()?.getRangeAt(0);
      if (range) {
        console.log('Element')
        const oldElement = range.cloneContents();
        if (editType === "color") {
          const newElement = document.createElement("span");
          newElement.style.color = "red";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "indent") {
          const newElement = document.createElement("span");
          newElement.innerHTML = "&emsp;";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "unindent") {
          const newElement = document.createElement("span");
          newElement.innerHTML = "&emsp;";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "orderedList") {
          const newElement = document.createElement("ol");
          const newListElement = document.createElement("li");
          newListElement.appendChild(oldElement);
          newElement.appendChild(newListElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "unorderedList") {
          const newElement = document.createElement("ul");
          const newListElement = document.createElement("li");
          newListElement.appendChild(oldElement);
          newElement.appendChild(newListElement)
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "alignCenter") {
          const newElement = document.createElement("div");

          // div를 할까 span 을 넣을까
          newElement.style.textAlign = "center";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);


        } else if (editType === "alignLeft") {
          const newElement = document.createElement("div");
          newElement.style.textAlign = "left";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "alignRight") {
          const newElement = document.createElement("div");
          newElement.style.textAlign = "right";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "alignJustify") {
          const newElement = document.createElement("div");
          newElement.style.textAlign = "justify";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else if (editType === "backgroundColor") {
          const newElement = document.createElement("span");
          newElement.style.backgroundColor = "red";
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        } else {
          const elementName = editType;
          const newElement = document.createElement(elementName);
          newElement.append(oldElement);
          range.deleteContents();
          range.insertNode(newElement);
        }
      }
    }
  };

  // 흠 이러면 데이터 내보낼 떄 문제가 되겠는데
  // 그리고 다시 클릭될 수 있게 해야해
  // 에효 걍 다 커스터마이징 해야되겠고만. 내가 보기엔 span을 겁나 많이 써야할 것 같아

  const buttonElements = buttonList.map(item => {
    return (
      <Button className="_editor__control-button" size="small" onClick={() => editHandler(item)}>
        <Icon icon={item}></Icon>
      </Button>
    );
  });

  return (
    <ButtonGroup className={"_editor-button-group " + className} gap="0px">
      {buttonElements}
    </ButtonGroup>
  );
};

export default EditorButtonGroup;
