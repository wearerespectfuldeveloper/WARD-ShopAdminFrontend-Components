import React from 'react';
import Card from './Card';
import ListItem from '../../units/ListItem/ListItem'
import Icon from '../../design-tokens/SVGIcon/SVGIcon';
import { withKnobs, text, radios, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Block|Card',
  component: Card,
  decorators: [withKnobs]
}

export const card = () => {
  
  const products = <Icon icon="products"></Icon>

  return (
    <Card>
      <ListItem
        theme="light"
        border="none"
        leading={products}
      >
        테스트
      </ListItem>
    </Card>
  )
}

card.story = {
  name: 'Default'
}