import React from 'react';
import PageHeader from './PageHeader';
import Icon from '../../design-tokens/SVGIcon/SVGIcon'
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Block|PageHeader',
  component: PageHeader,
  decorators: [withKnobs],
  parameters: {
    docs: {
      inlineStories: false
    }
  }
};

export const pageHeader = () => {
  const leftElement = <Icon icon="menu"></Icon>
  const rightElement = <Icon icon="customers"></Icon>

  return (
    <div style={{height: "150vh"}}>
      <PageHeader
        backgroundColor="white"
        leftElement={leftElement}
        rightElement={rightElement}
      />  
    </div>
    
  )
}

pageHeader.story = {
  name: 'Default'
};