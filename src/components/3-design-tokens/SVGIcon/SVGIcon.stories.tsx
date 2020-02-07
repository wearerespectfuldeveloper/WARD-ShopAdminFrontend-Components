/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Icon, { iconTypes } from './SVGIcon';
import { withKnobs, text, radios, color, select } from '@storybook/addon-knobs';

export default {
  component: Icon,
  title: 'Design ToKen|Icon',
  decorators: [withKnobs]
};

export const icon = () => {

  const icon = select('icon', iconTypes, 'products');
  const size = text('size', '1rem');
  const iconColor = color('color', '');
  const bgColor = color('bgColor', '');

  return <Icon icon={icon} size={size} color={iconColor} bgColor={bgColor}/>;

} 
icon.story = {
  name: 'Default'
};

export const customSize = () => {
  return <Icon icon="dashboard" size="4rem" />;
} 
  

export const customColor = () => {
  return <Icon icon="dashboard" color="red" />;
}

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