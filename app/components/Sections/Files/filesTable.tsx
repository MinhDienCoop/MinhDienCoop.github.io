import React, { useState } from "react";
import { Table, Button, TableProps } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { copyButton } from "@/app/libs";
import Link from "next/link";

interface DataType {
  key: string;
  fileName: string;
  createdAt: string;
  size: string;
  fileType: any;
  link: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "File name",
    dataIndex: "fileName",
    key: "fileName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date Added",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "References",
    key: "fileType",
    dataIndex: "fileType",
  },
  {
    title: "Link",
    key: "link",
    dataIndex: "link",
    align: "center",
    render: (text) => (
      <Button
        className="py-1 px-3 flex items-center mx-auto"
        onClick={() => copyButton("file link", text)}
      >
        <LinkOutlined />
      </Button>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    fileName: "image1_022b2d89-8207-46a9-ad66-0684c975622f",
    createdAt: "Jan 9",
    size: "6.12 KB",
    fileType: " 1 product",
    link: "#",
  },
  {
    key: "2",
    fileName: "image2_b21247f2-4397-4e32-b3a4-93cbd1e8a0c8",
    createdAt: "Jan 9",
    size: "5.26 KB",
    fileType: "2 banner",
    link: "#",
  },
  {
    key: "3",
    fileName: "image2_e6cb628b-75cf-4d6c-bdab-b69501520f73",
    createdAt: "Jan 9",
    size: "8.44 KB",
    fileType: "1 product",
    link: "#",
  },
];

const FilesTable: React.FC = () => {
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
              in all {data.length}+ files
            </Button>
          </div>

          <Button onClick={() => handleDeleteFiles()}>
            Delete {fileSelected.length > 1 ? "files" : "file"}
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

export default FilesTable;
