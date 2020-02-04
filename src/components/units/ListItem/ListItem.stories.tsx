import React from 'react';
import ListItem from './ListItem';
import Icon from '../../design-tokens/SVGIcon/SVGIcon';

import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs';


export default {
  title: 'Unit|ListItem',
  component: ListItem,
  decorators: [withKnobs]
};

export const listItem = () => {

  const width = text('width', '250px');
  const theme = select('theme', ['light', 'dark'], 'dark');
  const listContent = text('listContent', '리스트 아이템');
  const border = select('border', ['top', 'right', 'bottom', 'left', 'none'], 'left');

  return (
    <ListItem 
      width={width}
      theme={theme}
      border={border}
    >
      {listContent}
    </ListItem>
  )
}

listItem.story = {
  name: 'Default'
};

export const listItemWithLeading = () => {

  const width = text('width', '250px');
  const listContent = text('listContent', '리스트 아이템');
  const theme = select('theme', ['light', 'dark'], 'dark');
  const border = select('border', ['top', 'right', 'bottom', 'left', 'none'], 'left');

  const leading = <Icon icon="products"></Icon>

  return (
    <ListItem 
      width={width}
      theme={theme}
      border={border}
      leading={leading}
    >
      {listContent}
    </ListItem>
  )
}


export const listItemWitTrailing = () => {

  const width = text('width', '250px');
  const listContent = text('listContent', '리스트 아이템');
  const theme = select('theme', ['light', 'dark'], 'dark');
  const border = select('border', ['top', 'right', 'bottom', 'left', 'none'], 'left');

  const trailing = <Icon icon="customers"></Icon>

  return (
    <ListItem 
      width={width}
      theme={theme}
      border={border}
      trailing={trailing}
    >
      {listContent}
    </ListItem>
  )
}