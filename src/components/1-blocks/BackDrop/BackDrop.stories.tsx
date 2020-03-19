/** @jsx jsx */
import BackDrop from './BackDrop';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Block|BackDrop',
  component: BackDrop,
  decorators: [withKnobs],
  parameters: {
    docs: {
      inlineStories: false
    }
  }
};

export const backDrop = () => {
  return <BackDrop />
}

backDrop.story = {
  name: 'Default'
}

