import React from "react";
import Card from "./Card";
import ListItem from "../../units/ListItem/ListItem";
import Icon from "../../design-tokens/SVGIcon/SVGIcon";
import { jsx, css } from "@emotion/core";

import {
  withKnobs,
  text,
  radios,
  boolean,
  select,
  color
} from "@storybook/addon-knobs";

export default {
  title: "Block|Card",
  component: Card,
  decorators: [withKnobs]
};

export const card = () => {
  const title = text("title", "");
  const width = text("width", "500px");
  const radius = boolean("radius", false);
  const backgroundColor = color("backgroundColor", "");

  const leading = (
    <Icon icon="moneyBag" color="#56D9FE" bgColor="#56D9FE"></Icon>
  );
  const trailing = <Icon icon="menu"></Icon>;
  const contentStyle = css`
    background: red;
  `;

  const content = (
    <div css={[contentStyle]}>
      <h1>$50,000</h1>
      <span>총 수익</span>
    </div>
  );

  return (
    <Card
      title={title}
      width={width}
      radius={radius}
      backgroundColor={backgroundColor}
    >
      <ListItem
        theme="light"
        border="none"
        width={width}
        leading={leading}
        trailing={trailing}
      >
        {content}
      </ListItem>
    </Card>
  );
};

card.story = {
  name: "Default"
};
