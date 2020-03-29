import React from "react";
import Editor from "./Editor";
import {
  withKnobs,
  text,
  radios,
  boolean,
  array
} from "@storybook/addon-knobs";

export default {
  title: "Block|Editor",
  component: Editor,
  decorators: [withKnobs],
};

export const editor = () => {
  return <Editor></Editor>
}

editor.story = {
  name: "Default"
};

