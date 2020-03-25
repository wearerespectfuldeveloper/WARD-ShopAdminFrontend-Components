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
  decorators: [withKnobs],
  parameters: {
    docs: {
      inlineStories: false
    }
  }
};

export const dropDown = () => {
  const dropDownText = text("dropDownText", "DropDown");
  const width = text("width", "150px");

  return (
    <div style={{ height: "500px", backgroundColor: '#eee' }}>
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
    </div>
  );
};

dropDown.story = {
  name: "Default"
};
