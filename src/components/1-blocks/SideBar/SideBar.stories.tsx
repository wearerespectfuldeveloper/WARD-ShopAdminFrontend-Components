/** @jsx jsx */
import SideBar from "./SideBar";
import ListItem from "../../2-units/ListItem/ListItem";
import Icon from "../../3-design-tokens/SVGIcon/SVGIcon";

import { jsx, css } from "@emotion/core";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const logo = <Icon icon="logo"></Icon>;
const logoIcon = <Icon icon="logoIcon"></Icon>;
const logoWithIcon = (
  <div style={{ display: "flex", alignItems: "center" }}>
    <Icon icon="logoIcon"></Icon>
    <Icon icon="logo"></Icon>
  </div>
);

const leading1 = <Icon icon="dashboard"></Icon>;
const leading2 = <Icon icon="products"></Icon>;
const leading3 = <Icon icon="customers"></Icon>;
const leading4 = <Icon icon="chatting"></Icon>;

const IconColumn = () => (
  <div
    style={{
      display: "flex",
      height: "inherit",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <Icon icon="dashboard" size="25px"></Icon>
    <Icon icon="products" size="25px"></Icon>
    <Icon icon="customers" size="25px"></Icon>
    <Icon icon="chatting" size="25px"></Icon>
    <Icon icon="dashboard" size="25px"></Icon>
    <Icon icon="products" size="25px"></Icon>
    <Icon icon="customers" size="25px"></Icon>
  </div>
);

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
  const toggled = boolean("toggled", true);
  const sticky = boolean("sticky", true);
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
      header={logo}
      width={width}
      height={height}
      toggled={toggled}
      sticky={sticky}
    >
      
    </SideBar>
  );
};

sideBar.story = {
  name: "Default"
};

export const sideBarWithList = () => {
  const toggled = boolean("toggled", true);
  const width = text("width", "16.25rem");
  const height = text("height", "100vh");
  const sticky = boolean("sticky", true);
  const toggleAnimation = select(
    "slideAnimation",
    ["shrink", "slideIn"],
    "shrink"
  );

  // .sidebar-header {
  //   font-size: 0.9375rem;
  //   letter-spacing: 0.1875rem;
  //   color: white;
  //   padding: 1.625rem 1.25rem;
  //   margin: 0;
  // }

  return (
    <SideBar
      toggleAnimation={toggleAnimation}
      header={logo}
      width={width}
      height={height}
      toggled={toggled}
      sticky={sticky}
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

export const sideBarMini = () => {
  const toggled = boolean("toggled", true);
  const sticky = boolean("sticky", true);
  const width = text("width", "3.7rem");
  const height = text("height", "100vh");
  const toggleAnimation = select(
    "slideAnimation",
    ["shrink", "slideIn"],
    "shrink"
  );

  return (
    <SideBar
      toggleAnimation={toggleAnimation}
      width={width}
      height={height}
      toggled={toggled}
      sticky={sticky}
    >
      <IconColumn></IconColumn>
    </SideBar>
  );
};
