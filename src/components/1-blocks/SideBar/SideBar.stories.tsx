/** @jsx jsx */
import SideBar from "./SideBar";
import ListItem from "../../2-units/ListItem/ListItem";
import Icon from "../../3-design-tokens/SVGIcon/SVGIcon";

import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Block|SideBar",
  component: SideBar,
  parameters: {
    docs: {
      inlineStories: false
    }
  },
  decorators: [withKnobs]
};

export const sideBar = () => {
  const mode = select("mode", ["normal", "mini"], "normal");
  const toggled = boolean("toggled", true);
  const width = text("width", "16.25rem");
  const height = text("height", "100vh");
  const toggleAnimation = select(
    "slideAnimation",
    ["shrink", "slideIn"],
    "shrink"
  );

  return (
    <SideBar
      toggleAnimation={toggleAnimation}
      title="WARD"
      mode={mode}
      width={width}
      height={height}
      toggled={toggled}
    >
      
    </SideBar>
  );
};

sideBar.story = {
  name: "Default"
};

export const sideBarWithList = () => {
  const mode = select("mode", ["normal", "mini"], "normal");
  const toggled = boolean("toggled", true);
  const width = text("width", "16.25rem");
  const height = text("height", "100vh");

  const toggleAnimation = select(
    "slideAnimation",
    ["shrink", "slideIn"],
    "shrink"
  );

  const leading1 = <Icon icon="dashboard"></Icon>;
  const leading2 = <Icon icon="products"></Icon>;
  const leading3 = <Icon icon="customers"></Icon>;
  const leading4 = <Icon icon="chatting"></Icon>;

  return (
    <SideBar
      toggleAnimation={toggleAnimation}
      title="WARD"
      mode={mode}
      width={width}
      height={height}
      toggled={toggled}
    >
      <ListItem leading={leading1}>판매 현황</ListItem>
      <ListItem leading={leading2} border="none">
        상품 관리 / 등록
      </ListItem>
      <ListItem leading={leading3} border="none">
        고객 정보 관리
      </ListItem>
      <ListItem leading={leading4} border="none">
        고객 문의 관리
      </ListItem>
    </SideBar>
  );
};
