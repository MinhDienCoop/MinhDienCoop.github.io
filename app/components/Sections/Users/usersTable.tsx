import React, { useState } from "react";
import { Table, Button, TableProps } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { copyButton } from "@/app/libs";

interface DataType {
  key: string;
  name: string;
  email: string;
  type: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "User name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Payton Reichardt",
    email: "test123@gmail.com",
    type: "Admin",
  },
  {
    key: "2",
    name: "Anna Smith",
    email: "test123@gmail.com",
    type: "Global user",
  },
  {
    key: "3",
    name: "Petter hold",
    email: "test123@gmail.com",
    type: "Silver user",
  },
];

const UsersTable: React.FC = () => {
  const [fileSelected, setFileSelected] = useState<DataType[]>([]);

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      setFileSelected(selectedRows);
    },
  };

  const handleDeleteFiles = () => {
    console.log("delete: ", fileSelected);
  };

  return (
    <div>
      {fileSelected.length > 0 && (
        <div className="flex flex-wrap items-center mb-3">
          <div className="w-full md:flex-1">
            <span>{fileSelected.length} selected</span>
            <Button type="link" className="px-1">
              in all {data.length}+ {data.length > 1 ? "users" : "user"}
            </Button>
          </div>

          <Button onClick={() => handleDeleteFiles()}>
            Delete {fileSelected.length > 1 ? "users" : "user"}
          </Button>
        </div>
      )}
      <Table
        columns={columns}
        dataSource={data}
        bordered
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
    </div>
  );
};

export default UsersTable;
