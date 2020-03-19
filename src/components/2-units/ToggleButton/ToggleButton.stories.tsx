import React from 'react';
import ToggleButton from './ToggleButton';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Unit|ToggleButton',
  component: ToggleButton,
  decorators: [withKnobs]
};

export const toggleButton = () => {
  return (
    <ToggleButton />
  );
};