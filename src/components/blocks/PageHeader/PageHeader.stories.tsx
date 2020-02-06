import React from 'react';
import PageHeader from './PageHeader';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Block|PageHeader',
  component: PageHeader,
  decorators: [withKnobs]
};

export const pageHeader = () => {
  return (
    <PageHeader>
      
    </PageHeader>
  )
}

PageHeader.story = {
  name: 'Default'
};