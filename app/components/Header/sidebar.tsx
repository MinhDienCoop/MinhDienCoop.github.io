"use client";
import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  BarChartOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Logo from "./logo";

interface SideBarProps {
  collapsed: boolean;
}

const SideBar = ({ collapsed }: SideBarProps) => {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="p-3 h-screen overflow-auto hide-scrollbar"
    >
      <div
        className={`p-[4px] ${
          collapsed ? "mb-0" : "mb-10"
        } w-full h-[120px] sticky top-[4px]`}
      >
        <Logo />
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/admin"]}
        items={[
          {
            key: "/admin",
            icon: <BarChartOutlined />,
            label: "Dashboard",
          },
          {
            key: "/files",
            icon: <SnippetsOutlined />,
            label: "Files",
          },
          {
            key: "/user",
            icon: <UserOutlined />,
            label: "Users",
          },
        ]}
      />
    </Layout.Sider>
  );
};

export default SideBar;
