import React from 'react';
import CheckBox from './CheckBox';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Unit|CheckBox',
  component: CheckBox,
  decorators: [withKnobs]
};

export const checkBox = () => {
  return (
    <CheckBox />
  )
}

checkBox.story = {
  name: 'Default'
};