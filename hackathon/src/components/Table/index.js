import React from "react";
import { Table } from "antd";

export default function TableComponent(props) {
  const { dataSource, columns } = props;
  return (
    <React.Fragment>
      <Table dataSource={dataSource} columns={columns} {...props} />
    </React.Fragment>
  );
}
