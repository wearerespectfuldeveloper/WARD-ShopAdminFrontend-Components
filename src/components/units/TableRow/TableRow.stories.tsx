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
        {data: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", "자바스크립트 티셔츠"], type: "picture"},
        {data: "티셔츠", type: "text"},
        {data: "29300", type: "price"},
        {data: "0", type: "stock"},
        {data: "2020-01-20", type: "date"},
      ]}
    />
  );
};

tableRow.story = {
  name: 'Default'
};