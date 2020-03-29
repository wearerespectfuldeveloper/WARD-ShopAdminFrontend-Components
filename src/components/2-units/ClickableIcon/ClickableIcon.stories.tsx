import React from "react";
import ClickableIcon from "./ClickableIcon";
import { withKnobs, text, radios, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';


export default {
  title: "Unit|ClickableIcon",
  component: ClickableIcon,
  decorators: [withKnobs]
};

export const clickableIcon = () => {
  return <ClickableIcon icon="trash" onClick={() => console.log('hey!')}></ClickableIcon>
}

clickableIcon.story = {
  name: "Default"
}