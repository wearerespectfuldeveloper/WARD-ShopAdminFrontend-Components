import React from 'react';
import CheckBox from './CheckBox';
import { withKnobs, text, radios, boolean, select, color } from '@storybook/addon-knobs';

export default {
  title: 'Unit|CheckBox',
  component: CheckBox,
  decorators: [withKnobs]
};

export const checkBox = () => {

  const size = select('size', ['mini','medium','big'], 'medium');
  const sideText = text('sideText', 'CheckBox');
  const sideTextColor = color('sideTextColor', '#3B86FF');
  const checkBoxColor = color('checkBoxColor', '#3B86FF');
  const disabled = boolean('disabled', false);

  return (
    <CheckBox
      id="input"
      size={size}
      sideTextColor={sideTextColor}
      color={checkBoxColor}
      sideText={sideText}
      disabled={disabled}
    />
  )
}

checkBox.story = {
  name: 'Default'
};