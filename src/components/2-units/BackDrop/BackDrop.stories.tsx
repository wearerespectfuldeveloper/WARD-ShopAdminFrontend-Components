/** @jsx jsx */
import BackDrop from './BackDrop';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Unit|BackDrop',
  component: BackDrop,
  decorators: [withKnobs]
};

export const backDrop = () => {
  return <BackDrop />
}

backDrop.story = {
  name: 'Default'
}

