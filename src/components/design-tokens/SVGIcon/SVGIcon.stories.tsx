/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { iconTypes } from './SVGIcon';

export default {
  component: Icon,
  title: 'Design ToKen|Icon'
};

export const icon = () => <Icon icon="dashboard" />;
icon.story = {
  name: 'Default'
};

export const customSize = () => <Icon icon="dashboard" size="4rem" />;

export const customColor = () => <Icon icon="dashboard" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="dashboard" color="red" size="4rem" />
);

export const listOfIcons = () => {
  return (
    <ul css={iconListStyle}>
      {iconTypes.map(icon => (
        <li key={icon}>
          <Icon icon={icon} />
          {icon}
        </li>
      ))}
    </ul>
  );
};

const iconListStyle = css`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
    box-sizing: border-box;
    width: 25%;
    padding: 1rem;
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
  }
`;