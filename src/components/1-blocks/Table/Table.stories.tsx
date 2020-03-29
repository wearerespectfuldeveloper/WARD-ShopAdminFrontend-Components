import React from "react";
import Table from "./Table";
import TableRow from "../../2-units/TableRow/TableRow";

import { withKnobs, text, radios, boolean } from "@storybook/addon-knobs";

export default {
  title: "Block|Table",
  component: Table,
  decorators: [withKnobs]
};

export const table = () => {
  return (
    <Table>
      <TableRow
        type="head"
        cellList={[
          { type: "text", data: "상품" },
          { type: "text", data: "카테고리" },

        ]}
      />
      <TableRow
        cellList={[
          {
            type: "picture",
            data: {
              imageUrl:
                "https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
              title: "자바 티셔츠"
            }
          },
          { type: "text", data: "티셔츠" },

        ]}
      />
    </Table>
  );
};

table.story = {
  name: "Default"
};
