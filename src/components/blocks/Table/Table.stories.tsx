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
          { text: "상품" },
          { text: "카테고리" },
          { text: "가격" },
          { text: "재고상태" },
          { text: "등록날짜" }
        ]}
      />
      <TableRow
        cellList={[
          { text: "타입스크립트 바지" },
          { text: "리액트 셔츠" },
          { text: "자바 스티커" },
          { text: "마이시퀄 바지" },
          { text: "스프링 티셔츠" }
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
