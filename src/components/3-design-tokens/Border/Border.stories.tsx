/** @jsx jsx */
import { jsx } from '@emotion/core';
import BorderBox from './BorderBox';
import { withKnobs, text, radios, color, select } from '@storybook/addon-knobs';
import borderToken from './border';

export default {
  component: BorderBox,
  title: 'Design ToKen|BorderBox',
  decorators: [withKnobs]
};

export const border = () => {
  const tokenList = [];

  for (let i in borderToken) {
    tokenList.push(i);
  }
  
  const border = borderToken[select('borderToken', tokenList, 'thin')];

  return (
    <BorderBox
      border={border}
    ></BorderBox>
  );
}

