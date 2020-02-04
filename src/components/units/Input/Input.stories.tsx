import React from 'react';
import InputComponent from './Input';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Unit|Input',
  component: InputComponent,
  decorators: [withKnobs]
};

export const TextInput = () => {
  const width = text('width', '400px');
  const inputPlaceHolder = text('placeholder', '아이디');
  const disabled = boolean('disabled', false);
  
  return (
    <InputComponent
      inputType="text"
      inputPlaceHolder={inputPlaceHolder}
      width={width}
      disabled={disabled}
    />
  )
}

TextInput.story = {
  name: 'Default'
};

export const PasswordInput = () => {
  const width = text('width', '400px');
  const inputPlaceHolder = text('placeholder', '패스워드');
  const disabled = boolean('disabled', false);
  
  return (
    <InputComponent
      inputType="password"
      inputPlaceHolder={inputPlaceHolder}
      width={width}
      disabled={disabled}
    />
  )
}
