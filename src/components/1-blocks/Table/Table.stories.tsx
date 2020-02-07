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
          { type: "text", data: "가격" },
          { type: "text", data: "재고상태" },
          { type: "text", data: "등록날짜" }
        ]}
      />
      <TableRow
        cellList={[
          { type: "picture", data: ["https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80", "자바 티셔츠"] },
          { type: "text", data: "티셔츠" },
          { type: "price", data: "29300" },
          { type: "stock", data: "10" },
          { type: "date", data: "2020-01-20" }
        ]}
      />
      <TableRow
        cellList={[
          { type: "picture", data: ["https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80", "자바 티셔츠"] },
          { type: "text", data: "티셔츠" },
          { type: "price", data: "29300" },
          { type: "stock", data: "200" },
          { type: "date", data: "2020-01-20" }
        ]}
      />
      <TableRow
        cellList={[
          { type: "picture", data: ["https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80", "자바 티셔츠"] },
          { type: "text", data: "티셔츠" },
          { type: "price", data: "29300" },
          { type: "stock", data: "0" },
          { type: "date", data: "2020-01-20" }
        ]}
      />
      <TableRow
        cellList={[
          { type: "picture", data: ["https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80", "자바 티셔츠"] },
          { type: "text", data: "티셔츠" },
          { type: "price", data: "29300" },
          { type: "stock", data: "60" },
          { type: "date", data: "2020-01-20" }
        ]}
      />
    </Table>
  );
};

table.story = {
  name: "Default"
};
