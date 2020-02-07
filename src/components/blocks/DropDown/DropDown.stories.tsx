import React from "react";
import DropDown from "./DropDown";
import {
  withKnobs,
  text,
  radios,
  boolean,
  array
} from "@storybook/addon-knobs";

export default {
  title: "Block|DropDown",
  component: DropDown,
  decorators: [withKnobs]
};

export const dropDown = () => {
  const dropDownText = text("dropDownText", "DropDown");
  const width = text("width", "150px");

  return (
    <DropDown
      text={dropDownText}
      width={width}
      items={[
        { text: "DropDown", clickFunc: () => {} },
        { text: "DropDown", clickFunc: () => {} },
        { text: "DropDown", clickFunc: () => {} },
        { text: "DropDown", clickFunc: () => {} },
        { text: "DropDown", clickFunc: () => {} }
      ]}
    />
  );
};

dropDown.story = {
  name: "Default"
};
