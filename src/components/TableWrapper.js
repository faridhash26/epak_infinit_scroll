import React, { useState } from "react";

import thedata from "../data/data.json";

import Table from "./Table";

const TableWrapper = () => {
  const [data, setData] = useState(thedata);
  console.log("data", data);
  return (
    <div className="table-wrapper">
      <div className="sorting-wrapper">
        <div className="input-sort">
          <label htmlFor="username">تام تغییر دهنده</label>
          <input type={"text"} id="username" />
        </div>
        <div className="input-sort">
          <label htmlFor="timestamp">تاریخ</label>
          <input type={"text"} id="timestamp" />
        </div>
        <div className="input-sort">
          <label htmlFor="ticket">نام آگهی</label>
          <input type={"text"} id="ticket" />
        </div>
        <div className="input-sort">
          <label htmlFor="field">نام فیلد</label>
          <input type={"text"} id="field" />
        </div>
      </div>
      <div>
        <Table data={data} />
      </div>
    </div>
  );
};

export default TableWrapper;
