"use client";
import React, { useState } from "react";
import { Button, Dropdown, Radio, Tooltip, Input } from "antd";
import type { MenuProps, RadioChangeEvent } from "antd";
import { SearchOutlined, SwapOutlined } from "@ant-design/icons";

import PageTitle from "@/app/components/Common/pageTitle";
import UsersTable from "@/app/components/Sections/Users/usersTable";

export default function Users() {
  const [value, setValue] = useState<string>("date");

  const items: MenuProps["items"] = [
    {
      key: "name",
      label: "User name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "type",
      label: "Account type",
    },
  ];

  const onChangeSort = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const SortRender = () => {
    return (
      <div className="border border-solid border-[var(--border-cl)] shadow-lg p-3 rounded-lg bg-white">
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

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center">
        <div className="w-full md:flex-1">
          <PageTitle title="Users" />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button type="dashed">Export</Button>
          <Button type="dashed">Import</Button>
          <Button type="primary">Add user</Button>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex-1 relative">
            <SearchOutlined className="absolute top-[50%] -translate-y-[50%] left-3 z-[1] opacity-30 text-[18px]" />
            <Input placeholder="Searching users" className="w-full pl-8" />
          </div>
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

      <div className="mt-5">
        <UsersTable />
      </div>
    </div>
  );
}
