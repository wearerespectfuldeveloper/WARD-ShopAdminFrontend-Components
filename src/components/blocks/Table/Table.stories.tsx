import React from "react";
import Table from "./Table";
import TableRow from "../../units/TableRow/TableRow";

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
          { text: "테스트1" },
          { text: "테스트2" },
          { text: "테스트3" },
          { text: "테스트4" },
          { text: "테스트5" }
        ]}
      />
      <TableRow
        cellList={[
          { text: "테스트1" },
          { text: "테스트2" },
          { text: "테스트3" },
          { text: "테스트4" },
          { text: "테스트5" }
        ]}
      />
      <TableRow
        cellList={[
          { text: "테스트1" },
          { text: "테스트2" },
          { text: "테스트3" },
          { text: "테스트4" },
          { text: "테스트5" }
        ]}
      />
      <TableRow
        cellList={[
          { text: "테스트1" },
          { text: "테스트2" },
          { text: "테스트3" },
          { text: "테스트4" },
          { text: "테스트5" }
        ]}
      />
    </Table>
  );
};

table.story = {
  name: "Default"
};
