import React from 'react';
import TableRow from './TableRow';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Unit|TableRow',
  component: TableRow,
  decorators: [withKnobs]
};

export const tableRow = () => {
  return (
    <TableRow
      cellList={[
        {text: "테스트1"},
        {text: "테스트2"},
        {text: "테스트3"},
        {text: "테스트4"},
        {text: "테스트5"},

      ]}
    />
  )
}

tableRow.story = {
  name: 'Default'
};