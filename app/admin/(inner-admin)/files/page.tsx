"use client";
import React, { useState } from "react";
import { Button, Dropdown, Radio, Tooltip, Input, Upload } from "antd";
import type { MenuProps, RadioChangeEvent, UploadProps } from "antd";
import { PlusOutlined, SearchOutlined, SwapOutlined } from "@ant-design/icons";

import FilesTable from "@/app/components/Sections/Files/filesTable";
import PageTitle from "@/app/components/Common/pageTitle";

export default function Files() {
  const [value, setValue] = useState<string>("date");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const items: MenuProps["items"] = [
    {
      key: "date",
      label: "Date",
    },
    {
      key: "fileName",
      label: "File name",
    },
    {
      key: "FileSize",
      label: "File size",
    },
  ];

  const onChangeSort = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const SortRender = () => {
    return (
      <div className="border border-solid border-[var(--border-cl)] shadow-lg p-3 rounded-lg">
        <Radio.Group onChange={onChangeSort} value={value}>
          {items.map((item: any) => (
            <Radio key={item.key} value={item.key} className="block">
              {item.label}
            </Radio>
          ))}
        </Radio.Group>
      </div>
    );
  };

  const props: UploadProps = {
    multiple: true,
    showUploadList: false,
  };

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center">
        <div className="w-full md:flex-1">
          <PageTitle title="Files" />
        </div>
        <Upload {...props}>
          <Button type="primary">Upload</Button>
        </Upload>
      </div>

      <div>
        {!showFilter && (
          <div className="flex flex-wrap items-center">
            <div className="flex-1 flex flex-wrap items-center gap-3">
              <span className="bg-[#ebebeb] rounded-lg py-1 px-3 leading-[24px]">
                All
              </span>
              <Button type="text" className="flex items-center py-1 px-3">
                <PlusOutlined />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                className="flex items-center py-1 px-3"
                onClick={() => setShowFilter(true)}
              >
                <SearchOutlined />
                <span className="relative w-[20px] h-[13px] inline-block m-0">
                  <span className="absolute top-0 left-0 right-0 mx-auto w-[85%] h-[1px] bg-black inline-block"></span>
                  <span className="absolute top-1/2 left-0 right-0 mx-auto w-[60%] h-[1px] bg-black inline-block"></span>
                  <span className="absolute bottom-0 left-0 right-0 mx-auto w-[30%] h-[1px] bg-black inline-block"></span>
                </span>
              </Button>
              <Dropdown
                dropdownRender={() => SortRender()}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Tooltip placement="top" title="Sort">
                  <Button className="py-1 px-3 flex items-center">
                    <SwapOutlined className="rotate-90" />
                  </Button>
                </Tooltip>
              </Dropdown>
            </div>
          </div>
        )}

        {showFilter && (
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Input placeholder="Searching in All" className="flex-1" />
              <Button type="text" onClick={() => setShowFilter(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5">
        <FilesTable />
      </div>
    </div>
  );
}
