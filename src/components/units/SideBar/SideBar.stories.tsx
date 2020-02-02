/** @jsx jsx */
import SideBar from './SideBar';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';


export default {
  title: 'components|SideBar',
  component: SideBar,
  decorators: [withKnobs]
};

export const sideBar = () => {
  const mode = select(
    'mode',
    ['normal', 'mini'],
    'normal'
  );
  const toggled = boolean('toggled', true);
  const width = text('width', '');

  return (
    <SideBar
    >
    </SideBar>
  );
};

sideBar.story = {
  name: 'Default'
};

export const Normal = () => {
  return <SideBar></SideBar>;
};
